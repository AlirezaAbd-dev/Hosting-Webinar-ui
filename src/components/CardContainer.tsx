import { ReactNode } from "react";

export default function CardContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col p-12 mt-5 md:mt-20 bg-card rounded-lg max-w-xs sm:max-w-sm md:max-w-lg">
      {children}
    </div>
  );
}
