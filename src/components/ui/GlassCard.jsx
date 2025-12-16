import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
    children,
    className = '',
    tilt = false,
    onClick,
    ...props
}) => {
    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        },
        hover: tilt ? {
            scale: 1.02,
            rotateY: 5,
            rotateX: 5,
            transition: { duration: 0.3 }
        } : {
            scale: 1.02,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className={`glass-card ${className}`}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            onClick={onClick}
            style={{
                background: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                cursor: onClick ? 'pointer' : 'default',
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
