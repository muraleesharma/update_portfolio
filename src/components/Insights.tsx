"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";

const insights = [
    {
        title: "Scaling AI Automation Pipelines",
        category: "AI & Automation",
        readTime: "5 min read",
        desc: "An in-depth look at how I optimized cloud workflows for generative AI video production."
    },
    {
        title: "Trading Psychology: The Data Behind Emotions",
        category: "Machine Learning",
        readTime: "8 min read",
        desc: "Using behavioral patterns to predict and prevent emotional trading mistakes."
    },
    {
        title: "Modern Portfolio Architecture in 2026",
        category: "Web Development",
        readTime: "4 min read",
        desc: "Why static exports and serverless forms are the future of personal branding."
    }
];

export default function Insights() {
    return (
        <section className="w-full py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-[#a1a1aa] uppercase mb-2">Knowledge</h2>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Research & Insights</h3>
                    </div>
                    <p className="text-white/50 max-w-md">
                        Deep dives into the technical challenges I solve and the methodologies I develop.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {insights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card group p-8 rounded-[2rem] border border-white/5 hover:border-indigo-500/30 transition-all cursor-pointer h-full flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                                    {item.category}
                                </span>
                                <span className="text-white/30 text-[10px] font-medium">
                                    {item.readTime}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                                {item.desc}
                            </p>
                            <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                                Read Insight <ArrowUpRight size={18} className="text-cyan-400" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
