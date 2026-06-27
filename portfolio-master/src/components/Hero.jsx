import { useEffect, useState, useRef, useMemo } from "react";
import { MapPin, Mail, Phone, ArrowDown, Code2, Terminal } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { fadeUp, fadeLeft, fadeRight, fadeIn, staggerContainer } from "../utils/animations";
import profilePhoto from "../assets/img2.jpeg";

/* ── Typewriter ── */
const TITLES = ["Full Stack Developer", "MERN Stack Engineer", "React.js Specialist", "Node.js Developer"];

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = words[index];
    if (!deleting && displayed === current) {
      timeout.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout.current = setTimeout(() => {
        setDisplayed((d) => deleting ? d.slice(0, -1) : current.slice(0, d.length + 1));
      }, deleting ? 40 : 80);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, index, words]);

  return <span className="gradient-text typewriter">{displayed}</span>;
}

/* ── Floating particles ── */
function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 6,
    })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/25"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -100, -200], x: [0, 20, -15], opacity: [0, 0.7, 0], scale: [1, 1.3, 0.5] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ── Orbiting tech badges around avatar ── */
const ORBIT_TECHS = [
  { label: "React", color: "#61DAFB", angle: 0 },
  { label: "Node", color: "#339933", angle: 72 },
  { label: "Mongo", color: "#47A248", angle: 144 },
  { label: "JS", color: "#F7DF1E", angle: 216 },
  { label: "CSS", color: "#38BDF8", angle: 288 },
];

