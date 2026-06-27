import { Briefcase, MapPin, Calendar, CheckCircle2, Award, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { experience } from "../data/portfolio";
import { fadeUp, fadeLeft, scaleIn, staggerContainer, staggerFast, viewportOnce } from "../utils/animations";

/* ── Experience Letter Modal ── */
function CertificateModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          className="relative z-10 w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gray-800/60 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-blue-400" />
              <span className="text-white font-semibold text-sm">Experience Letter — SMJ Solutions Pvt Ltd</span>
            </div>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </motion.button>
          </div>

          {/* Certificate content */}
          <div className="p-6 max-h-[75vh] overflow-y-auto">
            {/* Company header */}
            <div className="flex items-start justify-between mb-6 pb-4 border-b border-gray-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-teal-500/20 border border-teal-500/30 rounded-lg flex items-center justify-center text-teal-400 font-bold text-xs">
                    SMJ
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">SMJ Solutions Pvt Ltd</p>
                    <p className="text-gray-500 text-xs">Strategic Media Journey</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-2">www.smjsols.com</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs">Dated</p>
                <p className="text-gray-300 text-xs font-medium">11 May, 2026</p>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="text-white font-bold text-lg uppercase tracking-wide">Experience Letter</h3>
              <p className="text-gray-500 text-sm">To Whom It May Concern</p>
            </div>

            {/* Body */}
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                This is to certify that <span className="text-white font-semibold">Muhammad Umer Rafaqat</span> worked
                with SMJ Solutions Pvt Ltd as a{" "}
                <span className="text-blue-400 font-medium">MERN Stack Developer</span> from{" "}
                <span className="text-white font-medium">07th May 2025</span> to{" "}
                <span className="text-white font-medium">30th April 2026</span>.
              </p>
              <p>
                During their employment, they were responsible for developing, maintaining, and optimizing
                web applications using the MERN Stack technologies, including MongoDB, Express.js, React.js,
                and Node.js. Their responsibilities included frontend and backend development, API
                integration, database management, debugging, performance optimization, and collaboration
                with development teams to deliver scalable and efficient solutions.
              </p>
              <p>
                Throughout their tenure, <span className="text-white font-semibold">Muhammad Umer Rafaqat</span>{" "}
                demonstrated strong technical skills, professionalism, problem-solving abilities, and
                dedication toward assigned projects. They successfully contributed to multiple development
                tasks while maintaining quality standards and meeting project deadlines.
              </p>
              <p>
                We found them to be hardworking, responsible, and capable of working effectively both
                independently and within a team environment.
              </p>
              <p>We wish them continued success in their future professional endeavors.</p>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-gray-800 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-gray-500 text-xs mb-1">Yours sincerely,</p>
                <p className="text-white font-semibold text-sm">HR Manager</p>
                <p className="text-blue-400 text-sm">SMJ Solutions Pvt Ltd</p>
              </div>
              <div className="text-right text-xs text-gray-500 space-y-1">
                <p><span className="text-gray-400">Contact:</span> +923216716045</p>
                <p><span className="text-gray-400">Email:</span> info@smjsols.com</p>
              </div>
            </div>

            {/* Verified badge */}
            <motion.div
              className="mt-4 flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
              <p className="text-green-400 text-xs font-medium">
                Verified experience letter issued by SMJ Solutions Pvt Ltd on 11 May, 2026
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Experience() {
  const [showCert, setShowCert] = useState(false);

  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Work History
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white">
          Experience
        </motion.h2>
      </motion.div>

      <div className="relative">
        {/* Animated timeline line */}
        <motion.div
          className="absolute left-6 top-0 w-px timeline-line hidden md:block"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              className="md:pl-16 relative"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {/* Timeline dot with pulse */}
              <div className="absolute left-4 top-6 hidden md:block">
                <motion.div
                  className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950 shadow-lg shadow-blue-500/50"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-500/30"
                  animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </div>

              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.5)", boxShadow: "0 20px 40px rgba(59,130,246,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card"
              >
                {/* Job header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} className="text-blue-400 flex-shrink-0" />
                      <h3 className="text-lg sm:text-xl font-bold text-white">{job.role}</h3>
                    </div>
                    <p className="text-blue-400 font-semibold text-base sm:text-lg">{job.company}</p>
                    <div className="flex flex-wrap gap-3 mt-2 text-xs sm:text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />{job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />{job.period}
                      </span>
                    </div>
                  </div>

                  {/* View Certificate button */}
                  <motion.button
                    onClick={() => setShowCert(true)}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200"
                  >
                    <Award size={13} />
                    Experience Letter
                    <ExternalLink size={11} />
                  </motion.button>
                </div>

                {/* Bullet points */}
                <motion.ul
                  className="space-y-3"
                  variants={staggerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {job.points.map((point, j) => (
                    <motion.li
                      key={j}
                      variants={fadeUp}
                      className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                    >
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className="text-blue-400 flex-shrink-0 mt-0.5"
                      >
                        <CheckCircle2 size={15} />
                      </motion.div>
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {showCert && <CertificateModal onClose={() => setShowCert(false)} />}
    </section>
  );
}
