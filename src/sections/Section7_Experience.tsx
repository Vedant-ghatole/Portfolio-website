"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Briefcase, Bot, CalendarDays, Palette, Lightbulb } from 'lucide-react';

const experiences = [
    {
        category: "Software Engineering",
        role: "Fixverse Internship",
        company: "Fixverse India Pvt. Ltd.",
        date: "Sept 2025 \u2014 Mar 2026",
        work: ["Developed and managed company website for improved functionality and performance.", "Supported HR operations, including documentation and recruitment coordination."],
        icon: <Briefcase className="w-6 h-6" />,
        style: "from-neon-purple/20 to-neon-purple/5 border-neon-purple/30 group-hover:border-neon-purple",
        accent: "bg-neon-purple",
        textColor: "text-neon-purple"
    },
    {
        category: "Leadership",
        role: "Robotics Team Leader",
        company: "E-Yantra Robotics Club",
        date: "2024 \u2014 Present",
        work: ["Directing robotics initiatives and technical projects.", "Mentoring junior members in hardware and software integration."],
        icon: <Bot className="w-6 h-6" />,
        style: "from-neon-blue/20 to-neon-blue/5 border-neon-blue/30 group-hover:border-neon-blue",
        accent: "bg-neon-blue",
        textColor: "text-neon-blue"
    },
    {
        category: "Management",
        role: "Event Coordinator",
        company: "Technical & Cultural Events",
        date: "2024",
        work: ["Organized large-scale technical and cultural events.", "Managed logistics, scheduling, and participant coordinating."],
        icon: <CalendarDays className="w-6 h-6" />,
        style: "from-neon-cyan/20 to-neon-cyan/5 border-neon-cyan/30 group-hover:border-neon-cyan",
        accent: "bg-neon-cyan",
        textColor: "text-neon-cyan"
    },
    {
        category: "Creative",
        role: "Media & Design roles",
        company: "Zenith Forum & Mindroid",
        date: "2025 \u2014 Present",
        work: ["Spearheaded visual branding and media presence.", "Designed visually engaging layouts for department magazines."],
        icon: <Palette className="w-6 h-6" />,
        style: "from-neon-green/20 to-neon-green/5 border-neon-green/30 group-hover:border-neon-green",
        accent: "bg-neon-green",
        textColor: "text-neon-green"
    },
    {
        category: "Innovation",
        role: "E-Cell / IEDC",
        company: "Entrepreneurship Cell",
        date: "College Level",
        work: ["Participated in entrepreneurial workshops and pitches.", "Collaborated on startup ideation and business modeling."],
        icon: <Lightbulb className="w-6 h-6" />,
        style: "from-neon-purple/20 to-neon-blue/5 border-neon-purple/30 group-hover:border-neon-blue",
        accent: "bg-neon-purple",
        textColor: "text-neon-purple"
    }
];

export const Section7Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <SectionContainer id="experience" className="relative min-h-[160vh]" children={<div ref={containerRef} className="relative z-10 w-full pt-32 pb-48">

            <motion.div style={{ opacity }} className="text-center mb-24 relative">
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                    The <span className="font-light text-neon-blue glow-text">Structure.</span>
                </h2>
                <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mt-6">
                    Thick branches representing professional roles and leadership responsibilities.
                </p>
            </motion.div>

            <div className="relative w-full max-w-5xl mx-auto space-y-12 md:space-y-24">
                {experiences.map((exp, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, x: isEven ? -50 : 50, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? '' : 'md:flex-row-reverse'} group`}
                        >
                            {/* Visual Branch Connection to Center */}
                            <div className="hidden md:flex flex-1 justify-center relative h-full">
                                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${exp.accent} shadow-[0_0_15px_currentColor] group-hover:scale-150 transition-transform duration-500`} />
                            </div>

                            {/* Content Card */}
                            <div className={`flex-[2] w-full bg-gradient-to-br ${exp.style} bg-dark-card p-8 md:p-10 rounded-3xl border shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.7)] transition-all duration-500 overflow-hidden relative`}>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${exp.textColor} shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                            {exp.icon}
                                        </div>
                                        <span className="text-white/40 font-mono text-sm uppercase tracking-widest">{exp.date}</span>
                                    </div>

                                    <p className={`text-sm font-bold tracking-wide uppercase mb-2 ${exp.textColor}`}>{exp.category}</p>
                                    <h3 className="text-3xl font-bold text-white leading-tight mb-2 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">{exp.role}</h3>
                                    <p className="text-xl text-white/80 font-light mb-8">{exp.company}</p>

                                    <div className="space-y-3 bg-dark-bg/50 rounded-xl p-6 border border-white/5">
                                        {exp.work.map((task, i) => (
                                            <div key={i} className="flex gap-4">
                                                <span className={`w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 ${exp.accent} shadow-[0_0_8px_currentColor]`} />
                                                <p className="text-white/70 font-light text-base leading-relaxed group-hover:text-white/90 transition-colors">{task}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className={`absolute -bottom-20 ${isEven ? '-right-20' : '-left-20'} w-64 h-64 ${exp.accent} rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                            </div>
                        </motion.div>
                    )
                })}
            </div>

        </div>} />
    );
};
