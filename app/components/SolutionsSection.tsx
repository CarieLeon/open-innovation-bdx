'use client';

import { Icon } from "@iconify/react";
import { AnimatedParticles } from "./AnimatedParticles";
import { useEffect, useState } from "react";

export function SolutionsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const solutions = [
    {
      name: "Zabbix",
      description: "Supervision réseau en un clin d'œil",
      icon: "simple-icons:zabbix",
      href: "/scripts/zabbix"
    },
    {
      name: "PostgreSQL / PgAdmin",
      description: "Base de données robuste avec interface de gestion intuitive",
      icon: "simple-icons:postgresql",
      href: "/scripts/postgresql"
    },
    {
      name: "Nextcloud",
      description: "Espace de stockage sécurisé et collaboratif",
      icon: "simple-icons:nextcloud",
      href: "/scripts/nextcloud"
    },
    {
      name: "GLPI",
      description: "Gestion des ressources IT simplifiée",
      icon: "mdi:server",
      href: "/scripts/glpi"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      
      {/* Particules animées */}
      {isClient && <AnimatedParticles />}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-600">
            Nos Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des outils puissants pour optimiser votre infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={solution.href}
                className="block bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon icon={solution.icon} className="text-3xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {solution.name}
                </h3>
                <p className="text-gray-600 text-lg">
                  {solution.description}
                </p>
              </a>
            </div>
          ))}
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