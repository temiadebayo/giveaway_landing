"use client";

import { Twitter, Instagram, Heart, Gamepad2 } from "lucide-react";
import Image from "next/image";
import logoWhite from "@/assets/logo_white.png";
import { motion } from "framer-motion";

const footerLinks = {
    product: [
        { label: "Features", href: "#features" },
        { label: "How it Works", href: "#how-it-works" },
        { label: "Roadmap", href: "#" },
    ],
    company: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
    ],
    legal: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
    ]
};

export function Footer() {
    const scrollToSection = (href: string) => {
        if (href.startsWith('#') && href !== '#') {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <footer
            className="border-t border-white/10 bg-slate-950 py-16 relative overflow-hidden"
            role="contentinfo"
            aria-label="Site footer"
            itemScope
            itemType="https://schema.org/WPFooter"
        >
            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] pointer-events-none" aria-hidden="true" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2">
                        <motion.div
                            className="flex items-center gap-3 mb-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Image
                                src={logoWhite}
                                alt="Giveaway App Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                            />
                            <span className="font-bold text-xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                GIVEAWAY
                            </span>
                        </motion.div>
                        <p className="text-slate-400 max-w-sm mb-4 leading-relaxed">
                            The future of giveaways is here.
                            Compete. Win. Flex. Built for the culture. 🔥
                        </p>
                        <nav aria-label="Social media links">
                            <div className="flex gap-3">
                                {[
                                    { icon: Twitter, label: "Follow us on Twitter", href: "https://twitter.com/giveawayapp" },
                                    { icon: Instagram, label: "Follow us on Instagram", href: "https://instagram.com/giveawayapp" },
                                    { icon: Gamepad2, label: "Join our Discord", href: "https://discord.gg/JUqsA75mG7" },
                                ].map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all"
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" aria-hidden="true" />
                                    </motion.a>
                                ))}
                            </div>
                        </nav>
                    </div>

                    {/* Product Links */}
                    <nav aria-label="Product navigation">
                        <h4 className="font-bold mb-4 text-white">Product</h4>
                        <ul className="space-y-3" role="list">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-slate-400 hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Company Links */}
                    <nav aria-label="Company navigation">
                        <h4 className="font-bold mb-4 text-white">Company</h4>
                        <ul className="space-y-3" role="list">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Legal Links */}
                    <nav aria-label="Legal navigation">
                        <h4 className="font-bold mb-4 text-white">Legal</h4>
                        <ul className="space-y-3" role="list">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                        <span itemProp="copyrightYear">© 2026</span>{" "}
                        <span itemProp="copyrightHolder">Giveaway App</span>. Made with{" "}
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" aria-label="love" /> for the culture.
                    </p>
                    <p className="text-slate-600 text-xs">
                        The future of digital engagement starts here. 🚀
                    </p>
                </div>
            </div>
        </footer>
    );
}
