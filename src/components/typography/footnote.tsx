export type FootnoteProps = {
  children: React.ReactNode;
};

export function Footnote({ children }: FootnoteProps) {
  return <span className={`text-[5px] font-mono footnote`}>{children}</span>;
}
