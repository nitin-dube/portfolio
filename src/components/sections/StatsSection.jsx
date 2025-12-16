import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from '../ui/AnimatedCounter';
import { Code, Coffee, Users, Award } from 'lucide-react';

const StatsSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const stats = [
        {
            icon: <Award className="w-8 h-8" />,
            value: 3,
            suffix: '+',
            label: 'Projects Completed',
            color: 'text-blue-400',
            glow: 'shadow-blue-500/50',
        },
        {
            icon: <Users className="w-8 h-8" />,
            value: 500,
            suffix: '+',
            label: 'Students Impacted',
            color: 'text-purple-400',
            glow: 'shadow-purple-500/50',
        },
        {
            icon: <Coffee className="w-8 h-8" />,
            value: 2,
            suffix: '+',
            label: 'Years Learning',
            color: 'text-cyan-400',
            glow: 'shadow-cyan-500/50',
        },
        {
            icon: <Code className="w-8 h-8" />,
            value: 10,
            suffix: '+',
            label: 'Technologies',
            color: 'text-green-400',
            glow: 'shadow-green-500/50',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <section className="w-full py-20 px-4" ref={ref}>
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <GlassCard key={index} className="text-center group hover:border-opacity-30">
                            <motion.div
                                className={`${stat.color} mb-4 flex justify-center`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className={`p-3 rounded-lg bg-white/5 ${stat.glow} shadow-lg`}>
                                    {stat.icon}
                                </div>
                            </motion.div>
                            <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-2`}>
                                <AnimatedCounter
                                    end={stat.value}
                                    suffix={stat.suffix}
                                    duration={2}
                                />
                            </div>
                            <div className="text-sm md:text-base text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default StatsSection;
