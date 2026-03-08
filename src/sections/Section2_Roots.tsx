"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';

const education = [
    { years: "2011 \u2014 2022", school: "Regent High School", details: "Class 1 to 10" },
    { years: "2022 \u2014 2024", school: "Sanskar Junior College", details: "High School / JEE & CET" },
    { years: "2024 \u2014 2028", school: "SVPCET, Nagpur", details: "B.Tech Computer Engineering" },
];

export const Section2Roots = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    // Roots draw as user scrolls
    const rootPath1 = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
    const rootPath2 = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
    const rootPath3 = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

    return (
        <SectionContainer id="roots" className="relative pb-32" children={<div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 w-full pt-32">

            {/* Abstract Animated Roots */}
            <motion.div style={{ opacity, y }} className="relative flex items-center justify-center min-h-[400px] order-2 lg:order-1">
                <svg viewBox="0 0 400 600" className="absolute inset-0 w-full h-full opacity-60 overflow-visible pointer-events-none drop-shadow-2xl">
                    <motion.path
                        d="M 200 0 Q 200 150 50 350 T 20 600"
                        fill="transparent"
                        stroke="url(#rootGrad1)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        style={{ pathLength: rootPath1 }}
                    />
                    <motion.path
                        d="M 200 0 Q 200 200 350 400 T 380 600"
                        fill="transparent"
                        stroke="url(#rootGrad2)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        style={{ pathLength: rootPath2 }}
                    />
                    <motion.path
                        d="M 200 0 Q 200 300 150 450 T 250 600"
                        fill="transparent"
                        stroke="url(#rootGrad1)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        style={{ pathLength: rootPath3 }}
                    />
                    <defs>
                        <linearGradient id="rootGrad1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8c6450" />
                            <stop offset="100%" stopColor="#2a1d17" />
                        </linearGradient>
                        <linearGradient id="rootGrad2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a37b67" />
                            <stop offset="100%" stopColor="#4e382e" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Floating Root Milestones */}
                <div className="absolute inset-0 pt-32 hidden md:block z-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-[20%] left-[15%] group"
                    >
                        <div className="w-4 h-4 bg-wood-400 rounded-full cursor-pointer hover:scale-150 transition-transform shadow-[0_0_15px_#a37b67]" />
                        <div className="absolute top-8 left-0 min-w-48 bg-wood-950/90 text-wood-100 p-4 rounded-xl border border-wood-700/50 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md pointer-events-none">
                            <p className="text-nature-400 text-xs font-mono mb-1">{education[0].years}</p>
                            <p className="font-medium text-sm text-white mb-1">{education[0].school}</p>
                            <p className="text-xs text-wood-400">{education[0].details}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.4 }}
                        className="absolute top-[50%] right-[10%] group"
                    >
                        <div className="w-5 h-5 bg-wood-500 rounded-full cursor-pointer hover:scale-150 transition-transform shadow-[0_0_15px_#8c6450]" />
                        <div className="absolute top-8 right-0 min-w-48 bg-wood-950/90 text-wood-100 p-4 rounded-xl border border-wood-700/50 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md pointer-events-none">
                            <p className="text-nature-400 text-xs font-mono mb-1">{education[1].years}</p>
                            <p className="font-medium text-sm text-white mb-1">{education[1].school}</p>
                            <p className="text-xs text-wood-400">{education[1].details}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.6 }}
                        className="absolute bottom-[10%] left-[30%] group"
                    >
                        <div className="w-6 h-6 bg-wood-300 rounded-full cursor-pointer hover:scale-150 transition-transform shadow-[0_0_20px_#e0cec5]" />
                        <div className="absolute bottom-10 left-0 min-w-56 bg-wood-950/90 text-wood-100 p-4 rounded-xl border border-wood-700/50 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md pointer-events-none">
                            <p className="text-nature-400 text-xs font-mono mb-1">{education[2].years}</p>
                            <p className="font-medium text-sm text-white mb-1">{education[2].school}</p>
                            <p className="text-xs text-wood-400 leading-relaxed">{education[2].details}</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Narrative Text Content */}
            <motion.div style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [150, -150]) }} className="flex flex-col justify-center space-y-8 order-1 lg:order-2 pl-0 lg:pl-16">
                <h2 className="text-5xl md:text-6xl font-light text-[#e0cec5] tracking-tight">
                    Roots spreading<br /><span className="italic font-extralight text-wood-400">underground.</span>
                </h2>
                <p className="text-xl text-wood-500/80 font-light max-w-lg leading-relaxed pt-4">
                    The unseen foundation built through years of disciplined education, preparing the tree to finally break the surface.
                </p>

                {/* Mobile-only visible timeline fallback */}
                <div className="space-y-8 pt-8 md:hidden border-l border-wood-800 ml-4 pl-6">
                    {education.map((item, i) => (
                        <div key={i} className="relative">
                            <div className="absolute w-2 h-2 bg-wood-500 rounded-full -left-[29px] top-2" />
                            <p className="text-nature-500 text-xs font-mono mb-1">{item.years}</p>
                            <p className="font-medium text-white mb-1">{item.school}</p>
                            <p className="text-sm text-wood-500">{item.details}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>} />
    );
};
