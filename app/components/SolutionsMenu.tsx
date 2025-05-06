"use client";

import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const solutions = [
  {
    name: "Zabbix",
    description: "Supervision réseau en un clin d'œil",
    icon: "simple-icons:zabbix",
    href: "/scripts/zabbix",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "PostgreSQL / PgAdmin",
    description: "Base de données robuste avec interface de gestion intuitive",
    icon: "simple-icons:postgresql",
    href: "/scripts/postgresql",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Nextcloud",
    description: "Espace de stockage sécurisé et collaboratif",
    icon: "simple-icons:nextcloud",
    href: "/scripts/nextcloud",
    color: "from-green-500 to-green-600",
  },
  {
    name: "GLPI",
    description: "Gestion des ressources IT simplifiée",
    icon: "mdi:server",
    href: "/scripts/glpi",
    color: "from-purple-500 to-purple-600",
  },
];

export function SolutionsMenu() {
  return (
    <div className="absolute left-0 right-0 top-full border-t border-gray-200 bg-white/80 shadow-lg backdrop-blur-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full transition-shadow duration-300 hover:shadow-xl"
                isPressable
                as="a"
                href={solution.href}
              >
                <CardHeader className="flex gap-3">
                  <div
                    className={`rounded-lg bg-gradient-to-r p-2 ${solution.color}`}
                  >
                    <Icon
                      icon={solution.icon}
                      className="text-2xl text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-bold">{solution.name}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600">{solution.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
