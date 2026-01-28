"use client";

import { motion } from "framer-motion";
import { Skull, Zap, XCircle, CheckCircle2 } from "lucide-react";

const oldWayItems = [
    "Manual tracking in spreadsheets 📊",
    '"Random" selection (trust me bro)',
    "Zero engagement insights",
    "Bots everywhere 🤖",
    "Winners ghost you for DMs",
];

const newWayItems = [
    "100% automated, zero stress 😮‍💨",
    "Skill-based games = fair wins",
    "Real-time analytics that slap",
    "AI catches bots instantly 🚫🤖",
    "Instant wallet payouts 💰",
];

export function ProblemSection() {
    return (
        <section
            className="py-24 relative overflow-hidden"
            id="problem"
            aria-labelledby="problem-heading"
            itemScope
            itemType="https://schema.org/WebPageElement"
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none" aria-hidden="true" />

            <div className="container px-4 md:px-6">
                {/* Section Header */}
                <motion.header
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4"
                        aria-hidden="true"
                    >
                        <Skull className="text-slate-500 w-8 h-8" />
                    </motion.div>
                    <h2
                        id="problem-heading"
                        className="text-4xl md:text-6xl font-black mb-4"
                        itemProp="name"
                    >
                        Old Giveaways are <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Mid</span> 💀
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto" itemProp="description">
                        Random draws? Spreadsheets? Hoping you get picked? <span className="text-white font-semibold">That&apos;s giving 2019 energy.</span>
                    </p>
                </motion.header>

                {/* Comparison Cards */}
                <div
                    className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    role="comparison"
                    aria-label="Comparison between traditional giveaways and our skill-based platform"
                >
                    {/* Old Way Card */}
                    <motion.article
                        initial={{ opacity: 0, x: -30, rotate: -2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 20 }}
                        className="relative"
                        aria-label="Problems with traditional giveaways"
                    >
                        {/* Strikethrough overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none" aria-hidden="true">
                            <div className="w-full h-1 bg-red-500/50 rotate-[-5deg] scale-110" />
                        </div>

                        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-red-500/20 relative opacity-60">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-2xl bg-red-500/10 text-red-400" aria-hidden="true">
                                    <XCircle size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-400">The Boring Way</h3>
                            </div>
                            <ul className="space-y-4" role="list" aria-label="Problems with traditional giveaways">
                                {oldWayItems.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3 text-slate-500"
                                    >
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                                        <span className="line-through">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.article>

                    {/* New Way Card */}
                    <motion.article
                        initial={{ opacity: 0, x: 30, rotate: 2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 20, delay: 0.2 }}
                        className="relative"
                        aria-label="Benefits of skill-based giveaways"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-3xl blur opacity-30" aria-hidden="true" />

                        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-primary/30 overflow-hidden">
                            {/* Badge */}
                            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-bold text-white flex items-center gap-1">
                                <span aria-hidden="true">✨</span> THE MOVE
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-2xl bg-primary/20 text-primary" aria-hidden="true">
                                    <Zap size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">The Giveaway Way</h3>
                            </div>
                            <ul className="space-y-4" role="list" aria-label="Benefits of skill-based giveaways">
                                {newWayItems.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="flex items-start gap-3 text-slate-200"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    );
}
