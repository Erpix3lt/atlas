import { PageBreak } from "./components/layout/page-break";
import { ChapterName } from "./preview/chapter-name";
import { ThreeColumnsLeftStory } from "./preview/chapter/layout/three-columns-left.story";
import { ThreeColumnsRightStory } from "./preview/chapter/layout/three-columns-right.story";
import { TwoColumnsStory } from "./preview/chapter/layout/two-columns-page.story";
import { AtlasStory } from "./preview/chapter/pages/atlas.story";
import { GalleryStory } from "./preview/chapter/pages/gallery.story";
import { ImageReferencesStory } from "./preview/chapter/pages/image-references.story";
import { ReferencesStory } from "./preview/chapter/pages/references.story";

// Typography components
import { BrStory } from "./preview/chapter/typography/br.story";
import { FootnoteStory } from "./preview/chapter/typography/footnote.story";
import { HighlightedBlackStory } from "./preview/chapter/typography/highlighted-black.story";
import { HighlightedPinkStory } from "./preview/chapter/typography/highlighted-pink.story";
import { KeywordStory } from "./preview/chapter/typography/keyword.story";
import { ListStory } from "./preview/chapter/typography/list.story";
import { QuoteStory } from "./preview/chapter/typography/quote.story";
import { RepititionStory } from "./preview/chapter/typography/repitition.story";
import { VerticalTextStory } from "./preview/chapter/typography/vertical-text.story";

// Visual components
import { ChartStory } from "./preview/chapter/visual/chart.story";
import { FigureImageStory } from "./preview/chapter/visual/figure-image.story";
import { FigureStory } from "./preview/chapter/visual/figure.story";

// Other components
import { DefinitionStory } from "./preview/chapter/components/definition.story";
import { DottedLineStory } from "./preview/chapter/components/dotted-line.story";
import { PageNumerationStory } from "./preview/chapter/components/page-numeration.story";

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

      {/* TYPOGRAPHY */}
      <div>
        <ChapterName name="highlighted black" id="highlighted-black" />
        <HighlightedBlackStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="highlighted pink" id="highlighted-pink" />
        <HighlightedPinkStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="keyword" id="keyword" />
        <KeywordStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="quote" id="quote" />
        <QuoteStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="footnote" id="footnote" />
        <FootnoteStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="list" id="list" />
        <ListStory />
      </div>
      <PageBreak />

      <div>
        <ChapterName name="repetition" id="repetition" />
        <RepititionStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="vertical text" id="vertical-text" />
        <VerticalTextStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="line break" id="br" />
        <BrStory />
      </div>

      <PageBreak />

      {/* VISUAL */}
      <div>
        <ChapterName name="figure" id="figure" />
        <FigureStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="figure image" id="figure-image" />
        <FigureImageStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="chart" id="chart" />
        <ChartStory />
      </div>

      <PageBreak />

      {/* COMPONENTS */}
      <div>
        <ChapterName name="definition" id="definition" />
        <DefinitionStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="dotted line" id="dotted-line" />
        <DottedLineStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="page numeration" id="page-numeration" />
        <PageNumerationStory />
      </div>
    </>
  );
}
