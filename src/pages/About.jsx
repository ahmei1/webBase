import CountUp from "../Components/CountUp";
import { motion } from "framer-motion";
import HandWrittenTitle from "../Components/HandWritten";
import TimelineDemo from "../Components/TimeLineDemo";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#181818] text-white py-10 md:py-24 lg:py-32  sm:px-10 md:px-16"
    >
      <div className="max-w-350 mx-auto flex flex-col">

        {/* ── Hero Text ── */}
        <div>
          {/* Label — small, muted */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-2">
            About Us.
          </h1>

          {/* Big title — fluid clamp from ~40px → 105px */}
          <motion.h1
            initial={{ opacity: 0, y: -90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ fontSize: "clamp(2.2rem, 7vw, 6.5rem)", lineHeight: 1.05 }}
            className="font-bold tracking-tight"
          >
            Your Tech Journey Starts Here...
          </motion.h1>

          {/* Subtitle */}
          <p
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.5rem)" }}
            className="text-gray-400 mt-4"
          >
            — We transform ideas into fast, modern, and scalable websites.
          </p>

          <hr className="border-gray-700 mt-6 mb-0" />
        </div>

        {/* ── Who We Are ── */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16 pt-16 md:pt-20 lg:pt-24">
          {/* Left: handwritten title */}
          <div className="flex-shrink-0">
            <HandWrittenTitle title="Who We Are?" />
          </div>

          {/* Right: body copy */}
          <motion.p
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}
            className="text-gray-300 leading-relaxed max-w-2xl lg:pt-4"
          >
            We help entrepreneurs, startups, and businesses transform their
            ideas into fully{" "}
            <span className="font-bold text-[#FF7F11]">functional websites.</span>{" "}
            From design to development, we create fast, modern, and scalable
            web experiences.
          </motion.p>
        </div>

        {/* ── Our Mission ── */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16 pt-16 md:pt-20 lg:pt-24">
          {/* Left: handwritten title */}
          <div className="flex-shrink-0">
            <HandWrittenTitle title="Our Mission..." />
          </div>

          {/* Right: body copy */}
          <motion.p
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}
            className="text-gray-300 leading-relaxed max-w-2xl lg:pt-4"
          >
            Every great product starts with an{" "}
            <span className="text-[#FF7F11] font-bold">idea.</span> But turning
            that idea into a real website can be challenging. Our mission is to
            simplify that journey by helping people{" "}
            <span className="text-[#FF7F11] font-bold">
              transform their concepts
            </span>{" "}
            into modern, user-friendly{" "}
            <span className="text-[#FF7F11] font-bold">digital products.</span>{" "}
            We focus on clean design, performance and great user experiences.
          </motion.p>
        </div>

        {/* ── Stats ── */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-5 sm:gap-6 md:gap-8 lg:gap-10 pt-16 md:pt-20 lg:pt-24">
          {[
            { value: 40, label: "Projects Finished" },
            { value: 5,  label: "Years Of Experience" },
            { value: 35, label: "Clients WorldWide" },
          ].map(({ value, label }) => (
            <motion.div
              key={label}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="flex-1 border-2 border-gray-700 hover:border-[#FF7F11]
                transition duration-300 rounded-2xl p-6 md:p-8 text-center"
            >
              <h2
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                className="font-bold"
              >
                +
                <CountUp
                  from={0}
                  to={value}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  startCounting={false}
                />
              </h2>
              <p
                style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.25rem)" }}
                className="text-gray-400 mt-2"
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Timeline ── */}
        <div className="mt-16 w-full">
          <TimelineDemo />
        </div>


      </div>
    </section>
  );
}