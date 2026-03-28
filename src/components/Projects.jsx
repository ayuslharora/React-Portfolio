import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 200, damping: 20 }
    }
};

const Projects = () => {
    return (
        <section
            id="Projects"
            className="w-full py-16 relative z-10"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw]">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 md:mb-16"
                >
                    <h2 className="text-sm font-bold tracking-[0.3em] text-amber-500 mb-4 uppercase">Selected Work</h2>
                    <h3 className="text-[clamp(2rem,4.5vw,4rem)] font-black tracking-tight leading-none text-black pb-2">
                        FEATURED <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-400">PROJECTS</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <Link to={`/project/${project.id}`} className="block h-full outline-none">
                                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden bg-white/50" style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10 pointer-events-none" />
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                                        whileHover={{ scale: 1.05, opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    {/* Hover overlay data */}
                                    <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/10 backdrop-blur-md border border-black/10 text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-black">
                                        P0{project.id}
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-5 flex flex-col flex-grow relative bg-gradient-to-b from-transparent to-white/60">
                                    <h4 className="text-base md:text-lg font-bold mb-2 tracking-tight group-hover:text-amber-600 text-black transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    <p className="text-zinc-600 font-light leading-relaxed text-sm md:text-base">
                                        {project.description}
                                    </p>
                                    
                                    <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-semibold text-zinc-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                                        View Detail
                                        <motion.span 
                                            className="inline-block w-8 h-[1px] bg-amber-500"
                                            initial={{ scaleX: 0, originX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            animate={{ scaleX: 1 }}
                                        />
                                    </div>
                                </div>
                            </div>
                            </Link>
                            
                            {/* Hover Glow Behind Card */}
                            <div className="absolute inset-0 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-full scale-90" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
