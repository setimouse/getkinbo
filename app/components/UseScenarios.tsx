'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScenarioProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const Scenario: React.FC<ScenarioProps> = ({ icon, title, description, delay }) => (
  <motion.div
    className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow max-w-xs"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ y: -10, scale: 1.05 }}
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

export default function UseScenarios() {
  const scenarios = [
    {
      icon: "💼",
      title: "Office Environment",
      description: "Enhance typing experience, improve focus, and adjust volume for quiet workspaces."
    },
    {
      icon: "🎮",
      title: "Gaming & Entertainment",
      description: "Get instant sound feedback for game controls and choose sound profiles that match your gaming style."
    },
    {
      icon: "📚",
      title: "Learning & Practice",
      description: "Receive real-time feedback during typing practice and create a focused learning environment."
    }
  ];

  return (
    <motion.section
      id="scenarios"
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
            Use Scenarios
          </div>
          <h2 className="text-headline max-w-3xl mx-auto">
            Perfect for Every Situation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {scenarios.map((scenario, index) => (
            <Scenario
              key={index}
              icon={scenario.icon}
              title={scenario.title}
              description={scenario.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}