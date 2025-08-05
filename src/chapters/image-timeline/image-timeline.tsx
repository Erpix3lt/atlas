import { Gallery } from "../../components/pages/gallery";

export function ImageTimeline() {
  return (
    <>
      <h2 className="col-span-full hidden">Timeline</h2>
      <Gallery
        ids={[
          "computerKidnappingInstitute",
          "computerKidnappingWeaverHall",
          "computerKidnappingExplosives",
          "supercomputer",
          "aiCarProtest",
          "writerStrike",
          "writerStrike2",
        ]}
      ></Gallery>
    </>
  );
}
