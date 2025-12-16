import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Send, Check } from 'lucide-react';
// import emailjs from '@emailjs/browser'; // Uncomment when EmailJS is configured
import GlassCard from '../ui/GlassCard';

const ContactSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
            return;
        }

        // EmailJS configuration (you'll need to set up EmailJS)
        // For now, we'll just simulate success
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);

        /* Uncomment when EmailJS is configured
        try {
          await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            formData,
            'YOUR_PUBLIC_KEY'
          );
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
        }
        */
    };

    return (
        <section id="contact" className="w-full py-20 px-4" ref={ref}>
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Let's Connect
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <GlassCard>
                            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                        <Mail className="text-blue-400" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Email</div>
                                        <a href="mailto:nitinkrdubey.nkd@gmail.com" className="text-white hover:text-blue-400 transition">
                                            nitinkrdubey.nkd@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                        <svg width="20" height="20" fill="currentColor" className="text-purple-400" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">LinkedIn</div>
                                        <a href="https://www.linkedin.com/in/nitin-kumar-dubey-0052nkd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition">
                                            Nitin Kumar Dubey
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                        <Github className="text-cyan-400" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">GitHub</div>
                                        <a href="https://github.com/nitin-dube" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition">
                                            nitin-dube
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                        <svg width="20" height="20" fill="currentColor" className="text-green-400" viewBox="0 0 24 24">
                                            <path d="M12.04 2c-.61.07-1.21.16-1.79.27-1.94.34-3.8 1.03-5.46 2.06-1.66 1.03-3.09 2.41-4.16 4.06-1.07 1.65-1.78 3.52-2.06 5.46-.28 1.94-.12 3.92.47 5.76.59 1.84 1.56 3.51 2.84 4.89 1.28 1.38 2.85 2.44 4.6 3.09 1.75.65 3.65.88 5.52.68 1.87-.2 3.68-.86 5.26-1.92 1.58-1.06 2.9-2.49 3.85-4.16.95-1.67 1.51-3.54 1.64-5.44.13-1.9-.16-3.82-.84-5.59-.68-1.77-1.75-3.36-3.11-4.63-1.36-1.27-2.98-2.2-4.74-2.71-1.75-.51-3.62-.6-5.45-.32zm-.06 1.99c1.54-.24 3.12-.16 4.61.25 1.49.41 2.88 1.15 4.04 2.17 1.16 1.02 2.08 2.31 2.68 3.74.6 1.43.87 2.99.79 4.53-.08 1.54-.52 3.05-1.28 4.39-.76 1.34-1.82 2.49-3.08 3.35-1.26.86-2.7 1.42-4.2 1.64-1.5.22-3.05.1-4.52-.36-1.47-.46-2.82-1.25-3.94-2.3-1.12-1.05-2-2.34-2.56-3.76-.56-1.42-.79-2.96-.67-4.48.12-1.52.6-3 1.39-4.31.79-1.31 1.87-2.42 3.14-3.23 1.27-.81 2.72-1.3 4.23-1.43z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Phone</div>
                                        <span className="text-white">+91 9835736553</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 mt-6">
                                <a
                                    href="https://github.com/nitin-dube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/nitin-kumar-dubey-0052nkd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="mailto:nitinkrdubey.nkd@gmail.com"
                                    className="w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <GlassCard>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className={`
                    w-full flex items-center justify-center gap-2 px-6 py-3 
                    ${status === 'success'
                                            ? 'bg-gradient-to-r from-green-600 to-emerald-500'
                                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'
                                        }
                    text-white font-bold rounded-lg shadow-lg
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                                >
                                    {status === 'loading' && (
                                        <>
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            />
                                            Sending...
                                        </>
                                    )}
                                    {status === 'success' && (
                                        <>
                                            <Check size={20} />
                                            Message Sent!
                                        </>
                                    )}
                                    {status === 'idle' && (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                    {status === 'error' && (
                                        <>
                                            <Send size={20} />
                                            Try Again
                                        </>
                                    )}
                                </motion.button>

                                {status === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-green-400 text-sm text-center"
                                    >
                                        Thank you! I'll get back to you soon.
                                    </motion.p>
                                )}
                                {status === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm text-center"
                                    >
                                        Please fill in all required fields.
                                    </motion.p>
                                )}
                            </form>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
