import MainLayout from "@/components/MainLayout";

const equipe = [
  { nome: "Ricardo Dantas", cargo: "CEO & Founder", desc: "Consultor estratégico especializado em gestão e automação. Fundou a Prattica AI depois de anos identificando o mesmo padrão: dados existem, inteligência falta. É o arquiteto da metodologia DNA e responsável pela visão de produto da empresa.", inicial: "RD" },
  { nome: "Dr. João Maldonado", cargo: "Diretor Comercial & Co-founder", desc: "Médico e empresário, proprietário de clínicas de exames por imagem em Campo Grande. Trouxe a visão clínica que originou o Athena Clinic SO — a dor vivida de dentro, transformada em produto.", inicial: "JM" },
  { nome: "Wanessa Escobar", cargo: "Experiência do Cliente", desc: "Responsável pela jornada e satisfação dos clientes em todas as frentes da Prattica AI. Garante que cada implementação gere resultado real, não apenas entrega técnica.", inicial: "WE" },
  { nome: "Alal Peralto", cargo: "CTO & Co-founder", desc: "Arquiteto de software e líder técnico de todos os produtos da plataforma Prattica AI. Responsável pela arquitetura de IA nativa que diferencia os sistemas da empresa no mercado.", inicial: "AP" },
];

const valores = [
  { t: "Resultado mensurável", d: "Não trabalhamos com promessa. Definimos métricas no início e medimos desde o primeiro dia. Se não gera resultado, não entregamos." },
  { t: "Inteligência aplicada", d: "IA não é modismo aqui. É ferramenta com propósito específico. Cada sistema que desenvolvemos resolve um problema real com precisão técnica." },
  { t: "Dados com propósito", d: "Os dados do cliente são do cliente. Nunca compartilhamos, nunca usamos para treinar modelos externos. A inteligência que geramos é exclusiva de cada negócio." },
  { t: "Execução sobre apresentação", d: "Apresentação bonita sem resultado é custo. Entregamos implementação, acompanhamos métricas e ajustamos até funcionar." },
];

export default function Sobre() {
  return (
    <MainLayout>

      {/* HERO */}
      <section style={{ position: "relative", padding: "7rem 0 4rem", overflow: "hidden" }}>
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 30% 0%, rgba(27,122,120,0.14) 0%, transparent 60%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: "1.5rem" }}>Sobre a Prattica AI</div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#E8F0F0", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: "1.5rem", maxWidth: 700 }}>
            Nascemos para resolver o que<br /><span className="text-gradient">a tecnologia genérica não resolve.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "#7AACAC", maxWidth: 620, lineHeight: 1.7 }}>
            Fundada há 1,5 anos em Campo Grande, MS, a Prattica AI surgiu de uma observação simples: as empresas brasileiras têm acesso às mesmas ferramentas de dados que as grandes corporações — mas não têm como transformá-las em inteligência de negócio com estratégia e profundidade técnica.
          </p>
        </div>
      </section>

      {/* MISSÃO */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", borderBottom: "1px solid rgba(94,196,188,0.08)", padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card-surface" style={{ padding: "2.5rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", color: "#5EC4BC", textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: "1rem" }}>Nossa missão</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#7AACAC", lineHeight: 1.75 }}>
                Levar inteligência analítica para dentro de negócios reais — não como ferramenta isolada, mas como parte estrutural da operação. Combinamos consultoria estratégica, automação de processos e produtos SaaS verticalizados para entregar crescimento previsível e resultado mensurável.
              </p>
            </div>
            <div className="card-surface" style={{ padding: "2.5rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", color: "#5EC4BC", textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: "1rem" }}>Nossa visão</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#7AACAC", lineHeight: 1.75 }}>
                Ser a empresa de referência em inteligência de dados aplicada a operações empresariais no Brasil — com produtos SaaS verticalizados que resolvem problemas específicos de mercado com profundidade técnica que sistemas genéricos não conseguem entregar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1.25rem" }}>Equipe</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#E8F0F0", letterSpacing: "-0.035em", lineHeight: 1.15 }}>
              Construído por quem<br /><span className="text-gradient">viveu o problema.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipe.map((p, i) => (
              <div key={i} className="card-surface" style={{ padding: "2rem", display: "flex", gap: "1.25rem" }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(27,122,120,0.15)", border: "1px solid rgba(94,196,188,0.20)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#5EC4BC" }}>
                  {p.inicial}
                </div>
                <div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#E8F0F0", marginBottom: 2 }}>{p.nome}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#5EC4BC", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>{p.cargo}</div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#7AACAC", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1.25rem" }}>O que nos guia</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "#E8F0F0", letterSpacing: "-0.035em" }}>
              Valores que definem<br /><span className="text-gradient">como entregamos resultado.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {valores.map((v, i) => (
              <div key={i} className="card-surface" style={{ padding: "1.75rem 2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1B7A78", flexShrink: 0, marginTop: 6 }} />
                <div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#E8F0F0", marginBottom: "0.5rem" }}>{v.t}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "#7AACAC", lineHeight: 1.65 }}>{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
