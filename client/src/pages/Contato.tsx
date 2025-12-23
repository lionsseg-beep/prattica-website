import MainLayout from "@/components/MainLayout";
import FormularioContato from "@/components/FormularioContato";

export default function Contato() {
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-[#171717] relative overflow-hidden">
        <div className="container relative z-10">
          <span className="text-[#00C2A0] font-mono text-sm tracking-wider uppercase mb-4 block">Fale Conosco</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl">
            Vamos construir o <span className="text-[#00C2A0]">futuro</span> juntos.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Preencha o formulário para agendar uma demonstração ou conversar com nossos consultores sobre como podemos transformar seu negócio.
          </p>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-1/3 h-full bg-gradient-to-l from-[#00C2A0]/5 to-transparent pointer-events-none"></div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container">
          <FormularioContato />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#171717] border-t border-white/5">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua operação?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Nossos consultores estão prontos para entender seus desafios e propor soluções personalizadas com IA e automação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#00C2A0] text-black font-semibold rounded-xl hover:bg-[#00C2A0]/90 transition-colors inline-block"
            >
              Conversar no WhatsApp
            </a>
            <a
              href="mailto:contato@prattica.ai"
              className="px-8 py-3 border border-[#00C2A0] text-[#00C2A0] font-semibold rounded-xl hover:bg-[#00C2A0]/10 transition-colors inline-block"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
