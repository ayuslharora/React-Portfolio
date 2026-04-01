import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import NavBar from './NavBar';
import SmoothScroll from './SmoothScroll';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <SmoothScroll>
            <div className="w-full min-h-screen bg-slate-50 flex flex-col relative overflow-hidden text-black font-sans selection:bg-amber-400/30">
                <Helmet>
                    <title>404: Page Not Found | Ayush Arora</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>

                {/* Background mesh consistent with portfolio */}
                <div className="bg-mesh" />

                {/* Global NavBar */}
                <NavBar />

                {/* Bottom Left Trailing Wire (Absolute positioning) */}
                <motion.div 
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute bottom-[15%] left-0 w-[45vw] max-w-[500px] origin-left hidden lg:block z-0 pointer-events-none"
                >
                    <svg viewBox="0 0 600 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#1A1A1A] stroke-[2]">
                        {/* Wire line with an S-curve (Hollow outlined effect) */}
                        {/* Outer black boundary */}
                        <path d="M-10,80 L450,80 C480,80 480,45 510,45 L545,45" strokeWidth="5" stroke="#1A1A1A" strokeLinecap="square" />
                        {/* Inner white/bg color filler to create hollow tube */}
                        <path d="M-10,80 L450,80 C480,80 480,45 510,45 L545,45" strokeWidth="2" stroke="#F8FAFC" strokeLinecap="square" />
                        
                        {/* USB Plug Head */}
                        <g transform="translate(540, 30)">
                            {/* Main plug body */}
                            <path d="M0,0 L15,0 C20,0 25,5 25,15 C25,25 20,30 15,30 L0,30 Z" fill="white" strokeLinejoin="round" />
                            {/* Metal prong */}
                            <rect x="25" y="7" width="12" height="16" fill="transparent" strokeLinejoin="round" />
                            {/* Cutouts */}
                            <rect x="28" y="10" width="4" height="3" fill="#1A1A1A" stroke="none" />
                            <rect x="28" y="17" width="4" height="3" fill="#1A1A1A" stroke="none" />
                            
                            {/* Elegant Golden Spark emitting from plug */}
                            <g className="stroke-amber-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]">
                                <path d="M44,11 L40,16 L45,16 L42,22" fill="none" strokeWidth="2" strokeLinejoin="miter" strokeLinecap="round" />
                                <circle cx="48" cy="8" r="1.5" fill="#f59e0b" stroke="none" />
                            </g>
                        </g>
                    </svg>
                </motion.div>

                {/* Main Content Area */}
                <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-[6vw] flex items-center justify-center lg:justify-between relative z-10 flex-col lg:flex-row pb-20 pt-32 lg:pt-0 min-h-screen">
                    
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 relative lg:ml-16 xl:ml-24"
                    >
                        <h1 className="text-[clamp(5rem,12vw,12rem)] leading-[0.8] font-black tracking-tighter text-black">
                            404
                        </h1>
                        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mt-4 text-black">
                            PAGE NOT FOUND<span className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">.</span>
                        </h2>
                        
                        <p className="mt-6 text-zinc-500 text-sm md:text-[15px] font-medium tracking-wide">
                            The page you are looking for doesn't exist.
                        </p>

                        <button 
                            onClick={() => navigate(-1)}
                            className="group relative flex items-center gap-3 px-6 py-3.5 mt-8 bg-black text-white rounded-full font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl"
                        >
                            <div className="relative z-10 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                                <ArrowLeft className="w-3.5 h-3.5 text-amber-500" />
                            </div>
                            <span className="relative z-10 uppercase tracking-widest text-xs text-white">Go Back</span>
                            
                            {/* Hover sweep effect consistent with portfolio */}
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 text-amber-900 font-bold" />
                        </button>
                    </motion.div>

                    {/* The Provided Illustration SVG */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="w-full max-w-[420px] mt-16 lg:mt-0 relative hidden md:block"
                    >
                        <img 
                            src={`${import.meta.env.BASE_URL}Screenshot_2026-04-01_at_10.26.02_PM-removebg-preview.svg`}
                            alt="404 Dead Tablet" 
                            className="w-full h-auto drop-shadow-xl relative z-10"
                            style={{ filter: "brightness(0) saturate(100%)" }}
                        />
                    </motion.div>
                </main>
            </div>
        </SmoothScroll>
    );
};

export default NotFound;
