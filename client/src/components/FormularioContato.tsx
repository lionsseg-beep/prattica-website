import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

const WPP = "5567996622860";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  assunto: string;
  mensagem: string;
}

export default function FormularioContato() {
  const [formData, setFormData] = useState<FormData>({
    nome: "", email: "", telefone: "", empresa: "", assunto: "athena", mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    if (!formData.nome.trim())   { toast.error("Informe seu nome completo"); return false; }
    if (!formData.email.includes("@")) { toast.error("Informe um email válido"); return false; }
    if (!formData.telefone.trim()) { toast.error("Informe seu telefone"); return false; }
    if (!formData.mensagem.trim()) { toast.error("Escreva sua mensagem"); return false; }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      // Envia para WhatsApp com os dados do lead
      const assuntoMap: Record<string, string> = {
        athena: "Athena Clinic SO",
        consultoria: "Consultoria",
        automacao: "Automação com IA",
        parceria: "Parceria",
        outro: "Outro assunto",
      };
      const assuntoTexto = assuntoMap[formData.assunto] ?? formData.assunto;

      const msg = encodeURIComponent(
        `Olá! Vim pelo site da Prattica AI.\n\n` +
        `*Nome:* ${formData.nome}\n` +
        `*Email:* ${formData.email}\n` +
        `*Telefone:* ${formData.telefone}\n` +
        (formData.empresa ? `*Empresa:* ${formData.empresa}\n` : "") +
        `*Assunto:* ${assuntoTexto}\n\n` +
        `*Mensagem:*\n${formData.mensagem}`
      );

      // Simula delay de processamento
      await new Promise(r => setTimeout(r, 800));

      setSubmitted(true);
      toast.success("Mensagem recebida! Abrindo WhatsApp...");

      // Abre WhatsApp com os dados
      setTimeout(() => {
        window.open(`https://wa.me/${WPP}?text=${msg}`, "_blank");
      }, 600);

      setFormData({ nome: "", email: "", telefone: "", empresa: "", assunto: "athena", mensagem: "" });
      setTimeout(() => setSubmitted(false), 6000);

    } catch (err) {
      toast.error("Erro ao enviar. Tente pelo WhatsApp diretamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: "#F7F7F8",
    border: "1px solid rgba(27,122,120,0.15)",
    borderRadius: 8,
    color: "#1A2B2B",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9375rem",
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#0D5252",
    display: "block",
    marginBottom: 6,
  };

  if (submitted) {
    return (
      <div style={{ background: "rgba(27,122,120,0.06)", border: "1px solid rgba(27,122,120,0.2)", borderRadius: 16, padding: "2.5rem", textAlign: "center" }}>
        <CheckCircle2 style={{ width: 48, height: 48, color: "#1B7A78", margin: "0 auto 1rem" }} />
        <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#0D5252", marginBottom: 8 }}>Mensagem recebida!</h4>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A6868", lineHeight: 1.6 }}>
          O WhatsApp foi aberto com seus dados. Nossa equipe responde em minutos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <label style={labelStyle}>Nome Completo *</label>
        <Input name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome completo" style={inputStyle} disabled={loading} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <label style={labelStyle}>Email *</label>
          <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" style={inputStyle} disabled={loading} />
        </div>
        <div>
          <label style={labelStyle}>Telefone / WhatsApp *</label>
          <Input name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(67) 99662-2860" style={inputStyle} disabled={loading} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Clínica / Empresa</label>
        <Input name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nome da sua clínica ou empresa" style={inputStyle} disabled={loading} />
      </div>

      <div>
        <label style={labelStyle}>Assunto</label>
        <Select value={formData.assunto} onValueChange={v => setFormData(p => ({ ...p, assunto: v }))} disabled={loading}>
          <SelectTrigger style={{ ...inputStyle, width: "100%", height: 40 }}>
            <SelectValue placeholder="Selecione um assunto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="athena">Athena Clinic SO — Demonstração</SelectItem>
            <SelectItem value="consultoria">Consultoria Estratégica</SelectItem>
            <SelectItem value="automacao">Automação com IA</SelectItem>
            <SelectItem value="parceria">Parceria</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label style={labelStyle}>Mensagem *</label>
        <Textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Conte um pouco sobre sua clínica e o que você precisa..."
          rows={4}
          style={{ ...inputStyle, resize: "none" }}
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
        style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.9rem" }}
      >
        {loading ? (
          <><Loader2 style={{ width: 18, height: 18, animation: "spin 1s linear infinite" }} /> Enviando...</>
        ) : (
          "Enviar mensagem pelo WhatsApp →"
        )}
      </button>

      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#7A9898", textAlign: "center" }}>
        * Campos obrigatórios. Seus dados são confidenciais e não serão compartilhados.
      </p>
    </form>
  );
}
