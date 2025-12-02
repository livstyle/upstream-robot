import type { NextConfig } from "next";

// GitHub Pages 部署时的仓库名（子目录）
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

const nextConfig: NextConfig = {
  // 静态导出，用于 GitHub Pages
  output: "export",

  // 基础路径配置（用于非根目录部署）
  // 本地开发时为空，GitHub Actions 部署时为仓库名
  basePath: isGithubActions ? `/${repoName}` : "",

  // 资源前缀（用于 CDN 或子目录部署）
  assetPrefix: isGithubActions ? `/${repoName}/` : "",

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
