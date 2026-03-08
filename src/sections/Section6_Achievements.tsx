"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { X, Trophy, Medal, Star, Target, Lightbulb, Presentation } from 'lucide-react';

const achievements = [
    { id: 1, title: "1st Rank", context: "State-Level Robotic Competition", year: "2024", icon: <Trophy className="w-8 h-8" />, color: "from-amber-400 to-orange-500" },
    { id: 2, title: "2nd Rank", context: "National Science Exhibition", year: "2023", icon: <Medal className="w-8 h-8" />, color: "from-slate-300 to-slate-500" },
    { id: 3, title: "10+ Hackathons", context: "Consistent innovation & participation", year: "Ongoing", icon: <Target className="w-8 h-8" />, color: "from-nature-400 to-nature-600" },
    { id: 4, title: "Smart India Hackathon", context: "Participant & Innovator", year: "2023", icon: <Star className="w-8 h-8" />, color: "from-blue-400 to-indigo-500" },
    { id: 5, title: "7-Day Venture", context: "Profitable business operation", year: "2024", icon: <Lightbulb className="w-8 h-8" />, color: "from-yellow-400 to-amber-600" },
    { id: 6, title: "Event Organizer", context: "Farewell event planning & execution", year: "2024", icon: <Presentation className="w-8 h-8" />, color: "from-purple-400 to-fuchsia-600" },
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
                <h2 className="text-5xl md:text-6xl font-light text-nature-100 tracking-tight">
                    The <span className="font-normal text-amber-500/80">Leaves</span> of Triumph.
                </h2>
                <p className="text-xl text-nature-300/80 font-light max-w-2xl mx-auto mt-6">
                    Milestones achieved along the journey, blooming like vibrant leaves catching the sunlight.
                </p>
            </motion.div>

            <div className="relative w-full max-w-6xl mx-auto min-h-[500px]">

                {/* Abstract Tree Crown Glow */}
                <div className="absolute inset-0 bg-nature-500/5 rounded-full blur-[100px] -z-10" />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 relative z-20 w-full px-4">
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
                            {/* Clickable Leaf Hero shape */}
                            <div className={`w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br ${achievement.color} rounded-tr-[50px] rounded-bl-[50px] rounded-tl-xl rounded-br-xl shadow-2xl flex flex-col items-center justify-center group-hover:scale-110 group-hover:-translate-y-4 group-hover:rotate-3 transition-all duration-500 border border-white/20 overflow-hidden relative`}>
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-[2px]" />
                                <div className="text-white drop-shadow-lg mb-2 relative z-10 transform group-hover:scale-110 transition-transform">
                                    {achievement.icon}
                                </div>
                                <span className="text-white font-semibold text-center px-4 leading-tight drop-shadow-md z-10 text-sm md:text-base">{achievement.title}</span>
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
                        animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-[#0f1712]/60"
                        onClick={() => setSelectedLeaf(null)}
                    >
                        {achievements.filter(a => a.id === selectedLeaf).map(data => (
                            <motion.div
                                key={data.id}
                                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#1a2e24]/90 border border-nature-600/40 p-12 rounded-[2.5rem] max-w-lg w-full shadow-2xl relative overflow-hidden backdrop-blur-3xl"
                            >
                                <button onClick={() => setSelectedLeaf(null)} className="absolute top-8 right-8 text-nature-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Decorative Icon BG */}
                                <div className={`absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-br ${data.color} rounded-full blur-[80px] opacity-20 -z-10`} />

                                <div className={`w-20 h-20 bg-gradient-to-br ${data.color} rounded-tr-[30px] rounded-bl-[30px] rounded-tl-lg rounded-br-lg mb-8 flex items-center justify-center text-white shadow-xl`}>
                                    {data.icon}
                                </div>

                                <p className="text-nature-400 font-mono tracking-widest text-sm uppercase mb-3">{data.year}</p>
                                <h3 className="text-4xl font-light text-white mb-6 leading-tight tracking-tight">{data.title}</h3>

                                <div className="bg-[#0f1712]/50 p-6 rounded-2xl border border-nature-800/50">
                                    <p className="text-xl text-nature-100 font-light leading-relaxed">
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
