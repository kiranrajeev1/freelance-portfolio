import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  // --- ERROR FIX ---
  // Added a check to ensure the 'project' prop is not undefined.
  // If it is, the component will return null instead of crashing.
  if (!project) {
    console.error("ProjectCard component rendered without a 'project' prop.");
    return null;
  }
  // --- END ERROR FIX ---

  const { title, imageSrc, description, skills, demo, source } = project;
  const isEven = index % 2 === 0;
  const ref = useRef(null);

  // Track scroll progress of the card relative to viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Track when card enters/leaves viewport
  });

  // Scale: 0.75 when leaving to bottom, 1 when in middle, 1 when leaving to top
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1, 1]);
  // Opacity: 0.7 when leaving to bottom, 1 when in middle, 1 when leaving to top
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      // --- MOBILE IMAGE FIX ---
      // Added `overflow-hidden` by default to contain the new mobile image.
      // Added `sm:overflow-visible` to allow the desktop image to "pop out" as originally designed.
      className={`group relative bg-gray-100 dark:bg-white/10 border border-black/5 dark:border-white/20 rounded-lg overflow-hidden sm:overflow-visible sm:min-h-[24rem] sm:max-w-[42rem] mx-auto mb-12 hover:bg-gray-200 transition-all duration-300 ease-out`}
    >
      {/* --- MOBILE IMAGE FIX --- */}
      {/* This new image is visible by default (on mobile) and hidden on sm screens and up. */}
      {/* It's part of the normal document flow (stacked). */}
      <img
        src={imageSrc}
        alt={`Project ${title}`}
        className="block w-full h-auto rounded-t-lg sm:hidden"
      />

      {/* Text Section */}
      <div
        className={`flex flex-col h-full p-6 sm:max-w-[50%] ${
          isEven ? "sm:ml-[21rem]" : "sm:mr-[21rem]"
        }`}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>

        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
            >
              {skill}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-4">
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-200"
            >
              <Github size={16} /> Source
            </a>
          )}
        </div>
      </div>

      {/* Desktop Image */}
      {/* --- MOBILE IMAGE FIX --- */}
      {/* This is your original image. It remains unchanged. */}
      {/* It is `hidden` by default and becomes `sm:block` (visible) on larger screens. */}
      <img
        src={imageSrc}
        alt={`Project ${title}`}
        className={`absolute hidden sm:block top-8 w-[28rem] rounded-t-lg shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-[1.04] group-hover:translate-y-3
          ${isEven
            ? "group-hover:translate-x-3 group-hover:rotate-2 -left-40"
            : "group-hover:-translate-x-3 group-hover:-rotate-2 -right-40"
          }
        `}
      />
    </motion.div>
  );
};

export default ProjectCard;