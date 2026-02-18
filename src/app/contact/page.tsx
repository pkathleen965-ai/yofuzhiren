"use client";

import Navigation from "../components/Navigation";
import { FadeIn } from "../components/Animations";
import ContactForm from "../components/ContactForm";
import { TaijiSymbol, BaguaSymbol, Divider } from "../components/TaoistSymbols";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: "💬",
    title: "微信咨询",
    content: "youfuzhiren",
    desc: "添加微信，获取一对一咨询",
    color: "bg-green-500",
  },
  {
    icon: "📱",
    title: "电话咨询",
    content: "400-888-8888",
    desc: "工作日 9:00-18:00",
    color: "bg-blue-500",
  },
  {
    icon: "📧",
    title: "邮件咨询",
    content: "hello@yofuzhiren.com",
    desc: "24小时内回复",
    color: "bg-amber-500",
  },
];

const socialLinks = [
  { name: "微信公众号", icon: "微", color: "bg-green-600", desc: "扫码关注，获取最新资讯" },
  { name: "抖音", icon: "抖", color: "bg-black", desc: "@有符之人" },
  { name: "小红书", icon: "红", color: "bg-red-500", desc: "@有符之人" },
  { name: "微博", icon: "博", color: "bg-red-600", desc: "@有符之人官方" },
];

const faqs = [
  {
    question: "符箓真的有效吗？",
    answer:
      "符箓的效果因人而异，需要诚心诚意，配合自身努力。根据我们的统计，98%的客户都获得了满意的效果。",
  },
  {
    question: "定制符箓需要提供什么信息？",
    answer:
      "一般需要提供姓名、出生日期（农历或阳历）、具体愿望或需求。某些特殊符箓可能需要更多信息，我们会详细告知。",
  },
  {
    question: "符箓多久能见效？",
    answer:
      "根据不同的符箓类型和个人情况，见效时间不同。一般在7-49天之间。我们会在咨询时给出更准确的预估。",
  },
  {
    question: "符箓如何保管和使用？",
    answer:
      "我们会随符箓附上详细的使用说明。一般来说，需要妥善保管，避免污损，保持恭敬的心态。",
  },
  {
    question: "可以退款吗？",
    answer:
      "符箓属于定制文化产品，开光后不退不换。未开光前可以协商处理。我们更注重服务质量，如有问题欢迎随时沟通。",
  },
];

const zhongShengJiBenefits = [
  {
    icon: "💰",
    title: "增旺财运",
    desc: "通过种生基聚气纳财，提升个人财运势能",
  },
  {
    icon: "🏥",
    title: "祛病延年",
    desc: "借助地气滋养，改善身体状况，增强免疫力",
  },
  {
    icon: "📈",
    title: "事业亨通",
    desc: "激活生命能量，助力事业腾飞，贵人相助",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "家庭和睦",
    desc: "调和家庭气场，增进家人感情，家宅平安",
  },
  {
    icon: "🎯",
    title: "贵人扶持",
    desc: "增强人际运势，得贵人相助，逢凶化吉",
  },
  {
    icon: "⚖️",
    title: "趋吉避凶",
    desc: "化解命中劫数，转危为安，逢凶化吉",
  },
];

