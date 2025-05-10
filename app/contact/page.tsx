"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { AnimatedParticles } from "../components/AnimatedParticles";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background avec gradient et particules */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900" />
      <AnimatedParticles />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-16 text-center">
            <motion.h1
              className="mb-6 bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-7xl font-bold text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ZECROM
            </motion.h1>
            <motion.p
              className="text-2xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contactez-nous
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-lg"
            >
              <form className="space-y-6">
                <Input
                  label="Nom"
                  variant="bordered"
                  classNames={{
                    label: "text-white",
                    input: "text-white",
                  }}
                />
                <Input
                  label="Email"
                  type="email"
                  variant="bordered"
                  classNames={{
                    label: "text-white",
                    input: "text-white",
                  }}
                />
                <Input
                  label="Sujet"
                  variant="bordered"
                  classNames={{
                    label: "text-white",
                    input: "text-white",
                  }}
                />
                <Textarea
                  label="Message"
                  variant="bordered"
                  minRows={4}
                  classNames={{
                    label: "text-white",
                    input: "text-white",
                  }}
                />
                <Button
                  color="primary"
                  variant="solid"
                  className="w-full bg-gradient-to-r from-primary to-primary-600"
                >
                  Envoyer
                </Button>
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-lg">
                <h2 className="mb-6 text-2xl font-bold text-white">
                  Nos coordonnées
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Icon
                        icon="mdi:email"
                        className="text-2xl text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white">contact@zecrom.fr</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Icon
                        icon="mdi:phone"
                        className="text-2xl text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300">Téléphone</p>
                      <p className="text-white">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Icon
                        icon="mdi:map-marker"
                        className="text-2xl text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300">Adresse</p>
                      <p className="text-white">
                        123 Rue de l&apos;Innovation, 75000 Paris
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-lg">
                <h2 className="mb-6 text-2xl font-bold text-white">
                  Suivez-nous
                </h2>
                <div className="flex gap-4">
                  <Button
                    isIconOnly
                    className="bg-white/10 hover:bg-white/20"
                    as="a"
                    href="#"
                  >
                    <Icon icon="mdi:github" className="text-2xl text-white" />
                  </Button>
                  <Button
                    isIconOnly
                    className="bg-white/10 hover:bg-white/20"
                    as="a"
                    href="#"
                  >
                    <Icon icon="mdi:linkedin" className="text-2xl text-white" />
                  </Button>
                  <Button
                    isIconOnly
                    className="bg-white/10 hover:bg-white/20"
                    as="a"
                    href="#"
                  >
                    <Icon icon="mdi:twitter" className="text-2xl text-white" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
