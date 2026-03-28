import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section
            id="About"
            className="w-full py-16 relative z-10"
        >
            <div className="max-w-[1200px] mx-auto px-6 md:px-[8vw]">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 md:mb-16"
                >
                    <h2 className="text-sm font-bold tracking-[0.3em] text-amber-500 mb-4 uppercase">Discover</h2>
                    <h3 className="text-[clamp(2rem,4.5vw,4rem)] font-black tracking-tight leading-none mix-blend-difference pb-2">
                        ABOUT <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-400">ME</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                    {/* Left Column - Big Text */}
                    <div className="lg:col-span-7">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[clamp(1.1rem,2.2vw,1.9rem)] font-bold tracking-tight text-black leading-tight mb-5"
                        >
                            I am a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">AI engineer</span> with expertise in building intelligent systems and a strong focus on precision, scalability, and innovation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-sm md:text-base text-zinc-600 leading-relaxed font-light space-y-4"
                        >
                            <p>
                                Hi! I'm <strong className="text-zinc-800 font-medium tracking-wide">Ayush Arora</strong>. I have a strong passion for artificial intelligence and technology.
                            </p>
                            <p>
                                <strong className="text-amber-500 font-normal">
                                    I specialize in developing machine learning models and AI-driven solutions, with a focus on building scalable, efficient, and innovative systems.
                                </strong>
                            </p>
                            <p>
                                My work revolves around designing intelligent algorithms, optimizing neural networks, and deploying AI applications that solve real-world problems.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Image */}
                    <motion.div
                        className="lg:col-span-5 relative group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Decorative background elements */}
                        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-amber-500/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 rounded-2xl border border-white/10 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />

                        <div className="relative overflow-hidden rounded-2xl bg-zinc-100 border border-black/10 shadow-xl" style={{ aspectRatio: '4/5' }}>
                            <motion.img
                                src="/profile.jpg"
                                alt="Profile"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                                initial={{ opacity: 0.85, scale: 1 }}
                                whileHover={{ scale: 1.05, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Inner glow on hover */}
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl mix-blend-overlay" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
