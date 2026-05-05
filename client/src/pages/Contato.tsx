import MainLayout from "@/components/MainLayout";
import FormularioContato from "@/components/FormularioContato";
import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const WPP = "5567996622860";
const WPP_MSG = encodeURIComponent("Olá! Vim pelo site da Prattica AI e gostaria de agendar uma demonstração do Athena Clinic SO.");
const WPP_URL = `https://wa.me/${WPP}?text=${WPP_MSG}`;

const contatos = [
  {
    icon: <MessageCircle style={{ width: 20, height: 20 }} />,
    label: "WhatsApp",
    value: "(67) 99662-2860",
    sub: "Resposta em minutos",
    href: WPP_URL,
    external: true,
  },
  {
    icon: <Mail style={{ width: 20, height: 20 }} />,
    label: "Email",
    value: "contato@prattica.ai",
    sub: "Retorno em até 2h",
    href: "mailto:contato@prattica.ai",
    external: false,
  },
  {
    icon: <MapPin style={{ width: 20, height: 20 }} />,
    label: "Endereço",
    value: "Av. Afonso Pena, 4785",
    sub: "The Place, Torre 2, 20° andar, Sala 2007 — Campo Grande, MS",
    href: "https://maps.google.com/?q=Av+Afonso+Pena+4785+Campo+Grande+MS",
    external: true,
  },
];

export default function Contato() {
  return (
    <MainLayout>
      {/* Hero */}
      <section
        style={{ background: "#FFFFFF", paddingTop: "7rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}
      >
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="absolute top-0 right-0 w-1/3 h-full" style={{ background: "linear-gradient(to left, rgba(27,122,120,0.05), transparent)" }} />
        <div className="container relative z-10">
          <div className="athena-badge mb-6">Fale Conosco</div>
          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            color: "#0D5252",
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            marginBottom: "1.25rem",
            maxWidth: 680,
          }}>
            Pronto para transformar<br />
            <span className="text-gradient-light">sua clínica com IA?</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#4A6868", maxWidth: 520, lineHeight: 1.65 }}>
            Preencha o formulário ou entre em contato direto. Nossa equipe retorna em minutos no horário comercial.
          </p>
        </div>
      </section>

      {/* Canais de contato + Formulário */}
      <section style={{ background: "#EEEEF0", padding: "4rem 0 6rem", borderTop: "1px solid rgba(27,122,120,0.08)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Coluna esquerda: canais */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contatos.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card-surface"
                  style={{ padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: 14, textDecoration: "none", background: "#FFFFFF" }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0, marginTop: 2,
                    background: "rgba(27,122,120,0.08)", border: "1px solid rgba(27,122,120,0.15)",
                    color: "#1B7A78", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#7A9898", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                      {c.label}
                    </div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.9375rem", color: "#0D5252", marginBottom: 3 }}>
                      {c.value}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#7A9898", lineHeight: 1.45 }}>
                      {c.sub}
                    </div>
                  </div>
                </a>
              ))}

              {/* CTA WhatsApp direto */}
              <a
                href={WPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ justifyContent: "center", marginTop: 8 }}
              >
                Falar no WhatsApp agora <ArrowRight style={{ width: 16, height: 16 }} />
              </a>
            </div>

            {/* Coluna direita: formulário (ocupa 2 colunas) */}
            <div className="lg:col-span-2 card-surface" style={{ padding: "2rem 2.5rem", background: "#FFFFFF" }}>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.375rem", color: "#0D5252", marginBottom: "0.375rem" }}>
                Envie uma mensagem
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#7A9898", marginBottom: "1.75rem" }}>
                Preencha abaixo e seus dados serão enviados diretamente para nosso WhatsApp.
              </p>
              <FormularioContato />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Diagnóstico */}
      <section className="section-teal" style={{ padding: "4rem 0" }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#EEEEF0", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Prefere falar com um especialista?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(238,238,240,0.75)", marginBottom: "1.75rem" }}>
            Agendamos um diagnóstico gratuito de 30 minutos para entender sua clínica.
          </p>
          <a href={WPP_URL} target="_blank" rel="noopener noreferrer" className="btn-white" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
            Agendar diagnóstico gratuito <ArrowRight style={{ width: 16, height: 16 }} />
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
