"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';

const skills = [
    { category: "Programming", items: ["C", "C++", "Python"], align: "left" },
    { category: "Web Development", items: ["Frontend", "Website Management"], align: "right" },
    { category: "AI & ML", items: ["Model development", "Neural networks", "Testing"], align: "left" },
    { category: "Design", items: ["Graphic design", "Visual design"], align: "right" },
    { category: "Soft Skills", items: ["Leadership", "Communication", "Critical thinking", "Teamwork"], align: "left" },
];

export const Section4Plant = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <SectionContainer id="plant" className="relative min-h-[150vh] pb-32" children={<div ref={containerRef} className="relative z-10 w-full pt-32">

            <motion.div style={{ opacity }} className="text-center mb-32 relative">
                <h2 className="text-5xl md:text-6xl font-light text-wood-100 tracking-tight">
                    Branches of <span className="font-normal text-nature-400">Knowledge</span>.
                </h2>
                <p className="text-xl text-wood-300/80 font-light max-w-2xl mx-auto mt-6">
                    The plant grows taller, extending dedicated branches across diverse skill categories.
                </p>
            </motion.div>

            <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-24 lg:gap-32 pb-48">
                {skills.map((skillGroup, index) => {
                    const isLeft = skillGroup.align === 'left';
                    return (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, x: isLeft ? 50 : -50, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                            className={`relative flex items-center w-full ${isLeft ? 'justify-start md:pr-[55%]' : 'justify-end md:pl-[55%]'} `}
                        >
                            {/* Minimal horizontal branch connecting to center trunk */}
                            <div className={`absolute top-1/2 w-[50%] h-[1px] bg-gradient-to-r ${isLeft ? 'from-transparent to-wood-500/50 right-0' : 'from-wood-500/50 to-transparent left-0'} -z-10 hidden md:block pointer-events-none`} />

                            <div className="bg-[#0f1712]/60 backdrop-blur-2xl p-8 rounded-3xl border border-nature-800/50 w-full hover:border-nature-500/50 hover:bg-[#1a2e24]/40 transition-all duration-500 shadow-2xl group relative overflow-hidden">

                                {/* Subtle hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-nature-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <h3 className="text-2xl font-light text-nature-100 group-hover:text-nature-300 transition-colors mb-6 tracking-wide">
                                    {skillGroup.category}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.items.map(item => (
                                        <span key={item} className="px-4 py-2 bg-[#0f1712] text-nature-300/80 text-sm rounded-full border border-nature-900 group-hover:border-nature-700/50 transition-colors shadow-inner">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </div>} />
    );
};
