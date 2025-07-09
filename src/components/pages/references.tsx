export type APAReference = {
  authors: string[]; // e.g., ["Alemohammad, S.", "Casco-Rodriguez, J."]
  year: string; // "2023" or "2025, January 28"
  title: string;
  sourceType: "journal" | "webpage" | "report" | "preprint" | "other"; // for formatting logic
  containerTitle?: string; // e.g., journal or site name
  publisher?: string; // for reports
  doi?: string;
  url?: string;
  identifier?: string; // e.g., arXiv number
};

function formatAuthors(authors: string[]): string {
  if (authors.length === 0) return "";
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return authors.join(" & ");
  return authors.slice(0, -1).join(", ") + " & " + authors[authors.length - 1];
}

export type ReferenceProps = {
  apaReferences: APAReference[];
};

export function References({ apaReferences }: ReferenceProps) {
  return (
    <div className="flex flex-col gap-2 max-w-8/12">
      {apaReferences.map((reference) => (
        <div
          key={reference.title}
          className="pl-2 text-justify [text-indent:-0.5rem] break-inside-avoid"
        >
          <p>
            {formatAuthors(reference.authors)}
            {" "}({reference.year}){" "}
            {reference.title}
            {" "}
            <br></br>
            <span>
              {reference.url && <a href={reference.url}>{reference.url}</a>}
              {reference.url && "\u00A0"}
              {reference.doi && <a>{reference.doi}</a>}
              {reference.url && "\u00A0"}
              {reference.identifier && <a>No. {reference.identifier}</a>}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
