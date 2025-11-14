// Projects.jsx
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Flashcard Quest – MERN App",
    description: `Developed a full-stack web app with secure JWT-based authentication and interactive flashcard tools using the MERN stack. Built RESTful APIs for CRUD operations and designed a responsive React frontend with MongoDB for data persistence.`,
    imageSrc: "https://picsum.photos/seed/flashcard/600/400",
    skills: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "JWT"],
    demo: "https://flashcardquest.vercel.app/", // Replace with actual demo URL
    source: "https://github.com/kiranrajeev1/Flashcard-Quest-MERN-App.git", // Replace with actual repo URL
  },
  {
    title: "Portfolio Website – React + TailwindCSS",
    description: `A sleek portfolio website built with React and TailwindCSS, showcasing cloud, DevOps, and web development projects. Fully responsive with interactive animations and modern design principles.`,
    imageSrc: "https://picsum.photos/seed/portfolio/600/400",
    skills: ["React", "TailwindCSS", "Vite", "Framer Motion"],
    demo: "https://kiranrajeev.vercel.app/",
    source: "https://github.com/kiranrajeev1/portfolio",
  },
  {
  title: "DevOps for Real-Time Chat App",
  description:
    "Implemented CI/CD, Dockerized services, deployed on AWS EKS with Kubernetes, and integrated monitoring with Prometheus & Grafana.",
  imageSrc: "https://picsum.photos/seed/devops-chat/600/400", // Replace with a relevant DevOps image if needed
  skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Prometheus", "Grafana", "ArgoCD"],
  demo: "https://realtimechat.vercel.app/",
  source: "https://github.com/kiranrajeev1/DevSecOps-chat-app.git",
},
{
  title: "DevOps for Movie Recommendation App",
  description:
    "Containerized MERN app, automated CI/CD with GitHub Actions, deployed via ArgoCD & Helm on AWS EKS, with monitoring and alerts.",
  imageSrc: "https://picsum.photos/seed/devops-movie/600/400", // Replace with a relevant DevOps image if needed
  skills: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Prometheus", "Grafana", "ArgoCD"],
  demo: "https://movierecommendationapp.vercel.app/",
  source: "https://github.com/kiranrajeev1/DevSecOps-MERN-MovieApp.git",
},

];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 w-full max-w-6xl mx-auto">
      <motion.div className="text-center mb-10 sm:mb-12 relative">
  <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 inline-block">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200">
      Projects
    </span>
    <motion.div
      className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}  // responsive to text width
      transition={{ delay: 0.3, duration: 0.8 }}
      viewport={{ once: true }}
    />
  </h2>
</motion.div>


      <div className="grid grid-cols-1 gap-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
