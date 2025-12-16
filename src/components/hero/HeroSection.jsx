import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FileText, ArrowRight } from 'lucide-react';
import ParticleBackground from '../effects/ParticleBackground';
import GradientBlob from '../effects/GradientBlob';
import MagneticButton from '../ui/MagneticButton';

const HeroSection = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: 'easeOut' }
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center overflow-hidden"
            id="hero"
        >
            {/* Background Effects */}
            <ParticleBackground count={120} />
            <GradientBlob />

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-5xl"
                variants={staggerChildren}
                initial="initial"
                animate="animate"
            >
                {/* Main Title */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                    Nitin Kumar Dubey
                </motion.h1>

                {/* Animated Subtitle */}
                <motion.div
                    variants={fadeInUp}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 h-12 md:h-14"
                >
                    <TypeAnimation
                        sequence={[
                            'Full-Stack Developer',
                            2000,
                            'Tech Innovator',
                            2000,
                            'Problem Solver',
                            2000,
                            'Digital Creator',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    A passionate full-stack developer crafting impactful, user-focused web solutions.
                    I thrive on learning new technologies, collaborating with teams, and turning ideas into reality.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8"
                >
                    <MagneticButton
                        href="/resume.pdf"
                        variant="primary"
                    >
                        <FileText size={20} />
                        Download Resume
                    </MagneticButton>
                    <MagneticButton
                        href="#contact"
                        variant="success"
                    >
                        <ArrowRight size={20} />
                        Contact Me
                    </MagneticButton>
                </motion.div>


            </motion.div>
        </section>
    );
};

export default HeroSection;
