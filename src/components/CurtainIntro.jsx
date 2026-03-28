import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CurtainIntro = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Hide after sequence finishes
        const timer = setTimeout(() => setVisible(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[1000] flex flex-col pointer-events-none"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Top Panel */}
                    <motion.div
                        className="flex-1 bg-black flex items-end justify-center pb-8 border-b border-white/10"
                        initial={{ y: 0 }}
                        animate={{ y: '-100%' }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
                    >
                        <motion.h1
                            className="text-white text-5xl md:text-8xl font-black tracking-tight overflow-hidden"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <span className="inline-block" style={{ mixBlendMode: 'difference' }}>AI</span>
                        </motion.h1>
                    </motion.div>

                    {/* Bottom Panel */}
                    <motion.div
                        className="flex-1 bg-black flex items-start justify-center pt-8 border-t border-white/10"
                        initial={{ y: 0 }}
                        animate={{ y: '100%' }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
                    >
                        <motion.h1
                            className="text-white text-5xl md:text-8xl font-black tracking-widest overflow-hidden"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        >
                            <span className="inline-block text-amber-500">ENGINEER.</span>
                        </motion.h1>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CurtainIntro;
