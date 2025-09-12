import { Br } from "../../../components/typography/br";
import { HighlightedPink } from "../../../components/typography/highlighted-pink";
import { getLoremIpsum } from "../../lorem-ipsum";

export function HighlightedPinkStory() {
  return (
    <p>
      <HighlightedPink>{getLoremIpsum("short")}</HighlightedPink> <Br />
      <HighlightedPink>{getLoremIpsum("long")}</HighlightedPink>{" "}
    </p>
  );
}
