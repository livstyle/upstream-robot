import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI具象师 | 展示构想，瞬间实现 - 辰龙OS具身智能平台",
  description:
    "基于辰龙操作系统 + RK3588 平台，打造具身智能的核心基石。Show your vision, and it's implemented in an instant. 从医疗康复到智慧工厂，低代码/无代码开发，快速实现想法落地或商业化。",
  keywords: [
    "AI具象师",
    "辰龙OS",
    "RK3588",
    "具身智能",
    "医疗康复机器人",
    "低代码开发",
    "无代码开发",
    "智慧工厂",
    "具身机器人",
    "AI教育",
    "STEAM教育",
  ],
  authors: [{ name: "AI具象师团队" }],
  openGraph: {
    title: "AI具象师 | 展示构想，瞬间实现",
    description:
      "基于辰龙OS + RK3588的具身智能平台。医疗康复、智慧工厂、教育实验，展示描述即可实现。零代码开发，快速商业化落地。",
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
