"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mic,
  Wand2,
  Boxes,
  Rocket,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Play,
  Code2,
  MousePointer,
  MessageSquare,
  Zap,
  Building2,
  User,
  Store,
  GraduationCap,
  FlaskConical,
  Heart,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    icon: Mic,
    title: "描述你的想法",
    subtitle: "Show Your Idea",
    description: "用自然语言描述你想实现的场景，无需任何技术背景",
    example: "\"我想做一个能帮老人翻身的护理机器人\"",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    icon: Wand2,
    title: "AI 理解生成",
    subtitle: "AI Generation",
    description: "AI 自动理解需求，生成功能模块和动作序列",
    example: "正在分析需求...生成护理动作库...",
    color: "text-purple-400",
    bgColor: "bg-purple-500",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: Boxes,
    title: "可视化编辑",
    subtitle: "Visual Editor",
    description: "通过拖拽式界面微调参数，所见即所得",
    example: "调整翻身角度、力度、速度...",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: 4,
    icon: Rocket,
    title: "部署商业化",
    subtitle: "Deploy & Monetize",
    description: "一键部署到辰龙设备，快速实现商业落地",
    example: "产品已就绪，开始销售！",
    color: "text-amber-400",
    bgColor: "bg-amber-500",
    gradient: "from-amber-500 to-orange-500",
  },
];

const useCases = [
  {
    icon: GraduationCap,
    title: "学生 / 教育学习者",
    description: "从中小学STEAM教育到高等院校专业课程，提供从入门到精通的完整学习路径",
    benefits: ["零基础友好入门", "循序渐进课程体系", "动手实践项目", "技能认证证书"],
    highlight: true,
  },
  {
    icon: FlaskConical,
    title: "科研实验室 / 高校",
    description: "为科研项目提供快速原型验证能力，支持论文复现和创新实验",
    benefits: ["科研级精度控制", "实验数据可视化", "论文级输出支持", "跨学科协作"],
    highlight: true,
  },
  {
    icon: Heart,
    title: "医疗康复机构",
    description: "专业医疗康复解决方案，助力患者康复训练和医疗辅助设备开发",
    benefits: ["医疗级安全标准", "康复方案定制", "远程监护支持", "数据分析报告"],
    highlight: true,
  },
  {
    icon: User,
    title: "创客 / 创意开发者",
    description: "将你的创意作品通过平台展示、获得认可，并实现商业化输出",
    benefits: ["作品展示平台", "创意变现通道", "投资对接机会", "社区曝光推广"],
    highlight: false,
  },
  {
    icon: Store,
    title: "产品需求方",
    description: "快速找到符合需求的技术产品、解决方案或专业人才",
    benefits: ["精准产品匹配", "人才库对接", "定制开发服务", "技术咨询支持"],
    highlight: false,
  },
  {
    icon: Building2,
    title: "企业 / 集成商",
    description: "高效交付客户项目，缩短开发周期，拓展业务边界",
    benefits: ["项目周期短", "可复用模块库", "全程技术支持", "商业授权灵活"],
    highlight: false,
  },
];

