import { bibliography } from "../../assets/bibliography";
import { References } from "../../components/pages/references";

export function Bibliography() {
  return (
    <div>
      <h2 className="hidden">Bibliography</h2>
      <References apaReferences={bibliography}></References>
    </div>
  );
}
