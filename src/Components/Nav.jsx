import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;

      // Get the position of the bottom of your Hero/Home section
      const homeBottom = homeSection.getBoundingClientRect().bottom;

      // When the bottom of 'home' is less than or equal to 0, 
      // it means the section is completely off-screen (scrolled up).
      if (homeBottom <= 0) {
        setHidden(true); // Navbar hides
      } else {
        setHidden(false); // Navbar reappears when you scroll back up to Hero
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`
  w-fit my-5 bg-[#1a1a1a]/50 p-3 rounded-4xl align-middle z-auto 
  backdrop-blur-lg border border-white/20 fixed top-0 left-1/2 -translate-x-1/2 text-white 
  transition-all duration-500 ease-in-out
  ${hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-1 opacity-100 pointer-events-auto"}
`}
    >
      <div>
        <ul className="flex m-3 justify-center gap-15 p-3 ">
          <h1 className=" text-4xl font-bold">
            <a href="#home">
              web<span className=" text-[#FF7F11] ">Base.</span>
            </a>
          </h1>
          <li className="my-3 text-[17px]">
            <a href="#home">Home</a>
          </li>
          <li className="my-3 text-[17px]">
            <a href="#about">About</a>
          </li>
          <li className="my-3 text-[17px]">
            <a href="#services">Services</a>
          </li>
          <li className="my-3 text-[17px]">
            <a href="#contact">Contact</a>
          </li>
          <li className="my-3 text-[17px]">
            <a href="#price">Price</a>
          </li>
          <li className="my-3 text-[17px]">
            <a href="#our-work">Our Work</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
