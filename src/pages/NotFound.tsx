import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="pt-[76px] min-h-screen bg-white hero-grid-bg relative flex flex-col items-center justify-center text-center px-5 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <p className="absolute -bottom-10 -left-6 font-display font-extrabold text-[26vw] leading-none text-outline-faint select-none">404</p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl flex flex-col items-center relative z-10"
      >
        <div className="w-20 h-20 bg-electric/5 rounded-full flex items-center justify-center mb-8 border border-electric/10">
          <Search className="w-10 h-10 text-electric" />
        </div>
        <h1 className="text-6xl md:text-7xl font-display font-bold text-obsidian mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-display font-medium text-obsidian mb-6">Page not found</h2>
        <p className="text-mutedink text-lg mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-obsidian text-white rounded-full font-semibold hover:bg-electric transition-all duration-300">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};
