import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Freelance MERN Developer | AWS & DevOps Specialist";

  // Define links as constants
  const projectsLink = "#projects";
  const emailLink = "mailto:kiranrajeev123@gmail.com";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 85);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Profile Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-[3px]"
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl font-bold">
          KR
        </div>
      </motion.div>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-400">
        Kiran Rajeev
      </h1>

      {/* Typing Effect */}
      <p className="text-lg md:text-xl text-black/70 dark:text-white/70 font-light">
        {typedText}
        <span className="animate-pulse">|</span>
      </p>

      {/* Short Description */}
      <p className="mt-3 text-black/60 dark:text-white/60 text-sm md:text-base max-w-md mx-auto leading-relaxed">
        I build responsive MERN stack web applications and manage AWS & DevOps
        deployments to ensure speed, scalability, and seamless user experience.
      </p>

      {/* Freelance Availability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-sm text-emerald-600 dark:text-emerald-400">
          Available for freelance MERN & DevOps projects
        </span>
      </motion.div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = projectsLink)}
          className="px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium text-sm sm:text-base hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          View My Work
        </motion.button>

        {/* ✅ Corrected Hire Me Button */}
        <motion.a
          href={emailLink}
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.25)" }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white/10 text-black border border-black/10 dark:bg-black/10 dark:text-white dark:border-white/10 backdrop-blur-md shadow-md flex items-center gap-2 text-sm sm:text-base"
        >
          <Send size={18} />
          Hire Me
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;