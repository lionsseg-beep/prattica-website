import { Link } from "wouter";
import MainLayout from "@/components/MainLayout";
import { ArrowRight, Bot, BarChart3, Layers, Zap, CheckCircle2, ChevronRight, MessageSquare, Calendar, DollarSign, Brain } from "lucide-react";

const WHATSAPP = "5567993013370";
const WHATSAPP_MSG = encodeURIComponent("Olá! Quero conhecer as soluções da Prattica AI.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;

function AthenaLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <polygon points="24,4 44,42 4,42" fill="none" stroke="#1DA89A" strokeWidth="2.5" strokeLinejoin="round"/>
      <polygon points="24,14 37,38 11,38" fill="#147A78"/>
      <polygon points="24,22 30,34 18,34" fill="#1DA89A"/>
    </svg>
  );
}

const solutionCards = [
  {
    icon: <Bot className="w-6 h-6" style={{ color: "#1DA89A" }} />,
    title: "Agentes de IA",
    desc: "Agentes autônomos que atendem clientes, qualificam leads e executam processos 24h por dia — sem intervenção humana.",
    tag: "Atendimento automatizado"
  },
  {
    icon: <Zap className="w-6 h-6" style={{ color: "#1DA89A" }} />,
    title: "Automação de Processos",
    desc: "Eliminamos tarefas repetitivas com workflows inteligentes integrados aos seus sistemas atuais via API.",
    tag: "Eficiência operacional"
  },
  {
    icon: <BarChart3 className="w-6 h-6" style={{ color: "#1DA89A" }} />,
    title: "Inteligência de Dados",
    desc: "Dashboards e relatórios automáticos que transformam dados brutos em decisões estratégicas claras.",
    tag: "Gestão baseada em dados"
  },
  {
    icon: <Layers className="w-6 h-6" style={{ color: "#1DA89A" }} />,
    title: "Consultoria Estratégica",
    desc: "Diagnóstico profundo dos seus processos e redesenho completo para escalar com segurança e previsibilidade.",
    tag: "Transformação operacional"
  }
];

const athenaFeatures = [
  { icon: <MessageSquare className="w-5 h-5" />, text: "Agente IA no WhatsApp — atende, agenda e responde pacientes 24/7" },
  { icon: <Calendar className="w-5 h-5" />, text: "Agendamento inteligente com confirmação automática" },
  { icon: <Brain className="w-5 h-5" />, text: "Consultor IA: insights e relatórios sob demanda para o dono" },
  { icon: <DollarSign className="w-5 h-5" />, text: "Gestão financeira completa com integração à maquininha" },
  { icon: <CheckCircle2 className="w-5 h-5" />, text: "CRM, prontuário eletrônico e controle de comissões" },
  { icon: <BarChart3 className="w-5 h-5" />, text: "Dashboards em tempo real — saúde financeira da clínica" },
];

const plans = [
  {
    name: "Starter",
    price: "R$ 297",
    period: "/mês",
    desc: "CRM + Agente IA no WhatsApp. Ideal para clínicas que querem começar com atendimento automatizado.",
    features: ["Agente IA no WhatsApp", "CRM de Pacientes", "Agendamento básico", "Suporte por chat"],
    cta: "Começar agora",
    highlight: false
  },
  {
    name: "Pro",
    price: "R$ 549",
    period: "/mês",
    desc: "Gestão completa da clínica com IA em todos os processos. A solução mais escolhida.",
    features: ["Tudo do Starter", "Prontuário eletrônico", "Gestão financeira completa", "Integração com maquininha", "Consultor IA personalizado", "Relatórios automáticos", "Suporte prioritário"],
    cta: "Solicitar Demo",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    desc: "Para clínicas de médio e grande porte com múltiplos usuários e personalizações avançadas.",
    features: ["Tudo do Pro", "Múltiplos usuários", "Customizações sob medida", "Integrações dedicadas", "SLA garantido", "Gerente de conta dedicado"],
    cta: "Falar com consultor",
    highlight: false
  }
];

