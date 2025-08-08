import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/#packages", label: "Planos" },
  { href: "/#features", label: "Recursos" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#cases", label: "Cases" },
  { href: "/#faq", label: "Dúvidas" },
  { href: "/schedule", label: "Agendar Reunião" },
];

export default function Footer() {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center px-6">
        <p className="font-semibold text-lg">1000leads</p>
        <nav className="my-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                    <span className="text-sm hover:opacity-80 transition-opacity">{link.label}</span>
                </Link>
            ))}
        </nav>
        <div className="flex justify-center gap-4 my-4">
            <Link href="https://www.facebook.com/share/1Bqgd4skD8/" target="_blank" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-primary-foreground hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://www.instagram.com/1000leadsagenciamkt/" target="_blank" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-primary-foreground hover:opacity-80 transition-opacity" />
            </Link>
        </div>
        <p className="text-sm opacity-80">
          CNPJ: 60.745.275/0001-00 | Andre Luiz da Rosa
        </p>
        <p className="text-sm opacity-80 mt-2">
          Travessa Herbert 32 - Passo das Pedras, Gravataí - RS, 94035-210
        </p>
        <p className="mt-4 text-xs opacity-70">&copy; {new Date().getFullYear()} 1000leads. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
