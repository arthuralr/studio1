import { FileText, UserCheck, BarChart, Package, Rocket, TrendingUp, Gem, ArrowRight } from 'lucide-react';

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {timelineSteps.slice(0, 3).map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <div className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg mb-4">
                        <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold font-headline text-primary mb-2">{step.title}</h3>
                    <p className="text-foreground/80 flex-grow">{step.description}</p>
                </div>
            ))}
             <div className="hidden xl:flex flex-col items-center justify-center">
                <ArrowRight className="w-12 h-12 text-primary/50" />
            </div>
        </div>
        <div className="hidden lg:flex justify-center my-8">
            <svg width="100%" height="40" viewBox="0 0 1200 40" className="text-primary/20">
                <path d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="10 5" />
            </svg>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 mt-12 lg:mt-0">
             <div className="hidden xl:flex flex-col items-center justify-center">
                <ArrowRight className="w-12 h-12 text-primary/50 transform scale-x-[-1]" />
            </div>
            {timelineSteps.slice(3).map((step, index) => (
                <div key={index} className={`flex flex-col items-center text-center ${index === 3 ? 'xl:col-start-2' : ''}`}>
                    <div className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg mb-4">
                        <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold font-headline text-primary mb-2">{step.title}</h3>
                    <p className="text-foreground/80 flex-grow">{step.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
