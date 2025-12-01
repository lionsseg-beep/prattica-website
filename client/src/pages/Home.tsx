import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";
import { ArrowRight, BarChart3, Brain, Cpu, Layers, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#171717]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#00C2A0] opacity-20 blur-[100px]"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00C2A0] text-xs font-mono uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C2A0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C2A0]"></span>
              </span>
              Prattica Intelligence System v2.0
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Inteligência, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Automação</span> e <br />
              <span className="text-[#00C2A0]">Estratégia</span>.
            </h1>
            
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              A Prattica integra dados, IA e design de processos para transformar operações complexas em resultados inteligentes e previsíveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contato">
                <Button size="lg" className="bg-[#00C2A0] text-black hover:bg-[#00A085] rounded-full px-8 h-12 text-base font-semibold">
                  Agendar Demonstração <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/solucoes">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base">
                  Conhecer Soluções
                </Button>
              </Link>
            </div>
          </div>

          {/* Abstract 3D/Data Visualization Placeholder */}
          <div className="relative h-[500px] w-full flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative w-full h-full max-w-md aspect-square">
              {/* Central Orb */}
              <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-gradient-to-br from-[#00C2A0]/20 to-transparent backdrop-blur-xl border border-[#00C2A0]/30 flex items-center justify-center animate-pulse-slow">
                <div className="w-48 h-48 rounded-full bg-[#171717] flex items-center justify-center border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop')] bg-cover opacity-20 mix-blend-overlay"></div>
                  <Brain className="w-16 h-16 text-[#00C2A0]" />
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#1a1a1a] rounded-xl border border-[#00C2A0]/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,194,160,0.3)]">
                  <BarChart3 className="w-6 h-6 text-[#00C2A0]" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin-reverse-slow">
                <div className="absolute bottom-10 right-10 w-12 h-12 bg-[#1a1a1a] rounded-xl border border-white/20 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin-slow delay-75">
                <div className="absolute bottom-10 left-10 w-12 h-12 bg-[#1a1a1a] rounded-xl border border-white/20 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <circle cx="50%" cy="50%" r="150" fill="none" stroke="#00C2A0" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="50%" cy="50%" r="100" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#00C2A0] to-transparent"></div>
        </div>
      </section>

      {/* Featured Product: Athena Clinic SO */}
      <section className="py-20 bg-[#1a1a1a] border-b border-white/5 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="bg-gradient-to-r from-[#00C2A0]/10 to-transparent rounded-3xl p-8 md:p-12 border border-[#00C2A0]/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2A0] text-black text-xs font-bold uppercase tracking-wider mb-6">
                  Novo Produto
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Athena Clinic SO</h2>
                <p className="text-xl text-gray-300 mb-6">
                  O primeiro Sistema Operacional para clínicas com IA nativa. Do agendamento ao laudo, automatize 100% da jornada do paciente.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]"></div>
                    Atendimento e triagem via IA
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]"></div>
                    Geração automática de laudos
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]"></div>
                    Gestão financeira integrada
                  </li>
                </ul>
                <Link href="/produtos">
                  <Button className="bg-[#00C2A0] text-black hover:bg-[#00A085] rounded-full px-8">
                    Conhecer o Athena Clinic
                  </Button>
                </Link>
              </div>
              <div className="relative h-[300px] bg-[#111] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-[#00C2A0] rounded-2xl mx-auto mb-4 flex items-center justify-center text-black font-bold text-3xl shadow-[0_0_30px_rgba(0,194,160,0.4)]">
                    A
                  </div>
                  <h3 className="text-2xl font-bold text-white">Athena Clinic</h3>
                  <p className="text-[#00C2A0] text-sm uppercase tracking-widest mt-2">Operating System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition / Stats */}
      <section className="py-20 border-y border-white/5 bg-[#171717]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+45%", label: "Eficiência Operacional" },
              { value: "3x", label: "ROI Médio em 12 meses" },
              { value: "+100", label: "Projetos Entregues" },
              { value: "24/7", label: "Monitoramento Inteligente" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#00C2A0] transition-colors duration-300">{stat.value}</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-32 relative">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Soluções integradas para <br /><span className="text-[#00C2A0]">alta performance</span>.</h2>
              <p className="text-gray-400 text-lg">
                Nossa suite de soluções cobre desde a consultoria estratégica até a implementação técnica de automações avançadas.
              </p>
            </div>
            <Link href="/solucoes">
              <Button variant="ghost" className="text-[#00C2A0] hover:text-[#00A085] hover:bg-transparent p-0 group text-lg">
                Ver todas as soluções <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="w-10 h-10 text-[#00C2A0]" />,
                title: "IA Analítica",
                desc: "Modelos preditivos e análise de dados para antecipar tendências e comportamentos."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#00C2A0]" />,
                title: "Automação",
                desc: "Robôs e workflows inteligentes que eliminam tarefas repetitivas e reduzem erros."
              },
              {
                icon: <Layers className="w-10 h-10 text-[#00C2A0]" />,
                title: "Consultoria",
                desc: "Diagnóstico profundo e redesenho de processos para máxima eficiência."
              }
            ].map((card, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00C2A0]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6 p-4 bg-[#171717] rounded-xl w-fit border border-white/5 group-hover:border-[#00C2A0]/30 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00C2A0] transition-colors">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Teaser */}
      <section className="py-32 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00C2A0]/5 to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00C2A0] font-mono text-sm tracking-wider uppercase mb-4 block">Metodologia Exclusiva</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Prattica DNA™</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Não entregamos apenas software ou relatórios. Entregamos um sistema vivo de melhoria contínua baseado em 5 pilares fundamentais.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Fundamentos: Diagnóstico e base estratégica",
                  "Operação: Implementação tática e processos",
                  "Entrega: Execução e qualidade assegurada",
                  "Educação: Treinamento e capacitação do time",
                  "Cultura: Transformação do mindset organizacional"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-gray-300">
                    <div className="w-8 h-8 rounded-full bg-[#00C2A0]/10 flex items-center justify-center text-[#00C2A0] font-bold text-sm border border-[#00C2A0]/20">
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link href="/metodologia">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8">
                    Conhecer o Método Completo
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              {/* Visual representation of DNA/Process */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#000] border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop')] bg-cover opacity-30 mix-blend-overlay"></div>
                <div className="relative z-10 text-center">
                  <div className="text-9xl font-bold text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">DNA</div>
                  <div className="w-64 h-64 border-2 border-[#00C2A0] rounded-full flex items-center justify-center animate-spin-slow-reverse">
                    <div className="w-48 h-48 border border-dashed border-white/30 rounded-full flex items-center justify-center animate-spin-slow">
                      <div className="w-32 h-32 bg-[#00C2A0]/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,194,160,0.2)]">
                        <span className="text-2xl font-bold text-[#00C2A0]">5 Fases</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 relative overflow-hidden">
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto">
            Pronto para transformar sua operação em uma <span className="text-[#00C2A0]">vantagem competitiva</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Agende uma conversa com nossos especialistas e descubra onde a inteligência artificial pode levar seu negócio.
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-[#00C2A0] text-black hover:bg-[#00A085] text-lg px-10 py-6 rounded-full shadow-[0_0_20px_rgba(0,194,160,0.3)] hover:shadow-[0_0_40px_rgba(0,194,160,0.5)] transition-all">
              Falar com um Especialista
            </Button>
          </Link>
        </div>
        
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00C2A0] opacity-10 blur-[120px] pointer-events-none"></div>
      </section>
    </MainLayout>
  );
}
