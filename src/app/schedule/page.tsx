
import Script from 'next/script';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';

export default function SchedulePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Agende sua Sessão Estratégica
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 mt-4">
            Escolha o melhor dia e horário para nossa conversa de 30 minutos. Vamos juntos traçar um plano para o sucesso do seu negócio.
          </p>
        </div>
        
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/andreluiznefi/30min" 
          style={{ minWidth: '320px', height: '700px' }}>
        </div>
        
        <Script 
          id="calendly-script"
          type="text/javascript" 
          src="https://assets.calendly.com/assets/external/widget.js" 
          strategy="afterInteractive"
        />
      </main>
      <Footer />
    </div>
  );
}
