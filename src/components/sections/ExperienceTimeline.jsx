import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceTimeline = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const experiences = [
        {
            year: '2025',
            title: 'Founder, Aakashdeep Foundation (NGO)',
            period: 'July 2025–Present',
            description: [
                'Founded and lead a non-profit uplifting rural communities in India through education, health, and environmental initiatives.',
                'Organized impactful events and donation drives, benefiting children and local communities.',
                'Managed a team of 10+ volunteers and launched pilot projects in key social sectors.',
                'Established the foundation\'s digital presence to expand outreach and engagement.',
            ],
            color: 'blue',
        },
        {
            year: '2025',
            title: 'Web Development Intern, Dilwado.com',
            period: 'Jun 2025–Present',
            description: [
                'Customized UI, managed plugins, and integrated APIs for e-commerce platform.',
                'Improved site performance and user experience.',
            ],
            color: 'purple',
        },
        {
            year: '2025',
            title: 'Web Developer Intern, NIAMT College',
            period: 'Jun 2025–Present',
            description: [
                'Developed front-end logic and API integration using React and Node.js.',
                'Collaborated with a team to deliver a real-time academic portal.',
            ],
            color: 'cyan',
        },
        {
            year: '2025',
            title: 'SAP MM Trainee, Usha Martin Ltd.',
            period: '1-month training',
            description: [
                'Completed SAP MM basics training and contributed to process documentation.',
            ],
            color: 'green',
        },
        {
            year: '2025',
            title: 'Virtual Job Simulation, Accenture',
            period: 'Data analytics & visualization (Forage)',
            description: [
                'Analyzed datasets and presented actionable insights using visualization tools.',
            ],
            color: 'blue',
        },
    ];

    const colorClasses = {
        blue: 'bg-blue-500 shadow-blue-500/50',
        purple: 'bg-purple-500 shadow-purple-500/50',
        cyan: 'bg-cyan-500 shadow-cyan-500/50',
        green: 'bg-green-500 shadow-green-500/50',
    };

    return (
        <section className="w-full py-20 px-4" ref={ref}>
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform md:-translate-x-1/2"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-center ${index % 2 === 0 && 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full ${colorClasses[exp.color]} shadow-lg transform md:-translate-x-1/2 flex items-center justify-center z-10`}>
                                    <Briefcase size={16} className="text-white" />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 && 'md:ml-auto md:mr-0'}`}>
                                    <motion.div
                                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300"
                                        whileHover={{ scale: 1.02, y: -5 }}
                                    >
                                        {/* Year Badge */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar size={16} className="text-blue-400" />
                                            <span className="text-xs font-bold text-blue-400">{exp.period}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>

                                        {/* Description */}
                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                    <span className="text-blue-400 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
