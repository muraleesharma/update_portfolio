import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export function generateStaticParams() {
    return projects
        .filter((p) => p.id !== "resume-ready")
        .map((p) => ({
            id: p.id,
        }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const project = projects.find((p) => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent -z-10 blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    Back to Portfolio
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">{project.title}</h1>

                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-sm font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                </div>

                {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {project.metrics.map((metric, idx) => (
                            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 text-center">
                                <p className="text-cyan-400 text-2xl font-bold mb-1">{metric.value}</p>
                                <p className="text-white/50 text-xs uppercase tracking-widest leading-tight">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="prose prose-invert max-w-none mb-16">
                    <h2 className="text-2xl font-semibold mb-6 text-white border-b border-white/10 pb-4">About the Project</h2>
                    <p className="text-lg text-white/70 leading-relaxed whitespace-pre-wrap">
                        {project.longDescription || project.description}
                    </p>
                </div>

                {((project.liveUrl && project.liveUrl !== "#") || (project.githubUrl && project.githubUrl !== "#")) && (
                    <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-white/10 mt-12 mb-12">
                        {project.liveUrl !== "#" && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors">
                                <ExternalLink size={20} /> Live Demo
                            </a>
                        )}
                        {project.githubUrl !== "#" && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-xl font-medium hover:bg-white/10 transition-colors border border-white/10">
                                <Github size={20} /> Source Code
                            </a>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}
