'use client';

import { Icon } from "@iconify/react";
import { AnimatedParticles } from "./AnimatedParticles";

export function WhyChooseSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      {/* Particules animées */}
      <AnimatedParticles />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-600">
            Pourquoi Choisir ZECROM ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions innovantes pour simplifier votre infrastructure IT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon icon="mdi:clock-fast" className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gain de temps</h3>
              <p className="text-gray-600 text-lg">
                Déploiements en quelques commandes, sans configuration complexe
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon icon="mdi:puzzle" className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Modularité</h3>
              <p className="text-gray-600 text-lg">
                Scripts adaptables à vos besoins spécifiques et évolutifs
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon icon="mdi:headset" className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Support</h3>
              <p className="text-gray-600 text-lg">
                Une communauté active et une documentation complète à votre disposition
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
} 