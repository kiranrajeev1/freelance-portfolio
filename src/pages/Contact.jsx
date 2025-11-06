import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import GlassButton from '@/components/GlassButton';

const Contact = () => {
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null); // reset status on new submit

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xnnolypb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
          Get in Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-black/70 dark:text-white/70 mb-12"
        >
          Have a question or want to work together? Leave a message.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            variants={itemVariants}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/10 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <motion.input
            variants={itemVariants}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/10 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <motion.textarea
            variants={itemVariants}
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-white/10 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
          />
          <motion.div variants={itemVariants}>
            <GlassButton type="submit" className="sm:w-auto">
              Send Message
              <Send size={18} />
            </GlassButton>
          </motion.div>
        </form>

        {/* Success / Error Message */}
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-green-500 font-semibold"
          >
            Message sent successfully!
          </motion.p>
        )}

        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-red-500 font-semibold"
          >
            Oops! Something went wrong.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
