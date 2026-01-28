"use client";

import { motion } from "framer-motion";
import { Users, Building2, Mic2, Heart, Sparkles, Crown } from "lucide-react";

const audiences = [
    {
        icon: Crown,
        title: "Creators & Influencers",
        description: "Blow up your engagement. Give back to your community in style.",
        emoji: "👑",
        gradient: "from-pink-500 to-rose-500",
        stats: "10x more engagement",
        keywords: "influencer giveaways, creator economy, community engagement"
    },
    {
        icon: Building2,
        title: "Brands & Startups",
        description: "Launch products with a bang. Real users, real hype.",
        emoji: "🚀",
        gradient: "from-blue-500 to-cyan-500",
        stats: "5x cheaper than ads",
        keywords: "brand marketing, product launch, startup giveaways"
    },
    {
        icon: Mic2,
        title: "Event Organizers",
        description: "Make your event unforgettable. QR drops and live competitions.",
        emoji: "🎪",
        gradient: "from-purple-500 to-violet-500",
        stats: "2x crowd energy",
        keywords: "event giveaways, live competitions, QR code contests"
    },
    {
        icon: Heart,
        title: "NGOs & Causes",
        description: "Fundraise different. Engage donors, spread awareness.",
        emoji: "💜",
        gradient: "from-primary to-secondary",
        stats: "3x donor retention",
        keywords: "nonprofit giveaways, fundraising, charity engagement"
    }
];

export function UseCasesSection() {
    return (
        <section
            className="py-24 relative overflow-hidden"
            id="vibes"
            aria-labelledby="use-cases-heading"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <meta itemProp="name" content="Who Uses Giveaway App" />
            <meta itemProp="description" content="Giveaway App is perfect for creators, brands, event organizers, and nonprofits looking to boost engagement." />

            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" aria-hidden="true" />

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
                        <Sparkles className="w-4 h-4" aria-hidden="true" /> FOR EVERYONE
                    </motion.span>
                    <h2
                        id="use-cases-heading"
                        className="text-4xl md:text-6xl font-black mb-4"
                    >
                        Everyone&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Invited</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Creators. Brands. Events. Causes. <span className="text-white font-semibold">If you&apos;ve got something to give, we&apos;ve got you.</span>
                    </p>
                </motion.header>

                {/* Audience Cards */}
                <div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                    role="list"
                    aria-label="Target audiences for Giveaway App"
                >
                    {audiences.map((audience, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 40, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: idx * 0.1,
                                type: "spring",
                                damping: 20
                            }}
                            whileHover={{
                                y: -12,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                            role="listitem"
                            itemScope
                            itemType="https://schema.org/ListItem"
                            itemProp="itemListElement"
                        >
                            <meta itemProp="position" content={String(idx + 1)} />
                            <meta itemProp="keywords" content={audience.keywords} />

                            {/* Glow effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${audience.gradient} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`} aria-hidden="true" />

                            <div className="relative h-full bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-3xl p-6 group-hover:border-white/20 transition-all overflow-hidden">
                                {/* Background gradient on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} aria-hidden="true" />

                                {/* Emoji */}
                                <motion.div
                                    className="text-4xl mb-4"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                                    aria-hidden="true"
                                >
                                    {audience.emoji}
                                </motion.div>

                                {/* Icon */}
                                <motion.div
                                    className={`p-3 w-fit rounded-xl bg-gradient-to-br ${audience.gradient} mb-4 shadow-lg`}
                                    whileHover={{ scale: 1.1, rotate: -10 }}
                                    aria-hidden="true"
                                >
                                    <audience.icon className="text-white w-6 h-6" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-lg font-bold mb-2 text-white" itemProp="name">{audience.title}</h3>
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed" itemProp="description">
                                    {audience.description}
                                </p>

                                {/* Stats badge */}
                                <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${audience.gradient} bg-opacity-20 text-xs font-bold text-white/90`}>
                                    {audience.stats}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
