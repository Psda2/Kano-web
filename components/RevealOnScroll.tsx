"use client";

import { useEffect, useRef, useState } from 'react';

type EffectType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    effect?: EffectType;
    repeat?: boolean;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
    children,
    className = "",
    delay = 0,
    duration = 1000,
    effect = 'fade-up',
    repeat = true
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (!repeat) {
                        observer.disconnect();
                    }
                } else if (repeat) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [repeat]);

    const getEffectClasses = () => {
        switch (effect) {
            case 'fade-up':
                return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
            case 'fade-in':
                return isVisible ? "opacity-100" : "opacity-0";
            case 'slide-left':
                return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10";
            case 'slide-right':
                return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10";
            case 'zoom-in':
                return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
            default:
                return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
        }
    };

    return (
        <div
            ref={ref}
            className={`transform ${getEffectClasses()} ${className}`}
            style={{
                transitionProperty: 'all',
                transitionDuration: `${duration}ms`,
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
