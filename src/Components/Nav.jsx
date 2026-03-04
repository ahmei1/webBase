import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // 30% visible

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Price", href: "#price" },
    { name: "Our Work", href: "#our-work" },
  ];

  return (
    <motion.nav
      ref={ref}
      initial={{ opacity: 0, y: -90 }} // start hidden & down
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 40,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative top-5 left-1/2 -translate-x-1/2 z-100 w-[95%] md:w-fit"
    >
      <div className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 md:py-2">
        <div className="flex items-center justify-between md:justify-center md:gap-12">
          {/* LOGO */}
          <div className="flex ">
            <img className="w-20 h-20" src="src/assets/ahmed2.png" alt="" />
            <h1 className="  text-2xl md:text-4xl font-bold pt-5">
              <a href="#home">
                web<span className="text-[#FF7F11]">Base.</span>
              </a>
            </h1>
          </div>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="text-[17px] hover:text-[#FF7F11] transition-colors"
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className=" absolute top-30 left-0 w-full bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name} className="text-xl">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#FF7F11]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
