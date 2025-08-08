import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-primary/5 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent -z-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full-extra-dimensions filter blur-3xl opacity-30 animate-blob -z-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full-extra-dimensions filter blur-3xl opacity-30 animate-blob animation-delay-4000 -z-20"></div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
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
        <div className="relative h-80 md:h-[450px] w-full rounded-lg overflow-hidden order-first md:order-last shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8bWFya2V0aW5nfGVufDB8fHx8MTc1NDU1NzAxOXww&ixlib=rb-4.1.0&q=80&w=1080" alt="Marketing digital" fill className="object-cover" data-ai-hint="digital marketing people" />
        </div>
      </div>
    </section>
  );
}


