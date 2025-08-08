import { FileText, UserCheck, BarChart, Package, Rocket, TrendingUp, Gem } from 'lucide-react';

const timelineSteps = [
  {
    icon: FileText,
    title: "1. Contato Inicial",
    description: "Você preenche o formulário ou nos chama no WhatsApp, dando o primeiro passo para transformar seus resultados.",
  },
  {
    icon: UserCheck,
    title: "2. Sessão Estratégica",
    description: "Um de nossos consultores entra em contato para entender seu negócio, suas metas e desafios atuais.",
  },
  {
    icon: BarChart,
    title: "3. Diagnóstico Gratuito",
    description: "Nossa equipe analisa seu cenário e apresenta um diagnóstico completo com um plano de ação, sem custo ou compromisso.",
  },
  {
    icon: Package,
    title: "4. Escolha do Plano",
    description: "Com o plano em mãos, você decide contratar o pacote que melhor se alinha com seus objetivos de crescimento.",
  },
  {
    icon: Rocket,
    title: "5. Implementação",
    description: "Colocamos a mão na massa! Configuramos as ferramentas e iniciamos as campanhas e a produção de conteúdo.",
  },
  {
    icon: TrendingUp,
    title: "6. Primeiros Leads",
    description: "Você começa a receber contatos de clientes realmente interessados em seus produtos e serviços, direto no seu WhatsApp ou CRM.",
  },
  {
    icon: Gem,
    title: "7. Vendas e Crescimento",
    description: "Com um fluxo constante de oportunidades, sua empresa começa a vender mais e a alcançar resultados incríveis.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Sua Jornada para o Sucesso em 7 Passos Simples
          </h2>
          <p className="text-lg text-foreground/80 mt-2 max-w-3xl mx-auto">
            Veja como transformamos seu interesse inicial em resultados concretos.
          </p>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

          <div className="space-y-12 md:space-y-0">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="md:flex md:items-center md:justify-center">
                  {/* Icon and Connector */}
                  <div className={`flex items-center justify-center w-full md:w-auto ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                    <div className="flex-grow border-t-2 border-border md:hidden"></div>
                    <div className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg z-10">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-grow border-t-2 border-border md:hidden"></div>
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className={`hidden md:block w-1/4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-2'}`}></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/3 mt-6 md:mt-0 px-4 ${index % 2 === 0 ? 'md:order-3 text-left' : 'md:order-1 text-left md:text-right'}`}>
                    <h3 className="text-xl font-bold font-headline text-primary mb-2">{step.title}</h3>
                    <p className="text-foreground/80">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
