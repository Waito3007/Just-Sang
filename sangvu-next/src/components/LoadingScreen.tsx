'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600"
          >
            <div className="text-center text-white">
              {/* Logo Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    S
                  </span>
                </div>
              </motion.div>

              {/* Name Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl font-bold mb-4"
              >
                Vũ Phan Hoài Sang
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg mb-8 opacity-90"
              >
                Full Stack Developer
              </motion.p>

              {/* Progress Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="w-64 mx-auto"
              >
                <div className="bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    className="bg-white h-full rounded-full shadow-lg"
                  />
                </div>
                <p className="text-sm opacity-75">{Math.round(progress)}% loaded</p>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full"
              />
              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/30 rounded-full"
              />
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/25 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!loading && children}
    </>
  );
};

export default LoadingScreen;
