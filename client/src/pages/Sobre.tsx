import MainLayout from "@/components/MainLayout";
import { Target, Eye, Zap, Shield, Brain } from "lucide-react";

export default function Sobre() {
  const valores = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Inteligência Aplicada",
      desc: "IA não é moda. É ferramenta. Usamos tecnologia para resolver problemas reais de gestão e operação, com resultado mensurável."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Execução Rápida",
      desc: "Diagnóstico profundo, implementação ágil. Não entregamos relatórios — entregamos sistemas funcionando."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Transparência Total",
      desc: "Dados não mentem. Nossa comunicação é direta, baseada em fatos, sem jargão e sem promessas que não podemos cumprir."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Resultado Mensurável",
      desc: "Cada projeto tem KPIs definidos. Sabemos exatamente o que entregamos e como medir se funcionou."
    }
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 30% 0%, rgba(20,122,120,0.12) 0%, transparent 60%)" }} />

        <div className="container relative z-10">
          <div className="athena-badge mb-6">Sobre a Prattica AI</div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4.25rem)", color: "#F2EDE8", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.5rem", maxWidth: "720px" }}>
            Consultoria que opera com<br />
            <span className="text-gradient-teal">inteligência artificial.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", color: "#7a9a9a", lineHeight: 1.7, maxWidth: "620px" }}>
            A Prattica AI é uma consultoria especializada em processos e gestão que usa automação com agentes de IA para transformar operações complexas em resultados previsíveis. Somos de Campo Grande, MS, e atendemos clientes em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Missão e Visão */}
      <section style={{ background: "#0A1818", borderTop: "1px solid rgba(94,196,188,0.08)", borderBottom: "1px solid rgba(94,196,188,0.08)" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card-surface p-10" style={{ background: "#0F1E1E" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-7" style={{ background: "rgba(29,168,154,0.08)", border: "1px solid rgba(29,168,154,0.15)" }}>
                <Target className="w-6 h-6" style={{ color: "#1DA89A" }} />
              </div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.625rem", color: "#F2EDE8", marginBottom: "1rem" }}>Nossa Missão</h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#6a8a8a", lineHeight: 1.7 }}>
                Democratizar o acesso à automação inteligente e à consultoria de alto nível para empresas de todos os portes — permitindo que líderes tomem decisões baseadas em dados e que suas equipes foquem no estratégico, não no operacional.
              </p>
            </div>
            <div className="card-surface p-10" style={{ background: "#0F1E1E" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-7" style={{ background: "rgba(29,168,154,0.08)", border: "1px solid rgba(29,168,154,0.15)" }}>
                <Eye className="w-6 h-6" style={{ color: "#1DA89A" }} />
              </div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.625rem", color: "#F2EDE8", marginBottom: "1rem" }}>Nossa Visão</h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#6a8a8a", lineHeight: 1.7 }}>
                Ser a empresa de referência em automação inteligente no Centro-Oeste, expandindo para todo o Brasil através de produtos SaaS verticalizados — como o Athena Clinic SO — que entregam tecnologia de ponta com a praticidade que o mercado precisa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24">
        <div className="container">
          <div className="mb-14">
            <div className="athena-badge mb-5">Valores</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F2EDE8", letterSpacing: "-0.03em" }}>
              O que nos guia<br />
              <span className="text-gradient-teal">em cada projeto.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {valores.map((v, i) => (
              <div key={i} className="card-surface p-8 flex gap-6 group" style={{ background: "#0F1E1E" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-1 transition-all duration-300 group-hover:scale-110" style={{ background: "rgba(29,168,154,0.08)", border: "1px solid rgba(29,168,154,0.15)", color: "#1DA89A" }}>
                  {v.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "#F2EDE8", marginBottom: "0.5rem" }}>{v.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#6a8a8a", lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section style={{ background: "#0A1818", borderTop: "1px solid rgba(94,196,188,0.08)" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="athena-badge mb-6">Onde estamos</div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "2rem", color: "#F2EDE8", marginBottom: "1rem" }}>
                Campo Grande, MS —<br />com alcance nacional.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6a8a8a", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Nossa sede fica no coração de Campo Grande, no Edifício The Place. Atendemos clientes presencialmente no MS e remotamente em todo o Brasil.
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.875rem", color: "#4a6868", lineHeight: 1.6 }}>
                Av. Afonso Pena, 4785<br />
                The Place — Torre 2, 20° andar, Sala 2007<br />
                Campo Grande, MS — CEP 79002-071
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(94,196,188,0.10)", height: "300px", background: "#0F1E1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="text-center">
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "3rem", marginBottom: "0.5rem" }}>📍</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#4a6868", fontSize: "0.875rem" }}>Mapa interativo</p>
                <p style={{ fontFamily: "'DM Mono', monospace", color: "#2a4444", fontSize: "0.75rem", marginTop: "0.25rem" }}>The Place — Campo Grande, MS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
