import MainLayout from "@/components/MainLayout";
import { Link } from "wouter";
import { ArrowRight, MessageSquare, Calendar, FileText, DollarSign, Brain, BarChart3, CheckCircle2, CreditCard, Users, Stethoscope, Shield } from "lucide-react";
import SchemaOrgProdutos from "@/components/SchemaOrgProdutos";
import SchemaOrgAthenaClinc from "@/components/SchemaOrgAthenaClinc";

const WHATSAPP = "5567993013370";
const WHATSAPP_MSG = encodeURIComponent("Olá! Quero uma demonstração do Athena Clinic SO.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;

function AthenaSymbol({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <polygon points="28,4 52,50 4,50" fill="none" stroke="#1DA89A" strokeWidth="2.5" strokeLinejoin="round"/>
      <polygon points="28,16 43,46 13,46" fill="#147A78"/>
      <polygon points="28,26 36,42 20,42" fill="#1DA89A"/>
    </svg>
  );
}

const modules = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Agente IA no WhatsApp",
    desc: "Responde pacientes, tira dúvidas, envia confirmações e agenda consultas automaticamente — 24 horas por dia, 7 dias por semana. Sem perder nenhum contato.",
    tag: "Atendimento"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Agendamento Inteligente",
    desc: "Agenda automática com confirmação via WhatsApp, gestão de encaixes, lista de espera e lembretes de consulta. Zero falta sem aviso.",
    tag: "Agenda"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "CRM de Pacientes",
    desc: "Histórico completo de cada paciente: contatos, consultas, preferências e status. Pipeline de relacionamento para fidelizar e recuperar pacientes inativos.",
    tag: "CRM"
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Prontuário Eletrônico",
    desc: "Prontuário digital seguro e organizado. Anamnese estruturada, registro de laudos e histórico clínico acessível em qualquer dispositivo.",
    tag: "Prontuário"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Gestão Financeira Completa",
    desc: "Contas a pagar e receber, fluxo de caixa, conciliação bancária, controle de comissões médicas e geração de relatórios. Sua clínica no azul.",
    tag: "Financeiro"
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Integração com Maquininha",
    desc: "Pagamentos integrados diretamente ao sistema. Baixa automática de recebimentos, controle de parcelamentos e conferência simplificada.",
    tag: "Pagamentos"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Consultor IA Pessoal",
    desc: "Uma IA que conhece sua clínica de dentro para fora. Responde perguntas, executa relatórios sob demanda e traz insights proativos para o dono — como um CFO virtual.",
    tag: "Inteligência"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Dashboards em Tempo Real",
    desc: "Visão completa da saúde da sua clínica: faturamento, ocupação, taxa de retorno de pacientes, margem e muito mais. Decisões baseadas em dados reais.",
    tag: "Analytics"
  },
];

const plans = [
  {
    name: "Starter",
    price: "R$ 297",
    period: "/mês",
    ideal: "Clínicas que querem começar com atendimento automatizado",
    features: [
      "Agente IA no WhatsApp",
      "CRM de Pacientes",
      "Agendamento inteligente",
      "Confirmações automáticas",
      "Suporte por chat",
    ],
    highlight: false,
    cta: "Começar agora",
    ctaHref: "/contato"
  },
  {
    name: "Pro",
    price: "R$ 549",
    period: "/mês",
    ideal: "Gestão completa com IA em todos os processos",
    features: [
      "Tudo do Starter",
      "Prontuário eletrônico",
      "Gestão financeira completa",
      "Integração com maquininha",
      "Controle de comissões",
      "Consultor IA pessoal",
      "Dashboards em tempo real",
      "Relatórios automáticos",
      "Suporte prioritário",
    ],
    highlight: true,
    cta: "Solicitar demonstração",
    ctaHref: "/contato"
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    ideal: "Clínicas de médio/grande porte com múltiplos usuários",
    features: [
      "Tudo do Pro",
      "Múltiplos usuários e perfis",
      "Customizações sob medida",
      "Integrações dedicadas",
      "SLA garantido",
      "Gerente de conta dedicado",
      "Treinamento da equipe",
    ],
    highlight: false,
    cta: "Falar com consultor",
    ctaHref: "/contato"
  }
];

