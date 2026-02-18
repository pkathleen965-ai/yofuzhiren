import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "符箓服务",
  description: "提供专业的符箓定制服务，包括和合符、斩桃花符、防小人符、招财符、文昌符、化太岁符等。传承千年智慧，为您开启幸福人生。",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
