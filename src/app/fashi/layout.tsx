import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "道家法事",
  description: "有符之人提供16种专业道家法事服务，包括安太岁、增补财库、升职加薪、斩桃花、文昌考试等。千年传承，正统道家，祈福消灾。",
};

export default function FashiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
