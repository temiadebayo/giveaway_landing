"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "@/assets/logo_white.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Vibes", href: "#vibes" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMobileOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                    scrolled ? "bg-slate-950/90 backdrop-blur-xl border-white/10 py-3" : "bg-transparent border-transparent py-5"
                )}
            >
                <div className="container px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src={logoWhite}
                            alt="Giveaway"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                        />
                        <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                            GIVEAWAY
                        </span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                            </motion.button>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            variant="ghost"
                            className="text-slate-300 hover:text-white hover:bg-white/5"
                            onClick={() => window.location.href = 'https://app.trygiveaway.app/login'}
                        >
                            Log In
                        </Button>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="gradient"
                                size="sm"
                                className="font-bold"
                                onClick={() => window.location.href = 'https://app.trygiveaway.app'}
                            >
                                Get Started 🚀
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        className="md:hidden p-2 text-white"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-16 z-40 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 md:hidden"
                    >
                        <nav className="container px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-left text-lg font-medium text-slate-300 hover:text-white py-2"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                                <Button variant="ghost" className="justify-start" onClick={() => window.location.href = 'https://app.trygiveaway.app/login'}>Log In</Button>
                                <Button variant="gradient" onClick={() => window.location.href = 'https://app.trygiveaway.app'}>Get Started 🚀</Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
