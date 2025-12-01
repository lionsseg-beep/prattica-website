import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Contato() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    reset();
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-20 bg-[#171717]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#00C2A0] font-mono text-sm tracking-wider uppercase mb-4 block">Fale Conosco</span>
              <h1 className="text-5xl font-bold mb-8">
                Vamos construir o <br /><span className="text-[#00C2A0]">futuro</span> juntos.
              </h1>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Preencha o formulário para agendar uma demonstração ou conversar com nossos consultores sobre como podemos transformar seu negócio.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#00C2A0] border border-white/10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-gray-400">contato@prattica.ai</p>
                    <p className="text-gray-400">comercial@prattica.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#00C2A0] border border-white/10">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Telefone / WhatsApp</h3>
                    <p className="text-gray-400">+55 11 99999-9999</p>
                    <p className="text-sm text-gray-500 mt-1">Seg-Sex, 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#00C2A0] border border-white/10">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Escritório</h3>
                    <p className="text-gray-400">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-gray-400">São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold mb-8">Envie uma mensagem</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Nome</label>
                    <Input 
                      {...register("name", { required: true })}
                      placeholder="Seu nome completo" 
                      className="bg-[#111] border-white/10 focus:border-[#00C2A0] h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Empresa</label>
                    <Input 
                      {...register("company")}
                      placeholder="Nome da sua empresa" 
                      className="bg-[#111] border-white/10 focus:border-[#00C2A0] h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Corporativo</label>
                  <Input 
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="voce@empresa.com.br" 
                    className="bg-[#111] border-white/10 focus:border-[#00C2A0] h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Assunto</label>
                  <select 
                    {...register("subject")}
                    className="w-full bg-[#111] border border-white/10 rounded-md h-12 px-3 text-sm focus:outline-none focus:border-[#00C2A0] text-white"
                  >
                    <option value="demo">Agendar Demonstração</option>
                    <option value="consultoria">Consultoria Estratégica</option>
                    <option value="academy">Prattica Academy</option>
                    <option value="parceria">Parcerias</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Mensagem</label>
                  <Textarea 
                    {...register("message", { required: true })}
                    placeholder="Conte um pouco sobre seu desafio..." 
                    className="bg-[#111] border-white/10 focus:border-[#00C2A0] min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#00C2A0] text-black hover:bg-[#00A085] h-12 text-base font-bold rounded-xl">
                  Enviar Mensagem <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
