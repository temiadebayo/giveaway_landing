"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Gift } from "lucide-react";
import FredMascot from "@/assets/Fred_GA_Mascot.svg";
import NatMascot from "@/assets/Nat_GA_Mascot.svg";
import ZackMascot from "@/assets/Zack_GA_Mascot_1.svg";

const mascots = [
    {
        name: "Fred",
        role: "The Reward Dragon",
        description: "Your prize delivery expert. Fred makes sure every winner gets their rewards instantly. 🎁",
        image: FredMascot,
        color: "from-purple-500 to-pink-500",
        bgGlow: "bg-purple-500/30",
        features: ["Prize Distribution", "Gift Management", "Reward Tracking"],
        alt: "Fred the Reward Dragon mascot - Managing prize distribution and giveaway rewards"
    },
    {
        name: "Nat",
        role: "The Victory Champion",
        description: "Fair play enforcer. Nat ensures every competition is transparent and bot-free. 🏆",
        image: NatMascot,
        color: "from-cyan-500 to-blue-500",
        bgGlow: "bg-cyan-500/30",
        features: ["Winner Selection", "Fraud Detection", "Live Announcements"],
        alt: "Nat the Victory Champion mascot - Ensuring fair winner selection and fraud prevention"
    },
    {
        name: "Zack",
        role: "The Engagement Fox",
        description: "Your personal hype man. Zack guides you through every tap, every game, every win. 🦊",
        image: ZackMascot,
        color: "from-orange-500 to-red-500",
        bgGlow: "bg-orange-500/30",
        features: ["Dashboard Guide", "Analytics", "Social Integration"],
        alt: "Zack the Engagement Fox mascot - Guiding users through the giveaway experience"
    }
];

export function MascotShowcase() {
    return (
        <section
            className="py-24 relative overflow-hidden"
            id="crew"
            aria-labelledby="mascots-heading"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-primary/5 to-slate-950 pointer-events-none" aria-hidden="true" />

            <div className="container px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <motion.header
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-purple-400 text-sm font-bold mb-4"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-4 h-4" aria-hidden="true" /> MEET THE CREW
                    </motion.span>
                    <h2
                        id="mascots-heading"
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-4"
                    >
                        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Squad</span> Awaits
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Three legends. One mission. <span className="text-white font-semibold">Making giveaways actually fun.</span>
                    </p>
                </motion.header>

                {/* Mascot Cards */}
                <div
                    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    role="list"
                    aria-label="Giveaway App mascot characters"
                >
                    {mascots.map((mascot, idx) => (
                        <motion.article
                            key={mascot.name}
                            initial={{ opacity: 0, y: 50, rotateY: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: idx * 0.15,
                                type: "spring",
                                damping: 20
                            }}
                            whileHover={{
                                y: -15,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                            role="listitem"
                        >
                            {/* Card glow */}
                            <div className={`absolute -inset-2 ${mascot.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} aria-hidden="true" />

                            <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden group-hover:border-white/20 transition-all">
                                {/* Mascot Image */}
                                <div className="relative h-64 flex items-center justify-center overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-b ${mascot.color} opacity-10`} aria-hidden="true" />
                                    <motion.figure
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                                        className="relative z-10"
                                    >
                                        <Image
                                            src={mascot.image}
                                            alt={mascot.alt}
                                            className="w-48 h-48 object-contain drop-shadow-2xl"
                                        />
                                    </motion.figure>
                                </div>

                                {/* Content */}
                                <div className="p-6 text-center">
                                    {/* Name badge */}
                                    <div className={`inline-flex px-4 py-1 rounded-full bg-gradient-to-r ${mascot.color} text-white text-sm font-black mb-3`}>
                                        {mascot.name}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{mascot.role}</h3>
                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                        {mascot.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 justify-center" role="list" aria-label={`${mascot.name}'s capabilities`}>
                                        {mascot.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400"
                                                role="listitem"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Fun CTA */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 text-slate-500"
                    aria-label="More mascot characters coming soon"
                >
                    More characters coming soon... 👀
                </motion.p>
            </div>
        </section>
    );
}
