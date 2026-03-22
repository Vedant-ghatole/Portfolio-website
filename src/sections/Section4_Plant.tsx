"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';

const skills = [
    { category: "Programming", items: ["C", "C++", "Python"], align: "left", color: "neon-purple" },
    { category: "Web Development", items: ["React", "Next.js", "Tailwind", "TypeScript", "JavaScript"], align: "right", color: "neon-blue" },
    { category: "AI/ML", items: ["AI basics", "ML concepts"], align: "left", color: "neon-cyan" },
    { category: "Robotics", items: ["Arduino", "Sensors", "Control Systems", "e-Yantra"], align: "right", color: "neon-green" },
    { category: "Design", items: ["Figma", "Canva"], align: "left", color: "neon-purple" },
    { category: "Soft Skills", items: ["Leadership", "Teamwork", "Public Speaking"], align: "right", color: "neon-blue" },
];

export const Section4Plant = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <SectionContainer id="skills" className="relative min-h-[150vh] pb-32" children={<div ref={containerRef} className="relative z-10 w-full pt-32">

            <motion.div style={{ opacity }} className="text-center mb-32 relative">
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                    Skills <span className="font-light text-neon-green glow-text">Tree.</span>
                </h2>
                <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mt-6">
                    Branching out across diverse domains, building a robust and versatile technical foundation.
                </p>
            </motion.div>

            <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-48">
                {skills.map((skillGroup, index) => {
                    const colorMap: Record<string, { border: string, bg: string, text: string, glow: string }> = {
                        "neon-purple": { border: "border-neon-purple/30 group-hover:border-neon-purple/60", bg: "bg-neon-purple/10", text: "text-neon-purple", glow: "shadow-[0_0_30px_rgba(157,78,221,0.2)] group-hover:shadow-[0_0_40px_rgba(157,78,221,0.5)]" },
                        "neon-blue": { border: "border-neon-blue/30 group-hover:border-neon-blue/60", bg: "bg-neon-blue/10", text: "text-neon-blue", glow: "shadow-[0_0_30px_rgba(67,97,238,0.2)] group-hover:shadow-[0_0_40px_rgba(67,97,238,0.5)]" },
                        "neon-cyan": { border: "border-neon-cyan/30 group-hover:border-neon-cyan/60", bg: "bg-neon-cyan/10", text: "text-neon-cyan", glow: "shadow-[0_0_30px_rgba(76,201,240,0.2)] group-hover:shadow-[0_0_40px_rgba(76,201,240,0.5)]" },
                        "neon-green": { border: "border-neon-green/30 group-hover:border-neon-green/60", bg: "bg-neon-green/10", text: "text-neon-green", glow: "shadow-[0_0_30px_rgba(6,214,160,0.2)] group-hover:shadow-[0_0_40px_rgba(6,214,160,0.5)]" }
                    };
                    const styles = colorMap[skillGroup.color];

                    return (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                            className="w-full flex"
                        >
                            <div className={`bg-dark-card backdrop-blur-2xl p-8 rounded-3xl border flex-1 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden ${styles.border} ${styles.glow}`}>
                                
                                {/* Background glow blob */}
                                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] -z-10 transition-opacity opacity-30 group-hover:opacity-60 ${styles.bg}`} />

                                <h3 className={`text-2xl font-bold mb-6 tracking-wide drop-shadow-md ${styles.text}`}>
                                    {skillGroup.category}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.items.map(item => (
                                        <span key={item} className="px-4 py-2 bg-dark-bg/60 text-white/90 text-sm font-medium rounded-full border border-white/5 group-hover:border-white/20 transition-colors shadow-inner backdrop-blur-md">
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
