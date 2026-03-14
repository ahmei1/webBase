import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// ─── SVG Illustrations ───────────────────────────────────────────────────────

const IdeaIllustration = ({ active }) => (
  <motion.svg
    viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    animate={active ? { filter: "drop-shadow(0 0 40px rgba(255,127,17,0.5))" } : { filter: "drop-shadow(0 0 0px transparent)" }}
    transition={{ duration: 1 }}
  >
    <motion.ellipse cx="100" cy="105" rx="70" ry="70" fill="url(#ideaGlow)" opacity="0.3"
      animate={active ? { scale: [1, 1.15, 1] } : {}}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    />
    <ellipse cx="104" cy="88" rx="42" ry="44" fill="#2a2a2a" />
    <ellipse cx="100" cy="85" rx="42" ry="44" fill="url(#ideaBulb)" />
    <ellipse cx="84" cy="68" rx="10" ry="14" fill="white" opacity="0.18" transform="rotate(-20 84 68)" />
    <path d="M88 105 Q100 88 112 105" stroke="#FF7F11" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <line x1="100" y1="105" x2="100" y2="116" stroke="#FF7F11" strokeWidth="2" />
    <rect x="82" y="124" width="36" height="8" rx="3" fill="#3a3a3a" />
    <rect x="84" y="133" width="32" height="7" rx="3" fill="#333" />
    <rect x="86" y="141" width="28" height="7" rx="3" fill="#2d2d2d" />
    <rect x="88" y="149" width="24" height="6" rx="3" fill="#FF7F11" opacity="0.8" />
    {[
      [100,30,100,18], [134,42,142,34], [66,42,58,34], [148,75,160,73], [52,75,40,73]
    ].map(([x1,y1,x2,y2], i) => (
      <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#FF7F11" strokeWidth="2" strokeLinecap="round"
        animate={active ? { opacity: [0.2, 0.8, 0.2] } : { opacity: 0.3 }}
        transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
      />
    ))}
    <defs>
      <radialGradient id="ideaGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FF7F11" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FF7F11" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="ideaBulb" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#ffe4b0" />
        <stop offset="50%" stopColor="#ffb347" />
        <stop offset="100%" stopColor="#FF7F11" />
      </radialGradient>
    </defs>
  </motion.svg>
);

