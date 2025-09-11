import { PageBreak } from "./components/layout/page-break";
import { Footnote } from "./components/typography/footnote";
import { HighlightedBlack } from "./components/typography/highlighted-black";
import { HighlightedPink } from "./components/typography/highlighted-pink";
import { Keyword } from "./components/typography/keyword";
import { List } from "./components/typography/list";
import { ListItem } from "./components/typography/list-item";
import { Quote } from "./components/typography/quote";
import { Repitition } from "./components/typography/repitition";
import { VerticalText } from "./components/typography/vertical-text";
import { ChapterName } from "./preview/chapter-name";
import { ThreeColumnsLeftPage } from "./preview/chapter/layout/three-columns-left-page";
import { ThreeColumnsRightPage } from "./preview/chapter/layout/three-columns-right-page";
import { TwoColumnsPage } from "./preview/chapter/layout/two-columns-page";

export function Book() {
  return (
    <>
      <div>
        <ChapterName name="two columns" id="two-columns" />
        <TwoColumnsPage />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="three columns left" id="three-columns-left" />
        <ThreeColumnsLeftPage />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="three columns right" id="three-columns-right" />
        <ThreeColumnsRightPage />
      </div>

      <PageBreak />

      <div id="typography">
        <div id="title">
          <h2 style={{ display: "none" }}>Typography</h2>
          <h1>Title</h1>
        </div>
        <div id="headings">
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
        </div>
        <div id="paragraph">
          <p>
            This is a paragraph. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <a href="#">This is a link</a>
        </div>
      </div>
      <PageBreak />

      <div id="footnote">
        <h2 style={{ display: "none" }}>Footnote</h2>
        <Footnote>
          This is a footnote. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Footnote>
      </div>
      <PageBreak />

      <div id="highlighted-black">
        <h2 style={{ display: "none" }}>HighlightedBlack</h2>
        <HighlightedBlack>
          This is highlighted black. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </HighlightedBlack>
      </div>
      <PageBreak />

      <div id="highlighted-pink">
        <h2 style={{ display: "none" }}>HighlightedPink</h2>
        <HighlightedPink>
          This is highlighted pink. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </HighlightedPink>
      </div>
      <PageBreak />

      <div id="keyword">
        <h2 style={{ display: "none" }}>Keyword</h2>
        <Keyword> This is a keyword </Keyword>
      </div>
      <PageBreak />

      <div id="quote">
        <h2 style={{ display: "none" }}>Quote</h2>
        <Quote>
          This is a quote. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Quote>
      </div>
      <PageBreak />

      <div id="repitition">
        <h2 style={{ display: "none" }}>Repitition</h2>
        <Repitition>
          This is a repitition. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </Repitition>
      </div>
      <PageBreak />

      <div id="vertical-text">
        <h2 style={{ display: "none" }}>VerticalText</h2>
        <VerticalText text="Vertical Text" />
      </div>
      <PageBreak />

      <div id="list">
        <h2 style={{ display: "none" }}>List</h2>
        <List>
          <ListItem index={1}>
            <p> List Item 1</p>
          </ListItem>
          <ListItem index={2}>
            <p> List Item 2</p>
          </ListItem>
          <ListItem index={3}>
            <p>List Item 3</p>
          </ListItem>
        </List>
      </div>
    </>
  );
}
