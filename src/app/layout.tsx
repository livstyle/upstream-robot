import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "知识具象师 | AI 赋能的具身智能学科实验平台",
  description:
    "由清华大学研究团队领衔，基于 RK3588 平台，重新定义高等教育与 STEAM 实验标准。AI 驱动的具身知识生成，让抽象知识变得触手可及。",
  keywords: [
    "具身智能",
    "AI教育",
    "清华大学",
    "RK3588",
    "STEAM教育",
    "智能实验平台",
    "教育科技",
    "知识具象化",
  ],
  authors: [{ name: "知识具象师团队" }],
  openGraph: {
    title: "知识具象师 | AI 具身智能实验平台",
    description:
      "清华大学研究团队领衔，AI 驱动的新一代教育实验平台。成本降低5倍，零编程门槛，100%权威认证内容。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-slate-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

