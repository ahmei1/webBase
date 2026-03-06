import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Timeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#181818] text-white font-sans overflow-x-hidden"
      ref={containerRef}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
          How We Build Your Website
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-md">
          We transform your ideas into modern, fast, and scalable websites.
          Here is our workflow.
        </p>
      </div>

      {/* Timeline entries */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-16 sm:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 sm:pt-16 md:pt-32 lg:pt-40 md:gap-10"
          >
            {/* Left — sticky label + dot */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs md:w-full shrink-0">
              <div className="h-10 w-10 absolute left-3 rounded-full bg-black flex items-center justify-center border border-gray-700">
                <div className="h-4 w-4 rounded-full bg-gray-300" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl lg:text-4xl font-bold text-gray-400">
                {item.title}
              </h3>
            </div>

            {/* Right — content */}
            <div className="relative pl-16 sm:pl-20 pr-4 md:pl-6 w-full min-w-0">
              <h3 className="md:hidden block text-xl sm:text-2xl mb-4 font-bold text-gray-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Animated vertical line */}
        <div
          style={{ height }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-700 to-transparent"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
}