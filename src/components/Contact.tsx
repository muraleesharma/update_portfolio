"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="w-full py-24 px-6 md:px-12 bg-black relative">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card rounded-[3rem] p-10 md:p-20 relative overflow-hidden"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let&apos;s build something extraordinary.</h2>
                    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                        Currently open for freelance projects. Whether you have a project to discuss or just want to say hi, my inbox is open.
                    </p>

                    <form className="max-w-md mx-auto space-y-4 mb-16 text-left" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                            ></textarea>
                        </div>
                        <button className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-white/90 transition-transform active:scale-[0.98]">
                            Send Message
                        </button>
                    </form>

                    <div className="flex justify-center gap-6">
                        <a href="mailto:example@email.com" className="p-4 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all">
                            <Mail size={24} />
                        </a>
                        <a href="#" className="p-4 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="p-4 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all">
                            <Github size={24} />
                        </a>
                    </div>

                    {/* Floating WhatsApp Button (Positioned fixed on page) */}
                    <a
                        href="https://wa.me/XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300"
                    >
                        <MessageCircle size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
