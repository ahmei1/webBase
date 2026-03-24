import { cn } from "../utlis";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// ── Service narrative data ─────────────────────────────────────────────────────
const services = [
  {
    number: "01",
    icon: "✦",
    tag: "Design",
    title: "Web Design",
    hook: "First impressions happen in 50 milliseconds.",
    description:
      "We obsess over every pixel so your visitors don't have to think — they just feel it. From typography hierarchies to micro-interaction choreography, every element earns its place.",
    details: [
      "Custom UI tailored to your brand identity",
      "Wireframes & interactive prototypes",
      "Typography, colour systems & spacing",
      "Designed for conversion & engagement",
    ],
    stat: { value: "50ms", label: "to form a first impression" },
  },
  {
    number: "02",
    icon: "⟨/⟩",
    tag: "Engineering",
    title: "Web Development",
    hook: "Beautiful code is invisible to your users.",
    description:
      "Clean, battle-tested architecture that scales silently in the background. Your users never think about the code — they just notice that everything feels fast, fluid, and effortless.",
    details: [
      "React, Next.js & modern stacks",
      "REST & GraphQL API integrations",
      "Performance-first — sub-2s load times",
      "Scalable, maintainable codebase",
    ],
    stat: { value: "<2s", label: "guaranteed load time" },
  },
  {
    number: "03",
    icon: "◎",
    tag: "Growth",
    title: "SEO & Performance",
    hook: "Ranking #1 isn't luck. It's engineering.",
    description:
      "We treat SEO as a technical discipline, not a checklist. Core Web Vitals, crawl budgets, semantic markup — every layer optimised so search engines can't ignore you.",
    details: [
      "Core Web Vitals optimisation",
      "On-page SEO & meta structure",
      "Image & bundle size optimisation",
      "Google Search Console setup",
    ],
    stat: { value: "3×", label: "average traffic increase" },
  },
  {
    number: "04",
    icon: "⊡",
    tag: "Commerce",
    title: "E-commerce",
    hook: "A great product deserves a great storefront.",
    description:
      "We design checkout flows that remove every point of hesitation. Because the difference between a browser and a buyer is often just one moment of friction we removed.",
    details: [
      "Shopify, WooCommerce & custom builds",
      "Optimised product & checkout pages",
      "Payment gateway integrations",
      "Inventory & order management",
    ],
    stat: { value: "34%", label: "avg. cart abandonment reduction" },
  },
  {
    number: "05",
    icon: "⟳",
    tag: "Support",
    title: "Maintenance & Support",
    hook: "Launch day is the beginning, not the end.",
    description:
      "We stay committed long after the site goes live. Security patches, performance monitoring, content updates — we treat your website like it's always launch eve.",
    details: [
      "Monthly update & security patches",
      "24h bug fix turnaround",
      "Uptime & performance monitoring",
      "Content updates on demand",
    ],
    stat: { value: "24h", label: "maximum bug fix turnaround" },
  },
  {
    number: "06",
    icon: "⊞",
    tag: "Design",
    title: "Mobile-first",
    hook: "Over 60% of your visitors are on a phone.",
    description:
      "We don't adapt desktop designs for mobile — we build from the smallest screen up. Every touch target, every scroll behaviour, every breakpoint is a considered decision.",
    details: [
      "Fluid layouts for all screen sizes",
      "Touch-friendly interactions",
      "Tested on 10+ real devices",
      "No hidden mobile breakage",
    ],
    stat: { value: "60%+", label: "of web traffic is mobile" },
  },
  {
    number: "07",
    icon: "◈",
    tag: "Branding",
    title: "Branding & UI/UX",
    hook: "Identity is the story you tell before you speak.",
    description:
      "We build visual languages from the ground up — logos, type systems, colour palettes, component libraries — everything consistent, scalable, and unmistakably you.",
    details: [
      "Logo design & brand guidelines",
      "Full design system & component library",
      "User research & journey mapping",
      "Consistent cross-platform identity",
    ],
    stat: { value: "∞", label: "scalable brand system" },
  },
  {
    number: "08",
    icon: "⤓",
    tag: "Marketing",
    title: "Landing Pages",
    hook: "Every campaign deserves a perfect destination.",
    description:
      "High-converting landing pages in 3–5 days. Copy, layout, CTA hierarchy — built around a single goal so your ad spend doesn't land on a page that fumbles the close.",
    details: [
      "CRO-focused layout & copywriting",
      "A/B test ready structure",
      "Lead capture & form integrations",
      "Fast turnaround — 3 to 5 days",
    ],
    stat: { value: "3–5", label: "days to launch" },
  },
  {
    number: "09",
    icon: "⬡",
    tag: "Engineering",
    title: "Figma to Website",
    hook: "Your vision, shipped pixel-perfect.",
    description:
      "Hand us your Figma file and we translate every frame into living, breathing React code — animations, hover states, responsive breakpoints — nothing lost in translation.",
    details: [
      "Pixel-perfect Figma implementation",
      "Component-based React build",
      "Responsive across all breakpoints",
      "Animations & micro-interactions included",
    ],
    stat: { value: "100%", label: "pixel-perfect fidelity" },
  },
];

