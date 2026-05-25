import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "カメレオン吹奏楽団 — Chameleon Wind Orchestra";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadLogoDataUri(): Promise<string | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "logo_top.svg",
    );
    const buf = await readFile(filePath);
    return `data:image/svg+xml;base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const logoSrc = await loadLogoDataUri();

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
          padding: "72px",
          gap: 36,
        }}
      >
        {logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoSrc}
            width={460}
            height={171}
            alt=""
            style={{ marginBottom: 8 }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: 2,
              color: "#F5EFE6",
            }}
          >
            カメレオン吹奏楽団
          </div>
        )}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#EA5514",
          }}
        >
          CHAMELEON WIND ORCHESTRA
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
