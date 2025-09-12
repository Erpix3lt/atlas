import { ListItem } from "../../../components/typography/list-item";
import { LoremIpsum } from "../../lorem-ipsum";

export function ListItemStory() {
  return (
    <div>
      <p>
        <LoremIpsum content="normal" />
      </p>
      <div className="space-y-4">
        <ListItem index={1}>
          <LoremIpsum content="short" />
        </ListItem>
        <ListItem index={2}>
          Standalone list item with medium content length
        </ListItem>
        <ListItem index="•">Bullet point style with symbol</ListItem>
        <ListItem index="→">Arrow style indicator</ListItem>
        <ListItem index="01">Zero-padded numbering system</ListItem>
        <ListItem index="α">Greek letter numbering</ListItem>
      </div>
      <p className="mt-4">
        <LoremIpsum content="long" />
      </p>
    </div>
  );
}
