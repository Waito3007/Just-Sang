'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography } from '@mui/material';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-green-500" },
        { name: "Material-UI", level: 88, color: "from-indigo-500 to-blue-500" },
        { name: "Vue.js", level: 75, color: "from-green-500 to-emerald-500" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-600 to-green-400" },
        { name: "Python", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "Express.js", level: 88, color: "from-gray-600 to-gray-400" },
        { name: "FastAPI", level: 80, color: "from-teal-600 to-cyan-600" },
        { name: "GraphQL", level: 75, color: "from-pink-500 to-purple-500" }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85, color: "from-green-700 to-green-500" },
        { name: "PostgreSQL", level: 82, color: "from-blue-700 to-blue-500" },
        { name: "Docker", level: 78, color: "from-blue-600 to-cyan-600" },
        { name: "AWS", level: 75, color: "from-orange-600 to-yellow-600" },
        { name: "Git", level: 92, color: "from-red-600 to-pink-600" }
      ]
    }
  ];

  interface SkillBarProps {
    skill: {
      name: string;
      level: number;
      color: string;
    };
    index: number;
    categoryIndex: number;
  }

  const SkillBar = ({ skill, index, categoryIndex }: SkillBarProps) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (index * 0.1) }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <Typography variant="body1" className="font-semibold text-gray-800 dark:text-white">
          {skill.name}
        </Typography>
        <Typography variant="body2" className="text-gray-600 dark:text-gray-300">
          {skill.level}%
        </Typography>
      </div>
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.3 }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels. 
            I&apos;m constantly learning and improving to stay current with the latest technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={index} 
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Always Learning
            </h3>            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I&apos;m committed to continuous learning. 
              Currently exploring AI/ML integration, Web3 technologies, and advanced cloud architectures.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["AI/ML", "Web3", "Blockchain", "Microservices", "Kubernetes", "Serverless"].map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
