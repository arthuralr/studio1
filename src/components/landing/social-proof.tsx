import Image from 'next/image';

const logos = [
  { name: "Advocacia", src: "https://placehold.co/150x50.png", hint: "law firm logo" },
  { name: "Clínica Médica", src: "https://placehold.co/150x50.png", hint: "medical clinic logo" },
  { name: "Consultoria", src: "https://placehold.co/150x50.png", hint: "consulting firm logo" },
  { name: "E-commerce", src: "https://placehold.co/150x50.png", hint: "online store logo" },
  { name: "B2B Services", src: "https://placehold.co/150x50.png", hint: "b2b service logo" },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-lg font-medium text-foreground/70 mb-8 font-headline">
          Empresas que confiam na nossa estratégia:
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16">
          {logos.map((logo) => (
            <Image 
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={140}
              height={40}
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              data-ai-hint={logo.hint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
