import { ThreeColumnsRight } from "../../../components/layout/three-columns-right";
import { LoremIpsum } from "../../lorem-ipsum";

export function ThreeColumnsRightPage() {
  return (
    <ThreeColumnsRight>
      <LoremIpsum content={"extraLong"} />
    </ThreeColumnsRight>
  );
}
