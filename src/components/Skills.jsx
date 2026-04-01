import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', logo: import.meta.env.BASE_URL + 'skill-react.svg', level: 4, category: 'Frontend' },
    { name: 'JavaScript', logo: import.meta.env.BASE_URL + 'skill-javascript.png', level: 4, category: 'Frontend' },
    { name: 'Python', logo: import.meta.env.BASE_URL + 'skill-python.png', level: 5, category: 'Backend' },
    { name: 'Java', logo: import.meta.env.BASE_URL + 'skill-java.webp', level: 3, category: 'Backend' },
    { name: 'Node.js', logo: import.meta.env.BASE_URL + 'skill-nodejs.png', level: 3, category: 'Backend' },
    { name: 'GitHub', logo: import.meta.env.BASE_URL + 'skill-github.svg', level: 4, category: 'Tools' },
];

const categoryColor = {
    Frontend: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/20' },
    Backend: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/20' },
    Tools: { bg: 'bg-orange-500/10', text: 'text-orange-600', border: 'border-orange-500/20' },
};

const DOT_TOTAL = 5;

const ProficiencyDots = ({ level }) => (
    <div className="flex gap-1.5 justify-center mt-3">
        {Array.from({ length: DOT_TOTAL }).map((_, i) => (
            <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className={`w-2 h-2 rounded-full ${i < level ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'bg-black/10'}`}
            />
        ))}
    </div>
);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 200, damping: 20 }
    }
};

const Skills = () => (
    <section id="skills" className="w-full py-16 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-[8vw]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-10 md:mb-16"
            >
                <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black tracking-tight text-black mb-3">
                    TECHNICAL <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">EXPERTISE</span>
                </h2>
                <p className="text-zinc-600 max-w-xl">Tools and technologies I use to build scalable intelligent systems.</p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
            >
                {skills.map((skill) => {
                    const cat = categoryColor[skill.category];
                    return (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-black/[0.02] border border-black/5 hover:bg-black/[0.04] hover:border-black/10 transition-all duration-300"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-amber-500/5 blur-xl group-hover:bg-amber-500/10 transition-colors duration-500 rounded-2xl -z-10" />

                            {/* Icon */}
                            <div className="h-12 w-12 mb-4 flex items-center justify-center relative">
                                {/* Subtle background pulse on hover */}
                                <div className="absolute inset-0 bg-black/5 rounded-full scale-50 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500" />
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    style={{ maxHeight: '3rem', maxWidth: '3rem', objectFit: 'contain', position: 'relative', zIndex: 10, transition: 'transform 0.3s' }}
                                />
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <span className="text-black font-bold tracking-wide text-sm md:text-base">
                                    {skill.name}
                                </span>

                                <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border ${cat.bg} ${cat.text} ${cat.border}`}>
                                    {skill.category}
                                </span>

                                <ProficiencyDots level={skill.level} />
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    </section>
);

export default Skills;
