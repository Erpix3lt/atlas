import { Footnote } from "../../../components/typography/footnote";
import { getLoremIpsum, LoremIpsum } from "../../lorem-ipsum";

export function FootnoteStory() {
  return (
    <>
      <LoremIpsum content="normal" />
      <Footnote>{getLoremIpsum("short")}</Footnote>
      <LoremIpsum content="long" />
      <Footnote>{getLoremIpsum("long")}</Footnote>.
    </>
  );
}
