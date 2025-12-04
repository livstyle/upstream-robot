"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle,
  Layout,
  Users,
  Star,
  Award,
  Sparkles,
  ArrowRight,
  Cloud,
  Shield,
  Zap,
  Mic,
  Package,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const platformFeatures = [
  {
    icon: Mic,
    title: "描述你的想法",
    description: "用自然语言描述你的想法，AI自动理解需求并生成可执行方案。真正的零代码开发体验。",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Layout,
    title: "可视化编辑器",
    description: "拖拽式界面，让任何人都能快速定制和微调参数。所见即所得，实时预览效果。",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Package,
    title: "应用方案市场",
    description: "浏览和购买已验证的解决方案，或将自己的创作上架销售。共享经济，共同受益。",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Users,
    title: "开发者社区",
    description: "与全球开发者交流分享，获取技术支持。参与贡献即获积分和官方认证。",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
];

const platformStats = [
  { icon: Cloud, label: "云端同步", value: "实时" },
  { icon: Shield, label: "数据安全", value: "企业级" },
  { icon: Zap, label: "响应速度", value: "<100ms" },
  { icon: Award, label: "方案库", value: "500+" },
];

export default function Platform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="platform"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">云平台</span>
          </div>
          <h2
            className="text-responsive-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            AI具象师云平台
          </h2>
          <p className="text-responsive-base text-slate-400 max-w-3xl mx-auto">
            连接创意、技术与商业的一站式具身智能开发平台
            <br />
            从想法到产品，从原型到商业化
          </p>
        </motion.div>

        {/* Main Content */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Platform Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Browser Window Mock */}
              <div className="glass rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="glass rounded-lg px-4 py-1.5 text-sm text-slate-400 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span>https://platform.aijuxiang.com</span>
                    </div>
                  </div>
                </div>

                {/* Browser Content */}
                <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 min-h-[400px]">
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">AI具象师云平台</h4>
                        <p className="text-xs text-slate-500">创作者工作台</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      在线
                    </div>
                  </div>

                  {/* Dashboard Cards */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { label: "我的项目", value: "12" },
                      { label: "已部署", value: "8" },
                      { label: "收益(元)", value: "28,500" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50"
                      >
                        <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                        <p className="text-xs text-slate-500">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent Projects */}
                  <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                    <h5 className="text-sm font-medium text-slate-400 mb-3">最近项目</h5>
                    <div className="space-y-2">
                      {[
                        { name: "康复助行机器人", type: "医疗", status: "已上线" },
                        { name: "智能分拣系统", type: "物流", status: "测试中" },
                        { name: "教学演示机械臂", type: "教育", status: "开发中" },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                              <Layout className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div>
                              <p className="text-sm text-white">{project.name}</p>
                              <p className="text-xs text-slate-500">{project.type}</p>
                            </div>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              project.status === "已上线"
                                ? "bg-green-500/20 text-green-400"
                                : project.status === "测试中"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-slate-500/20 text-slate-400"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-cyan-500/20 rounded-2xl transform rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-purple-500/20 rounded-xl transform -rotate-6" />
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {platformFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="hover-card">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${feature.bgColor}`}>
                            <Icon className={`w-6 h-6 ${feature.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                              {feature.title}
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Platform Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-4 gap-4 mt-8"
            >
              {platformStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 glass rounded-xl"
                  >
                    <Icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8"
            >
              <Button size="lg" className="w-full sm:w-auto group">
                <span>免费开始描述你的想法</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
