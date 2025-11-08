import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Cloud,
  Server,
  GitMerge,
  Monitor,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const About = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const offerings = [
    {
      icon: <Code size={28} />,
      title: "Web Development",
      shortDesc: "Modern, responsive websites",
      description:
        "I craft responsive, visually appealing, and fast-loading websites using modern frameworks and clean design principles. My focus is on delivering accessible, user-friendly, and pixel-perfect interfaces.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      tech: ["React", "Next.js", "TailwindCSS"],
    },
    {
      icon: <Monitor size={28} />,
      title: "MERN Stack Development",
      shortDesc: "Full-stack JavaScript solutions",
      description:
        "Building robust end-to-end MERN stack applications with seamless integration between front-end and back-end. I focus on scalable architectures, secure APIs, and optimized MongoDB performance.",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud & Infrastructure",
      shortDesc: "AWS cloud architecture",
      description:
        "I design and deploy cloud-native solutions on AWS, ensuring high availability, fault tolerance, and cost efficiency. From EC2 and S3 to IAM and Lambda, I optimize infrastructure for scalability and performance.",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      tech: ["AWS", "EC2", "S3", "CloudFront"],
    },
    {
      icon: <GitMerge size={28} />,
      title: "DevOps & CI/CD",
      shortDesc: "Automated deployment pipelines",
      description:
        "Implementing DevOps practices to automate and streamline deployments using Docker, Jenkins, and GitHub Actions — enabling faster releases, better monitoring, and fewer manual interventions.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      tech: ["Docker", "Jenkins", "GitHub Actions"],
    },
    {
      icon: <Server size={28} />,
      title: "Freelance Services",
      shortDesc: "End-to-end project delivery",
      description:
        "Providing full-cycle freelance solutions — from concept to deployment. I collaborate closely with clients to deliver tailored, production-ready solutions that emphasize performance and reliability.",
      gradient: "from-indigo-500 via-violet-500 to-purple-500",
      tech: ["MERN", "AWS", "DevOps"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="py-16 px-4 sm:px-6 w-full max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 relative">
          <motion.h2
            className="relative text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200">
              What I Offer
            </span>
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-[3px] sm:h-[4px] bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ transformOrigin: "left center" }}
            />
          </motion.h2>

          <p className="text-sm sm:text-base text-black/70 dark:text-white/70 leading-relaxed max-w-3xl mx-auto">
            Transforming ideas into powerful digital experiences — from concept to
            deployment. I deliver high-performance web apps built with cutting-edge
            technologies and cloud infrastructure.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() =>
                setSelectedCard(selectedCard === index ? null : index)
              }
              className="group relative cursor-pointer"
            >
              <motion.div
                className="relative h-full p-4 sm:p-5 rounded-2xl bg-white/50 dark:bg-black/30 backdrop-blur-xl border border-black/5 dark:border-white/10 overflow-hidden"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100`}
                  initial={false}
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.02, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "2px",
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-3 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-black/60 dark:text-white/60 mb-2 sm:mb-4">
                    {item.shortDesc}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>

                  <AnimatePresence>
                    {selectedCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-3 border-t border-black/10 dark:border-white/10"
                      >
                        <p className="text-xs sm:text-sm text-black/70 dark:text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
