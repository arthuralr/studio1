"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";


const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  whatsapp: z.string().min(10, { message: "Por favor, insira um número de WhatsApp válido." }),
});

export default function ContactForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Here you would typically send the data to your backend
    console.log(values);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    
    toast({
      title: "Formulário enviado!",
      description: "Redirecionando para o WhatsApp...",
    })
    
    const whatsappNumber = "555181672629";
    const message = `Olá! Meu nome é ${values.name}. Acabei de me cadastrar no site da 1000leads e gostaria de agendar minha sessão estratégica. Meu email é ${values.email} e meu WhatsApp é ${values.whatsapp}.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappUrl;
  }

  return (
    <Card className="max-w-xl mx-auto shadow-lg">
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-left w-full block">Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-left w-full block">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@melhor-email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-left w-full block">WhatsApp</FormLabel>
                  <FormControl>
                    <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'AGENDAR MINHA SESSÃO GRATUITA'}
            </Button>
          </form>
        </Form>
        <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
          <Lock className="w-4 h-4 mr-2" />
          <span>Suas informações estão seguras. Não enviamos spam.</span>
        </div>
      </CardContent>
    </Card>
  );
}
