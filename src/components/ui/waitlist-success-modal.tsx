"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, PartyPopper } from "lucide-react";
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
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 overflow-hidden">
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
                                <div className="flex justify-center items-end gap-4 mb-6">
                                    <motion.div
                                        initial={{ x: -50, opacity: 0, rotate: -10 }}
                                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                    >
                                        <Image
                                            src={FredMascot}
                                            alt="Fred"
                                            className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(149,6,250,0.5)]"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-6xl"
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
                                            className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(255,107,107,0.5)]"
                                        />
                                    </motion.div>
                                </div>

                                {/* Headline */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="text-4xl md:text-5xl font-black mb-2">
                                        YOU&apos;RE IN! 🔥
                                    </h3>
                                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-cyan-400 mb-4">
                                        Welcome to the Tribe!
                                    </p>
                                </motion.div>

                                {/* Body */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="space-y-4 mb-6"
                                >
                                    <p className="text-slate-400 text-lg">
                                        You just secured your spot with the <span className="text-white font-semibold">real ones</span>.
                                        We gotchu.
                                    </p>

                                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                                        <p className="text-sm text-slate-500 mb-1">Check your inbox for the deets 📬</p>
                                        {email && (
                                            <p className="text-white font-mono text-sm truncate">{email}</p>
                                        )}
                                    </div>

                                    {/* Perks */}
                                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                                        {["3 Months Free 💎", "Beta Access 🚀", "OG Status 👑"].map((perk, i) => (
                                            <motion.span
                                                key={perk}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                                className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 text-sm font-medium"
                                            >
                                                {perk}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* CTA */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    onClick={onClose}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary font-bold text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow"
                                >
                                    LFG! Let&apos;s Go 🚀
                                </motion.button>

                                {/* Fun footer */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="text-slate-600 text-xs mt-4"
                                >
                                    You&apos;re officially one of us now. No take-backs. 😎
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
