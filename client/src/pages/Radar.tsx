import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export default function Radar() {
  const posts = [
    {
      category: "Tendências",
      date: "12 Out, 2025",
      title: "O fim dos dashboards estáticos: A era da IA Generativa na análise de dados",
      excerpt: "Como a integração de LLMs está transformando a forma como executivos interagem com seus dados, permitindo perguntas em linguagem natural em vez de filtros complexos.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
    },
    {
      category: "Case Study",
      date: "28 Set, 2025",
      title: "Reduzindo o CAC em 40% com automação de marketing e scoring preditivo",
      excerpt: "Estudo de caso detalhado sobre como uma fintech utilizou nossa metodologia para otimizar seu funil de vendas.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
      category: "Artigo Técnico",
      date: "15 Set, 2025",
      title: "Arquitetura de dados moderna: Lakehouse vs Data Warehouse",
      excerpt: "Uma análise técnica sobre qual estrutura se adapta melhor a empresas em fase de escala acelerada.",
      image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop"
    }
  ];

  return (
    <MainLayout>
      <section className="pt-32 pb-20 bg-[#171717]">
        <div className="container">
          <span className="text-[#00C2A0] font-mono text-sm tracking-wider uppercase mb-4 block">Radar Prattica</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Insights para <br /><span className="text-[#00C2A0]">decisões estratégicas</span>.
          </h1>
        </div>
      </section>

      <section className="py-20 bg-[#1a1a1a] border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {posts.map((post, i) => (
              <article key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/5 pb-12 last:border-0">
                <div className="md:col-span-5 overflow-hidden rounded-2xl">
                  <div 
                    className="aspect-video bg-gray-800 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                </div>
                <div className="md:col-span-7">
                  <div className="flex items-center gap-4 mb-4 text-xs font-mono uppercase tracking-wider text-gray-500">
                    <span className="flex items-center gap-1 text-[#00C2A0]"><Tag className="w-3 h-3" /> {post.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#00C2A0] transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="text-white hover:text-[#00C2A0] p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform">
                    Ler Artigo Completo <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full px-8">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