export default function Produtos() {
  return (
    <>
      <SchemaOrgProdutos />
      <SchemaOrgAthenaClinc />
      <MainLayout>
        {/* ── HERO ── */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,122,120,0.15) 0%, transparent 60%)" }} />

          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <AthenaSymbol size={48} />
                <div className="athena-badge">Produto Principal</div>
              </div>
              <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4.5rem)", color: "#F2EDE8", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                Athena Clinic SO
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.25rem", color: "#7a9a9a", lineHeight: 1.65, maxWidth: "680px", marginBottom: "0.75rem" }}>
                O sistema operacional completo para clínicas médicas particulares. Automatize 100% da jornada do paciente — do primeiro contato no WhatsApp até o relatório financeiro do mês.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#4a6868", lineHeight: 1.6, maxWidth: "600px", marginBottom: "2.5rem" }}>
                Indicado para clínicas de pequeno a grande porte. Quanto maior a operação, maior o impacto da automação.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contato">
                  <a className="btn-primary">
                    Solicitar demonstração <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MÓDULOS ── */}
        <section style={{ background: "#0A1818", borderTop: "1px solid rgba(94,196,188,0.08)" }} className="py-24">
          <div className="container">
            <div className="mb-14">
              <div className="athena-badge mb-5">Funcionalidades</div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F2EDE8", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                Tudo que sua clínica precisa,<br />
                <span className="text-gradient-teal">em um único sistema.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6a8a8a", maxWidth: "540px", lineHeight: 1.6 }}>
                8 módulos integrados que eliminam planilhas, papéis e sistemas desconectados. Uma única plataforma, do atendimento ao financeiro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className="card-surface p-7 group"
                  style={{ background: "#0F1E1E" }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ background: "rgba(29,168,154,0.08)", border: "1px solid rgba(29,168,154,0.15)", color: "#1DA89A" }}>
                    {mod.icon}
                  </div>
                  <div className="athena-badge mb-4" style={{ fontSize: "0.6rem" }}>{mod.tag}</div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F2EDE8", marginBottom: "0.625rem", lineHeight: 1.3 }}>{mod.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#5a7a7a", lineHeight: 1.65 }}>{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLANOS ── */}
        <section className="py-24">
          <div className="container">
            <div className="text-center mb-14">
              <div className="athena-badge mb-5 justify-center">Planos e Preços</div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F2EDE8", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                Transparência total.<br />Sem surpresas.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6a8a8a", maxWidth: "460px", margin: "0 auto", lineHeight: 1.6 }}>
                Planos mensais sem fidelidade. Upgrades e cancelamentos a qualquer momento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-8 flex flex-col"
                  style={{
                    background: plan.highlight ? "rgba(20,122,120,0.10)" : "#0F1E1E",
                    border: plan.highlight ? "1px solid rgba(29,168,154,0.35)" : "1px solid rgba(94,196,188,0.09)",
                    boxShadow: plan.highlight ? "0 0 60px rgba(29,168,154,0.10)" : "none"
                  }}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span style={{ background: "#147A78", color: "#F2EDE8", fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.10em", textTransform: "uppercase", padding: "4px 14px", borderRadius: "999px", border: "1px solid #1DA89A", display: "block", whiteSpace: "nowrap" }}>
                        Mais escolhido
                      </span>
                    </div>
                  )}

                  <div className="mb-1">
                    <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#F2EDE8", marginBottom: "0.375rem" }}>{plan.name}</h3>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#4a6868", marginBottom: "1.25rem", lineHeight: 1.4 }}>Ideal para: {plan.ideal}</div>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: plan.period ? "2.5rem" : "1.375rem", color: plan.highlight ? "#1DA89A" : "#F2EDE8", letterSpacing: "-0.04em" }}>{plan.price}</span>
                      {plan.period && <span style={{ color: "#4a6868", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}>{plan.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#1DA89A" }} />
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#8aacac" }}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.ctaHref}>
                    <a className={plan.highlight ? "btn-primary justify-center text-center" : "btn-ghost justify-center text-center"} style={{ width: "100%" }}>
                      {plan.cta}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEGURANÇA ── */}
        <section style={{ background: "#0A1818", borderTop: "1px solid rgba(94,196,188,0.08)", borderBottom: "1px solid rgba(94,196,188,0.08)" }} className="py-14">
          <div className="container">
            <div className="flex flex-wrap gap-8 justify-center items-center">
              {[
                { icon: <Shield className="w-5 h-5" />, text: "Dados protegidos — LGPD compliant" },
                { icon: <CheckCircle2 className="w-5 h-5" />, text: "Backup automático diário" },
                { icon: <FileText className="w-5 h-5" />, text: "Prontuários com assinatura digital" },
                { icon: <Brain className="w-5 h-5" />, text: "IA treinada para saúde" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ color: "#1DA89A" }}>{item.icon}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#6a8a8a" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(20,122,120,0.10) 0%, transparent 70%)" }} />
          <div className="container relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#F2EDE8", letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                Agende uma demo gratuita<br />
                <span className="text-gradient-teal">e veja ao vivo.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6a8a8a", marginBottom: "2.5rem", lineHeight: 1.6 }}>
                Mostramos o Athena Clinic SO funcionando com dados reais de clínicas como a sua. Sem enrolação, sem PowerPoint.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contato">
                  <a className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
                    Quero minha demonstração <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
                  WhatsApp: (67) 99301-3370
                </a>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
