import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Engram Ventures — Engineering that holds.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#1C2B3A",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "#C96A3A",
            }}
          />
          <div
            style={{
              color: "#F5F1EB",
              fontSize: "24px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Engram Ventures
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#F5F1EB",
              fontSize: "120px",
              lineHeight: 1.0,
              fontWeight: 300,
              letterSpacing: "-0.025em",
            }}
          >
            <div>Engineering</div>
            <div>that holds.</div>
          </div>
          <div
            style={{
              color: "#9CA3AF",
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: "900px",
            }}
          >
            Production-grade AI architecture · Technical due diligence · DevSecOps
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#6B7A8D",
            fontSize: "22px",
            letterSpacing: "0.15em",
          }}
        >
          engram.ventures
        </div>
      </div>
    ),
    { ...size }
  );
}
