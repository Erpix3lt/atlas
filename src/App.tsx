import { useState } from "react";
import { Book } from "./book";
import { Layouter } from "./paged/layouter";
import { devElements, Navigation } from "./preview-components/navigation";

export default function App() {
  const [isPreviewReady, setIsPreviewReady] = useState(false);

  return (
    <div>
      <div id="pagedjsdocroot" style={{ display: "none" }}>
        <Book />
      </div>
      <div id="preview" className="absolute right-0"></div>
      <Navigation elements={devElements} isPreviewReady={isPreviewReady} />
      <Layouter onPreviewReady={() => setIsPreviewReady(true)} />
    </div>
  );
}
