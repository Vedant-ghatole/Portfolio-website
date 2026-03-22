"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Mail, Github, Linkedin, MapPin, Phone, Instagram, Terminal } from 'lucide-react';

export const Section10Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
    
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("vedantghatole80@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <SectionContainer id="contact" className="relative min-h-screen py-0" children={<div ref={containerRef} className="relative z-10 w-full flex flex-col justify-end min-h-screen pb-24">

            {/* Futuristic Deep Neon Glow Background Effect */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden flex justify-center items-end">
                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-0 w-[150vw] h-[80vh] bg-gradient-to-t from-neon-purple/20 via-neon-blue/5 to-transparent blur-[120px] rounded-[100%]"
                />
                <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent shadow-[0_0_30px_rgba(0,195,255,0.8)]" />
            </div>

            <motion.div style={{ opacity, y }} className="bg-dark-card/90 backdrop-blur-3xl border-t border-neon-purple/30 rounded-t-[4rem] p-12 md:p-24 w-full mx-auto shadow-[0_-30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col items-center text-center">

                {/* Subtle digital grid over the card */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

                <div className="relative z-10 max-w-3xl flex flex-col items-center">
                    
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-dark-bg/80 border border-neon-blue/30 text-neon-blue font-mono text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(0,195,255,0.2)] mb-8">
                        System Initialized
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                        Initiate <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]">Connection.</span>
                    </h2>
                    
                    <p className="text-white/60 text-xl font-light leading-relaxed mb-12 max-w-xl text-balance">
                        The journey doesn't end here. Let's collaborate and build the next generation of digital experiences.
                    </p>

                    {/* Email Copy Interaction */}
                    <button 
                        onClick={handleCopyEmail}
                        className="group relative flex items-center justify-between gap-6 bg-dark-bg/80 border border-white/10 hover:border-neon-purple/50 rounded-2xl p-4 md:px-6 w-full max-w-md transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(188,19,254,0.3)] mb-12 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-purple/10 to-neon-purple/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-neon-purple/10 rounded-xl text-neon-purple">
                                <Mail className="w-6 h-6" />
                            </div>
                            <span className="text-lg font-mono text-white/90 group-hover:text-white transition-colors tracking-wide">
                                vedantghatole80@gmail.com
                            </span>
                        </div>
                        
                        <div className="p-2 rounded-lg bg-white/5 text-white/50 group-hover:text-neon-cyan group-hover:bg-neon-cyan/10 transition-colors">
                            {copied ? <span className="text-xs font-bold uppercase tracking-wider text-neon-green">Copied</span> : <Terminal className="w-5 h-5" />}
                        </div>
                    </button>

                    {/* Social Links */}
                    <div className="flex gap-6 items-center justify-center">
                        <a href="https://github.com/Vedant-ghatole" target="_blank" rel="noreferrer" className="flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300">
                            <Github className="w-7 h-7" />
                        </a>
                        <a href="https://linkedin.com/in/vedant-ghatole-130405" target="_blank" rel="noreferrer" className="flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 rounded-full hover:bg-[#0A66C2] hover:border-[#0A66C2] text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(10,102,194,0.5)] transition-all duration-300">
                            <Linkedin className="w-7 h-7" />
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

                <div className="text-center text-sm md:text-base text-white/30 uppercase tracking-[0.3em] font-medium flex items-center gap-4">
                    <span className="w-12 h-px bg-white/10" />
                    End of Transmission
                    <span className="w-12 h-px bg-white/10" />
                </div>
            </motion.div>

        </div>} />
    );
};
