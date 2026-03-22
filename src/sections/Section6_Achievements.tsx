"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { X, Trophy, Medal, Rocket, Bot, Briefcase } from 'lucide-react';

const achievements = [
    { id: 1, title: "1st Rank – State Robotics", context: "State-Level Robotic Competition", year: "2024", icon: <Trophy className="w-8 h-8" />, color: "from-amber-400 to-amber-600", shadow: "shadow-[0_0_20px_rgba(251,191,36,0.5)]" },
    { id: 2, title: "2nd Rank – National Science Exhibition", context: "National Science Exhibition Competition", year: "2023", icon: <Medal className="w-8 h-8" />, color: "from-slate-300 to-slate-500", shadow: "shadow-[0_0_20px_rgba(203,213,225,0.5)]" },
    { id: 3, title: "10+ Hackathons", context: "Participated in 10+ hackathons including Smart India Hackathon (SIH)", year: "Ongoing", icon: <Rocket className="w-8 h-8" />, color: "from-neon-blue to-blue-600", shadow: "shadow-[0_0_20px_rgba(67,97,238,0.5)]" },
    { id: 4, title: "E-Yantra IIT Bombay", context: "Actively working with E-YRC and E-YIC at the national level", year: "Ongoing", icon: <Bot className="w-8 h-8" />, color: "from-neon-purple to-purple-800", shadow: "shadow-[0_0_20px_rgba(157,78,221,0.5)]" },
    { id: 5, title: "7-day business venture", context: "Profitable business venture in food & dairy products at camp", year: "2024", icon: <Briefcase className="w-8 h-8" />, color: "from-neon-green to-green-700", shadow: "shadow-[0_0_20px_rgba(6,214,160,0.5)]" },
];

export const Section6Achievements = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const [selectedLeaf, setSelectedLeaf] = useState<number | null>(null);

    return (
        <SectionContainer id="achievements" className="relative min-h-[140vh] pb-32" children={<div ref={containerRef} className="relative z-10 w-full pt-32">

            <motion.div style={{ opacity }} className="text-center mb-24 relative">
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                    Triumph <span className="font-light text-amber-500 glow-text">Leaves.</span>
                </h2>
                <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mt-6">
                    Milestones achieved along the journey, blooming like vibrant leaves catching the neon light.
                </p>
            </motion.div>

            <div className="relative w-full max-w-6xl mx-auto min-h-[500px]">

                {/* Abstract Neon Glow Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 to-neon-blue/5 rounded-full blur-[100px] -z-10" />

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 relative z-20 w-full px-4">
                    {achievements.map((achievement, idx) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ scale: 0, opacity: 0, y: 50 }}
                            whileInView={{ scale: 1, opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.6, type: "spring", stiffness: 80 }}
                            onClick={() => setSelectedLeaf(achievement.id)}
                            className="group cursor-pointer flex flex-col items-center"
                        >
                            {/* Leaf Badge shape */}
                            <div className={`w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br ${achievement.color} rounded-tr-[50px] rounded-bl-[50px] rounded-tl-xl rounded-br-xl ${achievement.shadow} flex flex-col items-center justify-center group-hover:scale-110 group-hover:-translate-y-4 group-hover:rotate-3 transition-all duration-500 border border-white/20 overflow-hidden relative backdrop-blur-md`}>
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
                                <div className="text-white drop-shadow-lg mb-2 relative z-10 transform group-hover:scale-110 transition-transform">
                                    {achievement.icon}
                                </div>
                                <span className="text-white font-bold text-center px-2 leading-tight drop-shadow-md z-10 text-sm md:text-base tracking-wide">{achievement.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Cinematic Modal */}
            <AnimatePresence>
                {selectedLeaf && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 bg-[#0B0F19]/80"
                        onClick={() => setSelectedLeaf(null)}
                    >
                        {achievements.filter(a => a.id === selectedLeaf).map(data => (
                            <motion.div
                                key={data.id}
                                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-dark-card border border-white/10 p-10 md:p-12 rounded-[2.5rem] max-w-lg w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-3xl"
                            >
                                <button onClick={() => setSelectedLeaf(null)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors bg-white/5 border border-white/10 p-2 rounded-full hover:bg-white/10 z-20">
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Decorative Background Glow derived from the badge color */}
                                <div className={`absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br ${data.color} rounded-full blur-[100px] opacity-30 pointer-events-none -z-10`} />

                                <div className={`w-20 h-20 bg-gradient-to-br ${data.color} rounded-tr-[30px] rounded-bl-[30px] rounded-tl-lg rounded-br-lg mb-8 flex items-center justify-center text-white ${data.shadow} relative z-10 border border-white/20`}>
                                    {data.icon}
                                </div>

                                <p className="text-white/50 font-mono tracking-widest text-sm uppercase mb-3 relative z-10">{data.year}</p>
                                <h3 className="text-4xl font-bold text-white mb-6 leading-tight tracking-tight relative z-10">{data.title}</h3>

                                <div className="bg-dark-bg/60 p-6 rounded-2xl border border-white/10 relative z-10 backdrop-blur-md">
                                    <p className="text-xl text-white/90 font-light leading-relaxed">
                                        {data.context}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>} />
    );
};
