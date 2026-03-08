"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Brain, Rocket, Cpu, Binary } from 'lucide-react';

const focusAreas = [
    { icon: <Brain className="w-8 h-8" />, title: "Artificial Intelligence", desc: "Pushing boundaries with intelligent, adaptive systems." },
    { icon: <Cpu className="w-8 h-8" />, title: "Machine Learning", desc: "Extracting meaning and patterns from complex data." },
    { icon: <Binary className="w-8 h-8" />, title: "Software Eng.", desc: "Architecting robust, scalable, and elegant solutions." },
    { icon: <Rocket className="w-8 h-8" />, title: "Innovation", desc: "Leading technological breakthroughs into reality." }
];

export const Section9FutureSky = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [300, -300]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

    return (
        <SectionContainer id="future" className="relative min-h-[160vh] overflow-hidden" children={<div ref={containerRef} className="relative z-10 w-full pt-48 md:pt-64">

            {/* Sky/Atmosphere Ambient Light */}
            <motion.div
                style={{ opacity }}
                className="absolute inset-0 bg-gradient-to-t from-[#0f1712] via-sky-900/10 to-blue-900/20 -z-10 blur-3xl pointer-events-none"
            />

            <motion.div style={{ y, opacity }} className="text-center mb-24 relative z-20">
                <h2 className="text-5xl md:text-7xl font-extralight text-[#e2e8f0] tracking-tight">
                    "This tree is still<br /><span className="font-normal text-sky-400">growing</span>."
                </h2>
                <p className="text-2xl text-sky-200/70 font-light mt-8 max-w-2xl mx-auto italic">
                    Reaching higher into the canopy of tomorrow. Building the technology of the future.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto relative z-20">
                {focusAreas.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                        className="bg-black/20 backdrop-blur-2xl p-10 md:p-12 rounded-[2.5rem] border border-sky-900/40 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 hover:bg-sky-900/20 hover:border-sky-500/40 transition-all duration-500 group shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                    >
                        <div className="p-6 bg-gradient-to-br from-sky-900/80 to-[#0f1712] rounded-[2rem] text-sky-400 group-hover:text-white group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-500 shadow-inner border border-sky-500/20">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-3xl font-light text-[#f8fafc] mb-4 tracking-wide">{item.title}</h3>
                            <p className="text-lg text-sky-200/60 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>} />
    );
};
