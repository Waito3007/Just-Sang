'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  Email, 
  Phone, 
  LocationOn, 
  Send, 
  GitHub, 
  LinkedIn, 
  Twitter 
} from '@mui/icons-material';
import { 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Email className="text-blue-600" />,
      title: "Email",
      value: "vuphanhoaisang@gmail.com",
      link: "mailto:vuphanhoaisang@gmail.com"
    },
    {
      icon: <Phone className="text-green-600" />,
      title: "Phone",
      value: "+84 xxx xxx xxx",
      link: "tel:+84xxxxxxxxx"
    },
    {
      icon: <LocationOn className="text-red-600" />,
      title: "Location",
      value: "Ho Chi Minh City, Vietnam",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      name: "GitHub",
      url: "https://github.com/Waito3007",
      color: "hover:text-gray-800 dark:hover:text-gray-300"
    },
    {
      icon: <LinkedIn />,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/sangvu",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter />,
      name: "Twitter",
      url: "https://twitter.com/sangvu",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a friendly conversation about technology and development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-xl border-0 bg-white dark:bg-gray-900">
              <CardContent className="p-8">
                <Typography variant="h5" className="mb-6 font-bold text-gray-800 dark:text-white">
                  Send me a message
                </Typography>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                  
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                  
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg font-semibold rounded-lg shadow-lg"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <Typography variant="h5" className="mb-6 font-bold text-gray-800 dark:text-white">
                Contact Information
              </Typography>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <Box className="flex-shrink-0">
                      {info.icon}
                    </Box>
                    <div>
                      <Typography variant="subtitle2" className="text-gray-500 dark:text-gray-400">
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <Typography variant="body1" className="text-gray-800 dark:text-white">
                          {info.value}
                        </Typography>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <Typography variant="h6" className="mb-4 font-bold text-gray-800 dark:text-white">
                Connect with me
              </Typography>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <IconButton
                      onClick={() => window.open(social.url, '_blank')}
                      className={`bg-gray-100 dark:bg-gray-800 ${social.color} transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg`}
                      size="large"
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg"
            >              <Typography variant="h6" className="mb-2 font-bold text-gray-800 dark:text-white">
                Let&apos;s collaborate!
              </Typography>
              <Typography variant="body2" className="text-gray-600 dark:text-gray-300 mb-4">
                Have a project in mind? I&apos;m available for freelance work and collaboration opportunities.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => window.open('mailto:vuphanhoaisang@gmail.com', '_blank')}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Start a conversation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Message sent successfully! I&apos;ll get back to you soon.
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
