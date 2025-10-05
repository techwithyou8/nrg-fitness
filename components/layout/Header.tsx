"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Waarom NRG", href: "/waarom-nrg" },
    { name: "Lidmaatschappen", href: "/lidmaatschappen" },
    { name: "Groepslessen", href: "/groepslessen" },
    { name: "Locaties", href: "/locaties" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="NRG Fitness Logo"
              width={294}
              height={100}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-dark transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/#vip-pass">
              <Button variant="outline" size="sm">
                Gratis VIP Pas
              </Button>
            </Link>
            <Link href="/lidmaatschappen">
              <Button size="sm">Word Lid</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden",
            isMenuOpen ? "block pb-6" : "hidden"
          )}
        >
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/#vip-pass" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Gratis VIP Pas
                </Button>
              </Link>
              <Link href="/lidmaatschappen" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Word Lid</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
