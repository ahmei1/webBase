import React from 'react';
import { ArrowRight } from 'lucide-react';

const FlowButton = ({ text = "Modern Button" }) => {
  return (
    <button className="
      group relative flex items-center gap-1 overflow-hidden 
      rounded-[100px] border-[1.5px] border-[#333333]/40 bg-transparent 
      px-8 py-3  font-semibold text-white cursor-pointer 
      transition-all duration-600ms ease-[cubic-bezier(0.23,1,0.32,1)] 
      hover:border-transparent hover:text-white hover:rounded-12px
      active:scale-0.95 hover:bg-[#FF7F11]  w-full sm:w-auto
      sm:px-6 sm:py-3
      text-base sm:text-lg
      
    ">
      
      {/* Left arrow (appears on hover) */}
      <ArrowRight 
        className="absolute w-4 h-4 left-[-25%] stroke-white fill-none z-10 
        group-hover:left-4 transition-all duration-800ms 
        ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />

      {/* Button Text */}
      <span className="relative z-1 text-2xl -translate-x-3 group-hover:translate-x-3 transition-all duration-800ms ease-out">
        {text}
      </span>

      {/* Expanding Background Circle */}
      <span className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-4 h-4 bg-[#FF7F11] rounded-full opacity-0 
        group-hover:w-220px group-hover:h-220px group-hover:opacity-100 
        transition-all duration-800ms ease-[cubic-bezier(0.19,1,0.22,1)]
      "></span>

      {/* Right arrow (disappears on hover) */}
      <ArrowRight 
        className="absolute w-4 h-4 right-4 stroke-white fill-none z-10 
        group-hover:right-[-25%] transition-all duration-800ms 
        ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </button>
  );
};

export default FlowButton;