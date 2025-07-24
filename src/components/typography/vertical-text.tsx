export function VerticalText({
  text,
  classname,
}: {
  text: string;
  classname?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      {text.split("").map((letter) => (
        <p className={classname}>{letter === " " ? "\u00A0" : letter}</p>
      ))}
    </div>
  );
}
