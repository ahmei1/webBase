import img1 from "../assets/Screenshot From 2026-03-21 20-43-55.png";
import img2 from "../assets/Screenshot From 2026-03-21 20-43-48.png";
import img3 from "../assets/Screenshot From 2026-03-21 20-43-41.png";
import img4 from "../assets/Screenshot From 2026-03-21 20-43-32.png";
import img5 from "../assets/Screenshot From 2026-03-21 20-43-23.png";
import img6 from "../assets/Screenshot From 2026-03-21 20-43-12.png";
import img7 from "../assets/Screenshot From 2026-03-21 20-43-02.png";
import img8 from "../assets/Screenshot From 2026-03-21 20-42-46.png";
import img9 from "../assets/Screenshot From 2026-03-24 12-04-08.png";
import img10 from "../assets/Screenshot From 2026-03-24 14-51-03.png";
import img11 from "../assets/dev-icon-181.svg";
import StripeCard from "../Components/hoverCard";
import { div, style } from "framer-motion/client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function OurWork() {
  const projects = [
    {
      img: img9,
      bg: "#4D2D8C",
      text1: "Built to be unshakable",
      text2: "A website helps to make every workout counts",
      link: "https://luminet-fitness.vercel.app/",
    },
    {
      img: img2,
      bg: "#FF5B5B",
      text1: "Flow",
      text2:
        "Flow is a sanctuary for body and mind. Whether you're a beginner or seasoned practitioner, every class is an invitation to return to yourself.",
      link: "/demos/07-flow-yoga.html",
    },
    {
      img: img3,
      bg: "#EF7722",
      text1: "Forge",
      text2:
        "This isn't a gym. It's a forge. The place where ordinary people are hammered, heated, and shaped into something stronger than they thought possible.",
      link: "/demos/08-forge-crossfit.html",
    },
    {
      img: img4,
      bg: "#91ADC8",
      text1: "Bloom Wellness",
      text2: "A space made just for you to flourish",
      link: "/demos/09-bloom-wellness.html",
    },
    {
      img: img5,
      bg: "#FCC61D",
      text1: "Zest",
      text2: "RealFood Fast.",
      link: "/demos/02-zest-restaurant.html",
    },
    {
      img: img6,
      bg: "#0D1164",
      text1: "Pulse",
      text2:
        "Pulse is more than a cycling studio. It's 45 minutes of darkness, bass, and sweat — where your only competition is the person you were yesterday.",
      link: "/demos/10-pulse-cycling.html",
    },
    {
      img: img7,
      bg: "#37353E",
      text1: "Bloc",
      text2: "Build better cities",
      link: "/demos/13-bloc-realestate.html",
    },
    {
      img: img8,
      bg: "#1C352D",
      text1: "Hem",
      text2: "Find a Home That Feels Like You.",
      link: "/demos/12-hem-realestate.html",
    },
  ];

  const more = [
    {
      img: img1,
      bg: "#839705",
      text1: "APex",
      text2:
        "No machines. No mirrors. No excuses. Apex is where serious athletes come to train — and where everyone else discovers they were serious all along.",
      link: "/demos/06-apex-gym.html",
    },
    {
      img: img10,
      bg: "#740A03",
      text1: "Ember",
      text2: "Cuisine Born from Passion",
      link: "/demos/01-ember-restaurant.html",
    },
  ];

  const [initial, setInitial] = useState(projects);
  const [seeMore, setSeeMore] = useState(false);

  const handleMore = () => {
    setInitial([...projects, ...more]);
    setSeeMore(true);
  };

  return (
    <section id="our-work" className="bg-[#0d0d0d] py-20 min-h-screen ">
      <div className="flex text-3xl text-amber-50 justify-around ">
        <h1 className="font-extrabold text-5xl">🔸OUR WORK IN ACTION</h1>
        <p>
          With Years Of Experience We Have Helped Many <br /> Clients TO
          Approach Their Dream Websites
        </p>
      </div>
      <div className="text-amber-50 lg:grid lg:grid-cols-2 sm:grid-cols-1 gap-5 md:grid-cols-1 text-3xl py-30 px-50 ">
        {initial.map((value, i) => (
          <div className="transform transition-all duration-300" key={i - 1}>
            <StripeCard
              img={value.img}
              bg={value.bg}
              text1={value.text1}
              text2={value.text2}
              link={value.link}
            />
          </div>
        ))}
      </div>

      {seeMore ? null : (
        <motion.div
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={handleMore}
            className="bg-[#FF7F11] flex  text-amber-50 font-bold text-2xl gap-3 hover:scale-120 px-6 py-3 rounded-lg cursor-pointer transform transition-all duration-400 ease"
          >
            See More Projects
            <img width={15} height={15} src={img11} alt="more projects" />
          </button>
        </motion.div>
      )}
    </section>
  );
}

export default OurWork;
