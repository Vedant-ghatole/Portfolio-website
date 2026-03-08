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
        // Specifically fetch the required repos matching the prompt
        // Using simple mock/fallback data if GitHub API rate limited to ensure UI never breaks.
        fetch('https://api.github.com/users/Vedant-ghatole/repos?sort=updated&per_page=15')
            .then(res => {
                if (!res.ok) throw new Error('API Rate Limited');
                return res.json();
            })
            .then((data: Repo[]) => {
                // Fallback filtering to guarantee we show the requested projects
                const requestedNames = [
                    'BreathEase', 'TasksPro-student_tasks_manager', 'fixverse-builder',
                    'fixverse-v2', 'fixverse-admin-hub', 'AI-ML-WORKSHOP',
                    'Student-tasks-manager-v1', 'college_SVPCET', 'CodeCraft-tgp', 'CodeCraft-kdk'
                ];
                const filtered = data.filter(r => requestedNames.includes(r.name) || r.name.toLowerCase().includes('portfolio'));
                setRepos(filtered.length > 0 ? filtered : data.slice(0, 10)); // Top 10 if specific names fail
                setLoading(false);
            })
            .catch(() => {
                // Fallback Data if API fails
                setRepos([
                    { id: 1, name: 'BreathEase', description: 'Universal health and wellness platform.', language: 'Next.js', html_url: 'https://github.com/Vedant-ghatole/BreathEase' },
                    { id: 2, name: 'TasksPro-student_tasks_manager', description: 'Advanced task management system.', language: 'React', html_url: '#' },
                    { id: 3, name: 'college_SVPCET', description: 'Modern UI redesign for SVPCET.', language: 'Next.js', html_url: '#' },
                    { id: 4, name: 'AI-ML-WORKSHOP', description: 'Hands-on AI and Machine Learning resources.', language: 'Python', html_url: '#' },
                    { id: 5, name: 'CodeCraft-tgp', description: 'Development challenge projects.', language: 'TypeScript', html_url: '#' },
                ]);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <SectionContainer id="projects" className="relative min-h-[150vh] pb-32" children={<div ref={containerRef} className="relative z-10 w-full pt-32">

            <motion.div style={{ opacity }} className="text-center mb-32 relative">
                <h2 className="text-5xl md:text-6xl font-light text-nature-100 tracking-tight flex items-center justify-center gap-6">
                    <Github className="w-12 h-12 text-nature-400 opacity-50" />
                    The <span className="font-normal text-nature-400">Living</span> Branches.
                </h2>
                <p className="text-xl text-nature-300/80 font-light max-w-2xl mx-auto mt-6">
                    Visualizing active GitHub repositories as unique branches growing directly from the trunk.
                </p>
            </motion.div>

            {loading ? (
                <div className="flex justify-center items-center h-[400px]">
                    <div className="w-12 h-12 border-4 border-nature-600 border-t-nature-400 rounded-full animate-spin" />
                </div>
            ) : (
                <div className="relative w-full max-w-5xl mx-auto min-h-[600px] flex items-center justify-center">
                    {error && <div className="absolute top-0 text-amber-500/50 text-sm flex items-center gap-2"><AlertCircle className="w-4 h-4" /> Displaying fallback data</div>}

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 relative z-20 w-full px-4">
                        {repos.map((repo, idx) => (
                            <motion.div
                                key={repo.id}
                                initial={{ scale: 0, opacity: 0, rotate: -10 }}
                                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                                onMouseEnter={(e) => {
                                    const target = e.currentTarget;
                                    target.style.transform = `scale(1.05) rotate(${Math.random() * 10 - 5}deg)`;
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.currentTarget;
                                    target.style.transform = `scale(1) rotate(0deg)`;
                                }}
                                onClick={() => setSelectedLeaf(repo)}
                                className="group cursor-pointer flex flex-col items-center transition-transform duration-500 will-change-transform"
                            >
                                {/* Premium Leaf / Project Shape */}
                                <div className="w-full aspect-square max-w-[200px] bg-gradient-to-br from-[#1a2e24] to-[#0f1712] rounded-[40px] rounded-tl-sm rounded-br-sm shadow-[0_10px_30px_rgba(70,139,115,0.15)] flex flex-col items-center justify-center border border-nature-800/50 group-hover:border-nature-500/50 overflow-hidden relative p-6 text-center">

                                    <div className="absolute inset-0 bg-nature-500/0 group-hover:bg-nature-500/5 transition-colors duration-500" />

                                    <FolderGit2 className="w-8 h-8 text-nature-500/50 mb-4 group-hover:text-nature-400 transition-colors" />
                                    <h4 className="text-white font-medium text-sm md:text-base leading-snug drop-shadow-md z-10 w-full truncate mb-2">{repo.name}</h4>
                                    <p className="text-nature-400/80 text-xs font-mono">{repo.language || 'Codebase'}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Interactive Project Detail Modal */}
            <AnimatePresence>
                {selectedLeaf && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-[#0f1712]/80"
                        onClick={() => setSelectedLeaf(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#1a2e24] border border-nature-600/30 p-10 rounded-[2rem] max-w-xl w-full shadow-2xl relative overflow-hidden"
                        >
                            <button onClick={() => setSelectedLeaf(null)} className="absolute top-6 right-6 text-nature-500 hover:text-white transition-colors bg-black/20 p-2 rounded-full">
                                <X className="w-5 h-5" />
                            </button>

                            <FolderGit2 className="w-12 h-12 text-nature-400 mb-6" />
                            <h3 className="text-3xl font-light text-white mb-4 leading-tight">{selectedLeaf.name}</h3>

                            <div className="bg-[#0f1712] p-5 rounded-2xl border border-nature-800/50 mb-8 min-h-[100px]">
                                <p className="text-lg text-nature-200/90 font-light leading-relaxed">
                                    {selectedLeaf.description || 'A codebase repository exploring software architecture and specific problem domains.'}
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-nature-500 shadow-[0_0_10px_#468b73]" />
                                    <span className="text-nature-300 font-mono text-sm uppercase tracking-wide">{selectedLeaf.language || 'Multiple'}</span>
                                </div>

                                <a
                                    href={selectedLeaf.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-6 py-3 bg-nature-700/50 hover:bg-nature-600 text-white rounded-xl border border-nature-500/30 transition-all font-medium flex items-center gap-2"
                                >
                                    View Repository
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>} />
    );
};
