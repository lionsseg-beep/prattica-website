import MainLayout from "@/components/MainLayout";
import { ArrowRight, BookOpen, Video, Users, Award, PlayCircle, Clock } from "lucide-react";

const WPP = "https://wa.me/5567996622860?text=" + encodeURIComponent("Olá! Quero saber mais sobre a Prattica Academy.");

const cursos = [
  {
    title: "Data Literacy",
    level: "Iniciante",
    duration: "12h",
    icon: <BookOpen style={{ width: 22, height: 22 }} />,
    desc: "Fundamentos de dados para profissionais não-técnicos. Aprenda a ler, analisar e comunicar com dados na rotina do seu trabalho.",
    topicos: ["O que são dados e como eles mentem", "Leitura e interpretação de dashboards", "Métricas que importam para gestores", "Como fazer perguntas certas para a IA"],
  },
  {
    title: "Automação Low-Code",
    level: "Intermediário",
    duration: "24h",
    icon: <Video style={{ width: 22, height: 22 }} />,
    desc: "Capacitação prática em ferramentas como n8n e Make para criar automações reais sem precisar de programador.",
    topicos: ["Lógica de fluxos e gatilhos", "Integrações com WhatsApp e e-mail", "Automação de relatórios e notificações", "Projetos práticos da sua operação"],
  },
  {
    title: "Liderança Analítica",
    level: "Avançado",
    duration: "16h",
    icon: <Users style={{ width: 22, height: 22 }} />,
    desc: "Para gestores e donos de negócio que querem liderar com dados e construir uma cultura de decisão inteligente na equipe.",
    topicos: ["Como montar um time orientado a dados", "Definição de OKRs e KPIs relevantes", "IA na tomada de decisão executiva", "Gestão de mudança tecnológica"],
  },
];

export default function Academy() {
  return (
    <MainLayout>

      {/* HERO */}
      <section style={{ position: "relative", padding: "7rem 0 4rem", overflow: "hidden" }}>
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(27,122,120,0.14) 0%, transparent 60%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 14px", borderRadius: 999, background: "rgba(94,196,188,0.08)", border: "1px solid rgba(94,196,188,0.18)", fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.10em", textTransform: "uppercase", color: "#5EC4BC", marginBottom: "1.5rem" }}>
            <Award style={{ width: 12, height: 12 }} /> Prattica Academy
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: "1.25rem", maxWidth: 700 }}>
            Tecnologia sem capacitação<br /><span className="text-gradient">é custo. Com capacitação, é vantagem.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#7AACAC", maxWidth: 580, lineHeight: 1.65, marginBottom: "2rem" }}>
            Formamos profissionais e equipes para operar com IA, automatizar processos e tomar decisões com dados — sem depender de suporte técnico para cada passo.
          </p>
          <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Ver catálogo completo <ArrowRight style={{ width: 16, height: 16 }} />
          </a>
        </div>
      </section>

      {/* TRILHAS */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1.25rem" }}>Trilhas de formação</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#E8F0F0", letterSpacing: "-0.035em", lineHeight: 1.15 }}>
              Do básico ao avançado.<br /><span className="text-gradient">Cada trilha com resultado prático.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cursos.map((curso, i) => (
              <div key={i} className="card-surface group" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(94,196,188,0.08)", border: "1px solid rgba(94,196,188,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5EC4BC" }}>
                    {curso.icon}
                  </div>
                  <span style={{ padding: "3px 10px", borderRadius: 999, background: "rgba(94,196,188,0.06)", border: "1px solid rgba(94,196,188,0.12)", fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#7AACAC", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {curso.level}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "#E8F0F0", marginBottom: "0.5rem" }}>{curso.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#7AACAC", lineHeight: 1.65 }}>{curso.desc}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {curso.topicos.map((t, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#1B7A78", flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#3A6868", lineHeight: 1.5 }}>{t}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid rgba(94,196,188,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#3A6868" }}>
                    <PlayCircle style={{ width: 12, height: 12 }} /> {curso.duration}
                  </span>
                  <a href={WPP} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", fontWeight: 500, color: "#5EC4BC", textDecoration: "none" }}>
                    Saber mais <ArrowRight style={{ width: 12, height: 12 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-COMPANY */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div className="card-surface" style={{ padding: "3.5rem", borderColor: "rgba(94,196,188,0.20)", background: "rgba(27,122,120,0.06)", position: "relative", overflow: "hidden" }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(27,122,120,0.10) 0%, transparent 60%)" }} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ position: "relative", zIndex: 2 }}>
              <div>
                <div className="badge" style={{ marginBottom: "1.25rem" }}>Workshops In-Company</div>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#E8F0F0", letterSpacing: "-0.035em", lineHeight: 1.2, marginBottom: "1rem" }}>
                  Leve a Prattica Academy<br /><span className="text-gradient">para dentro da sua empresa.</span>
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#7AACAC", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Desenvolvemos programas customizados para a realidade do seu negócio. Workshops onde sua equipe resolve problemas reais da operação — não casos genéricos de outros mercados.
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Solicitar proposta <ArrowRight style={{ width: 16, height: 16 }} />
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: <Clock style={{ width: 16, height: 16 }} />, t: "Formato flexível", d: "Presencial, remoto ou híbrido — adaptamos ao seu modelo de trabalho." },
                  { icon: <Users style={{ width: 16, height: 16 }} />, t: "Personalizado por função", d: "Conteúdo diferente para operacional, gestão e liderança executiva." },
                  { icon: <BookOpen style={{ width: 16, height: 16 }} />, t: "Casos reais da sua empresa", d: "Usamos os dados e processos da sua operação como laboratório." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(94,196,188,0.08)", border: "1px solid rgba(94,196,188,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5EC4BC", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#E8F0F0", marginBottom: 3 }}>{item.t}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#7AACAC", lineHeight: 1.5 }}>{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
