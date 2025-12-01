import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export default function PratticaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Olá! Sou o Prattica Assistant. Como posso ajudar você a transformar seus dados em estratégia hoje?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Interessante pergunta. Com base em nossa metodologia DNA, sugerimos começar pelo diagnóstico dos dados.",
        "Para automação desse processo, recomendamos o uso de RPA integrado via API.",
        "Nossa equipe de consultoria pode aprofundar essa análise. Gostaria de agendar uma conversa?",
        "Otimizar esse fluxo pode reduzir o tempo operacional em até 40%."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#00C2A0] hover:bg-[#00A085] text-black shadow-[0_0_20px_rgba(0,194,160,0.3)] z-50 animate-in zoom-in duration-300"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className={cn(
      "fixed bottom-6 right-6 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl z-50 transition-all duration-300 flex flex-col overflow-hidden",
      isMinimized ? "w-72 h-16" : "w-[350px] md:w-[400px] h-[600px] max-h-[80vh]"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-[#111] border-b border-white/5 cursor-pointer" onClick={() => isMinimized && setIsMinimized(false)}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#00C2A0]/10 flex items-center justify-center border border-[#00C2A0]/20">
            <Bot className="w-5 h-5 text-[#00C2A0]" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Prattica Assistant</h3>
            <span className="text-xs text-[#00C2A0] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2A0] animate-pulse"></span> Online
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white" onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}>
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4 bg-[#171717]">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs",
                    msg.role === "user" ? "bg-white/10 text-white" : "bg-[#00C2A0]/10 text-[#00C2A0] border border-[#00C2A0]/20"
                  )}>
                    {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed",
                    msg.role === "user" 
                      ? "bg-white/10 text-white rounded-tr-none" 
                      : "bg-[#1a1a1a] border border-white/5 text-gray-300 rounded-tl-none"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-[#00C2A0]/10 flex items-center justify-center text-[#00C2A0] border border-[#00C2A0]/20">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-[#1a1a1a] border border-white/5 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 bg-[#111] border-t border-white/5">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="bg-[#1a1a1a] border-white/10 focus:border-[#00C2A0] text-white"
              />
              <Button type="submit" size="icon" className="bg-[#00C2A0] text-black hover:bg-[#00A085]" disabled={!inputValue.trim() || isTyping}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
