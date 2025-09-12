import { TwoColumns } from "../../../components/layout/two-columns";
import { Repitition } from "../../../components/typography/repitition";
import { getLoremIpsum } from "../../lorem-ipsum";

export function RepititionStory() {
  return (
    <>
      <TwoColumns>
        <Repitition>{getLoremIpsum("short")}</Repitition>
        <Repitition fullWidth>{getLoremIpsum("long")}</Repitition>
      </TwoColumns>
    </>
  );
}
