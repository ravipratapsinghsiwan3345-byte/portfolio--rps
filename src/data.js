
import profileImg from "./assets/images/ravi_profile_1783956205241.jpg";

export const PERSONAL_INFO = {
  name: "Ravi Pratap Singh",
  title: "Full Stack & MERN Developer",
  headline: "Crafting High-Performance Web Applications & Enterprise-Scale APIs",
  description: "Experienced software developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), robust microservices, and state engines. Committed to writing secure, modular code and designing premium visual user experiences.",
  resumeUrl: "#",
  email: "ravipratapsinghsiwan3345@gmail.com",
  phone: "7250091153",
  github: "https://github.com/ravipratapsinghsiwan3345-byte",
  linkedin: "https://www.linkedin.com/in/ravi-pratap-singh-004652250/",
  profileImage: "https://avatars.githubusercontent.com/u/235720719?v=4"
};

export const SKILLS = [
  // Programming Languages
  { name: "C", category: "programming", level: 90, iconName: "Terminal" },
  { name: "C++", category: "programming", level: 95, iconName: "Cpu" },
  { name: "JavaScript", category: "programming", level: 94, iconName: "FileCode" },
  { name: "TypeScript", category: "programming", level: 92, iconName: "Code" },
  { name: "Python", category: "programming", level: 85, iconName: "Code" },
  { name: "HTML", category: "programming", level: 95, iconName: "FileHtml" },
  { name: "CSS", category: "programming", level: 92, iconName: "Layers" },

  // Development Frameworks & Stack
  { name: "MERN Stack", category: "development", level: 96, iconName: "Layers" },
  { name: "React.js", category: "development", level: 95, iconName: "ReactIcon" },
  { name: "Node.js", category: "development", level: 92, iconName: "Server" },
  { name: "Express.js", category: "development", level: 94, iconName: "Zap" },
  { name: "MongoDB", category: "development", level: 90, iconName: "Database" },
  { name: "REST API Design", category: "development", level: 95, iconName: "Globe" },
  { name: "Tailwind CSS", category: "development", level: 95, iconName: "Palette" },

  // Devops & Security & Other
  { name: "Docker", category: "other", level: 88, iconName: "Box" },
  { name: "CI/CD Pipeline", category: "other", level: 85, iconName: "GitBranch" },
  { name: "Cyber Security", category: "other", level: 82, iconName: "Shield" },
  { name: "Data Structures & Algorithms", category: "other", level: 94, iconName: "Binary" },
  { name: "Git & GitHub", category: "other", level: 92, iconName: "Github" }
];

