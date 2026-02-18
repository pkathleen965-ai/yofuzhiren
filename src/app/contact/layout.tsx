import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系有符之人，获取符箓定制咨询、符道文化学习等服务。微信、电话、邮箱多种联系方式。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
