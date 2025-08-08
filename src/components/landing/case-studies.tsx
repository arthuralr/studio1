import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, Clock, Target, Users, ShoppingCart, BarChart } from "lucide-react";
import Image from "next/image";

const cases = [
  {
    title: "Martins & Oliveira Advocacia - De Desconhecido a Referência Local",
    challenge: "Dificuldade em atrair clientes para serviços de alto valor, como planejamento societário.",
    solution: "Implementamos o Pacote Ecossistema de Crescimento, com foco em Google Ads para público qualificado e um chatbot para agendamento.",
    image: "https://images.unsplash.com/photo-1576078855245-301a0bf949cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8YWR2b2dhZG98ZW58MHx8fHwxNzU0NjQ5NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "law office",
    results: [
      { icon: TrendingUp, text: "+300% em Leads Qualificados/mês" },
      { icon: Target, text: "Custo por Lead Reduzido em 40%" },
      { icon: Clock, text: "5 novos contratos de Holding fechados em 60 dias" },
    ],
  },
  {
    title: "Vector Growth - Automatizando para Escalar",
    challenge: "Perda de tempo com atendimento inicial e leads que não avançavam no funil.",
    solution: "Implementamos o Pacote Impulso Digital com a adição do Chatbot com IA para filtrar e qualificar os contatos.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8bWFya2V0aW5nfGVufDB8fHx8MTc1NDU1NzAxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "business consulting",
    results: [
      { icon: Clock, text: "8 horas/semana economizadas pela equipe" },
      { icon: TrendingUp, text: "Taxa de conversão para reunião aumentada em 75%" },
      { icon: Target, text: "Ciclo de venda reduzido em 15 dias" },
    ],
  },
  {
    title: "Clínica Renovare - Agendas Cheias e Pacientes Satisfeitos",
    challenge: "Baixa visibilidade online e dificuldade para atrair novos pacientes para procedimentos estéticos.",
    solution: "Criamos uma página de captura otimizada e campanhas de Meta Ads segmentadas por interesse e localização.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbCVDMyVBRG5pY2F8ZW58MHx8fHwxNzU0NjQ5NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "beauty clinic",
    results: [
        { icon: Users, text: "+50 Novos Pacientes no 1º Mês" },
        { icon: Target, text: "Aumento de 200% na procura por agendamentos" },
        { icon: TrendingUp, text: "ROI de 5x sobre o investimento em anúncios" },
    ]
  },
  {
      title: "Sofistiqué Boutique - E-commerce de Moda Decolando",
      challenge: "Carrinhos abandonados e dificuldade em transformar seguidores das redes sociais em clientes.",
      solution: "Aplicamos o Pacote Ecossistema de Crescimento, com foco em retargeting e e-mail marketing para recuperação de carrinho.",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8RS1jb21tZXJjZXxlbnwwfHx8fDE3NTQ2NDk3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "fashion boutique",
      results: [
          { icon: ShoppingCart, text: "+120% de Aumento nas Vendas Online" },
          { icon: Target, text: "Redução de 60% na taxa de abandono de carrinho" },
          { icon: BarChart, text: "Aumento de 35% no Ticket Médio por cliente" },
      ]
  },
  {
      title: "Alpha Engenharia - Conquistando Grandes Projetos B2B",
      challenge: "Dificuldade em alcançar decisores em grandes empresas e gerar propostas para projetos de alto valor.",
      solution: "Desenvolvemos uma estratégia de conteúdo no LinkedIn e Google Ads com foco em cargos e setores específicos (B2B).",
      image: "https://images.unsplash.com/photo-1570470836811-78ef04bb23d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxlbmdlbmhlaXJvfGVufDB8fHx8MTc1NDY0OTg2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "engineering office",
      results: [
          { icon: TrendingUp, text: "Geração de 8 Oportunidades de Contratos B2B/mês" },
          { icon: Users, text: "Alcance a +500 decisores qualificados" },
          { icon: Clock, text: "Pipeline de vendas R$ 1.5M+ em 3 meses" },
      ]
  }
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent>
            {cases.map((study, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3 p-4">
                <Card className="flex flex-col h-full overflow-hidden">
                    <div className="relative w-full h-48">
                        <Image src={study.image} alt={study.title} fill className="object-cover" data-ai-hint={study.imageHint}/>
                    </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary h-16">{study.title}</CardTitle>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
