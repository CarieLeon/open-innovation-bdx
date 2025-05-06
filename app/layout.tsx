// Ce fichier permet de gérer le layout de la page principale

"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NavbarComponent } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light">
      <body className={inter.className}>
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
