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

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
          <Code2 size={16} className="text-blue-500" />
          <span className="text-sm font-medium">Technical Skills</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-black mb-6 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200">
            My Expertise
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </h2>

        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-2xl mx-auto">
          A visual constellation of the technologies I use to build, deploy, and scale.
        </p>
      </div>

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
                  {/* Orb */}
                  <div
                    className={`relative w-20 h-20 rounded-full bg-white/40 dark:bg-black/30 backdrop-blur-md border border-black/10 dark:border-white/10 flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-xl ${category.shadow}`}
                  >
                    <img
                      src={skill.logoUrl}
                      alt={skill.name}
                      className={`w-full h-full object-contain ${skill.invert ? "dark:invert" : ""} transition-transform duration-300 group-hover:scale-110`}
                    />
                    {/* Glow on hover */}
                    <motion.div
                      className={`absolute inset-0 w-full h-full rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                  </div>

                  {/* Skill Name (Always Visible Now) */}
                  <span className="mt-3 text-sm font-medium text-black/80 dark:text-white/80 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
