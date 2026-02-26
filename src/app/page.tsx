import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ProblemSection } from "@/components/landing/problem";
import { FeaturesSection } from "@/components/landing/features";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { MascotShowcase } from "@/components/landing/mascot-showcase";
import { UseCasesSection } from "@/components/landing/use-cases";
import { WaitlistCTA } from "@/components/landing/waitlist-cta"; // Note: renamed to standard CTA structurally
import { Footer } from "@/components/landing/footer";
import { Preloader } from "@/components/ui/preloader";

export default function Home() {
    return (
        <Preloader>
            <main className="flex min-h-screen flex-col bg-slate-950 text-white selection:bg-primary/30 overflow-x-hidden">
                <Navbar />
                <Hero />
                <ProblemSection />
                <HowItWorksSection />
                <FeaturesSection />
                <MascotShowcase />
                <UseCasesSection />
                <WaitlistCTA />
                <Footer />
            </main>
        </Preloader>
    );
}
