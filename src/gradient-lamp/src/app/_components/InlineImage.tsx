"use client";

import Image from "next/image";

export default function InlineImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        style={{ borderRadius: "12px", objectFit: "cover" }}
      />
      <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.3rem" }}>
        {alt}
      </p>
    </div>
  );
}
