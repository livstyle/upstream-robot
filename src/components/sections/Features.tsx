"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Mic,
  Globe,
  Coins,
  Settings,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    id: 1,
    icon: Cpu,
    title: "辰龙OS + RK3588 核心基座",
    subtitle: "Embodied Foundation",
    description:
      "辰龙操作系统是实现具身智能的核心基石。配合国产高性能 RK3588 NPU 平台，提供强大的边缘AI计算能力，支撑医疗、教育、工业等多元场景。",
    benefits: [
      "边缘AI实时推理",
      "多传感器融合支持",
      "低功耗高性能设计",
      "完整ROS生态兼容",
    ],
    gradient: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500",
  },
  {
    id: 2,
    icon: Mic,
    title: "多模态驱动，零代码开发",
    subtitle: "Show-to-Action",
    description:
      "告别繁琐编程！用自然语言描述你的想法，AI 自动理解需求并生成可执行的动作序列。普通人也能快速创建具身智能应用。",
    benefits: [
      "自然语言交互",
      "AI 智能理解需求",
      "可视化参数调整",
      "快速原型到产品",
    ],
    gradient: "from-purple-500 to-pink-600",
    bgGlow: "bg-purple-500",
  },
  {
    id: 3,
    icon: Globe,
    title: "开放生态，全球共创",
    subtitle: "Open Source Ecosystem",
    description:
      "硬件开放，软件开源。完整的 ROS 接口和 SDK，鼓励全球开发者和企业共创、分享和改进应用方案。",
    benefits: [
      "完整 ROS 接口支持",
      "丰富 SDK 开发工具",
      "全球开发者社区",
      "共创共享机制",
    ],
    gradient: "from-green-500 to-emerald-600",
    bgGlow: "bg-green-500",
  },
  {
    id: 4,
    icon: Coins,
    title: "成本革命，普惠AI",
    subtitle: "Cost Revolution",
    description:
      "利用国产高性能 RK3588 NPU 平台，在保证性能的同时，将传统昂贵设备的成本降至可负担范围，让更多人享受具身智能。",
    benefits: [
      "成本降低 5 倍以上",
      "国产自主可控",
      "性能毫不妥协",
      "普惠各类用户",
    ],
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500",
  },
  {
    id: 5,
    icon: Settings,
    title: "高精度模块化设计",
    subtitle: "Precision & Modularity",
    description:
      "采用高精度伺服系统，满足医疗、科研等场景对运动控制的严格需求。模块化设计支持快速定制和扩展。",
    benefits: [
      "高精度伺服系统",
      "模块化快速定制",
      "多场景适配能力",
      "传感器灵活扩展",
    ],
    gradient: "from-rose-500 to-red-600",
    bgGlow: "bg-rose-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">核心特性</span>
          </div>
          <h2
            className="text-responsive-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            五大核心优势
          </h2>
          <p className="text-responsive-base text-slate-400 max-w-2xl mx-auto">
            辰龙OS + RK3588 + AI 具象化技术，打造具身智能新范式
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
          
          {/* CTA Card */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="overflow-hidden border-dashed border-2 border-cyan-500/30 bg-gradient-to-r from-cyan-950/50 to-purple-950/50">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      想要深入了解辰龙OS技术架构？
                    </h3>
                    <p className="text-slate-400">
                      下载完整技术白皮书，获取详细架构设计与性能参数
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 hover:-translate-y-0.5 group whitespace-nowrap">
                  <span>获取技术白皮书</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: Zap, label: "边缘AI推理", value: "<10ms" },
            { icon: Shield, label: "安全认证", value: "企业级" },
            { icon: Globe, label: "开源社区", value: "1000+" },
            { icon: Cpu, label: "NPU算力", value: "6TOPS" },
          ].map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 glass rounded-xl"
              >
                <Icon className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-xs text-slate-500">{badge.label}</p>
                  <p className="font-bold text-white">{badge.value}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;
  const isLarge = index === 0;

  return (
    <motion.div variants={itemVariants} className={isLarge ? "lg:col-span-2" : ""}>
      <Card className="h-full overflow-hidden group hover-card">
        <CardContent className={`p-0 ${isLarge ? "flex flex-col lg:flex-row" : ""}`}>
          {/* Icon & Title Section */}
          <div className={`p-8 ${isLarge ? "lg:w-1/2" : ""}`}>
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {feature.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {feature.title}
                </h3>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              {feature.description}
            </p>
            
            {/* Benefits List */}
            <ul className="space-y-3">
              {feature.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle className={`w-5 h-5 flex-shrink-0 bg-gradient-to-br ${feature.gradient} rounded-full p-0.5 text-white`} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Section for Large Card */}
          {isLarge && (
            <div className="lg:w-1/2 relative min-h-[300px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex items-center justify-center overflow-hidden">
              {/* Animated Background */}
              <div className={`absolute w-64 h-64 ${feature.bgGlow} opacity-20 blur-3xl animate-pulse`} />
              
              {/* Tech Stack Preview */}
              <div className="relative p-6 w-full max-w-md">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
                    <Cpu className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-medium text-white">辰龙OS 系统架构</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-sm text-slate-300">应用层</span>
                      <span className="text-xs text-cyan-400 px-2 py-1 bg-cyan-500/20 rounded">AI具象师</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-sm text-slate-300">中间件</span>
                      <span className="text-xs text-purple-400 px-2 py-1 bg-purple-500/20 rounded">Dros-rs + SDK...</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-sm text-slate-300">系统层</span>
                      <span className="text-xs text-green-400 px-2 py-1 bg-green-500/20 rounded">辰龙OS</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-sm text-slate-300">硬件层</span>
                      <span className="text-xs text-amber-400 px-2 py-1 bg-amber-500/20 rounded">RK3588 NPU</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
