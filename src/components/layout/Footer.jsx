import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 text-center text-sm text-gray-500 border-t border-gray-800 mt-20 bg-gray-950">
            <div className="max-w-6xl mx-auto px-4">
                {/* Working On Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-3 font-heading">Currently Working On</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
                            Portfolio v2.0
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
                            Learning Next.js
                        </span>
                        <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-300 text-xs font-medium">
                            📖 TypeScript Deep Dive
                        </span>
                    </div>
                </div>

                {/* Status Badges */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-xs font-semibold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Open to Opportunities
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-semibold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                            Available for Projects
                        </span>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 justify-center mb-6">
                    <a
                        href="https://github.com/nitin-dube"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nitin-kumar-dubey-0052nkd"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:nitinkrdubey.nkd@gmail.com"
                        aria-label="Mail"
                        className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-gray-400 font-medium">
                    &copy; {currentYear} Nitin Kumar Dubey. All rights reserved.
                </div>
                <div className="mt-2 text-xs text-gray-600">
                    Built with <span className="text-red-500 animate-pulse">♥</span> using React, Tailwind CSS & Framer Motion
                </div>
            </div>
        </footer>
    );
};

export default Footer;