export const PROJECTS = [
  {
    id: "airbnb",
    title: "Airbnb App",
    description: "A premium holiday rental booking simulator featuring map-based geographical discovery, room type filters, live cost-estimations, and rich property details panels.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "lucide-react"],
    demoUrl: "https://airbnb-clone.example.com",
    githubUrl: "https://github.com/ravipratapsinghsiwan3345-byte/airbnb-app",
    features: [
      "Dynamic cost calculators with cleaning fee and service charge models",
      "Interactive room listings grouped by cozy cabins, modern apartments, and beachfront villas",
      "Framer Motion sliding cards with detailed room specifications and check-in workflows"
    ],
    category: "Full Stack"
  },
  {
    id: "agritech",
    title: "Agri Tech App",
    description: "A comprehensive IoT farming telemetry dashboard tracking soil health indices, ambient moisture levels, crop growth metrics, and custom automation trigger controllers.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "Recharts", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://agri-smart.example.com",
    githubUrl: "https://github.com/ravipratapsinghsiwan3345-byte/agri-tech-platform",
    features: [
      "Dynamic SVG gauges modeling immediate soil water percentages and mineral profiles",
      "Interactive crop scheduling charts with calculated harvest windows and yield curves",
      "Automated system state toggles simulating water pump activations and canopy shading triggers"
    ],
    category: "Full Stack"
  },
  {
    id: "restaurant",
    title: "Restaurant App",
    description: "A micro-frontend dining ordering panel with real-time checkout computations, diet sorting, cart states, and simulated order delivery tracking.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Local Storage"],
    demoUrl: "https://dine-master.example.com",
    githubUrl: "https://github.com/ravipratapsinghsiwan3345-byte/restaurant-app",
    features: [
      "Reactive order aggregation compiling item quantities, sub-totals, and service tax",
      "Seamless categorical sorting filtering vegan, non-vegetarian, and gluten-free recipes",
      "Live order-dispatch visualizer tracking dispatch stages from kitchen prep to arrival"
    ],
    category: "Frontend"
  },
  {
    id: "ecommerce",
    title: "E-Commerce App",
    description: "An elegant, fast digital storefront featuring multi-tier product category queries, shopping cart engines, voucher activations, and Stripe-like checkout steps.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    tech: ["MERN Stack", "React.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://commerce-apex.example.com",
    githubUrl: "https://github.com/ravipratapsinghsiwan3345-byte/ecommerce-platform",
    features: [
      "Fluid product lists with real-time stock-counter decrements upon adding items",
      "Interactive promo code engine validating active discounts and computing deductions",
      "Fully responsive checkout simulator complete with mock card tokenization details"
    ],
    category: "Full Stack"
  },
  {
    id: "stockmarket",
    title: "Stock Market App",
    description: "A real-time financial markets analyzer tracking price tickers, custom stock buy/sell allocations, and rendering responsive trendline charts.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "Recharts", "Tailwind CSS", "Data Structures"],
    demoUrl: "https://ticker-apex.example.com",
    githubUrl: "https://github.com/ravipratapsinghsiwan3345-byte/stock-market-app",
    features: [
      "Dynamic price fluctuations triggered at 1.5s intervals simulating market ticks",
      "Custom responsive line charts tracing performance histories of tech indices",
      "Interactive buy/sell panel calculating portfolio liquidity and active asset yields"
    ],
    category: "System"
  },
  {
    id: "linkedin",
    title: "LinkedIn App",
    description: "A professional social stream containing dynamic post creations, connection feed updates, instant custom liking counters, and rich comment logs.",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "lucide-react"],
    demoUrl: "https://professional-feed.example.com",
    githubUrl: "https://github.com/ravipratapsinghsiwan3345-byte/linkedin-clone",
    features: [
      "Dynamic text posts pre-pended instantly with custom transition animations",
      "Reactive interaction engine tracking user reactions and commenting records",
      "Responsive navigation sidebar summarizing networking connections and job proposals"
    ],
    category: "Full Stack"
  },
  {
    id: "chatgpt",
    title: "ChatGPT App",
    description: "A sleek conversational AI assistant simulation with prompt presets, realistic typing indicators, message thread states, and customized bot answers.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "lucide-react"],
    demoUrl: "https://gpt-helper.example.com",
    githubUrl: "https://github.com/ravipratapsinghsiwan3345-byte/chatgpt-app",
    features: [
      "Realistic message typing simulator mirroring natural chat streams",
      "Active chat threads logging individual conversation histories in side drawers",
      "Responsive code blocks decorated with modern markdown copy capabilities"
    ],
    category: "Frontend"
  },
  {
    id: "collegecrm",
    title: "College CRM",
    description: "An academic operations portal featuring dynamic student rosters, GPA tables, course syllabus modules, and performance tracker charts.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    tech: ["MERN Stack", "React.js", "Express.js", "MongoDB", "Recharts"],
    demoUrl: "https://crm-college.example.com",
    githubUrl: "https://github.com/ravipratapsinghsiwan3345-byte/college-crm-system",
    features: [
      "Responsive students table supporting real-time grade edits and immediate GPA updates",
      "Academic performance charts compiling batch scores across multi-term courses",
      "Granular division filters isolating rosters by branch, enrollment year, and grades"
    ],
    category: "Full Stack"
  },
  {
    id: "hospital",
    title: "Hospital Management System",
    description: "A healthcare portal logging active medical records, booking clinical sessions, and rendering real-time doctor availability dashboards.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    tech: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://health-pulse.example.com",
    githubUrl: "https://github.com/ravipratapsinghsiwan3345-byte/hospital-system",
    features: [
      "Interactive doctor scheduling lists with immediate check-in status indicators",
      "Vitals logging forms converting weights, temperatures, and blood pressures into records",
      "Sleek billing modules consolidating prescription fees and consult rates"
    ],
    category: "Full Stack"
  },
  {
    id: "uber",
    title: "Uber App",
    description: "A fast urban ride simulation dashboard modeling ride route selections, driver allocation timers, distance costs, and payment confirmation screens.",
    image: "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "lucide-react"],
    demoUrl: "https://ride-apex.example.com",
    githubUrl: "https://github.com/ravipratapsinghsiwan3345-byte/uber-app-clone",
    features: [
      "Dynamic vehicle tiers modeling UberX, UberXL, and luxury black rides",
      "Animated progress driver maps with automated trip ETA countdown modules",
      "Responsive rating modals collecting ride feedback and tip allocation models"
    ],
    category: "Full Stack"
  }
];

