"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';

export const Section1Seed = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <SectionContainer id="seed" className="min-h-screen relative overflow-hidden" children={<div ref={containerRef} className="flex flex-col items-center justify-center min-h-screen text-center relative z-10 w-full max-w-3xl mx-auto pt-20">
            <motion.div style={{ opacity, scale, y }} className="space-y-16">

                {/* Seed Visual */}
                <div className="relative">
                    <motion.div
                        animate={{
                            boxShadow: ['0 0 30px #97c5b2', '0 0 60px #c2ded0', '0 0 30px #97c5b2'],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-20 h-20 bg-wood-500 rounded-full mx-auto relative z-20 overflow-hidden shadow-[0_0_40px_rgba(151,197,178,0.6)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#3f2a20] to-[#8c6450] opacity-90" />
                        <div className="absolute top-3 right-5 w-6 h-6 bg-white/30 rounded-full blur-md" />
                    </motion.div>

                    {/* Soil bed */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-2 bg-[#1a120e] blur-md rounded-full -z-10" />
                </div>

                {/* Typography Content */}
                <div className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extralight text-white tracking-tight leading-tight"
                    >
                        Every journey begins<br />with a <span className="font-normal text-nature-300">seed</span>.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="pt-12 space-y-2 border-t border-nature-900/50 max-w-xs mx-auto"
                    >
                        <p className="text-2xl text-white/90 font-light">Vedant Ghatole</p>
                        <p className="text-nature-400 font-mono tracking-widest text-sm uppercase">Born April 13, 2005</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating particles (spores/dust) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0 opacity-50">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: "100vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
                        animate={{ y: "-10vh", opacity: [0, 1, 0] }}
                        transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                        className="absolute w-1 h-1 bg-nature-200 rounded-full blur-[1px]"
                    />
                ))}
            </div>

        </div>} />
    );
};
