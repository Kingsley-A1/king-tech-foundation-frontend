import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0b1f3a 0%, #071426 50%, #0b1f3a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Outer glow ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "760px",
          height: "760px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(10,132,255,0.22) 0%, transparent 65%)",
        }}
      />

      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "3px",
          background:
            "linear-gradient(to right, transparent, #0a84ff 30%, #0a84ff 70%, transparent)",
        }}
      />

      {/* KTF shield / logo mark — large, centered */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0px",
        }}
      >
        {/* Glow behind the mark */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(10,132,255,0.35) 0%, transparent 70%)",
          }}
        />

        {/* The brand mark square */}
        <div
          style={{
            position: "relative",
            width: "260px",
            height: "260px",
            background: "linear-gradient(145deg, #0a84ff 0%, #0057d9 100%)",
            borderRadius: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 0 0 6px rgba(10,132,255,0.18), 0 0 0 18px rgba(10,132,255,0.08), 0 40px 80px rgba(0,0,0,0.55)",
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: "88px",
            fontWeight: 900,
            color: "white",
            letterSpacing: "-4px",
          }}
        >
          KTF
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "20%",
          right: "20%",
          height: "3px",
          background:
            "linear-gradient(to right, transparent, rgba(10,132,255,0.4) 30%, rgba(10,132,255,0.4) 70%, transparent)",
        }}
      />
    </div>,
    { ...size },
  );
}

