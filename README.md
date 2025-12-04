# AI具象师 - 辰龙OS 具身智能平台

<p align="center">
  <img src="public/logo.svg" alt="AI具象师 Logo" width="120" />
</p>

<p align="center">
  <strong>Show your vision, and it's implemented in an instant.</strong>
  <br />
  <em>展示构想，瞬间实现</em>
</p>

<p align="center">
  <a href="#features">核心特性</a> •
  <a href="#applications">应用场景</a> •
  <a href="#low-code">零代码平台</a> •
  <a href="#tech-stack">技术栈</a> •
  <a href="#getting-started">快速开始</a>
</p>

---

## 🌟 项目简介

AI具象师是基于**辰龙操作系统 + RK3588**平台打造的具身智能开发平台。它不仅仅是实现机器人的平台，更是一切具身智能的核心基石——从医疗康复到智慧工厂，从教育实验到创意落地。

### 两大核心主题

#### 🔧 辰龙OS + RK3588 具身基座
辰龙操作系统是实现具身智能的系统与硬件基石，支持多种应用场景：
- **医疗康复机器人** - 帮助偏瘫患者重新站立行走
- **智慧工厂自动化** - 低成本柔性生产线配置
- **STEAM教育实验** - 将抽象公式转化为可观察的具身实验
- **物流仓储机器人** - 智能分拣与搬运
- **智能家居助手** - 真正能帮你做家务的具身智能

#### 💡 零代码 AI 具象化平台
普通个体或工厂如何快速实现自己的想法？
- **展示描述** - 用自然语言描述你的需求
- **AI理解生成** - AI自动理解并生成方案
- **可视化编辑** - 拖拽式调参，所见即所得
- **快速部署** - 一键部署，快速商业化落地

## ✨ Features

- 🧠 **语音驱动开发** - 说出想法，AI自动理解并实现
- 🏥 **医疗康复方案** - 帮助偏瘫患者的智能康复系统
- 🏭 **智慧工厂支持** - 低成本自动化解决方案
- 💰 **成本革命** - 基于国产RK3588，成本降低5倍以上
- 🧩 **高精度模块化** - 支持传感器、执行器快速更换
- 🌐 **开源生态** - 完整ROS接口和SDK

## 🛠️ Tech Stack

| 技术 | 说明 |
|------|------|
| [Next.js 15](https://nextjs.org/) | React 全栈框架 (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [TailwindCSS](https://tailwindcss.com/) | 原子化 CSS 框架 |
| [Framer Motion](https://www.framer.com/motion/) | 动画库 |
| [Lucide React](https://lucide.dev/) | 图标库 |
| [shadcn/ui](https://ui.shadcn.com/) | UI 组件风格 |

## 📁 Project Structure

```
upstream-robot/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 部署配置
├── public/                     # 静态资源
│   └── logo.svg
├── src/
│   ├── app/
│   │   ├── globals.css         # 全局样式（科技主题、光效、动画）
│   │   ├── layout.tsx          # 根布局 & SEO 配置
│   │   └── page.tsx            # 首页
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # 导航栏（响应式）
│   │   │   └── Footer.tsx      # 页脚
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # 首屏（Slogan、核心亮点）
│   │   │   ├── EmbodiedApps.tsx # 辰龙OS具身应用场景
│   │   │   ├── LowCodePlatform.tsx # 零代码AI具象化平台
│   │   │   ├── Features.tsx    # 五大核心特性
│   │   │   ├── Demos.tsx       # 演示场景（医疗/工厂/教育等）
│   │   │   ├── Platform.tsx    # 云平台介绍
│   │   │   └── Contact.tsx     # 合作联系
│   │   └── ui/
│   │       ├── button.tsx      # 按钮组件
│   │       └── card.tsx        # 卡片组件
│   └── lib/
│       └── utils.ts            # 工具函数 (cn)
├── .gitignore
├── eslint.config.mjs           # ESLint 配置
├── next.config.ts              # Next.js 配置
├── package.json
├── postcss.config.mjs          # PostCSS 配置
├── tailwind.config.ts          # TailwindCSS 配置（自定义主题）
├── tsconfig.json               # TypeScript 配置
└── README.md
```

## 🚀 Getting Started

### 环境要求

- **Node.js** >= 18.17.0
- **npm** >= 9.0.0 (或 yarn/pnpm)

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/your-username/upstream-robot.git
cd upstream-robot

# 安装依赖
npm install
```

### 开发模式

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm run start
```

### 代码检查

```bash
npm run lint
```

## 📦 Deployment

### GitHub Pages 自动部署

本项目已配置 GitHub Actions，推送到 `main` 分支后会自动部署到 GitHub Pages。

#### 启用 GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. **Source** 选择 `GitHub Actions`
3. 推送代码到 `main` 分支，等待 Actions 完成
4. 访问 `https://<your-username>.github.io/<repo-name>/`

### 其他部署方式

#### Vercel（推荐）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/upstream-robot)

```bash
npm i -g vercel
vercel
```

#### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

## 🎨 自定义主题

主题配置位于 `tailwind.config.ts`，支持自定义：

- **颜色变量** - CSS 变量定义在 `globals.css`
- **霓虹光效** - `neon.blue`, `neon.purple`, `neon.pink`
- **动画效果** - `animate-gradient-x`, `animate-pulse-glow`, `animate-float`
- **字体** - Orbitron (科技感标题), Inter (正文)

## 📄 License

MIT License © 2025 AI具象师团队

---

<p align="center">
  <sub>Show your vision, and it's implemented in an instant.</sub>
  <br />
  <sub>Made with ❤️ by AI具象师团队</sub>
</p>
