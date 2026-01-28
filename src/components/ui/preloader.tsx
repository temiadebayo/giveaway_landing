"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoFull from "@/assets/logo_full.png";

export function Preloader({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center"
                    >
                        {/* Core Glow */}
                        <div className="absolute w-64 h-64 bg-primary/30 rounded-full blur-[100px] animate-pulse" />

                        {/* Orbiting Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute w-48 h-48 border border-primary/30 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="absolute w-64 h-64 border border-secondary/20 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute w-80 h-80 border border-accent/10 rounded-full"
                        />

                        {/* Orbiting Dots */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute w-48 h-48"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute w-64 h-64"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full shadow-lg shadow-secondary/50" />
                        </motion.div>

                        {/* Center Logo */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="relative z-10"
                        >
                            <Image
                                src={logoFull}
                                alt="Loading..."
                                width={100}
                                height={100}
                                className="w-20 h-20 object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
                {children}
            </div>
        </>
    );
}
