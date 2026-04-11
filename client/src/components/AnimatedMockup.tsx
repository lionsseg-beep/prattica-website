import { useEffect, useRef, useState } from "react";

// Anima número de 0 até target
function useCounter(target: number, duration = 1800, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return value;
}

// Anima texto caracter por caracter
function useTypewriter(text: string, speed = 28, started = false, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!started) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const t = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(timer); setDone(true); }
      }, speed);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(t);
  }, [started, text, speed, delay]);
  return { displayed, done };
}

const AI_MESSAGE =
  "Faturamento cresceu 12% este mês. 24 pacientes aguardam lista de espera nas sextas. Recomendo ativar encaixes — potencial de R$4.800 adicionais.";

const USER_PROMPT = "Gere o relatório de comissões de outubro";

export default function AnimatedMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fat = useCounter(48200, 1600, started);
  const agen = useCounter(183, 1400, started);
  const { displayed: aiText, done: aiDone } = useTypewriter(AI_MESSAGE, 22, started, 600);
  const { displayed: userText } = useTypewriter(USER_PROMPT, 35, started, aiDone ? 200 : 99999);

  const formatBRL = (v: number) =>
    v >= 1000
      ? `R$${(v / 1000).toFixed(1)}k`
      : `R$${v}`;

  return (
    <div ref={ref} className="card-hero-product animate-glow">
      {/* Barra do topo */}
      <div style={{
        background: "#080E0E",
        padding: "12px 20px",
        borderBottom: "1px solid rgba(94,196,188,0.08)",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        {["#1B7A78", "#5EC4BC", "#162828"].map((c, i) => (
          <div key={i} className="mock-bar-dot" style={{ background: c }} />
        ))}
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.625rem",
          color: "#3A6868", marginLeft: 10,
        }}>
          Athena Clinic SO — Painel Principal
        </span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22A09D", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#3A6868" }}>ao vivo</span>
        </div>
      </div>

      {/* Corpo */}
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>

        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[
            { l: "Faturamento", v: formatBRL(fat), t: "↑ 12%", c: "#5EC4BC" },
            { l: "Agendamentos", v: String(agen), t: "↑ 8%", c: "#5EC4BC" },
            { l: "Satisfação", v: "4.9/5", t: "★★★★★", c: "#22A09D" },
          ].map((k, i) => (
            <div key={i} style={{
              background: "#080E0E",
              border: "1px solid rgba(94,196,188,0.08)",
              borderRadius: 10, padding: 12,
              transition: "border-color 0.3s",
            }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#3A6868", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>{k.l}</div>
              <div className="stat-number" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#E8F0F0", marginBottom: 3 }}>{k.v}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: k.c }}>{k.t}</div>
            </div>
          ))}
        </div>

        {/* Chat IA */}
        <div style={{
          background: "#080E0E",
          border: "1px solid rgba(94,196,188,0.08)",
          borderRadius: 10, padding: 16,
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.5rem",
            color: "#1B7A78", marginBottom: 10,
            display: "flex", alignItems: "center", gap: 5,
          }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B7A78", animation: "pulse 2s infinite" }} />
            IA ATHENA — CONSULTORA DA CLÍNICA
          </div>

          {/* Mensagem da IA com typewriter */}
          <div style={{
            background: "rgba(27,122,120,0.06)",
            borderRadius: 8, padding: "10px 12px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem", color: "#7AACAC",
            lineHeight: 1.5, marginBottom: 8,
            minHeight: 56,
          }}>
            {aiText}
            {!aiDone && started && (
              <span style={{ color: "#5EC4BC", animation: "blink 1s step-end infinite" }}>|</span>
            )}
          </div>

          {/* Prompt do usuário */}
          <div style={{
            background: "rgba(94,196,188,0.04)",
            border: "1px solid rgba(94,196,188,0.08)",
            borderRadius: 8, padding: "8px 12px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem", color: "#3A6868",
            textAlign: "right",
            minHeight: 32,
          }}>
            {userText}
            {userText && userText.length < USER_PROMPT.length && (
              <span style={{ color: "#5EC4BC", animation: "blink 1s step-end infinite" }}>|</span>
            )}
          </div>
        </div>

        {/* Status bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#3A6868" }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B7A78", animation: "pulse 2s infinite" }} />
            Agente WhatsApp ativo
          </div>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", color: "#3A6868" }}>
            3 atendimentos agora
          </span>
        </div>
      </div>
    </div>
  );
}
