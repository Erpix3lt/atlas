import { ReactNode } from "react";

type QuoteProps = {
  children: ReactNode;
};

export function Quote({ children }: QuoteProps) {
  return <div className="citation ml-2 mt-1">{children}</div>;
}
