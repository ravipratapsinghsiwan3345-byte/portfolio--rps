import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MessageSquare, Send, Check, AlertCircle, Loader2, MapPin, Clock } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    // Dynamic front-end quick validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(result.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setError("Unable to connect to the backend server. Saving locally failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Visual background ambient glow gradients */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <div className="inline-flex items-center space-x-2 text-accent-purple font-mono text-xs tracking-widest uppercase mb-3">
            <Mail className="w-4 h-4" />
            <span>05 / INITIATE CONVERSATION</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Secure <span className="text-gradient-purple-blue">Communications Portal</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Contact Details (4 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">Let's build something remarkable.</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you're looking to contract a senior architect for backend database scaling, hire a dedicated full-stack engineer to build a React application, or simply want to speak about system design, my inbox is open.
              </p>
            </div>

            <div className="space-y-6">
              {/* Card - Email */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-500 uppercase mb-1">Direct Email</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-white hover:text-accent-purple transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Card - Phone */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-500 uppercase mb-1">Direct Phone</h4>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                    +91 {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Card - Location */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-500 uppercase mb-1">HQ Location</h4>
                  <p className="text-sm font-semibold text-white">Siwan, Bihar, India (Open to Worldwide Remote)</p>
                </div>
              </div>

              {/* Card - SLA */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-500 uppercase mb-1">Response SLA</h4>
                  <p className="text-sm font-semibold text-white">Under 24 Hours Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-8 sm:p-10 relative"
            >
              <h3 className="font-display font-semibold text-lg text-white mb-8 flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-accent-purple" />
                <span>Submit Transmission Securely</span>
              </h3>

              {/* Feedback banners */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs sm:text-sm mb-6"
                >
                  <Check className="w-5 h-5 shrink-0 bg-emerald-500 text-dark-bg rounded-full p-1 font-bold" />
                  <span>{success}</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs sm:text-sm mb-6"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full px-4 py-3 bg-white/5 focus:bg-white/10 hover:bg-white/10 border border-white/10 focus:border-accent-purple rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all disabled:opacity-50"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full px-4 py-3 bg-white/5 focus:bg-white/10 hover:bg-white/10 border border-white/10 focus:border-accent-purple rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="e.g. Contract Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 bg-white/5 focus:bg-white/10 hover:bg-white/10 border border-white/10 focus:border-accent-purple rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all disabled:opacity-50"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Message Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your objectives, timeline, stack, or general question..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 bg-white/5 focus:bg-white/10 hover:bg-white/10 border border-white/10 focus:border-accent-purple rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue hover:from-purple-600 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-lg shadow-accent-purple/20 transition-all duration-300 hover:scale-[1.01] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
