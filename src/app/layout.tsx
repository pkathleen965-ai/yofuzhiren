import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "有符之人 | 符道文化传承中心",
    template: "%s | 有符之人",
  },
  description: "传承道家祝由智慧，弘扬符道文化。提供符箓定制、符道文化学习、祝由术研究等服务。符是福的种子，福是符的显化。",
  keywords: ["符道文化", "道家祝由", "符箓定制", "传统文化", "有符之人", "祝由术", "和合符", "文昌符", "平安符"],
  authors: [{ name: "有符之人" }],
  creator: "有符之人",
  metadataBase: new URL("https://yofuzhiren.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://yofuzhiren.com",
    siteName: "有符之人",
    title: "有符之人 | 符道文化传承中心",
    description: "传承道家祝由智慧，弘扬符道文化。符是福的种子，福是符的显化。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "有符之人 - 符道文化传承中心",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "有符之人 | 符道文化传承中心",
    description: "传承道家祝由智慧，弘扬符道文化。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8B4513" />
      </head>
      <body className={`${notoSerif.variable} ${notoSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
