
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ThankYouPage() {
  const whatsappMessage = encodeURIComponent("Olá! Acabei de me cadastrar no site da 1000leads e gostaria de agendar minha sessão estratégica.");
  const whatsappNumber = "5511999999999"; // Replace with your WhatsApp number

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary text-center p-6">
      <div className="bg-background p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl w-full">
        <div className="relative h-60 w-full mb-8 rounded-lg overflow-hidden">
            <Image 
                src="https://placehold.co/800x400.png" 
                alt="Celebration"
                fill
                className="object-cover"
                data-ai-hint="celebration success"
            />
        </div>
        <CheckCircle className="w-16 h-16 text-green-500 mb-6 mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
          Obrigado! Seu primeiro passo foi dado.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 mb-10">
          Recebemos suas informações. Nossa equipe entrará em contato em até 24 horas úteis. Se preferir agilizar, clique no botão abaixo e fale conosco diretamente no WhatsApp agora mesmo!
        </p>
        <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-transform">
          <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
            <MessageSquare className="mr-3 h-6 w-6" />
            FALAR NO WHATSAPP AGORA
          </Link>
        </Button>
      </div>
    </div>
  );
}
