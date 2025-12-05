"use client";

import { useState } from "react";
import Image from "next/image";

export default function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}>
      <div
        style={{
          position: "relative",
          width: "500px",
          height: "500px",
          margin: "0 auto",
        }}
      >
        <Image
          src={images[index]}
          alt="carousel image"
          fill
          style={{ objectFit: "cover", borderRadius: "12px" }}
        />
      </div>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", justifyContent: "center" }}>
        <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded">
          Prev
        </button>
        <button onClick={next} className="px-4 py-2 bg-gray-200 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
