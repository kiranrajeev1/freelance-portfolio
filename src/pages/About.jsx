import React from "react";
import { motion } from "framer-motion";
import { Code, Cloud, Server, GitMerge, Monitor } from "lucide-react";

const About = () => {
  const offerings = [
    {
      icon: <Code size={28} />,
      title: "Web Development",
      description:
        "Skilled in front-end web development, creating responsive and visually engaging websites, including personal blogs and portfolios, using modern web technologies to deliver interactive designs and seamless user experiences.",
    },
    {
      icon: <Monitor size={28} />,
      title: "MERN Stack Development",
      description:
        "Possesses extensive experience in MERN stack development, with a strong emphasis on designing robust back-end architectures and scalable APIs, seamlessly integrated with dynamic front-end interfaces to deliver efficient and high-performing full-stack web solutions.",
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud and Infrastructure",
      description:
        "Experienced in cloud computing with Amazon Web Services (AWS), specializing in designing and managing scalable, secure, and high-availability cloud infrastructures to optimize application performance and reliability.",
    },
    {
      icon: <GitMerge size={28} />,
      title: "DevOps & CI/CD",
      description:
        "Specializes in implementing DevOps practices and CI/CD pipelines to automate software delivery, enhance collaboration, and ensure efficient, consistent, and rapid deployment across environments.",
    },
    {
      icon: <Server size={28} />,
      title: "Freelance Services",
      description:
        "Offers professional freelance solutions leveraging expertise in front-end development, MERN stack, AWS cloud, and DevOps. Capable of delivering end-to-end web applications, scalable cloud setups, and automated deployment pipelines tailored to client needs with a focus on quality, performance, and reliability.",
    },
  ];

  return (
    <div className="py-24 px-4 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-center mb-8 text-[var(--foreground)]">
          What I Offer
        </h2>

        <p className="text-lg text-center text-[var(--foreground)]/80 leading-relaxed max-w-3xl mx-auto mb-16">
          I help individuals and businesses build, deploy, and maintain scalable web applications — from idea to production. Whether it's full-stack development, cloud infrastructure, or automated deployment, I provide tailored solutions for performance and reliability.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] backdrop-blur-lg shadow-lg hover:shadow-2xl text-center group cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-5 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--primary)]">
                {item.title}
              </h3>
              <p className="text-[var(--card-foreground)] text-sm leading-relaxed">
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
