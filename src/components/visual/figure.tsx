// src/components/image-loader.tsx

import { useState } from "react";
import { images } from "../../assets/images";
import { FigureImage, increaseGlobalFigureCounter } from "./figure-image";

export type FigureProps = {
  id: string;
};

export function Figure({ id }: FigureProps) {
  const [figureNumber] = useState(() => increaseGlobalFigureCounter());

  const image = images.find((image) => image.id === id);

  if (!image) {
    console.error(`Image with id "${id}" not found.`);
    return <div>Image not found</div>;
  }

  const { src, alt, title, author } = image;

  return (
    <div className="mb-2 inline-block break-inside-avoid">
      <FigureImage src={src} alt={alt} />
      <div className="mt-2">
        <p className="reference-title font-bold">FIG {figureNumber}</p>
        <p className="reference ">
          {title}
          {author && <span> &copy; {author}</span>}
        </p>
      </div>
    </div>
  );
}
