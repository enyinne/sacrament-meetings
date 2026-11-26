import type { ReactNode } from "react";

type MeetingsLayoutProps = {
  children: ReactNode;
};

export default function MeetingsLayout({
  children,
}: MeetingsLayoutProps) {
  return (
    <section className="mx-auto min-h-screen max-w-7xl bg-gray-50">
      {children}
    </section>
  );
}