import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-gray-800 py-8 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <motion.p variants={fadeUp}>
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">{personalInfo.name}</span>. All rights reserved.
        </motion.p>
        <motion.p variants={fadeUp}>
          Built with <span className="text-blue-400">React.js</span> &{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </motion.p>
      </div>
    </motion.footer>
  );
}
