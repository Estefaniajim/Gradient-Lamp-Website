"use client";
import { useState } from "react";
import Image from "next/image";

export default function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="w-full flex flex-col items-center py-6">
      <div className="relative w-80 h-80">
        <Image
          src={images[index]}
          alt="Lamp image"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="flex gap-6 mt-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}