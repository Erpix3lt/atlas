import { List } from "../../../components/typography/list";
import { ListItem } from "../../../components/typography/list-item";
import { LoremIpsum } from "../../lorem-ipsum";

export function ListStory() {
  return (
    <List>
      <ListItem index={1}>
        <LoremIpsum content="short" />
      </ListItem>
      <ListItem index={2}>
        <LoremIpsum content="short" />
      </ListItem>
      <ListItem index={3}>
        <LoremIpsum content="normal" />
      </ListItem>
      <ListItem index={4}>
        <LoremIpsum content="long" />
      </ListItem>
    </List>
  );
}
