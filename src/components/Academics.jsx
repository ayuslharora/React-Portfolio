import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const achievements = [
    {
        id: 1,
        summary: 'International Rank 1 — IOM (Mathematics Olympiad)',
        image: import.meta.env.BASE_URL + 'iom-rank1.jpg',
        imageAlt: 'IOM International Rank 1 certificate',
        body: (
            <>
                Achieved <strong className="text-amber-500">International Rank 1</strong> in the International Olympiad of
                Mathematics (IOM) - Level 2 in Class 11, demonstrating top performance in problem
                solving, mathematical reasoning, and speed under competitive conditions.
                <div className="mt-8 flex gap-4">
                    <a
                        href="https://vishalbhartipublicschool.in/community-wonder-kids.html"
                        target="_blank" rel="noreferrer"
                        className="px-6 py-2 rounded-full border border-black/10 hover:bg-black/5 text-black font-medium text-sm transition-colors"
                    >
                        School's Website
                    </a>
                    <a
                        href="https://www.instagram.com/p/C4zp3rDvzTw/"
                        target="_blank" rel="noreferrer"
                        className="px-6 py-2 rounded-full border border-black/10 hover:bg-black/5 text-black font-medium text-sm transition-colors"
                    >
                        Instagram Post
                    </a>
                </div>
            </>
        ),
    },
    {
        id: 2,
        summary: 'House Captain — School Leadership',
        image: import.meta.env.BASE_URL + 'house-captain.jpg',
        imageAlt: 'House Captain certificate',
        body: (
            <>
                <strong className="text-amber-500">Elected House Captain</strong>, leading inter-house events, coordinating
                teams, and representing student interests. Responsibilities included planning,
                delegation, and event execution across academics and sports.
            </>
        ),
    },
    {
        id: 3,
        summary: 'Other Olympiad Achievements',
        image: null,
        body: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-600">
                <div className="p-4 rounded-xl bg-black/5 border border-black/5">
                    <strong className="text-black block mb-1">Class 11 IOM - Level 3</strong>
                    <span className="text-amber-500 font-mono">Rank: 10</span>
                </div>
                <div className="p-4 rounded-xl bg-black/5 border border-black/5">
                    <strong className="text-black block mb-1">Class 12 IOS</strong>
                    <span className="text-amber-500 font-mono">Rank: 176</span>
                </div>
                <div className="p-4 rounded-xl bg-black/5 border border-black/5">
                    <strong className="text-black block mb-1">Class 12 IOM</strong>
                    <span className="text-amber-500 font-mono">Rank: 78</span>
                </div>
                <div className="p-4 rounded-xl bg-black/5 border border-black/5">
                    <strong className="text-black block mb-1">Class 12 IOI</strong>
                    <span className="text-amber-500 font-mono">Rank: 273</span>
                </div>
            </div>
        ),
    },
    {
        id: 4,
        summary: 'Highest Physics Score — Board Examination',
        image: null,
        body: (
            <>
                <strong className="text-amber-500">Secured the highest marks in Physics</strong> at
                my school in the Board Examination, reflecting strong conceptual understanding, numerical accuracy, and
                disciplined preparation.
            </>
        ),
    },
];

const Academics = () => {
    const [openId, setOpenId] = useState(achievements[0].id);

    return (
        <section
            id="Academics"
            className="w-full py-24 relative z-10 bg-transparent"
        >
            <div className="max-w-[1000px] mx-auto px-6 md:px-[8vw]">
                <div className="mb-16">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tight text-black mb-4">
                        ACADEMIC <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">EXCELLENCE</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl">A history of strong analytical skills and consistent top performance.</p>
                </div>

                <div className="space-y-4">
                    {achievements.map((item) => (
                        <div 
                            key={item.id}
                            className={`border border-black/5 rounded-2xl overflow-hidden transition-colors duration-300 ${openId === item.id ? 'bg-white/80' : 'bg-white/40 hover:bg-white/60'}`}
                        >
                            <button
                                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                                className="w-full px-6 py-6 md:px-8 flex justify-between items-center text-left"
                            >
                                <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${openId === item.id ? 'text-black' : 'text-zinc-600'}`}>
                                    {item.summary}
                                </h3>
                                <div className="ml-4 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black/5 border border-black/5">
                                    <motion.span 
                                        animate={{ rotate: openId === item.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-black text-xl leading-none"
                                    >
                                        ↓
                                    </motion.span>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-6 pb-8 md:px-8 flex flex-col md:flex-row gap-8 items-start">
                                            {item.image && (
                                                <div className="w-full md:w-[40%] shrink-0">
                                                    <div className="relative rounded-xl overflow-hidden border border-black/10 group" style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                                                        <div className="absolute inset-0 bg-amber-500/20 mix-blend-overlay z-10 opacity-50 group-hover:opacity-0 transition-opacity" />
                                                        <img
                                                            src={item.image}
                                                            alt={item.imageAlt}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'all 0.5s' }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                            <div className="flex-1 text-zinc-600 leading-relaxed font-light">
                                                {item.body}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academics;
