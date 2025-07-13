import React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & {
  colorScheme?: "light" | "dark";
};

const LogoApplicationlubmobile: React.FC<LogoProps> = ({
  className = "w-full max-w-xs h-auto",
  "aria-label": ariaLabel = "Applicationlubmobile Logo",
  colorScheme = "dark",
  ...props
}) => {
  const fillColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";
  const strokeColor = colorScheme === "dark" ? "#1a1a1a" : "#DDDDDD";
  const shadowColor =
    colorScheme === "dark" ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.1)";

  return (
    <svg
      className={className}
      viewBox="0 0 720 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
      aria-labelledby="logo-title logo-desc"
      preserveAspectRatio="xMinYMin meet"
      focusable="false"
      {...props}
      style={{
        overflow: "visible",
        display: "block",
        filter: `drop-shadow(2px 2px 2px ${shadowColor})`,
        animation: "fadein 0.8s ease-out forwards",
        transition: "filter 0.3s ease",
      }}
    >
      <title id="logo-title">Applicationlubmobile Logo</title>
      <desc id="logo-desc">
        โลโก้ข้อความ JP - ViSOUL & DOC'S ตัวใหญ่ ตัวหนา คมชัด สีตามธีม พร้อมเงาละเอียด
      </desc>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fontFamily="'Poppins', 'Segoe UI', 'Helvetica Neue', sans-serif"
        fontWeight={700} // ลดความหนาจาก 900 เป็น 700 ให้ไม่อ้วนแต่ยังคม
        fontSize={52} // เพิ่มขนาดให้เด่นขึ้นอีก
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={0.9} // ลดความหนาขอบให้คม ไม่อ้วน
        strokeLinejoin="miter" // ให้ขอบมุมคม
        strokeLinecap="butt"
        paintOrder="stroke"
        dominantBaseline="middle"
        letterSpacing={3.5} // เพิ่มระยะห่างตัวอักษรให้ดูโปร่งและหรู
        textRendering="geometricPrecision"
        shapeRendering="geometricPrecision"
        style={{
          userSelect: "none",
          textTransform: "uppercase",
          cursor: "default",
          whiteSpace: "nowrap",
          transition: "fill 0.3s ease, stroke 0.3s ease",
        }}
      >
        JP - ViSOUL & DOC'S
      </text>

      {/* Optional subtle animated underline */}
      <line
        x1="20"
        y1="85"
        x2="700"
        y2="85"
        stroke={fillColor}
        strokeWidth={2}
        strokeLinecap="round"
        style={{ opacity: 0.25 }}
      >
        <animate
          attributeName="x2"
          values="20;700;20"
          dur="4s"
          repeatCount="indefinite"
        />
      </line>

      <style>
        {`
          @keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </svg>
  );
};

export default LogoApplicationlubmobile;