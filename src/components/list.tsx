export type ListProps = {
  children: React.ReactNode;
};

export function List({ children }: ListProps) {
  return <div className="flex flex-col gap-y-2 mt-2 mb-2">{children}</div>;
}
