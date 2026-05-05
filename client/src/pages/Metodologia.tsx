import MainLayout from "@/components/MainLayout";
import { useState } from "react";
import { Search, Settings, Package, GraduationCap, Heart, ArrowRight } from "lucide-react";

const WPP = "https://wa.me/5567996622860?text=" + encodeURIComponent("Olá! Quero saber mais sobre a metodologia da Prattica AI.");

const phases = [
  {
    id: 1, label: "Fase 01",
    title: "Diagnóstico",
    icon: <Search style={{ width: 22, height: 22 }} />,
    sub: "Entendemos o 'porquê' antes de definir o 'como'.",
    desc: "Fazemos imersão real na sua operação. Mapeamos processos, identificamos gargalos invisíveis, definimos KPIs de sucesso e estabelecemos a linha de base para medir resultado.",
    entregaveis: ["Mapa de processos atual (AS-IS)", "Diagnóstico de gargalos e oportunidades", "KPIs e métricas de sucesso definidos", "Roadmap de implementação priorizado"],
  },
  {
    id: 2, label: "Fase 02",
    title: "Operação",
    icon: <Settings style={{ width: 22, height: 22 }} />,
    sub: "A estratégia ganha vida na rotina da sua equipe.",
    desc: "Implementamos automações, integramos sistemas e redesenhamos fluxos de trabalho com foco em resultado imediato. Sem disrupção operacional — a mudança acontece com a operação rodando.",
    entregaveis: ["Automações configuradas e testadas", "Integrações de sistemas ativas", "Fluxos redesenhados e documentados", "Dashboards de acompanhamento em tempo real"],
  },
  {
    id: 3, label: "Fase 03",
    title: "Entrega",
    icon: <Package style={{ width: 22, height: 22 }} />,
    sub: "Go-live com qualidade assegurada e resultado visível.",
    desc: "Homologação completa, testes de qualidade e ativação do ambiente de produção. Acompanhamos as primeiras semanas de operação para garantir estabilidade e ajustar o que for necessário.",
    entregaveis: ["Ambiente de produção ativo", "Relatório de validação técnica", "Primeiras métricas coletadas", "Plano de contingência documentado"],
  },
  {
    id: 4, label: "Fase 04",
    title: "Educação",
    icon: <GraduationCap style={{ width: 22, height: 22 }} />,
    sub: "Não criamos dependência. Criamos autonomia.",
    desc: "Capacitamos sua equipe para operar, entender e evoluir as soluções implementadas. O objetivo é que você não precise de nós para o dia a dia — só para o próximo nível.",
    entregaveis: ["Treinamentos por função e nível", "Documentação técnica e operacional", "Workshops práticos com casos reais", "Biblioteca de processos internos"],
  },
  {
    id: 5, label: "Fase 05",
    title: "Cultura",
    icon: <Heart style={{ width: 22, height: 22 }} />,
    sub: "Tecnologia sem cultura é custo. Com cultura é vantagem.",
    desc: "Consolidamos a mentalidade data-driven na operação. Rituais de acompanhamento, revisão de métricas e evolução contínua — para que o resultado não seja um evento, mas um processo permanente.",
    entregaveis: ["Rituais de revisão de métricas instalados", "Cultura data-driven consolidada", "Plano de evolução contínua", "Relatório de impacto trimestral"],
  },
];

export default function Metodologia() {
  const [active, setActive] = useState(0);

  return (
    <MainLayout>

      {/* HERO */}
      <section style={{ position: "relative", padding: "7rem 0 4rem", overflow: "hidden" }}>
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(27,122,120,0.14) 0%, transparent 60%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: "1.5rem" }}>Prattica DNA™</div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: "1.25rem", maxWidth: 680 }}>
            O método que transforma<br /><span className="text-gradient">intenção em resultado mensurável.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#7AACAC", maxWidth: 580, lineHeight: 1.65 }}>
            5 fases estruturadas para garantir que a tecnologia não seja um projeto isolado, mas um processo contínuo que gera resultado desde o primeiro mês.
          </p>
        </div>
      </section>

      {/* FASES INTERATIVAS */}
      <section style={{ padding: "2rem 0 6rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Lista de fases */}
            <div style={{ gridColumn: "span 5", display: "flex", flexDirection: "column", gap: 10 }}>
              {phases.map((phase, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="card-surface"
                  style={{
                    padding: "1.5rem",
                    cursor: "pointer",
                    borderColor: active === i ? "rgba(94,196,188,0.35)" : undefined,
                    background: active === i ? "rgba(27,122,120,0.08)" : undefined,
                    transition: "all 0.3s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: active === i ? "rgba(94,196,188,0.15)" : "rgba(94,196,188,0.06)",
                      border: `1px solid ${active === i ? "rgba(94,196,188,0.30)" : "rgba(94,196,188,0.10)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: active === i ? "#5EC4BC" : "#3A6868",
                      transition: "all 0.3s",
                    }}>
                      {phase.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: active === i ? "#5EC4BC" : "#3A6868", textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 3 }}>{phase.label}</div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: active === i ? "#E8F0F0" : "#7AACAC" }}>{phase.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detalhe da fase ativa */}
            <div style={{ gridColumn: "span 7", position: "sticky", top: "6rem" }}>
              <div className="card-surface" style={{ padding: "2.5rem", borderColor: "rgba(94,196,188,0.20)" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#5EC4BC", textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: "0.75rem" }}>{phases[active].label}</div>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#E8F0F0", letterSpacing: "-0.04em", marginBottom: "0.5rem" }}>{phases[active].title}</h2>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", color: "#7AACAC", marginBottom: "1.5rem" }}>{phases[active].sub}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#7AACAC", lineHeight: 1.75, marginBottom: "2rem" }}>{phases[active].desc}</p>

                <div style={{ borderTop: "1px solid rgba(94,196,188,0.08)", paddingTop: "1.5rem" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#3A6868", textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: "1rem" }}>O que você recebe</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {phases[active].entregaveis.map((e, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B7A78", flexShrink: 0 }} />
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#7AACAC" }}>{e}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progresso */}
                <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(94,196,188,0.08)" }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    {phases.map((_, i) => (
                      <div key={i} onClick={() => setActive(i)} style={{
                        flex: 1, height: 3, borderRadius: 999, cursor: "pointer",
                        background: i <= active ? "#1B7A78" : "rgba(94,196,188,0.10)",
                        transition: "background 0.3s",
                      }} />
                    ))}
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#3A6868", marginTop: 8 }}>
                    {active + 1} de {phases.length} fases
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", padding: "5rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 2.75rem)", color: "#E8F0F0", letterSpacing: "-0.035em", marginBottom: "1rem" }}>
            Quer entender como isso se aplica<br /><span className="text-gradient">ao seu negócio?</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#7AACAC", maxWidth: 440, margin: "0 auto 2rem", lineHeight: 1.65 }}>
            Diagnóstico gratuito de 30 minutos. Apresentamos como o Prattica DNA se encaixa na sua operação.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar diagnóstico gratuito <ArrowRight style={{ width: 16, height: 16 }} /></a>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
