import { ImageReference } from "../visual/figure-image";

export type ImageReferencesProps = {
  imageReferences: ImageReference[];
};

export function ImageReferences({ imageReferences }: ImageReferencesProps) {
  const sortedImages: ImageReference[] = [...imageReferences].sort(
    (a, b) => a.figure - b.figure
  );

  return (
    <div className="flex flex-col gap-2 max-w-8/12">
      {sortedImages.map((img) => (
        <div
          key={img.id}
          className="pl-2 text-justify [text-indent:-0.5rem] break-inside-avoid"
        >
          <p>
            FIG {img.figure} P. {img.page}, {img.author} ({img.year}) <br></br>
            <span>
              {img.url && (
                <>
                  <a href={img.url}>{img.url}</a>
                </>
              )}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
