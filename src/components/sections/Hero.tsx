"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Download, Sparkles, Cpu, Brain, Zap, Mic, Settings, Globe, Github } from "lucide-react";

const FloatingOrb = ({ delay, size, color, position }: { delay: number; size: string; color: string; position: string }) => (
  <motion.div
    className={`absolute ${size} rounded-full ${color} blur-3xl opacity-30 ${position}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const NeuralNetwork = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="50%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <g className="neural-lines">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.line
          key={i}
          x1={`${10 + i * 12}%`}
          y1="20%"
          x2={`${15 + i * 10}%`}
          y2="80%"
          stroke="url(#neural-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </g>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <FloatingOrb delay={0} size="w-96 h-96" color="bg-cyan-500" position="top-1/4 -left-48" />
      <FloatingOrb delay={2} size="w-80 h-80" color="bg-purple-600" position="top-1/3 -right-40" />
      <FloatingOrb delay={4} size="w-64 h-64" color="bg-pink-500" position="bottom-1/4 left-1/3" />
      <ParticleField />
      <NeuralNetwork />
      
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">辰龙OS + RK3588 具身智能基座</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-responsive-hero font-bold mb-6"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-white">AI</span>
            <span className="text-gradient">具象师</span>
          </motion.h1>

          {/* English Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg sm:text-xl lg:text-2xl text-cyan-400 mb-4 font-light tracking-wide italic"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            &ldquo;Show your vision, and it&apos;s implemented in an instant.&rdquo;
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-responsive-xl text-slate-300 mb-4 font-light"
          >
            展示构想，瞬间实现 | AI 驱动的具身智能平台
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-responsive-base text-slate-400 max-w-4xl mx-auto mb-12"
          >
            基于辰龙操作系统 + RK3588 高性能平台，打造具身智能的核心基石
            <br className="hidden sm:block" />
            不仅是机器人，更是医疗康复、智慧工厂、创意落地的万能具象化引擎
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="xl" className="group w-full sm:w-auto">
              <Mic className="w-5 h-5" />
              <span>描述你的想法</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="group w-full sm:w-auto">
              <Play className="w-5 h-5" />
              <span>观看演示视频</span>
            </Button>
            <Button variant="ghost" size="lg" className="text-slate-400 hover:text-cyan-400">
              <Download className="w-5 h-5" />
              <span>下载技术白皮书</span>
            </Button>
          </motion.div>

          {/* Platform Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
          >
            <HighlightCard
              icon={<Settings className="w-8 h-8" />}
              title="辰龙OS 具身基座"
              description="医疗康复、智能机器人、工业自动化...辰龙OS + RK3588 是实现一切具身智能的系统与硬件基石"
              gradient="from-purple-500 to-pink-500"
              delay={0.8}
            />
            <HighlightCard
              icon={<Mic className="w-8 h-8" />}
              title="零代码 AI 具象化"
              description="通过多模态描述场景，低代码甚至无代码开发，快速实现想法落地或商业化"
              gradient="from-cyan-500 to-blue-500"
              delay={0.9}
            />
            <HighlightCard
              icon={<Globe className="w-8 h-8" />}
              title="开源商业 共建生态"
              description="通过开源社区汇聚全球智慧，共同做大做强商业化产品，贡献者共享商业收益"
              gradient="from-green-500 to-emerald-500"
              delay={1.0}
            />
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <StatCard
              icon={<Zap className="w-8 h-8" />}
              value="5x"
              label="成本降低"
              description="国产RK3588平台带来的成本革命"
              delay={1.1}
            />
            <StatCard
              icon={<Brain className="w-8 h-8" />}
              value="0"
              label="编程门槛"
              description="多模态驱动，描述即实现"
              delay={1.2}
            />
            <StatCard
              icon={<Cpu className="w-8 h-8" />}
              value="∞"
              label="应用场景"
              description="医疗、教育、工业、创意无限"
              delay={1.3}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-cyan-500/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HighlightCard({
  icon,
  title,
  description,
  gradient,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card rounded-2xl p-6 hover-card group text-left border border-slate-700/50"
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({
  icon,
  value,
  label,
  description,
  delay,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card rounded-2xl p-6 hover-card group"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 group-hover:text-cyan-300 transition-colors">
          {icon}
        </div>
        <div className="text-left">
          <div className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-orbitron)" }}>
            {value}
          </div>
          <div className="text-sm font-medium text-cyan-400">{label}</div>
        </div>
      </div>
      <p className="text-sm text-slate-400 text-left">{description}</p>
    </motion.div>
  );
}
