"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import Image from "next/image";
import FredMascot from "@/assets/Fred_GA_Mascot.svg";
import ZackMascot from "@/assets/Zack_GA_Mascot_1.svg";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    email?: string;
}

// Community links - replace with real URLs later
const communityLinks = [
    {
        name: "Discord",
        href: "https://discord.gg/JUqsA75mG7",
        icon: "https://cdn.simpleicons.org/discord/5865F2",
        color: "from-[#5865F2] to-[#7289DA]",
        emoji: "🎮"
    },
    {
        name: "WhatsApp",
        href: "#whatsapp",
        icon: "https://cdn.simpleicons.org/whatsapp/25D366",
        color: "from-[#25D366] to-[#128C7E]",
        emoji: "💬"
    },
    {
        name: "Telegram",
        href: "#telegram",
        icon: "https://cdn.simpleicons.org/telegram/26A5E4",
        color: "from-[#26A5E4] to-[#0088CC]",
        emoji: "✈️"
    },
];

const socialLinks = [
    {
        name: "X",
        href: "#twitter",
        icon: "https://cdn.simpleicons.org/x/FFFFFF",
        color: "bg-black"
    },
    {
        name: "TikTok",
        href: "#tiktok",
        icon: "https://cdn.simpleicons.org/tiktok/FFFFFF",
        color: "bg-black"
    },
];

export function WaitlistSuccessModal({ isOpen, onClose, email }: SuccessModalProps) {
    const hasTriggeredConfetti = useRef(false);

    useEffect(() => {
        if (isOpen && !hasTriggeredConfetti.current) {
            hasTriggeredConfetti.current = true;

            // Epic confetti burst!
            const duration = 4000;
            const end = Date.now() + duration;

            const colors = ['#9506FA', '#00D4FF', '#FF6B6B', '#FFE66D', '#4ECDC4'];

            (function frame() {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());

            // Big center burst
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: colors
                });
            }, 200);
        }

        if (!isOpen) {
            hasTriggeredConfetti.current = false;
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: "spring", damping: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
                    >
                        <div className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden my-8">
                            {/* Background glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[100px] pointer-events-none" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Content */}
                            <div className="relative z-10 text-center">
                                {/* Mascots */}
                                <div className="flex justify-center items-end gap-4 mb-4">
                                    <motion.div
                                        initial={{ x: -50, opacity: 0, rotate: -10 }}
                                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                    >
                                        <Image
                                            src={FredMascot}
                                            alt="Fred"
                                            className="w-20 h-20 object-contain drop-shadow-[0_0_20px_rgba(149,6,250,0.5)]"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-5xl"
                                    >
                                        🎉
                                    </motion.div>

                                    <motion.div
                                        initial={{ x: 50, opacity: 0, rotate: 10 }}
                                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                    >
                                        <Image
                                            src={ZackMascot}
                                            alt="Zack"
                                            className="w-20 h-20 object-contain drop-shadow-[0_0_20px_rgba(255,107,107,0.5)]"
                                        />
                                    </motion.div>
                                </div>

                                {/* Headline */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="text-3xl md:text-4xl font-black mb-1">
                                        YOU&apos;RE IN! 🔥
                                    </h3>
                                    <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-cyan-400 mb-3">
                                        Welcome to the Tribe!
                                    </p>
                                </motion.div>

                                {/* Body */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="space-y-3 mb-4"
                                >
                                    <p className="text-slate-400">
                                        You just secured your spot with the <span className="text-white font-semibold">real ones</span>.
                                    </p>

                                    {email && (
                                        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                                            <p className="text-xs text-slate-500 mb-1">Check your inbox for the deets 📬</p>
                                            <p className="text-white font-mono text-sm truncate">{email}</p>
                                        </div>
                                    )}

                                    {/* Perks */}
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {["3 Months Free 💎", "Beta Access 🚀", "OG Status 👑"].map((perk, i) => (
                                            <motion.span
                                                key={perk}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                                className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 text-xs font-medium"
                                            >
                                                {perk}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Community Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mb-4"
                                >
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <MessageCircle className="w-4 h-4 text-primary" />
                                        <p className="text-sm font-bold text-white">Join the Community</p>
                                    </div>

                                    {/* Community Buttons */}
                                    <div className="flex justify-center gap-2 mb-3">
                                        {communityLinks.map((link, i) => (
                                            <motion.a
                                                key={link.name}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.7 + i * 0.1 }}
                                                whileHover={{ scale: 1.1, y: -3 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${link.color} text-white text-sm font-bold shadow-lg hover:shadow-xl transition-shadow`}
                                            >
                                                <img src={link.icon} alt={link.name} className="w-4 h-4" />
                                                {link.name}
                                            </motion.a>
                                        ))}
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center gap-2">
                                        {socialLinks.map((link, i) => (
                                            <motion.a
                                                key={link.name}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.9 + i * 0.1 }}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${link.color} border border-white/10 text-white text-xs font-medium`}
                                            >
                                                <img src={link.icon} alt={link.name} className="w-4 h-4" />
                                                {link.name}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* CTA */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    onClick={onClose}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary font-bold text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow"
                                >
                                    LFG! Let&apos;s Go 🚀
                                </motion.button>

                                {/* Fun footer */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                    className="text-slate-600 text-xs mt-3"
                                >
                                    You&apos;re officially one of us. No take-backs. 😎
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
