"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Sparkles } from 'lucide-react';

const AnimatedCounter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const end = value;
                    const duration = 2000;
                    const incrementTime = (duration / end);

                    const timer = setInterval(() => {
                        start += Math.ceil(end / 40); // Faster increment for larger numbers
                        if (start >= end) {
                            start = end;
                            clearInterval(timer);
                        }
                        setCount(start);
                    }, incrementTime);

                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (nodeRef.current) observer.observe(nodeRef.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={nodeRef} className="flex flex-col items-center p-8 bg-[#0f1712]/60 backdrop-blur-xl rounded-[2rem] border border-nature-500/20 shadow-2xl w-full group hover:border-nature-500/50 hover:-translate-y-2 transition-all duration-500">
            <div className="text-5xl md:text-7xl font-extralight text-white mb-3 flex items-baseline gap-1 tracking-tighter group-hover:scale-105 transition-transform duration-500">
                {count}
                <span className="text-3xl text-nature-500 font-light">{suffix}</span>
            </div>
            <div className="text-sm uppercase tracking-widest text-nature-400 font-medium text-center">{label}</div>
        </div>
    );
};

export const Section8PresentTree = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

    const opacity = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
    const y = useTransform(smoothProgress, [0, 1], [200, -200]);

    // Cinematic sunlight rays passing through the screen
    const rayRotate1 = useTransform(smoothProgress, [0, 1], [-20, 20]);
    const rayRotate2 = useTransform(smoothProgress, [0, 1], [30, -10]);

    return (
        <SectionContainer id="present" className="relative min-h-[160vh] overflow-hidden" children={<div ref={containerRef} className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-48">

            {/* Volumetric Lighting Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none flex items-center justify-center">
                <motion.div style={{ rotate: rayRotate1, opacity }} className="absolute w-[250%] h-[150px] bg-gradient-to-r from-transparent via-yellow-200/5 to-transparent blur-[80px] transform -translate-y-64" />
                <motion.div style={{ rotate: rayRotate2, opacity: useTransform(opacity, v => v * 0.7) }} className="absolute w-[200%] h-[200px] bg-gradient-to-r from-transparent via-[#a37b67]/10 to-transparent blur-[100px] transform translate-y-32" />

                {/* Core Screen Glow behind content */}
                <motion.div
                    style={{ opacity, scale }}
                    className="absolute w-[800px] h-[800px] bg-gradient-to-b from-nature-500/10 to-[#3f2a20]/10 rounded-full blur-[120px]"
                />
            </div>

            <motion.div style={{ opacity, y, scale }} className="text-center w-full max-w-5xl mx-auto z-20">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-900/50 border border-nature-700/50 text-nature-300 font-mono text-sm tracking-widest uppercase mb-12 backdrop-blur-md">
                    <Sparkles className="w-4 h-4" /> Present Day
                </div>

                <h2 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white tracking-tighter mb-10 drop-shadow-2xl leading-none">
                    The <span className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-nature-300 to-nature-600">Tree</span> Stands.
                </h2>
                <p className="text-2xl md:text-3xl text-nature-100/80 font-light mb-24 max-w-3xl mx-auto leading-relaxed text-balance">
                    A strong foundation, expansive branches, and a dense canopy of practical knowledge. Ready to face the elements and thrive.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
                    <AnimatedCounter value={21} label="Years of Growth" />
                    <AnimatedCounter value={10} label="GitHub Projects" />
                    <AnimatedCounter value={15} label="Hackathons" suffix="+" />
                    <AnimatedCounter value={3} label="Core Languages" />
                </div>
            </motion.div>

        </div>} />
    );
};
