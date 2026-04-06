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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0b1f3a 0%, #071426 50%, #0b1f3a 100%)",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue radial glow */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(10,132,255,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "15%",
          right: "15%",
          height: "3px",
          background:
            "linear-gradient(to right, transparent, #0a84ff 30%, #0a84ff 70%, transparent)",
        }}
      />

      {/* Brand mark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "48px",
        }}
      >
        {/* KTF icon mark */}
        <div
          style={{
            width: 80,
            height: 80,
            background: "linear-gradient(135deg, #0a84ff 0%, #0057d9 100%)",
            borderRadius: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: 900,
            color: "white",
            letterSpacing: "-1px",
            boxShadow: "0 8px 32px rgba(10,132,255,0.4)",
          }}
        >
          KTF
        </div>

        {/* Brand name */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span
            style={{
              color: "#0a84ff",
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "8px",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            KING TECH
          </span>
          <span
            style={{
              color: "#fdfdfd",
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "8px",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            FOUNDATION
          </span>
        </div>
      </div>

      {/* Main headline */}
      <h1
        style={{
          fontSize: "68px",
          fontWeight: 800,
          color: "#fdfdfd",
          textAlign: "center",
          lineHeight: 1.1,
          margin: 0,
          marginBottom: "20px",
          letterSpacing: "-1px",
        }}
      >
        For Honour and For Excellence
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "22px",
          color: "#8a94a3",
          textAlign: "center",
          margin: 0,
          maxWidth: "680px",
          lineHeight: 1.4,
        }}
      >
        Engineering Solutions for This, and The Next Generation
      </p>

      {/* Divider */}
      <div
        style={{
          marginTop: "40px",
          width: "60px",
          height: "3px",
          background: "#0a84ff",
          borderRadius: "99px",
        }}
      />

      {/* Bottom domain */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            color: "#49515c",
            fontSize: "14px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          kingtechfoundation.com
        </span>
      </div>
    </div>,
    { ...size },
  );
}
