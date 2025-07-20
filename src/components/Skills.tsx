import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Prisma',
    'Next.js',
    'Redux',
    'Java',
    'Spring',
    'Spring Boot',
    'Microservices',
    'REST APIs',
    'GraphQL',
    'DevOps',
    'AWS',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Git',
    'C++',
    'TailwindCSS',
    'Firebase',
    'TurboRepo',
    'Deployment',
    'PERN',
    'MERN',
    'Cloud',
    'Agile',
    'Testing',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            Skills
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
        </motion.div>
        <motion.div
          className="grid gap-2 w-full justify-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              className="group flex justify-center"
              whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2 min-w-[120px] px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-700 dark:text-neutral-200 font-semibold text-base shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:bg-neutral-100 group-hover:dark:bg-neutral-800 cursor-pointer select-none text-center" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;