import { Link } from "wouter";
import MainLayout from "@/components/MainLayout";
import { ArrowRight, ChevronRight, BarChart3, Zap, Layers, TrendingUp, Shield, Clock } from "lucide-react";

const WPP = "https://wa.me/5567993013370?text=" + encodeURIComponent("Olá! Quero conhecer as soluções da Prattica AI.");

const solucoes = [
  { icon: <BarChart3 style={{ width: 22, height: 22 }} />, title: "Inteligência de Dados", desc: "Transformamos os dados da sua operação em indicadores precisos, padrões previsíveis e decisões fundamentadas." },
  { icon: <Zap style={{ width: 22, height: 22 }} />, title: "Automação de Processos", desc: "Eliminamos tarefas manuais repetitivas com fluxos inteligentes que integram sistemas e liberam sua equipe." },
  { icon: <Layers style={{ width: 22, height: 22 }} />, title: "Consultoria Estratégica", desc: "Mapeamos gargalos, desenhamos a estrutura certa e implementamos mudanças com foco em resultado mensurável." },
];

const numeros = [
  { v: "1,5 anos", l: "desenvolvendo soluções com IA nativa" },
  { v: "3",        l: "produtos SaaS em desenvolvimento" },
  { v: "24/7",     l: "operação autônoma para os clientes" },
  { v: "ROI",      l: "mensurável desde o primeiro mês" },
];

