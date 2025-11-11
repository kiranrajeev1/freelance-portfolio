  import React from "react";
  import { motion } from "framer-motion";
  import { Code2, Layers, Cloud, GitMerge } from "lucide-react";

  const skillCategories = [
    {
      title: "MERN Stack",
      icon: <Layers size={24} />,
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-500/50",
      skills: [
        { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", invert: false },
        { name: "Express", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
        { name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", invert: false },
        { name: "Node.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", invert: false },
        { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", invert: false },
      ],
    },
    {
      title: "AWS & Cloud",
      icon: <Cloud size={24} />,
      color: "from-orange-500 to-yellow-500",
      shadow: "shadow-orange-500/50",
      skills: [
        { name: "EC2", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
        { name: "S3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
        { name: "Lambda", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
        { name: "RDS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
        { name: "Terraform", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg", invert: false },
      ],
    },
    {
      title: "DevOps & Automation",
      icon: <GitMerge size={24} />,
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-green-500/50",
      skills: [
        { name: "Docker", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", invert: false },
        { name: "Kubernetes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg", invert: false },
        { name: "Jenkins", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg", invert: false },
        { name: "GitHub Actions", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg", invert: true },
      ],
    },
  ];

  const orbVariants = {
    initial: { scale: 0.95, opacity: 0.9 },
    hover: {
      scale: 1.1,
      opacity: 1,
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  const Skills = () => {
    return (
      <section id="skills" className="py-24 px-4 w-full max-w-7xl mx-auto relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse" />

        {/* Animated Title Section */}
        <motion.div className="text-center mb-10 sm:mb-12 relative">
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200">
              My Expertise
            </span>
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 240 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mt-4">
            A constellation of modern technologies I use to build, deploy, and scale production-grade applications
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="flex flex-col lg:flex-row lg:justify-center gap-12 lg:gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex-1 min-w-0">
              {/* Category Header */}
              <div
                className={`flex items-center justify-center gap-3 mb-8 p-3 rounded-xl bg-white/30 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skill Orbs */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 min-h-[150px]">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={orbVariants}
                    initial="initial"
                    whileHover="hover"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    className="relative flex flex-col items-center group w-20"
                  >
                    <div
                      className={`relative w-20 h-20 rounded-full bg-white/40 dark:bg-black/30 backdrop-blur-md border border-black/10 dark:border-white/10 flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-xl ${category.shadow}`}
                    >
                      <img
                        src={skill.logoUrl}
                        alt={skill.name}
                        className={`w-full h-full object-contain ${skill.invert ? "dark:invert" : ""} transition-transform duration-300 group-hover:scale-110`}
                      />
                      <motion.div
                        className={`absolute inset-0 w-full h-full rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-black/80 dark:text-white/80 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Note */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium tracking-widest uppercase">
            ✨ Constantly learning & exploring new technologies ✨
          </p>
        </motion.div>
      </section>
    );
  };

  export default Skills;
