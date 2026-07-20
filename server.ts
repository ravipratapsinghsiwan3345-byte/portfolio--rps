import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

let resolvedFilename = "";
let resolvedDirname = "";

try {
  // @ts-ignore
  if (import.meta && import.meta.url) {
    resolvedFilename = fileURLToPath(import.meta.url);
    resolvedDirname = path.dirname(resolvedFilename);
  } else {
    resolvedFilename = __filename;
    resolvedDirname = __dirname;
  }
} catch (e) {
  resolvedFilename = __filename;
  resolvedDirname = __dirname;
}

const __filename = resolvedFilename;
const __dirname = resolvedDirname;

const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || "";
let isMongoConnected = false;

mongoose.set('bufferCommands', false); // CRITICAL: fail fast, don't hang

if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB successfully.");
      isMongoConnected = true;
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
} else {
  console.log("MONGODB_URI not provided. Contact submissions will save to local JSON storage.");
}

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// Fallback JSON-based storage
const saveMessageLocally = (data: { name: string; email: string; subject: string; message: string }) => {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  const filePath = path.join(dataDir, "messages.json");
  let messages = [];
  if (fs.existsSync(filePath)) {
    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      messages = JSON.parse(fileContent);
    } catch (e) {
      console.error("Error reading messages file, resetting:", e);
    }
  }
  messages.push({ ...data, createdAt: new Date().toISOString() });
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), "utf-8");
};

// --- API ROUTES ---

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Contact Form Submission
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Server-side validation
    if (!name || !email || !subject || !message) {
      res.status(400).json({ error: "All fields are required." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: "Please enter a valid email address." });
      return;
    }

    const contactData = { name, email, subject, message };

    if (isMongoConnected) {
      await Contact.create(contactData);
      res.status(201).json({ success: true, message: "Message sent and stored in MongoDB database successfully." });
    } else {
      saveMessageLocally(contactData);
      res.status(201).json({ success: true, message: "Message sent and stored locally in JSON storage successfully." });
    }
  } catch (error: any) {
    console.error("Contact Form error:", error);
    res.status(500).json({ error: "An error occurred while saving your message. Please try again." });
  }
});

// GitHub API Proxy (prevents rate limiting and keeps token secure)
app.get("/api/github-stats", async (req, res) => {
  const username = "ravipratapsinghsiwan3345-byte";
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

  const headers: any = {
    "User-Agent": "Ravi-Portfolio-App"
  };
  if (GITHUB_TOKEN) {
    headers["Authorization"] = `token ${GITHUB_TOKEN}`;
  }

  // Elegant fallback data in case GitHub API fails, is rate limited, or during sandbox offline states
  const fallbackData = {
    username,
    name: "Ravi Pratap Singh",
    avatarUrl: "https://avatars.githubusercontent.com/u/148259074?v=4", // fallback standard GitHub format
    bio: "Full Stack MERN Developer | Software Engineer | C/C++ Enthusiast",
    followers: 12,
    following: 15,
    publicRepos: 18,
    starsCount: 8,
    languages: [
      { name: "JavaScript", percentage: 42, color: "#f1e05a" },
      { name: "C++", percentage: 28, color: "#f34b7d" },
      { name: "C", percentage: 15, color: "#555555" },
      { name: "HTML/CSS", percentage: 10, color: "#563d7c" },
      { name: "Python", percentage: 5, color: "#3572A5" }
    ],
    recentRepos: [
      {
        name: "MERN-Portfolio",
        description: "A premium, luxury, highly interactive developer portfolio built with React, Node, Express and MongoDB.",
        stars: 3,
        forks: 1,
        language: "JavaScript",
        url: `https://github.com/${username}/MERN-Portfolio`
      },
      {
        name: "E-Commerce-Platform",
        description: "A secure, fully featured REST API and React front-end for online retail with payment integration.",
        stars: 2,
        forks: 0,
        language: "JavaScript",
        url: `https://github.com/${username}/E-Commerce-Platform`
      },
      {
        name: "Data-Structures-Algorithms",
        description: "A collection of complex data structures and algorithms solved in C++ with detailed analysis.",
        stars: 2,
        forks: 0,
        language: "C++",
        url: `https://github.com/${username}/Data-Structures-Algorithms`
      },
      {
        name: "Task-Management-System",
        description: "Collaborative real-time board system with team sharing and subtask metrics.",
        stars: 1,
        forks: 0,
        language: "JavaScript",
        url: `https://github.com/${username}/Task-Management-System`
      }
    ],
    isMock: true
  };

  try {
    // 1. Fetch user profile
    const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!userRes.ok) {
      throw new Error(`User stats response error: ${userRes.status}`);
    }
    const userData = await userRes.json();

    // 2. Fetch user repos
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers });
    if (!reposRes.ok) {
      throw new Error(`Repos response error: ${reposRes.status}`);
    }
    const reposData = await reposRes.json();

    // Sum stars & count languages
    let totalStars = 0;
    const langBytes: { [key: string]: number } = {};
    const repos: any[] = [];

    reposData.forEach((repo: any) => {
      if (!repo.fork) {
        totalStars += repo.stargazers_count;
        if (repo.language) {
          langBytes[repo.language] = (langBytes[repo.language] || 0) + 1;
        }
        repos.push({
          name: repo.name,
          description: repo.description,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          url: repo.html_url,
          updatedAt: repo.updated_at
        });
      }
    });

    // Calculate language percentages
    const totalLangCount = Object.values(langBytes).reduce((a, b) => a + b, 0);
    const colors: { [key: string]: string } = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      "C++": "#f34b7d",
      C: "#555555",
      Python: "#3572A5",
      HTML: "#e34c26",
      CSS: "#563d7c",
      "C#": "#178600"
    };

    const languages = Object.keys(langBytes).map(lang => {
      const pct = totalLangCount > 0 ? Math.round((langBytes[lang] / totalLangCount) * 100) : 0;
      return {
        name: lang,
        percentage: pct,
        color: colors[lang] || "#cccccc"
      };
    }).sort((a, b) => b.percentage - a.percentage);

    // Get top 4 starred/updated repos
    const recentRepos = repos
      .sort((a, b) => b.stars - a.stars || new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 4);

    res.json({
      username,
      name: userData.name || "Ravi Pratap Singh",
      avatarUrl: userData.avatar_url,
      bio: userData.bio || "Full Stack MERN Developer",
      followers: userData.followers,
      following: userData.following,
      publicRepos: userData.public_repos,
      starsCount: totalStars,
      languages: languages.length > 0 ? languages : fallbackData.languages,
      recentRepos: recentRepos.length > 0 ? recentRepos : fallbackData.recentRepos,
      isMock: false
    });
  } catch (err: any) {
    console.warn("GitHub Proxy API failed, returning cached fallback data:", err.message);
    res.json(fallbackData);
  }
});


// --- VITE DEV/PROD MIDDLEWARE ---

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;
