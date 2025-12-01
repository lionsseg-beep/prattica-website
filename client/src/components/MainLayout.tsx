import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ArrowRight, Linkedin, Instagram, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import PratticaAssistant from "./PratticaAssistant";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "/sobre" },
    { name: "Soluções", href: "/solucoes" },
    { name: "Metodologia", href: "/metodologia" },
    { name: "Academy", href: "/academy" },
    { name: "Radar", href: "/radar" },
  ];

  return (
    <div className="min-h-screen bg-[#171717] text-white font-sans selection:bg-[#00C2A0] selection:text-black">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-[#171717]/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[#00C2A0] rounded-sm flex items-center justify-center text-black font-bold text-xl font-mono group-hover:rotate-90 transition-transform duration-500">
                P
              </div>
              <span className="text-xl font-bold tracking-tight font-sans">Prattica<span className="text-[#00C2A0]">.ai</span></span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className={cn(
                  "text-sm font-medium transition-colors hover:text-[#00C2A0]",
                  location === link.href ? "text-[#00C2A0]" : "text-gray-300"
                )}>
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/contato">
              <Button 
                variant="outline" 
                className="hidden md:flex border-[#00C2A0] text-[#00C2A0] hover:bg-[#00C2A0] hover:text-black transition-all duration-300 rounded-full px-6"
              >
                Agendar Demo
              </Button>
            </Link>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#171717] border-l border-white/10 text-white w-[300px]">
                <div className="flex flex-col gap-8 mt-10">
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link key={link.name} href={link.href}>
                        <a className="text-lg font-medium hover:text-[#00C2A0] transition-colors py-2 border-b border-white/5">
                          {link.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <Link href="/contato">
                    <Button className="w-full bg-[#00C2A0] text-black hover:bg-[#00A085]">
                      Agendar Demo
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 min-h-[calc(100vh-400px)]">
        {children}
      </main>

      {/* AI Assistant */}
      <PratticaAssistant />

      {/* Footer */}
      <footer className="bg-[#111111] border-t border-white/5 pt-20 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-[#00C2A0] rounded-sm flex items-center justify-center text-black font-bold text-sm font-mono">
                  P
                </div>
                <span className="text-lg font-bold font-sans">Prattica<span className="text-[#00C2A0]">.ai</span></span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Inteligência, automação e estratégia em movimento. Transformamos operações em resultados inteligentes através de dados e design de processos.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#00C2A0] transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-[#00C2A0] transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-[#00C2A0] transition-colors"><Mail size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white">Soluções</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00C2A0] transition-colors">IA Analítica</a></li>
                <li><a href="#" className="hover:text-[#00C2A0] transition-colors">Automação de Processos</a></li>
                <li><a href="#" className="hover:text-[#00C2A0] transition-colors">Consultoria Estratégica</a></li>
                <li><a href="#" className="hover:text-[#00C2A0] transition-colors">Prattica Academy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white">Empresa</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="/sobre" className="hover:text-[#00C2A0] transition-colors">Sobre Nós</a></li>
                <li><a href="/metodologia" className="hover:text-[#00C2A0] transition-colors">Metodologia DNA</a></li>
                <li><a href="/radar" className="hover:text-[#00C2A0] transition-colors">Radar (Blog)</a></li>
                <li><a href="/carreiras" className="hover:text-[#00C2A0] transition-colors">Carreiras</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C2A0]">Email:</span> contato@prattica.ai
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C2A0]">Tel:</span> +55 11 99999-9999
                </li>
                <li className="mt-4">
                  <Button variant="secondary" className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10">
                    Portal do Cliente <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Prattica Consultoria. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
