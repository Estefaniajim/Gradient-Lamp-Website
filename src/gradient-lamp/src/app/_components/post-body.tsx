"use client";

import markdownStyles from "./markdown-styles.module.css";
import Carousel from "./Carousel";

type Props = {
  content: string;
  carouselImages: string[] | null;
};

export function PostBody({ content, carouselImages }: Props) {

  const marker = "CAROUSEL_HERE";
  const parts = content.split(marker);

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: parts[0] }}
      />

      {carouselImages && parts.length > 1 && (
        <Carousel images={carouselImages} />
      )}

      {parts[1] && (
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: parts[1] }}
        />
      )}
    </div>
  );
}
