"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Factory,
  GraduationCap,
  Home,
  Truck,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Play,
  Cpu,
  FlaskConical,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const applications = [
  {
    id: 1,
    icon: Heart,
    title: "医疗康复机器人",
    subtitle: "Medical Rehabilitation",
    description:
      "帮助偏瘫患者重新站立行走。基于辰龙OS + RK3588的智能康复系统，通过精准的运动控制和实时反馈，为患者提供个性化的康复训练方案。",
    coreValue: "让每一位患者重获行动自由",
    features: [
      "智能步态分析与矫正",
      "实时运动数据监测",
      "个性化康复方案",
      "远程医生指导支持",
    ],
    stats: { value: "85%", label: "康复有效率" },
    gradient: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500",
    image: "/apps/medical.png",
    isPrimary: true,
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "初等/高等教育实验",
    subtitle: "K12 & Higher Education",
    description:
      "从中小学STEAM启蒙到高等院校专业实验，提供从入门到精通的完整学习路径。将抽象知识转化为可观察的具身实验。",
    coreValue: "让知识真正触手可及",
    features: [
      "K12趣味STEAM实验",
      "高校专业课程配套",
      "循序渐进学习路径",
      "技能认证体系",
    ],
    stats: { value: "500+", label: "教学方案" },
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500",
    image: "/apps/education.png",
    isPrimary: true,
  },
  {
    id: 3,
    icon: FlaskConical,
    title: "科研实验室",
    subtitle: "Research Laboratory",
    description:
      "为高校和科研机构提供科研级具身智能平台，支持快速原型验证、论文复现和创新实验，加速科研成果转化。",
    coreValue: "让科研创新更高效",
    features: [
      "科研级精度控制",
      "论文复现支持",
      "实验数据可视化",
      "成果转化通道",
    ],
    stats: { value: "100+", label: "合作实验室" },
    gradient: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-500",
    image: "/apps/research.png",
    isPrimary: true,
  },
  {
    id: 4,
    icon: Factory,
    title: "智慧工厂自动化",
    subtitle: "Smart Manufacturing",
    description:
      "为中小型工厂提供低成本的自动化解决方案。无需昂贵的工业机器人，基于辰龙OS平台，多模态指令即可完成生产线配置。",
    coreValue: "让每个工厂都能智能制造",
    features: [
      "柔性生产线配置",
      "视觉质检系统",
      "物料智能分拣",
      "设备预测性维护",
    ],
    stats: { value: "60%", label: "效率提升" },
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500",
    image: "/apps/factory.png",
    isPrimary: false,
  },
  {
    id: 5,
    icon: Home,
    title: "智能家居助手",
    subtitle: "Smart Home Assistant",
    description:
      "真正能帮你整理房间、照顾宠物、辅助老人起居的具身智能家居系统。",
    coreValue: "让智能真正融入生活",
    features: [
      "家务自动化执行",
      "老人看护辅助",
      "宠物智能喂养",
      "家庭安防巡逻",
    ],
    stats: { value: "24/7", label: "全天候服务" },
    gradient: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500",
    image: "/apps/home.png",
    isPrimary: false,
  },
  {
    id: 6,
    icon: Truck,
    title: "物流仓储机器人",
    subtitle: "Logistics & Warehousing",
    description:
      "辰龙OS驱动的物流机器人帮助电商和物流企业大幅降低人工成本，提升仓储效率。",
    coreValue: "让物流更智能更高效",
    features: [
      "智能路径规划",
      "多机协同作业",
      "货物自动分拣",
      "库存实时盘点",
    ],
    stats: { value: "3x", label: "效率提升" },
    gradient: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500",
    image: "/apps/logistics.png",
    isPrimary: false,
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

export default function EmbodiedApps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="applications"
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
            <Cpu className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">辰龙OS + RK3588 具身基座</span>
          </div>
          <h2
            className="text-responsive-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            教育 · 医疗 · 无限可能
          </h2>
          <p className="text-responsive-base text-slate-400 max-w-3xl mx-auto">
            以<span className="text-purple-400 font-semibold">教育领域</span>和<span className="text-rose-400 font-semibold">医疗领域</span>为核心目标
            <br className="hidden md:block" />
            辰龙操作系统是实现一切具身智能的系统与硬件基石
          </p>
          
          {/* Focus Areas */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">初等/高等教育</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30">
              <FlaskConical className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">科研实验室</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-500/30">
              <Heart className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-medium text-rose-300">医疗康复</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Application - Medical */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="overflow-hidden border-2 border-rose-500/30">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Featured Application
                      </span>
                      <h3 className="text-2xl font-bold text-white">医疗辅助康复机器人</h3>
                    </div>
                  </div>

                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    基于辰龙OS + RK3588平台打造的医疗康复机器人，能够帮助
                    <span className="text-rose-400 font-semibold">偏瘫患者</span>
                    进行科学的康复训练，实现重新站立和行走的目标。
                  </p>

                  <div className="glass rounded-xl p-4 mb-8 border border-rose-500/20">
                    <p className="text-sm text-slate-500 mb-1">核心价值</p>
                    <p className="text-xl font-bold text-gradient">
                      让每一位患者重获行动自由
                    </p>
                  </div>

                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                    系统特性
                  </h4>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {applications[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                      <span>了解医疗解决方案</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="lg" className="group border-rose-500/50 text-rose-400 hover:bg-rose-500/10">
                      <Play className="w-5 h-5" />
                      <span>观看案例视频</span>
                    </Button>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="relative min-h-[400px] lg:min-h-[600px] bg-gradient-to-br from-rose-950/50 to-slate-900/80 flex items-center justify-center">
                  <div className="absolute w-96 h-96 bg-rose-500 opacity-20 blur-3xl animate-pulse" />
                  
                  {/* Medical Robot Illustration */}
                  <div className="relative z-10 p-8">
                    <div className="relative">
                      {/* Robot Body */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-64 h-80 mx-auto"
                      >
                        <div className="glass rounded-3xl p-6 border border-rose-500/30 backdrop-blur-xl">
                          <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                              <Heart className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="h-3 bg-rose-500/30 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-rose-500 to-pink-500"
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 2, delay: 0.5 }}
                              />
                            </div>
                            <p className="text-xs text-slate-400 text-center">康复进度 85%</p>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <div className="bg-slate-800/50 rounded-lg p-2 text-center">
                                <p className="text-xl font-bold text-rose-400">1,280</p>
                                <p className="text-xs text-slate-500">今日步数</p>
                              </div>
                              <div className="bg-slate-800/50 rounded-lg p-2 text-center">
                                <p className="text-xl font-bold text-green-400">正常</p>
                                <p className="text-xs text-slate-500">步态分析</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-rose-500/50 rounded-full animate-ping" />
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 border border-pink-500/30 rounded-lg transform rotate-12" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Other Applications Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {applications.slice(1).map((app) => (
            <ApplicationCard key={app.id} app={app} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="overflow-hidden border-dashed border-2 border-cyan-500/30 bg-gradient-to-r from-cyan-950/50 to-purple-950/50">
            <CardContent className="p-8 lg:p-12">
              <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                你的具身化需求，我们都能实现
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                无论是医疗、教育、工业还是生活领域，辰龙OS + RK3588 都能为你提供
                高性价比、易于开发的具身智能解决方案
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="group">
                  <span>定制你的具身方案</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  <span>查看更多案例</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ApplicationCard({ app }: { app: (typeof applications)[0] }) {
  const Icon = app.icon;

  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full overflow-hidden group hover-card">
        <CardContent className="p-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            {app.subtitle}
          </span>
          <h3 className="text-lg font-bold text-white mt-1 mb-3">{app.title}</h3>
          
          <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
            {app.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <div>
              <p className="text-2xl font-bold text-gradient" style={{ fontFamily: "var(--font-orbitron)" }}>
                {app.stats.value}
              </p>
              <p className="text-xs text-slate-500">{app.stats.label}</p>
            </div>
            <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
              <span className="text-sm">了解更多</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
