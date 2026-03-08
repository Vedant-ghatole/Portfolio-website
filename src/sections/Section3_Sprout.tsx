"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Terminal, Bot, BrainCircuit, Lightbulb } from 'lucide-react';

const interests = [
    { id: 1, label: "Programming", icon: <Terminal className="w-5 h-5" />, pos: "top-10 left-[10%]", delay: 0 },
    { id: 2, label: "Robotics", icon: <Bot className="w-5 h-5" />, pos: "top-32 right-[10%]", delay: 0.2 },
    { id: 3, label: "Artificial Intelligence", icon: <BrainCircuit className="w-5 h-5" />, pos: "bottom-32 left-[5%]", delay: 0.4 },
    { id: 4, label: "Problem Solving", icon: <Lightbulb className="w-5 h-5" />, pos: "bottom-10 right-[20%]", delay: 0.6 }
];

export const Section3Sprout = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const sproutScale = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

    return (
        <SectionContainer id="sprout" className="relative pb-32" children={<div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 w-full pt-32">

            {/* Narrative Text Content */}
            <motion.div style={{ opacity, y }} className="flex flex-col justify-center items-end text-right space-y-8 pr-0 lg:pr-16 order-2 lg:order-1">
                <h2 className="text-5xl md:text-6xl font-light text-nature-100 tracking-tight text-right w-full">
                    The first<br /><span className="font-normal text-nature-400">discovery</span>.
                </h2>
                <p className="text-xl text-nature-300/80 font-light max-w-lg leading-relaxed pt-4">
                    Breaking through the surface of logic. A sprout emerging with raw ambition, driven by a growing fascination with intelligent systems.
                </p>
            </motion.div>

            {/* Visual Component */}
            <motion.div style={{ opacity }} className="relative flex items-center justify-center min-h-[400px] order-1 lg:order-2">
                <div className="absolute inset-0 bg-nature-900/10 rounded-full blur-[100px] -z-10" />

                {/* Animated Sprout Core */}
                <motion.div
                    style={{ scale: sproutScale }}
                    className="relative w-full h-full flex flex-col items-center justify-end pb-12 z-20"
                >
                    <div className="w-3 h-48 bg-gradient-to-t from-[#5e4236] via-[#468b73] to-[#97c5b2] rounded-full drop-shadow-xl" />

                    {/* Young Leaves */}
                    <div className="absolute bottom-32 -ml-20 w-24 h-12 bg-nature-400 rounded-tl-full rounded-br-full origin-bottom-right -rotate-45 shadow-[0_10px_30px_rgba(104,166,143,0.3)] border border-nature-300/30" />
                    <div className="absolute bottom-40 ml-16 w-16 h-8 bg-nature-300 rounded-tr-full rounded-bl-full origin-bottom-left rotate-45 shadow-[0_10px_30px_rgba(151,197,178,0.3)] border border-nature-200/30" />
                </motion.div>

                {/* Floating Discovery Nodes */}
                <div className="absolute inset-0 z-30 pointer-events-none sm:pointer-events-auto">
                    {interests.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: item.delay, type: 'spring' }}
                            className={`absolute ${item.pos} flex items-center gap-4 group cursor-pointer ${idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
                        >
                            <div className={`p-4 rounded-2xl bg-[#0f1712]/80 backdrop-blur-xl border border-nature-800/50 text-nature-300 group-hover:text-white group-hover:border-nature-500 group-hover:bg-nature-900/50 transition-all shadow-xl`}>
                                {item.icon}
                            </div>
                            <div className="bg-[#0f1712]/90 backdrop-blur-md px-4 py-2 rounded-xl text-sm text-nature-100 border border-nature-800/50 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap hidden sm:block">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </motion.div>

        </div>} />
    );
};
