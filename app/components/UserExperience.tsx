'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  title: string;
  description: string;
  items: string[];
  image: string;
  imageLabel: string;
  reverse?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, description, items, image, imageLabel, reverse = false }) => (
  <motion.div
    className={`grid md:grid-cols-2 gap-12 items-center justify-items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {reverse ? (
      <>
        <motion.div
          className="order-2 md:order-1 bg-surface-container-highest rounded-2xl p-8 ambient-shadow max-w-md"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="aspect-video bg-surface-variant rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">{image}</div>
              <p className="text-sm text-on-surface/60">{imageLabel}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="order-1 md:order-2 max-w-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">{title}</h3>
          <p className="text-body-lg text-on-surface/80 mb-6">
            {description}
          </p>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </>
    ) : (
      <>
        <motion.div
          className="max-w-lg"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">{title}</h3>
          <p className="text-body-lg text-on-surface/80 mb-6">
            {description}
          </p>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="bg-surface-container-highest rounded-2xl p-8 ambient-shadow max-w-md"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="aspect-video bg-surface-variant rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">{image}</div>
              <p className="text-sm text-on-surface/60">{imageLabel}</p>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </motion.div>
);

export default function UserExperience() {
  const experiences = [
    {
      title: "Minimal Installation",
      description: "Drag-and-drop installation with automatic permission detection and guidance for first-time users.",
      items: [
        "Simple drag-and-drop installation",
        "Automatic permission detection",
        "Intuitive menu bar interface"
      ],
      image: "📥",
      imageLabel: "Installation Process"
    },
    {
      title: "Immersive Sound Experience",
      description: "Multi-layered sound effects that simulate the complex acoustics of real mechanical keyboards.",
      items: [
        "Multi-layered sound effects",
        "17 preset sound profiles",
        "Adaptive volume control"
      ],
      image: "🔊",
      imageLabel: "Sound Customization",
      reverse: true
    }
  ];

  return (
    <motion.section
      id="experience"
      className="min-h-screen flex items-center py-20 px-6"
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
            User Experience
          </div>
          <h2 className="text-headline max-w-3xl mx-auto">
            Designed for Seamless Integration
          </h2>
        </motion.div>

        <div className="space-y-20">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              title={experience.title}
              description={experience.description}
              items={experience.items}
              image={experience.image}
              imageLabel={experience.imageLabel}
              reverse={experience.reverse}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}