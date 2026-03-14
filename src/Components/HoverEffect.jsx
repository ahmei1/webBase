import { cn } from "../utlis";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ── Service data ──────────────────────────────────────────────────────────────
const services = [
  {
    icon: "✦",
    title: "Web Design",
    description: "Pixel-perfect interfaces built around your brand. Every layout, colour, and interaction is crafted to convert visitors into customers.",
    tag: "Design",
    details: [
      "Custom UI tailored to your brand identity",
      "Wireframes & interactive prototypes",
      "Typography, colour systems & spacing",
      "Designed for conversion & engagement",
    ],
  },
  {
    icon: "⟨/⟩",
    title: "Web Development",
    description: "Clean, modern code from front to back. Fast load times, smooth animations, and rock-solid architecture that scales as you grow.",
    tag: "Engineering",
    details: [
      "React, Next.js & modern stacks",
      "REST & GraphQL API integrations",
      "Performance-first — sub-2s load times",
      "Scalable, maintainable codebase",
    ],
  },
  {
    icon: "◎",
    title: "SEO & Performance",
    description: "We optimise every layer — Core Web Vitals, meta structure, and page speed — so your site ranks higher and loads instantly.",
    tag: "Growth",
    details: [
      "Core Web Vitals optimisation",
      "On-page SEO & meta structure",
      "Image & bundle size optimisation",
      "Google Search Console setup",
    ],
  },
  {
    icon: "⊡",
    title: "E-commerce",
    description: "Custom storefronts built to sell. Seamless checkout flows, product pages that convert, and integrations that just work.",
    tag: "Commerce",
    details: [
      "Shopify, WooCommerce & custom builds",
      "Optimised product & checkout pages",
      "Payment gateway integrations",
      "Inventory & order management",
    ],
  },
  {
    icon: "⟳",
    title: "Maintenance & Support",
    description: "We stay with you after launch. Updates, bug fixes, performance monitoring — your site always runs at its best.",
    tag: "Support",
    details: [
      "Monthly update & security patches",
      "24h bug fix turnaround",
      "Uptime & performance monitoring",
      "Content updates on demand",
    ],
  },
  {
    icon: "⊞",
    title: "Mobile-first / Responsive",
    description: "Every site we build looks and feels perfect on any device — phone, tablet, or desktop — without compromise.",
    tag: "Design",
    details: [
      "Fluid layouts for all screen sizes",
      "Touch-friendly interactions",
      "Tested on 10+ real devices",
      "No hidden mobile breakage",
    ],
  },
  {
    icon: "◈",
    title: "Branding & UI/UX",
    description: "From logo to design system — we craft a visual identity that is consistent, memorable, and built to scale.",
    tag: "Branding",
    details: [
      "Logo design & brand guidelines",
      "Full design system & component library",
      "User research & journey mapping",
      "Consistent cross-platform identity",
    ],
  },
  {
    icon: "⤓",
    title: "Landing Pages",
    description: "High-converting landing pages built fast. Designed to capture leads, drive sign-ups, and support your campaigns.",
    tag: "Marketing",
    details: [
      "CRO-focused layout & copywriting",
      "A/B test ready structure",
      "Lead capture & form integrations",
      "Fast turnaround — 3 to 5 days",
    ],
  },
  {
    icon: "⬡",
    title: "Figma to Website",
    description: "Hand us your Figma file — we turn every frame into a fully functional, production-ready website with pixel precision.",
    tag: "Engineering",
    details: [
      "Pixel-perfect Figma implementation",
      "Component-based React build",
      "Responsive across all breakpoints",
      "Animations & micro-interactions included",
    ],
  },
];

// ── Tag colors ────────────────────────────────────────────────────────────────
const tagColors = {
  Design:      "text-[#FF7F11] bg-[#FF7F11]/10 border-[#FF7F11]/20",
  Engineering: "text-blue-400  bg-blue-400/10  border-blue-400/20",
  Growth:      "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Commerce:    "text-purple-400 bg-purple-400/10 border-purple-400/20",
  Support:     "text-gray-300  bg-gray-300/10  border-gray-300/20",
  Branding:    "text-pink-400  bg-pink-400/10  border-pink-400/20",
  Marketing:   "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
};

