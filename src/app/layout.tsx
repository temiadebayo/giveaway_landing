import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter"
});

// Comprehensive SEO Metadata
export const metadata: Metadata = {
    // Basic Metadata
    title: {
        default: "Giveaway App - Win. Compete. Flex. | Skill-Based Giveaways",
        template: "%s | Giveaway App"
    },
    description: "The future of giveaways is here! Compete in skill-based games like Tap Challenges to win real prizes. No luck needed—just vibes and speed. 🚀",
    keywords: [
        "giveaway app",
        "skill-based giveaways",
        "tap challenge",
        "win prizes",
        "gaming giveaways",
        "social media giveaways",
        "contest platform",
        "engagement platform",
        "influencer giveaways",
        "brand giveaways",
        "fair giveaways",
        "transparent winner selection",
        "AI giveaway platform",
        "instant payouts",
        "leaderboard competition",
        "Gen Z giveaways",
        "creator economy",
        "community engagement"
    ],
    authors: [{ name: "Giveaway App Team" }],
    creator: "Giveaway App",
    publisher: "Giveaway App",

    // Favicon & Icons
    icons: {
        icon: [
            { url: "/favicon.png", sizes: "any" },
            { url: "/favicon.png", type: "image/png", sizes: "32x32" },
            { url: "/favicon.png", type: "image/png", sizes: "16x16" },
        ],
        apple: [
            { url: "/favicon.png", sizes: "180x180" },
        ],
        shortcut: "/favicon.png",
    },

    // Open Graph (Facebook, LinkedIn, etc.)
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://giveaway.app",
        siteName: "Giveaway App",
        title: "Giveaway App - Win. Compete. Flex. 🏆",
        description: "Forget random draws. Compete in skill-based games to win real prizes. The future of giveaways is here!",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Giveaway App - Skill-Based Giveaways",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Giveaway App - Win. Compete. Flex. 🏆",
        description: "Forget random draws. Compete in skill-based games to win real prizes.",
        images: ["/og-image.png"],
        creator: "@giveawayapp",
        site: "@giveawayapp",
    },

    // Robots & Indexing
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Additional Meta
    category: "Technology",
    classification: "Gaming, Social Media, Contests",

    // App-specific
    applicationName: "Giveaway App",
    referrer: "origin-when-cross-origin",

    // Verification (add your IDs later)
    // verification: {
    //     google: "your-google-verification-code",
    //     yandex: "your-yandex-verification-code",
    // },

    // Alternate languages (for future)
    // alternates: {
    //     canonical: "https://giveaway.app",
    //     languages: {
    //         "en-US": "https://giveaway.app",
    //     },
    // },
};

// Viewport configuration
export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#0f172a" },
        { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    colorScheme: "dark",
};

// JSON-LD Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Giveaway App",
    alternateName: "Giveaway",
    description: "Skill-based giveaway platform where users compete in games like Tap Challenges to win real prizes.",
    url: "https://giveaway.app",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to participate, with premium features available"
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "2200",
        bestRating: "5",
        worstRating: "1"
    },
    author: {
        "@type": "Organization",
        name: "Giveaway App",
        url: "https://giveaway.app"
    },
    potentialAction: {
        "@type": "JoinAction",
        target: "https://app.trygiveaway.app",
        name: "Play Now"
    }
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Giveaway App",
    url: "https://giveaway.app",
    logo: "https://giveaway.app/favicon.png",
    sameAs: [
        "https://twitter.com/giveawayapp",
        "https://instagram.com/giveawayapp",
        "https://tiktok.com/@giveawayapp"
    ],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "English"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />

                {/* Preconnect to important domains */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* DNS Prefetch */}
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            </head>
            <body className={cn(inter.className, "min-h-screen bg-slate-950 text-white antialiased")}>
                {children}
            </body>
        </html>
    );
}
