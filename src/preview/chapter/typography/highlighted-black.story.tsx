import { Br } from "../../../components/typography/br";
import { HighlightedBlack } from "../../../components/typography/highlighted-black";
import { getLoremIpsum } from "../../lorem-ipsum";

export function HighlightedBlackStory() {
  return (
    <p>
      <HighlightedBlack>{getLoremIpsum("short")}</HighlightedBlack> <Br />
      <HighlightedBlack>{getLoremIpsum("long")}</HighlightedBlack>{" "}
    </p>
  );
}
