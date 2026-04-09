interface AthenaLogoProps {
  variant?: "full" | "symbol";
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
  className?: string;
}

export default function AthenaLogo({
  variant = "full",
  size = "md",
  theme = "light",
}: AthenaLogoProps) {
  const sizes = {
    sm:  { symbol: 28, wordmarkSize: 18, gap: 8  },
    md:  { symbol: 36, wordmarkSize: 22, gap: 10 },
    lg:  { symbol: 48, wordmarkSize: 30, gap: 14 },
  };

  const s = sizes[size];

  // Colors based on theme
  const primaryColor  = theme === "dark" ? "#EEEEF0" : "#1B7A78";
  const accentColor   = theme === "dark" ? "#7EC8C4" : "#5BB5B0";
  const textColor     = theme === "dark" ? "#EEEEF0" : "#0D5252";

  // Symbol SVG — "A" with wave base, faithful to brand files
  const SymbolSVG = ({ w }: { w: number }) => {
    const h = Math.round(w * 1.1);
    return (
      <svg width={w} height={h} viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Triangle body — A shape with inner V cutout */}
        <path
          d="M24 2L46 48H32L24 26L16 48H2L24 2Z"
          fill={primaryColor}
        />
        {/* Inner V cutout — creates the negative space of A */}
        <path
          d="M24 18L30 34H18L24 18Z"
          fill={theme === "dark" ? "#0D5252" : "#EEEEF0"}
        />
        {/* Wave base — upper curve (lighter accent) */}
        <path
          d="M1 44 Q14 36 24 40 Q34 44 47 37 L47 42 Q34 50 24 46 Q14 50 1 44Z"
          fill={accentColor}
        />
        {/* Wave base — lower curve (primary, darker) */}
        <path
          d="M0 48 Q12 42 24 45 Q36 48 48 43 L48 49 Q34 56 24 52 Q12 55 0 50Z"
          fill={primaryColor}
        />
      </svg>
    );
  };

  if (variant === "symbol") {
    return <SymbolSVG w={s.symbol} />;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: s.gap }}>
      <SymbolSVG w={s.symbol} />
      <span
        style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: s.wordmarkSize,
          letterSpacing: "-0.02em",
          color: textColor,
          lineHeight: 1,
        }}
      >
        Athena<sup style={{ fontSize: "0.45em", verticalAlign: "super", marginLeft: "1px" }}>®</sup>
      </span>
    </div>
  );
}
