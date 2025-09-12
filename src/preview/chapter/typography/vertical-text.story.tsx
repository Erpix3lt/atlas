import { VerticalText } from "../../../components/typography/vertical-text";
import { getLoremIpsum } from "../../lorem-ipsum";

export function VerticalTextStory() {
  return <VerticalText text={getLoremIpsum("short")} />;
}
