import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Users, Award, ArrowRight, PlayCircle } from "lucide-react";

export default function Academy() {
  return (
    <MainLayout>
      <section className="pt-32 pb-20 bg-[#171717] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2A0]/10 border border-[#00C2A0]/20 text-[#00C2A0] text-xs font-mono uppercase tracking-wider mb-6">
            <Award className="w-3 h-3" />
            Educação Corporativa
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl">
            Prattica <span className="text-[#00C2A0]">Academy</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
            Não basta implementar tecnologia; é preciso capacitar as pessoas. Nossos programas educacionais transformam times operacionais em estrategistas de dados.
          </p>
          <Button className="bg-[#00C2A0] text-black hover:bg-[#00A085] rounded-full px-8">
            Ver Catálogo de Cursos
          </Button>
        </div>
        
        {/* Abstract Background */}
        <div className="absolute -right-20 top-20 w-[500px] h-[500px] bg-gradient-to-br from-[#00C2A0]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Trilhas de Aprendizado */}
      <section className="py-20 bg-[#1a1a1a] border-y border-white/5">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Trilhas de Conhecimento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Literacy",
                level: "Iniciante",
                duration: "12h",
                desc: "Fundamentos de dados para não-técnicos. Aprenda a ler, trabalhar, analisar e comunicar com dados.",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                title: "Automação Low-Code",
                level: "Intermediário",
                duration: "24h",
                desc: "Capacitação em ferramentas como Power Automate e n8n para criar suas próprias automações.",
                icon: <Video className="w-6 h-6" />
              },
              {
                title: "Liderança Analítica",
                level: "Avançado",
                duration: "16h",
                desc: "Para gestores que precisam liderar times de dados e tomar decisões estratégicas baseadas em IA.",
                icon: <Users className="w-6 h-6" />
              }
            ].map((course, i) => (
              <div key={i} className="group bg-[#171717] border border-white/5 rounded-2xl p-8 hover:border-[#00C2A0]/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#00C2A0] group-hover:bg-[#00C2A0] group-hover:text-black transition-colors">
                    {course.icon}
                  </div>
                  <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded bg-[#111]">
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00C2A0] transition-colors">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {course.desc}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <PlayCircle className="w-4 h-4" /> {course.duration}
                  </span>
                  <Button variant="ghost" size="sm" className="text-[#00C2A0] hover:text-[#00A085] hover:bg-transparent p-0">
                    Detalhes <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops In-Company */}
      <section className="py-20">
        <div className="container">
          <div className="bg-[#00C2A0] rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Leve a Prattica para sua empresa</h2>
                <p className="text-black/80 text-lg mb-8 leading-relaxed">
                  Desenvolvemos programas personalizados para a realidade do seu negócio. Workshops práticos onde sua equipe resolve problemas reais da empresa.
                </p>
                <Button className="bg-black text-white hover:bg-gray-900 border-none rounded-full px-8 h-12">
                  Solicitar Proposta In-Company
                </Button>
              </div>
              <div className="hidden md:block relative">
                <div className="aspect-video bg-black/10 rounded-xl backdrop-blur-sm border border-black/5 p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-black/20 rounded flex items-center justify-center">
                    <Users className="w-16 h-16 text-black/50" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
