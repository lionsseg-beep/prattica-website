import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, Linkedin, Instagram, Phone, MapPin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import PratticaAssistant from "./PratticaAssistant";

const WHATSAPP = "5567993013370";
const WHATSAPP_MSG = encodeURIComponent("Olá! Vim pelo site da Prattica AI e gostaria de saber mais sobre as soluções.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { name: "Soluções", href: "/solucoes" },
    { name: "Athena Clinic", href: "/produtos" },
    { name: "Metodologia", href: "/metodologia" },
    { name: "Sobre", href: "/sobre" },
    { name: "Radar", href: "/radar" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#070D0D", color: "#F2EDE8" }}>
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 border-b"
            : "py-5 border-b border-transparent"
        )}
        style={isScrolled ? {
          background: "rgba(7, 13, 13, 0.92)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(94, 196, 188, 0.10)"
        } : {}}
      >
        <div className="container flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 group shrink-0">
              {/* Athena triangle symbol */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <polygon
                    points="16,3 29,27 3,27"
                    fill="none"
                    stroke="#1DA89A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="transition-all duration-500 group-hover:stroke-[#5EC4BC]"
                  />
                  <polygon
                    points="16,9 24,24 8,24"
                    fill="#147A78"
                    className="transition-all duration-500 group-hover:fill-[#1DA89A]"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.125rem", letterSpacing: "-0.02em", color: "#F2EDE8" }}>
                  Prattica
                  <span style={{ color: "#1DA89A" }}>.ai</span>
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    location === link.href
                      ? "text-[#1DA89A]"
                      : "text-[#a0b4b4] hover:text-[#F2EDE8]"
                  )}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm py-2.5 px-5">
              WhatsApp
            </a>
            <Link href="/contato">
              <a className="btn-primary text-sm py-2.5 px-5">
                Agendar Demo <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>

          {/* Mobile */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 rounded-lg transition-colors" style={{ color: "#F2EDE8" }}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l p-0" style={{ background: "#0F1E1E", borderColor: "rgba(94,196,188,0.12)", color: "#F2EDE8" }}>
              <div className="flex flex-col h-full p-6 pt-16 gap-6">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                      <a
                        onClick={() => setMobileOpen(false)}
                        className="text-base font-medium py-3 px-4 rounded-lg transition-colors"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: location === link.href ? "#1DA89A" : "#a0b4b4",
                          background: location === link.href ? "rgba(29,168,154,0.08)" : "transparent"
                        }}
                      >
                        {link.name}
                      </a>
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 mt-auto">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost text-center justify-center">
                    WhatsApp
                  </a>
                  <Link href="/contato">
                    <a onClick={() => setMobileOpen(false)} className="btn-primary justify-center text-center">
                      Agendar Demo
                    </a>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main */}
      <main className="pt-20">
        {children}
      </main>

      {/* AI Assistant */}
      <PratticaAssistant />

      {/* Footer */}
      <footer style={{ background: "#070D0D", borderTop: "1px solid rgba(94,196,188,0.10)" }} className="pt-20 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <polygon points="16,3 29,27 3,27" fill="none" stroke="#1DA89A" strokeWidth="2" strokeLinejoin="round"/>
                  <polygon points="16,9 24,24 8,24" fill="#147A78"/>
                </svg>
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "#F2EDE8" }}>
                  Prattica<span style={{ color: "#1DA89A" }}>.ai</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#6a8a8a", fontFamily: "'DM Sans', sans-serif" }}>
                Consultoria em processos e gestão com automação via agentes de IA. Inteligência que move decisões.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/pratticaai" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(29,168,154,0.08)", border: "1px solid rgba(29,168,154,0.15)", color: "#5EC4BC" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(29,168,154,0.18)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(29,168,154,0.08)")}>
                  <Linkedin size={16} />
                </a>
                <a href="https://instagram.com/pratticaai" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(29,168,154,0.08)", border: "1px solid rgba(29,168,154,0.15)", color: "#5EC4BC" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(29,168,154,0.18)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(29,168,154,0.08)")}>
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Soluções */}
            <div>
              <h5 className="text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#F2EDE8", letterSpacing: "0.02em" }}>Soluções</h5>
              <ul className="space-y-3">
                {["Agentes de IA", "Automação de Processos", "Consultoria Estratégica", "Athena Clinic SO"].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm transition-colors duration-200 hover:text-[#5EC4BC]" style={{ color: "#6a8a8a", fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h5 className="text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#F2EDE8", letterSpacing: "0.02em" }}>Empresa</h5>
              <ul className="space-y-3">
                {[
                  { name: "Sobre Nós", href: "/sobre" },
                  { name: "Metodologia DNA", href: "/metodologia" },
                  { name: "Radar (Blog)", href: "/radar" },
                  { name: "Contato", href: "/contato" },
                ].map(item => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-sm transition-colors duration-200 hover:text-[#5EC4BC]" style={{ color: "#6a8a8a", fontFamily: "'DM Sans', sans-serif" }}>
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h5 className="text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#F2EDE8", letterSpacing: "0.02em" }}>Contato</h5>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone size={14} className="mt-0.5 shrink-0" style={{ color: "#1DA89A" }} />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200 hover:text-[#5EC4BC]"
                    style={{ color: "#6a8a8a", fontFamily: "'DM Sans', sans-serif" }}>
                    (67) 99301-3370
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={14} className="mt-0.5 shrink-0" style={{ color: "#1DA89A" }} />
                  <a href="mailto:contato@prattica.ai"
                    className="text-sm transition-colors duration-200 hover:text-[#5EC4BC]"
                    style={{ color: "#6a8a8a", fontFamily: "'DM Sans', sans-serif" }}>
                    contato@prattica.ai
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#1DA89A" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "#6a8a8a", fontFamily: "'DM Sans', sans-serif" }}>
                    Av. Afonso Pena, 4785 — The Place, Torre 2, 20° andar, Sala 2007<br />
                    Campo Grande, MS
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="section-divider mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: "#3a5555", fontFamily: "'DM Sans', sans-serif" }}>
              © {new Date().getFullYear()} Prattica AI. Todos os direitos reservados. Campo Grande, MS — Brasil.
            </p>
            <div className="flex gap-6">
              {["Privacidade", "Termos de Uso"].map(item => (
                <a key={item} href="#" className="text-xs transition-colors duration-200 hover:text-[#5EC4BC]" style={{ color: "#3a5555", fontFamily: "'DM Sans', sans-serif" }}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
