import { ImageResponse } from "next/og";

export const alt = "カメレオン吹奏楽団 — Chameleon Wind Orchestra";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #1F1A14 0%, #2A2118 60%, #3A2D1E 100%)",
          color: "#F5EFE6",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#EA5514",
            marginBottom: 40,
          }}
        >
          CHAMELEON WIND ORCHESTRA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 600,
            letterSpacing: 2,
            color: "#F5EFE6",
            marginBottom: 32,
          }}
        >
          カメレオン吹奏楽団
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            lineHeight: 1.6,
            color: "rgba(245, 239, 230, 0.75)",
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          大阪・池田を拠点に活動するアマチュア吹奏楽団
        </div>
      </div>
    ),
    { ...size },
  );
}
