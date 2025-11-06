import React from "react";
import { motion } from "framer-motion";

const skills = {
  "MERN Stack": ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
  "AWS & Cloud": ["EC2", "S3", "Lambda", "RDS", "VPC", "CloudFormation", "Terraform"],
  "DevOps & Automation": ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* ✅ FIXED LINE: Added py-2 and corrected bg-gradient-to-b */}
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-400 py-2">
          My Expertise
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col md:flex-row flex-wrap justify-center gap-12 text-center"
        >
          {Object.entries(skills).map(([category, list]) => (
            <motion.div key={category} variants={itemVariants} className="flex-1 min-w-[200px]">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;