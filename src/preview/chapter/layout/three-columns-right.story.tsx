import { ThreeColumnsRight } from "../../../components/layout/three-columns-right";
import { LoremIpsum } from "../../lorem-ipsum";

export function ThreeColumnsRightStory() {
  return (
    <ThreeColumnsRight>
      <LoremIpsum content={"extraLong"} />
    </ThreeColumnsRight>
  );
}
