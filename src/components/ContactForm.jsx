import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import NavBar from './NavBar';
import Footer from './Footer';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch("https://formspree.io/f/xnjojenl", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Something went wrong with the email service. Please try again or reach out on social media.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred checking network. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-hidden selection:bg-amber-400/30">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-amber-500/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-yellow-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
            </div>

            <NavBar />

            <div className="flex-1 flex flex-col items-center justify-center w-full px-6 pt-32 pb-16 relative z-10">
                <div className="w-full max-w-2xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-black">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">touch.</span>
                        </h1>
                        <p className="text-zinc-600 text-lg font-light leading-relaxed">
                            Do you fancy saying hi to me or you want to get started with your project
                            and you need my help? Feel free to contact me.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-6 md:p-10 rounded-3xl"
                    >
                        {submitted ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mb-6">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                                <p className="text-zinc-600">Thank you for reaching out. I'll get back to you shortly.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Name</label>
                                        <input 
                                            type="text" name="name" placeholder="John Doe"
                                            value={formData.name} onChange={handleChange} required 
                                            className="w-full bg-white/40 border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all font-light" 
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email</label>
                                        <input 
                                            type="email" name="email" placeholder="john@example.com"
                                            value={formData.email} onChange={handleChange} required 
                                            className="w-full bg-white/40 border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all font-light" 
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Subject</label>
                                    <input 
                                        type="text" name="subject" placeholder="What is this regarding?"
                                        value={formData.subject} onChange={handleChange} required 
                                        className="w-full bg-white/40 border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all font-light" 
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                                    <textarea 
                                        name="message" placeholder="Hello Ayush..." maxLength={1000}
                                        value={formData.message} onChange={handleChange} required
                                        className="w-full min-h-[150px] bg-white/40 border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-y font-light" 
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative flex items-center justify-center gap-3 w-full md:w-auto self-start mt-4 px-8 py-4 bg-black text-white rounded-full font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                                >
                                    <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                                    <Send className="w-4 h-4 relative z-10" />
                                    {/* Hover sweep effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
};

export default ContactForm;
