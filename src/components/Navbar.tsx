"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/#projects" },
        { name: "Services", href: "/services" },
        { name: "Experience", href: "/#experience" },
        { name: "Contact", href: "/#contact" },
    ];

    const handleScrollTo = (e: React.MouseEvent, href: string) => {
        if (href.startsWith("/#")) {
            e.preventDefault();
            setIsOpen(false);

            const targetId = href.replace("/", "");

            if (pathname !== "/") {
                router.push(href);
                return;
            }

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        } else if (href === "/") {
            e.preventDefault();
            setIsOpen(false);
            if (pathname !== "/") {
                router.push("/");
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } else {
            setIsOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass border-b border-white/5 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity" onClick={(e) => handleScrollTo(e, "/")}>
                    MG
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/#contact"
                        onClick={(e) => handleScrollTo(e, "/#contact")}
                        className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all active:scale-95"
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full glass border-b border-white/10 flex flex-col items-center py-6 gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className="text-lg font-medium text-white/80 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="/#contact"
                            onClick={(e) => handleScrollTo(e, "/#contact")}
                            className="px-8 py-3 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-white/90 transition-all active:scale-95"
                        >
                            Hire Me
                        </a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
