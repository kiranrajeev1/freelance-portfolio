import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Cloud, GitMerge } from "lucide-react";

const skillCategories = [
  {
    title: "MERN Stack",
    icon: <Layers size={20} />,
    accent: "bg-blue-500",
    description: "Building performant full-stack applications with modern JavaScript tooling.",
    skills: [
      { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", invert: false },
      { name: "Express", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
      { name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", invert: false },
      { name: "Node.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", invert: false },
      { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", invert: false },
      { name: "TypeScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", invert: false },
      { name: "Redux", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", invert: false },
    ],
  },
  {
    title: "AWS & Cloud",
    icon: <Cloud size={20} />,
    accent: "bg-amber-500",
    description: "Designing resilient cloud architecture focused on scale, security, and efficiency.",
    skills: [
      { name: "EC2", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
      { name: "S3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
      { name: "Lambda", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
      { name: "RDS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
      { name: "CloudFormation", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
      { name: "VPC", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
    ],
  },
  {
    title: "DevOps & Automation",
    icon: <GitMerge size={20} />,
    accent: "bg-emerald-500",
    description: "Automating delivery pipelines and observability to ship with confidence.",
    skills: [
      { name: "Docker", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", invert: false },
      { name: "Kubernetes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg", invert: false },
      { name: "Jenkins", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", invert: false },
      { name: "GitHub Actions", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg", invert: true },
      { name: "Git", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", invert: false },
      { name: "Terraform", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", invert: false },
      { name: "Ansible", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", invert: false },
    ],
  },
];

const skillItemVariants = {
  initial: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = skillCategories[activeTab];

  return (
    <section id="skills" className="py-24 px-4 w-full max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-12 relative">
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
        <p className="text-lg md:text-xl text-black/70 dark:text-white/70 leading-relaxed max-w-2xl mx-auto mt-4">
          A focused selection of tools and platforms I rely on to ship
          performant, reliable products from concept to production.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {skillCategories.map((category, index) => {
          const isActive = activeTab === index;
          return (
            <motion.button
              key={category.title}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 rounded-2xl border border-black/10 bg-white/50 dark:border-white/10 dark:bg-black/30 backdrop-blur-xl px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "shadow-lg scale-105"
                  : "hover:shadow-md hover:scale-105"
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full ${category.accent} opacity-80`}
              >
                {category.icon}
              </span>
              <span>{category.title}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Active Category Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col gap-8 rounded-3xl border border-black/5 bg-white/50 dark:border-white/10 dark:bg-black/30 p-6 shadow-xl backdrop-blur-xl"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-slate-900 dark:text-white">
              <span className={`h-8 w-8 rounded-full ${activeCategory.accent} opacity-80`} />
              <h3 className="text-lg font-semibold">{activeCategory.title}</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                variants={skillItemVariants}
                initial="initial"
                animate="visible"
                className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white/50 dark:border-white/10 dark:bg-black/30 px-4 py-3 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/30 dark:bg-black/40">
                  <img
                    src={skill.logoUrl}
                    alt={skill.name}
                    className={`h-9 w-9 object-contain ${skill.invert ? "dark:invert" : ""}`}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                  <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Core tool
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