export default function LowCodePlatform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="low-code"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900"
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
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">零代码开发平台</span>
          </div>
          <h2
            className="text-responsive-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            说出想法，即刻实现
          </h2>
          <p className="text-responsive-base text-slate-400 max-w-3xl mx-auto">
            无论你是普通个体还是工厂老板，都能通过我们的低代码/无代码平台
            <br className="hidden md:block" />
            将构思的场景快速转化为可运行的具身智能产品
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Steps Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.gradient} text-white shadow-lg scale-105`
                      : "glass text-slate-400 hover:text-white hover:scale-102"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeStep === index ? "bg-white/20" : "bg-slate-800"
                  }`}>
                    <span className="font-bold text-sm">{step.id}</span>
                  </div>
                  <Icon className="w-5 h-5" />
                  <span className="font-medium hidden sm:inline">{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Step Content */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Description */}
                <div className="p-8 lg:p-12">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {(() => {
                      const StepIcon = steps[activeStep].icon;
                      return (
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${steps[activeStep].gradient} mb-6`}>
                          <StepIcon className="w-4 h-4 text-white" />
                          <span className="text-sm font-medium text-white">Step {steps[activeStep].id}</span>
                        </div>
                      );
                    })()}

                    <h3 className="text-3xl font-bold text-white mb-2">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-slate-500 uppercase tracking-wider text-sm mb-6">
                      {steps[activeStep].subtitle}
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                      {steps[activeStep].description}
                    </p>

                    <div className="glass rounded-xl p-4 mb-8 border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-500">示例</span>
                      </div>
                      <p className={`text-lg font-medium ${steps[activeStep].color}`}>
                        {steps[activeStep].example}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Button size="lg" className="group">
                        <Mic className="w-5 h-5" />
                        <span>开始描述你的想法</span>
                      </Button>
                      <Button variant="outline" size="lg" className="group">
                        <Play className="w-5 h-5" />
                        <span>观看教程</span>
                      </Button>
                    </div>
                  </motion.div>
                </div>

                {/* Right - Visual */}
                <div className="relative min-h-[500px] bg-gradient-to-br from-slate-800/50 to-slate-900/80 flex items-center justify-center">
                  <div className={`absolute w-80 h-80 ${steps[activeStep].bgColor} opacity-20 blur-3xl`} />
                  
                  <motion.div
                    key={`visual-${activeStep}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 p-8 w-full max-w-md"
                  >
                    {activeStep === 0 && <ShowInputVisual />}
                    {activeStep === 1 && <AIGenerationVisual />}
                    {activeStep === 2 && <VisualEditorVisual />}
                    {activeStep === 3 && <DeploymentVisual />}
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Use Cases - Education & Medical Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">教育 & 医疗优先</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              全方位支持各类用户
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              以<span className="text-purple-400 font-semibold">教育领域</span>和<span className="text-rose-400 font-semibold">医疗领域</span>为核心目标，
              提供从入门学习到高阶精进的完整支持体系
            </p>
          </div>

          {/* Primary Users - Education & Medical */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 text-center">
              核心服务对象
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {useCases.filter(u => u.highlight).map((useCase, index) => {
                const Icon = useCase.icon;
                const isEducation = useCase.title.includes("学生") || useCase.title.includes("科研");
                const isMedical = useCase.title.includes("医疗");
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`h-full hover-card relative overflow-hidden ${
                      isEducation ? "border-purple-500/30" : isMedical ? "border-rose-500/30" : "border-cyan-500/30"
                    }`}>
                      {/* Highlight Badge */}
                      <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-medium rounded-bl-lg ${
                        isEducation ? "bg-purple-500/20 text-purple-400" : 
                        isMedical ? "bg-rose-500/20 text-rose-400" : "bg-cyan-500/20 text-cyan-400"
                      }`}>
                        <Star className="w-3 h-3 inline mr-1" />
                        重点领域
                      </div>
                      <CardContent className="p-6 pt-8">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                          isEducation ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20" :
                          isMedical ? "bg-gradient-to-br from-rose-500/20 to-pink-500/20" :
                          "bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                        }`}>
                          <Icon className={`w-7 h-7 ${
                            isEducation ? "text-purple-400" : isMedical ? "text-rose-400" : "text-cyan-400"
                          }`} />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{useCase.title}</h4>
                        <p className="text-sm text-slate-400 mb-4">{useCase.description}</p>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                              <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                                isEducation ? "text-purple-400" : isMedical ? "text-rose-400" : "text-green-400"
                              }`} />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Secondary Users - Creators & Business */}
          <div>
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 text-center">
              创意展示 & 商业对接
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {useCases.filter(u => !u.highlight).map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover-card">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">{useCase.title}</h4>
                        <p className="text-sm text-slate-400 mb-3">{useCase.description}</p>
                        <ul className="space-y-1.5">
                          {useCase.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Education Path Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-purple-500/30 bg-gradient-to-r from-purple-950/50 to-slate-900/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">教育领域全链路支持</h3>
                  <p className="text-sm text-slate-400">从简单入手到高阶精进</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { level: "入门", title: "STEAM启蒙", desc: "中小学趣味实验", icon: "🎓" },
                  { level: "进阶", title: "专业学习", desc: "高校课程实践", icon: "📚" },
                  { level: "高阶", title: "科研创新", desc: "实验室级项目", icon: "🔬" },
                  { level: "商业", title: "作品输出", desc: "展示与变现", icon: "🚀" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="glass rounded-xl p-4 h-full">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-xs text-purple-400 font-medium mb-1">{item.level}</div>
                      <div className="text-white font-semibold mb-1">{item.title}</div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-purple-500/50">
                        →
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="overflow-hidden bg-gradient-to-r from-cyan-950/80 to-purple-950/80 border-2 border-cyan-500/30">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    准备好将你的想法变成现实了吗？
                  </h3>
                  <p className="text-slate-400">
                    免费注册，立即开始你的 AI 具象化之旅
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="xl" className="group whitespace-nowrap">
                    <Zap className="w-5 h-5" />
                    <span>免费开始创建</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="xl" className="whitespace-nowrap">
                    <span>预约演示</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Visual Components for each step
function ShowInputVisual() {
  return (
    <div className="glass rounded-2xl p-6 border border-cyan-500/30">
      <div className="flex items-center justify-center mb-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
        >
          <Mic className="w-12 h-12 text-white" />
        </motion.div>
      </div>
      <div className="space-y-3">
        <motion.div
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
        />
        <p className="text-center text-slate-300 text-sm">正在聆听...</p>
        <div className="glass rounded-lg p-3 text-center">
          <p className="text-cyan-400 text-sm">&ldquo;我想做一个能帮老人翻身的护理机器人&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

function AIGenerationVisual() {
  return (
    <div className="glass rounded-2xl p-6 border border-purple-500/30">
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center"
        >
          <Wand2 className="w-5 h-5 text-white" />
        </motion.div>
        <div>
          <p className="text-white font-medium">AI 正在分析...</p>
          <p className="text-xs text-slate-500">理解需求并生成方案</p>
        </div>
      </div>
      <div className="space-y-3">
        {["识别场景：老人护理", "分析动作：翻身辅助", "生成模块：力度控制"].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.5 }}
            className="flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-slate-300">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VisualEditorVisual() {
  return (
    <div className="glass rounded-2xl p-6 border border-emerald-500/30">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-xs text-slate-500 ml-2">可视化编辑器</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">翻身角度</span>
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-emerald-500" />
            </div>
            <span className="text-sm text-emerald-400">45°</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">力度等级</span>
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-emerald-500" />
            </div>
            <span className="text-sm text-emerald-400">中等</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">执行速度</span>
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-emerald-500" />
            </div>
            <span className="text-sm text-emerald-400">平稳</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <MousePointer className="w-4 h-4 text-emerald-400" />
        <span className="text-xs text-slate-500">拖拽调整参数</span>
      </div>
    </div>
  );
}

function DeploymentVisual() {
  return (
    <div className="glass rounded-2xl p-6 border border-amber-500/30">
      <div className="flex items-center justify-center mb-6">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center"
        >
          <Rocket className="w-10 h-10 text-white" />
        </motion.div>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-sm text-slate-300">功能测试通过</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-sm text-slate-300">安全认证完成</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-sm text-slate-300">已部署到设备</span>
        </div>
      </div>
      <div className="bg-amber-500/20 rounded-lg p-3 text-center">
        <p className="text-amber-400 font-medium">🎉 产品已就绪！</p>
        <p className="text-xs text-slate-500 mt-1">开始你的商业之旅</p>
      </div>
    </div>
  );
}
