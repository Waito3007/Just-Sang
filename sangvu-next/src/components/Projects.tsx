'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitHub, Launch, Star } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography, Chip, IconButton, Box } from '@mui/material';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com/sangvu/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind"],
      github: "https://github.com/sangvu/task-manager",
      demo: "https://task-manager-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts using modern weather APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
      github: "https://github.com/sangvu/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization, performance tracking, and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      github: "https://github.com/sangvu/social-analytics",
      demo: "https://social-analytics-demo.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Sanity CMS", "Mapbox", "Framer Motion"],
      github: "https://github.com/sangvu/real-estate",
      demo: "https://real-estate-demo.vercel.app",
      featured: true
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Comprehensive LMS with course creation, student progress tracking, quizzes, and video streaming capabilities.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      technologies: ["React", "Express", "MySQL", "AWS S3", "Video.js"],
      github: "https://github.com/sangvu/lms",
      demo: "https://lms-demo.vercel.app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for creating 
            innovative digital solutions. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 border-0 relative overflow-hidden group">
                {project.featured && (
                  <Box className="absolute top-4 left-4 z-10">
                    <Chip 
                      icon={<Star className="text-yellow-500" />}
                      label="Featured" 
                      size="small"
                      className="bg-white/90 backdrop-blur-sm text-gray-800 font-semibold"
                    />
                  </Box>
                )}
                
                <div className="relative overflow-hidden">
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IconButton 
                      size="small" 
                      className="bg-white/90 hover:bg-white text-gray-800"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <GitHub fontSize="small" />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      className="bg-white/90 hover:bg-white text-gray-800"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <Launch fontSize="small" />
                    </IconButton>
                  </div>
                </div>

                <CardContent className="p-6 flex-grow flex flex-col">
                  <Typography variant="h6" className="mb-3 font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </Typography>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-xs"
                      />
                    ))}
                  </div>

                  <div className="flex space-x-2 mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <GitHub fontSize="small" />
                      Code
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Launch fontSize="small" />
                      Demo
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com/sangvu', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
