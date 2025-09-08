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
          <p>
            {" "}
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
        <Br />
        <PageBreak />
        <ThreeColumnsRight>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </ThreeColumnsRight>
        <Br />
        <PageBreak />
      </div>
      <div>
        <Footnote> This is a footnote</Footnote> <Br />
        <HighlightedBlack> This is highlighted black </HighlightedBlack> <Br />
        <HighlightedPink> This is highlighted pink </HighlightedPink> <Br />
        <Keyword> This is a keyword </Keyword> <Br />
        <Quote> This is a quote </Quote> <Br />
        <Repitition> This is a repitition </Repitition> <Br />
        <PageBreak />
        <VerticalText text="Vertical Text" />
        <PageBreak />
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
