"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  GraduationCap,
  Globe,
  Coins,
  Settings,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    id: 1,
    icon: Brain,
    title: "AI 驱动的具身知识生成",
    subtitle: "Content-to-Action",
    description:
      "告别繁琐编程！只需输入知识点或公式（如牛顿第二定律），AI 即可实时推理并生成高精度的实验动作序列。",
    benefits: [
      "自然语言输入，零编程门槛",
      "实时推理，秒级响应",
      "高精度动作序列生成",
      "支持复杂公式解析",
    ],
    gradient: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500",
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "权威背书：清华严选",
    subtitle: "Professional Endorsement",
    description:
      "所有核心教学脚本均由清华大学研究团队进行科学性与教学法审核。我们保证您使用的是最严谨、最前沿的教育内容。",
    benefits: [
      "清华大学专业团队审核",
      "科学性与教学法双重保障",
      "持续更新前沿内容",
      "学科覆盖全面完整",
    ],
    gradient: "from-purple-500 to-pink-600",
    bgGlow: "bg-purple-500",
  },
  {
    id: 3,
    icon: Globe,
    title: "开放与共创：开源生态",
    subtitle: "Open Source Ecosystem",
    description:
      "硬件开放，软件开源。我们提供完整的 ROS 接口和 SDK，鼓励全球开发者和教育者共创、分享和改进演示脚本。",
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
    title: "极致性价比：成本革命",
    subtitle: "Cost Revolution",
    description:
      "利用国产高性能 RK3588 NPU 平台，在保证实验室级精度的同时，将传统昂贵设备的成本降至可负担范围。",
    benefits: [
      "成本降低 5 倍以上",
      "国产自主可控",
      "实验室级精度保障",
      "推动教育资源普及",
    ],
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500",
  },
  {
    id: 5,
    icon: Settings,
    title: "高精度与通用性",
    subtitle: "Precision & Modularity",
    description:
      "采用高精度伺服系统，满足复杂科学实验对运动控制的需求。模块化设计支持传感器、末端执行器快速更换。",
    benefits: [
      "高精度伺服系统",
      "模块化快速更换",
      "广泛场景适配",
      "传感器扩展支持",
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
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950"
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
            五大颠覆优势
          </h2>
          <p className="text-responsive-base text-slate-400 max-w-2xl mx-auto">
            融合前沿 AI 技术与具身智能，打造全新一代教育实验平台
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
                    <Sparkles className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      想要深入了解更多？
                    </h3>
                    <p className="text-slate-400">
                      下载完整技术白皮书，获取详细产品规格与技术参数
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
              
              {/* Code Preview Animation */}
              <div className="relative p-6 w-full max-w-md">
                <div className="glass rounded-xl p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-slate-500"># 输入知识点</p>
                    <p className="text-cyan-400 mt-2">
                      <span className="text-purple-400">ai.generate</span>(
                    </p>
                    <p className="text-green-400 ml-4">&quot;牛顿第二定律 F=ma&quot;</p>
                    <p className="text-cyan-400">)</p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="text-slate-500 mt-4"
                    >
                      # AI 自动生成实验序列...
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      className="mt-2"
                    >
                      <p className="text-emerald-400">✓ 实验序列生成完成</p>
                      <p className="text-emerald-400">✓ 动作轨迹已优化</p>
                      <p className="text-emerald-400">✓ 准备执行...</p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

