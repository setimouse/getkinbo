'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-outline-variant/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-semibold">Kinbo</span>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <a href="/privacy-policy" className="text-on-surface/70 hover:text-primary-container transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-on-surface/70 hover:text-primary-container transition-colors">Terms of Service</a>
            <a href="#" className="text-on-surface/70 hover:text-primary-container transition-colors">Contact</a>
            <p className="text-sm text-on-surface/60">© 2026 Kinbo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}