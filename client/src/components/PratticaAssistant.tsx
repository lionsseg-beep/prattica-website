import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, X, Send, Minimize2, Maximize2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WPP = "https://wa.me/5567996622860?text=" + encodeURIComponent("Olá! Quero falar com a equipe da Prattica AI.");

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

type LeadState = "idle" | "asking_name" | "asking_phone" | "captured";

const SYSTEM_PROMPT = `Você é o assistente virtual da Prattica AI, empresa especializada em inteligência de dados e gestão de resultados com sede em Campo Grande, MS.

SOBRE A PRATTICA AI:
- Fundada há 1,5 anos por Ricardo Dantas (CEO) com Dr. João Maldonado (médico empresário, Co-founder), Wanessa Escobar (Experiência do Cliente) e Alal Peralto (CTO)
- Posicionamento: "Inteligência de dados. Gestão de resultados."
- Diferencial: IA Nativa — a inteligência vive dentro do sistema do cliente, aprende com os dados dele, nunca expõe dados para fora
- Serviços: Consultoria Estratégica, Automação de Processos, Inteligência de Dados, Prattica Academy
- Metodologia: Prattica DNA™ (5 fases: Diagnóstico, Operação, Entrega, Educação, Cultura)
- Contato: (67) 99662-2860 | contato@prattica.ai | Av. Afonso Pena 4785, The Place Torre 2 Sala 2007, Campo Grande MS

PRODUTO PRINCIPAL — ATHENA CLINIC SO:
- Sistema operacional para clínicas médicas particulares com IA Nativa
- Criado por um médico empresário (Dr. João Maldonado) que viveu as dores da gestão clínica
- Módulos: Agente IA no WhatsApp 24h, Agendamento inteligente, CRM de pacientes, Prontuário eletrônico, Gestão financeira completa, Integração com maquininha, Consultor IA pessoal, Dashboards em tempo real
- Diferenciais: IA aprende com os dados da própria clínica, 100% LGPD compliant, dados nunca saem da clínica
- Planos: Starter R$297/mês (CRM + Agente WhatsApp), Pro R$549/mês (gestão completa), Enterprise sob consulta
- Sem fidelidade, sem taxa de instalação, atualização automática incluída

OUTROS PRODUTOS (em desenvolvimento):
- LOGOS Gestão: gestão de estoque com IA nativa para varejo e logística
- ARES Cyber Security: segurança digital e criptografia para o mercado corporativo

INSTRUÇÕES DE COMPORTAMENTO:
- Responda em português brasileiro, de forma direta e objetiva
- Máximo 3 parágrafos por resposta — seja conciso
- Não invente informações — se não souber algo, diga que vai conectar com a equipe
- Foque em entender a necessidade do visitante antes de apresentar soluções
- Quando adequado, sugira agendar uma demonstração ou conversa com a equipe
- Tom: profissional, mas acessível — não use jargão excessivo
- Se perguntarem sobre preços, informe os planos mas reforce o valor antes do preço
- Após responder 3 perguntas, pergunte se o visitante quer ser contatado pela equipe`;

