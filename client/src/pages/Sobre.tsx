import MainLayout from "@/components/MainLayout";
import { Target, Award } from "lucide-react";

export default function Sobre() {
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-[#171717] relative overflow-hidden">
        <div className="container relative z-10">
          <span className="text-[#00C2A0] font-mono text-sm tracking-wider uppercase mb-4 block">Sobre a Prattica</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl">
            Construindo o futuro da <span className="text-[#00C2A0]">gestão inteligente</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Somos uma consultoria de nova geração que une a profundidade da estratégia de negócios com a velocidade da automação e inteligência artificial.
          </p>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-1/3 h-full bg-gradient-to-l from-[#00C2A0]/5 to-transparent pointer-events-none"></div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-[#1a1a1a] border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-12 bg-[#00C2A0]/10 rounded-xl flex items-center justify-center mb-6 border border-[#00C2A0]/20">
                <Target className="w-6 h-6 text-[#00C2A0]" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Democratizar o acesso à inteligência de dados e automação de alta performance, permitindo que líderes tomem decisões baseadas em fatos, não em intuição, e que equipes foquem no estratégico, não no operacional.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#00C2A0]/10 rounded-xl flex items-center justify-center mb-6 border border-[#00C2A0]/20">
                <Award className="w-6 h-6 text-[#00C2A0]" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Manifesto Legacy</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Acreditamos que o verdadeiro legado de uma empresa está na eficiência de seus processos e na clareza de sua cultura. Tecnologia sem propósito é custo; com propósito, é alavanca de crescimento exponencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura e Valores */}
      <section className="py-32">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Nossa Cultura</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excelência Técnica",
                desc: "Não aceitamos o 'mais ou menos'. Buscamos a perfeição no código, no design e na estratégia."
              },
              {
                title: "Transparência Radical",
                desc: "Dados não mentem. Nossa comunicação é direta, baseada em fatos e honestidade intelectual."
              },
              {
                title: "Inovação Pragmática",
                desc: "Inovamos para resolver problemas reais, não para seguir tendências vazias."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00C2A0]/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </MainLayout>
  );
}
