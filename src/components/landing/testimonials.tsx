import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "João S.",
    title: "Advogado",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtYW58ZW58MHx8fHwxNzU0NjI4MzUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "man lawyer",
    text: "A 1000leads mudou nosso jogo. O profissionalismo e a clareza nos relatórios nos deram a segurança que precisávamos. Os resultados em leads vieram rápido.",
  },
  {
    name: "Ana P.",
    title: "Consultora",
    avatar: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtdWxoZXJ8ZW58MHx8fHwxNzU0NjUwMDU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "woman consultant",
    text: "Finalmente encontrei uma agência que entende de tecnologia. O chatbot que eles criaram filtra os curiosos e me entrega apenas os clientes prontos para fechar. Recomendo demais!",
  },
  {
    name: "Carlos M.",
    title: "Diretor Comercial",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8bWFufGVufDB8fHx8MTc1NDYyODM1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "man director",
    text: "O melhor foi a ausência de contrato de fidelidade. Isso mostra que eles confiam no próprio trabalho. E com razão, os resultados falam por si.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            O que nossos parceiros dizem sobre nós
          </h2>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <p className="text-foreground/80 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold font-headline">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
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
