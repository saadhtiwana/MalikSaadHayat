import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            About
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-black dark:via-neutral-900 dark:to-neutral-900 rounded-2xl shadow-xl p-10 md:p-14 mx-auto text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            Full Stack Engineer (MERN, PERN, Java, Spring Boot, DevOps, AWS). Microservices aficionado. CS senior @ COMSATS. Architecting resilient, scalable systems where backend elegance meets cloud precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;