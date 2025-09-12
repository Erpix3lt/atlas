import { Gallery } from "../../../components/pages/gallery";
import { images } from "./images";

export function GalleryStory() {
  return (
    <Gallery
      ids={["cybersyn", "GoogleMapsHack-1", "GoogleMapsHack-2"]}
      images={images}
    />
  );
}