export default function Home() {
  return (
    <MainLayout>
      {/* ── HERO ── */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(20,122,120,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to top, #070D0D, transparent)" }} />

        {/* Floating orb */}
        <div
          className="absolute right-[8%] top-[18%] w-[520px] h-[520px] rounded-full pointer-events-none animate-float"
          style={{
            background: "radial-gradient(circle, rgba(29,168,154,0.12) 0%, rgba(10,74,74,0.06) 50%, transparent 70%)",
            filter: "blur(40px)"
          }}
        />

        <div className="container relative z-10 pt-16 pb-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="athena-badge mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1DA89A] animate-pulse" />
              Inteligência Artificial Aplicada a Processos e Gestão
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up delay-100 mb-6"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                color: "#F2EDE8"
              }}
            >
              Automação com IA<br />
              que{" "}
              <span className="text-gradient-teal">transforma operações</span>{" "}
              em<br />vantagem competitiva.
            </h1>

            <p
              className="animate-fade-up delay-200 mb-10 max-w-2xl"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "#7a9a9a"
              }}
            >
              A Prattica AI integra agentes de IA, automação de processos e consultoria estratégica para eliminar ineficiências, reduzir custos e dar ao seu time tempo para o que realmente importa.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link href="/contato">
                <a className="btn-primary">
                  Agendar diagnóstico gratuito <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Falar no WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-12 animate-fade-up delay-400">
              {[
                "MVP validado em clínicas reais",
                "Agentes IA 24/7",
                "Campo Grande, MS"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#1DA89A" }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#6a8a8a" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#0F1E1E", borderTop: "1px solid rgba(94,196,188,0.08)", borderBottom: "1px solid rgba(94,196,188,0.08)" }} className="py-14">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+45%", label: "Eficiência operacional média" },
              { value: "24/7", label: "Atendimento com agentes IA" },
              { value: "3x", label: "ROI em 12 meses" },
              { value: "100%", label: "Processos rastreados" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.875rem, 4vw, 3rem)",
                    color: "#1DA89A",
                    letterSpacing: "-0.04em",
                    lineHeight: 1
                  }}
                  className="mb-2"
                >
                  {stat.value}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#5a7a7a" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUÇÕES ── */}
      <section className="py-28">
        <div className="container">
          <div className="mb-16">
            <div className="athena-badge mb-6">Nossas Soluções</div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#F2EDE8", letterSpacing: "-0.03em", lineHeight: 1.15, maxWidth: "480px" }}>
                Do diagnóstico à operação{" "}
                <span className="text-gradient-teal">totalmente automatizada.</span>
              </h2>
              <Link href="/solucoes">
                <a className="flex items-center gap-2 text-sm font-medium transition-colors duration-200" style={{ color: "#5EC4BC", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>
                  Ver todas as soluções <ChevronRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solutionCards.map((card, i) => (
              <div
                key={i}
                className="card-surface p-8 group cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(29,168,154,0.08)", border: "1px solid rgba(29,168,154,0.15)" }}
                >
                  {card.icon}
                </div>
                <div className="athena-badge mb-4" style={{ fontSize: "0.625rem" }}>{card.tag}</div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#F2EDE8", marginBottom: "0.75rem" }}>{card.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#6a8a8a", lineHeight: 1.65 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATHENA CLINIC SO — PRODUTO DESTAQUE ── */}
      <section style={{ background: "#0A1818" }} className="py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(20,122,120,0.10) 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div className="athena-badge mb-6">
                <AthenaLogo size={14} />
                Produto Principal
              </div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#F2EDE8", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
                Athena Clinic SO
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", color: "#7a9a9a", lineHeight: 1.65, marginBottom: "2rem" }}>
                O sistema operacional completo para clínicas médicas particulares. Desde o primeiro contato no WhatsApp até o relatório financeiro do mês — tudo automatizado com IA.
              </p>

              <ul className="space-y-4 mb-10">
                {athenaFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(29,168,154,0.08)", border: "1px solid rgba(29,168,154,0.15)", color: "#1DA89A" }}>
                      {feat.icon}
                    </div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#a0b8b8", lineHeight: 1.5 }}>{feat.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href="/produtos">
                  <a className="btn-primary">
                    Ver o Athena Clinic <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
                <Link href="/contato">
                  <a className="btn-ghost">Solicitar demo</a>
                </Link>
              </div>
            </div>

            {/* Right: visual mockup */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(circle at 50% 50%, rgba(29,168,154,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: "#0F1E1E", border: "1px solid rgba(94,196,188,0.15)", padding: "2px" }}
              >
                {/* Fake window bar */}
                <div style={{ background: "#0A1515", padding: "12px 20px", borderBottom: "1px solid rgba(94,196,188,0.08)", display: "flex", alignItems: "center", gap: "8px" }}>
                  {["#1DA89A", "#5EC4BC", "#2a4040"].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", color: "#3a6060", marginLeft: "12px" }}>Athena Clinic SO — Dashboard</span>
                </div>

                <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  {/* KPI row */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                    {[
                      { label: "Faturamento", value: "R$ 48.200", trend: "+12%" },
                      { label: "Agendamentos", value: "183", trend: "+8%" },
                      { label: "Satisfação", value: "4.9 / 5", trend: "★★★★★" },
                    ].map((kpi, i) => (
                      <div key={i} style={{ background: "#0A1515", border: "1px solid rgba(94,196,188,0.08)", borderRadius: "10px", padding: "12px" }}>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.625rem", color: "#3a6060", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{kpi.label}</div>
                        <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F2EDE8", marginBottom: "4px" }}>{kpi.value}</div>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", color: "#1DA89A" }}>{kpi.trend}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chat IA */}
                  <div style={{ background: "#0A1515", border: "1px solid rgba(94,196,188,0.08)", borderRadius: "10px", padding: "16px" }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#1DA89A", marginBottom: "12px" }}>◈ ATHENA IA — Consultor Pessoal</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ background: "rgba(29,168,154,0.08)", borderRadius: "8px", padding: "10px 12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#a0b8b8" }}>
                        Seu faturamento cresceu 12% em relação ao mês anterior. Recomendo ativar a lista de espera para sextas-feiras — 24 pacientes aguardam.
                      </div>
                      <div style={{ alignSelf: "flex-end", background: "rgba(94,196,188,0.06)", border: "1px solid rgba(94,196,188,0.12)", borderRadius: "8px", padding: "8px 12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#6a8a8a" }}>
                        Mostre o relatório de comissões de outubro
                      </div>
                    </div>
                  </div>

                  {/* Bottom status */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1DA89A" }} className="animate-pulse" />
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#3a6060" }}>Agente WhatsApp ativo</span>
                    </div>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#3a6060" }}>3 consultas atendidas agora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANOS ── */}
      <section className="py-28">
        <div className="container">
          <div className="text-center mb-16">
            <div className="athena-badge mb-6 justify-center">Planos Athena Clinic SO</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#F2EDE8", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              Escolha o plano certo<br />para sua clínica
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6a8a8a", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
              Todos os planos incluem suporte, atualizações automáticas e agente IA. Sem fidelidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8 flex flex-col"
                style={{
                  background: plan.highlight ? "rgba(20,122,120,0.12)" : "#0F1E1E",
                  border: plan.highlight ? "1px solid rgba(29,168,154,0.4)" : "1px solid rgba(94,196,188,0.10)",
                  boxShadow: plan.highlight ? "0 0 60px rgba(29,168,154,0.12)" : "none"
                }}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="athena-badge" style={{ background: "#147A78", color: "#F2EDE8", borderColor: "#1DA89A", fontSize: "0.6rem" }}>
                      Mais escolhido
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#F2EDE8", marginBottom: "0.5rem" }}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: plan.period ? "2.25rem" : "1.5rem", color: plan.highlight ? "#1DA89A" : "#F2EDE8", letterSpacing: "-0.04em" }}>{plan.price}</span>
                    {plan.period && <span style={{ color: "#6a8a8a", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}>{plan.period}</span>}
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#6a8a8a", lineHeight: 1.55 }}>{plan.desc}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#1DA89A" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#9ab4b4" }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contato">
                  <a className={plan.highlight ? "btn-primary justify-center text-center" : "btn-ghost justify-center text-center"} style={{ width: "100%" }}>
                    {plan.cta}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: "#0A1818" }}
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(20,122,120,0.12) 0%, transparent 70%)" }} />

        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="athena-badge mb-8 justify-center">Próximo passo</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.75rem)", color: "#F2EDE8", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Pronto para automatizar sua operação com{" "}
              <span className="text-gradient-teal">inteligência real?</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", color: "#6a8a8a", marginBottom: "2.5rem", lineHeight: 1.65 }}>
              Agende um diagnóstico gratuito de 30 minutos. Identificamos em quais processos a IA pode gerar mais resultado para o seu negócio.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contato">
                <a className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
                  Agendar diagnóstico gratuito <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
                Falar agora no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
