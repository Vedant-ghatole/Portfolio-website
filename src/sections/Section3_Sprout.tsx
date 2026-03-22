"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Users, Trophy, Rocket } from 'lucide-react';

const involvements = [
    { 
        id: 1, 
        role: "NSS Volunteer", 
        description: "Active participation in social service and community development initiatives.", 
        icon: <Users className="w-8 h-8 text-neon-purple" />, 
        color: "group-hover:shadow-[0_0_30px_rgba(157,78,221,0.3)] border-neon-purple/30 group-hover:border-neon-purple" 
    },
    { 
        id: 2, 
        role: "TechQuest Coordinator", 
        description: "Organized technical events with a prize pool of ₹30,000, managing operations and participants.", 
        icon: <Trophy className="w-8 h-8 text-neon-blue" />, 
        color: "group-hover:shadow-[0_0_30px_rgba(67,97,238,0.3)] border-neon-blue/30 group-hover:border-neon-blue" 
    },
    { 
        id: 3, 
        role: "Swalambh Hackathon Co-Coordinator", 
        description: "Coordinated a massive scale hackathon with a massive prize pool of ₹1,00,000.", 
        icon: <Rocket className="w-8 h-8 text-neon-green" />, 
        color: "group-hover:shadow-[0_0_30px_rgba(6,214,160,0.3)] border-neon-green/30 group-hover:border-neon-green" 
    }
];

export const Section3Sprout = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <SectionContainer id="sprout" className="relative pb-32" children={<div ref={containerRef} className="flex flex-col relative z-10 w-full pt-32 space-y-20">

            {/* Narrative Text Content */}
            <motion.div style={{ opacity, y }} className="flex flex-col items-center text-center space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                    Taking <span className="font-light text-neon-cyan glow-text">Action.</span>
                </h2>
                <p className="text-xl text-white/70 font-light max-w-2xl leading-relaxed">
                    A sprout emerging with ambition. Getting involved, leading teams, and making a real impact in the community.
                </p>
            </motion.div>

            {/* Involvement Cards Grid */}
            <motion.div style={{ opacity }} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 px-4 sm:px-0 max-w-6xl mx-auto w-full">
                {/* Background glow for the section */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-neon-blue/10 rounded-full blur-[120px] -z-10" />

                {involvements.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: idx * 0.2, duration: 0.8, type: 'spring' }}
                        className={`group relative bg-dark-card backdrop-blur-xl border ${item.color} rounded-3xl p-8 transition-all duration-500 hover:-translate-y-4`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
                        
                        <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block">
                            {item.icon}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                            {item.role}
                        </h3>
                        
                        <p className="text-white/60 leading-relaxed font-light">
                            {item.description}
                        </p>
                        
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 group-hover:bg-white/10 rounded-full blur-[50px] transition-colors -z-10" />
                    </motion.div>
                ))}
            </motion.div>

        </div>} />
    );
};
