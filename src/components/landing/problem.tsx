import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MegaphoneOff, Hourglass, TrendingDown, Compass } from "lucide-react";

const problems = [
  {
    icon: MegaphoneOff,
    title: "Marketing que não vende",
    text: "Você investe tempo e dinheiro em posts e anúncios, mas o retorno em clientes reais é quase zero.",
  },
  {
    icon: Hourglass,
    title: "Falta de Tempo",
    text: "Gerenciar o próprio marketing te impede de focar na operação e no atendimento ao cliente.",
  },
  {
    icon: TrendingDown,
    title: "Leads Desqualificados",
    text: "As poucas pessoas que chegam não têm o perfil ideal ou só querem saber o preço.",
  },
  {
    icon: Compass,
    title: "Tecnologia Complicada",
    text: "Ferramentas de CRM, automação e IA parecem um bicho de sete cabeças e você não sabe por onde começar.",
  },
];

export default function Problem() {
  return (
    <section id="problems" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Você se identifica com algum destes desafios?
            </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="text-center bg-background flex flex-col">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <problem.icon className="w-8 h-8" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="mb-2 font-headline text-lg">{problem.title}</CardTitle>
                <p className="text-foreground/80">{problem.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
