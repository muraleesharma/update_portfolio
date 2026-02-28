"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Senior Full Stack Developer",
        company: "Tech Innovators Inc",
        period: "2024 - Present",
        description: "Leading the development of high-performance web applications and backend AI integrations. Optimized system architecture to reduce latency by 40%.",
    },
    {
        role: "AI / Data Engineer",
        company: "Data & Tech Agency",
        period: "2022 - 2024",
        description: "Built robust data pipelines and AI-driven models using Python, processing large-scale datasets and optimizing algorithms for precision and efficiency.",
    },
    {
        role: "Mobile App Developer",
        company: "Freelance / Indie Hacker",
        period: "2020 - 2022",
        description: "Designed and launched multiple 5-star Flutter applications with complex state management and seamless UI/UX.",
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

                            <div className="glass-card p-8 rounded-2xl md:ml-8 hover:bg-white/5 transition-colors border border-white/5">
                                <span className="text-cyan-400 text-sm font-mono mb-2 block">{exp.period}</span>
                                <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                                <h5 className="text-xl text-white/50 mb-4 font-medium">{exp.company}</h5>
                                <p className="text-white/70 leading-relaxed">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
