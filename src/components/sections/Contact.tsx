"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Building,
  MessageSquare,
  FileText,
  CheckCircle,
  Cpu,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  "辰龙OS技术培训",
  "优先体验新功能",
  "免费开发支持",
  "合作优惠价格",
  "定制化解决方案",
  "品牌联合推广",
];

const contactMethods = [
  {
    icon: Mail,
    label: "商务合作",
    value: "contact@aijuxiang.com",
    description: "产品咨询与商务洽谈",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: MessageSquare,
    label: "技术支持",
    value: "tech@aijuxiang.com",
    description: "技术问题与开发指导",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Phone,
    label: "咨询热线",
    value: "400-888-8888",
    description: "工作日 9:00-18:00",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl" />

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
            <span className="text-sm font-medium text-cyan-300">合作共赢</span>
          </div>
          <h2
            className="text-responsive-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            成为合作伙伴
          </h2>
          <p className="text-responsive-base text-slate-400 max-w-2xl mx-auto">
            无论你是工厂、医院、学校还是创业者
            <br />
            我们期待与你共同探索具身智能的无限可能
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden relative">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-pink-500/20 opacity-50" />
              
              <CardContent className="relative p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">辰龙OS生态合作计划</h3>
                    <p className="text-sm text-slate-400">工厂 · 医疗 · 教育 · 创业者</p>
                  </div>
                </div>

                <p className="text-slate-400 mb-8 leading-relaxed">
                  如果你有具身智能应用需求，或希望基于辰龙OS + RK3588平台开发产品，
                  我们诚邀你加入开源AI具象师生态合作计划，共同推动具身智能落地应用。
                </p>

                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                  合作伙伴专属权益
                </h4>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group flex-1">
                    <FileText className="w-5 h-5" />
                    <span>提交合作申请</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <span>了解更多详情</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-4 rounded-xl ${method.bgColor}`}>
                          <Icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 mb-1">{method.label}</p>
                          <p className="text-xl font-semibold text-white mb-1">
                            {method.value}
                          </p>
                          <p className="text-sm text-slate-400">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl bg-pink-500/10">
                      <MapPin className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">公司地址</p>
                      <p className="text-lg font-semibold text-white mb-1">
                        北京市XX区科技园
                      </p>
                      <p className="text-sm text-slate-400">
                        创新大厦 A 座 1688 号
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-cyan-400">
                        <Building className="w-4 h-4" />
                        <span>辰龙OS生态成员</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Slogan Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-cyan-950/80 to-purple-950/80 border-cyan-500/30">
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-cyan-400 italic mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                    &ldquo;Show your vision, and it&apos;s implemented in an instant.&rdquo;
                  </p>
                  <p className="text-slate-400 text-sm">
                    展示构想，瞬间实现
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