export default function Home() {
  return (
    <MainLayout>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "7rem 0 5rem" }}>
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(27,122,120,0.18) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: 120, background: "linear-gradient(to top, #0D1A1A, transparent)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 820 }}>
            <div className="badge" style={{ marginBottom: "2rem", opacity: 0, animation: "fadeUp 0.6s ease 0.1s forwards" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5EC4BC", display: "inline-block", animation: "pulse 2s infinite" }} />
              Prattica AI Solutions — Campo Grande, MS
            </div>

            <h1 style={{
              fontFamily: "'Sora', sans-serif", fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.06,
              letterSpacing: "-0.045em", color: "#E8F0F0",
              marginBottom: "1.75rem",
              opacity: 0, animation: "fadeUp 0.6s ease 0.2s forwards"
            }}>
              Sua empresa já tem os dados.<br />
              <span className="text-gradient">Nós entregamos o que<br />eles significam.</span>
            </h1>

            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem",
              color: "#7AACAC", lineHeight: 1.7, maxWidth: 620,
              marginBottom: "2.5rem",
              opacity: 0, animation: "fadeUp 0.6s ease 0.3s forwards"
            }}>
              A Prattica AI desenvolve sistemas de gestão com IA nativa — construída dentro do seu negócio, não conectada por fora. Mais controle, mais previsibilidade, mais resultado.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, opacity: 0, animation: "fadeUp 0.6s ease 0.4s forwards" }}>
              <Link href="/solucoes"><a className="btn-primary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>Conhecer nossas soluções <ArrowRight style={{ width: 16, height: 16 }} /></a></Link>
              <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>Falar com especialista</a>
            </div>
          </div>
        </div>

        {/* Floating geometric decoration */}
        <div className="animate-float" style={{
          position: "absolute", right: "6%", top: "20%",
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27,122,120,0.10) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        <div className="animate-spin-slow" style={{
          position: "absolute", right: "12%", top: "25%",
          width: 220, height: 220,
          border: "1px solid rgba(94,196,188,0.08)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
      </section>

      {/* NÚMEROS */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", borderBottom: "1px solid rgba(94,196,188,0.08)", padding: "3.5rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {numeros.map((n, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#5EC4BC", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8 }}>{n.v}</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#3A6868", lineHeight: 1.45 }}>{n.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3.5rem" }}>
            <div className="badge">O que fazemos</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#E8F0F0", letterSpacing: "-0.035em", lineHeight: 1.15, maxWidth: 580 }}>
              Inteligência aplicada.<br /><span className="text-gradient">Resultado mensurável.</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#7AACAC", maxWidth: 520, lineHeight: 1.65 }}>
              Combinamos consultoria estratégica, automação de processos e produtos SaaS verticalizados para transformar operações em vantagem competitiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {solucoes.map((s, i) => (
              <div key={i} className="card-surface group" style={{ padding: "2rem", cursor: "default" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(94,196,188,0.08)", border: "1px solid rgba(94,196,188,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5EC4BC", marginBottom: "1.25rem", transition: "transform 0.3s" }} className="group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "#E8F0F0", marginBottom: "0.625rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#7AACAC", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/solucoes"><a style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", fontWeight: 500, color: "#5EC4BC", textDecoration: "none" }}>
              Ver todas as soluções <ChevronRight style={{ width: 16, height: 16 }} />
            </a></Link>
          </div>
        </div>
      </section>

      {/* ATHENA — PRODUTO DESTAQUE */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 80% at 90% 50%, rgba(27,122,120,0.08) 0%, transparent 60%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge" style={{ marginBottom: "1.5rem" }}>Produto principal</div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
                Athena Clinic SO
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#7AACAC", lineHeight: 1.7, marginBottom: "2rem" }}>
                O sistema de gestão que aprende com os dados da sua clínica e devolve isso como inteligência — para você tomar a decisão certa, no momento certo.
              </p>
              {[
                "Atendimento autônomo no WhatsApp 24h",
                "Gestão financeira com DRE em tempo real",
                "IA que conhece sua operação por dentro",
                "Do agendamento ao fechamento — tudo integrado",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#5EC4BC", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#7AACAC" }}>{item}</span>
                </div>
              ))}
              <div style={{ display: "flex", gap: 14, marginTop: "2rem", flexWrap: "wrap" }}>
                <a href="/athena-clinic-lp.html" className="btn-primary">
                  Ver o Athena Clinic <ArrowRight style={{ width: 16, height: 16 }} />
                </a>
                <Link href="/produtos"><a className="btn-ghost">Todos os produtos</a></Link>
              </div>
            </div>

            {/* Visual card */}
            <div>
              <div className="card-glow" style={{ padding: 2, borderRadius: 20 }}>
                <div style={{ background: "#0D1A1A", borderRadius: 18, overflow: "hidden" }}>
                  <div style={{ background: "#080E0E", padding: "12px 20px", borderBottom: "1px solid rgba(94,196,188,0.08)", display: "flex", alignItems: "center", gap: 8 }}>
                    {["#1B7A78", "#5EC4BC", "#162828"].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#3A6868", marginLeft: 10 }}>Athena Clinic SO — Painel Principal</span>
                  </div>
                  <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                      {[
                        { l: "Faturamento", v: "R$48.2k", t: "↑ 12%" },
                        { l: "Agendamentos", v: "183", t: "↑ 8%" },
                        { l: "Satisfação", v: "4.9/5", t: "★★★★★" },
                      ].map((k, i) => (
                        <div key={i} style={{ background: "#080E0E", border: "1px solid rgba(94,196,188,0.08)", borderRadius: 10, padding: 12 }}>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#3A6868", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>{k.l}</div>
                          <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#E8F0F0", marginBottom: 3 }}>{k.v}</div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#5EC4BC" }}>{k.t}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: "#080E0E", border: "1px solid rgba(94,196,188,0.08)", borderRadius: 10, padding: 16 }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#1B7A78", marginBottom: 10, display: "flex", alignItems: "center", gap: 5 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B7A78", animation: "pulse 2s infinite" }} />
                        IA ATHENA — CONSULTORA DA CLÍNICA
                      </div>
                      <div style={{ background: "rgba(27,122,120,0.06)", borderRadius: 8, padding: "10px 12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#7AACAC", lineHeight: 1.5, marginBottom: 8 }}>
                        Faturamento cresceu 12% este mês. 24 pacientes aguardam lista de espera nas sextas. Recomendo ativar encaixes — potencial de R$4.800 adicionais.
                      </div>
                      <div style={{ background: "rgba(94,196,188,0.04)", border: "1px solid rgba(94,196,188,0.08)", borderRadius: 8, padding: "8px 12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#3A6868", textAlign: "right" }}>
                        Gere o relatório de comissões de outubro
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#3A6868" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B7A78", animation: "pulse 2s infinite" }} />
                        Agente WhatsApp ativo
                      </div>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#3A6868" }}>3 atendimentos agora</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE PRATTICA */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="badge" style={{ marginBottom: "1.25rem" }}>Nosso diferencial</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#E8F0F0", letterSpacing: "-0.035em", lineHeight: 1.15 }}>
              IA Nativa não é IA conectada.<br /><span className="text-gradient">É uma diferença que importa.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: <TrendingUp style={{ width: 20, height: 20 }} />, title: "Aprende com seu negócio", desc: "A inteligência dos nossos sistemas é construída a partir dos dados da sua própria operação. Não é um modelo genérico conectado por fora." },
              { icon: <Shield style={{ width: 20, height: 20 }} />, title: "Seus dados ficam seus", desc: "Nenhuma informação da sua empresa alimenta sistemas externos. Armazenamento seguro, conformidade LGPD e exportação sob demanda." },
              { icon: <Clock style={{ width: 20, height: 20 }} />, title: "Resultado desde o primeiro mês", desc: "Não vendemos promessa de longo prazo. Definimos métricas no início e medimos resultado desde a implementação." },
            ].map((c, i) => (
              <div key={i} className="card-surface" style={{ padding: "2rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(94,196,188,0.08)", border: "1px solid rgba(94,196,188,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5EC4BC", marginBottom: "1.25rem" }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "#E8F0F0", marginBottom: "0.625rem" }}>{c.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#7AACAC", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0 bg-dots" style={{ opacity: 0.4 }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(27,122,120,0.08) 0%, transparent 70%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div className="badge" style={{ marginBottom: "2rem" }}>Próximo passo</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Pronto para transformar dados em<br /><span className="text-gradient">vantagem competitiva?</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#7AACAC", marginBottom: "2.5rem", lineHeight: 1.65 }}>
              Agende uma conversa com nossa equipe. Diagnóstico gratuito de 30 minutos — entendemos sua operação e mostramos onde a inteligência de dados pode gerar resultado.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <Link href="/contato"><a className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>Agendar diagnóstico gratuito <ArrowRight style={{ width: 16, height: 16 }} /></a></Link>
              <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>Falar no WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