const DesignIllustration = ({ active }) => (
  <motion.svg
    viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    animate={active ? { filter: "drop-shadow(0 0 30px rgba(255,127,17,0.4))" } : {}}
    transition={{ duration: 1 }}
  >
    <ellipse cx="110" cy="188" rx="65" ry="10" fill="#000" opacity="0.3" />
    <path d="M168 40 L180 52 L180 148 L168 136 Z" fill="#1a1a1a" />
    <path d="M44 136 L168 136 L180 148 L56 148 Z" fill="#222" />
    <rect x="44" y="40" width="124" height="96" rx="6" fill="#111" />
    <rect x="40" y="36" width="124" height="96" rx="6" fill="#1e1e1e" />
    <rect x="48" y="44" width="108" height="80" rx="3" fill="#141414" />
    {[[48,62,156,62],[48,80,156,80],[48,98,156,98]].map(([x1,y1,x2,y2],i) => (
      <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#FF7F11" strokeWidth="0.8"
        animate={active ? { opacity: [0.2, 0.6, 0.2] } : { opacity: 0.3 }}
        transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}
      />
    ))}
    <line x1="72" y1="44" x2="72" y2="124" stroke="#FF7F11" strokeWidth="0.8" opacity="0.4" />
    <line x1="110" y1="44" x2="110" y2="124" stroke="#FF7F11" strokeWidth="0.8" opacity="0.4" />
    <rect x="54" y="50" width="46" height="6" rx="2" fill="#FF7F11" opacity="0.9" />
    <rect x="54" y="66" width="30" height="4" rx="2" fill="#555" />
    <rect x="54" y="74" width="50" height="4" rx="2" fill="#444" />
    <rect x="54" y="82" width="38" height="4" rx="2" fill="#444" />
    <rect x="116" y="50" width="34" height="34" rx="3" fill="#2a2a2a" stroke="#FF7F11" strokeWidth="1" strokeOpacity="0.6" />
    <line x1="116" y1="50" x2="150" y2="84" stroke="#FF7F11" strokeWidth="0.8" strokeOpacity="0.4" />
    <line x1="150" y1="50" x2="116" y2="84" stroke="#FF7F11" strokeWidth="0.8" strokeOpacity="0.4" />
    <motion.polygon points="138,95 130,120 134,116 136,124 139,122 137,114 142,118" fill="#FF7F11"
      animate={active ? { x: [0, 3, 0], y: [0, 2, 0] } : {}}
      transition={{ repeat: Infinity, duration: 1.5 }}
    />
    <rect x="92" y="132" width="20" height="18" rx="2" fill="#1a1a1a" />
    <rect x="78" y="148" width="48" height="6" rx="3" fill="#222" />
    {[[30,60,8],[18,80,6],[34,96,5]].map(([cx,cy,r],i) => (
      <motion.circle key={i} cx={cx} cy={cy} r={r}
        fill={i===0?"#FF7F11":i===1?"#ff9f4a":"#ffbf7a"} opacity={0.9-i*0.15}
        animate={active ? { scale: [1, 1.3, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
      />
    ))}
  </motion.svg>
);

const BuildIllustration = ({ active }) => (
  <motion.svg
    viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    animate={active ? { filter: "drop-shadow(0 0 30px rgba(255,127,17,0.4))" } : {}}
    transition={{ duration: 1 }}
  >
    <ellipse cx="110" cy="188" rx="68" ry="9" fill="#000" opacity="0.3" />
    <path d="M168 130 L178 120 L178 145 L168 155 Z" fill="#1a1a1a" />
    <path d="M42 155 L168 155 L178 145 L52 145 Z" fill="#222" />
    <rect x="42" y="130" width="126" height="25" rx="4" fill="#2a2a2a" />
    {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
      <rect key={i} x={52 + i * 11} y="138" width="8" height="5" rx="1" fill="#1a1a1a" />
    ))}
    <rect x="42" y="126" width="126" height="6" rx="2" fill="#333" />
    <path d="M52 48 L168 48 L176 54 L176 126 L52 126 Z" fill="#1a1a1a" />
    <rect x="48" y="44" width="116" height="82" rx="5" fill="#1e1e1e" />
    <rect x="54" y="50" width="104" height="70" rx="3" fill="#111" />
    {[
      [60,66,"#FF7F11","const"],
      [88,66,"#6dd5fa"," site"],
      [68,78,"#6dd5fa","  return"],
      [76,90,"#FF7F11","    <div>"],
      [84,102,"#a8ff78","      Hello"],
      [76,114,"#FF7F11","    </div>"],
    ].map(([x,y,color,text],i) => (
      <motion.text key={i} x={x} y={y} fontFamily="monospace" fontSize="8" fill={color}
        animate={active ? { opacity: [0.6, 1, 0.6] } : { opacity: 1 }}
        transition={{ repeat: Infinity, duration: 3, delay: i * 0.15 }}
      >{text}</motion.text>
    ))}
    <text x="112" y="66" fontFamily="monospace" fontSize="8" fill="#fff"> = () =&gt; {"{"}</text>
    <text x="105" y="78" fontFamily="monospace" fontSize="8" fill="#fff"> (</text>
    <motion.rect x="125" y="107" width="6" height="9" rx="1" fill="#FF7F11"
      animate={active ? { opacity: [1, 0, 1] } : { opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.9 }}
    />
    <text x="14"  y="80"  fontFamily="monospace" fontSize="28" fill="#FF7F11" opacity="0.12">{"{"}</text>
    <text x="188" y="110" fontFamily="monospace" fontSize="28" fill="#FF7F11" opacity="0.12">{"}"}</text>
  </motion.svg>
);

const LaunchIllustration = ({ active }) => (
  <motion.svg
    viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    animate={active ? { filter: "drop-shadow(0 0 40px rgba(255,127,17,0.5))" } : {}}
    transition={{ duration: 1 }}
  >
    {[[30,20],[170,15],[60,50],[155,55],[20,90],[185,80],[40,150],[170,130]].map(([x,y],i) => (
      <motion.circle key={i} cx={x} cy={y} r="1.5" fill="white"
        animate={active ? { opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] } : { opacity: 0.3 }}
        transition={{ repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.15 }}
      />
    ))}
    <motion.g animate={active ? { y: [0, -8, 0] } : {}} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
      <ellipse cx="104" cy="182" rx="14" ry="22" fill="#FF7F11" opacity="0.3" />
      <ellipse cx="102" cy="178" rx="10" ry="18" fill="#FF7F11" opacity="0.5" />
      <motion.ellipse cx="100" cy="172" rx="7" ry="14" fill="#ffb347" opacity="0.8"
        animate={active ? { ry: [14,18,14] } : {}}
        transition={{ repeat: Infinity, duration: 0.5 }}
      />
      <ellipse cx="100" cy="167" rx="4" ry="8" fill="#ffe599" />
      <path d="M116 80 L122 86 L122 158 L116 152 Z" fill="#1a1a1a" opacity="0.7" />
      <rect x="84" y="80" width="32" height="72" rx="16" fill="url(#launchRocket)" />
      <path d="M116 80 Q122 86 122 80 L100 38 Z" fill="#1a1a1a" opacity="0.4" />
      <path d="M84 80 Q100 28 116 80 Z" fill="url(#launchNose)" />
      <circle cx="104" cy="108" r="12" fill="#111" />
      <circle cx="100" cy="104" r="12" fill="#1a2a4a" />
      <circle cx="100" cy="104" r="9" fill="#1e3a6a" />
      <circle cx="97" cy="101" r="3" fill="white" opacity="0.3" />
      <path d="M120 148 L134 168 L120 158 Z" fill="#1a1a1a" opacity="0.5" />
      <path d="M116 148 L130 168 L116 158 Z" fill="#FF7F11" opacity="0.85" />
      <path d="M84 148 L70 168 L84 158 Z" fill="#FF7F11" opacity="0.85" />
      <rect x="90" y="86" width="6" height="40" rx="3" fill="white" opacity="0.1" />
    </motion.g>
    <ellipse cx="100" cy="200" rx="50" ry="14" fill="#1a3a6a" opacity="0.6" />
    <ellipse cx="100" cy="200" rx="50" ry="14" fill="none" stroke="#6dd5fa" strokeWidth="1" strokeOpacity="0.5" />
    <path d="M60 200 Q100 190 140 200" stroke="#6dd5fa" strokeWidth="0.8" fill="none" strokeOpacity="0.5" />
    <defs>
      <linearGradient id="launchRocket" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e0e0e0" />
        <stop offset="50%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#aaaaaa" />
      </linearGradient>
      <linearGradient id="launchNose" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d0d0d0" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
    </defs>
  </motion.svg>
);

