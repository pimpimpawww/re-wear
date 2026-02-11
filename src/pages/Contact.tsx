import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    console.log("Form submitted:", form);
  };

  return (
    <PageTransition>
      <section className="min-h-screen px-6 pt-28 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-body mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-4"
          >
            Let's Work Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground font-body text-base leading-relaxed mb-12"
          >
            Feel free to reach out for collaboration, freelance projects, or creative discussions.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Send Message
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground font-body mb-4">
              Find Me On
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-body transition-colors duration-300">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-body transition-colors duration-300">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a href="mailto:hello@najwaaulia.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-body transition-colors duration-300">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
