import { PageBreak } from "./components/layout/page-break";
import { ThreeColumnsLeft } from "./components/layout/three-columns-left";
import { ThreeColumnsRight } from "./components/layout/three-columns-right";
import { TwoColumns } from "./components/layout/two-columns";
import { Br } from "./components/typography/br";
import { Footnote } from "./components/typography/footnote";
import { HighlightedBlack } from "./components/typography/highlighted-black";
import { HighlightedPink } from "./components/typography/highlighted-pink";
import { Keyword } from "./components/typography/keyword";
import { List } from "./components/typography/list";
import { ListItem } from "./components/typography/list-item";
import { Quote } from "./components/typography/quote";
import { Repitition } from "./components/typography/repitition";
import { VerticalText } from "./components/typography/vertical-text";

export function Book() {
  return (
    <>
      <div>
        <TwoColumns>
          <h2 style={{ display: "none" }}>Two Columns</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </TwoColumns>
        <Br />
        <PageBreak />
        <ThreeColumnsLeft>
          <h2 style={{ display: "none" }}>Three Columns Left</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </ThreeColumnsLeft>
        <PageBreak />
        <ThreeColumnsRight>
          <h2 style={{ display: "none" }}>Three Columns Right</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </ThreeColumnsRight>
        <PageBreak />
      </div>
      <div>
        <div>
          <h2 style={{ display: "none" }}>Typography</h2>
          <h1>Title</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <p>
            This is a paragraph. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <a href="#">This is a link</a>
        </div>
        <PageBreak />
        <h2 style={{ display: "none" }}>Footnote</h2>
        <Footnote>
          This is a footnote. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Footnote>
        <PageBreak />
        <h2 style={{ display: "none" }}>HighlightedBlack</h2>
        <HighlightedBlack>
          This is highlighted black. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </HighlightedBlack>
        <PageBreak />
        <h2 style={{ display: "none" }}>HighlightedPink</h2>
        <HighlightedPink>
          This is highlighted pink. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </HighlightedPink>
        <PageBreak />
        <h2 style={{ display: "none" }}>Keyword</h2>
        <Keyword> This is a keyword </Keyword>
        <PageBreak />
        <h2 style={{ display: "none" }}>Quote</h2>
        <Quote>
          This is a quote. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Quote>
        <PageBreak />
        <h2 style={{ display: "none" }}>Repitition</h2>
        <Repitition>
          This is a repitition. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </Repitition>
        <PageBreak />
        <h2 style={{ display: "none" }}>VerticalText</h2>
        <VerticalText text="Vertical Text" />
        <PageBreak />
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
