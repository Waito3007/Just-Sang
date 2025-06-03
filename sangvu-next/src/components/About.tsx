'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Speed, Psychology } from '@mui/icons-material';
import { Card, CardContent, Typography, Box } from '@mui/material';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: <Code className="text-4xl text-blue-600" />,
      title: "Full Stack Development",
      description: "Experienced in React, Next.js, Node.js, and modern web technologies"
    },    {
      icon: <Palette className="text-4xl text-purple-600" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with focus on user experience"
    },
    {
      icon: <Speed className="text-4xl text-green-600" />,
      title: "Performance Optimization",
      description: "Building fast, efficient, and scalable web applications"
    },
    {
      icon: <Psychology className="text-4xl text-orange-600" />,
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions for complex challenges"
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "MongoDB", "PostgreSQL", "AWS", "Docker", 
    "Tailwind CSS", "Material-UI", "Figma", "Git"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m Vũ Phan Hoài Sang, a passionate full-stack developer with a love for creating 
            exceptional digital experiences. With years of experience in web development, 
            I specialize in building modern, responsive, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/490225885_2205933069863157_8448360811899039589_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=46KBbvsJ018Q7kNvwF-bhp1&_nc_oc=AdkA6MdW9n3uHMSipk-DiEBAFq-3cFFoP1qOO0O3kHxM3O0ouD18B5Zt2NmAVsXoLt-J8aHMaICq4iA0vgRMJBF0&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=rbcDwPSdNFVLAIUcZ74ybg&oh=00_AfKwL8e7kmjTOza226mHm7c2b2vpMenMVPV6omD-ZD0ylQ&oe=684460B9"
                  alt="Vũ Phan Hoài Sang"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              My Journey
            </h3>            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Started my journey in web development 5 years ago with a curiosity about how 
              websites work. Since then, I&apos;ve been constantly learning and evolving, 
              working on various projects from small business websites to large-scale 
              enterprise applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and creating solutions that 
              not only work well but also provide an exceptional user experience. 
              My approach combines technical expertise with creative problem-solving.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-0">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <Box className="mb-4">
                    {skill.icon}
                  </Box>
                  <Typography variant="h6" className="mb-3 font-bold text-gray-800 dark:text-white">
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 dark:text-gray-300 flex-grow">
                    {skill.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
