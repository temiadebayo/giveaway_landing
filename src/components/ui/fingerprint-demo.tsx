"use client";

/**
 * Fingerprint Demo Component
 * 
 * This component demonstrates the fingerprinting system.
 * Use it to test fingerprint generation and see what signals are collected.
 * 
 * Add to any page: <FingerprintDemo />
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFingerprint } from "@/hooks/use-fingerprint";
import {
    Fingerprint,
    Monitor,
    Cpu,
    Globe,
    Shield,
    RefreshCw,
    CheckCircle,
    AlertCircle,
    Loader2,
    ChevronDown,
    ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FingerprintDemo() {
    const { fingerprint, deviceInfo, isLoading, error, refresh } = useFingerprint();
    const [expanded, setExpanded] = useState(false);

    if (error) {
        return (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <p>Failed to generate fingerprint: {error.message}</p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Fingerprint className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Device Fingerprint</h3>
                        <p className="text-sm text-slate-400">Fair Play System™ - Powered by Nat</p>
                    </div>
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={refresh}
                    disabled={isLoading}
                    className="text-slate-400 hover:text-white"
                >
                    {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        <RefreshCw className="w-4 h-4" />
                    )}
                </Button>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <span className="ml-3 text-slate-400">Generating fingerprint...</span>
                </div>
            ) : fingerprint ? (
                <>
                    {/* Main Hash */}
                    <div className="bg-white/5 rounded-xl p-4 mb-4">
                        <p className="text-xs text-slate-500 mb-1">Device Hash (SHA-256)</p>
                        <p className="font-mono text-sm text-primary break-all">
                            {fingerprint.hash}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {/* Confidence */}
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                                <Shield className="w-4 h-4 text-green-400" />
                                <span className="text-xs text-slate-400">Confidence</span>
                            </div>
                            <p className="text-2xl font-bold text-white">{fingerprint.confidence}%</p>
                        </div>

                        {/* Device Type */}
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                                <Monitor className="w-4 h-4 text-blue-400" />
                                <span className="text-xs text-slate-400">Device</span>
                            </div>
                            <p className="text-lg font-bold text-white">
                                {deviceInfo?.isMobile ? "Mobile" : deviceInfo?.isTablet ? "Tablet" : "Desktop"}
                            </p>
                        </div>

                        {/* OS */}
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                                <Cpu className="w-4 h-4 text-purple-400" />
                                <span className="text-xs text-slate-400">OS</span>
                            </div>
                            <p className="text-lg font-bold text-white">{deviceInfo?.os}</p>
                        </div>

                        {/* Browser */}
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                                <Globe className="w-4 h-4 text-cyan-400" />
                                <span className="text-xs text-slate-400">Browser</span>
                            </div>
                            <p className="text-lg font-bold text-white">{deviceInfo?.browser}</p>
                        </div>
                    </div>

                    {/* Component Hashes (Collapsible) */}
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="w-full flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <span className="text-sm font-medium text-slate-300">
                            Fingerprint Components
                        </span>
                        {expanded ? (
                            <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                    </button>

                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-3 space-y-2">
                                    {/* Canvas */}
                                    <ComponentRow
                                        label="Canvas"
                                        value={fingerprint.components.canvas.hash}
                                        success={fingerprint.components.canvas.hash !== 'error'}
                                    />

                                    {/* WebGL */}
                                    <ComponentRow
                                        label="WebGL"
                                        value={fingerprint.components.webgl.unmaskedRenderer || 'Not available'}
                                        success={fingerprint.components.webgl.unmaskedRenderer !== 'error'}
                                    />

                                    {/* Audio */}
                                    <ComponentRow
                                        label="Audio"
                                        value={fingerprint.components.audio.hash}
                                        success={fingerprint.components.audio.hash !== 'error'}
                                    />

                                    {/* Screen */}
                                    <ComponentRow
                                        label="Screen"
                                        value={`${fingerprint.components.screen.width}x${fingerprint.components.screen.height} @${fingerprint.components.screen.pixelRatio}x`}
                                        success={true}
                                    />

                                    {/* Timezone */}
                                    <ComponentRow
                                        label="Timezone"
                                        value={fingerprint.components.timezone.timezone}
                                        success={true}
                                    />

                                    {/* Hardware */}
                                    <ComponentRow
                                        label="Hardware"
                                        value={`${fingerprint.components.browser.hardwareConcurrency} cores, ${fingerprint.components.browser.deviceMemory || '?'}GB RAM`}
                                        success={fingerprint.components.browser.hardwareConcurrency > 0}
                                    />

                                    {/* Fonts */}
                                    <ComponentRow
                                        label="Fonts Detected"
                                        value={`${fingerprint.components.fonts.length} fonts`}
                                        success={fingerprint.components.fonts.length > 0}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Generated At */}
                    <p className="text-xs text-slate-600 text-center mt-4">
                        Generated: {new Date(fingerprint.generatedAt).toLocaleString()}
                    </p>
                </>
            ) : null}
        </motion.div>
    );
}

// Helper component for displaying component rows
function ComponentRow({
    label,
    value,
    success
}: {
    label: string;
    value: string;
    success: boolean;
}) {
    return (
        <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
            <div className="flex items-center gap-2">
                {success ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                )}
                <span className="text-sm text-slate-400">{label}</span>
            </div>
            <span className="text-xs text-slate-300 font-mono truncate max-w-[200px]">
                {value.length > 30 ? value.substring(0, 30) + '...' : value}
            </span>
        </div>
    );
}
