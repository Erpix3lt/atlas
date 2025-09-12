import { ThreeColumnsLeft } from "../../../components/layout/three-columns-left";
import { LoremIpsum } from "../../lorem-ipsum";

export function ThreeColumnsLeftStory() {
  return (
    <ThreeColumnsLeft>
      <LoremIpsum content={"extraLong"} />
    </ThreeColumnsLeft>
  );
}
