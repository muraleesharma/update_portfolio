"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
};

const projects: Project[] = [
    {
        title: "ResumeReady.in - Free resume builder",
        description: "A full working Resume builder application that allows users to create, customize, and download professional resumes seamlessly.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "React", "Tailwind"],
        liveUrl: "https://resumeready.in/",
        githubUrl: "#",
    },
    {
        title: "Reels Creation Automation Tool using AI",
        description: "A complete automation pipeline that uses generative AI tools to script, generate, and edit engaging short-form video reels without manual intervention.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "OpenAI API", "FFmpeg", "Automation"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Personalized Business Portfolio Websites",
        description: "High-converting, bespoke portfolio websites designed specifically for entrepreneurs and businessmen, built with sleek modern aesthetics.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Next.js", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "NSE Swing Trading Intelligence Platform",
        description: "An advanced algorithmic trading platform tailored for NSE, integrating real-time market data, predictive AI models, and automated execution APIs for quantitative swing strategies.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "Django", "React", "WebSockets"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Behavioral Pattern Analyzer (Trader Personality Engine)",
        description: "A data-driven engine that analyzes historical trading behaviors and psychological patterns to generate personalized insights for traders, improving discipline and consistency.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "Data Science", "Machine Learning"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "AI Trading Psychology Lab (Simulation Engine)",
        description: "An interactive simulation environment designed to test and refine trading psychology under pressure, utilizing AI to replicate live market conditions.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "AI Integrations", "Framer Motion"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "System & Work Automation Solutions",
        description: "Custom-built internal automation scripts and headless workflows engineered to replace repetitive manual tasks, driving operational efficiency across enterprise environments.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "Node.js", "Cron", "DevOps"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-24 px-6 md:px-12 bg-black relative">
            <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent -z-10 blur-3xl" />

            <div className="container mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[#a1a1aa] uppercase mb-2">Work</h2>
                    <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Selected Projects</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group relative flex flex-col glass-card rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            {/* Make entire card clickable */}
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />

                            <div className="relative w-full aspect-video overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h4 className="text-2xl font-semibold text-white mb-3">{project.title}</h4>
                                <p className="text-white/60 mb-6 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-white/10 relative z-20">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                                        <Github size={16} /> Source
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
