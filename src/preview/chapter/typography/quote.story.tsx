import { Quote } from "../../../components/typography/quote";
import { LoremIpsum } from "../../lorem-ipsum";

export function QuoteStory() {
  return (
    <div>
      <p>
        <LoremIpsum content="normal" />
      </p>
      <Quote>
        <LoremIpsum content="normal" />
      </Quote>
      <p>
        <LoremIpsum content="long" />
      </p>
      <Quote>
        <LoremIpsum content="long" />
      </Quote>
      <p>
        <LoremIpsum content="normal" />
      </p>
    </div>
  );
}
