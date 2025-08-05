import { Br } from "../components/typography/br";
import { HighlightedBlack } from "../components/typography/highlighted-black";

export function Authorship() {
  return (
    <div>
      <p>
        <HighlightedBlack>Decleration of authorship</HighlightedBlack>
      </p>
      <p className="citation">
        <Br />I hereby declare that I have independently written this proposal
        by the name "Sabotage in AI → Someone in Los Angeles had recently shot a
        computer with a gun" and that I have used no other than the sources and
        means specifed. All sources have been referenced.
      </p>
      <p>
        Köln,
        <Br />
        05.06.2025
      </p>
    </div>
  );
}
