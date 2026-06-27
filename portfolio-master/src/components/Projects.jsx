import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects } from "../data/portfolio";
import { fadeUp, scaleIn, staggerContainer, staggerFast, viewportOnce } from "../utils/animations";

const categoryColors = {
  Frontend: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  "Full Stack": "bg-purple-500/10 border-purple-500/20 text-purple-400",
};

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.97 }}
      transition={{ duration: 0.3, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 30px 60px rgba(0,0,0,0.4)", borderColor: "rgba(59,130,246,0.4)" }}
      className="card flex flex-col group cursor-default"
    >
      {/* Animated top accent bar */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-white font-bold text-base leading-snug group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <motion.span
          whileHover={{ scale: 1.05 }}
          className={`border text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${categoryColors[project.category]}`}
        >
          {project.category}
        </motion.span>
      </div>

      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <motion.span
            key={t}
            whileHover={{ scale: 1.08, borderColor: "rgba(59,130,246,0.5)", color: "#93c5fd" }}
            className="bg-gray-800 text-gray-400 text-xs px-2.5 py-1 rounded-md border border-gray-700 transition-colors"
          >
            {t}
          </motion.span>
        ))}
      </div>

      {/* Points — always 2 visible, expand in-place */}
      <ul className="space-y-2">
        {project.points.slice(0, 2).map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
            {point}
          </li>
        ))}

        <AnimatePresence initial={false}>
          {expanded &&
            project.points.slice(2).map((point, i) => (
              <motion.li
                key={`extra-${i}`}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed overflow-hidden"
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
                {point}
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>

      {project.points.length > 2 && (
        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.95 }}
          className="mt-3 flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors self-start"
        >
          {expanded
            ? (<>Show less <ChevronUp size={13} /></>)
            : (<>+{project.points.length - 2} more <ChevronDown size={13} /></>)}
        </motion.button>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Frontend", "Full Stack"];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-gray-900/30">
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
            My Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Key Projects
          </motion.h2>

          {/* Filter tabs */}
          <motion.div
            variants={fadeUp}
            className="inline-flex bg-gray-900 border border-gray-800 rounded-xl p-1 gap-1"
          >
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  filter === f ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {filter === f && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards grid — items-start so expanding one card doesn't stretch siblings */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
