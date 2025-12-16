import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({
    children,
    className = '',
    href,
    onClick,
    variant = 'primary', // 'primary', 'secondary', 'success'
    ...props
}) => {
    const buttonRef = useRef(null);
    const magneticRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = 80;

            if (distance < maxDistance) {
                const strength = (maxDistance - distance) / maxDistance;
                magneticRef.current = {
                    x: x * strength * 0.3,
                    y: y * strength * 0.3
                };
                button.style.transform = `translate(${magneticRef.current.x}px, ${magneticRef.current.y}px)`;
            }
        };

        const handleMouseLeave = () => {
            button.style.transform = 'translate(0, 0)';
            magneticRef.current = { x: 0, y: 0 };
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const variants = {
        primary: 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400',
        secondary: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400',
        success: 'bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400',
    };

    const buttonClass = `
    magnetic-button inline-flex items-center gap-2 px-6 py-3 
    ${variants[variant]}
    text-white font-bold rounded-lg shadow-lg
    transition-all duration-300 ease-out
    hover:shadow-2xl hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
    ${className}
  `;

    const buttonContent = (
        <motion.button
            ref={buttonRef}
            className={buttonClass}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
            style={{
                transition: 'transform 0.2s ease-out, box-shadow 0.3s, background 0.3s',
            }}
            {...props}
        >
            {children}
        </motion.button>
    );

    if (href) {
        return (
            <a href={href} style={{ display: 'inline-block' }}>
                {buttonContent}
            </a>
        );
    }

    return buttonContent;
};

export default MagneticButton;
