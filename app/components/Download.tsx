'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Download() {
  return (
    <motion.section
      id="download"
      className="min-h-screen flex items-center py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.h2
          className="text-headline mb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Enhance Your Typing Awareness?
        </motion.h2>
        <motion.p
          className="text-body-lg text-on-surface/80 mb-10 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Download Kinbo today and experience real-time visual and auditory feedback that helps you better perceive and confirm keyboard interactions across all your applications.
        </motion.p>
        <motion.a
          href="#"
          className="gradient-primary text-on-primary px-10 py-4 rounded-full font-medium inline-block hover:opacity-90 transition-opacity"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download for Mac
        </motion.a>
        <motion.p
          className="text-sm text-on-surface/60 mt-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Requires macOS 10.14 or later • Privacy-first • Local-only operation • No data collection
        </motion.p>
      </div>
    </motion.section>
  );
}