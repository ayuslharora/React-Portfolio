import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Footer from './Footer';

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full relative z-10 min-h-screen flex flex-col justify-between pt-32 pb-0 bg-transparent"
        >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-amber-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="flex flex-col items-center justify-center flex-1 px-6 relative z-10 w-full max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter leading-[0.9] mb-6 text-black">
                        LET'S WORK <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">TOGETHER</span>
                    </h2>
                    <p className="text-zinc-600 text-lg md:text-2xl font-light tracking-wide">
                        Always open to collaborate
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link
                        to="/form"
                        className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-black text-white rounded-full font-bold text-lg md:text-xl overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(0,0,0,0.1)]"
                    >
                        <span className="relative z-10">Get in touch</span>
                        <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                        {/* Hover sweep effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                    </Link>
                </motion.div>
            </div>

            <Footer />
        </section>
    );
};

export default Contact;
