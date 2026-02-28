"use client";

import { motion } from "framer-motion";
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
        <section id="hero" className="relative mt-16 w-full min-h-[90vh] flex flex-col justify-center items-center px-6">
            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-500/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto text-center z-10">
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
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
                >
                    I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Muralee G</span>
                </motion.h1>

                <motion.div
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={slideUp}
                    className="text-2xl md:text-4xl font-medium text-white/80 h-10 mb-6 flex justify-center items-center gap-1"
                >
                    <span>I am a {text}</span>
                    <span className="w-[3px] h-[30px] bg-cyan-400 animate-pulse" />
                </motion.div>

                <motion.p
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={slideUp}
                    className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Passionate about building web apps, android applications, AI apps, and performance-driven digital products. I combine technical excellence with clean design principles.
                </motion.p>

                <motion.div
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={slideUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
                    <a
                        href="/#contact"
                        className="group w-full sm:w-auto px-8 py-3.5 rounded-full glass text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-all active:scale-95"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
