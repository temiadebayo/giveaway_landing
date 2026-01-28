"use client";

import { motion } from "framer-motion";
import { Trophy, Wallet, ShieldCheck, Zap, BarChart3, Users, Sparkles, Gamepad2 } from "lucide-react";
import Image from "next/image";
import FredMascot from "@/assets/Fred_GA_Mascot.svg";

const features = [
    {
        icon: Gamepad2,
        title: "Skill-Based Games",
        description: "Tap challenges, reaction tests, and more. No luck needed, just vibes and speed. 🎮",
        gradient: "from-pink-500 to-rose-500",
        size: "large",
        keywords: "tap challenge, reaction games, skill-based competition"
    },
    {
        icon: Trophy,
        title: "Live Leaderboards",
        description: "Watch yourself climb in real-time. Peak competitive energy. 📈",
        gradient: "from-yellow-500 to-orange-500",
        keywords: "real-time rankings, competition, leaderboard"
    },
    {
        icon: Wallet,
        title: "Instant Payouts",
        description: "Win and get paid straight to your wallet. No chasing DMs. 💸",
        gradient: "from-green-500 to-emerald-500",
        keywords: "instant payment, wallet, prize distribution"
    },
    {
        icon: ShieldCheck,
        title: "Bot-Proof",
        description: "AI detects fake accounts so only real ones compete. Fair game.",
        gradient: "from-blue-500 to-cyan-500",
        keywords: "AI fraud detection, bot prevention, fair play"
    },
    {
        icon: BarChart3,
        title: "Boss Analytics",
        description: "Know your audience. See what's working. Data that actually helps.",
        gradient: "from-purple-500 to-violet-500",
        keywords: "engagement analytics, audience insights, data"
    },
    {
        icon: Users,
        title: "Community Mode",
        description: "Turn giveaways into events. Build a squad. Create memories.",
        gradient: "from-primary to-secondary",
        size: "large",
        keywords: "community building, events, social engagement"
    }
];

export function FeaturesSection() {
    return (
        <section
            className="py-24 relative overflow-hidden"
            id="features"
            aria-labelledby="features-heading"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <meta itemProp="name" content="Giveaway App Features" />
            <meta itemProp="description" content="Key features of the skill-based giveaway platform including games, leaderboards, instant payouts, and fraud detection." />
            <meta itemProp="numberOfItems" content="6" />

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" aria-hidden="true" />

            <div className="container px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <motion.header
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold mb-4"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-4 h-4" aria-hidden="true" /> FEATURES
                    </motion.span>
                    <h2
                        id="features-heading"
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-4"
                    >
                        Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-cyan-400">Different.</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Everything you need to run giveaways that <span className="text-white font-semibold">actually hit different</span>.
                    </p>
                </motion.header>

                {/* Layout with Fred mascot and Bento Grid */}
                <div className="grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {/* Fred Mascot - Takes up one column on large screens */}
                    <motion.figure
                        className="hidden lg:flex lg:col-span-1 items-center justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        aria-label="Fred the Dragon mascot - Reward and prize fulfillment"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/30 blur-[60px] scale-110" aria-hidden="true" />
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [-3, 3, -3]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                    src={FredMascot}
                                    alt="Fred the Reward Dragon - Managing prize distribution and giveaway fulfillment"
                                    className="w-48 drop-shadow-[0_0_30px_rgba(149,6,250,0.4)]"
                                />
                            </motion.div>

                            {/* Caption */}
                            <motion.div
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-3 py-1 shadow-lg"
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                aria-hidden="true"
                            >
                                <span className="text-white text-xs font-bold whitespace-nowrap">Fred says hi! 🎁</span>
                            </motion.div>
                        </div>
                    </motion.figure>

                    {/* Bento Grid - Takes up 3 columns */}
                    <div
                        className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                        role="list"
                        aria-label="Platform features"
                    >
                        {features.map((feature, idx) => (
                            <motion.article
                                key={idx}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: idx * 0.1,
                                    type: "spring",
                                    damping: 20
                                }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                className={`group relative p-6 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden backdrop-blur-sm ${feature.size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''
                                    }`}
                                role="listitem"
                                itemScope
                                itemType="https://schema.org/ListItem"
                                itemProp="itemListElement"
                            >
                                <meta itemProp="position" content={String(idx + 1)} />
                                <meta itemProp="keywords" content={feature.keywords} />

                                {/* Hover glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} aria-hidden="true" />

                                {/* Icon */}
                                <motion.div
                                    className={`p-4 w-fit rounded-2xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-lg`}
                                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    aria-hidden="true"
                                >
                                    <feature.icon className="text-white w-7 h-7" />
                                </motion.div>

                                {/* Content */}
                                <h3
                                    className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all"
                                    itemProp="name"
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors"
                                    itemProp="description"
                                >
                                    {feature.description}
                                </p>

                                {/* Corner accent */}
                                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} aria-hidden="true" />
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
