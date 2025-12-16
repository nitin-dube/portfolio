import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, User, ChevronLeft, ChevronRight } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const testimonials = [
    {
        id: 1,
        name: "Mentor",
        role: "Instructor",
        company: "Full Stack Development Journey",
        content: "Nitin Dubey is a passionate and committed full stack developer with a strong foundation in both frontend and backend technologies. His ability to learn quickly, build modern web apps, and deploy full-stack solutions sets him apart as a promising developer with a bright future.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Senior Engineer",
        company: "DevSolutions",
        content: "One of the most dedicated developers I've worked with. His attention to detail and ability to solve complex problems is truly impressive.",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Startup Founder",
        company: "InnovateX",
        content: "The portfolio website he built for us is stunning. The animations are smooth, and the performance is top-notch. Highly recommended!",
        rating: 5
    }
];

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        })
    };

    return (
        <section id="testimonials" className="w-full py-20 px-4 overflow-hidden" ref={ref}>
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        What People Say
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Carousel */}
                <div className="relative h-[400px] md:h-[300px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full"
                        >
                            <GlassCard className="p-8 md:p-12 relative overflow-hidden group">
                                {/* Decorative Quote Icon */}
                                <div className="absolute top-4 right-8 text-white/5 opacity-50 transform rotate-12 scale-150 pointer-events-none">
                                    <Quote size={120} />
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                                    {/* Avatar */}
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] shadow-lg shadow-blue-500/30">
                                            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-white">
                                                <User size={32} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center md:text-left flex-1">
                                        <div className="flex justify-center md:justify-start gap-1 mb-4">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                                            "{testimonials[currentIndex].content}"
                                        </p>

                                        <div>
                                            <h4 className="text-xl font-bold text-white font-space-grotesk">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-blue-400 text-sm font-medium">
                                                {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons (Desktop) */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-20 group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-20 group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`
                                w-3 h-3 rounded-full transition-all duration-300
                                ${currentIndex === index ? 'bg-blue-500 w-8' : 'bg-white/20 hover:bg-white/40'}
                            `}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
