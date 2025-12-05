"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  width?: number;          // dynamic width
  height?: number;         // dynamic height
  aspectRatio?: number;    // or dynamic aspect ratio
  radius?: number;         // border radius
  quality?: number;        // image quality
  fit?: "cover" | "contain" | "fill" | "scale-down"; // object-fit
  showButtons?: boolean;   // hide prev/next
};

export default function Carousel({
  images,
  width = 500,
  height = 500,
  aspectRatio,
  radius = 12,
  quality = 90,
  fit = "cover",
  showButtons = true,
}: Props) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  // If aspect ratio is provided, override width/height
  const resolvedHeight = aspectRatio ? width / aspectRatio : height;

  return (
    <div style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}>
      <div
        style={{
          position: "relative",
          width: `${width}px`,
          height: `${resolvedHeight}px`,
          margin: "0 auto",
        }}
      >
        <Image
          src={images[index]}
          alt={`carousel image ${index + 1}`}
          fill
          quality={quality}
          sizes={`${width}px`}
          style={{
            objectFit: fit,
            borderRadius: `${radius}px`,
          }}
        />
      </div>

      {showButtons && (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
            justifyContent: "center",
          }}
        >
          <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded">
            Prev
          </button>
          <button onClick={next} className="px-4 py-2 bg-gray-200 rounded">
            Next
          </button>
        </div>
      )}
    </div>
  );
}
