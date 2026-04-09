interface AthenaLogoProps {
  variant?: "full" | "symbol";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
}

const SYMBOL_PATH_1 = "M15748 25367 c-21 -12 -44 -32 -52 -43 -8 -12 -505 -838 -1104 -1836 -600 -998 -1245 -2069 -1434 -2379 -190 -310 -425 -699 -523 -864 -98 -165 -578 -968 -1068 -1785 -799 -1333 -991 -1652 -1435 -2380 -190 -311 -441 -731 -575 -960 -65 -113 -158 -266 -207 -340 -48 -74 -117 -187 -155 -250 -37 -63 -105 -176 -150 -250 -45 -74 -189 -313 -320 -530 -297 -493 -895 -1482 -1255 -2075 -151 -247 -276 -463 -278 -478 -7 -43 21 -67 78 -67 54 0 52 -1 370 179 1072 608 1383 749 2705 1221 259 92 517 186 575 208 482 185 992 462 1470 800 198 140 312 233 431 352 165 164 94 57 882 1335 204 330 548 888 765 1240 474 767 578 938 954 1555 160 261 301 490 314 507 30 40 68 51 103 32 13 -8 43 -45 66 -84 23 -38 107 -180 187 -315 717 -1213 1120 -1891 1725 -2900 625 -1043 705 -1174 779 -1265 55 -67 211 -198 327 -275 186 -123 306 -158 1127 -326 1202 -246 2183 -538 3320 -990 233 -93 268 -104 293 -95 36 14 54 54 41 89 -10 25 -140 242 -1022 1702 -392 650 -996 1651 -1267 2100 -128 212 -472 783 -765 1270 -577 958 -1808 3009 -2227 3710 -545 912 -664 1112 -803 1345 -265 444 -862 1449 -925 1555 -228 388 -712 1201 -732 1231 -49 75 -144 99 -215 56z";
const SYMBOL_PATH_2 = "M14970 13443 c-171 -7 -557 -35 -730 -53 -354 -37 -360 -39 -360 -86 0 -34 26 -47 205 -99 837 -244 1677 -591 2428 -1002 1728 -944 3280 -2392 4431 -4132 283 -427 467 -744 787 -1355 101 -193 139 -246 204 -285 100 -59 -65 -55 2427 -59 l2298 -2 62 21 c90 30 142 64 220 143 69 69 70 71 65 115 -6 55 -50 139 -173 333 -483 758 -959 1423 -1358 1898 -634 753 -1345 1418 -2120 1983 -1287 937 -2875 1681 -4536 2124 -113 30 -230 61 -260 69 -30 8 -152 37 -270 64 -791 181 -1544 285 -2333 320 -204 9 -790 11 -987 3z";
const SYMBOL_PATH_3 = "M12970 11304 c-25 -2 -124 -8 -220 -14 -899 -55 -1947 -279 -2864 -612 -1486 -540 -2936 -1459 -4076 -2583 -338 -333 -526 -536 -785 -845 -264 -316 -307 -409 -255 -552 12 -35 34 -83 48 -108 39 -69 131 -179 166 -198 29 -16 192 -17 2326 -20 1605 -2 2324 0 2390 8 110 12 177 40 240 96 23 21 101 111 173 199 471 579 1026 1087 1618 1483 1428 955 3109 1338 4764 1087 1190 -181 2352 -692 3357 -1476 75 -59 147 -110 158 -114 32 -10 77 13 89 45 7 22 5 36 -11 67 -58 109 -334 492 -499 690 -392 471 -835 899 -1289 1245 -1113 850 -2438 1378 -3880 1547 -351 41 -546 52 -980 56 -234 1 -445 1 -470 -1z";

function AthenaSymbol({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 3176 3176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Athena symbol"
    >
      <g transform="translate(0,3176) scale(0.1,-0.1)" fill={color}>
        <path d={SYMBOL_PATH_1} />
        <path d={SYMBOL_PATH_2} />
        <path d={SYMBOL_PATH_3} />
      </g>
    </svg>
  );
}

export default function AthenaLogo({ variant = "full", size = "md", theme = "light" }: AthenaLogoProps) {
  const sizeMap = {
    xs: { symbol: 22, wordmark: 13, gap: 6  },
    sm: { symbol: 30, wordmark: 17, gap: 8  },
    md: { symbol: 38, wordmark: 21, gap: 10 },
    lg: { symbol: 50, wordmark: 27, gap: 13 },
    xl: { symbol: 68, wordmark: 36, gap: 18 },
  };

  const s = sizeMap[size];
  const symbolColor = theme === "dark" ? "#EEEEF0" : "#0D5C58";
  const textColor   = theme === "dark" ? "#EEEEF0" : "#0D5252";
  const dotColor    = theme === "dark" ? "#5BB5B0" : "#1B7A78";

  if (variant === "symbol") {
    return <AthenaSymbol color={symbolColor} size={s.symbol} />;
  }

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: s.gap }}>
      <AthenaSymbol color={symbolColor} size={s.symbol} />
      <span
        style={{
          fontFamily: "\'Sora\', sans-serif",
          fontWeight: 700,
          fontSize: s.wordmark,
          letterSpacing: "-0.025em",
          color: textColor,
          lineHeight: 1,
        }}
      >
        Athena
        <sup style={{ fontSize: s.wordmark * 0.4, color: dotColor, marginLeft: 1, verticalAlign: "super" }}>®</sup>
      </span>
    </div>
  );
}
