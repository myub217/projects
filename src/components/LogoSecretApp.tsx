import React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & {
  colorScheme?: "blue" | "whiteGray";
};

const LogoApplicationlubmobile: React.FC<LogoProps> = ({
  className = "w-full max-w-xs h-auto", // ปรับให้ขยายเต็มความกว้าง container สูงอัตโนมัติ max-width 320px (ปรับได้)
  "aria-label": ariaLabel = "Applicationlubmobile Logo",
  colorScheme = "whiteGray",
  ...props
}) => {
  const gradients = {
    blue: {
      stops: [
        { offset: "0%", stopColor: "#1A237E" },
        { offset: "50%", stopColor: "#3949AB" },
        { offset: "100%", stopColor: "#0D47A1" },
      ],
      stroke: "#0D1B5B",
      shadowColor: "#000000",
    },
    whiteGray: {
      stops: [
        { offset: "0%", stopColor: "#FFFFFF" },
        { offset: "50%", stopColor: "#CCCCCC" },
        { offset: "100%", stopColor: "#666666" },
      ],
      stroke: "#444444",
      shadowColor: "#222222",
    },
  };

  const grad = gradients[colorScheme];

  return (
    <svg
      className={className}
      viewBox="20 10 450 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="xMinYMin meet" // ชิดซ้ายบนจริงๆ
      {...props}
      style={{ overflow: "visible", display: "block" }}
      // display:block ช่วยให้ svg ไม่เกิดช่องว่างใต้ภาพเวลาใช้ inline
    >
      <title>Applicationlubmobile Logo</title>
      <desc>
        โลโก้ Applicationlubmobile ตัวหนังสือแบบโมเดิร์น ฟอนต์ Poppins มี
        เงาวาวและกราเดียนสีธีม {colorScheme}
      </desc>

      <defs>
        <linearGradient id="textGrad" x1="0" y1="0" x2="0" y2="1">
          {grad.stops.map(({ offset, stopColor }) => (
            <stop key={offset} offset={offset} stopColor={stopColor} />
          ))}
        </linearGradient>

        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="1"
            dy="1"
            stdDeviation="1"
            floodColor={grad.shadowColor}
            floodOpacity="0.15"
          />
        </filter>

        <filter id="specularLighting" x="0" y="0" width="120%" height="120%">
          <feSpecularLighting
            result="specOut"
            specularExponent="15"
            specularConstant="0.6"
            lightingColor="#FFFFFF"
          >
            <fePointLight x="50" y="30" z="40" />
          </feSpecularLighting>
          <feComposite in="specOut" in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <text
        x="225"
        y="45"
        textAnchor="middle"
        fontFamily="'Poppins', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="32"
        fill="url(#textGrad)"
        stroke={grad.stroke}
        strokeWidth={1}
        strokeLinejoin="round"
        strokeLinecap="round"
        paintOrder="stroke"
        dominantBaseline="middle"
        letterSpacing={2}
        filter="url(#dropShadow) url(#specularLighting)"
        textRendering="geometricPrecision"
        shapeRendering="geometricPrecision"
        style={{
          userSelect: "none",
          textTransform: "uppercase",
          cursor: "default",
          whiteSpace: "nowrap",
        }}
      >
        APPLICATIONLUBMOBILE
      </text>
    </svg>
  );
};

export default LogoApplicationlubmobile;