import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuButton } from './MenuButton';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  // Intersection Observer
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '-30% 0px -30% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const highlightBorder = theme === 'dark' ? 'ring-white' : 'ring-black';

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl z-50"
    >
      <div className="relative">
        <div className="p-3 rounded-full shadow-lg bg-white/20 text-black border border-black/20 dark:bg-black/20 dark:text-white dark:border-white/20 backdrop-blur-lg">
          <div className="flex justify-between items-center">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  animate={activeSection === link.href.substring(1) ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={cn(
                    'px-3 py-1 rounded-full transition-all duration-300 hover:bg-white/10 hover:dark:bg-black/10',
                    activeSection === link.href.substring(1)
                      ? `ring-1 ${highlightBorder} font-medium`
                      : 'font-light'
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Desktop Get in Touch + Theme */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="#contact"
                onClick={handleLinkClick}
                animate={activeSection === 'contact' ? { scale: 1.05 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={cn(
                  'px-4 py-2 rounded-full transition-colors bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200',
                  activeSection === 'contact' ? `ring-1 ${highlightBorder} font-medium` : ''
                )}
              >
                Get in Touch
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex justify-between items-center w-full">
              <MenuButton isOpen={isOpen} onClick={toggleMenu} />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-full"
              >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-full w-full mt-2 md:hidden flex flex-col items-center gap-4 p-4 rounded-2xl shadow-lg bg-white/20 text-black border border-black/20 dark:bg-black/20 dark:text-white dark:border-white/20 backdrop-blur-lg"
            >
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  animate={activeSection === link.href.substring(1) ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={cn(
                    'w-full text-center px-4 py-2 rounded-full transition-colors backdrop-blur-md bg-white/20 dark:bg-black/20 text-black dark:text-white hover:bg-white/30 dark:hover:bg-black/30',
                    activeSection === link.href.substring(1) ? `ring-1 ${highlightBorder} font-medium` : ''
                  )}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile Get in Touch */}
              <motion.a
                href="#contact"
                onClick={handleLinkClick}
                animate={activeSection === 'contact' ? { scale: 1.05 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={cn(
                  'w-full text-center px-4 py-2 rounded-full transition-colors bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200',
                  activeSection === 'contact' ? `ring-1 ${highlightBorder} font-medium` : ''
                )}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
