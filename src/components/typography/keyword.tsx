import { ReactNode } from "react";

export function Keyword({ children }: { children: ReactNode }) {
  return (
    <div className="bg-tgreen rounded-full px-1 py-0.5 w-fit uppercase font-uncut font-bold text-[7px] text-white">
      {children}
    </div>
  );
}
