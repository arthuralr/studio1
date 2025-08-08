import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Target } from "lucide-react";

const cases = [
  {
    title: "Advocacia Exemplo - De Desconhecido a Referência Local",
    challenge: "Dificuldade em atrair clientes para serviços de alto valor, como planejamento societário.",
    solution: "Implementamos o Pacote Ecossistema de Crescimento, com foco em Google Ads para público qualificado e um chatbot para agendamento.",
    results: [
      { icon: TrendingUp, text: "+300% em Leads Qualificados/mês" },
      { icon: Target, text: "Custo por Lead Reduzido em 40%" },
      { icon: Clock, text: "5 novos contratos de Holding fechados em 60 dias" },
    ],
  },
  {
    title: "Consultoria XYZ - Automatizando para Escalar",
    challenge: "Perda de tempo com atendimento inicial e leads que não avançavam no funil.",
    solution: "Implementamos o Pacote Impulso Digital com a adição do Chatbot com IA para filtrar e qualificar os contatos.",
    results: [
      { icon: Clock, text: "8 horas/semana economizadas pela equipe" },
      { icon: TrendingUp, text: "Taxa de conversão para reunião aumentada em 75%" },
      { icon: Target, text: "Ciclo de venda reduzido em 15 dias" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Veja o impacto que geramos na prática
          </h2>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((study, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">O Desafio</h4>
                  <p className="text-foreground/80">{study.challenge}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">A Solução</h4>
                  <p className="text-foreground/80">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Os Resultados</h4>
                  <div className="space-y-3">
                    {study.results.map((result, rIndex) => (
                      <div key={rIndex} className="flex items-center">
                        <result.icon className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="font-medium">{result.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
