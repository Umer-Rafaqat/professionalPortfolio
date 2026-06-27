import { Code2, Layers, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerFast, viewportOnce } from "../utils/animations";

const highlights = [
  { icon: <Code2 size={20} />, title: "Clean Code", desc: "Readable, maintainable, and well-documented code." },
  { icon: <Layers size={20} />, title: "Full Stack", desc: "End-to-end from database design to pixel-perfect UI." },
  { icon: <Zap size={20} />, title: "Performance", desc: "Optimized apps with fast load times and smooth UX." },
  { icon: <Users size={20} />, title: "Team Player", desc: "Collaborative mindset with strong communication." },
];

const tags = ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "REST APIs"];

export default function About() {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
          About Me
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white">
          Who I Am
        </motion.h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text side */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeLeft} className="text-gray-400 leading-relaxed text-base md:text-lg mb-6">
            I'm a <span className="text-white font-medium">Full Stack Developer</span> based in
            Rahim Yar Khan, Pakistan, specializing in the{" "}
            <span className="text-blue-400 font-medium">MERN stack</span>. I build scalable,
            performant web applications with a strong focus on user experience and code quality.
          </motion.p>
          <motion.p variants={fadeLeft} className="text-gray-400 leading-relaxed text-base md:text-lg mb-8">
            With a BS in Computer Science from KFUEIT and hands-on experience at
            SMJ Solutions, I've worked on everything from corporate websites to full-featured
            business management systems.
          </motion.p>

          <motion.div variants={staggerFast} className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                variants={scaleIn}
                whileHover={{ scale: 1.1, borderColor: "rgba(59,130,246,0.6)" }}
                className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm px-3 py-1 rounded-full cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeRight}
              whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.5)", boxShadow: "0 20px 40px rgba(59,130,246,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="card group cursor-default"
            >
              <motion.div
                className="text-blue-400 mb-3"
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
