import ContactForm from './contact-form';

export default function Cta() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-primary mb-4">
          Pronto para transformar seu marketing em uma máquina de vendas?
        </h2>
        <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
          Preencha o formulário abaixo e agende uma sessão estratégica gratuita de 15 minutos. Vamos desenhar um plano de ação exclusivo para o seu negócio.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
