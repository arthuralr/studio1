"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

function WhatsAppIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
        >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
    )
}


export default function WhatsAppButton() {
  const whatsappNumber = "555181672629";
  const whatsappMessage = encodeURIComponent("Olá! Visitei o site e gostaria de mais informações.");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#1DA851] text-white shadow-xl transform hover:scale-110 transition-transform duration-200"
        asChild
      >
        <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" aria-label="Fale conosco no WhatsApp">
          <WhatsAppIcon />
        </Link>
      </Button>
    </div>
  );
}
