import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Stethoscope, Activity, FileText, MessageSquare } from "lucide-react";
import { Link } from "wouter";

export default function Produtos() {
  return (
    <MainLayout>
      {/* Hero Section Produtos */}
      <section className="pt-32 pb-20 bg-[#171717] relative overflow-hidden">
        <div className="container relative z-10">
          <span className="text-[#00C2A0] font-mono text-sm tracking-wider uppercase mb-4 block">Nossos Produtos</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl">
            SaaS Inteligentes para <br /><span className="text-[#00C2A0]">Mercados Exigentes</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
            Além da consultoria, desenvolvemos plataformas proprietárias que materializam nossa metodologia em software de alta performance. Soluções prontas para escalar sua operação.
          </p>
        </div>
        
        {/* Abstract Background */}
        <div className="absolute -right-20 top-20 w-[600px] h-[600px] bg-gradient-to-br from-[#00C2A0]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Athena Clinic SO Highlight */}
      <section className="py-20 bg-[#1a1a1a] border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2A0]/10 border border-[#00C2A0]/20 text-[#00C2A0] text-xs font-mono uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C2A0] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C2A0]"></span>
                </span>
                Produto Principal
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Athena Clinic SO</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                O sistema operacional definitivo para clínicas médicas. Automação total e IA integrada, do agendamento ao laudo médico.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { icon: <MessageSquare className="w-5 h-5" />, text: "Atendimento Automatizado via IA" },
                  { icon: <Activity className="w-5 h-5" />, text: "Triagem e Anamnese Inteligente" },
                  { icon: <FileText className="w-5 h-5" />, text: "Geração de Laudos Assistida" },
                  { icon: <Stethoscope className="w-5 h-5" />, text: "Gestão Clínica Completa" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00C2A0]/10 flex items-center justify-center text-[#00C2A0] border border-[#00C2A0]/20">
                      {item.icon}
                    </div>
                    <span className="text-lg text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#00C2A0] text-black hover:bg-[#00A085] rounded-full px-8 h-12 text-base font-bold">
                  Solicitar Demo do Athena
                </Button>
                <Link href="/contato">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base">
                    Falar com Consultor
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Mockup Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] aspect-[4/3] group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C2A0]/10 to-transparent opacity-50"></div>
                
                {/* UI Mockup Elements */}
                <div className="absolute top-4 left-4 right-4 bottom-4 bg-[#171717] rounded-xl border border-white/5 p-6 flex flex-col gap-4">
                  {/* Header Mockup */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#00C2A0] rounded-lg"></div>
                      <div className="h-4 w-32 bg-white/10 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/5"></div>
                      <div className="w-8 h-8 rounded-full bg-white/5"></div>
                    </div>
                  </div>
                  
                  {/* Content Mockup */}
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    <div className="col-span-1 bg-white/5 rounded-lg p-4 space-y-3">
                      <div className="h-3 w-20 bg-white/10 rounded mb-4"></div>
                      <div className="h-12 w-full bg-[#00C2A0]/20 rounded border border-[#00C2A0]/30"></div>
                      <div className="h-12 w-full bg-white/5 rounded"></div>
                      <div className="h-12 w-full bg-white/5 rounded"></div>
                    </div>
                    <div className="col-span-2 bg-white/5 rounded-lg p-4 space-y-4">
                      <div className="flex justify-between">
                        <div className="h-6 w-48 bg-white/10 rounded"></div>
                        <div className="h-6 w-24 bg-[#00C2A0] rounded text-black text-xs flex items-center justify-center font-bold">IA ATIVA</div>
                      </div>
                      <div className="h-32 w-full bg-black/20 rounded border border-white/5 p-4">
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-white/10 rounded"></div>
                          <div className="h-2 w-[90%] bg-white/10 rounded"></div>
                          <div className="h-2 w-[95%] bg-white/10 rounded"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-black/20 rounded border border-white/5"></div>
                        <div className="h-24 bg-black/20 rounded border border-white/5"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-8 right-8 bg-[#00C2A0] text-black px-4 py-2 rounded-lg font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  Powered by Prattica AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline / Future Products */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Em Desenvolvimento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prattica Retail OS",
                desc: "Inteligência de estoque e previsão de demanda para varejo multicanal.",
                status: "Alpha"
              },
              {
                title: "Legal Mind",
                desc: "Automação de documentos e pesquisa jurídica para escritórios de advocacia.",
                status: "Beta"
              },
              {
                title: "Agro Sense",
                desc: "Análise de dados de colheita e previsão climática para o agronegócio.",
                status: "Conceito"
              }
            ].map((prod, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{prod.title}</h3>
                  <span className="text-xs font-mono border border-white/20 px-2 py-1 rounded text-gray-400">{prod.status}</span>
                </div>
                <p className="text-gray-400 mb-6 flex-1">{prod.desc}</p>
                <Button variant="ghost" disabled className="w-full border border-white/10 text-gray-500">
                  Em Breve
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
