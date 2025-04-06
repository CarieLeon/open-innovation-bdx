'use client';

import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { TextHoverEffect } from "@/(landing-page)/components/ui/text-hover-effect";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
      
      {/* Particules animées */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Logo ZECROM avec effet de survol */}
        <div className="h-40 w-full mb-8">
          <TextHoverEffect text="ZECROM" duration={0.2} />
        </div>

        {/* Slogan avec animation */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
        >
          Automatisez. Déployez. Innovez.
        </motion.p>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          ZECROM est une entreprise spécialisée dans l&apos;automatisation du déploiement de solutions informatiques à travers des scripts Docker prêts à l&apos;emploi.
        </motion.p>

        {/* Boutons d'action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            color="primary" 
            className="bg-gradient-to-r from-primary to-primary-600 text-white px-8 py-6 text-lg font-semibold"
            as="a"
            href="/scripts"
          >
            Découvrir nos solutions
          </Button>
          <Button 
            size="lg" 
            variant="bordered"
            className="border-primary text-primary px-8 py-6 text-lg font-semibold"
            as="a"
            href="/contact"
          >
            Nous contacter
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 