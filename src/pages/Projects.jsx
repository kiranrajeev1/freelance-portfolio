// Projects.jsx
import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Flashcard Quest – MERN Stack Learning Application",
    description: `Architected a full-stack web application featuring secure user authentication and interactive flashcard study tools.
• Implemented secure user registration and login functionality using JSON Web Tokens (JWT) for authentication.
• Built a RESTful API with Node.js and Express.js to handle CRUD operations for flashcard decks and user data.
• Designed a responsive and interactive frontend with React.js, allowing users to create, manage, and study with flashcards and quizzes.
• Utilized MongoDB and Mongoose for database schema design and to persist user and application data.`,
    imageSrc: "https://picsum.photos/seed/flashcard/600/400",
    skills: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "JWT"],
    demo: "https://flashcardquest.vercel.app/", // Replace with actual demo URL
    source: "https://github.com/kiranrajeev1/flashcard-quest", // Replace with actual repo URL
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
    title: "MERN E-Commerce Platform",
    description:
      "A full-stack e-commerce app featuring authentication, cart management, Stripe payments, and admin dashboards for products and orders.",
    imageSrc: "https://picsum.photos/seed/ecommerce/600/400",
    skills: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    demo: "https://mernshop.vercel.app/",
    source: "https://github.com/kiranrajeev1/mern-ecommerce",
  },
  {
    title: "Real-Time Chat App",
    description:
      "A responsive real-time chat app built with Socket.io and MongoDB. Includes typing indicators, authentication, and persistent chat history.",
    imageSrc: "https://picsum.photos/seed/chatapp/600/400",
    skills: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    demo: "https://realtimechat.vercel.app/",
    source: "https://github.com/kiranrajeev1/realtime-chat",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-400 py-2">
        My Projects
      </h2>

      <div className="grid grid-cols-1 gap-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
