import { TwoColumns } from "../layout/two-columns";
import { Figure, FigureProps } from "./figure";

export type ChartItem = {
  title: string;
  percentage: number;
};

export type ChartProps = FigureProps & {
  title: string;
  items: ChartItem[];
};

export function ChartItem({
  index,
  title,
  percentage,
}: ChartItem & { index: number }) {
  return (
    <li key={index}>
      <p>
        {index + 1}. {title} - {percentage}%
      </p>
    </li>
  );
}

export function Chart({ id, items }: ChartProps) {
  return (
    <div>
      <Figure id={id} />
      <ul>
        {items.length > 3 ? (
          <TwoColumns>
            {items.map((item, index) => (
              <ChartItem
                key={index}
                index={index}
                title={item.title}
                percentage={item.percentage}
              />
            ))}
          </TwoColumns>
        ) : (
          items.map((item, index) => (
            <ChartItem
              key={index}
              index={index}
              title={item.title}
              percentage={item.percentage}
            />
          ))
        )}
      </ul>
    </div>
  );
}
