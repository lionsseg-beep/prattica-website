import MainLayout from "@/components/MainLayout";
import { ArrowRight, ExternalLink, Clock } from "lucide-react";

const WPP = "https://wa.me/5567993013370?text=" + encodeURIComponent("Olá! Quero ver uma demonstração do Athena Clinic SO.");

export default function Produtos() {
  return (
    <MainLayout>

      {/* HERO */}
      <section style={{ position: "relative", padding: "7rem 0 4rem", overflow: "hidden" }}>
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(27,122,120,0.14) 0%, transparent 60%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: "1.5rem" }}>Produtos</div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: "1.25rem", maxWidth: 700 }}>
            Sistemas com IA nativa<br /><span className="text-gradient">para mercados específicos.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#7AACAC", maxWidth: 580, lineHeight: 1.65 }}>
            Cada produto Prattica é construído verticalmente — para um setor, com profundidade técnica e inteligência que aprende com os dados do próprio cliente.
          </p>
        </div>
      </section>

      {/* ATHENA — DESTAQUE */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2.5rem" }}>
            <div style={{ padding: "4px 14px", borderRadius: 999, background: "#1B7A78", fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.10em", textTransform: "uppercase", color: "#E8F0F0" }}>Disponível agora</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "0.75rem" }}>
                Athena Clinic SO
              </h2>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#5EC4BC", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Sistema Operacional para Clínicas e Consultórios
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#7AACAC", lineHeight: 1.7, marginBottom: "2rem" }}>
                O sistema de gestão com IA nativa desenvolvido por um médico empresário que viveu as dores da operação clínica. A inteligência do Athena é construída a partir dos dados da sua própria clínica — e cresce com ela.
              </p>

              {[
                { label: "Para quem é", text: "Médicos e profissionais de saúde que abriram sua clínica, cresceram, e perceberam que a gestão começou a consumir o tempo que deveria estar no paciente." },
                { label: "O que resolve", text: "Atendimento sem resposta, agenda com faltas, financeiro no Excel, decisões sem dados. Tudo isso integrado em um sistema que opera de forma autônoma." },
                { label: "IA Nativa", text: "Não é um chatbot genérico. É um sistema fechado que aprende com a sua operação e entrega inteligência exclusiva — sem expor dados para fora." },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: "1.25rem", paddingLeft: "1.25rem", borderLeft: "2px solid rgba(94,196,188,0.20)" }}>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#5EC4BC", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#7AACAC", lineHeight: 1.6 }}>{item.text}</div>
                </div>
              ))}

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: "2rem" }}>
                <a href="/athena-clinic-lp.html" className="btn-primary">
                  Ver demonstração completa <ExternalLink style={{ width: 15, height: 15 }} />
                </a>
                <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Falar com nossa equipe
                </a>
              </div>
            </div>

            {/* Planos */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "#E8F0F0", marginBottom: "0.5rem" }}>Planos</h3>
              {[
                { name: "Starter", price: "R$ 297/mês", desc: "Atendimento autônomo no WhatsApp + CRM de pacientes + Agendamento inteligente. Para clínicas que querem começar pelo atendimento.", highlight: false },
                { name: "Pro", price: "R$ 549/mês", desc: "Gestão completa: prontuário, financeiro, DRE, comissões, integração com maquininha e IA Athena como consultora da clínica.", highlight: true },
                { name: "Enterprise", price: "Sob consulta", desc: "Para clínicas de médio e grande porte. Múltiplos usuários, customizações dedicadas e SLA garantido.", highlight: false },
              ].map((plan, i) => (
                <div key={i} style={{
                  padding: "1.25rem 1.5rem", borderRadius: 14,
                  background: plan.highlight ? "rgba(27,122,120,0.12)" : "#112020",
                  border: plan.highlight ? "1px solid rgba(94,196,188,0.30)" : "1px solid rgba(94,196,188,0.08)",
                  boxShadow: plan.highlight ? "0 0 40px rgba(27,122,120,0.10)" : "none",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#E8F0F0" }}>{plan.name}</span>
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: plan.highlight ? "#5EC4BC" : "#E8F0F0" }}>{plan.price}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#7AACAC", lineHeight: 1.55 }}>{plan.desc}</p>
                </div>
              ))}
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#3A6868", textAlign: "center" }}>
                Sem fidelidade · Sem taxa de instalação · Atualização automática incluída
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE — OUTROS PRODUTOS */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1.25rem" }}>Em desenvolvimento</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#E8F0F0", letterSpacing: "-0.035em" }}>
              O ecossistema Prattica cresce<br /><span className="text-gradient">com novos verticais.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "LOGOS Gestão",
                tag: "Varejo & Logística",
                desc: "Plataforma de gestão de estoque com IA nativa. Controle preciso, análise preditiva de demanda, inteligência logística e indicadores em tempo real para operações que não aceitam erro de inventário.",
                status: "Em desenvolvimento",
              },
              {
                name: "ARES Cyber Security",
                tag: "Segurança Digital",
                desc: "Soluções de segurança com foco em criptografia, análise de dados e proteção para o mercado corporativo e de segurança nacional. Tecnologia que antecipa ameaças antes que elas aconteçam.",
                status: "Em desenvolvimento",
              },
            ].map((prod, i) => (
              <div key={i} className="card-surface" style={{ padding: "2rem", opacity: 0.85 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#E8F0F0", marginBottom: 4 }}>{prod.name}</h3>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#5EC4BC", textTransform: "uppercase", letterSpacing: "0.10em" }}>{prod.tag}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 999, background: "rgba(94,196,188,0.06)", border: "1px solid rgba(94,196,188,0.12)" }}>
                    <Clock style={{ width: 11, height: 11, color: "#3A6868" }} />
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#3A6868", textTransform: "uppercase", letterSpacing: "0.08em" }}>{prod.status}</span>
                  </div>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#7AACAC", lineHeight: 1.65 }}>{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
