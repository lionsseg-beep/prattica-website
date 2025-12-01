import MainLayout from "@/components/MainLayout";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Settings, Package, GraduationCap, Heart } from "lucide-react";

export default function Metodologia() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 1,
      title: "Fundamentos",
      icon: <Search className="w-6 h-6" />,
      desc: "Diagnóstico profundo e definição estratégica. Entendemos o 'porquê' antes de definir o 'como'.",
      details: "Nesta fase, realizamos imersão no negócio, mapeamento de dores e definição de KPIs de sucesso."
    },
    {
      id: 2,
      title: "Operação",
      icon: <Settings className="w-6 h-6" />,
      desc: "Implementação tática e redesenho de processos. A estratégia ganha vida na rotina.",
      details: "Desenvolvimento de automações, integração de sistemas e otimização de fluxos de trabalho."
    },
    {
      id: 3,
      title: "Entrega",
      icon: <Package className="w-6 h-6" />,
      desc: "Execução com qualidade assegurada e foco em resultados tangíveis.",
      details: "Homologação, testes de qualidade e go-live das soluções implementadas."
    },
    {
      id: 4,
      title: "Educação",
      icon: <GraduationCap className="w-6 h-6" />,
      desc: "Transferência de conhecimento. Não criamos dependência, criamos autonomia.",
      details: "Treinamentos, documentação técnica e workshops para o time do cliente."
    },
    {
      id: 5,
      title: "Cultura",
      icon: <Heart className="w-6 h-6" />,
      desc: "Transformação do mindset. A tecnologia só funciona se as pessoas a abraçarem.",
      details: "Gestão de mudança, rituais de acompanhamento e consolidação da cultura data-driven."
    }
  ];

  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-[#171717]">
        <div className="container text-center">
          <span className="text-[#00C2A0] font-mono text-sm tracking-wider uppercase mb-4 block">Prattica DNA™</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            O método por trás do <span className="text-[#00C2A0]">sucesso</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Uma abordagem estruturada em 5 fases para garantir que a inovação não seja apenas um evento isolado, mas um processo contínuo.
          </p>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Interactive List */}
            <div className="space-y-4">
              {phases.map((phase, index) => (
                <div 
                  key={index}
                  className={cn(
                    "p-6 rounded-2xl border transition-all duration-300 cursor-pointer group",
                    activePhase === index 
                      ? "bg-[#1a1a1a] border-[#00C2A0] shadow-[0_0_20px_rgba(0,194,160,0.1)]" 
                      : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10"
                  )}
                  onClick={() => setActivePhase(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                      activePhase === index ? "bg-[#00C2A0] text-black" : "bg-white/10 text-gray-400 group-hover:bg-white/20"
                    )}>
                      {phase.id}
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-xl font-bold mb-2 transition-colors",
                        activePhase === index ? "text-white" : "text-gray-400 group-hover:text-white"
                      )}>
                        {phase.title}
                      </h3>
                      <p className={cn(
                        "text-sm leading-relaxed transition-all duration-300",
                        activePhase === index ? "text-gray-300 block" : "text-gray-500 hidden md:block"
                      )}>
                        {phase.desc}
                      </p>
                      
                      <div className={cn(
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        activePhase === index ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
                      )}>
                        <p className="text-sm text-[#00C2A0]">{phase.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Representation */}
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Central Circle */}
              <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#00C2A0]/20 animate-ping-slow"></div>
                
                {/* Active Phase Display */}
                <div className="text-center z-10 p-8 bg-[#171717]/80 backdrop-blur-xl rounded-full w-64 h-64 flex flex-col items-center justify-center border border-white/10 shadow-2xl">
                  <div className="mb-4 p-3 bg-[#00C2A0]/10 rounded-full text-[#00C2A0]">
                    {phases[activePhase].icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-white">{phases[activePhase].title}</h2>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Fase {activePhase + 1}/5</span>
                </div>

                {/* Orbiting Dots */}
                {phases.map((_, i) => {
                  const angle = (i * (360 / phases.length)) - 90; // Start from top
                  const radius = 200; // Half of container width
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);
                  
                  return (
                    <div 
                      key={i}
                      className={cn(
                        "absolute w-4 h-4 rounded-full transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2",
                        activePhase === i ? "bg-[#00C2A0] scale-150 shadow-[0_0_15px_#00C2A0]" : "bg-gray-700"
                      )}
                      style={{ 
                        left: `calc(50% + ${x}px)`, 
                        top: `calc(50% + ${y}px)` 
                      }}
                    />
                  );
                })}
                
                {/* Connecting Lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'rotate(-90deg)' }}>
                  <circle 
                    cx="50%" 
                    cy="50%" 
                    r="200" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="1" 
                  />
                  <circle 
                    cx="50%" 
                    cy="50%" 
                    r="200" 
                    fill="none" 
                    stroke="#00C2A0" 
                    strokeWidth="2" 
                    strokeDasharray="1256" // 2 * PI * 200
                    strokeDashoffset={1256 - ((activePhase + 1) * (1256 / 5))}
                    className="transition-all duration-700 ease-out"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
