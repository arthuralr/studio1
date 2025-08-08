import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary !leading-tight mb-4">
            Seu negócio não atrai clientes pela internet?
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-foreground/80 mb-8">
            Nós criamos o ecossistema digital completo para você gerar leads qualificados todos os dias e focar no que realmente importa: fechar vendas.
            </p>
            <a href="#packages">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-transform">
                QUERO ATRAIR MAIS CLIENTES
            </Button>
            </a>
        </div>
        <div className="relative h-80 md:h-full w-full rounded-lg overflow-hidden order-first md:order-last">
            <Image src="https://placehold.co/600x600.png" alt="Marketing digital" fill className="object-cover" data-ai-hint="digital marketing people" />
        </div>
      </div>
    </section>
  );
}
