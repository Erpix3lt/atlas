import { useState } from "react";
import { Footnote } from "../typography/footnote";
import {
  ImageReference,
  increaseGlobalFigureCounter,
} from "../visual/figure-image";

function StyledGalleryImage({ src, alt }: { src: string; alt: string }) {
  return <img className="max-w-[101px] h-auto" src={src} alt={alt} />;
}

export type GalleryProps = {
  images: ImageReference[];
  ids: string[];
};

export function Gallery({ ids, images }: GalleryProps) {
  const hasBeenRendered: string[] = [];

  if (!ids || ids.length === 0 || ids.length > 16) {
    return (
      <div className="text-center text-red-500">
        Wrong injection of gallery items
      </div>
    );
  }

  function renderRow(ids: string[], startIndex: number) {
    const rowImages: ImageReference[] = [];
    ids.map((id) => {
      const image = images.find((image) => image.id === id);
      if (!image) {
        console.error(`Image with id "${id}" not found.`);
        return <div>Image not found</div>;
      }
      const rowImageReference: ImageReference = image;

      rowImages.push(rowImageReference);
    });

    return (
      <div key={`row-${startIndex}`} className="mb-4">
        <div className="flex flex-row">
          {rowImages.map((image, index) => (
            <StyledGalleryImage
              key={image.id + index}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
        <div className="flex flex-row gap-x-[101px]">
          {rowImages.map((image) => {
            if (hasBeenRendered.includes(image.id)) {
              return <p className="footnote-ghost">[-]</p>;
            }
            hasBeenRendered.push(image.id);
            const [figureNumber] = useState(() =>
              increaseGlobalFigureCounter()
            );
            return (
              <Footnote key={image.id + figureNumber}>
                <p className="reference">
                  <span className="reference-title font-bold">
                    FIG {figureNumber}
                  </span>
                  <span> {image.title}</span>
                  {image.author && <span> &copy; {image.author}</span>}
                </p>
              </Footnote>
            );
          })}
        </div>
      </div>
    );
  }

  const rows = [];
  let i = 0;
  let takeFive = false; // start with 4

  while (i < ids.length) {
    const count = takeFive ? 5 : 4;
    const rowItems = ids.slice(i, i + count);
    rows.push(renderRow(rowItems, i));
    i += count;
    takeFive = !takeFive; // alternate between 4 and 5
  }

  return <div className="flex flex-col flex-wrap">{rows}</div>;
}
