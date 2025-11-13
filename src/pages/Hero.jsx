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
    }, 60);
    return () => clearInterval(interval);
  }, [fullText]);

  // use CSS variables from your theme (examples: --primary, --chart-2, --chart-4, --accent, --muted, --border)
  const services = [
    {
      icon: <Code size={28} />, // Increased icon size
      title: "Full-Stack Development",
      description: "Building scalable MERN applications",
      colorVar: "--chart-1",
    },
    {
      icon: <Cloud size={28} />, // Increased icon size
      title: "Cloud Architecture",
      description: "AWS infrastructure & optimization",
      colorVar: "--chart-4",
    },
    {
      icon: <Zap size={28} />, // Increased icon size
      title: "DevOps Solutions",
      description: "CI/CD pipelines & automation",
      colorVar: "--chart-5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <div className="flex-1 max-w-2xl text-center md:text-left">
            
            {/* --- LOGO REMOVED --- */}

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-4xl lg:text-7xl font-black mb-3 pb-2 relative"
              style={{
                // gradient text using CSS variables
                background:
                  "linear-gradient(90deg, var(--primary), var(--chart-4), var(--chart-5))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Kiran Rajeev
            </motion.h1>

            {/* Typing Effect */}
            <motion.div variants={itemVariants} className="md:mb-4 h-7">
              <p
                className="text-sm md:text-xl font-light"
                style={{ color: "var(--muted-foreground)" }}
              >
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1"
                  style={{
                    width: 2,
                    height: 20,
                    background: "var(--primary)",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-lg leading-relaxed mb-4"
              style={{ color: "var(--muted-foreground)" }}
            >
              Crafting robust, scalable web solutions with cutting-edge technologies.
              From concept to deployment, I bring your digital vision to life with precision
              and passion.
            </motion.p>

            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center text-sm md:text-xl gap-3 px-5 py-2 rounded-full backdrop-blur-xl mb-6 border"
              style={{
                background: "var(--accent)",
                borderColor: "var(--sidebar-border)",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 rounded-full"
                style={{ background: "var(--chart-1)" }}
              />
              <span style={{ color: "var(--chart-2)", fontWeight: 600 }}>
                Available for freelance projects
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row gap-2 justify-center md:justify-start flex-wrap"
            >
              <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "#projects")}
                  className="group relative px-4 py-1 md:py-3 rounded-full text-white font-semibold overflow-hidden text-xs sm:text-base"
                  style={{
                    background: "linear-gradient(90deg, var(--primary), var(--chart-4))",
                  }}
                >
                  <span className="relative flex items-center justify-center gap-2">
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold border flex items-center gap-2 justify-center transition-all"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "var(--sidebar-border)",
                  color: "var(--foreground)",
                }}
              >
                <Send size={18} /> Hire Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Service Steps */}
          <motion.div
  className="flex-shrink-0 w-full md:w-auto md:max-w-sm flex flex-col gap-4 sm:gap-6"
  variants={itemVariants}
>
  <div className="relative flex flex-col gap-4 sm:gap-6">
    {/* Timeline line */}
    <div
      className="absolute left-4 sm:left-5 top-4 sm:top-5 bottom-4 sm:bottom-6 w-0.5"
      style={{ background: "var(--sidebar-border)" }}
    />

    {services.map((service, index) => (
      <motion.div
        key={index}
        className="relative flex items-start gap-3 sm:gap-4 z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        {/* Icon container */}
        <div
          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-sm border flex items-center justify-center"
          style={{
            borderColor: "var(--border)",
            background: "var(--popover)",
          }}
        >
          <div style={{ color: `var(${service.colorVar})` }}>{service.icon}</div>
        </div>

        {/* Text */}
        <div className="text-left pt-0.5">
          <h4
            className="text-sm sm:text-base font-semibold"
            style={{ color: "var(--foreground)" }}
          >
            {service.title}
          </h4>
          <p
            className="text-xs sm:text-sm"
            style={{ color: "var(--muted-foreground)" }}
          >
            {service.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
          style={{ color: "var(--muted-foreground)" }}
        >
          <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            Scroll to explore
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;