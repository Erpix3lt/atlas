import { Keyword } from "../../../components/typography/keyword";
import { getLoremIpsum } from "../../lorem-ipsum";

export function KeywordStory() {
  return <Keyword>{getLoremIpsum("short")}</Keyword>;
}
