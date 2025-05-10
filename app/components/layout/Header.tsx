"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/cn";

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

const navigation = [
  { name: "Propositions", href: "/propositions" },
  { name: "Support", href: "/support" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-gray-900/80 backdrop-blur-lg" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 flex items-center space-x-2 p-1.5">
            <Icon icon="mdi:docker" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-white">ZECROM</span>
          </Link>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-gray-800/50">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[800px] p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={solution.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Link href={solution.href} legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-lg border border-gray-200 bg-white/80 p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-3">
                              <div className={`rounded-lg bg-gradient-to-r p-2 ${solution.color}`}>
                                <Icon icon={solution.icon} className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {solution.name}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                  {solution.description}
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-gray-300 hover:text-white hover:bg-gray-800/50"
                  )}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href="/contact"
            className="flex items-center space-x-1 rounded-full bg-gradient-to-r from-primary to-primary-600 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-primary-600"
          >
            Contact
          </Link>
        </div>

        {/* Menu mobile */}
        <div className="flex lg:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-gray-800/50">
                  Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li className="font-medium text-white">Solutions</li>
                    {solutions.map((solution) => (
                      <li key={solution.name}>
                        <Link href={solution.href} legacyBehavior passHref>
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800/50 hover:text-white",
                            "text-gray-300"
                          )}>
                            <div className="flex items-center gap-2">
                              <div className={`rounded-lg bg-gradient-to-r p-1 ${solution.color}`}>
                                <Icon icon={solution.icon} className="h-4 w-4 text-white" />
                              </div>
                              <span>{solution.name}</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                    <li className="font-medium text-white mt-4">Navigation</li>
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800/50 hover:text-white",
                            "text-gray-300"
                          )}>
                            {item.name}
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 rounded-md p-3 text-gray-300 hover:bg-gray-800/50 hover:text-white"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </motion.header>
  );
}
