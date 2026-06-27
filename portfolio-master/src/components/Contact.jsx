import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerFast, viewportOnce } from "../utils/animations";

const contactItems = [
  { icon: <Mail size={20} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <Phone size={20} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <MapPin size={20} />, label: "Location", value: personalInfo.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Get In Touch
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Me
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto">
          Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h3 variants={fadeLeft} className="text-white font-semibold text-xl mb-6">
            Let's Connect
          </motion.h3>

          <motion.div className="space-y-4 mb-8" variants={staggerFast}>
            {contactItems.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeLeft}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0"
                >
                  {item.icon}
                </motion.div>
                <div className="min-w-0">
                  <p className="text-gray-600 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 font-medium text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeLeft}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-6"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              I'm currently open to new opportunities. Whether it's a full-time role, freelance
              project, or just a chat — feel free to reach out!
            </p>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${personalInfo.email}`;
          }}
          className="card space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { label: "Name", type: "text", placeholder: "Your name" },
              { label: "Email", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <motion.div key={field.label} whileFocus={{ scale: 1.01 }}>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">{field.label}</label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                />
              </motion.div>
            ))}
          </div>

          <div>
            <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Subject</label>
            <input
              type="text"
              required
              placeholder="Project inquiry / Job opportunity"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
          >
            <Send size={16} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
