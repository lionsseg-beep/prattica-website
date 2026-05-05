import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, Linkedin, Instagram, Phone, MapPin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import PratticaAssistant from "./PratticaAssistant";
import PratticaLogo from "./PratticaLogo";

const WPP_URL = "https://wa.me/5567996622860?text=" + encodeURIComponent("Olá! Vim pelo site da Prattica AI e gostaria de saber mais.");

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const nav = [
    { name: "Soluções",    href: "/solucoes"    },
    { name: "Produtos",    href: "/produtos"     },
    { name: "Metodologia", href: "/metodologia"  },
    { name: "Sobre",       href: "/sobre"        },
    { name: "Academy",     href: "/academy"      },
    { name: "Radar",       href: "/radar"        },
  ];

  const headerBg = scrolled
    ? "rgba(8,14,14,0.92)"
    : "transparent";

  return (
    <div style={{ minHeight: "100vh", background: "#0D1A1A", color: "#E8F0F0" }}>

      {/* NAV */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
        background: headerBg,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(94,196,188,0.10)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <Link href="/"><a style={{ textDecoration: "none" }}><PratticaLogo size="md" theme="dark" /></a></Link>

          {/* Desktop nav */}
          <nav style={{ display: "none", alignItems: "center", gap: "2rem" }} className="lg:flex">
            {nav.map(l => (
              <Link key={l.name} href={l.href}>
                <a style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500,
                  color: location === l.href ? "#5EC4BC" : "#7AACAC",
                  textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#E8F0F0")}
                onMouseLeave={e => (e.currentTarget.style.color = location === l.href ? "#5EC4BC" : "#7AACAC")}>
                  {l.name}
                </a>
              </Link>
            ))}
          </nav>

          <div style={{ display: "none" }} className="lg:flex items-center gap-3">
            <a href={WPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}>WhatsApp</a>
            <Link href="/contato"><a className="btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}>Falar com especialista <ArrowRight style={{ width: 14, height: 14 }} /></a></Link>
          </div>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2" style={{ color: "#E8F0F0", background: "none", border: "none", cursor: "pointer" }}>
                <Menu style={{ width: 24, height: 24 }} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0" style={{ background: "#0D1A1A", borderLeft: "1px solid rgba(94,196,188,0.10)" }}>
              <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "5rem 1.5rem 2rem", gap: "1.5rem" }}>
                <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {nav.map(l => (
                    <Link key={l.name} href={l.href}>
                      <a onClick={() => setOpen(false)} style={{
                        display: "block", padding: "0.75rem 1rem", borderRadius: 10,
                        fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 500,
                        color: location === l.href ? "#5EC4BC" : "#7AACAC",
                        background: location === l.href ? "rgba(94,196,188,0.08)" : "transparent",
                        textDecoration: "none",
                      }}>
                        {l.name}
                      </a>
                    </Link>
                  ))}
                </nav>
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href={WPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ justifyContent: "center" }}>WhatsApp</a>
                  <Link href="/contato"><a onClick={() => setOpen(false)} className="btn-primary" style={{ justifyContent: "center" }}>Falar com especialista</a></Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main style={{ paddingTop: "5rem" }}>{children}</main>
      <PratticaAssistant />

      {/* FOOTER */}
      <footer style={{ background: "#080E0E", borderTop: "1px solid rgba(94,196,188,0.08)", paddingTop: "5rem", paddingBottom: "2.5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            <div className="lg:col-span-1">
              <PratticaLogo size="sm" theme="dark" />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#3A6868", lineHeight: 1.7, marginTop: "1rem", marginBottom: "1.25rem" }}>
                Inteligência de dados. Gestão de resultados. Campo Grande, MS — Brasil.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { Icon: Linkedin, href: "https://linkedin.com/company/pratticaai" },
                  { Icon: Instagram, href: "https://instagram.com/pratticaai" },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(94,196,188,0.08)", border: "1px solid rgba(94,196,188,0.12)", color: "#5EC4BC", textDecoration: "none", transition: "background 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(94,196,188,0.16)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(94,196,188,0.08)")}>
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: "Soluções", items: [
                { name: "Consultoria Estratégica", href: "/solucoes" },
                { name: "Automação de Processos", href: "/solucoes" },
                { name: "Produtos SaaS", href: "/produtos" },
                { name: "Prattica Academy", href: "/academy" },
              ]},
              { title: "Empresa", items: [
                { name: "Sobre Nós", href: "/sobre" },
                { name: "Metodologia DNA", href: "/metodologia" },
                { name: "Radar (Blog)", href: "/radar" },
                { name: "Contato", href: "/contato" },
              ]},
            ].map((col, i) => (
              <div key={i}>
                <h5 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.8125rem", color: "#E8F0F0", letterSpacing: "0.04em", marginBottom: "1.25rem", textTransform: "uppercase" }}>{col.title}</h5>
                <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0, margin: 0 }}>
                  {col.items.map(item => (
                    <li key={item.name}>
                      <Link href={item.href}><a style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#3A6868", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#5EC4BC")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#3A6868")}>{item.name}</a></Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h5 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.8125rem", color: "#E8F0F0", letterSpacing: "0.04em", marginBottom: "1.25rem", textTransform: "uppercase" }}>Contato</h5>
              <ul style={{ display: "flex", flexDirection: "column", gap: 14, listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { Icon: Phone, text: "(67) 99662-2860", href: WPP_URL },
                  { Icon: Mail,  text: "contato@prattica.ai", href: "mailto:contato@prattica.ai" },
                  { Icon: MapPin, text: "Av. Afonso Pena, 4785\nThe Place, Torre 2, Sala 2007\nCampo Grande, MS", href: "#" },
                ].map(({ Icon, text, href }, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <Icon size={14} style={{ color: "#1B7A78", flexShrink: 0, marginTop: 2 }} />
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "#3A6868", textDecoration: "none", lineHeight: 1.55, whiteSpace: "pre-line" }}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="section-divider" style={{ marginBottom: "1.5rem" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center", textAlign: "center" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#1E3A3A" }}>© {new Date().getFullYear()} Prattica AI Solutions. Todos os direitos reservados.</p>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#1E3A3A", letterSpacing: "0.08em" }}>INTELIGÊNCIA DE DADOS · GESTÃO DE RESULTADOS · CAMPO GRANDE, MS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
