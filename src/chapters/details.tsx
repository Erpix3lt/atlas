import { Br } from "../components/typography/br";
import { HighlightedBlack } from "../components/typography/highlighted-black";

export function Details() {
  return (
    <div>
      <p>
        <HighlightedBlack>Master Thesis Proposal</HighlightedBlack>
      </p>
      <p>
        Maximilian Schmalenbach
        <Br />
        11141397
      </p>
      <p>
        MA Integrated Design
        <Br />
        TH Köln, Faculty of Cultural Studies, KISD
      </p>
      <p>
        Supervisors
        <Br /> Prof. Sebastian Goldschmidtböing
        <Br /> Prof. Dr. Lasse Scherffig
      </p>
    </div>
  );
}
