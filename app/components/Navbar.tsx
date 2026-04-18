'use client';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-xl font-semibold">Kinbo</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="hover:text-primary-container transition-colors">Features</a>
          <a href="#experience" className="hover:text-primary-container transition-colors">Experience</a>
          <a href="#scenarios" className="hover:text-primary-container transition-colors">Scenarios</a>
          <a href="#download" className="gradient-primary text-on-primary px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
            Download for Mac
          </a>
        </div>
      </div>
    </nav>
  );
}