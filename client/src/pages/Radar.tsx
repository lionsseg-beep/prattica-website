import MainLayout from "@/components/MainLayout";
import { ArrowRight, Calendar, Tag, TrendingUp, Cpu, BookOpen } from "lucide-react";

const WPP = "https://wa.me/5567993013370?text=" + encodeURIComponent("Olá! Vim pelo Radar da Prattica AI e quero saber mais.");

const posts = [
  {
    category: "Tendências",
    categoryIcon: <TrendingUp style={{ width: 12, height: 12 }} />,
    date: "Mar 2026",
    readTime: "6 min",
    title: "O fim dos dashboards estáticos: como a IA generativa está mudando a análise de dados",
    excerpt: "LLMs estão transformando a forma como gestores interagem com seus dados — de filtros complexos para perguntas em linguagem natural. O que isso significa para quem gerencia operações hoje.",
    tag: "IA & Dados",
  },
  {
    category: "Operações",
    categoryIcon: <Cpu style={{ width: 12, height: 12 }} />,
    date: "Fev 2026",
    readTime: "8 min",
    title: "Automação em clínicas de saúde: onde começa, quanto custa e o que realmente funciona",
    excerpt: "Análise prática sobre automação de atendimento, agendamento e financeiro em clínicas brasileiras — com os erros mais comuns de implementação e como evitá-los.",
    tag: "Saúde & Gestão",
  },
  {
    category: "Estratégia",
    categoryIcon: <BookOpen style={{ width: 12, height: 12 }} />,
    date: "Jan 2026",
    readTime: "5 min",
    title: "Dados vs intuição: por que gestores ainda decidem com base em 'feeling' mesmo tendo um sistema",
    excerpt: "O problema não é falta de dados. É falta de inteligência. Como estruturar informação para que ela oriente decisão em vez de apenas registrar o passado.",
    tag: "Gestão",
  },
];

export default function Radar() {
  return (
    <MainLayout>

      {/* HERO */}
      <section style={{ position: "relative", padding: "7rem 0 4rem", overflow: "hidden" }}>
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(27,122,120,0.14) 0%, transparent 60%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: "1.5rem" }}>Radar Prattica</div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: "1.25rem", maxWidth: 680 }}>
            Inteligência para quem<br /><span className="text-gradient">toma decisões com dados.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#7AACAC", maxWidth: 560, lineHeight: 1.65 }}>
            Análises, tendências e insights práticos sobre automação, IA e gestão inteligente — publicados pela equipe técnica da Prattica AI.
          </p>
        </div>
      </section>

      {/* ARTIGOS */}
      <section style={{ padding: "2rem 0 6rem" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {posts.map((post, i) => (
            <article key={i} className="card-surface group" style={{ padding: "2.5rem", cursor: "pointer", transition: "all 0.3s" }}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div style={{ gridColumn: "span 8" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#5EC4BC", textTransform: "uppercase", letterSpacing: "0.10em" }}>
                      {post.categoryIcon} {post.category}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#3A6868", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      <Calendar style={{ width: 10, height: 10 }} /> {post.date}
                    </span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#3A6868" }}>{post.readTime} leitura</span>
                  </div>

                  <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)", color: "#E8F0F0", letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: "0.875rem" }}>
                    {post.title}
                  </h2>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#7AACAC", lineHeight: 1.7 }}>
                    {post.excerpt}
                  </p>
                </div>

                <div style={{ gridColumn: "span 4", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", height: "100%", gap: "1rem" }}>
                  <span style={{ padding: "4px 12px", borderRadius: 999, background: "rgba(94,196,188,0.06)", border: "1px solid rgba(94,196,188,0.12)", fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#7AACAC", textTransform: "uppercase", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: 5 }}>
                    <Tag style={{ width: 10, height: 10 }} /> {post.tag}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "#5EC4BC" }}>
                    Ler artigo <ArrowRight style={{ width: 14, height: 14 }} />
                  </span>
                </div>
              </div>
            </article>
          ))}

          {/* Estado vazio — mais artigos em breve */}
          <div className="card-surface" style={{ padding: "3rem", textAlign: "center", opacity: 0.6 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", color: "#3A6868", textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: "0.75rem" }}>Em breve</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#3A6868" }}>
              Novos artigos publicados semanalmente pela equipe técnica da Prattica AI.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — newsletter/whatsapp */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", padding: "5rem 0", textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <div className="badge" style={{ marginBottom: "1.5rem" }}>Fique atualizado</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#E8F0F0", letterSpacing: "-0.035em", marginBottom: "1rem", lineHeight: 1.2 }}>
              Receba insights diretamente<br /><span className="text-gradient">no seu WhatsApp.</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#7AACAC", marginBottom: "2rem", lineHeight: 1.65 }}>
              Nossa equipe compartilha análises, tendências e casos práticos com quem acompanha o Radar.
            </p>
            <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Entrar na lista <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
