import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "King Tech Foundation living style guide — design tokens, colours, typography, and UI components.",
};

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
