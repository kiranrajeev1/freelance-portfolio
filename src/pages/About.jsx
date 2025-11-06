import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const offerings = [
    {
      title: "Web Development",
      description:
        "Skilled in front-end web development, creating responsive and visually engaging websites, including personal blogs and portfolios, using modern web technologies to deliver interactive designs and seamless user experiences.",
    },
    {
      title: "MERN Stack Development",
      description:
        "Possesses extensive experience in MERN stack development, with a strong emphasis on designing robust back-end architectures and scalable APIs, seamlessly integrated with dynamic front-end interfaces to deliver efficient and high-performing full-stack web solutions.",
    },
    {
      title: "Cloud and Infrastructure",
      description:
        "Experienced in cloud computing with Amazon Web Services (AWS), specializing in designing and managing scalable, secure, and high-availability cloud infrastructures to optimize application performance and reliability.",
    },
    {
      title: "DevOps & CI/CD",
      description:
        "Specializes in implementing DevOps practices and CI/CD pipelines to automate software delivery, enhance collaboration, and ensure efficient, consistent, and rapid deployment across environments.",
    },
    {
      title: "Freelance Services",
      description:
        "Offers professional freelance solutions leveraging expertise in front-end development, MERN stack, AWS cloud, and DevOps. Capable of delivering end-to-end web applications, scalable cloud setups, and automated deployment pipelines tailored to client needs with a focus on quality, performance, and reliability.",
    },
  ];

  return (
    <div className="py-24 px-4 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-400">
          What I Offer
        </h2>

        <p className="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
          I help individuals and businesses build, deploy, and maintain
          scalable web applications — from idea to production. Whether it's
          full-stack development, cloud infrastructure, or automated deployment,
          I provide tailored solutions for performance and reliability.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-center shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
