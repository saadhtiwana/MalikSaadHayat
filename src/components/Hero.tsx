import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black relative overflow-hidden">
      {/* Subtle animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-neutral-200/60 dark:bg-neutral-800/60 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neutral-100/40 dark:bg-neutral-900/40 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
        >
          Malik Saad Hayat
        </motion.h1>
        <div className="flex justify-center mb-8">
          <div className="h-1 w-24 rounded-full bg-neutral-300 dark:bg-neutral-700 shadow-sm" />
        </div>
        <motion.h2
          className="text-2xl md:text-3xl font-normal text-neutral-600 dark:text-neutral-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
        >
          Full Stack Engineer
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
        >
          Building secure, scalable systems for the future
        </motion.p>
        <motion.a
          href="#about"
          className="inline-block px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow-md hover:shadow-lg transition-all duration-200 text-lg"
          whileHover={{ scale: 1.04 }}
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;