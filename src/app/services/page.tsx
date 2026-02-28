import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Code, Database, TrendingUp, Cpu, LayoutTemplate, BriefcaseBusiness } from "lucide-react";

export const metadata = {
    title: "Services | Muralee G",
    description: "Expert Full Stack, AI, and Trading System development services.",
};

const services = [
    {
        title: "Premium Business Portfolios",
        description: "I build modern, fast, and beautiful websites that help business owners and entrepreneurs show off their work, tell their story, and attract more clients online.",
        icon: <BriefcaseBusiness className="w-8 h-8 text-orange-400" />,
    },
    {
        title: "AI & Machine Learning Integrations",
        description: "Custom AI solutions, generative models, OpenAI API integrations, and robust data pipelines to automate tasks and unlock insights from complex datasets.",
        icon: <Cpu className="w-8 h-8 text-cyan-400" />,
    },
    {
        title: "Algorithmic Trading Systems",
        description: "High-performance execution algorithms, market data processing, behavioral analytics engines, and risk management protocols using Python and real-time WebSockets.",
        icon: <TrendingUp className="w-8 h-8 text-indigo-400" />,
    },
    {
        title: "Full-Stack Web & Mobile Engineering",
        description: "End-to-end development of modern, scalable applications targeting both web (Next.js, Next, React) and mobile ecosystems (Flutter) tailored to specific business logic.",
        icon: <Code className="w-8 h-8 text-purple-400" />,
    },
    {
        title: "Automation & Data Engineering",
        description: "Replacing manual and repetitive tasks with headless workflows, automated scripts, and CI/CD pipelines to skyrocket efficiency and reduce operational friction.",
        icon: <Database className="w-8 h-8 text-emerald-400" />,
    },
    {
        title: "Advanced UI/UX Implementation",
        description: "Transforming standard interfaces into highly engaging experiences using glassmorphism aesthetics, fluid Framer Motion animations, and modern Tailwind configurations.",
        icon: <LayoutTemplate className="w-8 h-8 text-pink-400" />,
    },
];

export default function ServicesPage() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden pt-20">
            <Navbar />

            <section className="relative w-full py-24 px-6 md:px-12 flex-grow flex flex-col items-center">
                {/* Background glow effects */}
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="container mx-auto max-w-6xl z-10">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Services</span>
                        </h1>
                        <p className="text-lg text-white/60 leading-relaxed">
                            Leveraging deep expertise in AI, financial systems, and full-stack engineering to build high-performance products that solve real-world problems. Let&apos;s turn your vision into scalable reality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative glass-card p-10 rounded-3xl hover:-translate-y-2 hover:border-white/20 transition-all duration-300 flex flex-col"
                            >
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                                    {service.title}
                                </h3>

                                <p className="text-white/60 leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <p className="text-xl text-white mb-8">Ready to start a project or need a technical consultation?</p>
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all active:scale-95"
                        >
                            <Zap className="w-5 h-5 fill-black" />
                            Let&apos;s Work Together
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
