import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Code, Cloud, Zap } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Freelance MERN Developer | AWS & DevOps Specialist";

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

  const services = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "Building scalable MERN applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Architecture",
      description: "AWS infrastructure & optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap size={24} />,
      title: "DevOps Solutions",
      description: "CI/CD pipelines & automation",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const stats = [
    { number: "5+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Profile Section */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl font-bold relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                KR
              </span>
            </div>
          </div>
        </motion.div>

        {/* Name with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-4 relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Kiran Rajeev
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-xl md:text-2xl text-black/70 dark:text-white/70 font-light">
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
            />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Crafting robust, scalable web solutions with cutting-edge technologies.
          From concept to deployment, I bring your digital vision to life with
          precision and passion.
        </motion.p>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                rotateX: 5 
              }}
              className="group relative p-6 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 overflow-hidden cursor-pointer"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-black/60 dark:text-white/60">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-emerald-500"
          />
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Available for freelance projects
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "#projects")}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <span className="relative flex items-center gap-2">
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.a
            href="mailto:kiranrajeev123@gmail.com"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-md flex items-center gap-2 justify-center hover:border-white/40 transition-all"
          >
            <Send size={18} />
            Hire Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-black/40 dark:text-white/40"
        >
          <span className="text-xs">Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;