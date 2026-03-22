"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Github, FolderGit2, X, AlertCircle } from 'lucide-react';

interface Repo {
    id: number;
    name: string;
    description: string;
    language: string;
    html_url: string;
}

export const Section5GithubBranches = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedLeaf, setSelectedLeaf] = useState<Repo | null>(null);

    useEffect(() => {
        fetch('https://api.github.com/users/Vedant-ghatole/repos?sort=updated&per_page=20')
            .then(res => {
                if (!res.ok) throw new Error('API Rate Limited');
                return res.json();
            })
            .then((data: Repo[]) => {
                const requestedNames = [
                    'Portfolio', 'BreathEase', 'TasksPro', 'fixverse-builder',
                    'CodeCraft', 'AI-ML-WORKSHOP', 'college_SVPCET'
                ];
                const filtered = data.filter(r => requestedNames.some(name => r.name.toLowerCase().includes(name.toLowerCase())));
                setRepos(filtered.length > 0 ? filtered : data.slice(0, 10)); 
                setLoading(false);
            })
            .catch(() => {
                // Precise Fallback Data matching the prompt
                setRepos([
                    { id: 1, name: 'Portfolio Website', description: 'Cinematic Seed to Tree animated portfolio.', language: 'Next.js, TypeScript', html_url: 'https://github.com/Vedant-ghatole' },
                    { id: 2, name: 'BreathEase', description: 'Universal health and wellness platform.', language: 'JavaScript', html_url: 'https://github.com/Vedant-ghatole' },
                    { id: 3, name: 'TasksPro', description: 'Advanced task management system.', language: 'React', html_url: 'https://github.com/Vedant-ghatole' },
                    { id: 4, name: 'Fixverse Builder', description: 'Custom builder platform.', language: 'TypeScript', html_url: 'https://github.com/Vedant-ghatole' },
                    { id: 5, name: 'CodeCraft', description: 'Interactive development challenge projects.', language: 'JavaScript', html_url: 'https://github.com/Vedant-ghatole' },
                    { id: 6, name: 'AI/ML Workshop', description: 'Hands-on AI and Machine Learning resources.', language: 'Python', html_url: 'https://github.com/Vedant-ghatole' },
                    { id: 7, name: 'College Platform', description: 'Modern UI redesign for SVPCET.', language: 'Next.js', html_url: 'https://github.com/Vedant-ghatole' },
                ]);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <SectionContainer id="projects" className="relative min-h-[150vh] pb-32" children={<div ref={containerRef} className="relative z-10 w-full pt-32">

            <motion.div style={{ opacity }} className="text-center mb-32 relative">
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-6">
                    <Github className="w-12 h-12 text-neon-purple opacity-80 drop-shadow-[0_0_15px_rgba(157,78,221,0.5)]" />
                    Digital <span className="font-light text-neon-purple glow-text">Branches.</span>
                </h2>
                <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mt-6">
                    Visualizing technical projects and repositories building upon the core foundation.
                </p>
            </motion.div>

            {loading ? (
                <div className="flex justify-center items-center h-[400px]">
                    <div className="w-12 h-12 border-4 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin shadow-[0_0_15px_rgba(67,97,238,0.5)]" />
                </div>
            ) : (
                <div className="relative w-full max-w-6xl mx-auto min-h-[600px] flex flex-col items-center">
                    {error && <div className="absolute -top-10 text-neon-cyan/80 text-sm flex items-center gap-2 bg-neon-cyan/10 px-4 py-2 rounded-full border border-neon-cyan/20 backdrop-blur-md"><AlertCircle className="w-4 h-4" /> Showing fallback project data</div>}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20 w-full px-4">
                        {repos.map((repo, idx) => {
                            const colorsMap = [
                                { border: "border-neon-purple/30 group-hover:border-neon-purple", bg: "bg-neon-purple/10", text: "text-neon-purple", glow: "glow-shadow", shadow: "hover:shadow-[0_10px_30px_rgba(157,78,221,0.2)]" },
                                { border: "border-neon-blue/30 group-hover:border-neon-blue", bg: "bg-neon-blue/10", text: "text-neon-blue", glow: "glow-shadow", shadow: "hover:shadow-[0_10px_30px_rgba(67,97,238,0.2)]" },
                                { border: "border-neon-cyan/30 group-hover:border-neon-cyan", bg: "bg-neon-cyan/10", text: "text-neon-cyan", glow: "glow-shadow", shadow: "hover:shadow-[0_10px_30px_rgba(76,201,240,0.2)]" },
                                { border: "border-neon-green/30 group-hover:border-neon-green", bg: "bg-neon-green/10", text: "text-neon-green", glow: "glow-shadow", shadow: "hover:shadow-[0_10px_30px_rgba(6,214,160,0.2)]" }
                            ];
                            const theme = colorsMap[idx % colorsMap.length];
                            
                            return (
                                <motion.div
                                    key={repo.id}
                                    initial={{ scale: 0.95, opacity: 0, y: 30 }}
                                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: (idx % 3) * 0.15, duration: 0.6 }}
                                    className={`group relative bg-dark-card backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 ${theme.shadow} flex flex-col h-full overflow-hidden`}
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10 ${theme.bg}`} />
                                    
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-4 rounded-2xl ${theme.bg} ${theme.text} shadow-inner`}>
                                            <FolderGit2 className="w-6 h-6" />
                                        </div>
                                    </div>
                                    
                                    <h4 className="text-2xl font-bold text-white mb-3 line-clamp-2">{repo.name}</h4>
                                    
                                    <p className="text-white/60 text-base font-light leading-relaxed flex-grow line-clamp-3 mb-6">
                                        {repo.description || 'Custom technical project.'}
                                    </p>
                                    
                                    <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className={`text-xs font-mono px-3 py-1.5 ${theme.bg} ${theme.text} rounded-full border border-white/5`}>
                                                {repo.language || 'Code'}
                                            </span>
                                        </div>
                                        
                                        {/* Hover Actions */}
                                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            <a href={repo.html_url} target="_blank" rel="noreferrer" className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl ${theme.bg} ${theme.text} hover:brightness-125 transition-all text-sm font-semibold`}>
                                                <Github className="w-4 h-4" /> Code
                                            </a>
                                            <a href="#" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 text-white/80 hover:bg-white/10 transition-all text-sm font-semibold">
                                                Live
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>} />
    );
};
