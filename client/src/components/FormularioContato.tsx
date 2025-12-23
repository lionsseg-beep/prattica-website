import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

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
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    assunto: "geral",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      assunto: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.nome.trim()) {
      toast.error("Por favor, insira seu nome");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Por favor, insira um email válido");
      return false;
    }
    if (!formData.telefone.trim()) {
      toast.error("Por favor, insira seu telefone");
      return false;
    }
    if (!formData.mensagem.trim()) {
      toast.error("Por favor, insira sua mensagem");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // TODO: Integrar com serviço de email real (SendGrid, Mailgun, AWS SES)
      // Por enquanto, simulamos o envio
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Aqui você integraria com sua API de email
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitted(true);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");

      // Reset form
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        assunto: "geral",
        mensagem: "",
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Formulário */}
      <div>
        <h3 className="text-2xl font-bold mb-8">Envie sua mensagem</h3>

        {submitted ? (
          <div className="bg-[#00C2A0]/10 border border-[#00C2A0]/30 rounded-2xl p-8 text-center">
            <div className="text-[#00C2A0] text-4xl mb-4">✓</div>
            <h4 className="text-xl font-bold mb-2">Obrigado!</h4>
            <p className="text-gray-400">
              Recebemos sua mensagem e entraremos em contato em breve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <Label htmlFor="nome" className="text-white mb-2 block">
                Nome Completo *
              </Label>
              <Input
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-white mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                disabled={loading}
              />
            </div>

            {/* Telefone */}
            <div>
              <Label htmlFor="telefone" className="text-white mb-2 block">
                Telefone *
              </Label>
              <Input
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                disabled={loading}
              />
            </div>

            {/* Empresa */}
            <div>
              <Label htmlFor="empresa" className="text-white mb-2 block">
                Empresa
              </Label>
              <Input
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Sua empresa"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                disabled={loading}
              />
            </div>

            {/* Assunto */}
            <div>
              <Label htmlFor="assunto" className="text-white mb-2 block">
                Assunto
              </Label>
              <Select value={formData.assunto} onValueChange={handleSelectChange} disabled={loading}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Selecione um assunto" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-white/10">
                  <SelectItem value="geral">Consulta Geral</SelectItem>
                  <SelectItem value="consultoria">Consultoria</SelectItem>
                  <SelectItem value="saas">SaaS / Athena Clinic</SelectItem>
                  <SelectItem value="academy">Academy / Treinamento</SelectItem>
                  <SelectItem value="parceria">Parceria</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mensagem */}
            <div>
              <Label htmlFor="mensagem" className="text-white mb-2 block">
                Mensagem *
              </Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Descreva sua necessidade ou dúvida..."
                rows={5}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                disabled={loading}
              />
            </div>

            {/* Botão Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00C2A0] hover:bg-[#00C2A0]/90 text-black font-semibold py-3 rounded-xl transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar Mensagem"
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              * Campos obrigatórios. Seus dados serão tratados com confidencialidade.
            </p>
          </form>
        )}
      </div>

      {/* Informações de Contato */}
      <div>
        <h3 className="text-2xl font-bold mb-8">Outras formas de contato</h3>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#00C2A0]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#00C2A0]/20">
              <Mail className="w-6 h-6 text-[#00C2A0]" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Email</h4>
              <a href="mailto:contato@prattica.ai" className="text-[#00C2A0] hover:underline">
                contato@prattica.ai
              </a>
              <p className="text-sm text-gray-500 mt-1">Respondemos em até 24 horas</p>
            </div>
          </div>

          {/* Telefone */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#00C2A0]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#00C2A0]/20">
              <Phone className="w-6 h-6 text-[#00C2A0]" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Telefone / WhatsApp</h4>
              <a href="https://wa.me/5511999999999" className="text-[#00C2A0] hover:underline">
                +55 (11) 99999-9999
              </a>
              <p className="text-sm text-gray-500 mt-1">Seg-Sex, 9h às 18h (horário de Brasília)</p>
            </div>
          </div>

          {/* Endereço */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#00C2A0]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#00C2A0]/20">
              <MapPin className="w-6 h-6 text-[#00C2A0]" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Endereço</h4>
              <p className="text-gray-400">
                São Paulo, SP<br />
                Brasil
              </p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="font-bold text-white mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/prattica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00C2A0]/20 transition-colors"
              >
                <span className="text-[#00C2A0] font-bold">in</span>
              </a>
              <a
                href="https://instagram.com/prattica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00C2A0]/20 transition-colors"
              >
                <span className="text-[#00C2A0] font-bold">@</span>
              </a>
              <a
                href="https://twitter.com/prattica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00C2A0]/20 transition-colors"
              >
                <span className="text-[#00C2A0] font-bold">𝕏</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
