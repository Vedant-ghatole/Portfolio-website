"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { BrainCircuit, Cpu, Code2, Lightbulb } from 'lucide-react';

const focusAreas = [
    { 
        icon: <BrainCircuit className="w-8 h-8" />, 
        title: "AI", 
        desc: "Pushing boundaries with intelligent and adaptive systems.",
        colorClasses: "border-neon-purple/20 hover:border-neon-purple/60 hover:shadow-[0_20px_50px_rgba(157,78,221,0.2)] bg-neon-purple/10 text-neon-purple group-hover:bg-neon-purple group-hover:shadow-[0_0_30px_rgba(157,78,221,0.5)] bg-neon-purple/10 group-hover:bg-neon-purple/20"
    },
    { 
        icon: <Cpu className="w-8 h-8" />, 
        title: "Machine Learning", 
        desc: "Deriving deep data insights and predictive modeling.",
        colorClasses: "border-neon-blue/20 hover:border-neon-blue/60 hover:shadow-[0_20px_50px_rgba(67,97,238,0.2)] bg-neon-blue/10 text-neon-blue group-hover:bg-neon-blue group-hover:shadow-[0_0_30px_rgba(67,97,238,0.5)] bg-neon-blue/10 group-hover:bg-neon-blue/20"
    },
    { 
        icon: <Code2 className="w-8 h-8" />, 
        title: "Software Engineering", 
        desc: "Architecting robust, scalable, high-performance systems.",
        colorClasses: "border-neon-cyan/20 hover:border-neon-cyan/60 hover:shadow-[0_20px_50px_rgba(76,201,240,0.2)] bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan group-hover:shadow-[0_0_30px_rgba(76,201,240,0.5)] bg-neon-cyan/10 group-hover:bg-neon-cyan/20"
    },
    { 
        icon: <Lightbulb className="w-8 h-8" />, 
        title: "Innovation", 
        desc: "Leading technological breakthroughs and new ventures.",
        colorClasses: "border-neon-green/20 hover:border-neon-green/60 hover:shadow-[0_20px_50px_rgba(6,214,160,0.2)] bg-neon-green/10 text-neon-green group-hover:bg-neon-green group-hover:shadow-[0_0_30px_rgba(6,214,160,0.5)] bg-neon-green/10 group-hover:bg-neon-green/20"
    }
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

            {/* Cosmic Neon Sky Ambient Light */}
            <motion.div
                style={{ opacity }}
                className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-neon-purple/5 to-neon-blue/10 -z-10 blur-3xl pointer-events-none"
            />

            <motion.div style={{ y, opacity }} className="text-center mb-24 relative z-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] -z-10" />
                
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    "This tree is still <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">growing</span>."
                </h2>
                <p className="text-2xl text-white/60 font-light mt-8 max-w-2xl mx-auto italic">
                    Reaching higher into the canopy of tomorrow. Building the technology of the future.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto relative z-20 px-4">
                {focusAreas.map((item, idx) => {
                    // split classes into chunks to assign to right places
                    // Since it's getting long, we can just use item.colorClasses. 
                    const [borderHoverShadow, iconBgText, iconHover, glowHover] = item.colorClasses.split(' bg-');
                    return (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                        className={`bg-dark-card backdrop-blur-2xl p-8 rounded-[2.5rem] border flex flex-col items-center text-center gap-6 hover:-translate-y-4 transition-all duration-500 group shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden ${borderHoverShadow}`}
                    >
                        <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[40px] pointer-events-none transition-colors bg-${glowHover}`} />
                        <div className={`p-5 rounded-3xl transition-all duration-500 shadow-inner border border-white/10 z-10 bg-${iconBgText} ${iconHover}`}>
                            {item.icon}
                        </div>
                        <div className="z-10">
                            <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70">{item.title}</h3>
                            <p className="text-sm text-white/60 font-light leading-relaxed group-hover:text-white/80 transition-colors">{item.desc}</p>
                        </div>
                    </motion.div>
                )})}
            </div>

        </div>} />
    );
};
