import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "符道文化",
  description: "深入了解符道文化的起源、发展和内涵。符，源于道家祝由术，是中华传统文化的重要组成部分。",
};

export default function CultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
