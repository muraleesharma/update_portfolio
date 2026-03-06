"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Brain, Shield, Layout, Zap, Database } from "lucide-react";

const services = [
    {
        title: "AI & Data Engineering",
        icon: <Brain size={32} className="text-cyan-400" />,
        description: "Building intelligent systems using Large Language Models (LLMs), machine learning, and data analytics. From RAG pipelines to predictive modeling.",
        features: ["Custom AI Agents", "RAG Systems", "ML Model Training", "Data Pipelines"]
    },
    {
        title: "Full Stack Development",
        icon: <Code size={32} className="text-indigo-400" />,
        description: "End-to-end web applications built with modern stacks like React, Next.js, and Django. Scalable, performant, and reliable.",
        features: ["SPA & PWA", "RESTful APIs", "Cloud Integration", "Database Design"]
    },
    {
        title: "Cyber-Security",
        icon: <Shield size={32} className="text-red-400" />,
        description: "Strengthening digital products with advanced security principles and encryption standards. Secure-by-design architecture.",
        features: ["Secure Authentication", "Data Encryption", "Vulnerability Assessment", "Access Control"]
    },
    {
        title: "UI/UX & Design Systems",
        icon: <Layout size={32} className="text-pink-400" />,
        description: "Creating premium, performance-driven digital experiences. Minimalist designs combined with powerful functionality.",
        features: ["Modern UI Systems", "User Research", "Prototyping", "Responsive Design"]
    },
    {
        title: "Quant & Trading Systems",
        icon: <Zap size={32} className="text-yellow-400" />,
        description: "Specialized algorithmic trading platforms for markets like NSE. Real-time market data integration and automated execution.",
        features: ["Algo Trading", "Real-time Analysis", "Backtesting Tools", "Risk Management"]
    },
    {
        title: "System Automation",
        icon: <Database size={32} className="text-green-400" />,
        description: "Headless workflows and scripts to automate repetitive enterprise tasks. Operational efficiency through robust code.",
        features: ["Workflow Automation", "Cron Services", "Cloud Orchestration", "API Integration"]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white overflow-hidden">
            <Navbar />

            <section className="pt-32 pb-24 px-6 md:px-12 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-500/10 blur-[150px] -z-10" />

                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                        >
                            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Services</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/50 max-w-2xl mx-auto"
                        >
                            Engineering performance-driven digital products with technical excellence and clean design.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all group flex flex-col h-full"
                            >
                                <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl font-bold mb-4 text-white">{service.title}</h2>
                                <p className="text-white/60 mb-8 leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-white/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to start your next project?</h2>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="/#contact"
                            className="inline-block px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-cyan-500 hover:text-white transition-all shadow-xl"
                        >
                            Work with me
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
