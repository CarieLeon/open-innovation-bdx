'use client';

import { Button } from "@nextui-org/react";
import { HeroSection } from "./components/HeroSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { SolutionsSection } from "./components/SolutionsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <SolutionsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-xl mb-8">
              Découvrez nos scripts et commencez à automatiser dès aujourd&apos;hui
            </p>
            <Button 
              size="lg" 
              color="default" 
              variant="solid"
              className="bg-white text-primary"
              as="a"
              href="/scripts"
            >
              Voir nos scripts
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 