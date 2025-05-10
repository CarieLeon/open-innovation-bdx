"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white">
            Prêt à commencer ?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Découvrez nos scripts et commencez à automatiser dès
            aujourd&apos;hui
          </p>
          <Button
            as={Link}
            href="/scripts"
            size="lg"
            color="default"
            variant="solid"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Icon icon="mdi:rocket-launch" className="mr-2 text-xl" />
            Voir nos scripts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
