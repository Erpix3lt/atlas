import { TwoColumns } from "../../../components/layout/two-columns";
import { LoremIpsum } from "../../lorem-ipsum";

export function TwoColumnsPage() {
  return (
    <TwoColumns>
      <LoremIpsum content={"extraLong"} />
    </TwoColumns>
  );
}
