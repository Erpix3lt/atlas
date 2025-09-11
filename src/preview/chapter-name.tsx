export type ChapterNameProps = {
  id: string;
  name: string;
};

export function ChapterName({ id, name }: ChapterNameProps) {
  return (
    <h2 id={id} style={{ display: "none" }}>
      {name}
    </h2>
  );
}
