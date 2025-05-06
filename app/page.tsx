import { AnimatedParticles } from "./components/AnimatedParticles";
import { HeroSection } from "./components/HeroSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { CTASection } from "./components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900" />
        <AnimatedParticles />

        <div className="relative z-10">
          <HeroSection />
          <WhyChooseSection />
          <SolutionsSection />
          <CTASection />
        </div>
      </div>
    </main>
  );
}
