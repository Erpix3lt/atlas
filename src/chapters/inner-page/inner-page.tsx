import { atlas } from "../../assets/atlas";
import { PageNumeration } from "../../components/page-numeration";

export function InnerPage() {
  return (
    <div>
      <div className="absolute top-0 right-0">
        <PageNumeration atlas={atlas} />
      </div>
      <h1 className="absolute bottom-0 w-1/2 text-black backpage">
        Someone in Los Angeles had recently shot a computer with a gun
      </h1>
    </div>
  );
}
