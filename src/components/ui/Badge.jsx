import React from 'react';

const Badge = ({
    children,
    variant = 'default', // 'default', 'blue', 'purple', 'green', 'cyan'
    icon,
    className = ''
}) => {
    const variants = {
        default: 'bg-gray-800/50 text-gray-300 border-gray-700',
        blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
        purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
        green: 'bg-green-500/20 text-green-300 border-green-500/30',
        cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    };

    return (
        <span
            className={`
        inline-flex items-center gap-1.5 px-3 py-1 
        rounded-full border text-xs font-medium
        backdrop-blur-sm
        transition-all duration-200
        hover:scale-105 hover:shadow-lg
        ${variants[variant]}
        ${className}
      `}
        >
            {icon && <span className="w-3 h-3">{icon}</span>}
            {children}
        </span>
    );
};

export default Badge;
