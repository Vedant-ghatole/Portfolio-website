"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const education = [
    { 
        years: "2024 — 2028", 
        school: "SVPCET, Nagpur", 
        degree: "B.Tech Computer Engineering",
        details: "Focusing on Artificial Intelligence, Machine Learning, and Software Development. Active in technical clubs and national level hackathons.",
        icon: <GraduationCap className="w-6 h-6" />,
        color: "text-neon-purple",
        bg: "bg-neon-purple/10",
        border: "border-neon-purple/30",
        glow: "shadow-[0_0_15px_rgba(157,78,221,0.5)]"
    },
    { 
        years: "2022 — 2024", 
        school: "Sanskar Junior College", 
        degree: "Higher Secondary (HSC)",
        details: "Intensive preparation for engineering entrance exams (JEE & MHT-CET) building a strong mathematical and analytical foundation.",
        icon: <BookOpen className="w-6 h-6" />,
        color: "text-neon-blue",
        bg: "bg-neon-blue/10",
        border: "border-neon-blue/30",
        glow: "shadow-[0_0_15px_rgba(67,97,238,0.5)]"
    },
    { 
        years: "2011 — 2022", 
        school: "Regent High School, Umred", 
        degree: "Primary & Secondary Education",
        details: "Developed early interest in technology and problem solving. Participated in science exhibitions and Olympiads.",
        icon: <School className="w-6 h-6" />,
        color: "text-neon-cyan",
        bg: "bg-neon-cyan/10",
        border: "border-neon-cyan/30",
        glow: "shadow-[0_0_15px_rgba(76,201,240,0.5)]"
    },
];

export const Section2Roots = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <SectionContainer id="roots" className="relative min-h-[140vh] pt-32 pb-32">
            <div ref={containerRef} className="relative z-10 w-full max-w-5xl mx-auto">
                <motion.div style={{ opacity }} className="text-center mb-24 relative">
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                        Education <span className="font-light text-neon-purple glow-text">Roots.</span>
                    </h2>
                    <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mt-6 leading-relaxed">
                        The structured academic history serving as a foundation for advanced engineering concepts.
                    </p>
                </motion.div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan opacity-20 -translate-x-1/2 rounded-full" />

                    <div className="space-y-16 md:space-y-24">
                        {education.map((item, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Marker */}
                                    <div className="absolute left-[28px] md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                        <div className={`w-14 h-14 rounded-full bg-dark-bg border-2 ${item.border} flex items-center justify-center ${item.color} ${item.bg} ${item.glow} backdrop-blur-md transition-transform duration-300 hover:scale-110`}>
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                                        <div className={`group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors backdrop-blur-md hover:${item.glow} hover:-translate-y-1 duration-300`}>
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
                                            
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-4 ${item.bg} border ${item.border} ${item.color}`}>
                                                {item.years}
                                            </span>
                                            
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                                                {item.school}
                                            </h3>
                                            
                                            <h4 className={`text-lg font-medium mb-4 ${item.color}`}>
                                                {item.degree}
                                            </h4>
                                            
                                            <p className="text-white/60 leading-relaxed font-light">
                                                {item.details}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
