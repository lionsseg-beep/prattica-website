import { Link } from "wouter";
import MainLayout from "@/components/MainLayout";
import AnimatedMockup from "@/components/AnimatedMockup";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, ChevronRight, BarChart3, Zap, Layers, TrendingUp, Shield, Clock, MessageSquare, Calendar, DollarSign, Brain } from "lucide-react";

const WPP = "https://wa.me/5567996622860?text=" + encodeURIComponent("Olá! Quero conhecer as soluções da Prattica AI.");

export default function Home() {
  useScrollReveal();
  return (
    <MainLayout>

      {/* HERO — Dor primeiro, solução depois */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "7rem 0 5rem" }}>
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(27,122,120,0.18) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: 120, background: "linear-gradient(to top, #0D1A1A, transparent)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 860 }}>
            <div className="badge" style={{ marginBottom: "2rem", opacity: 0, animation: "fadeUp 0.6s ease 0.1s forwards" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5EC4BC", display: "inline-block", animation: "pulse 2s infinite" }} />
              Prattica AI Solutions — Campo Grande, MS
            </div>

            <h1 style={{
              fontFamily: "'Sora', sans-serif", fontWeight: 800,
              fontSize: "clamp(2.25rem, 5.5vw, 4.75rem)", lineHeight: 1.06,
              letterSpacing: "-0.045em", color: "#E8F0F0",
              marginBottom: "1.75rem",
              opacity: 0, animation: "fadeUp 0.6s ease 0.2s forwards"
            }}>
              Sua empresa gera dados todo dia.<br />
              <span className="text-gradient">Quanto dinheiro você deixou<br />na mesa por não entendê-los?</span>
            </h1>

            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem",
              color: "#7AACAC", lineHeight: 1.7, maxWidth: 640,
              marginBottom: "2.5rem",
              opacity: 0, animation: "fadeUp 0.6s ease 0.3s forwards"
            }}>
              A Prattica AI transforma os dados da sua operação em inteligência real — com sistemas de IA que aprendem com o seu negócio e entregam decisões, não relatórios.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, opacity: 0, animation: "fadeUp 0.6s ease 0.4s forwards" }}>
              <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
                Falar com especialista agora <ArrowRight style={{ width: 16, height: 16 }} />
              </a>
              <Link href="/solucoes"><a className="btn-ghost" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>Ver nossas soluções</a></Link>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginTop: "2rem", opacity: 0, animation: "fadeUp 0.6s ease 0.5s forwards" }}>
              {["Sem compromisso de longo prazo", "Diagnóstico gratuito em 30 min", "ROI mensurável desde o 1º mês"].map((item, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#3A6868" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B7A78", display: "inline-block" }} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

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

      {/* NÚMEROS — com contexto */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", borderBottom: "1px solid rgba(94,196,188,0.08)", padding: "4rem 0" }}>
        <div className="container">
          <p className="reveal" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", color: "#3A6868", textTransform: "uppercase", letterSpacing: "0.10em", textAlign: "center", marginBottom: "2.5rem" }}>
            O que a inteligência de dados entrega na prática
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "30 min", l: "Diagnóstico gratuito para entender seu negócio" },
              { v: "1º mês", l: "Para começar a medir resultado real" },
              { v: "24/7", l: "Operação autônoma com IA nativa" },
              { v: "3 SaaS", l: "Produtos verticais em desenvolvimento ativo" },
            ].map((n, i) => (
              <div key={i} className={`reveal stagger-${i + 1}`} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#5EC4BC", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8 }}>{n.v}</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#3A6868", lineHeight: 1.45 }}>{n.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA — empatia antes de solução */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge" style={{ marginBottom: "1.5rem" }}>O problema que resolvemos</div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#E8F0F0", letterSpacing: "-0.035em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Você não tem problema de dedicação.<br /><span className="text-gradient">Tem problema de informação.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#7AACAC", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Toda empresa gera dados o dia inteiro. Mas esses dados ficam espalhados — em planilhas, em sistemas que não se falam, na memória de colaboradores. Não viram inteligência. Não orientam decisão.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#7AACAC", lineHeight: 1.75, marginBottom: "2rem" }}>
                O resultado: você gere uma operação com potencial real usando as ferramentas de quem ainda tenta organizar o básico.
              </p>
              <Link href="/solucoes"><a style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", fontWeight: 500, color: "#5EC4BC", textDecoration: "none" }}>
                Como resolvemos isso <ChevronRight style={{ width: 16, height: 16 }} />
              </a></Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: <BarChart3 style={{ width: 18, height: 18 }} />, pain: "Dados existem, inteligência falta", sol: "Estruturamos e transformamos em indicadores acionáveis" },
                { icon: <Zap style={{ width: 18, height: 18 }} />, pain: "Processos manuais que consomem tempo e geram erros", sol: "Automação que opera sem intervenção humana constante" },
                { icon: <Layers style={{ width: 18, height: 18 }} />, pain: "Sistemas que não se integram", sol: "Arquitetura unificada com IA que aprende com sua operação" },
              ].map((item, i) => (
                <div key={i} className={`card-surface reveal stagger-${i + 1}`} style={{ padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(94,196,188,0.08)", border: "1px solid rgba(94,196,188,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5EC4BC", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#E8F0F0", marginBottom: 4 }}>{item.pain}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#3A6868", lineHeight: 1.5 }}>{item.sol}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ATHENA — produto principal com contexto narrativo */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 80% at 90% 50%, rgba(27,122,120,0.08) 0%, transparent 60%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1rem" }}>Nossa solução principal</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "0.75rem" }}>
              Para clínicas de saúde: Athena Clinic SO
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#7AACAC", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              O sistema que aprende com os dados da sua clínica e devolve isso como inteligência — do atendimento no WhatsApp ao fechamento financeiro do mês.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              {[
                { icon: <MessageSquare style={{ width: 18, height: 18 }} />, t: "Atendimento autônomo 24h", d: "A ANA responde, agenda e tira dúvidas no WhatsApp sem precisar de recepcionista." },
                { icon: <Calendar style={{ width: 18, height: 18 }} />, t: "Agenda inteligente", d: "Sem no-show, sem encaixe perdido, com lembretes automáticos e lista de espera." },
                { icon: <DollarSign style={{ width: 18, height: 18 }} />, t: "Financeiro com DRE em tempo real", d: "Faturamento, comissões, convênios e caixa — tudo visível, sem planilha." },
                { icon: <Brain style={{ width: 18, height: 18 }} />, t: "IA consultora da sua operação", d: "Insights proativos, alertas antes do problema, recomendações baseadas nos seus dados." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(94,196,188,0.08)", border: "1px solid rgba(94,196,188,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5EC4BC", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#E8F0F0", marginBottom: 4 }}>{item.t}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#7AACAC", lineHeight: 1.6 }}>{item.d}</div>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 14, marginTop: "2rem", flexWrap: "wrap" }}>
                <a href="/athena-clinic-lp.html" className="btn-primary">
                  Ver demonstração <ArrowRight style={{ width: 16, height: 16 }} />
                </a>
                <Link href="/produtos"><a className="btn-ghost">Todos os produtos</a></Link>
              </div>
            </div>

            {/* Dashboard mockup animado */}
            <div className="reveal-right">
              <AnimatedMockup />
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1.25rem" }}>Por que a Prattica</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#E8F0F0", letterSpacing: "-0.035em", lineHeight: 1.15 }}>
              IA nativa não é IA conectada.<br /><span className="text-gradient">É uma diferença que você sente no resultado.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: <TrendingUp style={{ width: 20, height: 20 }} />, title: "Aprende com o seu negócio", desc: "A inteligência é construída a partir dos dados da sua própria operação — não é um modelo genérico. Quanto mais você usa, mais precisa fica." },
              { icon: <Shield style={{ width: 20, height: 20 }} />, title: "Seus dados ficam seus", desc: "Nenhuma informação alimenta sistemas externos. Armazenamento seguro, conformidade LGPD e exportação completa sob demanda." },
              { icon: <Clock style={{ width: 20, height: 20 }} />, title: "Resultado desde o primeiro mês", desc: "Definimos métricas no início e medimos desde o dia da implementação. Sem promessa de longo prazo, sem caixa preta." },
            ].map((c, i) => (
              <div key={i} className={`card-surface reveal stagger-${i + 1}`} style={{ padding: "2rem" }}>
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
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div className="badge" style={{ marginBottom: "2rem" }}>Próximo passo</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              30 minutos para entender<br /><span className="text-gradient">onde está o dinheiro parado.</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#7AACAC", marginBottom: "2.5rem", lineHeight: 1.65 }}>
              Diagnóstico gratuito. Sem compromisso. Mostramos onde a inteligência de dados pode gerar resultado imediato na sua operação.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
                Agendar diagnóstico gratuito <ArrowRight style={{ width: 16, height: 16 }} />
              </a>
              <Link href="/contato"><a className="btn-ghost" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>Falar com a equipe</a></Link>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
