import { Chapter } from "./pages/atlas";

export type PageNumerationProps = {
  atlas: Chapter[];
};

export function PageNumeration({ atlas }: PageNumerationProps) {
  return (
    <div className="flex flex-col gap-4">
      {atlas.map((chapter, index) => (
        <div key={index} className="flex flex-col gap-2">
          <p className="page-numeration text-tpinkDeepShadow">{chapter.page}</p>
          {chapter.children &&
            chapter.children.map((child, childIndex) => (
              <p className="page-numeration text-tpinkShadow" key={childIndex}>
                {child.page}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
}
