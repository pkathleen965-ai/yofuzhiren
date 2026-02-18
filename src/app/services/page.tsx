"use client";

import Navigation from "../components/Navigation";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "hehe",
    name: "和合符",
    shortDesc: "夫妻情侣感情修复",
    fullDesc: "适用于恋爱中分手、夫妻感情冷淡、婚姻破裂等情况。通过符道调理，帮助修复感情，重新绑定姻缘，让爱情重归于好。",
    icon: "💑",
    duration: "7-21天",
    price: "¥599起",
    suitable: ["分手复合", "感情冷淡", "婚姻危机"],
  },
  {
    id: "zhan-tao-hua",
    name: "斩桃花符",
    shortDesc: "斩断外遇烂桃花",
    fullDesc: "有效减少对方异性人缘，斩断出轨、外遇、小三等现象。帮助化解感情危机，保护婚姻家庭的完整。",
    icon: "🌸",
    duration: "14-30天",
    price: "¥499起",
    suitable: ["伴侣出轨", "第三者介入", "烂桃花多"],
  },
  {
    id: "xiao-ren",
    name: "防小人符",
    shortDesc: "驱除职场是非",
    fullDesc: "驱除身边小人，消除口舌是非，帮助在工作场合或生意场上获得贵人相助，让事业顺风顺水。",
    icon: "🛡️",
    duration: "7-14天",
    price: "¥399起",
    suitable: ["职场是非", "小人当道", "人际关系差"],
  },
  {
    id: "cai-yun",
    name: "招财符",
    shortDesc: "事业财运提升",
    fullDesc: "提升财运，帮助事业腾飞，生意兴隆，职位晋升，财源广进。适合创业者、生意人、职场人士。",
    icon: "💰",
    duration: "21-49天",
    price: "¥599起",
    suitable: ["财运不佳", "事业瓶颈", "创业初期"],
  },
  {
    id: "wen-chang",
    name: "文昌符",
    shortDesc: "学业考试顺利",
    fullDesc: "助学业进步，考试顺利，增强记忆力和理解力。适合学生或需要参加各类考试、面试的人士。",
    icon: "📚",
    duration: "7-14天",
    price: "¥399起",
    suitable: ["考试升学", "学业压力大", "面试求职"],
  },
  {
    id: "tai-sui",
    name: "化太岁符",
    shortDesc: "犯太岁化解祈福",
    fullDesc: "化解犯太岁带来的不利因素，趋吉避凶，让未来一年顺心如意、心想事成。适合本命年或犯太岁人士。",
    icon: "🐉",
    duration: "全年有效",
    price: "¥499起",
    suitable: ["本命年", "犯太岁", "流年不利"],
  },
  {
    id: "an-zhai",
    name: "安宅符",
    shortDesc: "镇宅保家宅平安",
    fullDesc: "镇宅辟邪，保家宅平安，驱除不安因素，让家人安居乐业。适合新居入住、家宅不宁等情况。",
    icon: "🏠",
    duration: "长期有效",
    price: "¥599起",
    suitable: ["新居入住", "家宅不宁", "风水调整"],
  },
  {
    id: "ping-an",
    name: "平安符",
    shortDesc: "护身出行平安",
    fullDesc: "护身保平安，驱邪避灾，保出入平安。适合经常出行、开车、从事高危行业的人士佩戴。",
    icon: "🙏",
    duration: "长期有效",
    price: "¥299起",
    suitable: ["经常出行", "开车人士", "高危行业"],
  },
];

const process = [
  { step: 1, title: "咨询了解", desc: "通过微信或电话详细咨询，了解您的具体需求" },
  { step: 2, title: "选择符种", desc: "根据您的情况，推荐最适合的符箓类型" },
  { step: 3, title: "提供信息", desc: "提供姓名、生日、愿望等必要信息" },
  { step: 4, title: "开光加持", desc: "由法师进行开光仪式，注入符箓能量" },
  { step: 5, title: "快递寄送", desc: "顺丰包邮，附详细使用说明" },
  { step: 6, title: "后续指导", desc: "使用期间的疑问解答和指导" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Navigation />

      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#8B4513] to-[#6B4423] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif">
                符箓文化服务
              </h1>
              <p className="text-xl sm:text-2xl text-amber-200">
                传承千年智慧 · 专业指导 · 文化体验
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#8B4513] mb-4 font-serif">
                我们的服务
              </h2>
              <p className="text-center text-gray-600 mb-12 sm:mb-16">
                专业定制 · 效果显著 · 口碑保障
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => (
                <StaggerItem key={service.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-[#F5F3EF] rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl sm:text-5xl">{service.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#8B4513] font-serif">
                            {service.name}
                          </h3>
                          <span className="text-amber-600 font-medium">{service.price}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{service.fullDesc}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.suitable.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>周期: {service.duration}</span>
                          <Link
                            href="/contact"
                            className="text-[#8B4513] font-medium hover:text-amber-600 transition-colors"
                          >
                            立即咨询 →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-20 bg-[#F5F3EF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#8B4513] mb-12 font-serif">
                服务流程
              </h2>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {process.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#8B4513] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-[#8B4513] mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Notice */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#8B4513] mb-8 font-serif">
                温馨提示
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">1.</span>
                    <span>符箓效果因人而异，需要诚心诚意，配合自身努力。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">2.</span>
                    <span>符箓需妥善保管，不可随意丢弃或污损。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">3.</span>
                    <span>使用期间保持善念，多行善事，效果更佳。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">4.</span>
                    <span>如有疑问，可随时联系我们进行咨询。</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#8B4513] to-[#6B4423] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-serif">
                开始您的符道之旅
              </h2>
              <p className="text-amber-200 mb-8 text-lg">
                无论您有什么困惑，我们都可以为您提供专业的指导
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
              >
                立即咨询
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E2723] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2026 有符之人 · 符道文化传承中心</p>
        </div>
      </footer>
    </div>
  );
}
