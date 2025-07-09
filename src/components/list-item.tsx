export type ListItemProps = {
  index: number | string;
  children: React.ReactNode;
};

export function ListItem({ index, children }: ListItemProps) {
  return (
    <span>
      <div className="px-0.5 bg-tblue text-white w-fit">
        <p>* {index}</p>
      </div>
      <div className="ml-2"> {children}</div>
    </span>
  );
}
