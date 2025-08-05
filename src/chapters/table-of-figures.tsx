import { images } from "../assets/images";
import { ImageReferences } from "../components/pages/image-references";

export function TableOfFigures() {
  return (
    <>
      <h2 className="hidden">Table of figures</h2>
      <ImageReferences imageReferences={images}></ImageReferences>
    </>
  );
}