// ─── Phase Data ───────────────────────────────────────────────────────────────

const phases = [
  {
    num: "01",
    label: "Discovery",
    title: "Share Your Idea",
    description: "You share your idea and business goals with us. We listen, ask the right questions, and map your vision into a clear, actionable plan of attack.",
    illustration: IdeaIllustration,
    tag: "Strategy & Planning",
  },
  {
    num: "02",
    label: "Design",
    title: "Design & UX",
    description: "We craft every screen — wireframes, layouts, colour systems, typography. Every pixel is placed with intention to serve your users and convert visitors.",
    illustration: DesignIllustration,
    tag: "UI/UX Design",
  },
  {
    num: "03",
    label: "Development",
    title: "Build & Develop",
    description: "We write clean, modern, fully responsive code. Fast load times, smooth animations, and rock-solid architecture — built to scale from day one.",
    illustration: BuildIllustration,
    tag: "Engineering",
  },
  {
    num: "04",
    label: "Launch",
    title: "Go Live & Grow",
    description: "We handle deployment, testing, and handoff. Your site goes live and your business starts growing — with ongoing support whenever you need it.",
    illustration: LaunchIllustration,
    tag: "Deployment & Growth",
  },
];

// ─── Phase Slide ──────────────────────────────────────────────────────────────

