"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Alex Thompson",
        role: "Tech Lead, Fintech Solutions",
        content: "Muralee's expertise in AI and trading systems is unparalleled. He delivered a high-performance engine that exceeded our expectations.",
        image: "https://i.pravatar.cc/150?u=alex",
    },
    {
        name: "Sarah Chen",
        role: "Startup Founder",
        content: "Working with Muralee was a seamless experience. He translated our complex business requirements into a beautiful, performant portfolio.",
        image: "https://i.pravatar.cc/150?u=sarah",
    },
    {
        name: "Rajesh Kumar",
        role: "Data Analytics Manager",
        content: "His deep understanding of data engineering helped us optimize our pipelines significantly. A true professional.",
        image: "https://i.pravatar.cc/150?u=raj",
    },
];

export default function Testimonials() {
    return (
        <section className="w-full py-24 px-6 md:px-12 bg-black overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold tracking-widest text-[#a1a1aa] uppercase mb-2">Social Proof</h2>
                    <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Client Testimonials</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all flex flex-col items-center text-center"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full mb-6 border-2 border-cyan-500/20"
                            />
                            <p className="text-white/70 italic mb-8 leading-relaxed">
                                &quot;{testimonial.content}&quot;
                            </p>
                            <div>
                                <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                                <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
