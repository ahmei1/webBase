import Navbar from "../Components/Nav";
import Squares from "../Components/squares";
import RotatingText from "../Components/Jumpingtext";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-full flex items-center justify-center text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-[#1a1a1a] ">
        <Squares
          speed={0.5}
          squareSize={80}
          direction="diagonal"
          borderColor="#777C6D"
          hoverFillColor="#fff"
        />
      </div>

      {/* FOREGROUND */}
      <div className="relative z-10 w-full">
        <Navbar />

        <div className="text-center mt-20">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-center leading-tight">
            Turn Your <span className="text-[#FF7F11]">IDEAS</span> into <br />
            <span className="inline-flex items-center justify-center">
              <RotatingText
                texts={["Powerful", "Creative"]}
                mainClassName="px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 bg-[#FF7F11] text-white font-bold rounded-lg w-fit transition-all duration-500 ease-in-out overflow-hidden"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.050}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </span>{" "}
            Website
          </h1>
          <p className="mt-4 text-2xl font-extrabold">
            Empowering businesses, startups and brands to turn thier ideas
            <br /> into a real functional website with modern technologies
          </p>
          <div className=" mt-10 text-2xl">
          <button className="mt-6 px-6 py-3 bg-black rounded">
            <a href="#price">Build Now</a>
          </button>

          <button className="px-10 mt-5"><a href="Services">Explore Services</a></button>

          </div>
        </div>
      </div>
    </section>
  );
}