export const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "PravRaha",
    location: "Remote / Bihar, India",
    duration: "2024 - Present",
    description: [
      "Engineered high-quality custom web solutions using the MERN stack (MongoDB, Express, React, Node.js) for pravraha.com client portfolios.",
      "Optimized client loading times by 40% using code-splitting, custom hooks, and precise Tailwind CSS utility structures.",
      "Developed secure, scalable REST APIs validating JSON payloads and enforcing rigorous route parameters for transaction pipelines.",
      "Leveraged Git and Docker to streamline containerized development across team workspaces."
    ],
    tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Git", "Docker", "Tailwind CSS", "REST APIs"]
  },
  {
    role: "Associate Developer (Internship)",
    company: "Software Systems",
    location: "Patna, Bihar",
    duration: "2023 - 2024",
    description: [
      "Built interactive frontend dashboards and responsive user experiences for database tools using HTML, CSS, JavaScript, and React.",
      "Configured automated Git branching strategies and managed core repository pipelines.",
      "Conducted thorough testing of API endpoints using Postman, finding and patching critical query bottlenecks."
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "REST APIs", "Git", "GitHub"]
  }
];

export const CERTIFICATIONS = [
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    date: "Jun 09, 2026",
    credentialUrl: "https://www.netacad.com/profile?tab=badges",
    skills: ["OSPFv2", "Network Security", "IPv4 ACLs", "NAT", "WAN", "QoS", "Virtualization", "SDN"],
    description: "Enterprise routing, multi-access networks, network telemetry, threat mitigation via ACLs, QoS design, and software-defined networking."
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "Jun 09, 2026",
    credentialUrl: "https://www.netacad.com/profile?tab=badges",
    skills: ["VLANs", "STP", "EtherChannel", "FHRPs", "DHCPv4/v6", "WLANs", "WLC Security", "Static Routing"],
    description: "Configuring and troubleshooting VLANs, redundant trunking protocols, wireless controller infrastructures, and routing protocols."
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy & OpenEDG Python Institute",
    date: "Jun 11, 2026",
    credentialUrl: "https://www.netacad.com/profile?tab=badges",
    skills: ["Python 3", "OOP", "Modules & Packages", "Exception Handling", "File I/O", "PCAP Track"],
    description: "Advanced multi-module programming, object-oriented software design paradigms, exception architectures, and package distribution."
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "Jun 10, 2026",
    credentialUrl: "https://www.netacad.com/profile?tab=badges",
    skills: ["Data Analytics", "AI & Machine Learning", "Data Exploration", "Statistics"],
    description: "Core tenets of data exploration, the role of data science in predictive modeling and artificial intelligence, and analytical workflows."
  },
  {
    title: "Cisco Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialUrl: "https://www.netacad.com/profile?tab=badges",
    skills: ["Networking Basics", "IP Addressing", "Subnetting", "Packet Tracer"],
    description: "Foundational architecture of computer networks, physical and logical addressing schemas, and packet routing essentials."
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2023",
    credentialUrl: "https://www.netacad.com/profile?tab=badges",
    skills: ["Threat Intel", "Cryptography", "Network Protection", "Security Auditing"],
    description: "Core security frameworks, malware defense, public-key cryptography configurations, and firewalls deployment rules."
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2023",
    credentialUrl: "https://www.netacad.com/profile?tab=badges",
    skills: ["Security Basics", "Social Engineering", "Phishing Mitigation", "Data Privacy"],
    description: "Personal and organizational digital safety basics, identifying social engineering schemes, and defensive strategies."
  },
  {
    title: "NDG Linux Unhatched Certificate",
    issuer: "Cisco Networking Academy / NDG",
    date: "2023",
    credentialUrl: "https://www.netacad.com/profile?tab=badges",
    skills: ["Linux CLI", "Bash Shell", "File Permissions", "User Administration"],
    description: "Fundamental terminal commands, shell operations, system settings control, and administrative file privileges."
  }
];
