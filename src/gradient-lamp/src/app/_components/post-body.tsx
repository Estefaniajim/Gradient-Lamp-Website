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

  let imageIndex = 0;

  const imageRegex = /INLINE_IMAGES_HERE\("([^"]*)"\)/g;

  const renderWithInlineImages = (html: string) => {
    const output: any[] = [];
    let lastIndex = 0;
    let match;

    while ((match = imageRegex.exec(html)) !== null) {
      const fullMatch = match[0];
      const altText = match[1];
      const index = match.index;

      const before = html.slice(lastIndex, index);
      if (before) {
        output.push(
          <div
            key={`html-${index}-${Math.random()}`}
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: before }}
          />
        );
      }

      if (inlineImages && inlineImages[imageIndex]) {
        output.push(
          <InlineImage
            key={`img-${imageIndex}`}
            src={inlineImages[imageIndex]}
            alt={altText || `Inline image ${imageIndex + 1}`}
          />
        );
        imageIndex++;
      }

      lastIndex = index + fullMatch.length;
    }

    const after = html.slice(lastIndex);
    if (after) {
      output.push(
        <div
          key={`after-${Math.random()}`}
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: after }}
        />
      );
    }

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