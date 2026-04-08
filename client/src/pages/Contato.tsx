import MainLayout from "@/components/MainLayout";
import FormularioContato from "@/components/FormularioContato";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP = "5567993013370";
const WHATSAPP_MSG = encodeURIComponent("Olá! Quero conversar sobre as soluções da Prattica AI.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;

export default function Contato() {
  return (
    <MainLayout>
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(20,122,120,0.12) 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="athena-badge mb-6">Fale Conosco</div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#F2EDE8", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.25rem", maxWidth: "700px" }}>
            Vamos construir sua<br />
            <span className="text-gradient-teal">operação inteligente.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", color: "#7a9a9a", maxWidth: "560px", lineHeight: 1.65 }}>
            Preencha o formulário ou entre em contato direto. Nossa equipe retorna em até 2 horas em horário comercial.
          </p>
        </div>
      </section>

      <section style={{ background: "#0A1818", borderTop: "1px solid rgba(94,196,188,0.08)" }} className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info cards */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <MessageCircle className="w-5 h-5" />,
                  label: "WhatsApp",
                  value: "(67) 99301-3370",
                  href: WHATSAPP_URL,
                  sub: "Resposta em minutos"
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: "contato@prattica.ai",
                  href: "mailto:contato@prattica.ai",
                  sub: "Retorno em até 2h"
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Endereço",
                  value: "Av. Afonso Pena, 4785",
                  href: "https://maps.google.com/?q=Av.+Afonso+Pena+4785+Campo+Grande+MS",
                  sub: "The Place, Torre 2, Sala 2007 — Campo Grande, MS"
                }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card-surface p-6 flex gap-5 group no-underline"
                  style={{ background: "#0F1E1E", textDecoration: "none" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110" style={{ background: "rgba(29,168,154,0.08)", border: "1px solid rgba(29,168,154,0.15)", color: "#1DA89A" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", color: "#3a6060", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{item.label}</div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.9375rem", color: "#F2EDE8", marginBottom: "3px" }}>{item.value}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#4a6868" }}>{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2 card-surface p-8" style={{ background: "#0F1E1E" }}>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.375rem", color: "#F2EDE8", marginBottom: "1.5rem" }}>Envie uma mensagem</h2>
              <FormularioContato />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
