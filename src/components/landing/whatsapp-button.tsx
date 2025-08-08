"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "./contact-form";

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
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button
                size="icon"
                className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#1DA851] text-white shadow-xl transform hover:scale-110 transition-transform duration-200"
                aria-label="Fale conosco no WhatsApp"
            >
                <WhatsAppIcon />
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Fale com um especialista</DialogTitle>
                <DialogDescription>
                    Preencha seus dados abaixo para ser redirecionado ao nosso WhatsApp.
                </DialogDescription>
            </DialogHeader>
            <ContactForm />
        </DialogContent>
    </Dialog>
  );
}
