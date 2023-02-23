import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen h-screen text-text bg-background flex justify-center items-start overflow-auto font-sans">
      {children}
    </main>
  );
}
