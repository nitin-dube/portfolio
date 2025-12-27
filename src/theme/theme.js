// Theme configuration
export const theme = {
    colors: {
        primary: '#3B82F6',      // Electric Blue
        secondary: '#A855F7',    // Cyber Purple
        accent: '#06B6D4',       // Soft Cyan
        success: '#10B981',      // Emerald
        darkBg: '#0F172A',       // Deep Space
        darkBg2: '#1E293B',      // Slate
        glassBg: 'rgba(15, 23, 42, 0.7)',
        glassBorder: 'rgba(255, 255, 255, 0.1)',
        textPrimary: '#FFFFFF',
        textSecondary: '#CBD5E1',
    },

    gradients: {
        primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        blue: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        purple: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
        accent: 'linear-gradient(90deg, #60a5fa, #34d399, #a78bfa, #f472b6)',
    },

    shadows: {
        glow: {
            blue: '0 0 20px rgba(59, 130, 246, 0.5)',
            purple: '0 0 20px rgba(168, 85, 247, 0.5)',
            cyan: '0 0 20px rgba(6, 182, 212, 0.5)',
        },
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    },

    animations: {
        duration: {
            fast: '0.2s',
            normal: '0.3s',
            slow: '0.5s',
        },
        easing: {
            smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        },
    },

    breakpoints: {
        mobile: '640px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1280px',
    },
};

export default theme;
