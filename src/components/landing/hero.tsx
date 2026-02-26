"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Trophy, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Image from "next/image";
import ZackMascot from "@/assets/Zack_GA_Mascot_1.svg";

const floatingEmojis = ["🎮", "🏆", "💰", "🔥", "⚡", "🎯"];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
            aria-label="Hero section - Skill-based giveaway platform"
            itemScope
            itemType="https://schema.org/WebPage"
        >
            {/* Epic Aurora Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-gradient-to-r from-primary/30 via-purple-500/20 to-secondary/30 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[30%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-l from-cyan-500/20 via-blue-500/20 to-primary/20 rounded-full blur-[130px]"
                />
                <motion.div
                    animate={{
                        x: [0, 30, -20, 0],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/15 via-accent/10 to-primary/20 rounded-full blur-[120px]"
                />

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* Floating Emojis */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                {floatingEmojis.map((emoji, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                        }}
                    >
                        {emoji}
                    </motion.div>
                ))}
            </div>

            <motion.div style={{ y, opacity }} className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <header className="text-center lg:text-left">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-md mb-6"
                        >
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-xl"
                                aria-hidden="true"
                            >
                                🔥
                            </motion.span>
                            <span className="text-sm font-bold text-white tracking-wide">
                                THE FUTURE OF GIVEAWAYS
                            </span>
                        </motion.div>

                        {/* Main Headline - SEO Optimized H1 */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
                            itemProp="headline"
                        >
                            <span className="block">WIN.</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9506FA] via-[#C084FC] to-[#00D4FF] drop-shadow-[0_0_40px_rgba(149,6,250,0.5)]">
                                COMPETE.
                            </span>
                            <span className="block">FLEX.</span>
                        </motion.h1>

                        {/* Subheadline with keywords */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
                            itemProp="description"
                        >
                            Forget random draws. <span className="text-white font-semibold">Actually earn your wins</span> through
                            skill-based games. It&apos;s giving <span className="text-primary">main character energy</span>. ✨
                        </motion.p>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            role="group"
                            aria-label="Call to action buttons"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-xl blur opacity-50 group-hover:opacity-80 transition duration-500" aria-hidden="true" />
                                <Button
                                    variant="gradient"
                                    size="lg"
                                    className="relative h-14 px-8 text-lg font-bold shadow-2xl"
                                    aria-label="Sign up for the app"
                                    onClick={() => window.location.href = 'https://app.trygiveaway.app'}
                                >
                                    Get Started Free 🚀 <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-14 px-8 text-lg border-white/20 hover:bg-white/10"
                                    aria-label="Learn how the giveaway platform works"
                                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    See How It Works
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
                            aria-label="Social proof: 2,200+ users participating"
                        >
                            <div className="flex -space-x-3" aria-hidden="true">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-slate-950 flex items-center justify-center text-xs font-bold"
                                    >
                                        {["😎", "🔥", "💪", "🎮", "⚡"][i - 1]}
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold">2,200+ joined</p>
                                <p className="text-slate-500 text-sm">Winning real prizes</p>
                            </div>
                        </motion.div>
                    </header>

                    {/* Right: Zack Mascot + App Mockup */}
                    <motion.figure
                        initial={{ opacity: 0, x: 50, rotateY: -15 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                        aria-label="Zack the Fox mascot - Your engagement guide"
                    >
                        {/* Glow behind */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-cyan-500/20 blur-[100px] scale-125" aria-hidden="true" />

                        {/* Zack Mascot - Main Hero */}
                        <motion.div
                            className="relative mx-auto w-[400px]"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image
                                src={ZackMascot}
                                alt="Zack the Fox - Your friendly engagement guide mascot for skill-based giveaways"
                                className="w-full drop-shadow-[0_0_50px_rgba(149,6,250,0.4)]"
                                priority
                            />

                            {/* Floating badges around Zack */}
                            <motion.div
                                className="absolute -left-8 top-20 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-3 border border-white/10 shadow-xl"
                                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                aria-hidden="true"
                            >
                                <div className="flex items-center gap-2">
                                    <Trophy className="text-yellow-500 w-5 h-5" />
                                    <span className="text-sm font-bold text-white">1st Place!</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -right-4 top-32 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-3 border border-white/10 shadow-xl"
                                animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
                                transition={{ duration: 3.5, repeat: Infinity }}
                                aria-hidden="true"
                            >
                                <div className="flex items-center gap-2">
                                    <Zap className="text-cyan-400 w-5 h-5" />
                                    <span className="text-sm font-bold text-white">+500 pts</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute left-4 bottom-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-3 shadow-xl shadow-primary/30"
                                animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                                aria-hidden="true"
                            >
                                <div className="flex items-center gap-2">
                                    <Flame className="text-white w-5 h-5" />
                                    <span className="text-sm font-bold text-white">On Fire! 🔥</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute right-0 bottom-32 bg-slate-900/90 backdrop-blur-xl rounded-2xl px-4 py-2 border border-primary/30 shadow-xl"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                aria-hidden="true"
                            >
                                <span className="text-xs text-slate-400">YOUR TAPS</span>
                                <p className="text-2xl font-black bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                                    127
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.figure>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-label="Scroll down for more content"
                role="button"
                tabIndex={0}
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-white rounded-full"
                        animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        aria-hidden="true"
                    />
                </div>
            </motion.div>
        </section>
    );
}
