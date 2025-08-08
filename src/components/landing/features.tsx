import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Filter,
  Megaphone,
  MapPin,
  ListChecks,
  AreaChart,
  Bot,
  BrainCircuit,
  Users,
  Mail,
  RefreshCw,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Site/Página de Captura Profissional",
    text: "Sua vitrine digital 24h por dia. Um site profissional gera credibilidade e transforma visitantes em contatos interessados.",
  },
  {
    icon: Filter,
    title: "Gestão de Tráfego (Google & Meta)",
    text: "Atraímos o público certo, no momento certo. Direcionamos seus anúncios para quem realmente busca seus serviços, gerando leads mais quentes.",
  },
  {
    icon: Megaphone,
    title: "8 Posts Estratégicos por Mês",
    text: "Construímos sua autoridade e mantemos sua marca viva na mente dos clientes, criando conteúdo que engaja e educa.",
  },
  {
    icon: MapPin,
    title: "Otimização do Perfil no Google",
    text: "Colocamos seu negócio no mapa. Ser encontrado facilmente no Google é o primeiro passo para atrair clientes locais.",
  },
  {
    icon: ListChecks,
    title: "Implementação de CRM",
    text: "Organizamos seus contatos e oportunidades de negócio para que nenhum lead se perca. Um processo de vendas claro e eficiente.",
  },
  {
    icon: AreaChart,
    title: "SEO Local Básico",
    text: "Otimizamos seu site para buscas locais, garantindo que sua empresa apareça na frente dos concorrentes na sua região.",
  },
  {
    icon: Bot,
    title: "Chatbot com IA para Atendimento 24/7",
    text: "Seu vendedor incansável. O chatbot qualifica leads e responde dúvidas instantaneamente, mesmo fora do horário comercial.",
  },
  {
    icon: BrainCircuit,
    title: "Agente de IA Personalizado",
    text: "Automatizamos tarefas repetitivas com uma IA treinada para seu negócio, liberando sua equipe para focar em fechar vendas.",
  },
  {
    icon: Users,
    title: "Programa de Indicações Estratégico",
    text: "Transformamos clientes satisfeitos em uma fonte constante de novos negócios, criando um ciclo de crescimento viral.",
  },
  {
    icon: Mail,
    title: "Campanhas de E-mail Marketing",
    text: "Nutrimos o relacionamento com seus leads e clientes, mantendo-os engajados e prontos para comprar.",
  },
  {
    icon: RefreshCw,
    title: "Campanhas de Retargeting",
    text: "Reconectamos com visitantes que não compraram na primeira visita, aumentando drasticamente suas chances de conversão.",
  },
  {
    icon: MessageCircle,
    title: "Consultoria Estratégica Mensal",
    text: "Analisamos seus resultados e planejamos os próximos passos juntos, garantindo que sua estratégia de marketing esteja sempre à frente.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Um Arsenal Completo de Recursos para seu Crescimento
          </h2>
          <p className="text-lg text-foreground/80 mt-2 max-w-3xl mx-auto">
            Cada ferramenta e serviço é pensado para construir um ecossistema que atrai, converte e retém clientes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-background flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                  <feature.icon className="w-8 h-8" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="mb-3 font-headline text-lg h-14 flex items-center justify-center">{feature.title}</CardTitle>
                <p className="text-foreground/80 text-sm">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
