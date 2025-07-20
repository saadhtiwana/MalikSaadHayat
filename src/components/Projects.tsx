import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            Projects
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center py-16"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className="mb-8 flex items-center justify-center"
            animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.12, 1.12, 1] }}
            transition={{ repeat: Infinity, duration: 2, repeatType: 'loop', ease: 'easeInOut', type: 'tween' }}
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute w-20 h-20 rounded-full bg-neutral-300 dark:bg-neutral-800 opacity-30 blur-2xl animate-pulse" />
              <Github className="w-16 h-16 text-neutral-700 dark:text-neutral-200 drop-shadow-lg" />
            </span>
          </motion.div>
          <motion.a
            href="https://github.com/saadhtiwana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-full shadow-lg font-bold text-xl tracking-wide border border-neutral-200 dark:border-neutral-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-neutral-300/30 hover:bg-white hover:text-black dark:hover:bg-neutral-900 dark:hover:text-white"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(30,30,80,0.10)' }}
            whileTap={{ scale: 0.98 }}
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
          >
            Explore my Projects on GitHub!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;