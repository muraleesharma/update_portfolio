"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;

export default function Hero() {
    const words = ["AI/Data Engineer", "Full Stack Developer", "Freelance Developer"];
    const [text, setText] = useState("");
    const [wordIdx, setWordIdx] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Mouse Parallax Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const currentWord = words[wordIdx];

        if (isDeleting) {
            timer = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIdx((prev) => (prev + 1) % words.length);
                }
            }, DELETING_SPEED);
        } else {
            timer = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));
                if (text.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            }, TYPING_SPEED);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIdx, words]);

    const slideUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
            },
        }),
    };

    return (
        <section
            id="hero"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative mt-24 md:mt-16 w-full min-h-[90vh] flex flex-col justify-center items-center px-6 py-12 overflow-hidden"
        >
            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-500/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-10" />

            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                {/* Text Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full glass border border-white/10 text-xs font-medium text-indigo-200"
                    >
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                        Available for freelance projects
                    </motion.div>

                    <motion.h1
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                        className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight mb-4"
                    >
                        I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Muralee G</span>
                    </motion.h1>

                    <motion.div
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                        className="text-2xl md:text-4xl font-medium text-white/80 h-10 mb-6 flex justify-center lg:justify-start items-center gap-1"
                    >
                        <span>I am a {text}</span>
                        <span className="w-[3px] h-[30px] bg-cyan-400 animate-pulse" />
                    </motion.div>

                    <motion.p
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                        className="text-base md:text-lg text-white/50 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                    >
                        Passionate about building web apps, android applications, AI apps, and performance-driven digital products. I combine technical excellence with clean design principles.
                    </motion.p>

                    <motion.div
                        custom={4}
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        <a
                            href="/#projects"
                            className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-white/90 transition-all active:scale-95"
                        >
                            View Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link
                            href="/services"
                            className="group w-full sm:w-auto px-8 py-3.5 rounded-full border border-cyan-500/30 text-white font-semibold flex items-center justify-center gap-2 hover:bg-cyan-500/10 transition-all active:scale-95"
                        >
                            Services
                            <Zap className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Caricature Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="order-1 lg:order-2 flex justify-center items-center relative"
                >
                    <div className="relative group">
                        {/* Glowing background behind image */}
                        <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 rounded-[2rem] blur-3xl group-hover:blur-4xl transition-all duration-500 opacity-60 group-hover:opacity-100" />

                        <div className="relative glass-card p-2 rounded-[2.5rem] overflow-hidden border border-white/10 max-w-[400px] md:max-w-md shadow-2xl">
                            <img
                                src="/muralee-caricature.jpg"
                                alt="Muralee G Caricature"
                                className="w-full h-auto rounded-[2rem] object-cover transition-transform duration-500"
                            />
                        </div>

                        {/* Floating elements indicator */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl border border-white/10 hidden md:block shadow-2xl z-20"
                        >
                            <p className="text-sm font-bold text-white leading-tight">
                                AI & Trading <br />
                                <span className="text-white/50 font-normal">Expertise</span>
                            </p>
                            <div className="mt-2 flex gap-1">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Additional detail tag */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="absolute -top-6 -right-6 glass px-6 py-3 rounded-2xl border border-white/10 hidden md:block shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                    <Zap size={16} className="text-indigo-400" />
                                </div>
                                <span className="text-sm font-semibold text-white">Full Stack</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
