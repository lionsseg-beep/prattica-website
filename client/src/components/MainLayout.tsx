import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, Linkedin, Instagram, Phone, MapPin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import PratticaAssistant from "./PratticaAssistant";
import AthenaLogo from "./AthenaLogo";

const WPP = "5567993013370";
const WPP_MSG = encodeURIComponent("Olá! Vim pelo site da Prattica AI e gostaria de saber mais.");
const WPP_URL = `https://wa.me/${WPP}?text=${WPP_MSG}`;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navLinks = [
    { name: "Soluções",       href: "/solucoes" },
    { name: "Athena Clinic",  href: "/produtos" },
    { name: "Metodologia",    href: "/metodologia" },
    { name: "Sobre",          href: "/sobre" },
    { name: "Radar",          href: "/radar" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#EEEEF0", color: "#1A2B2B" }}>

      {/* ── NAV ── */}
      <header
        className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-400")}
        style={{
          padding: scrolled ? "0.75rem 0" : "1.25rem 0",
          background: scrolled ? "rgba(238,238,240,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(27,122,120,0.12)" : "1px solid transparent",
        }}
      >
        <div className="container flex items-center justify-between gap-6">
          <Link href="/">
            <a className="shrink-0 group" style={{ textDecoration: "none" }}>
              <AthenaLogo variant="full" size="md" theme="light" />
            </a>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: location === link.href ? "#1B7A78" : "#4A6868",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#0D5252")}
                  onMouseLeave={e => (e.currentTarget.style.color = location === link.href ? "#1B7A78" : "#4A6868")}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={WPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
              WhatsApp
            </a>
            <Link href="/contato">
              <a className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
                Agendar demo <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 rounded-lg" style={{ color: "#0D5252" }}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0" style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(27,122,120,0.12)" }}>
              <div className="flex flex-col h-full p-6 pt-16 gap-6">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                      <a
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 px-4 rounded-xl text-base font-medium transition-colors"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: location === link.href ? "#1B7A78" : "#4A6868",
                          background: location === link.href ? "rgba(27,122,120,0.08)" : "transparent",
                          textDecoration: "none",
                        }}
                      >
                        {link.name}
                      </a>
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 mt-auto">
                  <a href={WPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost justify-center">WhatsApp</a>
                  <Link href="/contato">
                    <a onClick={() => setMobileOpen(false)} className="btn-primary justify-center">Agendar demo</a>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="pt-20">{children}</main>

      {/* ── AI ASSISTANT ── */}
      <PratticaAssistant />

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0D5252", color: "#EEEEF0" }} className="pt-20 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Marca */}
            <div className="lg:col-span-1">
              <div className="mb-5">
                <AthenaLogo variant="full" size="md" theme="dark" />
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#7EC8C4", fontFamily: "'DM Sans', sans-serif" }}>
                Consultoria em processos e gestão com automação via agentes de IA. Inteligência que move decisões.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, href: "https://linkedin.com/company/pratticaai" },
                  { Icon: Instagram, href: "https://instagram.com/pratticaai" },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{ background: "rgba(126,200,196,0.12)", border: "1px solid rgba(126,200,196,0.20)", color: "#7EC8C4" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(126,200,196,0.22)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(126,200,196,0.12)")}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Soluções */}
            <div>
              <h5 className="text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#EEEEF0", letterSpacing: "0.02em" }}>Soluções</h5>
              <ul className="space-y-3">
                {["Agentes de IA", "Automação de Processos", "Consultoria Estratégica", "Athena Clinic SO"].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm transition-colors duration-200" style={{ color: "#7EC8C4", fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#EEEEF0")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#7EC8C4")}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h5 className="text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#EEEEF0", letterSpacing: "0.02em" }}>Empresa</h5>
              <ul className="space-y-3">
                {[
                  { name: "Sobre Nós", href: "/sobre" },
                  { name: "Metodologia DNA", href: "/metodologia" },
                  { name: "Radar (Blog)", href: "/radar" },
                  { name: "Contato", href: "/contato" },
                ].map(item => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-sm transition-colors duration-200" style={{ color: "#7EC8C4", fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#EEEEF0")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#7EC8C4")}>{item.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h5 className="text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#EEEEF0", letterSpacing: "0.02em" }}>Contato</h5>
              <ul className="space-y-4">
                {[
                  { Icon: Phone, text: "(67) 99301-3370", href: WPP_URL },
                  { Icon: Mail,  text: "contato@prattica.ai", href: "mailto:contato@prattica.ai" },
                  { Icon: MapPin, text: "Av. Afonso Pena, 4785 — The Place, Torre 2, 20° andar, Sala 2007 — Campo Grande, MS", href: "#" },
                ].map(({ Icon, text, href }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon size={14} className="mt-0.5 shrink-0" style={{ color: "#5BB5B0" }} />
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-sm leading-relaxed" style={{ color: "#7EC8C4", fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="section-divider mb-8" style={{ background: "rgba(126,200,196,0.15)" }} />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: "rgba(126,200,196,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
              © {new Date().getFullYear()} Prattica AI — Campo Grande, MS — Brasil. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {["Privacidade", "Termos de Uso"].map(item => (
                <a key={item} href="#" className="text-xs transition-colors duration-200" style={{ color: "rgba(126,200,196,0.5)", fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}>{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
