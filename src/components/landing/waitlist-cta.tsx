"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Loader2 } from "lucide-react";
import Image from "next/image";
import FredMascot from "@/assets/Fred_GA_Mascot.svg";
import NatMascot from "@/assets/Nat_GA_Mascot.svg";
import { useState } from "react";
import { WaitlistSuccessModal } from "@/components/ui/waitlist-success-modal";

export function WaitlistCTA() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes("@")) {
            setStatus("error");
            setMessage("Please enter a valid email");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, source: "waitlist-cta" }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setSubmittedEmail(email);
                setShowModal(true);
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Network error. Please try again.");
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setStatus("idle");
    };

    return (
        <>
            <WaitlistSuccessModal
                isOpen={showModal}
                onClose={handleCloseModal}
                email={submittedEmail}
            />

            <section
                className="py-32 relative overflow-hidden"
                id="waitlist"
                aria-labelledby="cta-heading"
                itemScope
                itemType="https://schema.org/JoinAction"
            >
                <meta itemProp="name" content="Join Giveaway App Waitlist" />
                <meta itemProp="description" content="Sign up for early access to the skill-based giveaway platform. Get 3 months free on launch." />

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
                            <span className="text-sm font-bold text-white">LAUNCHING SOON</span>
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
                            Join the waitlist now. Early birds get{" "}
                            <span className="text-white font-bold">3 months FREE</span>{" "}
                            + exclusive beta access. <span className="text-primary">No cap.</span>
                        </motion.p>

                        {/* CTA Form */}
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-4"
                            aria-label="Waitlist signup form"
                            itemProp="target"
                            onSubmit={handleSubmit}
                        >
                            <div className="relative flex-1 group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition" aria-hidden="true" />
                                <label htmlFor="waitlist-email" className="sr-only">Email address for waitlist</label>
                                <input
                                    id="waitlist-email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="drop your email..."
                                    required
                                    disabled={status === "loading"}
                                    aria-required="true"
                                    className="relative w-full h-14 px-6 rounded-xl bg-slate-900 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-slate-500 text-lg disabled:opacity-50"
                                />
                            </div>
                            <motion.div
                                whileHover={{ scale: status === "loading" ? 1 : 1.05 }}
                                whileTap={{ scale: status === "loading" ? 1 : 0.95 }}
                            >
                                <Button
                                    type="submit"
                                    variant="gradient"
                                    size="lg"
                                    disabled={status === "loading"}
                                    className="h-14 px-8 text-lg font-bold shadow-2xl shadow-primary/30 disabled:opacity-70"
                                    aria-label="Submit email to join waitlist"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Joining...
                                        </>
                                    ) : (
                                        <>
                                            I&apos;m In! <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                                        </>
                                    )}
                                </Button>
                            </motion.div>
                        </motion.form>

                        {/* Error message */}
                        {status === "error" && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-sm mb-4"
                            >
                                {message}
                            </motion.p>
                        )}

                        {/* Social proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-center gap-4"
                            aria-label="2,200+ people have already joined the waitlist"
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
                                <span className="text-white font-bold">2,200+</span> already waiting. Don&apos;t miss out.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
