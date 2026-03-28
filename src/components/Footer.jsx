import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
    // Array to repeat content for seamless infinite scroll
    const items = new Array(12).fill(null);

    return (
        <footer className="w-full relative overflow-hidden py-3 border-t border-black/5 bg-white/40 backdrop-blur-md text-sm">
            {/* The absolute container with our animation */}
            <div className="flex w-[200%] animate-marquee">
                {items.map((_, i) => (
                    <div key={i} className="flex flex-none items-center justify-center gap-6 px-8 whitespace-nowrap">
                        <span className="font-medium tracking-wide text-zinc-600">Made with ❤️ by Ayush Arora</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                        <a 
                            href="https://www.linkedin.com/in/ayush-arora-678758376/" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="LinkedIn"
                            className="text-zinc-500 hover:text-black transition-colors flex items-center gap-2"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                        <a 
                            href="https://github.com/ayuslharora" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="GitHub"
                            className="text-zinc-500 hover:text-black transition-colors flex items-center gap-2"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
