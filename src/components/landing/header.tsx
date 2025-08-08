import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 px-6 md:px-12 bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold font-headline text-primary cursor-pointer">1000leads</span>
        </Link>
        <a href="#contact">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Quero Mais Clientes
          </Button>
        </a>
      </div>
    </header>
  );
}
