import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassCard from '../ui/GlassCard';

const SkillsSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const [activeCategory, setActiveCategory] = useState('all');

    const skills = [
        { name: 'Python', level: 90, category: 'languages', color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 85, category: 'languages', color: 'from-yellow-500 to-orange-500' },
        { name: 'C++', level: 75, category: 'languages', color: 'from-blue-600 to-purple-600' },
        { name: 'HTML/CSS', level: 95, category: 'frontend', color: 'from-orange-500 to-red-500' },
        { name: 'React.js', level: 90, category: 'frontend', color: 'from-cyan-500 to-blue-500' },
        { name: 'Tailwind CSS', level: 95, category: 'frontend', color: 'from-teal-500 to-cyan-500' },
        { name: 'Node.js', level: 75, category: 'backend', color: 'from-green-600 to-emerald-500' },
        { name: 'Flask', level: 75, category: 'backend', color: 'from-white to-gray-400' },
        { name: 'Git', level: 85, category: 'tools', color: 'from-orange-600 to-red-600' },
        { name: 'REST APIs', level: 80, category: 'tools', color: 'from-purple-500 to-pink-500' },
        { name: 'Firebase', level: 80, category: 'tools', color: 'from-yellow-500 to-orange-600' },
        { name: 'MySQL', level: 75, category: 'tools', color: 'from-blue-600 to-cyan-600' },
    ];

    const categories = [
        { id: 'all', label: 'All Skills' },
        { id: 'languages', label: 'Languages' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'tools', label: 'Tools' },
    ];

    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
    };

    return (
        <section id="skills" className="w-full py-20 px-4" ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Skills & Technologies
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`
                px-5 py-2 rounded-full font-medium text-sm transition-all duration-300
                ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                                }
              `}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {filteredSkills.map((skill, index) => (
                        <motion.div key={skill.name} variants={itemVariants}>
                            <GlassCard className="group hover:border-white/30 transition-all duration-300">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                                    <span className="text-sm font-mono text-blue-400">{skill.level}%</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                        transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
                                    />
                                </div>

                                {/* Proficiency Label */}
                                <div className="mt-2 text-xs text-gray-400">
                                    {skill.level >= 90 && 'Expert'}
                                    {skill.level >= 80 && skill.level < 90 && 'Advanced'}
                                    {skill.level >= 70 && skill.level < 80 && 'Intermediate'}
                                    {skill.level < 70 && 'Learning'}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
