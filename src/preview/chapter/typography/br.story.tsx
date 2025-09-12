import { Br } from "../../../components/typography/br";
import { LoremIpsum } from "../../lorem-ipsum";

export function BrStory() {
  return (
    <div>
      <p>
        This is a paragraph with a line break
        <Br />
        and this text continues after the break with spacing.
      </p>
      <p>
        <LoremIpsum content="normal" />
        <Br />
        Multiple breaks can be used
        <Br />
        to create structured spacing
        <Br />
        throughout the text content.
      </p>
      <p>
        <LoremIpsum content="long" />
        <Br />
        <LoremIpsum content="short" />
      </p>
    </div>
  );
}
