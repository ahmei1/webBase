import Navbar from "../Components/Nav";
import Squares from "../Components/squares";
import RotatingText from "../Components/Jumpingtext";
import FlowButton from "../Components/btn";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // 30% visible
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <Squares
          speed={0.5}
          squareSize={80}
          direction="diagonal"
          borderColor="#777C6D"
          hoverFillColor="#fff"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mt-16 md:mt-10">
          <motion.div
            initial={{ opacity: 0, x: 90 }} // start hidden & down
            whileInView={{ opacity: 1, x: 0 }} // animate when visible
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="src/assets/Adobe Express - file.png"
              alt="Decoration"
              className="
              hidden lg:block 
              w-32 h-32 
              md:w-40 md:h-40 
              lg:w-48 lg:h-48 
              absolute 
              top-20 
              right-4 
              xl:right-15
            "
              initial={{ y: 0 }}
              animate={{ y: 20 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
          {/* FLOATING IMAGE - RESPONSIVE */}

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: -90 }} // start hidden & down
            whileInView={{ opacity: 1, y: 0 }} // animate when visible
            transition={{ duration: 0.7 }}
          >
            Turn Your{" "}
            <span className="text-[#FF7F11] font-extrabold block sm:inline">
              IDEAS
            </span>{" "}
            into <br className="hidden sm:block" />
            <span className="inline-flex items-center justify-center mt-2 sm:mt-0">
              <RotatingText
                texts={["Powerful", "Creative", "Working"]}
                mainClassName="px-3 py-1 sm:px-4 font-bold sm:py-2 md:px-5 md:py-3 bg-[#FF7F11] text-white rounded-lg w-fit transition-all duration-500 ease-in-out overflow-hidden"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.05}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </span>{" "}
            Website
          </motion.h1>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 90 }} // start hidden & down
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 40,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mt-6 text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto opacity-90">
              Empowering businesses, startups and brands to turn their ideas
              <span className="hidden md:inline">
                <br />
              </span>
              into a real functional website with modern technologies
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
            <motion.a
              href="#price"
              className="w-full sm:w-auto"
              ref={ref}
              initial={{ opacity: 0, x: -90 }} // start hidden & down
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <FlowButton text="Build Now" />
            </motion.a>

            <motion.button
              ref={ref}
              initial={{ opacity: 0, x: 90 }} // start hidden & down
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full sm:w-auto text-base sm:text-lg md:text-xl font-semibold hover:text-[#FF7F11] transition-colors"
            >
              <a href="#services">Explore Services</a>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
