import { PageBreak } from "./components/layout/page-break";
import { ChapterName } from "./preview/chapter-name";
import { ThreeColumnsLeftStory } from "./preview/chapter/layout/three-columns-left.story";
import { ThreeColumnsRightStory } from "./preview/chapter/layout/three-columns-right.story";
import { TwoColumnsStory } from "./preview/chapter/layout/two-columns-page.story";
import { AtlasStory } from "./preview/chapter/pages/atlas.story";
import { GalleryStory } from "./preview/chapter/pages/gallery.story";
import { ImageReferencesStory } from "./preview/chapter/pages/image-references.story";
import { ReferencesStory } from "./preview/chapter/pages/references.story";

export function Book() {
  return (
    <>
      {/* LAYOUT */}
      <div>
        <ChapterName name="two columns" id="two-columns" />
        <TwoColumnsStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="three columns left" id="three-columns-left" />
        <ThreeColumnsLeftStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="three columns right" id="three-columns-right" />
        <ThreeColumnsRightStory />
      </div>

      <PageBreak />

      {/* PAGES */}
      <div>
        <ChapterName name="atlas" id="atlas" />
        <AtlasStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="gallery" id="gallery" />
        <GalleryStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="references" id="references" />
        <ReferencesStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="image references" id="image-references" />
        <ImageReferencesStory />
      </div>
      <PageBreak />
    </>
  );
}
