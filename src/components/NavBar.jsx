import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
    { id: 'HOME', href: '#HOME', label: 'Home', num: '01' },
    { id: 'About', href: '#About', label: 'About', num: '02' },
    { id: 'Academics', href: '#Academics', label: 'Academics', num: '03' },
    { id: 'Projects', href: '#Projects', label: 'Works', num: '04' },
    { id: 'contact', href: '#contact', label: 'Contact', num: '05' },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState('HOME');

    useEffect(() => {
        const observers = [];
        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            // Adjusted constraints for tall sections so it registers on mobile correctly
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
                { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2.8 }}
                className="fixed inset-x-0 top-6 z-100 flex justify-center px-4 md:px-0 pointer-events-none"
            // className="fixed inset-x-0 top-6 z-[100] flex justify-center px-4 md:px-0 pointer-events-none"
            >
                {/* Floating Glassmorphic Nav */}
                <div className="flex items-center justify-between w-full max-w-5xl rounded-full bg-white/60 backdrop-blur-md border border-black/5 px-6 py-3 shadow-lg pointer-events-auto">

                    <div className="flex items-center">
                        <a href={import.meta.env.BASE_URL} className="cursor-pointer group relative flex items-center justify-center w-10 h-10 transition-transform hover:scale-105">
                            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-full h-full object-contain drop-shadow-sm" style={{ filter: 'invert(1)' }} />
                        </a>
                    </div>

                    {/* Hamburger Mobile */}
                    {!isMenuOpen && (
                        <button
                            className="md:hidden relative w-10 h-10 rounded-full bg-black/5 border border-black/5 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <span className="w-5 h-px bg-black"></span>
                            <span className="w-5 h-px bg-black"></span>
                        </button>
                    )}

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center gap-2">
                        {SECTIONS.map((sec) => (
                            <a
                                key={sec.id}
                                href={`${import.meta.env.BASE_URL}${sec.href}`}
                                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeId === sec.id ? 'text-black' : 'text-zinc-500 hover:text-black'}`}
                            >
                                {activeId === sec.id && (
                                    <motion.div
                                        layoutId="nav_pill"
                                        className="absolute inset-0 bg-black/5 border border-black/5 rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                {sec.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-120 flex flex-col bg-zinc-950/95 backdrop-blur-3xl"
                    >
                        <div className="flex items-center justify-between px-6 py-8">
                            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-10 h-10 object-contain" />
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-4xl leading-none font-light"
                            >
                                ×
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                            {/* Number Watermark Background */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 -translate-y-28"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <span className="text-[50vw] font-black text-white/5 leading-none">
                                    {SECTIONS.find(s => s.id === activeId)?.num || '01'}
                                </span>
                            </motion.div>

                            <div className="flex flex-col items-center justify-center gap-6 z-10 w-full -translate-y-12">
                                {SECTIONS.map((sec, i) => (
                                    <motion.a
                                        key={sec.id}
                                        href={`${import.meta.env.BASE_URL}${sec.href}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 + 0.1 }}
                                        className={`text-4xl sm:text-5xl font-bold capitalize tracking-tight transition-colors ${activeId === sec.id ? 'text-zinc-100' : 'text-zinc-600 hover:text-zinc-400'}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {sec.label}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social / Extra Links (Optional based on image) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute bottom-12 flex items-center justify-center gap-6 z-10 text-zinc-500 text-sm font-medium"
                            >
                                <a href="https://www.linkedin.com/in/ayush-arora-678758376/" className="hover:text-zinc-300">LinkedIn</a>
                                <a href="https://github.com/ayuslharora" className="hover:text-zinc-300">GitHub</a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;
