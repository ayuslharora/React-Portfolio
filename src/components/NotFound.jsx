import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, Linkedin } from 'lucide-react';
import NavBar from './NavBar';
import SmoothScroll from './SmoothScroll';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <SmoothScroll>
            <div className="w-full min-h-dvh bg-slate-50 relative overflow-hidden flex flex-col selection:bg-amber-400/30 font-sans">
                <Helmet>
                    <title>404: Page Not Found | Ayush Arora</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>

                {/* Background mesh consistent with portfolio */}
                <div className="bg-mesh" />

                {/* Global NavBar */}
                <NavBar />

                {/* Intentionally left empty where cable used to be */}

                {/* Main Content Area */}
                <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-[6vw] flex items-center justify-center lg:justify-between relative z-10 flex-col lg:flex-row pb-20 lg:pb-28 pt-24 lg:pt-0 min-h-dvh">
                    
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 relative lg:ml-16 xl:ml-24"
                    >
                        <h1 className="text-[clamp(6rem,12vw,12rem)] leading-[0.8] font-black tracking-tighter text-black">
                            404
                        </h1>
                        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mt-3 lg:mt-4 text-black lowercase lg:uppercase">
                            PAGE NOT FOUND<span className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">.</span>
                        </h2>
                        
                        <p className="mt-3 lg:mt-6 text-zinc-500 text-sm md:text-[15px] font-medium tracking-wide">
                            The page you are looking for doesn't exist.
                        </p>

                        <button 
                            onClick={() => navigate(-1)}
                            className="group relative flex items-center gap-3 px-6 py-3.5 mt-6 lg:mt-8 bg-black text-white rounded-full font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl"
                        >
                            <div className="relative z-10 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                                <ArrowLeft className="w-3.5 h-3.5 text-amber-500" />
                            </div>
                            <span className="relative z-10 tracking-widest text-xs lg:text-sm text-white font-bold">GO BACK</span>
                            
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 text-amber-900 font-bold" />
                        </button>
                    </motion.div>

                    {/* The Provided Illustration SVG */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="w-full max-w-[240px] md:max-w-[320px] lg:max-w-[420px] mt-8 lg:mt-0 relative block"
                    >
                        <img 
                            src={`${import.meta.env.BASE_URL}Screenshot_2026-04-01_at_10.26.02_PM-removebg-preview.svg`}
                            alt="404 Dead Tablet" 
                            className="w-full h-auto drop-shadow-xl relative z-10 mx-auto"
                            style={{ filter: "brightness(0) saturate(100%)" }}
                        />
                    </motion.div>
                </main>

                {/* Social Logos Fixed Bottom Footer */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute bottom-6 w-full flex flex-col items-center gap-4 z-20"
                >
                    <div className="flex gap-6 items-center text-zinc-500">
                        <a href="https://www.linkedin.com/in/ayuslh/" target="_blank" rel="noreferrer" className="hover:text-black hover:scale-110 transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://github.com/ayuslharora" target="_blank" rel="noreferrer" className="hover:text-black hover:scale-110 transition-all duration-300">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://leetcode.com/u/Ayuslh/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-300">
                            <img src={`${import.meta.env.BASE_URL}Leetcode-svg.png`} alt="LeetCode" className="w-6 h-6 object-contain grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </div>
                    <p className="text-xs font-semibold text-zinc-400 tracking-[0.2em] uppercase">
                        © Ayush Arora 2026
                    </p>
                </motion.div>
            </div>
        </SmoothScroll>
    );
};

export default NotFound;
