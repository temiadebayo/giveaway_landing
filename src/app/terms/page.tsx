import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Terms of Service & Privacy Policy',
    description: 'Read the terms of service, privacy policy, and disclaimers for the Giveaway App.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500/30">
            <div className="max-w-3xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Terms of Service & Privacy Policy
                    </h1>
                    <p className="text-slate-400 text-lg">Last Updated: February 2026</p>
                </div>

                <div className="space-y-12 text-base leading-relaxed">
                    {/* SECTION 1: TERMS OF SERVICE */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">1. Terms of Service (ToS)</h2>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">1.1 The Platform</h3>
                            <p>
                                The Giveaway App provides an automated system for social media engagement campaigns for businesses, influencers, NGOs, and government institutions.
                            </p>
                            <p>
                                Use of the platform is subject to the selection of a Freemium, Subscription, or Enterprise licensing model.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">1.2 Merit-Based Winner Selection (The "Effort" Clause)</h3>
                            <ul className="list-disc pl-6 space-y-2 text-slate-400">
                                <li><strong className="text-slate-200">No Random Selection:</strong> Users acknowledge that this platform does not utilize random draws or games of chance.</li>
                                <li><strong className="text-slate-200">Participant Effort:</strong> Winners are determined solely by measurable engagement and performance metrics tracked by the platform, such as likes, shares, comments, and registrations.</li>
                                <li><strong className="text-slate-200">The Referee’s Decision:</strong> The platform acts as a technical referee to validate participant effort based on real-time analytics.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">1.3 AI-Powered Fraud & Bot Detection</h3>
                            <ul className="list-disc pl-6 space-y-2 text-slate-400">
                                <li>To ensure fairness, the platform utilizes AI-driven bot detection and machine learning to filter entries.</li>
                                <li>The Giveaway App reserves the right to disqualify any participant flagged for fraudulent activity or automated entry manipulation.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">1.4 Host Responsibilities</h3>
                            <ul className="list-disc pl-6 space-y-2 text-slate-400">
                                <li>Hosts (Businesses, NGOs, Governments) are solely responsible for the legality and fulfillment of any prizes or rewards offered.</li>
                                <li>The Giveaway App is not responsible for the failure of a host to deliver prizes.</li>
                            </ul>
                        </div>
                    </section>

                    {/* SECTION 2: PRIVACY POLICY */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">2. Privacy Policy</h2>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">2.1 Data Collection & Analytics</h3>
                            <ul className="list-disc pl-6 space-y-2 text-slate-400">
                                <li>We collect engagement data (likes, shares, comments) and participant demographics to provide real-time insights for hosts.</li>
                                <li>This data is used to generate optimization recommendations for future campaigns.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">2.2 Security & Compliance</h3>
                            <ul className="list-disc pl-6 space-y-2 text-slate-400">
                                <li>All user data is protected via end-to-end encryption and cloud-based hosting on secure infrastructures.</li>
                                <li>Our data practices are designed to comply with GDPR and CCPA regulations.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">2.3 Third-Party Integrations</h3>
                            <ul className="list-disc pl-6 space-y-2 text-slate-400">
                                <li>The platform integrates with third-party social media APIs (Instagram, X/Twitter, Facebook, etc.).</li>
                                <li>We do not store sensitive account passwords for these third-party platforms.</li>
                            </ul>
                        </div>
                    </section>

                    {/* SECTION 3: DISCLAIMERS */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">3. Disclaimers</h2>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">3.1 Non-Affiliation Disclaimer</h3>
                            <p>
                                The Giveaway App is not affiliated with, sponsored by, or endorsed by Instagram, X (formerly Twitter), Facebook, or any other social media platform utilized for engagement.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">3.2 Professional Services Disclaimer</h3>
                            <ul className="list-disc pl-6 space-y-2 text-slate-400">
                                <li>The platform is a strategic marketing and engagement tool.</li>
                                <li>It is not intended to function as a lottery, gambling service, or sweepstakes.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">3.3 Contact Information</h3>
                            <p>
                                For legal inquiries or partnership discussions, contact the team at{' '}
                                <a href="mailto:mail.giveawayapp@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">mail.giveawayapp@gmail.com</a>
                                {' '}or via WhatsApp at{' '}
                                <a href="https://wa.me/2347065964760" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">+2347065964760</a>.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
                    <p>&copy; {new Date().getFullYear()} Giveaway App. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
