import { useState } from "react";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "GitHub", href: "https://github.com/ahmei1", icon: <FaGithub /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-abdelrahman-8ba7b9389/", icon: <FaLinkedin /> },
];

export default function SocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative flex text-2xl items-center gap-1 px-2 py-2 rounded-2xl bg-neutral-950 border border-white/10">
      {socials.map((social, index) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-15 h-10 rounded-xl text-neutral-500 hover:text-white transition-all duration-300 "
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {social.icon}

          {hoveredIndex === index && (
            <span className="absolute -top-9 px-2 py-1 text-xs bg-white text-black rounded-md ">
              {social.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}