import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { fadeUp, scaleIn, staggerContainer, staggerFast, viewportOnce } from "../utils/animations";

const categories = [
  { label: "Frontend", key: "frontend", color: "from-blue-500 to-cyan-500" },
  { label: "Backend", key: "backend", color: "from-purple-500 to-blue-500" },
  { label: "Tools & Technologies", key: "tools", color: "from-cyan-500 to-teal-500" },
  { label: "Professional Skills", key: "professional", color: "from-orange-500 to-pink-500" },
];

// SVG icons as components — no extra package needed
const TechIcons = {
  MongoDB: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M16 2C16 2 9 10.5 9 18a7 7 0 0014 0C23 10.5 16 2 16 2z" fill="#47A248"/>
      <path d="M16 2v26" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 28c0 0-2-2-2-4" stroke="#B8C4BB" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  "Express.js": () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <rect width="32" height="32" rx="6" fill="#fff" fillOpacity="0.05"/>
      <text x="4" y="22" fontSize="11" fontWeight="bold" fill="#fff" fontFamily="monospace">exp</text>
    </svg>
  ),
  "React.js": () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <ellipse cx="16" cy="16" rx="4" ry="4" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  "Node.js": () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" fill="#339933" fillOpacity="0.2" stroke="#339933" strokeWidth="1.5"/>
      <path d="M16 8v16M10 11.5l6 3.5 6-3.5" stroke="#339933" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Tailwind CSS": () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M8 13c1-4 3.5-6 7-6 5.5 0 6 4 9 4.5 2 .4 3.5-.5 4.5-2.5C27 13 24.5 19 21 19c-5.5 0-6-4-9-4.5C10 14.1 8.5 15.5 8 18c0 0-2-1-2-5h2z" fill="#38BDF8"/>
      <path d="M3 21c1-4 3.5-6 7-6 5.5 0 6 4 9 4.5 2 .4 3.5-.5 4.5-2.5C22 21 19.5 27 16 27c-5.5 0-6-4-9-4.5C5 22.1 3.5 23.5 3 26c0 0-2-1-2-5h2z" fill="#38BDF8" fillOpacity="0.6"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M10 22.5c.6 1 1.4 1.7 2.8 1.7 1.2 0 2-.6 2-1.4 0-1-.8-1.3-2.1-1.9l-.7-.3c-2.1-.9-3.5-2-3.5-4.4 0-2.2 1.7-3.8 4.3-3.8 1.9 0 3.2.7 4.2 2.4l-2.3 1.5c-.5-.9-1-1.3-1.9-1.3-.9 0-1.4.5-1.4 1.2 0 .8.5 1.2 1.7 1.7l.7.3c2.5 1.1 3.9 2.1 3.9 4.5 0 2.6-2 4-4.7 4-2.6 0-4.3-1.2-5.1-2.9l2.1-1.3zM21 12.8h2.7v7.3c0 2.6-1.5 3.8-3.7 3.8-.5 0-1.2-.1-1.7-.3l.4-2.3c.3.1.7.2 1 .2.9 0 1.3-.4 1.3-1.5v-7.2z" fill="#000"/>
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M29.5 14.5L17.5 2.5a1.7 1.7 0 00-2.4 0l-2.4 2.4 3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 11-1.2 1.2l-2.7-2.7v7a2 2 0 11-1.6 0V11.8a2 2 0 01-1.1-2.6L11.7 6.4 2.5 15.6a1.7 1.7 0 000 2.4l12 12a1.7 1.7 0 002.4 0l12.6-12.6a1.7 1.7 0 000-2.9z" fill="#F05032"/>
    </svg>
  ),
  "REST API": () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <rect x="2" y="10" width="28" height="12" rx="6" stroke="#60A5FA" strokeWidth="1.5"/>
      <circle cx="10" cy="16" r="2.5" fill="#60A5FA"/>
      <circle cx="16" cy="16" r="2.5" fill="#60A5FA" fillOpacity="0.6"/>
      <circle cx="22" cy="16" r="2.5" fill="#60A5FA" fillOpacity="0.3"/>
      <path d="M26 7l3 3-3 3M6 7L3 10l3 3" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const techStack = [
  { name: "MongoDB", bg: "hover:bg-green-500/10 hover:border-green-500/40" },
  { name: "Express.js", bg: "hover:bg-gray-500/10 hover:border-gray-400/40" },
  { name: "React.js", bg: "hover:bg-cyan-500/10 hover:border-cyan-400/40" },
  { name: "Node.js", bg: "hover:bg-green-600/10 hover:border-green-600/40" },
  { name: "Tailwind CSS", bg: "hover:bg-sky-500/10 hover:border-sky-400/40" },
  { name: "JavaScript", bg: "hover:bg-yellow-400/10 hover:border-yellow-400/40" },
  { name: "Git", bg: "hover:bg-orange-500/10 hover:border-orange-500/40" },
  { name: "REST API", bg: "hover:bg-blue-500/10 hover:border-blue-400/40" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What I Know
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white">
            Skills & Expertise
          </motion.h2>
        </motion.div>

        {/* Skill cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="card group cursor-default"
            >
              <div className={`inline-block bg-gradient-to-r ${cat.color} text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider mb-4`}>
                {cat.label}
              </div>
              <motion.ul className="space-y-3" variants={staggerFast} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                {skills[cat.key].map((skill, si) => (
                  <motion.li key={skill} variants={fadeUp} className="flex items-center gap-2 text-gray-400 text-sm">
                    <motion.span
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cat.color} flex-shrink-0`}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: si * 0.3 + ci * 0.5 }}
                    />
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Tech Stack with Icons ── */}
        <motion.div
          className="mt-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">Tech Stack</p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-3" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4"
            variants={staggerFast}
          >
            {techStack.map((tech, i) => {
              const Icon = TechIcons[tech.name];
              return (
                <motion.div
                  key={tech.name}
                  variants={scaleIn}
                  whileHover={{
                    y: -8,
                    scale: 1.08,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`group flex flex-col items-center gap-3 bg-gray-900 border border-gray-800 rounded-2xl p-4 cursor-default transition-colors duration-300 ${tech.bg}`}
                >
                  {/* Icon with spin-on-hover */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    {Icon ? <Icon /> : (
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">
                        {tech.name.slice(0, 2)}
                      </div>
                    )}
                  </motion.div>

                  {/* Name */}
                  <span className="text-gray-400 group-hover:text-white text-xs font-medium text-center leading-tight transition-colors duration-200">
                    {tech.name}
                  </span>

                  {/* Animated underline on hover */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-0 group-hover:w-full transition-all duration-300"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
