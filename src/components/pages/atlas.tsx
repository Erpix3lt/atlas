import { VerticalText } from "../typography/vertical-text";

export type Chapter = {
  title: string;
  page: number | null;
  link: string;
  children?: Chapter[];
};

export type AtlasProps = {
  atlas: Chapter[];
};

export function Atlas({ atlas }: AtlasProps) {
  return (
    <div className="flex gap-5">
      {atlas.map((chapter, index) => (
        <div
          key={chapter.title + index}
          className="flex flex-row gap-2 cursor-pointer"
        >
          <VerticalText
            text={`${chapter.title}-${chapter.page}`}
            classname="atlas"
          />
          {chapter.children &&
            chapter.children.length > 0 &&
            chapter.children.map((subChapter, index) => (
              <div
                className="cursor-pointer"
                style={{ marginTop: `${(index + 1) * 10}px` }}
              >
                <VerticalText
                  text={subChapter.title + "-" + subChapter.page}
                  classname="atlas"
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
