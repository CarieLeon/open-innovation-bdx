"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { SolutionsMenu } from "./SolutionsMenu";

export function NavbarComponent() {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showPropositions, setShowPropositions] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className="relative">
      <Navbar className="border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Icon icon="mdi:docker" className="text-2xl text-primary" />
            ZECROM
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem>
            <Button
              variant="light"
              className="text-base text-black transition-colors duration-200 hover:bg-gray-100"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              Solutions
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              variant="light"
              className="text-base text-black transition-colors duration-200 hover:bg-gray-100"
              onMouseEnter={() => setShowPropositions(true)}
              onMouseLeave={() => setShowPropositions(false)}
            >
              <Link
                color="foreground"
                href="/propositions"
                className="text-black"
              >
                Propositions
              </Link>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              variant="light"
              className="text-base text-black transition-colors duration-200 hover:bg-gray-100"
              onMouseEnter={() => setShowSupport(true)}
              onMouseLeave={() => setShowSupport(false)}
            >
              <Link color="foreground" href="/support" className="text-black">
                Support
              </Link>
            </Button>
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

      {showSolutions && (
        <div
          onMouseEnter={() => setShowSolutions(true)}
          onMouseLeave={() => setShowSolutions(false)}
        >
          <SolutionsMenu />
        </div>
      )}
    </div>
  );
}
