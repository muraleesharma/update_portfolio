import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 border-t border-white/10 bg-black">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <p className="text-white/40 text-sm">&copy; {currentYear} Muralee G. All rights reserved.</p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://in.linkedin.com/in/muralee-sharma-89a596116?trk=public_profile_samename_profile_profile-result-card_result-card_full-click"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-[#0077B5] transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-white/40 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="mailto:example@email.com"
                        className="text-white/40 hover:text-cyan-400 transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                <div className="flex gap-6 text-xs text-white/40">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
