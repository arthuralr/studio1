import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Image from "next/image";

const impulsePackage = {
  title: "Pacote Impulso Digital",
  image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzZXJ2aWNlfGVufDB8fHx8MTc1NDY0ODYzMXww&ixlib=rb-4.1.0&q=80&w=1080",
  imageHint: "digital marketing",
  description: "A base completa para sua empresa ser encontrada, gerar confiança e começar a atrair clientes online.",
  features: [
    "Site/Página de Captura Profissional",
    "Gestão de Tráfego (Google & Meta)",
    "8 Posts Estratégicos por Mês",
    "Otimização do Perfil no Google",
    "Implementação de CRM",
    "SEO Local Básico",
    "Relatório Mensal de Performance",
  ],
  cta: "QUERO ESTE PACOTE",
};

const ecosystemPackage = {
  title: "Pacote Ecossistema de Crescimento",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwwfHx8fDE3NTQ2NTI5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  imageHint: "business growth",
  description: "A solução definitiva para quem busca escalar, automatizar o atendimento e transformar clientes em uma máquina de indicações.",
  features: [
    "TUDO do Pacote Impulso Digital",
    "Chatbot com IA para Atendimento 24/7",
    "Agente de IA Personalizado",
    "Programa de Indicações Estratégico",
    "Campanhas de E-mail Marketing",
    "Campanhas de Retargeting",
    "Consultoria Estratégica Mensal",
  ],
  cta: "QUERO O PACOTE COMPLETO",
};

export default function Solution() {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                Nossos Planos de Ação para o seu Crescimento
            </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          <Card className="flex flex-col overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-2xl text-primary">{impulsePackage.title}</CardTitle>
              <CardDescription>{impulsePackage.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="relative aspect-video rounded-md overflow-hidden mb-6">
                 <Image src={impulsePackage.image} alt={impulsePackage.title} fill className="object-cover" data-ai-hint={impulsePackage.imageHint} />
              </div>
              <ul className="space-y-3">
                {impulsePackage.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
                <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="#contact">{impulsePackage.cta}</a>
                </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-2 border-primary relative shadow-2xl overflow-hidden">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary z-10">MAIS POPULAR</Badge>
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-2xl text-primary">{ecosystemPackage.title}</CardTitle>
              <CardDescription>{ecosystemPackage.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
                <div className="relative aspect-video rounded-md overflow-hidden mb-6">
                    <Image src={ecosystemPackage.image} alt={ecosystemPackage.title} fill className="object-cover" data-ai-hint={ecosystemPackage.imageHint} />
                </div>
              <ul className="space-y-3">
                {ecosystemPackage.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className={index === 0 ? "font-bold" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="#contact">{ecosystemPackage.cta}</a>
                </Button>
            </CardFooter>
          </Card>

        </div>
      </div>
    </section>
  );
}
