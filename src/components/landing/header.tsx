"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#packages", label: "Planos" },
  { href: "#features", label: "Recursos" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#cases", label: "Cases de Sucesso" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-12 bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold font-headline text-primary cursor-pointer">
            1000leads
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="text-sm font-medium hover:text-primary transition-colors">
                {link.label}
              </span>
            </Link>
          ))}
          <a href="#contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Quero Mais Clientes
            </Button>
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="p-6 h-full flex flex-col">
                <div className="mb-8">
                   <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-2xl font-bold font-headline text-primary cursor-pointer">
                      1000leads
                    </span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
                 <a href="#contact" className="mt-auto">
                    <Button onClick={() => setIsMenuOpen(false)} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Quero Mais Clientes
                    </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