function PhaseSlide({ phase, index, progress }) {
  // Each slide occupies 1/4 of total scroll. Map that slice to 0→1
  const start = index / phases.length;
  const end   = (index + 1) / phases.length;

  const opacity = useTransform(progress, [start - 0.04, start + 0.04, end - 0.04, end + 0.04], [0, 1, 1, 0]);
  const y       = useTransform(progress, [start - 0.06, start + 0.04], [60, 0]);
  const scale   = useTransform(progress, [start - 0.06, start + 0.04, end - 0.04, end + 0.06], [0.96, 1, 1, 0.96]);

  const IllComp = phase.illustration;

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24  px-8 sm:px-16 md:px-20 lg:px-32 pointer-events-none"
    >
      {/* ── Left: illustration ── */}
      <motion.div style={{ y }} className="shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
        {/* Ambient glow ring */}
        <div className="absolute inset-0 rounded-full bg-[#FF7F11] opacity-[0.06] blur-3xl scale-150" />
        <IllComp active={true} />
      </motion.div>

      {/* ── Right: text ── */}
      <motion.div style={{ y }} className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">

        {/* Tag pill */}
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF7F11]/30 bg-[#FF7F11]/10 text-[#FF7F11] text-xs tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F11] inline-block" />
          {phase.tag}
        </span>

        {/* Big phase number watermark */}
        <div className="relative mb-1">
          <span className="absolute -top-8 -left-2 md:-left-6 text-[7rem] md:text-[15rem] font-black text-white/10 leading-none select-none pointer-events-none">
            {phase.num}
          </span>
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-gray-500 mb-2 relative z-10">
            Phase {phase.num}
          </p>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-white mb-6">
          {phase.title.split(" ").map((word, i) => (
            <span key={i} className={i === phase.title.split(" ").length - 1 ? "text-[#FF7F11]" : ""}>
              {word}{" "}
            </span>
          ))}
        </h2>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-gradient-to-r from-[#FF7F11] to-transparent mb-6 hidden md:block" />

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
          {phase.description}
        </p>

      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TimelineDemo() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // The outer container is 500vh tall; the inner sticky div is 100vh
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Derive active index from scroll progress
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(
        phases.length - 1,
        Math.floor(v * phases.length)
      );
      setActiveIndex(idx);
    });
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} style={{ height: `${phases.length * 150}vh` }} className="relative  bg-[#181818]">

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#181818]">

        {/* ── Background noise texture ── */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* ── Radial gradient background that shifts per phase ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ background: `radial-gradient(ellipse 60% 60% at ${activeIndex % 2 === 0 ? "75% 50%" : "25% 50%"}, rgba(255,127,17,0.07) 0%, transparent 70%)` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* ── Header ── */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-30">
          <p className="text-3xl sm:text-3xl tracking-[0.4em] uppercase text-gray-500">
            How We Work
          </p>
        </div>

        {/* ── Phase dots — right rail ── */}
        <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-5">
          {phases.map((p, i) => (
            <div key={i} className="flex items-center gap-2.5 justify-end group">
              <motion.span
                className="text-[10px] tracking-widest uppercase whitespace-nowrap hidden sm:block"
                animate={{ opacity: i === activeIndex ? 1 : 0, x: i === activeIndex ? 0 : 8 }}
                transition={{ duration: 0.3 }}
                style={{ color: "#FF7F11" }}
              >
                {p.label}
              </motion.span>
              <motion.span
                className="block rounded-full"
                animate={{
                  width:  i === activeIndex ? 10 : 6,
                  height: i === activeIndex ? 10 : 6,
                  backgroundColor: i === activeIndex ? "#FF7F11" : "#3a3a3a",
                  boxShadow: i === activeIndex ? "0 0 10px #FF7F11" : "none",
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>

        {/* ── Counter ── */}
        <div className="absolute top-6 right-14 sm:top-10 sm:right-20 z-30">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="text-2xl sm:text-3xl font-black text-gray-700 tabular-nums"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
          <span className="text-gray-700 text-sm"> / {String(phases.length).padStart(2, "0")}</span>
        </div>

        {/* ── Scroll hint (only on first phase) ── */}
        <AnimatePresence>
          {activeIndex === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
            >
              <span className="text-xs tracking-widest uppercase text-gray-500">Scroll</span>
              <motion.div
                className="w-px h-8 bg-gradient-to-b from-[#FF7F11] to-transparent"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Phase slides (all stacked, animated by scroll progress) ── */}
        <div className="absolute inset-0">
          {phases.map((phase, index) => (
            <PhaseSlide key={index} phase={phase} index={index} progress={scrollYProgress} />
          ))}
        </div>

        {/* ── Bottom progress bar ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gray-800/50 z-30">
          <motion.div
            className="h-full bg-[#FF7F11] origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

        {/* ── Vertical left accent line ── */}
        <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col items-center gap-1.5">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#FF7F11]/40" />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#FF7F11]"
            animate={{ boxShadow: ["0 0 4px #FF7F11", "0 0 12px #FF7F11", "0 0 4px #FF7F11"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <div className="w-px h-12 bg-gradient-to-t from-transparent to-[#FF7F11]/40" />
        </div>

      </div>
    </div>
  );
}