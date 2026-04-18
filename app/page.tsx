'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import UserExperience from './components/UserExperience';
import UseScenarios from './components/UseScenarios';
import Download from './components/Download';
import Footer from './components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const progressOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-container z-50"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          opacity: progressOpacity
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero heroOpacity={heroOpacity} heroScale={heroScale} />

      {/* Core Features */}
      <Features />

      {/* User Experience */}
      <UserExperience />

      {/* Use Scenarios */}
      <UseScenarios />

      {/* Download CTA */}
      <Download />

      {/* Footer */}
      <Footer />
    </div>
  );
}