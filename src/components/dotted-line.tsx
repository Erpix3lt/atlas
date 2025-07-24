export function DottedLineDoubled() {
  return (
    <div className="flex flex-col gap-y-[2px] my-2">
      <hr className="border-t border-dotted border-black" />
      <hr className="border-t border-dotted border-black" />
    </div>
  );
}

export function DottedLine() {
  return <hr className="border-t border-dotted border-black my-2" />;
}

export function DottedLineWhite() {
  return <hr className="border-t border-dotted border-white my-2" />;
}
