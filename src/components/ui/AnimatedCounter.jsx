import React, { useEffect, useRef, useState } from 'react';
import { useSpring, useMotionValue } from 'framer-motion';

const AnimatedCounter = ({
    end,
    duration = 2,
    suffix = '',
    prefix = '',
    decimals = 0,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const count = useMotionValue(0);
    const rounded = useSpring(count, { duration: duration * 1000, bounce: 0 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    count.set(end);
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [end, isVisible, count]);

    useEffect(() => {
        const unsubscribe = rounded.on('change', (latest) => {
            setDisplayValue(latest);
        });

        return () => unsubscribe();
    }, [rounded]);

    return (
        <span ref={ref} className={`animated-counter ${className}`}>
            {prefix}
            {displayValue.toFixed(decimals)}
            {suffix}
        </span>
    );
};

export default AnimatedCounter;
