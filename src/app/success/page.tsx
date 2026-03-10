"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <Navbar />

            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container mx-auto max-w-2xl text-center pt-20">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                    className="w-24 h-24 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-cyan-500/30"
                >
                    <CheckCircle2 size={48} className="text-cyan-400" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                >
                    Message Received!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-white/50 mb-12 max-w-md mx-auto leading-relaxed"
                >
                    Thank you for reaching out. Your message has been sent successfully. I typically respond to all inquiries within 24 hours.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all active:scale-95"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/#projects"
                        className="px-10 py-4 border border-white/10 text-white/70 font-semibold rounded-xl hover:bg-white/5 hover:text-white transition-all active:scale-95"
                    >
                        Explore More Projects
                    </Link>
                </motion.div>

                {/* Micro-moment */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="relative">
                        <img
                            src="/muralee-new-portrait.png"
                            alt="Muralee G"
                            className="w-32 h-32 rounded-3xl object-cover border border-white/20 shadow-2xl rotate-3"
                        />
                        <div className="absolute -top-10 -right-16 glass px-4 py-2 rounded-xl text-xs font-bold border border-white/10 animate-bounce">
                            Talk soon! 👋
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="mt-auto w-full">
                <Footer />
            </div>
        </main>
    );
}
