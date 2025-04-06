// Ce fichier permet de gérer le layout de la page principale

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

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
          <Navbar>
            <NavbarBrand>
              <Link href="/" className="font-bold text-inherit">ZECROM</Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="/scripts">
                  Scripts
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/propositions">
                  Propositions
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/support">
                  Support
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>
                <Button as={Link} color="primary" href="/contact" variant="flat">
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
