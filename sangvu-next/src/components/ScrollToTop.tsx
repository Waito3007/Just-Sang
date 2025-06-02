'use client';

import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Tooltip title="Back to top" placement="left">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl btn-glow"
                size="large"
              >
                <KeyboardArrowUp className="text-2xl" />
              </IconButton>
            </motion.div>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
