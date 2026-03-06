"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { projects } from "../data/projects";

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
                            <a href={project.id === "resume-ready" ? project.liveUrl : `/project/${project.id}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />

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
