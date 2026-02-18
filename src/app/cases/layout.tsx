import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "真实案例",
  description: "数以千计的成功案例，见证符箓效果。了解有符之人如何帮助客户解决感情、事业、学业等各方面的问题。",
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
