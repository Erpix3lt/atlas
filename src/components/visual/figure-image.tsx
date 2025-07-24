// src/components/image-loader.tsx

// Simple global figure counter
let globalFigureCounter = 0;

export function increaseGlobalFigureCounter() {
  globalFigureCounter++;
  return globalFigureCounter;
}

export function resetGlobalFigureCounter() {
  globalFigureCounter = 1;
}

export type ImageReference = {
  id: string;
  src: string;
  alt: string;
  title: string;
  source?: string;
  author?: string;
  year?: string;
  url?: string;
  copyrightHolder?: string;
  page: number;
  figure: number;
};

export type FigureImageProps = Pick<ImageReference, "src" | "alt">;

export function FigureImage({ src, alt }: FigureImageProps) {
  return <img src={src} alt={alt} style={{ display: "block" }} />;
}
