import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter um contrato de fidelidade?",
    answer: "Não. Acreditamos em parcerias baseadas em resultados. Você tem a liberdade de continuar conosco porque está satisfeito, não por obrigação contratual.",
  },
  {
    question: "O valor do tráfego pago está incluso nos pacotes?",
    answer: "Não. O valor dos pacotes cobre nossa expertise e gestão. O investimento em anúncios (para Google e Meta) é separado e definido em conjunto com você, de acordo com sua meta.",
  },
  {
    question: "Em quanto tempo eu vejo os primeiros resultados?",
    answer: "Nas primeiras semanas já teremos todo o seu ecossistema estruturado e as campanhas no ar. Geralmente, os primeiros leads qualificados começam a chegar já no primeiro mês.",
  },
  {
    question: "Eu preciso fornecer o conteúdo para os posts?",
    answer: "Não. Nossa equipe de conteúdo cria tudo para você: os textos (copy) e a arte dos posts, sempre alinhados à sua marca e objetivos, aguardando apenas a sua aprovação.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Ainda tem dúvidas? A gente responde.
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full bg-background p-4 rounded-lg shadow-sm">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
