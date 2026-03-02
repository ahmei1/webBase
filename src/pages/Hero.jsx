import Navbar from "../Components/Nav";
import Squares from "../Components/squares";
import RotatingText from "../Components/Jumpingtext";
import FlowButton from "../Components/btn";
import { motion } from "framer-motion";

export default function Hero() {
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
          
          {/* FLOATING IMAGE - Adjusted for Responsiveness */}
          <motion.img
            src="src/assets/Adobe Express - file.png"
            className="hidden lg:block w-50 h-50 absolute left-260 top-20 xl:right-0"
            alt="Decoration"
            initial={{ y: 0 }}
            animate={{ y: 20 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight">
            Turn Your{" "}
            <span className="text-[#FF7F11] font-extrabold block sm:inline">IDEAS</span> into{" "}
            <br className="hidden sm:block" />
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
          </h1>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto opacity-90">
            Empowering businesses, startups and brands to turn their ideas
            <span className="hidden md:inline"><br /></span> into a real functional website with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 sm:mt-12">
            <a href="#price" className="w-full sm:w-auto">
              <FlowButton text="Build Now" />
            </a>

            <button className="text-lg md:text-xl font-semibold hover:text-[#FF7F11] transition-colors">
              <a href="Services">Explore Services</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}