"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Mail, Github, Linkedin, TreePine, MapPin, Phone } from 'lucide-react';

export const Section10Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [150, 0]);

    return (
        <SectionContainer id="contact" className="relative min-h-screen py-0" children={<div ref={containerRef} className="relative z-10 w-full flex flex-col justify-end min-h-screen pb-24">

            {/* Cinematic Sunset Background Effect */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-t from-orange-600/40 via-rose-600/20 to-transparent blur-[120px] rounded-[100%]"
                />
                <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent shadow-[0_0_30px_#f97316]" />
            </div>

            <motion.div style={{ opacity, y }} className="bg-[#0f1712]/80 backdrop-blur-3xl border-t border-orange-900/40 rounded-t-[4rem] p-10 md:p-20 w-full max-w-7xl mx-auto shadow-[0_-30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden">

                {/* Subtle noise over the card */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                    <div className="space-y-10">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-orange-950/50 rounded-3xl border border-orange-800/50 shadow-inner">
                                <TreePine className="w-12 h-12 text-orange-500" />
                            </div>
                            <div>
                                <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight mb-2">Vedant Ghatole</h2>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nature-900/50 border border-nature-700/50 text-nature-300 font-mono text-xs tracking-widest uppercase">
                                    Computer Engineering Student
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-4">
                            <a href="mailto:vedantghatole80@gmail.com" className="flex items-center gap-6 text-orange-100/70 hover:text-white group transition-colors w-fit">
                                <div className="p-4 rounded-full bg-[#1a120e] border border-orange-900/50 group-hover:bg-orange-600 group-hover:border-orange-500 transition-all shadow-lg">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="text-xl font-light tracking-wide">vedantghatole80@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-6 text-orange-100/70 w-fit group">
                                <div className="p-4 rounded-full bg-[#1a120e] border border-orange-900/50 shadow-lg group-hover:border-orange-700 transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <span className="text-xl font-light tracking-wide">+91 7057422325</span>
                            </div>
                            <div className="flex items-center gap-6 text-orange-100/70 w-fit group">
                                <div className="p-4 rounded-full bg-[#1a120e] border border-orange-900/50 shadow-lg group-hover:border-orange-700 transition-colors">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <span className="text-xl font-light tracking-wide text-balance">Umred, Nagpur, Maharashtra</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:items-end justify-center space-y-10">
                        <div className="text-left lg:text-right">
                            <h3 className="text-4xl font-light text-white mb-4 tracking-tight">Connect deeply.</h3>
                            <p className="text-orange-200/60 max-w-sm font-light text-lg leading-relaxed">Let's grow together and build something truly meaningful.</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a href="https://github.com/Vedant-ghatole" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-5 bg-[#1a120e] border border-orange-900/50 rounded-2xl hover:bg-white hover:border-white hover:text-black transition-all duration-300 shadow-xl group">
                                <Github className="w-7 h-7" />
                                <span className="font-medium tracking-wide text-lg">GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/vedant-ghatole-130405" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-5 bg-[#1a120e] border border-orange-900/50 rounded-2xl hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:text-white transition-all duration-300 shadow-xl text-[#0a66c2]/80 group">
                                <Linkedin className="w-7 h-7" />
                                <span className="font-medium tracking-wide text-lg">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-900/50 to-transparent mt-24 mb-10" />

                <div className="text-center text-sm md:text-base text-orange-500/50 uppercase tracking-[0.3em] font-medium">
                    The story never truly ends.
                </div>
            </motion.div>

        </div>} />
    );
};
