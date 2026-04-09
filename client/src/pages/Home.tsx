import { Link } from "wouter";
import MainLayout from "@/components/MainLayout";
import AthenaLogo from "@/components/AthenaLogo";
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquare, Calendar, DollarSign, Brain, BarChart3, Zap, Layers, Bot, X } from "lucide-react";

const WPP = "5567993013370";
const WPP_MSG = encodeURIComponent("Olá! Quero conhecer o Athena Clinic SO.");
const WPP_URL = `https://wa.me/${WPP}?text=${WPP_MSG}`;

/* ── DORES — PROBLEMA ── */
const pains = [
  {
    icon: "📱",
    title: "Pacientes sem resposta no WhatsApp",
    desc: "Sua recepção não dá conta. Cada mensagem ignorada é um paciente que agenda na concorrência."
  },
  {
    icon: "📋",
    title: "Agenda bagunçada e faltas sem aviso",
    desc: "Horários vagos que deveriam estar gerando faturamento. Nenhum sistema de confirmação automática."
  },
  {
    icon: "💸",
    title: "Financeiro no Excel ou no papel",
    desc: "Você não sabe hoje quanto entrou, quanto saiu nem qual a margem real da sua clínica."
  },
  {
    icon: "👥",
    title: "Mais funcionários para cobrir mais demanda",
    desc: "Cada novo funcionário aumenta o custo fixo e diminui o lucro. O problema não é de gente — é de processo."
  },
  {
    icon: "🔄",
    title: "A clínica depende de você para tudo",
    desc: "Você formou anos para ser médico. Hoje passa metade do dia resolvendo problema de gestão."
  },
];

/* ── FEATURES ── */
const features = [
  { icon: <MessageSquare className="w-5 h-5" />, title: "Agente IA no WhatsApp", desc: "Atende, agenda e responde 24h/dia. Zero contato perdido.", tag: "Atendimento" },
  { icon: <Calendar className="w-5 h-5" />,       title: "Agendamento inteligente", desc: "Confirmação automática, lista de espera, zero falta.", tag: "Agenda" },
  { icon: <Brain className="w-5 h-5" />,          title: "Consultor IA pessoal", desc: "Insights e relatórios sob demanda para o dono.", tag: "Inteligência" },
  { icon: <DollarSign className="w-5 h-5" />,     title: "Gestão financeira", desc: "Caixa, comissões, integração com maquininha.", tag: "Financeiro" },
  { icon: <BarChart3 className="w-5 h-5" />,      title: "Dashboards em tempo real", desc: "Saúde financeira da clínica sempre visível.", tag: "Analytics" },
  { icon: <Bot className="w-5 h-5" />,            title: "CRM + Prontuário", desc: "Histórico completo, seguro, acessível.", tag: "Gestão" },
];

/* ── PLANOS ── */
const plans = [
  {
    name: "Starter",
    price: "R$ 297",
    period: "/mês",
    ideal: "Para começar com atendimento automatizado",
    features: ["Agente IA no WhatsApp", "CRM de pacientes", "Agendamento inteligente", "Confirmações automáticas", "Suporte por chat"],
    highlight: false,
    cta: "Começar agora",
  },
  {
    name: "Pro",
    price: "R$ 549",
    period: "/mês",
    ideal: "Gestão completa com IA em todos os processos",
    features: ["Tudo do Starter", "Prontuário eletrônico", "Gestão financeira completa", "Integração maquininha", "Comissões médicas", "Consultor IA pessoal", "Dashboards em tempo real", "Suporte prioritário"],
    highlight: true,
    cta: "Solicitar demonstração",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    ideal: "Clínicas de médio/grande porte",
    features: ["Tudo do Pro", "Múltiplos usuários", "Customizações dedicadas", "SLA garantido", "Gerente de conta"],
    highlight: false,
    cta: "Falar com consultor",
  },
];

