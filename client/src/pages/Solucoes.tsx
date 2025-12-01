import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Layers, BarChart3, Users, Lock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Solucoes() {
  const solutions = [
    {
      id: "ia-analitica",
      icon: <Brain className="w-8 h-8" />,
      title: "IA Analítica",
      desc: "Transforme dados brutos em previsões precisas. Nossos modelos de Machine Learning identificam padrões ocultos e oportunidades de receita.",
      features: ["Modelagem Preditiva", "Análise de Churn", "Clusterização de Clientes", "Forecasting de Vendas"]
    },
    {
      id: "automacao",
      icon: <Zap className="w-8 h-8" />,
      title: "Automação Inteligente",
      desc: "Elimine o trabalho manual repetitivo. Criamos robôs (RPA) e integrações via API que conectam seus sistemas e aceleram processos.",
      features: ["RPA (Robotic Process Automation)", "Integração de APIs", "Chatbots Inteligentes", "Workflows Automatizados"]
    },
    {
      id: "consultoria",
      icon: <Layers className="w-8 h-8" />,
      title: "Consultoria Estratégica",
      desc: "Design de processos focado em eficiência. Mapeamos, otimizamos e redesenhamos sua operação para escalar com segurança.",
      features: ["Mapeamento de Processos (BPM)", "Diagnóstico Operacional", "Planejamento Estratégico", "Gestão de Mudança"]
    },
    {
      id: "academy",
      icon: <Users className="w-8 h-8" />,
      title: "Prattica Academy",
      desc: "Capacitação corporativa para a era dos dados. Treinamos seu time para pensar e agir de forma analítica.",
      features: ["Workshops In-Company", "Trilhas de Data Literacy", "Mentoria para Líderes", "Treinamento em Ferramentas"]
    },
    {
      id: "portal",
      icon: <Lock className="w-8 h-8" />,
      title: "Portal do Cliente",
      desc: "Acesso exclusivo a dashboards em tempo real, relatórios de projeto e suporte dedicado em um ambiente seguro.",
      features: ["Dashboards Power BI/Tableau", "Gestão de Chamados", "Repositório de Documentos", "Acesso Seguro (SSO)"]
    }
  ];

  return (
    <MainLayout>
      <section className="pt-32 pb-20 bg-[#171717]">
        <div className="container">
          <span className="text-[#00C2A0] font-mono text-sm tracking-wider uppercase mb-4 block">Nossas Soluções</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl">
            Tecnologia aplicada para <br /><span className="text-[#00C2A0]">resultados reais</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Uma suite completa de serviços e produtos desenhados para elevar a maturidade digital da sua empresa.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-8">
            {solutions.map((sol, i) => (
              <div key={i} id={sol.id} className="group relative bg-[#1a1a1a] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-[#00C2A0]/30 transition-all duration-500 overflow-hidden">
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C2A0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                  <div className="md:col-span-4">
                    <div className="w-16 h-16 bg-[#171717] rounded-2xl border border-white/10 flex items-center justify-center text-[#00C2A0] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/50">
                      {sol.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-[#00C2A0] transition-colors">{sol.title}</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {sol.desc}
                    </p>
                    <Link href="/contato">
                      <Button variant="outline" className="border-[#00C2A0] text-[#00C2A0] hover:bg-[#00C2A0] hover:text-black">
                        Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="md:col-span-8 bg-[#111] rounded-2xl p-8 border border-white/5">
                    <h3 className="text-sm font-mono uppercase text-gray-500 mb-6 tracking-wider">Funcionalidades Principais</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {sol.features.map((feat, j) => (
                        <div key={j} className="flex items-center gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]"></div>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#00C2A0] text-black">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Não sabe por onde começar?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Nossos especialistas podem realizar um diagnóstico rápido para identificar as maiores oportunidades de automação no seu negócio.
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-black text-white hover:bg-gray-900 border-none px-8 py-6 text-lg rounded-full">
              Solicitar Diagnóstico Gratuito
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
