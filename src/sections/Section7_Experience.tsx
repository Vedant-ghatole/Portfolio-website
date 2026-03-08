"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Briefcase, Users, LayoutTemplate, PenTool } from 'lucide-react';

const experiences = [
    {
        category: "Internship",
        role: "Website Development & HR Support",
        company: "Fixverse India Pvt. Ltd.",
        date: "Sept 2025 \u2014 Mar 2026",
        work: ["Developed and managed company website", "Supported HR documentation and recruitment tracking"],
        icon: <Briefcase className="w-6 h-6" />,
        style: "from-blue-900/40 to-indigo-900/40 border-indigo-500/30",
        accent: "bg-indigo-500"
    },
    {
        category: "Leadership",
        role: "Team Leader",
        company: "E-Yantra Robotics Club (IIT Bombay)",
        date: "College Level",
        work: ["Directed robotics initiatives and projects", "Coordinated team participation in competitions"],
        icon: <Users className="w-6 h-6" />,
        style: "from-emerald-900/40 to-teal-900/40 border-teal-500/30",
        accent: "bg-teal-500"
    },
    {
        category: "Leadership",
        role: "Core Member",
        company: "Zenith Forum Media Team",
        date: "College Level",
        work: ["Managed media presence and communications", "Organized technical and cultural events"],
        icon: <LayoutTemplate className="w-6 h-6" />,
        style: "from-fuchsia-900/40 to-purple-900/40 border-fuchsia-500/30",
        accent: "bg-fuchsia-500"
    },
    {
        category: "Design",
        role: "Designer",
        company: "Mindroid Digital Magazine",
        date: "College Level",
        work: ["Designed comprehensive magazine layouts", "Created visual content, logos, and illustrations"],
        icon: <PenTool className="w-6 h-6" />,
        style: "from-orange-900/40 to-red-900/40 border-orange-500/30",
        accent: "bg-orange-500"
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
                <h2 className="text-5xl md:text-6xl font-light text-wood-100 tracking-tight">
                    The <span className="font-normal text-wood-400">Weight</span> of Experience.
                </h2>
                <p className="text-xl text-wood-300/80 font-light max-w-2xl mx-auto mt-6">
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
                            className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
                        >
                            {/* Visual Branch Connection to Center */}
                            <div className="hidden md:flex flex-1 justify-center relative h-full">
                                <div className="w-full h-1 bg-gradient-to-r from-wood-800/10 via-wood-600/50 to-wood-800/10" />
                                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${exp.accent} shadow-[0_0_15px_currentColor]`} />
                            </div>

                            {/* Content Card */}
                            <div className={`flex-[2] w-full bg-gradient-to-br ${exp.style} p-8 md:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl group hover:-translate-y-2 transition-transform duration-500 overflow-hidden relative`}>

                                {/* Background noise texture */}
                                <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-4 rounded-2xl bg-[#0f1712]/50 border border-white/10 text-white shadow-xl`}>
                                            {exp.icon}
                                        </div>
                                        <span className="text-white/60 font-mono text-sm uppercase tracking-widest">{exp.date}</span>
                                    </div>

                                    <p className="text-white/70 text-sm font-medium tracking-wide uppercase mb-2">{exp.category}</p>
                                    <h3 className="text-3xl font-light text-white leading-tight mb-2 tracking-wide">{exp.role}</h3>
                                    <p className="text-xl text-white/90 font-medium mb-8">{exp.company}</p>

                                    <div className="space-y-3 bg-[#0f1712]/40 rounded-xl p-6 border border-white/5">
                                        {exp.work.map((task, i) => (
                                            <div key={i} className="flex gap-4">
                                                <span className={`w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 ${exp.accent}`} />
                                                <p className="text-white/80 text-base leading-relaxed">{task}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

        </div>} />
    );
};
