import React from 'react';
import { motion } from 'framer-motion';
import HeroPortrait from './HeroPortrait';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 2.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    }
};

const textRevealVariants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
};

const Hero = () => {
    return (
        <section
            id="HOME"
            className="w-full min-h-screen relative flex flex-col justify-center overflow-hidden px-6 md:px-[6vw] z-10 pt-16 md:pt-32"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
                {/* Text Content (Col 1-7) */}
                <div className="lg:col-span-7 flex flex-col items-start pt-[6vh] lg:pt-0 order-2 lg:order-1">
                    <motion.div className="overflow-hidden mb-3">
                        <motion.div
                            variants={textRevealVariants}
                            className="inline-block py-1 px-3 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 font-medium text-xs md:text-sm tracking-wide"
                        >
                            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-2 animate-pulse" />
                            AVAILABLE FOR WORK
                        </motion.div>
                    </motion.div>

                    <h1 className="text-[clamp(2.8rem,6vw,6rem)] font-black leading-[0.9] tracking-tighter mix-blend-difference mb-3 text-black">
                        <div className="overflow-hidden pb-2">
                            <motion.div variants={textRevealVariants}>AYUSH</motion.div>
                        </div>
                        <div className="overflow-hidden pb-2 text-gradient-gold">
                            <motion.div variants={textRevealVariants}>ARORA</motion.div>
                        </div>
                    </h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-[clamp(1.1rem,2vw,1.8rem)] font-bold text-zinc-800 mb-5 tracking-tight"
                    >
                        AI Engineer <span className="text-zinc-500 font-light italic">based in India</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-base text-zinc-600 max-w-xl leading-relaxed mb-7 font-light"
                    >
                        Fascinated by the incredible potential of artificial intelligence and machine learning. My passion lies in exploring how AI can be applied to solve complex problems and push the boundaries of what's possible.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-6"
                    >
                        <a
                            href="#Projects"
                            className="group relative flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10">See my work</span>
                            <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                            {/* Hover sweep effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-amber-400 to-amber-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                        </a>

                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/ayuslh/"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-zinc-600 hover:text-black hover:border-black/30 hover:bg-black/5 transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5" />
                                {/* Tooltip */}
                                <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs font-medium px-2.5 py-1.5 rounded-md pointer-events-none whitespace-nowrap shadow-lg">
                                    LinkedIn Profile
                                </span>
                            </a>
                            <a
                                href="https://github.com/ayuslharora"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-zinc-600 hover:text-black hover:border-black/30 hover:bg-black/5 transition-all duration-300"
                            >
                                <Github className="w-5 h-5" />
                                <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs font-medium px-2.5 py-1.5 rounded-md pointer-events-none whitespace-nowrap shadow-lg">
                                    GitHub Projects
                                </span>
                            </a>
                            <a
                                href="https://leetcode.com/u/Ayuslh/"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative w-11 h-11 rounded-full border border-black/10 flex items-center justify-center hover:border-black/30 hover:bg-black/5 transition-all duration-300"
                            >
                                <img src={`${import.meta.env.BASE_URL}Leetcode-svg.png`} alt="LeetCode" className="w-6 h-6 object-contain grayscale opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs font-medium px-2.5 py-1.5 rounded-md pointer-events-none whitespace-nowrap shadow-lg">
                                    LeetCode Stats
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Portrait Content (Col 8-12) */}
                <motion.div
                    variants={itemVariants}
                    className="lg:col-span-5 flex justify-center lg:justify-end pt-24 lg:pt-0 mt-0 lg:mt-0 order-1 lg:order-2"
                >
                    <HeroPortrait />
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 text-sm font-medium tracking-widest hidden md:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
            >
                SCROLL
                <motion.div
                    className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"
                    animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
