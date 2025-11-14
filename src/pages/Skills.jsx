import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Cloud, GitMerge } from "lucide-react";

import ec2Icon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Compute/64/Arch_Amazon-EC2_64.svg";
import rdsIcon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Database/64/Arch_Amazon-RDS_64.svg";
import lambdaIcon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Compute/64/Arch_AWS-Lambda_64.svg";
import cloudfrontIcon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Networking-Content-Delivery/64/Arch_Amazon-CloudFront_64.svg";
import iamIcon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Security-Identity-Compliance/64/Arch_AWS-Identity-and-Access-Management_64.svg";
import cloudwatchIcon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Management-Governance/64/Arch_Amazon-CloudWatch_64.svg";
import codebuildIcon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Developer-Tools/64/Arch_AWS-CodeBuild_64.svg";
import codepipelineIcon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Developer-Tools/64/Arch_AWS-CodePipeline_64.svg";
import codedeployIcon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Developer-Tools/64/Arch_AWS-CodeDeploy_64.svg";
import ebsIcon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Storage/64/Arch_Amazon-Elastic-Block-Store_64.svg";
import efsIcon from "aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Storage/64/Arch_Amazon-Elastic-File-System_64.svg";
import s3Icon from "../assets/S3Icon.svg";

const skillCategories = [
 {
  title: "Development",
  icon: <Layers size={20} />,
  accent: "bg-blue-500",
  description: "Building high-performance, scalable, and modern web applications using cutting-edge development tools and frameworks.",
  skills: [
    // Core MERN Stack
    { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", invert: false },
    { name: "Express", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
    { name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", invert: false },
    { name: "Node.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", invert: false },

    // Languages
    { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", invert: false },
    { name: "TypeScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", invert: false },

    // Frontend Tools
    { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "Vite", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", invert: false },
    { name: "TailwindCSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", invert: false },
    { name: "HTML5", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", invert: false },
    { name: "CSS3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", invert: false },
    { name: "SASS/SCSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", invert: false },
    { name: "Bootstrap", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", invert: false },

    // State Management
    { name: "Redux", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", invert: false },
  ],
},

  {
  title: "AWS & Cloud",
  icon: <Cloud size={20} />,
  accent: "bg-amber-500",
  description: "Designing resilient cloud architecture focused on scale, security, and efficiency.",
  skills: [
    // Core Compute
    { name: "EC2", logoUrl: ec2Icon, invert: false },
    { name: "RDS", logoUrl: rdsIcon, invert: false },
    { name: "Lambda", logoUrl: lambdaIcon, invert: false },
    { name: "CloudFront", logoUrl: cloudfrontIcon, invert: false },
    { name: "IAM", logoUrl: iamIcon, invert: false },
    { name: "CloudWatch", logoUrl: cloudwatchIcon, invert: false },
    { name: "CodeBuild", logoUrl: codebuildIcon, invert: false },
    { name: "CodePipeline", logoUrl: codepipelineIcon, invert: false },
    { name: "CodeDeploy", logoUrl: codedeployIcon, invert: false },
    { name: "EFS", logoUrl: efsIcon, invert: false },
{ name: "VPC", logoUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/aws/network/vpc.png", invert: false },
{ name: "Fargate", logoUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/aws/compute/fargate.png", invert: false },
{ name: "S3", logoUrl: s3Icon, invert: false }

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
      { name: "Prometheus", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", invert: false },
{ name: "Grafana", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", invert: false },
{ name: "Helm", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg", invert: false },
{ name: "NGINX", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", invert: false },
{ name: "Apache", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg", invert: false },
{ name: "ArgoCD", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg", invert: false },
{ name: "Bash", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", invert: false },
{ name: "Linux", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", invert: false },
{ name: "Postman", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", invert: false },
{ name: "SonarQube", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg", invert: false },

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
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 relative">
        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 inline-block text-center md:text-left">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200">
    My Expertise
  </span>
  <motion.div
    className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    transition={{ delay: 0.3, duration: 0.8 }}
    viewport={{ once: true }}
  />
</h2>

        <p className="text-lg md:text-xl text-black/70 dark:text-white/70 leading-relaxed max-w-2xl mx-auto mt-4">
          A focused selection of tools and platforms I rely on to ship performant, reliable products from concept to production.
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
                isActive ? "shadow-lg scale-105" : "hover:shadow-md hover:scale-105"
              }`}
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-full ${category.accent} opacity-80`}>
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
          className="flex flex-col gap-6 rounded-3xl border border-black/5 bg-white/50 dark:border-white/10 dark:bg-black/30 p-6 shadow-xl backdrop-blur-xl"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-slate-900 dark:text-white">
              <span className={`h-8 w-8 rounded-full ${activeCategory.accent} opacity-80`} />
              <h3 className="text-lg font-semibold">{activeCategory.title}</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">{activeCategory.description}</p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(65px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">

            {activeCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                variants={skillItemVariants}
                initial="initial"
                animate="visible"
                className="group flex flex-col items-center gap-1 rounded-xl border border-black/10 bg-white/50 dark:border-white/10 dark:bg-black/30 p-2 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-black/20 dark:hover:border-white/20"
              >
                <div className="flex h-10 md:h-20 w-10 md:w-20 items-center justify-center rounded-lg bg-white/30 dark:bg-black/40">
                  <img
                    src={skill.logoUrl}
                    alt={skill.name}
                    className={`h-7 md:h-17 w-7 md:w-17 object-contain ${skill.invert ? "dark:invert" : ""}`}
                  />
                </div>
                <span className="text-xs font-medium text-center text-slate-900 dark:text-white">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;