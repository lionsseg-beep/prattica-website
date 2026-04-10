interface PratticaLogoProps {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}

function PratticaSymbol({ color, size }: { color: string; size: number }) {
  // Symbol concept: hexagonal data node with circuit lines — technology + data intelligence
  // Clean, geometric, futuristic — not organic like Athena
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer hexagon — data structure */}
      <path
        d="M20 2 L35 11 L35 29 L20 38 L5 29 L5 11 Z"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Inner diamond — core intelligence */}
      <path
        d="M20 10 L28 20 L20 30 L12 20 Z"
        fill={color}
        fillOpacity="0.15"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Central dot — data point */}
      <circle cx="20" cy="20" r="3" fill={color} />
      {/* Circuit lines — connectivity */}
      <line x1="20" y1="2" x2="20" y2="10" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="30" x2="20" y2="38" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="5" y1="11" x2="12" y2="20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="35" y1="29" x2="28" y2="20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function PratticaLogo({ size = "md", theme = "dark" }: PratticaLogoProps) {
  const sizeMap = {
    sm: { symbol: 28, text: 15, sub: 9,  gap: 8  },
    md: { symbol: 36, text: 19, sub: 10, gap: 10 },
    lg: { symbol: 48, text: 25, sub: 12, gap: 13 },
  };
  const s = sizeMap[size];
  const symbolColor = theme === "dark" ? "#5EC4BC" : "#1B7A78";
  const textColor   = theme === "dark" ? "#F2EDE8" : "#0D5252";
  const subColor    = theme === "dark" ? "#5EC4BC" : "#1B7A78";

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: s.gap }}>
      <PratticaSymbol color={symbolColor} size={s.symbol} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: s.text,
          letterSpacing: "-0.02em",
          color: textColor,
        }}>
          Prattica
        </span>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontWeight: 500,
          fontSize: s.sub,
          letterSpacing: "0.12em",
          color: subColor,
          textTransform: "uppercase",
          marginTop: 1,
        }}>
          AI Solutions
        </span>
      </div>
    </div>
  );
}
