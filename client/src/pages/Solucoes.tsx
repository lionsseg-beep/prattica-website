import MainLayout from "@/components/MainLayout";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Zap, Layers, GraduationCap } from "lucide-react";

const WPP = "https://wa.me/5567993013370?text=" + encodeURIComponent("Olá! Quero saber mais sobre as soluções da Prattica AI.");

const solucoes = [
  {
    icon: <Layers style={{ width: 28, height: 28 }} />,
    id: "consultoria",
    title: "Consultoria Estratégica",
    sub: "Diagnóstico profundo. Implementação real.",
    desc: "Mapeamos como sua operação funciona de fato — não como deveria funcionar no papel. Identificamos gargalos, processos redundantes e oportunidades de automação que custam receita sem que você perceba.",
    itens: [
      "Diagnóstico e mapeamento de processos (BPM)",
      "Redesenho operacional com foco em eficiência",
      "Definição de KPIs e métricas de resultado",
      "Gestão de mudança e implementação acompanhada",
      "Planejamento estratégico orientado a dados",
    ],
    resultado: "Redução de custos operacionais e aumento de produtividade sem aumento de headcount.",
  },
  {
    icon: <Zap style={{ width: 28, height: 28 }} />,
    id: "automacao",
    title: "Automação de Processos",
    sub: "Menos trabalho manual. Mais resultado.",
    desc: "Implementamos fluxos automatizados que eliminam tarefas repetitivas, reduzem erros humanos e integram sistemas que hoje não se falam. Sua equipe para de operar e começa a decidir.",
    itens: [
      "Automação de atendimento e triagem via agentes",
      "Integração de sistemas via API",
      "Workflows automatizados de aprovação e notificação",
      "Automação de relatórios e consolidação de dados",
      "Monitoramento e alertas inteligentes",
    ],
    resultado: "Processos que antes levavam horas passam a executar em minutos — sem intervenção humana.",
  },
  {
    icon: <BarChart3 style={{ width: 28, height: 28 }} />,
    id: "dados",
    title: "Inteligência de Dados",
    sub: "Seus dados trabalhando por você.",
    desc: "Estruturamos a coleta, organização e análise dos dados da sua operação para que eles deixem de ser arquivo morto e passem a orientar decisão. Com IA nativa que aprende com o seu negócio.",
    itens: [
      "Estruturação de base de dados operacional",
      "Dashboards de indicadores em tempo real",
      "Modelos preditivos customizados",
      "Relatórios automáticos para gestão",
      "IA nativa integrada à operação",
    ],
    resultado: "Decisões baseadas em dados reais da sua operação — não em intuição ou planilhas desatualizadas.",
  },
  {
    icon: <GraduationCap style={{ width: 28, height: 28 }} />,
    id: "academy",
    title: "Prattica Academy",
    sub: "Sua equipe operando com inteligência.",
    desc: "Tecnologia sem capacitação é custo. Treinamos seu time para pensar com dados, operar com automação e extrair resultado das ferramentas implementadas — com ou sem suporte técnico constante.",
    itens: [
      "Workshops in-company de automação e dados",
      "Trilhas de formação por função e nível",
      "Mentoria para líderes de operação",
      "Treinamento em ferramentas implementadas",
      "Cultura orientada a resultado mensurável",
    ],
    resultado: "Times autônomos que operam com inteligência — sem depender de suporte técnico para cada decisão.",
  },
];

export default function Solucoes() {
  return (
    <MainLayout>
      <section style={{ position: "relative", padding: "7rem 0 4rem", overflow: "hidden" }}>
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(27,122,120,0.14) 0%, transparent 60%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: "1.5rem" }}>Soluções</div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: "1.25rem", maxWidth: 680 }}>
            Tecnologia aplicada.<br /><span className="text-gradient">Resultado comprovado.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#7AACAC", maxWidth: 560, lineHeight: 1.65 }}>
            Uma suite completa que cobre desde o diagnóstico estratégico até a implementação técnica — com foco em métricas reais desde o primeiro dia.
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 0 6rem" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {solucoes.map((sol, i) => (
            <div key={i} id={sol.id} className="card-surface group" style={{ padding: "2.5rem 3rem", position: "relative", overflow: "hidden" }}>
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(27,122,120,0.04), transparent)", opacity: 0, transition: "opacity 0.4s" }} />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start" style={{ position: "relative", zIndex: 2 }}>
                <div style={{ gridColumn: "span 4" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(94,196,188,0.08)", border: "1px solid rgba(94,196,188,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5EC4BC", marginBottom: "1.25rem" }}>
                    {sol.icon}
                  </div>
                  <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#E8F0F0", marginBottom: "0.375rem" }}>{sol.title}</h2>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", color: "#5EC4BC", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>{sol.sub}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#7AACAC", lineHeight: 1.65, marginBottom: "1.5rem" }}>{sol.desc}</p>
                  <div style={{ padding: "0.875rem 1.25rem", borderRadius: 10, background: "rgba(27,122,120,0.08)", border: "1px solid rgba(94,196,188,0.12)" }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#5EC4BC", textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 6 }}>Resultado esperado</div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#7AACAC", lineHeight: 1.55 }}>{sol.resultado}</p>
                  </div>
                </div>
                <div style={{ gridColumn: "span 8" }}>
                  <div style={{ padding: "2rem", background: "#080E0E", borderRadius: 14, border: "1px solid rgba(94,196,188,0.08)" }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#3A6868", textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: "1.25rem" }}>O que entregamos</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                      {sol.itens.map((item, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B7A78", flexShrink: 0, marginTop: 7 }} />
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#7AACAC", lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(94,196,188,0.08)" }}>
                      <Link href="/contato">
                        <a className="btn-teal" style={{ fontSize: "0.875rem", padding: "0.625rem 1.25rem" }}>
                          Saber mais <ArrowRight style={{ width: 14, height: 14 }} />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", padding: "5rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 2.75rem)", color: "#E8F0F0", letterSpacing: "-0.035em", marginBottom: "1rem" }}>
            Não sabe por onde começar?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#7AACAC", maxWidth: 480, margin: "0 auto 2rem", lineHeight: 1.65 }}>
            Agendamos um diagnóstico gratuito de 30 minutos. Identificamos onde estão os maiores gargalos da sua operação e qual solução gera resultado mais rápido.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contato"><a className="btn-primary">Agendar diagnóstico gratuito <ArrowRight style={{ width: 16, height: 16 }} /></a></Link>
            <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-ghost">Falar no WhatsApp</a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
