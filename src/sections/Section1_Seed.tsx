"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { ChevronDown } from 'lucide-react';

export const Section1Seed = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <SectionContainer id="seed" className="min-h-screen relative overflow-hidden" children={<div ref={containerRef} className="flex flex-col items-center justify-center min-h-screen text-center relative z-10 w-full max-w-4xl mx-auto pt-20">
            <motion.div style={{ opacity, scale, y }} className="space-y-12 flex flex-col items-center">

                {/* Seed Visual (Neon glowing core) */}
                <div className="relative mt-8">
                    <motion.div
                        animate={{
                            boxShadow: ['0 0 40px #9d4edd', '0 0 80px #4361ee', '0 0 40px #9d4edd'],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-16 h-16 bg-gradient-to-tr from-neon-purple to-neon-blue rounded-full relative z-20 flex items-center justify-center"
                    >
                        <div className="w-8 h-8 bg-white/50 rounded-full blur-[4px]"></div>
                    </motion.div>
                    
                    {/* Dark ground reflection */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-12 w-64 h-3 bg-neon-purple/20 blur-xl rounded-full -z-10" />
                </div>

                {/* Typography Content */}
                <div className="space-y-10 relative z-20 px-4 mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] pb-2">
                            Vedant Ghatole
                        </h1>
                        <p className="text-xl md:text-3xl font-light text-white/80">
                            "Every journey begins with a <span className="text-neon-green glow-text drop-shadow-[0_0_8px_rgba(6,214,160,0.8)]">seed</span>."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="pt-8 border-t border-white/10"
                    >
                        <p className="text-lg md:text-xl text-neon-cyan/90 font-medium tracking-wide mb-6">
                            Computer Engineering Student | AI & Software Developer
                        </p>
                        <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-2xl mx-auto text-balance">
                            Passionate about Artificial Intelligence, Machine Learning, and crafting premium software experiences. Building modern applications with emerging technologies.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                        className="pt-8 pb-4 flex flex-col items-center justify-center gap-8"
                    >
                        <a href="#roots" className="group relative px-8 py-4 rounded-full bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors backdrop-blur-md">
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                            <span className="relative z-10 text-white font-medium tracking-wide">Explore Journey</span>
                        </a>
                        
                        <a href="#roots" className="group flex flex-col items-center gap-3 text-white/40 hover:text-white transition-colors duration-300 mt-4">
                            <span className="text-xs tracking-widest uppercase">Scroll Down</span>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                <ChevronDown className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                            </motion.div>
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating neon particles - Only render on client to prevent hydration errors from Math.random() */}
            {mounted && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0 opacity-40">
                    {[...Array(30)].map((_, i) => {
                        const colors = ['bg-neon-purple', 'bg-neon-blue', 'bg-neon-cyan'];
                        const color = colors[Math.floor(Math.random() * colors.length)];
                        return (
                            <motion.div
                                key={i}
                                initial={{ y: "100vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
                                animate={{ y: "-10vh", opacity: [0, 1, 0] }}
                                transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                                className={`absolute w-[2px] h-[2px] ${color} rounded-full blur-[1px] shadow-[0_0_8px_currentColor]`}
                            />
                        );
                    })}
                </div>
            )}

        </div>} />
    );
};