const zhongShengJiProcess = [
  {
    step: "01",
    title: "命理分析",
    desc: "根据生辰八字，详细分析命理格局，确定种生基的方位与时机",
  },
  {
    step: "02",
    title: "寻龙点穴",
    desc: "由专业师傅实地勘测，寻找藏风聚气之风水宝地",
  },
  {
    step: "03",
    title: "择吉日时",
    desc: "选择黄道吉日，配合天时地利，确保仪式效果最大化",
  },
  {
    step: "04",
    title: "准备材料",
    desc: "收集贴身物品（头发、指甲等），并进行净化处理",
  },
  {
    step: "05",
    title: "开坛作法",
    desc: "依循古法，举行种生基仪式，注入灵气能量",
  },
  {
    step: "06",
    title: "后续维护",
    desc: "定期祭拜养护，确保生基灵气不衰，持续发挥效力",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Navigation />

      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#8B4513] to-[#6B4423] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif">
                联系我们
              </h1>
              <p className="text-xl sm:text-2xl text-amber-200">
                传承符道文化 · 开启幸福人生
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 -mt-20 relative z-10">
              {contactInfo.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center border border-gray-100">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#8B4513] mb-2">{item.title}</h3>
                    <p className="text-xl font-bold text-gray-800 mb-2">{item.content}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Social */}
        <section id="contact-form" className="py-16 sm:py-20 bg-[#F5F3EF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <FadeIn direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-[#8B4513] mb-4 font-serif">
                    在线咨询
                  </h2>
                  <p className="text-gray-600 mb-8">
                    填写以下表单，我们会尽快与您联系
                  </p>
                  <ContactForm />
                </div>
              </FadeIn>

              {/* Social Links & QR Codes */}
              <FadeIn direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-[#8B4513] mb-4 font-serif">
                    关注我们
                  </h2>
                  <p className="text-gray-600 mb-8">
                    扫码关注，获取更多符道文化资讯
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {socialLinks.map((social, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-6 text-center shadow-sm"
                      >
                        <div
                          className={`w-16 h-16 ${social.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-white text-2xl font-bold`}
                        >
                          {social.icon}
                        </div>
                        <h3 className="font-bold text-gray-800 mb-1">{social.name}</h3>
                        <p className="text-sm text-gray-500">{social.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Working Hours */}
                  <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-[#8B4513] mb-4">工作时间</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">周一至周五</span>
                        <span className="font-medium">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">周六</span>
                        <span className="font-medium">10:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">周日</span>
                        <span className="font-medium">休息</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 种生基专属服务 */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#1a0f0a] via-[#2C1810] to-[#3E2723] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <BaguaSymbol size={600} className="text-amber-400 absolute -top-40 -right-40" />
            <TaijiSymbol size={300} className="text-amber-400 absolute -bottom-20 -left-20" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl">🏔️</span>
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-serif">
                  种生基 · 改命转运秘法
                </h2>
                <Divider className="my-6" />
                <p className="text-xl text-amber-200 max-w-3xl mx-auto leading-relaxed">
                  种生基，又称"寿坟"、"生基"，是道家千年秘传的改命转运之法。
                  通过将生人的贴身物品埋藏于风水宝地，借助天地灵气滋养生命能量，
                  达到趋吉避凶、增旺运势的效果。
                </p>
              </div>
            </FadeIn>

            {/* Benefits */}
            <div className="mb-20">
              <FadeIn>
                <h3 className="text-2xl font-bold text-center mb-10 font-serif text-amber-400">
                  种生基六大功效
                </h3>
              </FadeIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {zhongShengJiBenefits.map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-amber-500/20 hover:border-amber-400/40 transition-all"
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h4 className="text-xl font-bold text-amber-400 mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <FadeIn>
                <h3 className="text-2xl font-bold text-center mb-10 font-serif text-amber-400">
                  种生基服务流程
                </h3>
              </FadeIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {zhongShengJiProcess.map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="relative">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-amber-500/10 hover:border-amber-400/30 transition-all h-full">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-amber-400 mb-2">{item.title}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Notice */}
            <FadeIn>
              <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-6 sm:p-8 mb-10">
                <h4 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <span>⚠️</span> 重要提示
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span>种生基需选择风水宝地，非随意可为之，需由专业师傅勘测选址</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span>种生基效果因人而异，需配合个人命理及后天努力</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span>种生基后需定期祭拜维护，确保灵气不衰</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span>本服务为传统文化传承项目，仅限有缘人预约</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn>
              <div className="text-center">
                <p className="text-amber-200 mb-6 text-lg">
                  种生基为高端定制服务，名额有限，需提前预约咨询
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="#contact-form"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-amber-500/30 transition-all"
                  >
                    立即预约咨询
                  </motion.a>
                  <motion.a
                    href="https://www.women999.top/fashi"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 border-2 border-amber-500 text-amber-400 rounded-full font-bold text-lg hover:bg-amber-500/10 transition-all"
                  >
                    了解更多法事服务
                  </motion.a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#8B4513] mb-4 font-serif">
                常见问题
              </h2>
              <p className="text-center text-gray-600 mb-12">
                您可能想知道的问题
              </p>
            </FadeIn>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-[#F5F3EF] rounded-xl p-6">
                    <h3 className="font-bold text-[#8B4513] mb-3 flex items-start gap-2">
                      <span className="text-amber-600">Q:</span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 sm:py-20 bg-[#F5F3EF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-8 font-serif">
                到访我们
              </h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-80 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-5xl mb-2">📍</div>
                    <p>地图加载中...</p>
                    <p className="text-sm mt-2">地址：北京市朝阳区符道文化中心</p>
                  </div>
                </div>
              </div>
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
