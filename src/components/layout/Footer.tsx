"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  ArrowUp,
} from "lucide-react";

const footerLinks = {
  product: {
    title: "产品",
    links: [
      { label: "具身应用场景", href: "#applications" },
      { label: "零代码平台", href: "#low-code" },
      { label: "核心特性", href: "#features" },
      { label: "演示场景", href: "#demos" },
      { label: "云平台", href: "#platform" },
    ],
  },
  resources: {
    title: "资源",
    links: [
      { label: "开发者中心", href: "#" },
      { label: "GitHub 仓库", href: "#" },
      { label: "教程指南", href: "#" },
      { label: "常见问题", href: "#" },
      { label: "更新日志", href: "#" },
    ],
  },
  company: {
    title: "关于",
    links: [
      { label: "关于我们", href: "#" },
      { label: "合作伙伴", href: "#" },
      { label: "新闻动态", href: "#" },
      { label: "加入我们", href: "#" },
      { label: "联系我们", href: "#contact" },
    ],
  },
  legal: {
    title: "法律",
    links: [
      { label: "用户协议", href: "#" },
      { label: "隐私政策", href: "#" },
      { label: "知识产权", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Github, href: "https://github.com/livstyle", target: "_blank", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "mailto:livstylecn@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    AI具象师
                  </span>
                  <span className="block text-xs text-slate-500">
                    辰龙OS 具身智能平台
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                基于辰龙操作系统 + RK3588 平台打造的新一代 AI 具身智能平台。
                展示构想，瞬间实现，让每个人的创意都能具象化落地。
              </p>

              {/* Slogan */}
              <div className="glass rounded-xl p-4 mb-6 border border-cyan-500/20">
                <p className="text-cyan-400 text-sm italic" style={{ fontFamily: "var(--font-orbitron)" }}>
                  &ldquo;Show your vision, and it&apos;s implemented in an instant.&rdquo;
                </p>
              </div>

              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-sm font-medium text-white mb-3">订阅我们的动态</p>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      placeholder="输入您的邮箱"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                  <button className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-shadow">
                    订阅
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.target}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            {Object.values(footerLinks).map((section, index) => (
              <div key={index} className="col-span-1">
                <h3 className="text-sm font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span>© 2025 AI具象师. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              系统运行正常
            </span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm text-slate-400 hover:text-white transition-colors"
          >
            <span>返回顶部</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
