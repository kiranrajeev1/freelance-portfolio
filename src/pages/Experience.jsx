import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Freelance Web Developer",
      company: "",
      duration: "",
      description:
        "Designed and developed responsive, user-focused websites and web applications for diverse clients. Utilized modern technologies and frameworks to deliver high-quality, scalable, and visually engaging digital solutions tailored to client requirements.",
    },
    {
      role: "AWS Cloud and DevOps Intern",
      company: "CloudNet Solutions",
      duration: "",
      description:
        "Assisted in deploying and managing cloud infrastructures on AWS while supporting automation and CI/CD pipeline implementation. Gained hands-on experience in cloud services, infrastructure monitoring, and optimizing deployment workflows for improved efficiency and scalability.",
    },
  ];

  return (
    <div className="py-24 px-4 w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-400">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md shadow-md"
            >
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              {exp.company && (
                <p className="text-gray-500 dark:text-gray-400 italic mb-2">
                  {exp.company}
                </p>
              )}
              {exp.duration && (
                <p className="text-gray-400 dark:text-gray-500 text-sm mb-2">
                  {exp.duration}
                </p>
              )}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
