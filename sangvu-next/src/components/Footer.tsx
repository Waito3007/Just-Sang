'use client';

import { motion } from 'framer-motion';
import { ArrowUpward, Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { IconButton, Typography, Divider } from '@mui/material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GitHub />,
      url: "https://github.com/sangvu",
      color: "hover:text-gray-600"
    },
    {
      icon: <LinkedIn />,
      url: "https://linkedin.com/in/sangvu",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter />,
      url: "https://twitter.com/sangvu",
      color: "hover:text-blue-400"
    },
    {
      icon: <Email />,
      url: "mailto:vuphanhoaisang@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vũ Phan Hoài Sang
              </h3>
              <Typography variant="body1" className="text-gray-300 max-w-md">
                Full Stack Developer passionate about creating exceptional digital experiences. 
                Always learning, always building, always improving.
              </Typography>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <IconButton
                    onClick={() => window.open(link.url, '_blank')}
                    className={`text-gray-400 ${link.color} transition-all duration-300 hover:scale-110 bg-gray-800 hover:bg-gray-700`}
                    size="large"
                  >
                    {link.icon}
                  </IconButton>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 transform group-hover:scale-150 transition-transform duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>📧 vuphanhoaisang@gmail.com</p>
              <p>📱 +84 xxx xxx xxx</p>
              <p>📍 Ho Chi Minh City, Vietnam</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:vuphanhoaisang@gmail.com', '_blank')}
                className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Say Hello 👋
              </motion.button>
            </div>
          </motion.div>
        </div>

        <Divider className="border-gray-700 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-center md:text-left mb-4 md:mb-0"
          >
            <p>&copy; {currentYear} Vũ Phan Hoài Sang. All rights reserved.</p>
            <p className="text-sm mt-1">Built with ❤️ using Next.js, TypeScript & Tailwind CSS</p>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ArrowUpward className="text-white group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;
