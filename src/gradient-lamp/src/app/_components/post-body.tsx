"use client";

import markdownStyles from "./markdown-styles.module.css";
import Carousel from "./Carousel";
import InlineImage from "./InlineImage";

type Props = {
  content: string;
  carouselImages: string[] | null;
  inlineImages: string[] | null;
};

export function PostBody({ content, carouselImages, inlineImages }: Props) {
  const CAROUSEL_MARKER = "CAROUSEL_HERE";
  const IMAGE_MARKER = "INLINE_IMAGES_HERE";

  let imageIndex = 0;

  const renderWithInlineImages = (html: string) => {
    const parts = html.split(IMAGE_MARKER);
    const output: any[] = [];

    parts.forEach((part, idx) => {
      output.push(
        <div
          key={`html-${idx}-${Math.random()}`}
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: part }}
        />
      );

      if (idx < parts.length - 1 && inlineImages && inlineImages[imageIndex]) {
        output.push(
          <InlineImage
            key={`img-${imageIndex}`}
            src={inlineImages[imageIndex]}
            alt={`Inline image ${imageIndex + 1}`}
          />
        );
        imageIndex++;
      }
    });

    return output;
  };

  const carouselParts = content.split(CAROUSEL_MARKER);

  return (
    <div className="max-w-2xl mx-auto">

      {renderWithInlineImages(carouselParts[0])}

      {carouselImages && carouselParts.length > 1 && (
        <Carousel images={carouselImages} />
      )}

      {carouselParts[1] && renderWithInlineImages(carouselParts[1])}
    </div>
  );
}
