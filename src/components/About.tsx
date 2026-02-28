"use client";

import { motion } from "framer-motion";

const skills = [
    "Flutter",
    "Django",
    "React",
    "Next.js",
    "Python",
    "Trading Systems",
    "Machine Learning",
    "Cyber-Security",
    "APIs",
    "UI/UX",
    "Tailwind CSS",
    "AI Integrations"
];

export default function About() {
    return (
        <section id="about" className="w-full py-24 px-6 md:px-12 bg-[#000000]">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Bio Side */}
                    <div className="space-y-6">
                        <h2 className="text-sm font-bold tracking-widest text-[#a1a1aa] uppercase mb-2">
                            Who I Am
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white mb-6">
                            Engineering <span className="text-white/50">the future of</span> performance-driven digital experiences.
                        </h3>

                        <p className="text-lg text-white/70 leading-relaxed">
                            Based in India, I am a Full Stack Developer, AI/Data Engineer, and Freelancer. My background is deeply rooted in building scalable web applications, cutting-edge AI apps, machine learning models, and enforcing strong cyber-security principles.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed">
                            When I&apos;m not writing algorithms or optimizing APIs, I am focused on delivering world-class, modern UI/UX that brings powerful functionality directly to users in the most intuitive way possible.
                        </p>

                        <div className="pt-6">
                            <a href="#projects" className="text-white border-b border-white/30 hover:border-white pb-1 font-medium transition-colors">
                                See some of my work
                            </a>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="glass-card p-10 rounded-3xl h-full flex flex-col justify-center">
                        <h4 className="text-xl font-medium text-white mb-6">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.4 }}
                                    className="px-4 py-2 rounded-full glass bg-white/5 text-white/90 text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
