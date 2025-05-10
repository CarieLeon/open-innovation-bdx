'use client';

import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";

interface AnimatedCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export function AnimatedCard({ icon, title, description, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
        <CardHeader className="flex gap-3">
          <Icon icon={icon} className="text-3xl text-primary" />
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>
        <CardBody>
          <p className="text-gray-600">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
} 