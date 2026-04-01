import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projectsData';
import Footer from './Footer';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0); // Ensure page loads at the top
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-black">
                <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
                <Link to="/" className="text-amber-500 font-bold hover:underline">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-hidden selection:bg-amber-400/30">
            <Helmet>
                <title>{`${project.title} - Ayush Arora | AI Engineer & Full Stack Developer`}</title>
                <meta name="description" content={project.fullDescription ? project.fullDescription.substring(0, 160) : `Detailed view of ${project.title}`} />
                <meta property="og:title" content={`${project.title} - Ayush Arora Projects`} />
                <meta property="og:description" content={project.fullDescription ? project.fullDescription.substring(0, 160) : `Detailed view of ${project.title}`} />
            </Helmet>
            
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-amber-500/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-yellow-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Simple Top Nav */}
            <header className="w-full px-6 md:px-[6vw] py-8 flex items-center justify-between relative z-20">
                <button 
                    onClick={() => navigate('/')} 
                    className="group flex items-center gap-2 text-zinc-500 hover:text-black transition-colors font-medium text-sm tracking-wide"
                >
                    <ArrowLeft className="w-4 h-4 text-amber-500 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </button>
            </header>

            <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-[6vw] pb-24 relative z-10 flex flex-col">
                {/* Hero Showcase */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full relative rounded-3xl overflow-hidden glass-card aspect-video md:aspect-[21/9] mb-12 shadow-2xl"
                >
                    <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    {/* Content Left */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:col-span-8 flex flex-col"
                    >
                        <div className="text-sm font-bold tracking-[0.3em] text-amber-500 mb-4 uppercase">
                            Project Details
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-black leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
                            {project.fullDescription}
                        </p>
                    </motion.div>

                    {/* Meta Right */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:col-span-4 flex flex-col gap-8"
                    >
                        <div className="glass-card p-8 rounded-3xl flex flex-col gap-6">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-3">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/50 border border-black/5 rounded-full text-xs font-medium text-zinc-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {(project.liveLink || project.githubLink) && (
                                <>
                                    <hr className="border-black/5" />

                                    <div>
                                        <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-3">Links</h3>
                                        <div className="flex flex-col gap-3">
                                            {project.liveLink && (
                                                <a 
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 bg-black text-white rounded-xl font-bold overflow-hidden transition-transform hover:scale-[1.02] active:scale-95 shadow-xl"
                                                >
                                                    <span className="relative z-10 group-hover:text-black transition-colors">Live Preview</span>
                                                    <ExternalLink className="w-4 h-4 relative z-10 text-amber-500 group-hover:text-black transition-colors" />
                                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                                                </a>
                                            )}
                                            {project.githubLink && (
                                                <a 
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 bg-white border border-black/10 text-black hover:bg-black/5 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-sm"
                                                >
                                                    <span className="relative z-10">View Source File</span>
                                                    <Github className="w-4 h-4 relative z-10" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
