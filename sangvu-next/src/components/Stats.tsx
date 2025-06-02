'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography } from '@mui/material';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "From small websites to enterprise applications"
    },
    {
      number: "5+",
      label: "Years Experience", 
      description: "In web development and design"
    },
    {
      number: "20+",
      label: "Technologies Mastered",
      description: "Frontend, backend, and DevOps tools"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Dedicated to delivering quality work"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio Stats
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Numbers that reflect my journey and commitment to excellence in web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring" }}
                className="mb-4"
              >
                <Typography variant="h2" className="font-bold text-white text-5xl md:text-6xl">
                  {stat.number}
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
              >
                <Typography variant="h6" className="font-semibold text-blue-100 mb-2">
                  {stat.label}
                </Typography>
                <Typography variant="body2" className="text-blue-200">
                  {stat.description}
                </Typography>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Let&apos;s Work Together</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
