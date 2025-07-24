import React from "react";

export type VerticalLayoutProps = {
  children: React.ReactNode;
};

export function TwoColumns({ children }: VerticalLayoutProps) {
  return (
    <div className={`columns-2`} style={{ gap: "20px", columnFill: "auto" }}>
      {children}
    </div>
  );
}
