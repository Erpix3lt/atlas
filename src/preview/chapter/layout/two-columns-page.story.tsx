import { TwoColumns } from "../../../components/layout/two-columns";
import { LoremIpsum } from "../../lorem-ipsum";

export function TwoColumnsStory() {
  return (
    <TwoColumns>
      <LoremIpsum content={"extraLong"} />
    </TwoColumns>
  );
}
