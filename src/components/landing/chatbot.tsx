"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, X, Bot, User, Loader2 } from "lucide-react";
import { aiChatbot, type AIChatbotInput } from "@/ai/flows/ai-chatbot";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou o assistente da 1000leads. Como posso ajudar você a conseguir mais clientes hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatInput: AIChatbotInput = {
        userInput: input,
        pastMessages: messages,
      };
      const result = await aiChatbot(chatInput);
      const assistantMessage: Message = { role: "assistant", content: result.response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Desculpe, estou com um problema no momento. Tente novamente mais tarde.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-[200%]' : 'translate-x-0'}`}>
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-xl"
          onClick={() => setIsOpen(true)}
        >
          <Bot className="h-8 w-8" />
        </Button>
      </div>

      <div className={`fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <Card className="flex flex-col h-[70vh] shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Bot />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-headline text-lg">Assistente 1000leads</CardTitle>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex items-end gap-2 ${message.role === 'user' ? 'justify-end' : ''}`}>
                    {message.role === 'assistant' && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="w-5 h-5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`max-w-[80%] rounded-lg px-4 py-2 ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                     {message.role === 'user' && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>
                          <User className="w-5 h-5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-end gap-2">
                     <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="w-5 h-5" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="max-w-[80%] rounded-lg px-4 py-2 bg-secondary flex items-center">
                        <Loader2 className="w-5 h-5 animate-spin"/>
                      </div>
                   </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex w-full items-center space-x-2"
            >
              <Input
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
