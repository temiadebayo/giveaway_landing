"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
    "No more spreadsheet nightmares",
    "100% fair winner selection",
    "Instant prize distribution",
    "Bank-grade security",
    "Works on all devices",
    "Real-time fraud protection"
];

export function BenefitsSection() {
    return (
        <section className="py-24 border-y border-white/5 bg-white/[0.02]">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Why Top Creators <br />
                            <span className="text-primary">Switch to Giveaway</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">
                            Focus on creating content and engaging your audience. Let us handle the logistics, security, and payouts.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-[100px] opacity-20" />
                        <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
                            <p className="text-slate-500 font-mono text-sm">[Demo Dashboard Placeholder]</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
