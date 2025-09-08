import { Book } from "./book";
import { Layouter } from "./paged/layouter";
import { devElements, Navigation } from "./preview-components/navigation";

export default function App() {
  return (
    <div>
      <div id="pagedjsdocroot" style={{ display: "none" }}>
        <Book />
      </div>
      <div id="preview" className="absolute right-0"></div>
      <Navigation elements={devElements} />
      <Layouter />
    </div>
  );
}
