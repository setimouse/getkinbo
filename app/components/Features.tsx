'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => (
  <motion.div
    className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow max-w-xs"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6">
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-on-surface/70">
      {description}
    </p>
  </motion.div>
);

export default function Features() {
  const features = [
    {
      icon: "⌨️",
      title: "Keyboard Sound Simulation",
      description: "17 classic keyboard sound profiles with layered audio for realistic mechanical keyboard feel."
    },
    {
      icon: "🖱️",
      title: "Mouse Click Sounds",
      description: "Distinct sound feedback for left and right clicks with independent volume control."
    },
    {
      icon: "🎛️",
      title: "Personalized Settings",
      description: "Independent volume controls, one-click sound profile switching, and startup options."
    },
    {
      icon: "🔄",
      title: "Intelligent Randomization",
      description: "Subtle variations in volume, pitch, and delay to avoid monotonous sound repetition."
    },
    {
      icon: "⚡",
      title: "Real-time Feedback",
      description: "Instant sound response with minimal latency for a seamless typing experience."
    },
    {
      icon: "📦",
      title: "Lightweight Design",
      description: "Menu bar app with no Dock icon, running silently in the background without resource drain."
    }
  ];

  return (
    <motion.section
      id="features"
      className="min-h-screen flex items-center py-20 px-6 bg-surface-container-low"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-label text-primary-container mb-4">
            Core Features
          </div>
          <h2 className="text-headline max-w-3xl mx-auto">
            Immersive Sound, Personalized Control
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}