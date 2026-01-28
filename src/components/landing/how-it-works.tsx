"use client";

import { motion } from "framer-motion";
import { UserPlus, Gamepad2, Trophy, Wallet, Sparkles } from "lucide-react";
import Image from "next/image";
import NatMascot from "@/assets/Nat_GA_Mascot.svg";

const steps = [
    {
        step: "01",
        icon: UserPlus,
        title: "Drop In",
        description: "Create your free account in seconds. No essays, no complications. Just vibes.",
        color: "from-cyan-500 to-blue-500",
        emoji: "🚀"
    },
    {
        step: "02",
        icon: Gamepad2,
        title: "Pick Your Game",
        description: "Find a giveaway that's calling your name. Tap challenges, reaction games, you name it.",
        color: "from-primary to-purple-500",
        emoji: "🎮"
    },
    {
        step: "03",
        icon: Trophy,
        title: "Compete & Win",
        description: "Show up, tap fast, claim your spot on the leaderboard. Best players take the prize.",
        color: "from-yellow-500 to-orange-500",
        emoji: "🏆"
    },
    {
        step: "04",
        icon: Wallet,
        title: "Get Paid",
        description: "Won? Funds hit your wallet instantly. No DMs, no waiting around. Just W's.",
        color: "from-green-500 to-emerald-500",
        emoji: "💰"
    }
];

export function HowItWorksSection() {
    return (
        <section
            className="py-24 relative overflow-hidden"
            id="how-it-works"
            aria-labelledby="how-it-works-heading"
            itemScope
            itemType="https://schema.org/HowTo"
        >
            {/* Hidden SEO content */}
            <meta itemProp="name" content="How to Win Skill-Based Giveaways" />
            <meta itemProp="description" content="Learn how to participate and win prizes in skill-based giveaway competitions through tap challenges and reaction games." />

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 pointer-events-none" aria-hidden="true" />

            <div className="container px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <motion.header
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold mb-4"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-4 h-4" aria-hidden="true" /> HOW IT WORKS
                    </motion.span>
                    <h2
                        id="how-it-works-heading"
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-4"
                    >
                        So Easy, It&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Unfair</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Four steps. That&apos;s it. <span className="text-white font-semibold">Even your grandma could do this.</span>
                    </p>
                </motion.header>

                {/* Two Column Layout: Steps + Mascot */}
                <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-center">
                    {/* Steps Column */}
                    <div className="lg:col-span-3">
                        {/* Connection Line */}
                        <div className="relative">
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-primary via-yellow-500 to-green-500 opacity-30 hidden md:block" aria-hidden="true" />

                            <ol className="space-y-6" role="list">
                                {steps.map((step, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            delay: idx * 0.1,
                                            type: "spring",
                                            damping: 20
                                        }}
                                        className="relative flex gap-4 md:gap-6"
                                        itemScope
                                        itemType="https://schema.org/HowToStep"
                                    >
                                        <meta itemProp="position" content={String(idx + 1)} />

                                        {/* Step Number Circle */}
                                        <motion.div
                                            className={`shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-sm shadow-lg z-10`}
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            aria-hidden="true"
                                        >
                                            {step.step}
                                        </motion.div>

                                        {/* Step Card */}
                                        <motion.div
                                            className="flex-1 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5 group hover:border-white/20 transition-all"
                                            whileHover={{ x: 10 }}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} aria-hidden="true" />

                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-2xl" aria-hidden="true">{step.emoji}</span>
                                                <h3 className="text-xl font-bold text-white" itemProp="name">{step.title}</h3>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed" itemProp="text">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    </motion.li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Nat Mascot Column */}
                    <motion.figure
                        className="lg:col-span-2 hidden lg:flex items-center justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        aria-label="Nat mascot - Victory Champion ensuring fair play"
                    >
                        <div className="relative">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-cyan-500/30 blur-[80px] scale-110" aria-hidden="true" />

                            <motion.div
                                animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                    src={NatMascot}
                                    alt="Nat the Victory Champion - Ensuring fair and transparent winner selection in giveaways"
                                    className="w-72 drop-shadow-[0_0_40px_rgba(0,212,255,0.4)]"
                                />
                            </motion.div>

                            {/* Floating text */}
                            <motion.div
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-4 py-2 shadow-xl"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                aria-hidden="true"
                            >
                                <span className="text-white text-sm font-bold whitespace-nowrap">Fair & Transparent! ✨</span>
                            </motion.div>
                        </div>
                    </motion.figure>
                </div>
            </div>
        </section>
    );
}
