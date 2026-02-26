"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import Image from "next/image";
import FredMascot from "@/assets/Fred_GA_Mascot.svg";
import NatMascot from "@/assets/Nat_GA_Mascot.svg";

export function WaitlistCTA() {
    return (
        <section
            className="py-32 relative overflow-hidden"
            id="start"
            aria-labelledby="cta-heading"
        >
            {/* Epic background */}
            <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-primary/10 to-slate-950" />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
            </div>

            {/* Floating Mascots */}
            <motion.figure
                className="absolute left-4 md:left-16 top-1/4 w-32 md:w-48 opacity-80"
                animate={{
                    y: [0, -20, 0],
                    rotate: [-5, 5, -5]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
            >
                <Image
                    src={FredMascot}
                    alt=""
                    className="drop-shadow-[0_0_30px_rgba(149,6,250,0.5)]"
                />
            </motion.figure>

            <motion.figure
                className="absolute right-4 md:right-16 top-1/3 w-32 md:w-48 opacity-80"
                animate={{
                    y: [0, 15, 0],
                    rotate: [5, -5, 5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
            >
                <Image
                    src={NatMascot}
                    alt=""
                    className="drop-shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                />
            </motion.figure>

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 mb-8"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Rocket className="w-4 h-4 text-primary" aria-hidden="true" />
                        <span className="text-sm font-bold text-white">IT&apos;S LIVE</span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h2
                        id="cta-heading"
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-cyan-400 drop-shadow-[0_0_40px_rgba(149,6,250,0.5)]">
                            Go Viral?
                        </span>
                    </motion.h2>

                    {/* Subheadline */}
                    <motion.p
                        className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Start competing for real cash prizes today.{" "}
                        <span className="text-white font-bold">Free to play.</span>{" "}
                        Real winners. <span className="text-primary">No cap.</span>
                    </motion.p>

                    {/* Call to action button */}
                    <motion.div
                        className="flex justify-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition" aria-hidden="true" />
                            <Button
                                variant="gradient"
                                size="lg"
                                className="relative w-full sm:w-auto h-16 px-12 text-2xl font-black shadow-2xl shadow-primary/30"
                                aria-label="Sign up for the app"
                                onClick={() => window.location.href = 'https://app.trygiveaway.app'}
                            >
                                Play Now <ArrowRight className="ml-3 h-6 w-6" aria-hidden="true" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Social proof */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4"
                        aria-label="2,200+ people already playing"
                    >
                        <div className="flex -space-x-2" aria-hidden="true">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-slate-950 flex items-center justify-center text-xs"
                                >
                                    {["🔥", "💪", "😎", "🎮", "⚡", "🏆"][i - 1]}
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-400 text-sm">
                            <span className="text-white font-bold">2,200+</span> already signed up. Join the action.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
