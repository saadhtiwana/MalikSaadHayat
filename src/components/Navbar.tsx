import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
      {/* Desktop Navbar */}
      <motion.nav
        className={`transition-all duration-300 ${
          isScrolled ? 'shadow-lg scale-95' : 'shadow-xl'
        } bg-white dark:bg-black/90 rounded-full border border-neutral-200 dark:border-neutral-800 backdrop-blur-md inline-flex items-center justify-center w-auto max-w-full overflow-x-auto mx-auto pointer-events-auto py-4 md:flex hidden`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ minWidth: 'unset', paddingLeft: 0, paddingRight: 0 }}
      >
        <div className="flex items-center justify-center gap-6 px-2">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-black dark:text-white px-2 pb-1 transition-all duration-200 relative hover:after:opacity-100 after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] after:block after:h-[2px] after:w-full after:bg-black dark:after:bg-white after:absolute after:left-0 after:bottom-0"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 focus:outline-none"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </motion.nav>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between w-full px-4 pointer-events-auto">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 focus:outline-none"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-white" />
          ) : (
            <Moon className="w-5 h-5 text-black" />
          )}
        </button>
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-black dark:text-white" />
          )}
        </button>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white/95 dark:bg-black/95 z-50 flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleTheme}
              className="absolute top-6 left-6 p-2 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 focus:outline-none"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-black" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 focus:outline-none"
            >
              <X className="w-6 h-6 text-black dark:text-white" />
            </button>
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-200"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;