import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  aspect?: number; 
};

const CoverImage = ({ title, src, slug, aspect = 1300 / 630 }: Props) => {
  const wrapperStyle = {
    position: "relative" as const,
    width: "100%",
    paddingBottom: `${100 / aspect}%`, 
  };

  const image = (
    <div style={wrapperStyle} className="relative shadow-sm">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        fill
        sizes="(max-width: 768px) 100vw, 700px"
        className={cn("object-cover rounded-lg", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
      />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;