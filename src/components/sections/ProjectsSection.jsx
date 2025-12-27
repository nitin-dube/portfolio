import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const projects = [
        {
            title: 'Student Attendance Management System (SAMS)',
            description: 'A comprehensive full-stack web application for digital attendance management in academic institutions, featuring role-based access, real-time analytics, and automated notifications.',
            techStack: ['React.js', 'Flask', 'Firebase', 'Python'],
            features: [
                'Role-based login (Admin, Faculty, Student)',
                'Real-time attendance marking and analytics',
                'Automated notifications for low attendance',
                'Visual reports and downloadable summaries',
            ],
            impact: [
                { metric: '87%', label: 'Faster attendance marking' },
                { metric: '50+', label: 'Active students' },
                { metric: '40hrs', label: 'Saved per month' },
            ],
            link: null,
            github: null,
            category: 'Full-Stack',
        },
        {
            title: 'Aakashdeep Foundation – NGO Website',
            description: 'A responsive website dedicated to empowering rural communities through education, health, and environmental initiatives, featuring bilingual support and impact analytics.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
            features: [
                'Programs for education, health, environment',
                'Bilingual support (Hindi & English)',
                'Impact timeline and growth stats',
                'Events gallery and testimonials',
            ],
            impact: [
                { metric: '1,000+', label: 'Visitors in first month' },
                { metric: '100%', label: 'Mobile responsive' },
            ],
            link: 'https://aakashdeepfoundation.netlify.app/',
            github: null,
            category: 'Frontend',
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, interactive portfolio showcasing projects, skills, and professional journey with cutting-edge animations and glassmorphism design.',
            techStack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
            features: [
                'Particle animations and glassmorphism',
                'Magnetic button interactions',
                'Scroll-triggered animations',
                'Fully responsive design',
            ],
            impact: [
                { metric: 'Premium', label: 'UI/UX Design' },
                { metric: '90+', label: 'Performance Score' },
            ],
            link: '/',
            github: null,
            category: 'Frontend',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        },
    };

    return (
        <section id="projects" className="w-full py-20 px-4" ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
                        Building impactful solutions that solve real-world problems
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                            className="h-full"
                        >
                            <GlassCard
                                tilt={true}
                                className="h-full flex flex-col hover:border-blue-500/30 transition-all duration-300"
                            >
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <Badge variant="blue">{project.category}</Badge>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech) => (
                                        <Badge key={tech} variant="purple">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Key Features */}
                                <div className="mb-4 flex-grow">
                                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                                    <ul className="text-sm text-gray-400 space-y-1">
                                        {project.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-blue-400 mt-1">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Impact Metrics */}
                                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 mb-4">
                                    <h4 className="text-xs font-semibold text-blue-300 mb-3">📊 Impact</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {project.impact.map((item, i) => (
                                            <div key={i} className="text-center">
                                                <div className="text-xl font-black text-blue-400">{item.metric}</div>
                                                <div className="text-xs text-gray-400">{item.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-auto">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <motion.button
                                                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <ExternalLink size={16} />
                                                View Live
                                            </motion.button>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <motion.button
                                                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-white/20 transition-all duration-300"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Github size={16} />
                                                GitHub
                                            </motion.button>
                                        </a>
                                    )}
                                    {!project.link && !project.github && (
                                        <div className="flex-1 flex items-center justify-center text-sm text-gray-500">
                                            Private Project
                                        </div>
                                    )}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
