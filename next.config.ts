import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // 静态导出，用于 GitHub Pages
  output: "export",

  // 基础路径配置（用于非根目录部署）
  basePath: basePath,

  // 图片优化配置（静态导出时需要禁用）
  images: {
    unoptimized: true,
  },

  // 严格模式
  reactStrictMode: true,

  // 尾部斜杠（GitHub Pages 需要）
  trailingSlash: true,
};

export default nextConfig;
