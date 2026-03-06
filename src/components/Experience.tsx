"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "Zoho Corporation",
        period: "2021 - 2025",
    },
    {
        company: "NVH India Autoparts",
        period: "2019 - 2021",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="w-full py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold tracking-widest text-[#a1a1aa] uppercase mb-2">Journey</h2>
                    <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Experience</h3>
                </div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-[-5px] md:left-[-5px] top-1 w-[11px] h-[11px] rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10" />

                            <div className="glass-card p-6 rounded-2xl md:ml-8 hover:bg-white/5 transition-colors border border-white/5 flex flex-col md:flex-row md:items-center justify-between">
                                <h4 className="text-2xl font-bold text-white mb-1 md:mb-0">{exp.company}</h4>
                                <span className="text-cyan-400 text-lg font-mono">{exp.period}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
