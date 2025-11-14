import React from 'react';
import { Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeOut",
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full py-8 px-4 mt-20 border-t border-black/10 dark:border-white/10"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Copyright */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-black/60 dark:text-white/60"
        >
          © {year} Kiran Rajeev. All Rights Reserved.
        </motion.p>

        {/* Social / Contact Links */}
        <motion.div variants={itemVariants} className="flex items-center gap-5">

          {/* Email */}
          <motion.a
            href="mailto:kiranrajeev2003@gmail.com"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all"
          >
            <Mail className="w-5 h-5 text-black dark:text-white" />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/kiranrajeev1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all"
          >
            <Github className="w-5 h-5 text-black dark:text-white" />
          </motion.a>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;
