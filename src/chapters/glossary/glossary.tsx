import { atlas } from "../../assets/atlas";
import { Atlas } from "../../components/pages/atlas";

export function Glossary() {
  return (
    <div className="flex flex-row justify-between">
      <h2 className="hidden">Glossary</h2>
      <Atlas atlas={atlas} />
    </div>
  );
}
