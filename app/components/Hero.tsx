'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ heroOpacity, heroScale }: { heroOpacity: any; heroScale: any }) {
  return (
    <motion.section
      className="min-h-screen flex items-center pt-32 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="text-label text-primary-container">
              macOS Keyboard Enhancement
            </div>
            <h1 className="text-display">
              Elevate Your Typing Experience
            </h1>
            <p className="text-body-lg text-on-surface/80 max-w-lg">
              Kinbo brings immersive mechanical keyboard sounds to your Mac, transforming every keystroke and mouse click into a satisfying auditory experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="#download"
                className="gradient-primary text-on-primary px-8 py-4 rounded-full font-medium text-center hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download for Mac
              </motion.a>
              <motion.a
                href="#features"
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-medium text-center hover:bg-surface-container-low transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Features
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-surface-container-highest rounded-2xl p-1 ambient-shadow">
              <div className="bg-surface-variant rounded-xl p-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="bg-surface-container-lowest rounded-b-xl p-6">
                <div className="aspect-video bg-surface-variant rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎵</div>
                    <p className="text-sm text-on-surface/60">Kinbo App Interface</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}