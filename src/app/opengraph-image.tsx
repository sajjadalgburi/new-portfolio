import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";

export const alt = `${DATA.name}, ${DATA.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#111111",
        color: "#ffffff",
        display: "flex",
        height: "100%",
        padding: "80px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ color: "#93c5fd", display: "flex", fontSize: 32 }}>
          {DATA.location}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
          {DATA.name}
        </div>
        <div style={{ color: "#d1d5db", display: "flex", fontSize: 38 }}>
          {DATA.role}
        </div>
        <div style={{ color: "#9ca3af", display: "flex", fontSize: 28 }}>
          Next.js · React · TypeScript · Python
        </div>
      </div>
    </div>,
    size,
  );
}
