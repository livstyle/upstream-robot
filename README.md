# 知识具象师 - AI 具身智能学科实验平台

<p align="center">
  <img src="public/logo.svg" alt="知识具象师 Logo" width="120" />
</p>

<p align="center">
  <strong>由清华大学研究团队领衔，基于 RK3588 平台，重新定义高等教育与 STEAM 实验标准</strong>
</p>

<p align="center">
  <a href="#features">核心特性</a> •
  <a href="#tech-stack">技术栈</a> •
  <a href="#project-structure">项目结构</a> •
  <a href="#getting-started">快速开始</a> •
  <a href="#deployment">部署</a>
</p>

---

## ✨ Features

- 🧠 **AI 驱动的具身知识生成** - 自然语言输入，零编程门槛
- 🎓 **清华严选内容** - 100% 权威认证教学脚本
- 🌐 **开源生态** - 完整 ROS 接口和 SDK
- 💰 **成本革命** - 基于 RK3588，成本降低 5 倍以上
- 🧩 **高精度模块化** - 支持传感器、末端执行器快速更换

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
│   │   │   ├── Hero.tsx        # 首屏（粒子动画、神经网络）
│   │   │   ├── Features.tsx    # 五大核心特性
│   │   │   ├── Demos.tsx       # 学科演示场景
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

#### 手动触发部署

也可以在 **Actions** 页面手动触发 `Deploy to GitHub Pages` workflow。

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

MIT License © 2024 知识具象师团队

---

<p align="center">
  <sub>Made with ❤️ by 清华大学研究团队</sub>
</p>

