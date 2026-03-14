import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#our-work" },
    { name: "Price", href: "#price" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        ref={ref}
        initial={{ opacity: 0, y: -90 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 40,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative top-5 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-fit"
      >
        <div className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 md:py-2">
          <div className="flex items-center justify-between md:justify-center md:gap-12">
            {/* LOGO */}
            <div className="flex">
              <img className="w-20 h-20" src="src/assets/ahmed2.png" alt="" />
              <h1 className="text-2xl md:text-4xl font-bold pt-5">
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

            {/* MOBILE TOGGLE — always on top of overlay */}
            <button
              className="md:hidden text-white p-2 z-[200] relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* FULLSCREEN MOBILE OVERLAY — rendered outside nav so nothing bleeds through */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[150] bg-[#1a1a1a] flex flex-col items-center justify-center md:hidden"
          >
            {/* Close button in top-right corner */}
            <button
              className="absolute top-8 right-6 text-white p-2 z-[200]"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-2" />
                <span className="block w-6 h-0.5 bg-white opacity-0" />
                <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-2" />
              </div>
            </button>

            {/* Logo inside overlay */}
            <div className="absolute top-6 left-6 flex items-center">
              <img className="w-14 h-14" src="src/assets/ahmed2.png" alt="" />
              <h1 className="text-2xl font-bold">
                web<span className="text-[#FF7F11]">Base.</span>
              </h1>
            </div>

            {/* Nav links — staggered in */}
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-semibold text-white hover:text-[#FF7F11] transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;