"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Sparkles } from 'lucide-react';

const AnimatedCounter = ({ value, label, suffix = "", color = "neon-purple" }: { value: number, label: string, suffix?: string, color?: string }) => {
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

    const colorMap: Record<string, { border: string, bg: string, text: string, hoverBorder: string, hoverShadow: string, ring1: string, ring2: string }> = {
        "neon-purple": { border: "border-neon-purple/30", bg: "bg-neon-purple/20", text: "text-neon-purple", hoverBorder: "hover:border-neon-purple", hoverShadow: "hover:shadow-[0_15px_40px_rgba(157,78,221,0.2)]", ring1: "border-neon-purple/10", ring2: "border-neon-purple/5" },
        "neon-blue": { border: "border-neon-blue/30", bg: "bg-neon-blue/20", text: "text-neon-blue", hoverBorder: "hover:border-neon-blue", hoverShadow: "hover:shadow-[0_15px_40px_rgba(67,97,238,0.2)]", ring1: "border-neon-blue/10", ring2: "border-neon-blue/5" },
        "neon-cyan": { border: "border-neon-cyan/30", bg: "bg-neon-cyan/20", text: "text-neon-cyan", hoverBorder: "hover:border-neon-cyan", hoverShadow: "hover:shadow-[0_15px_40px_rgba(76,201,240,0.2)]", ring1: "border-neon-cyan/10", ring2: "border-neon-cyan/5" },
        "neon-green": { border: "border-neon-green/30", bg: "bg-neon-green/20", text: "text-neon-green", hoverBorder: "hover:border-neon-green", hoverShadow: "hover:shadow-[0_15px_40px_rgba(6,214,160,0.2)]", ring1: "border-neon-green/10", ring2: "border-neon-green/5" }
    };
    const styles = colorMap[color] || colorMap["neon-purple"];

    return (
        <div ref={nodeRef} className={`relative flex flex-col items-center p-8 bg-dark-card backdrop-blur-xl rounded-[2.5rem] border ${styles.border} shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full group ${styles.hoverBorder} hover:-translate-y-2 ${styles.hoverShadow} transition-all duration-500 overflow-hidden`}>
            {/* Ambient Glow */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 ${styles.bg} rounded-full blur-[50px] pointer-events-none group-hover:opacity-100 transition-opacity opacity-50`} />
            
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 flex items-baseline gap-1 tracking-tighter group-hover:scale-105 transition-transform duration-500 relative z-10">
                {count}
                <span className={`text-3xl lg:text-4xl ${styles.text} font-light drop-shadow-[0_0_10px_currentColor]`}>{suffix}</span>
            </div>
            <div className={`text-sm uppercase tracking-widest text-white/50 group-hover:text-white/80 font-medium text-center relative z-10 transition-colors`}>{label}</div>
            
            {/* Trunk Ring lines */}
            <div className={`absolute -bottom-8 -left-8 w-48 h-48 border ${styles.ring1} rounded-full scale-[1.2] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
            <div className={`absolute -bottom-12 -left-12 w-48 h-48 border ${styles.ring2} rounded-full scale-[1.5] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 pointer-events-none`} />
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

    // Cinematic neon rays passing through the screen
    const rayRotate1 = useTransform(smoothProgress, [0, 1], [-20, 20]);
    const rayRotate2 = useTransform(smoothProgress, [0, 1], [30, -10]);

    return (
        <SectionContainer id="present" className="relative min-h-[160vh] overflow-hidden" children={<div ref={containerRef} className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-48">

            {/* Volumetric Neon Lighting Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none flex items-center justify-center">
                <motion.div style={{ rotate: rayRotate1, opacity }} className="absolute w-[250%] h-[150px] bg-gradient-to-r from-transparent via-neon-purple/5 to-transparent blur-[80px] transform -translate-y-64" />
                <motion.div style={{ rotate: rayRotate2, opacity: useTransform(opacity, v => v * 0.7) }} className="absolute w-[200%] h-[200px] bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent blur-[100px] transform translate-y-32" />

                {/* Core Screen Glow behind content */}
                <motion.div
                    style={{ opacity, scale }}
                    className="absolute w-[800px] h-[800px] bg-gradient-to-b from-neon-purple/10 to-neon-blue/10 rounded-full blur-[120px]"
                />
            </div>

            <motion.div style={{ opacity, y, scale }} className="text-center w-full max-w-6xl mx-auto z-20 px-4">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-bg/50 border border-white/10 text-white/50 font-mono text-sm tracking-widest uppercase mb-12 backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-neon-purple" /> Present State
                </div>

                <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-10 drop-shadow-2xl leading-none">
                    Rings of the <span className="font-light text-transparent bg-clip-text bg-gradient-to-br from-neon-purple to-neon-blue glow-text">Trunk.</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/70 font-light mb-24 max-w-3xl mx-auto leading-relaxed text-balance">
                    Each layer representing continuous growth, dedication, and measurable impact in the software engineering landscape.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                    <AnimatedCounter value={1200} label="Code commits" suffix="+" color="neon-purple" />
                    <AnimatedCounter value={15} label="Projects" suffix="+" color="neon-blue" />
                    <AnimatedCounter value={10} label="Hackathons" suffix="+" color="neon-cyan" />
                </div>
            </motion.div>

        </div>} />
    );
};