export default function Home() {
  return (
    <MainLayout>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#FFFFFF", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="absolute inset-0 bg-dots opacity-60" />
        <div className="absolute top-0 right-0 w-1/2 h-full" style={{ background: "linear-gradient(to left, rgba(27,122,120,0.06), transparent)" }} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="athena-badge mb-6">
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1B7A78", display: "inline-block", animation: "pulse 2s infinite" }} />
                Athena Clinic SO — Sistema Operacional para Clínicas
              </div>

              <h1 style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                color: "#0D5252",
                marginBottom: "1.5rem",
              }}>
                Você se formou para<br />
                curar pessoas.<br />
                <span className="text-gradient-light">Não para gerenciar caos.</span>
              </h1>

              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", color: "#4A6868", lineHeight: 1.7, maxWidth: "520px", marginBottom: "2.5rem" }}>
                O Athena Clinic SO automatiza o atendimento, a agenda, o financeiro e a gestão da sua clínica — com agentes de IA que trabalham enquanto você faz o que realmente importa.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: "2.5rem" }}>
                <Link href="/contato">
                  <a className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                    Agendar diagnóstico grátis <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
                <a href={WPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                  Falar no WhatsApp
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["MVP validado em clínicas reais", "Sem fidelidade", "LGPD compliant"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 style={{ width: 16, height: 16, color: "#1B7A78", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#7A9898" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dashboard mockup */}
            <div className="relative" style={{ display: "none" }}>
              {/* Shown only lg+ via CSS below */}
            </div>
            <div className="hidden lg:block relative">
              <div className="animate-float">
                {/* Dashboard window */}
                <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,122,120,0.15)", borderRadius: 20, boxShadow: "0 24px 80px rgba(13,82,82,0.12)", overflow: "hidden" }}>
                  {/* Window bar */}
                  <div style={{ background: "#F7F7F8", padding: "12px 20px", borderBottom: "1px solid rgba(27,122,120,0.08)", display: "flex", alignItems: "center", gap: 8 }}>
                    {["#1B7A78", "#5BB5B0", "#d1d5db"].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#7A9898", marginLeft: 10 }}>Athena Clinic SO — Dashboard</span>
                  </div>

                  <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                    {/* KPIs */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                      {[
                        { label: "Faturamento", value: "R$48.2k", trend: "↑ +12%" },
                        { label: "Agendamentos", value: "183", trend: "↑ +8%" },
                        { label: "Satisfação", value: "4.9/5", trend: "★★★★★" },
                      ].map((kpi, i) => (
                        <div key={i} style={{ background: "#F7F7F8", border: "1px solid rgba(27,122,120,0.08)", borderRadius: 10, padding: "12px" }}>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#7A9898", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>{kpi.label}</div>
                          <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0D5252", marginBottom: 3 }}>{kpi.value}</div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#1B7A78" }}>{kpi.trend}</div>
                        </div>
                      ))}
                    </div>

                    {/* AI Chat */}
                    <div style={{ background: "#F7F7F8", border: "1px solid rgba(27,122,120,0.08)", borderRadius: 10, padding: 16 }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#1B7A78", marginBottom: 10, display: "flex", alignItems: "center", gap: 5 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B7A78", animation: "pulse 2s infinite" }} />
                        ATHENA IA — Consultor Pessoal
                      </div>
                      <div style={{ background: "rgba(27,122,120,0.06)", borderRadius: 8, padding: "10px 12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#4A6868", lineHeight: 1.5, marginBottom: 8 }}>
                        Seu faturamento cresceu 12% este mês. 24 pacientes aguardam na lista de espera para sextas. Recomendo ativar encaixes.
                      </div>
                      <div style={{ alignSelf: "flex-end", background: "#EEEEF0", borderRadius: 8, padding: "8px 12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#7A9898", textAlign: "right" }}>
                        Gere o relatório de comissões de outubro
                      </div>
                    </div>

                    {/* Status */}
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#7A9898" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B7A78", animation: "pulse 2s infinite" }} />
                        Agente WhatsApp ativo
                      </div>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#7A9898" }}>3 consultas atendidas agora</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#0D5252", padding: "3.5rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+45%", label: "Eficiência operacional média" },
              { value: "24/7", label: "Atendimento com agente IA" },
              { value: "3x", label: "ROI médio em 12 meses" },
              { value: "0", label: "Contatos perdidos no WhatsApp" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#5BB5B0", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "rgba(126,200,196,0.7)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <section style={{ background: "#EEEEF0", padding: "6rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="athena-badge mb-6">O problema</div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#0D5252", letterSpacing: "-0.035em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Sua clínica perde dinheiro<br />
                <span className="text-gradient-teal">todo dia sem perceber.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#4A6868", lineHeight: 1.65, marginBottom: "2.5rem" }}>
                Não falta dedicação nem talento médico. Falta um sistema que faça a gestão trabalhar por você.
              </p>
              <Link href="/produtos">
                <a className="btn-primary">Ver como o Athena resolve <ArrowRight className="w-4 h-4" /></a>
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {pains.map((pain, i) => (
                <div key={i} className="card-surface" style={{ padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <span style={{ fontSize: "1.375rem", flexShrink: 0, marginTop: 2 }}>{pain.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.9375rem", color: "#0D5252", marginBottom: 4 }}>{pain.title}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#4A6868", lineHeight: 1.55 }}>{pain.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ATHENA — PRODUTO ── */}
      <section style={{ background: "#FFFFFF", padding: "6rem 0", borderTop: "1px solid rgba(27,122,120,0.08)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}>
              <AthenaLogo variant="full" size="lg" theme="light" />
            </div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#0D5252", letterSpacing: "-0.035em", lineHeight: 1.15, marginBottom: "1rem" }}>
              Tudo que sua clínica precisa,<br />
              <span className="text-gradient-light">em um único sistema com IA.</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#4A6868", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
              Do WhatsApp ao relatório financeiro — 8 módulos integrados que eliminam planilhas, papéis e sistemas desconectados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <div key={i} className="card-surface group" style={{ padding: "28px 24px", cursor: "default" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(27,122,120,0.08)", border: "1px solid rgba(27,122,120,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1B7A78", marginBottom: 18, transition: "transform 0.3s" }} className="group-hover:scale-110">
                  {feat.icon}
                </div>
                <div className="athena-badge" style={{ fontSize: "0.6rem", marginBottom: 10 }}>{feat.tag}</div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0D5252", marginBottom: "0.5rem" }}>{feat.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#4A6868", lineHeight: 1.65 }}>{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/produtos">
              <a style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", fontWeight: 500, color: "#1B7A78", textDecoration: "none" }}>
                Ver todos os módulos <ChevronRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PLANOS ── */}
      <section style={{ background: "#EEEEF0", padding: "6rem 0" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <div className="athena-badge" style={{ marginBottom: "1.25rem" }}>Planos e Preços</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#0D5252", letterSpacing: "-0.035em", marginBottom: "1rem" }}>
              Transparência total. Sem surpresas.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A6868", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              Mensalidade sem fidelidade. Upgrade ou cancelamento a qualquer momento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className="relative rounded-2xl p-8 flex flex-col" style={{
                background: plan.highlight ? "#1B7A78" : "#FFFFFF",
                border: plan.highlight ? "none" : "1px solid rgba(27,122,120,0.12)",
                boxShadow: plan.highlight ? "0 24px 60px rgba(13,82,82,0.20)" : "none",
              }}>
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span style={{ background: "#0D5252", color: "#EEEEF0", fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.10em", textTransform: "uppercase", padding: "4px 16px", borderRadius: 999, display: "block", whiteSpace: "nowrap" }}>
                      Mais escolhido
                    </span>
                  </div>
                )}

                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: plan.highlight ? "#EEEEF0" : "#0D5252", marginBottom: 4 }}>{plan.name}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: plan.highlight ? "rgba(238,238,240,0.7)" : "#7A9898", marginBottom: "1.25rem", lineHeight: 1.4 }}>{plan.ideal}</p>

                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: "1.5rem" }}>
                  <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: plan.period ? "2.5rem" : "1.375rem", color: plan.highlight ? "#EEEEF0" : "#0D5252", letterSpacing: "-0.04em" }}>{plan.price}</span>
                  {plan.period && <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: plan.highlight ? "rgba(238,238,240,0.6)" : "#7A9898" }}>{plan.period}</span>}
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: "2rem", flex: 1 }}>
                  {plan.features.map((feat, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckCircle2 style={{ width: 16, height: 16, flexShrink: 0, marginTop: 2, color: plan.highlight ? "#7EC8C4" : "#1B7A78" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: plan.highlight ? "rgba(238,238,240,0.85)" : "#4A6868" }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contato">
                  <a className={plan.highlight ? "btn-white" : "btn-ghost"} style={{ width: "100%", justifyContent: "center" }}>
                    {plan.cta}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="section-teal" style={{ padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="athena-badge athena-badge-dark mb-8" style={{ justifyContent: "center" }}>Próximo passo</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#EEEEF0", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Sua clínica trabalhando<br />
              enquanto você descansa.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", color: "rgba(238,238,240,0.75)", marginBottom: "2.5rem", lineHeight: 1.65 }}>
              Agende um diagnóstico gratuito de 30 minutos. Mostramos ao vivo onde a IA pode reduzir custos e aumentar o faturamento da sua clínica.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <Link href="/contato">
                <a className="btn-white" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
                  Agendar diagnóstico gratuito <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a href={WPP_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "1rem 2.5rem", background: "rgba(255,255,255,0.12)", color: "#EEEEF0", fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "1rem", borderRadius: 10, border: "1.5px solid rgba(255,255,255,0.25)", transition: "all 0.25s", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.20)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}>
                Falar agora no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