export default function PratticaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Olá! Sou o assistente da Prattica AI. Posso te ajudar com informações sobre nossas soluções, o Athena Clinic SO ou agendar uma conversa com nossa equipe.\n\nO que você precisa?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadState, setLeadState] = useState<LeadState>("idle");
  const [leadName, setLeadName] = useState("");
  const [msgCount, setMsgCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const addMessage = (role: "user" | "assistant", content: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString() + role,
      role,
      content,
      timestamp: new Date()
    }]);
  };

  const callClaude = async (userMessage: string, history: Message[]) => {
    // Build conversation history for API
    const apiMessages = history
      .filter(m => m.id !== "welcome")
      .map(m => ({ role: m.role, content: m.content }));

    apiMessages.push({ role: "user", content: userMessage });

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: apiMessages,
      }),
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return data.content?.[0]?.text || "Desculpe, não consegui processar sua mensagem. Tente novamente.";
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput("");
    setLoading(true);

    // Handle lead capture flow
    if (leadState === "asking_name") {
      setLeadName(userText);
      addMessage("user", userText);
      setLeadState("asking_phone");
      setTimeout(() => {
        addMessage("assistant", `Obrigado, ${userText}! Qual é o seu WhatsApp para nossa equipe entrar em contato?`);
        setLoading(false);
      }, 600);
      return;
    }

    if (leadState === "asking_phone") {
      addMessage("user", userText);
      setLeadState("captured");
      const wppMsg = encodeURIComponent(
        `Olá! Vim pelo chat do site da Prattica AI.\nNome: ${leadName}\nTelefone: ${userText}`
      );
      setTimeout(() => {
        addMessage("assistant",
          `Perfeito! Nossa equipe vai entrar em contato com você em breve, ${leadName}.\n\nSe preferir, clique no botão abaixo para conversar agora mesmo pelo WhatsApp.`
        );
        setLoading(false);
        // Auto-open WhatsApp with lead data
        setTimeout(() => window.open(`https://wa.me/5567996622860?text=${wppMsg}`, "_blank"), 1500);
      }, 600);
      return;
    }

    // Normal conversation
    addMessage("user", userText);
    const newCount = msgCount + 1;
    setMsgCount(newCount);

    try {
      const reply = await callClaude(userText, messages);
      addMessage("assistant", reply);

      // After 3 messages, suggest lead capture
      if (newCount === 3 && leadState === "idle") {
        setTimeout(() => {
          addMessage("assistant",
            "Posso conectar você com nossa equipe para uma conversa mais aprofundada. Quer que eu anote seu nome para entrarmos em contato?"
          );
          setLeadState("asking_name");
        }, 800);
      }
    } catch (err) {
      addMessage("assistant",
        "Desculpe, tive um problema técnico. Para falar diretamente com nossa equipe, use o WhatsApp: (67) 99662-2860."
      );
    } finally {
      setLoading(false);
    }
  };

  // Floating button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 50,
          width: 56, height: 56, borderRadius: "50%",
          background: "#1B7A78",
          boxShadow: "0 4px 24px rgba(27,122,120,0.40)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.3s",
          animation: "fadeUp 0.5s ease forwards",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "#22A09D";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "#1B7A78";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
        aria-label="Abrir chat"
      >
        <MessageSquare style={{ width: 24, height: 24, color: "#fff" }} />
        {/* Notification dot */}
        <span style={{
          position: "absolute", top: 10, right: 10,
          width: 10, height: 10, borderRadius: "50%",
          background: "#5EC4BC", border: "2px solid #0D1A1A",
          animation: "pulse 2s infinite",
        }} />
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 50,
        width: isMinimized ? 280 : 380,
        height: isMinimized ? 64 : 560,
        maxHeight: "85vh",
        background: "#0D1A1A",
        border: "1px solid rgba(94,196,188,0.18)",
        borderRadius: 20,
        boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(94,196,188,0.08)",
        display: "flex", flexDirection: "column",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header */}
      <div
        onClick={() => isMinimized && setIsMinimized(false)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 16px",
          background: "#080E0E",
          borderBottom: "1px solid rgba(94,196,188,0.08)",
          cursor: isMinimized ? "pointer" : "default",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Logo symbol */}
          <div style={{
            width: 34, height: 34, borderRadius: "50%",
            background: "rgba(27,122,120,0.15)",
            border: "1px solid rgba(94,196,188,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
              <path d="M20 2 L35 11 L35 29 L20 38 L5 29 L5 11 Z" stroke="#5EC4BC" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
              <path d="M20 10 L28 20 L20 30 L12 20 Z" fill="#5EC4BC" fillOpacity="0.2" stroke="#5EC4BC" strokeWidth="1.2" strokeLinejoin="round"/>
              <circle cx="20" cy="20" r="3" fill="#5EC4BC"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#E8F0F0" }}>
              Prattica AI
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#5EC4BC" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#5EC4BC", display: "inline-block", animation: "pulse 2s infinite" }} />
              Online agora
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <button
            onClick={e => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
            style={{ width: 28, height: 28, borderRadius: 6, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#5EC4BC", opacity: 0.7 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
          >
            {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
          </button>
          <button
            onClick={e => { e.stopPropagation(); setIsOpen(false); }}
            style={{ width: 28, height: 28, borderRadius: 6, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#5EC4BC", opacity: 0.7 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 12 }}>
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: "flex",
                  gap: 8,
                  flexDirection: msg.role === "user" ? "row-reverse" : "row",
                  alignItems: "flex-end",
                  maxWidth: "88%",
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.role === "assistant" && (
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                    background: "rgba(27,122,120,0.12)", border: "1px solid rgba(94,196,188,0.20)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 40 40" fill="none">
                      <path d="M20 2 L35 11 L35 29 L20 38 L5 29 L5 11 Z" stroke="#5EC4BC" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                      <circle cx="20" cy="20" r="3" fill="#5EC4BC"/>
                    </svg>
                  </div>
                )}
                <div
                  style={{
                    padding: "10px 13px",
                    borderRadius: msg.role === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                    background: msg.role === "user"
                      ? "#1B7A78"
                      : "rgba(255,255,255,0.05)",
                    border: msg.role === "user"
                      ? "none"
                      : "1px solid rgba(94,196,188,0.10)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8125rem",
                    color: msg.role === "user" ? "#fff" : "#C8DCDC",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end", maxWidth: "88%" }}>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%",
                  background: "rgba(27,122,120,0.12)", border: "1px solid rgba(94,196,188,0.20)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="12" height="12" viewBox="0 0 40 40" fill="none">
                    <path d="M20 2 L35 11 L35 29 L20 38 L5 29 L5 11 Z" stroke="#5EC4BC" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                    <circle cx="20" cy="20" r="3" fill="#5EC4BC"/>
                  </svg>
                </div>
                <div style={{
                  padding: "12px 16px", borderRadius: "4px 16px 16px 16px",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(94,196,188,0.10)",
                  display: "flex", gap: 5, alignItems: "center",
                }}>
                  {[0, 1, 2].map(i => (
                    <span key={i} style={{
                      width: 6, height: 6, borderRadius: "50%", background: "#5EC4BC",
                      animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                      display: "inline-block",
                    }} />
                  ))}
                </div>
              </div>
            )}

            {/* WPP button if lead captured */}
            {leadState === "captured" && (
              <a
                href={WPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 16px", borderRadius: 10,
                  background: "#1B7A78", color: "#fff",
                  fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.8125rem",
                  textDecoration: "none", transition: "all 0.2s", alignSelf: "center",
                  border: "none", marginTop: 4,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#22A09D")}
                onMouseLeave={e => (e.currentTarget.style.background = "#1B7A78")}
              >
                Conversar no WhatsApp <ArrowRight size={14} />
              </a>
            )}

            <div ref={scrollRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: "12px 14px",
            background: "#080E0E",
            borderTop: "1px solid rgba(94,196,188,0.08)",
            flexShrink: 0,
          }}>
            {/* Quick suggestions (only on first message) */}
            {messages.length === 1 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                {[
                  "O que é o Athena Clinic?",
                  "Quais são os planos?",
                  "Como funciona a consultoria?",
                ].map(suggestion => (
                  <button
                    key={suggestion}
                    onClick={() => { setInput(suggestion); }}
                    style={{
                      padding: "4px 10px", borderRadius: 999,
                      background: "rgba(94,196,188,0.06)",
                      border: "1px solid rgba(94,196,188,0.14)",
                      fontFamily: "'DM Sans', sans-serif", fontSize: "0.6875rem",
                      color: "#5EC4BC", cursor: "pointer", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(94,196,188,0.14)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(94,196,188,0.06)")}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSend} style={{ display: "flex", gap: 8 }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={
                  leadState === "asking_name" ? "Seu nome..." :
                  leadState === "asking_phone" ? "Seu WhatsApp..." :
                  "Digite sua mensagem..."
                }
                disabled={loading || leadState === "captured"}
                style={{
                  flex: 1,
                  padding: "9px 13px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(94,196,188,0.14)",
                  color: "#E8F0F0",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(94,196,188,0.35)")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(94,196,188,0.14)")}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading || leadState === "captured"}
                style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: input.trim() && !loading ? "#1B7A78" : "rgba(94,196,188,0.08)",
                  border: "none", cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s",
                }}
              >
                <Send size={14} color={input.trim() && !loading ? "#fff" : "#3A6868"} />
              </button>
            </form>

            <div style={{
              textAlign: "center", marginTop: 8,
              fontFamily: "'DM Mono', monospace", fontSize: "0.5rem",
              color: "#1E3A3A", letterSpacing: "0.06em",
            }}>
              ASSISTENTE PRATTICA AI · POWERED BY CLAUDE
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