function OrbitRing() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Orbit circle */}
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-500/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {ORBIT_TECHS.map((tech, i) => {
        const rad = (tech.angle * Math.PI) / 180;
        const r = 90; // orbit radius in px
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        return (
          <motion.div
            key={tech.label}
            className="absolute left-1/2 top-1/2"
            style={{ x: x - 20, y: y - 20 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border"
              style={{
                background: `${tech.color}15`,
                borderColor: `${tech.color}40`,
                color: tech.color,
              }}
            >
              {tech.label}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Fake code snippet card ── */
function CodeCard() {
  const lines = [
    { indent: 0, tokens: [{ t: "const ", c: "text-purple-400" }, { t: "umer", c: "text-blue-300" }, { t: " = {", c: "text-gray-300" }] },
    { indent: 1, tokens: [{ t: "role", c: "text-cyan-300" }, { t: ": ", c: "text-gray-400" }, { t: '"Full Stack Dev"', c: "text-green-400" }, { t: ",", c: "text-gray-400" }] },
    { indent: 1, tokens: [{ t: "stack", c: "text-cyan-300" }, { t: ": [", c: "text-gray-400" }, { t: '"MERN"', c: "text-green-400" }, { t: "],", c: "text-gray-400" }] },
    { indent: 1, tokens: [{ t: "available", c: "text-cyan-300" }, { t: ": ", c: "text-gray-400" }, { t: "true", c: "text-orange-400" }, { t: ",", c: "text-gray-400" }] },
    { indent: 1, tokens: [{ t: "passion", c: "text-cyan-300" }, { t: ": ", c: "text-gray-400" }, { t: '"Building things"', c: "text-green-400" }] },
    { indent: 0, tokens: [{ t: "}", c: "text-gray-300" }] },
  ];

  return (
    <motion.div
      variants={fadeRight}
      className="relative"
    >
      {/* Glow behind card */}
      <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl" />

      <div className="relative bg-gray-900/90 border border-gray-700/60 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/60 border-b border-gray-700/50">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="flex items-center gap-1.5 ml-3 text-gray-500 text-xs">
            <Terminal size={11} />
            <span>umer.js</span>
          </div>
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-sm leading-7">
          {lines.map((line, li) => (
            <motion.div
              key={li}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + li * 0.12, duration: 0.4 }}
              className="flex"
            >
              <span className="text-gray-600 select-none w-5 mr-4 text-right text-xs leading-7">{li + 1}</span>
              <span style={{ paddingLeft: `${line.indent * 16}px` }}>
                {line.tokens.map((tok, ti) => (
                  <span key={ti} className={tok.c}>{tok.t}</span>
                ))}
              </span>
            </motion.div>
          ))}
          {/* Blinking cursor */}
          <motion.div
            className="flex mt-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <span className="text-gray-600 select-none w-5 mr-4 text-right text-xs leading-7">7</span>
            <span className="text-blue-400">▋</span>
          </motion.div>
        </div>
      </div>

      {/* Floating stat badges */}
      <motion.div
        className="absolute -top-4 -right-4 bg-gray-900 border border-green-500/30 rounded-xl px-3 py-2 text-xs"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-green-400 font-semibold">5+</span>
        <span className="text-gray-500 ml-1">Projects</span>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 bg-gray-900 border border-blue-500/30 rounded-xl px-3 py-2 text-xs"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="text-blue-400 font-semibold">1yr</span>
        <span className="text-gray-500 ml-1">Experience</span>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Hero ── */
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center relative overflow-hidden">

      {/* ── Background layer ── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        {/* Main glow */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Top-right accent */}
        <motion.div
          className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <Particles />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 pt-20 sm:pt-24 pb-12"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full">
                <motion.span
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4 tracking-tight leading-tight">
              <span className="text-white">Hi, I'm </span>
              <br />
              <span className="text-white">{personalInfo.name.split(" ")[0]} </span>
              <span className="gradient-text">{personalInfo.name.split(" ")[1]}</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium mb-5 h-8 sm:h-9">
              <Typewriter words={TITLES} />
            </motion.div>

            {/* Summary */}
            <motion.p variants={fadeUp} className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Building scalable web apps with the MERN stack. Focused on clean code,
              great UX, and shipping products that actually work.
            </motion.p>

            {/* Contact chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center gap-1.5 bg-gray-900/60 border border-gray-800 px-2.5 sm:px-3 py-1.5 rounded-lg">
                <MapPin size={12} className="text-blue-400 flex-shrink-0" />
                <span className="truncate">{personalInfo.location}</span>
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 bg-gray-900/60 border border-gray-800 px-2.5 sm:px-3 py-1.5 rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all min-w-0">
                <Mail size={12} className="text-blue-400 flex-shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 bg-gray-900/60 border border-gray-800 px-2.5 sm:px-3 py-1.5 rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all">
                <Phone size={12} className="text-blue-400 flex-shrink-0" />
                {personalInfo.phone}
              </a>
            </motion.div>
            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-600/30 flex items-center gap-2 text-sm sm:text-base"
              >
                <Code2 size={15} />
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, borderColor: "rgba(59,130,246,0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="border border-gray-700 text-gray-300 hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all text-sm sm:text-base"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Scroll cue */}
            <motion.a
              href="#about"
              variants={fadeIn}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors text-sm"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={15} />
              <span className="uppercase tracking-widest text-xs">Scroll down</span>
            </motion.a>
          </motion.div>

          {/* ── RIGHT: Visual ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-col items-center gap-10"
          >
            {/* Avatar with orbit */}
            <motion.div variants={fadeUp} className="relative w-[220px] h-[220px]">
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Rotating dashed ring */}
              <motion.div
                className="absolute inset-[-20px] rounded-full border border-dashed border-blue-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Orbit badges */}
              <OrbitRing />

              {/* Avatar */}
              <motion.div
                variants={scaleInBounce}
                className="absolute inset-0 rounded-full overflow-hidden shadow-2xl shadow-blue-500/40 border-4 border-blue-500/30"
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(59,130,246,0.6)" }}
              >
                <img
                  src={profilePhoto}
                  alt="M Umer Rafaqat"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </motion.div>

            {/* Code card */}
            <CodeCard />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

const scaleInBounce = {
  hidden: { opacity: 0, scale: 0.4, rotate: -15 },
  visible: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { type: "spring", stiffness: 180, damping: 14, delay: 0.3 },
  },
};
