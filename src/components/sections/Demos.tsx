"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Atom,
  FlaskConical,
  TrendingUp,
  Play,
  ChevronRight,
  Sparkles,
  Heart,
  Factory,
  Package,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const demos = [
  {
    id: 1,
    subject: "医疗康复",
    icon: Heart,
    title: "偏瘫患者步态康复训练",
    description:
      "基于辰龙OS的智能康复机器人，通过精准的运动控制和实时反馈，帮助偏瘫患者重新学习行走。AI实时分析步态，动态调整训练方案。",
    coreValue: "让每一位患者重获行动自由",
    details: [
      "智能步态分析与实时矫正",
      "力反馈自适应调节",
      "康复进度数据可视化",
      "远程医生监控与指导",
    ],
    gradient: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500",
    image: "/demos/medical.png",
  },
  {
    id: 2,
    subject: "智慧工厂",
    icon: Factory,
    title: "柔性生产线自动化配置",
    description:
      "描述生产需求，AI自动生成机器人动作序列。支持快速换线，适应多品种小批量生产模式，降低中小工厂的自动化门槛。",
    coreValue: "让每个工厂都能智能制造",
    details: [
      "配置生产流程",
      "视觉质检自动化",
      "多机器人协同作业",
      "生产数据实时分析",
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500",
    image: "/demos/factory.png",
  },
  {
    id: 3,
    subject: "物流仓储",
    icon: Package,
    title: "智能分拣与搬运系统",
    description:
      "辰龙OS驱动的物流机器人群，实现货物自动分拣、智能搬运和库存盘点。多机协同，大幅提升仓储效率。",
    coreValue: "让物流更智能更高效",
    details: [
      "智能路径规划算法",
      "多机协同避障",
      "货物自动识别分类",
      "库存实时追踪管理",
    ],
    gradient: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500",
    image: "/demos/logistics.png",
  },
  {
    id: 4,
    subject: "物理实验",
    icon: Atom,
    title: "高精度抛物线运动演示",
    description:
      "将抽象的数学公式转化为可观察的真实运动轨迹。学生可以直观看到物体在重力作用下的完美抛物线运动，理解F=ma的物理意义。",
    coreValue: "公式可视化，理论实践结合",
    details: [
      "精确模拟不同初速度的抛物运动",
      "实时测量位移、速度、加速度",
      "参数调整观察变化规律",
      "理论与实测数据对比验证",
    ],
    gradient: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500",
    image: "/demos/physics.png",
  },
  {
    id: 5,
    subject: "化学/生物",
    icon: FlaskConical,
    title: "动态分子结构建模",
    description:
      "机器人手臂实时搭建复杂的分子或蛋白质结构，动态展示微观世界。让抽象的分子结构变得触手可及。",
    coreValue: "微观世界宏观化，抽象概念具象化",
    details: [
      "DNA双螺旋结构实时构建",
      "蛋白质折叠过程演示",
      "化学键形成与断裂可视化",
      "分子间作用力直观展示",
    ],
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500",
    image: "/demos/chemistry.png",
  },
  {
    id: 6,
    subject: "高等数学",
    icon: TrendingUp,
    title: "三维函数曲线描绘",
    description:
      "在空间中具象化复杂的向量场和函数曲线，加深空间概念理解。将二维纸面上的函数延伸到三维真实空间。",
    coreValue: "空间思维培养，抽象数学具象化",
    details: [
      "三维函数曲面精确绘制",
      "向量场流线实时演示",
      "参数方程动态轨迹展示",
      "曲面交线与极值点定位",
    ],
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500",
    image: "/demos/math.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Demos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDemo, setActiveDemo] = useState(0);

  return (
    <section
      id="demos"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />

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
            <span className="text-sm font-medium text-cyan-300">演示场景</span>
          </div>
          <h2
            className="text-responsive-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            具象化应用展示
          </h2>
          <p className="text-responsive-base text-slate-400 max-w-2xl mx-auto">
            从医疗康复到智慧工厂，从物流仓储到教育实验
            <br className="hidden md:block" />
            开源AI具象师让每一个场景都能快速落地
          </p>
        </motion.div>

        {/* Demo Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {demos.map((demo, index) => {
            const Icon = demo.icon;
            return (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.gradient} text-white shadow-lg`
                    : "glass text-slate-400 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium text-sm">{demo.subject}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Demo Content */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              variants={itemVariants}
              className={`${activeDemo === index ? "block" : "hidden"}`}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${demo.gradient}`}
                        >
                          <demo.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                          {demo.subject}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        {demo.title}
                      </h3>

                      <p className="text-slate-400 leading-relaxed mb-6">
                        {demo.description}
                      </p>

                      <div className="glass rounded-xl p-4 mb-8">
                        <p className="text-sm text-slate-500 mb-1">核心价值</p>
                        <p className="text-lg font-semibold text-gradient">
                          {demo.coreValue}
                        </p>
                      </div>

                      <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                        功能亮点
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {demo.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-slate-400"
                          >
                            <ChevronRight
                              className={`w-5 h-5 flex-shrink-0 ${
                                activeDemo === index ? "text-cyan-400" : "text-slate-600"
                              }`}
                            />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="group">
                          <Play className="w-5 h-5" />
                          <span>观看完整演示</span>
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg">
                          <span>获取方案详情</span>
                        </Button>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative min-h-[400px] lg:min-h-[600px] bg-gradient-to-br from-slate-800/50 to-slate-900/80 flex items-center justify-center">
                      <div
                        className={`absolute w-96 h-96 ${demo.bgColor} opacity-20 blur-3xl animate-pulse`}
                      />

                      {/* Placeholder Visual */}
                      <div className="relative z-10 text-center p-8">
                        <motion.div
                          animate={{
                            rotateY: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-48 h-48 mx-auto mb-8 relative"
                        >
                          {/* 3D Cube Wireframe */}
                          <div className="absolute inset-0 border-2 border-cyan-500/30 transform rotate-45 skew-x-12" />
                          <div className="absolute inset-4 border-2 border-purple-500/30 transform -rotate-12 skew-y-6" />
                          <div className="absolute inset-8 border-2 border-pink-500/30 transform rotate-6" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <demo.icon className="w-20 h-20 text-gradient-blue opacity-60" />
                          </div>
                        </motion.div>

                        <div className="glass rounded-xl p-6 max-w-sm mx-auto">
                          <div className="flex items-center gap-2 text-cyan-400 mb-3">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-sm font-medium">实时演示准备中</span>
                          </div>
                          <p className="text-slate-500 text-sm">
                            点击观看完整演示视频，了解{demo.subject}场景的具象化解决方案
                          </p>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-8 right-8 w-16 h-16 border border-cyan-500/20 rounded-lg transform rotate-12" />
                      <div className="absolute bottom-8 left-8 w-12 h-12 border border-purple-500/20 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Demo Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { label: "应用场景", value: "20+", suffix: "" },
            { label: "解决方案", value: "100+", suffix: "" },
            { label: "合作客户", value: "50+", suffix: "" },
            { label: "成功案例", value: "200+", suffix: "" },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-xl p-6 text-center">
              <div
                className="text-3xl lg:text-4xl font-bold text-gradient mb-2"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
