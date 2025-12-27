import React from 'react';
import { motion } from 'framer-motion';

const GradientBlob = () => {
    return (
        <div className="gradient-blob-container absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="gradient-blob absolute"
                style={{
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 70%)',
                    filter: 'blur(60px)',
                    top: '10%',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [-50, 50, -50],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="gradient-blob absolute"
                style={{
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(16,185,129,0.1) 50%, transparent 70%)',
                    filter: 'blur(50px)',
                    bottom: '20%',
                    right: '10%',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    y: [-30, 30, -30],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
            />
        </div>
    );
};

export default GradientBlob;
