// Ce fichier permet de gérer le layout de la page principale

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZECROM - Automatisez. Déployez. Innovez.",
  description: "ZECROM est une entreprise spécialisée dans l'automatisation du déploiement de solutions informatiques à travers des scripts Docker prêts à l'emploi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className='light'>
      <body className={inter.className}>
        <Providers>
          <Navbar className="bg-white/80 backdrop-blur-md border-b border-gray-200">
            <NavbarBrand>
              <Link href="/" className="font-bold text-xl flex items-center gap-2">
                <Icon icon="mdi:docker" className="text-primary text-2xl" />
                ZECROM
              </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" className="text-medium">
                    Solutions
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Solutions">
                  <DropdownItem key="zabbix" href="/scripts/zabbix">
                    <div className="flex items-center gap-2">
                      <Icon icon="simple-icons:zabbix" />
                      Zabbix
                    </div>
                  </DropdownItem>
                  <DropdownItem key="nextcloud" href="/scripts/nextcloud">
                    <div className="flex items-center gap-2">
                      <Icon icon="simple-icons:nextcloud" />
                      Nextcloud
                    </div>
                  </DropdownItem>
                  <DropdownItem key="glpi" href="/scripts/glpi">
                    <div className="flex items-center gap-2">
                      <Icon icon="mdi:server" />
                      GLPI
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavbarItem>
                <Link color="foreground" href="/propositions" className="text-medium">
                  Propositions
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/support" className="text-medium">
                  Support
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>
                <Button 
                  as={Link} 
                  color="primary" 
                  href="/contact" 
                  variant="solid"
                  className="bg-gradient-to-r from-primary to-primary-600"
                >
                  Contact
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