// ── Single card with flip ─────────────────────────────────────────────────────
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: "1000px" }}
      className="relative"
    >
      {/* Flip container */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d", position: "relative" }}
        className="w-full"
      >

        {/* ── FRONT ── */}
        <motion.div
          animate={{
            boxShadow: hovered && !flipped
              ? "0 0 0 1px rgba(255,127,17,0.35), 0 0 40px rgba(255,127,17,0.08)"
              : "0 0 0 1px rgba(255,255,255,0.06)",
            backgroundColor: hovered && !flipped ? "#111111" : "#0d0d0d",
          }}
          transition={{ duration: 0.3 }}
          style={{ backfaceVisibility: "hidden" }}
          className="rounded-2xl p-6 md:p-7 flex flex-col gap-5 overflow-hidden min-h-[300px]"
        >
          {/* Corner glow */}
          <motion.div
            className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-[#FF7F11] blur-3xl pointer-events-none"
            animate={{ opacity: hovered ? 0.07 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Top row */}
          <div className="flex items-start justify-between">
            <motion.span
              animate={{ color: hovered ? "#FF7F11" : "#555" }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-mono leading-none select-none"
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

          {/* Title */}
          <div>
            <motion.div
              className="h-px rounded-full mb-3"
              animate={{
                width: hovered ? "2rem" : "1.25rem",
                backgroundColor: hovered ? "#FF7F11" : "#2a2a2a",
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3
              animate={{ color: hovered ? "#ffffff" : "#e5e5e5" }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl font-bold tracking-tight leading-tight"
            >
              {service.title}
            </motion.h3>
          </div>

          {/* Description — bigger & more visible */}
          <motion.p
            animate={{ color: hovered ? "#c0c0c0" : "#888" }}
            transition={{ duration: 0.35 }}
            className="text-base md:text-[17px] leading-relaxed flex-1"
          >
            {service.description}
          </motion.p>

          {/* Learn more button */}
          <motion.button
            onClick={() => setFlipped(true)}
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-[#FF7F11] text-sm font-semibold tracking-wide
              hover:gap-3 transition-all duration-200 w-fit cursor-pointer"
          >
            Learn more
            <motion.span
              animate={{ x: hovered ? 3 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-base leading-none"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* ── BACK ── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            inset: 0,
          }}
          className="rounded-2xl p-6 md:p-7 flex flex-col gap-5 overflow-hidden min-h-[300px]
            bg-[#0f0f0f]"
          onClick={() => setFlipped(false)}
        >
          {/* Orange glow top-right */}
          <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-[#FF7F11] blur-3xl opacity-10 pointer-events-none" />

          {/* Back border */}
          <div className="absolute inset-0 rounded-2xl border border-[#FF7F11]/25 pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-[#FF7F11] text-2xl font-mono">{service.icon}</span>
            <span className="text-xs tracking-widest uppercase text-gray-600">
              What's included
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {service.title}
          </h3>

          {/* Bullet list */}
          <ul className="flex flex-col gap-3 flex-1">
            {service.details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: flipped ? 1 : 0, x: flipped ? 0 : -12 }}
                transition={{ duration: 0.35, delay: flipped ? 0.3 + i * 0.08 : 0 }}
                className="flex items-start gap-3 text-base md:text-[17px] text-gray-300 leading-snug"
              >
                <span className="text-[#FF7F11] mt-0.5 text-xs flex-shrink-0">◆</span>
                {detail}
              </motion.li>
            ))}
          </ul>

          {/* Back button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: flipped ? 1 : 0 }}
            transition={{ delay: flipped ? 0.65 : 0, duration: 0.3 }}
            className="flex items-center gap-2 text-gray-500 hover:text-white text-sm
              font-medium transition-colors duration-200 w-fit cursor-pointer"
          >
            ← Back
          </motion.button>
        </div>

      </motion.div>
    </motion.div>
  );
}

// ── HoverEffect (named export, accepts items prop) ────────────────────────────
export function HoverEffect({ items, className }) {
  const data = items ?? services;
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {data.map((item, idx) => (
          <ServiceCard key={idx} service={item} index={idx} />
        ))}
      </div>
    </div>
  );
}

// ── Full section (default export) ─────────────────────────────────────────────
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#181818] text-white py-16 md:py-24 lg:py-32 px-5 sm:px-10 md:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#FF7F11] mb-3 font-medium">
            What We Do
          </p>
          <h2
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            className="font-black tracking-tight leading-none text-white mb-4"
          >
            Our Services.
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
            Everything you need to go from idea to a fully live, growing website — under one roof.
          </p>
        </div>
        <HoverEffect />
      </div>
    </section>
  );
}

// Backward-compatible named exports
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