const tagColors = {
  Design:      "text-[#FF7F11] bg-[#FF7F11]/10 border-[#FF7F11]/20",
  Engineering: "text-blue-400  bg-blue-400/10  border-blue-400/20",
  Growth:      "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Commerce:    "text-purple-400 bg-purple-400/10 border-purple-400/20",
  Support:     "text-gray-300  bg-gray-300/10  border-gray-300/20",
  Branding:    "text-pink-400  bg-pink-400/10  border-pink-400/20",
  Marketing:   "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
};

// ── Horizontal scroll ticker ──────────────────────────────────────────────────
function Ticker() {
  const items = services.map(s => s.title);
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/[0.06] py-3 mb-16 md:mb-24">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((title, i) => (
          <span key={i} className="text-xs tracking-[0.35em] uppercase text-white/20 font-medium flex-shrink-0 flex items-center gap-10">
            {title}
            <span className="text-[#FF7F11]/40">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ── Featured / Spotlight card (large, first card) ─────────────────────────────
function SpotlightCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="col-span-1 lg:col-span-2 group"
    >
      <motion.div
        animate={{
          borderColor: hovered ? "rgba(255,127,17,0.3)" : "rgba(255,255,255,0.06)",
          backgroundColor: hovered ? "#111" : "#0d0d0d",
        }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl border p-8 md:p-10 relative overflow-hidden min-h-[380px] flex flex-col justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Background number */}
        <span
          className="absolute right-8 top-6 font-black text-[120px] leading-none text-white/[0.025] select-none pointer-events-none transition-all duration-500"
          style={{ transform: hovered ? "scale(1.05) translateY(-4px)" : "scale(1)" }}
        >
          {service.number}
        </span>

        {/* Corner glow */}
        <motion.div
          className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#FF7F11] blur-3xl pointer-events-none"
          animate={{ opacity: hovered ? 0.07 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Top section */}
        <div>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.span
                animate={{ color: hovered ? "#FF7F11" : "#444" }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-mono leading-none"
              >
                {service.icon}
              </motion.span>
              <span className={cn(
                "text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-full border font-medium",
                tagColors[service.tag] ?? "text-gray-500 bg-gray-500/10 border-gray-500/20"
              )}>
                {service.tag}
              </span>
            </div>
            {/* Stat badge */}
            <div className="text-right">
              <div className="text-2xl font-black text-[#FF7F11] leading-none">{service.stat.value}</div>
              <div className="text-[10px] text-white/30 tracking-wide mt-0.5 max-w-[120px] text-right leading-tight">{service.stat.label}</div>
            </div>
          </div>

          {/* Hook line */}
          <p className="text-white/40 text-sm font-medium tracking-wide italic mb-3">
            "{service.hook}"
          </p>

          {/* Title */}
          <motion.div className="h-px rounded-full mb-3" animate={{ width: hovered ? "3rem" : "1.5rem", backgroundColor: hovered ? "#FF7F11" : "#2a2a2a" }} transition={{ duration: 0.3 }} />
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4 leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <motion.p
            animate={{ color: hovered ? "#bbb" : "#777" }}
            transition={{ duration: 0.3 }}
            className="text-base md:text-[17px] leading-relaxed max-w-xl"
          >
            {service.description}
          </motion.p>
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            >
              {service.details.map((d, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="flex items-start gap-2.5 text-sm text-gray-400"
                >
                  <span className="text-[#FF7F11] text-xs mt-0.5 flex-shrink-0">◆</span>
                  {d}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-6 flex items-center justify-between">
          <motion.button
            animate={{ opacity: hovered ? 1 : 0.4 }}
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
            className="flex items-center gap-2 text-[#FF7F11] text-sm font-semibold tracking-wide cursor-pointer group/btn"
          >
            {expanded ? "Show less" : "What's included"}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-base">↓</motion.span>
          </motion.button>

          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            className="w-8 h-8 rounded-full border border-[#FF7F11]/40 flex items-center justify-center"
          >
            <span className="text-[#FF7F11] text-xs">→</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Standard narrative card ───────────────────────────────────────────────────
function NarrativeCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      <motion.div
        animate={{
          borderColor: hovered ? "rgba(255,127,17,0.25)" : "rgba(255,255,255,0.05)",
          backgroundColor: hovered ? "#111111" : "#0d0d0d",
        }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border h-full p-6 md:p-7 flex flex-col relative overflow-hidden"
      >
        {/* Corner glow */}
        <motion.div
          className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#FF7F11] blur-3xl pointer-events-none"
          animate={{ opacity: hovered ? 0.08 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Number watermark */}
        <span className="absolute bottom-4 right-5 text-6xl font-black text-white/[0.03] select-none pointer-events-none leading-none">
          {service.number}
        </span>

        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <motion.span
            animate={{ color: hovered ? "#FF7F11" : "#444" }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-mono leading-none"
          >
            {service.icon}
          </motion.span>
          <span className={cn(
            "text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-full border font-medium",
            tagColors[service.tag] ?? "text-gray-500 bg-gray-500/10 border-gray-500/20"
          )}>
            {service.tag}
          </span>
        </div>

        {/* Stat */}
        <div className="mb-4">
          <span className="text-xl font-black text-[#FF7F11] leading-none block">{service.stat.value}</span>
          <span className="text-[10px] text-white/25 tracking-wide leading-tight block mt-0.5">{service.stat.label}</span>
        </div>

        {/* Hook */}
        <p className="text-white/35 text-xs font-medium tracking-wide italic mb-2 leading-relaxed">
          "{service.hook}"
        </p>

        {/* Title */}
        <motion.div className="h-px rounded-full mb-2.5" animate={{ width: hovered ? "2rem" : "1rem", backgroundColor: hovered ? "#FF7F11" : "#2a2a2a" }} transition={{ duration: 0.3 }} />
        <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-3 leading-tight">
          {service.title}
        </h3>

        {/* Description */}
        <motion.p
          animate={{ color: hovered ? "#bbb" : "#777" }}
          transition={{ duration: 0.3 }}
          className="text-[15px] leading-relaxed flex-1"
        >
          {service.description}
        </motion.p>

        {/* Expandable */}
        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mt-4 flex flex-col gap-2"
            >
              {service.details.map((d, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-2 text-sm text-gray-400"
                >
                  <span className="text-[#FF7F11] text-[10px] mt-0.5 flex-shrink-0">◆</span>
                  {d}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          animate={{ opacity: hovered ? 1 : 0.35, x: hovered ? 0 : -6 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-2 text-[#FF7F11] text-xs font-semibold tracking-wide mt-4 w-fit cursor-pointer"
        >
          {expanded ? "Show less" : "What's included"}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-sm">↓</motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// ── Process steps (the story spine) ──────────────────────────────────────────
const steps = [
  { n: "1", title: "We listen.", body: "Every engagement begins with understanding your business, not pitching ours." },
  { n: "2", title: "We design.", body: "Wireframes, prototypes, iteration — until every screen tells the right story." },
  { n: "3", title: "We build.", body: "Clean, tested, production-grade code shipped in focused sprints." },
  { n: "4", title: "We grow.", body: "Post-launch, we monitor, optimise, and evolve alongside your business." },
];

function ProcessStrip() {
  return (
    <div className="my-16 md:my-24">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-medium">How we work</span>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-5 left-[calc(100%+8px)] right-0 h-px bg-white/[0.06] w-4" style={{ left: "calc(100% - 8px)", width: "calc(100% - 50%)" }} />
            )}
            <div className="rounded-xl border border-white/[0.05] bg-[#0d0d0d] p-5">
              <span className="text-3xl font-black text-white/[0.07] leading-none block mb-3">{step.n}</span>
              <h4 className="text-base font-black text-white mb-1.5">{step.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{step.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function ServicesSection() {
  const [spotlight, ...rest] = services;

  return (
    <section
      id="services"
      className="bg-[#0d0d0d] text-white py-16 md:py-24 lg:py-32 px-5 sm:px-10 md:px-16"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* ── Hero header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.45em] uppercase text-[#FF7F11] mb-4 font-medium">
            What We Do
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
                className="font-black tracking-tighter leading-[0.95] text-white"
              >
                We build websites
                <br />
                <span className="text-white/30">that work harder</span>
                <br />
                <span className="text-[#FF7F11]">than your team.</span>
              </h2>
            </div>
            <p className="text-white/40 text-base md:text-lg max-w-sm leading-relaxed lg:text-right">
              From a blank canvas to a growing business — every service we offer is part of the same story.
            </p>
          </div>
        </motion.div>

        {/* ── Ticker ── */}
        <Ticker />

        {/* ── Services grid ── */}
        {/* Row 1: Spotlight (2/3) + Standard (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          <SpotlightCard service={spotlight} index={0} />
          <NarrativeCard service={services[1]} index={1} />
        </div>

        {/* Row 2: 3 standard cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {services.slice(2, 5).map((s, i) => (
            <NarrativeCard key={i} service={s} index={i + 2} />
          ))}
        </div>

        {/* ── Process strip ── */}
        <ProcessStrip />

        {/* Row 3: Standard (1/3) + Spotlight (2/3) — reversed for rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          <NarrativeCard service={services[5]} index={5} />
          <SpotlightCard service={services[6]} index={6} />
        </div>

        {/* Row 4: 3 standard cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.slice(7).map((s, i) => (
            <NarrativeCard key={i} service={s} index={i + 7} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-24 border border-white/[0.06] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#0f0f0f]"
        >
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#FF7F11] mb-2 font-medium">Ready to start?</p>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              Your story starts with a conversation.
            </h3>
            <p className="text-white/40 text-sm mt-2 max-w-md leading-relaxed">
              Tell us what you're building. We'll tell you exactly how we'd approach it — no pitch, no pressure.
            </p>
          </div>
          <button className="flex-shrink-0 bg-[#FF7F11] text-black font-bold text-sm tracking-wide px-7 py-3.5 rounded-full hover:bg-[#ff9233] transition-colors duration-200 cursor-pointer">
            <a href="#price">Start the conversation →</a>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

// ── Named exports (backward-compatible) ──────────────────────────────────────
export { NarrativeCard as ServiceCard };
export { services };

export const Card = ({ className, children }) => (
  <div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent relative z-20", className)}>
    <div className="relative z-50"><div className="p-4">{children}</div></div>
  </div>
);
export const CardTitle = ({ className, children }) => (
  <h4 className={cn("text-white font-bold tracking-wide mt-4 text-xl", className)}>{children}</h4>
);
export const CardDescription = ({ className, children }) => (
  <p className={cn("mt-8 text-gray-300 tracking-wide leading-relaxed text-base", className)}>{children}</p>
);