import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp,
  Database,
  Cloud
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'End-to-end application architecture',
      tech: 'React • Node.js • TypeScript'
    },
    {
      icon: Server,
      title: 'Backend Engineering',
      description: 'Scalable server-side solutions',
      tech: 'Express • Spring Boot • APIs'
    },
    {
      icon: Globe,
      title: 'Frontend Engineering',
      description: 'Modern user interface design',
      tech: 'React • Next.js • TailwindCSS'
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'RESTful and GraphQL services',
      tech: 'REST • GraphQL • Microservices'
    },
    {
      icon: Cloud,
      title: 'Deployment & DevOps',
      description: 'Cloud infrastructure management',
      tech: 'Docker • AWS • CI/CD'
    },
    {
      icon: Shield,
      title: 'Site Reliability',
      description: 'Monitoring and maintenance',
      tech: 'Monitoring • Logging • Security'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimization and speed',
      tech: 'Caching • CDN • Optimization'
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Growth-ready architecture',
      tech: 'Load Balancing • Auto-scaling'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            Services
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-lg max-w-2xl mx-auto">
            Delivering enterprise-grade solutions with modern technology
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <service.icon className="w-9 h-9 text-neutral-700 dark:text-neutral-200 mb-4" />
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-base mb-3">
                {service.description}
              </p>
              <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                {service.tech}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-neutral-50 dark:bg-neutral-900 rounded-full shadow border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-500 text-xs">Available</span>
            </div>
            <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
            <span className="text-neutral-500 dark:text-neutral-400 text-xs">
              Response time: &lt; 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;