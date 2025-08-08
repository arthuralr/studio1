
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Paloma Martins",
    description: "Site institucional e blog para advogada.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8Z2lybHxlbnwwfHx8fDE3NTQ2NDg5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "lawyer website",
    url: "http://palomartins.com.br",
  },
  {
    title: "Método Venda Mais",
    description: "Página de vendas para curso online.",
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MXwxfHNlYXJjaHwxNnx8c3RvcmV8ZW58MHx8fHwxNzU0NjQ5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "sales course",
    url: "https://metodovendamais.com.br/",
  },
  {
    title: "Cellphone BH",
    description: "E-commerce para loja de celulares e acessórios.",
    imageUrl: "https://images.unsplash.com/photo-1529653762956-b0a27278529c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwaG9uZXxlbnwwfHx8fDE3NTQ1OTkxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "cellphone store",
    url: "https://cellphonebh.com.br/",
  },
  {
    title: "Filter Instalações",
    description: "Site para empresa de instalações comerciais.",
    imageUrl: "https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8aW5zdGFsYXRpb25zfGVufDB8fHx8MTc1NDY0OTI0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "commercial installations",
    url: "https://filterinstalacoes.com.br/",
  },
  {
    title: "Webmetas",
    description: "Site institucional para agência de marketing.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "marketing agency",
    url: "https://webmetas.com.br/",
  },
  {
    title: "Distribuidora Gomes Jardim",
    description: "Catálogo online para distribuidora de alimentos.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "food distributor",
    url: "http://distribuidoragomesjardim.com.br/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-foreground/80 mt-2 max-w-3xl mx-auto">
            Confira alguns dos projetos que tivemos o prazer de desenvolver.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={`Imagem do projeto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-headline text-primary mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4 h-12">{project.description}</p>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href={project.url} target="_blank">
                    Visitar Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
