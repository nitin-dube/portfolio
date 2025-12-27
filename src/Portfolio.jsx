import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import new components
import HeroSection from './components/hero/HeroSection';
import StatsSection from './components/sections/StatsSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceTimeline from './components/sections/ExperienceTimeline';
import TestimonialsCarousel from './components/sections/TestimonialsCarousel';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

// Icons
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Portfolio() {
  const [coverVisible, setCoverVisible] = useState(true);

  useEffect(() => {
    if (!coverVisible) return;
    const handleScroll = () => {
      if (window.scrollY > 10) setCoverVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [coverVisible]);

  const handleEnter = () => {
    setCoverVisible(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  // Handle keyboard shortcut (Enter to skip cover)
  useEffect(() => {
    if (!coverVisible) return;

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleEnter();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [coverVisible]);

  return (
    <div className="relative min-h-screen bg-gray-950">
      {/* Cover Page */}
      <AnimatePresence>
        {coverVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#10131a] via-[#1e2746] to-[#10131a]"
            style={{ minHeight: '100vh', overflow: 'hidden' }}
          >
            {/* Animated radial gradient background */}
            <div
              aria-hidden="true"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(60,120,255,0.18) 0%, rgba(16,19,26,0.95) 100%)',
                animation: 'bg-move 18s linear infinite alternate',
                zIndex: 1,
              }}
            ></div>

            {/* Animated geometric shapes */}
            <div aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-400/40 rounded-full animate-float-dot1"></div>
              <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-green-400/40 rounded-full animate-float-dot2"></div>
              <div className="absolute bottom-1/4 left-1/5 w-2.5 h-2.5 bg-purple-400/40 rounded-full animate-float-dot3"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-blue-500/20 rounded-full animate-float-line"></div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center w-full relative z-20">
              <div className="backdrop-blur-xl bg-white/10 border border-blue-900/30 rounded-2xl px-10 py-12 shadow-2xl animate-slide-fade-up-slow max-w-2xl mx-auto flex flex-col items-center">
                <h2
                  className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight animate-gradient-text"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Code Maverick"
                >
                  Code Maverick
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 rounded-full mb-4 animate-accent-line"></div>

                <h2
                  className="text-2xl md:text-3xl font-semibold text-blue-200 text-center mb-2"
                  style={{ fontFamily: 'Inter, sans-serif', display: 'inline-block' }}
                >
                  <span className="cover-typewriter">Aspiring Full-Stack Developer</span>
                </h2>

                <p className="text-lg md:text-xl text-blue-100 text-center mb-6 animate-fade-in-up max-w-xl">
                  I build modern, impactful web solutions and love turning ideas into reality. Let's create something
                  amazing together!
                </p>

                <motion.button
                  onClick={handleEnter}
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in-up"
                  aria-label="Enter Portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore My Work
                </motion.button>

                <p className="text-sm text-gray-400 mt-4">Press Enter or scroll to continue</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: coverVisible ? 0 : 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white"
      >
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-gray-950/80 backdrop-blur border-b border-gray-800 flex items-center justify-between px-6 shadow-lg">
          <div className="flex items-center gap-4">
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono"
              whileHover={{ scale: 1.05 }}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              ND
            </motion.span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nitin-dube"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nitin-kumar-dubey-0052nkd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-blue-400 hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:nitinkrdubey.nkd@gmail.com"
              aria-label="Mail"
              className="text-cyan-400 hover:text-white transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </header>

        {/* Main Sections */}
        <main className="pt-16">
          <HeroSection />

          <div id="stats">
            <StatsSection />
          </div>

          <SkillsSection />

          <ProjectsSection />

          <div id="experience">
            <ExperienceTimeline />
          </div>

          <TestimonialsCarousel />

          <ContactSection />

          <Footer />
        </main>
      </motion.div>
    </div>
  );
}