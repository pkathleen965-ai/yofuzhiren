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
    title: "招财进宝",
    desc: "更多商业机会，出门遇贵人，财运亨通",
  },
  {
    icon: "🏥",
    title: "延年益寿",
    desc: "增强生命力，改善身体状况，精神充沛",
  },
  {
    icon: "💕",
    title: "姻缘美满",
    desc: "改善爱情运，缔结美好姻缘，家庭幸福",
  },
  {
    icon: "👶",
    title: "添丁旺子",
    desc: "促进子嗣缘份，家庭人丁兴旺",
  },
  {
    icon: "📚",
    title: "启智开慧",
    desc: "提升智慧，学业进步，思维敏捷",
  },
  {
    icon: "📈",
    title: "催官进禄",
    desc: "事业亨通，贵人扶持，官运亨通",
  },
  {
    icon: "✨",
    title: "转运改命",
    desc: "改变运势，逢凶化吉，趋吉避凶",
  },
  {
    icon: "💪",
    title: "元气充沛",
    desc: "吸收大地磁场，精力旺盛，正能量满满",
  },
];

const fengShuiElements = [
  {
    name: "龙",
    icon: "🐉",
    desc: "选择有龙脉之地，象征活力。龙被认为呼吸宇宙生命进入土地，与权力、尊严、繁荣相连。",
  },
  {
    name: "穴",
    icon: "🌀",
    desc: "寻找真穴之处，是风水学中最具挑战性的环节，需要专业师傅实地勘测确认。",
  },
  {
    name: "砂",
    icon: "🏔️",
    desc: "代表周围的山势环境，形成藏风聚气的格局，护卫生基灵气不散。",
  },
  {
    name: "水",
    icon: "💧",
    desc: "表示寿命与财运，水流环绕生基，寓意财源滚滚，福泽绵长。",
  },
  {
    name: "向",
    icon: "🧭",
    desc: "指方位朝向，需配合个人命理，选择最佳坐向，接收天地灵气。",
  },
];

const zhongShengJiProcess = [
  {
    step: "01",
    title: "风水选址",
    desc: "由专业风水师勘测，寻找藏风聚气之风水宝地，确认龙脉真穴",
  },
  {
    step: "02",
    title: "命理分析",
    desc: "根据生辰八字详细分析，确定种生基的最佳方位、时机与方式",
  },
  {
    step: "03",
    title: "择吉日时",
    desc: "选择黄道吉日良辰，配合天时地利，确保仪式效果最大化",
  },
  {
    step: "04",
    title: "准备物品",
    desc: "收集头发、指甲、贴身衣物等物品，连同生辰八字一同净化处理",
  },
  {
    step: "05",
    title: "开坛作法",
    desc: "依循古法举行种生基仪式，诵经祈福，注入灵气能量",
  },
  {
    step: "06",
    title: "诵经加持",
    desc: "可选连续诵经49天，达到最佳效果，持续为生基注入能量",
  },
  {
    step: "07",
    title: "后续养护",
    desc: "定期祭拜维护，行善积德，确保生基灵气不衰，持续发挥效力",
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
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl text-amber-200 leading-relaxed mb-4">
                    <strong className="text-white">种生基</strong>，乃{"\""}生命的根基{"\""}，是阴宅风水学之精髓。
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    运用<strong className="text-amber-400">天地灵气</strong>，将生人的头发、牙齿、皮肤、指甲、衣物，连同生辰八字埋入风水龙穴中。毛发、指甲、精血里的DNA能与地气相应，感应到当事人身上，使其直接吸收大地磁场和宇宙自然能量。
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    这门独特的风水技术源于中国江西，在港澳台、新加坡、马来西亚等地广受道教信徒欢迎。
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Benefits */}
            <div className="mb-20">
              <FadeIn>
                <h3 className="text-2xl font-bold text-center mb-10 font-serif text-amber-400">
                  种生基八大功效
                </h3>
              </FadeIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {zhongShengJiBenefits.map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-amber-500/20 hover:border-amber-400/40 transition-all"
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h4 className="text-lg font-bold text-amber-400 mb-1">{item.title}</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* 风水五要素 */}
            <div className="mb-20">
              <FadeIn>
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold font-serif text-amber-400 mb-4">
                    风水选址五要素
                  </h3>
                  <p className="text-gray-400 text-sm">龙、穴、砂、水、向，缺一不可</p>
                </div>
              </FadeIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {fengShuiElements.map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-b from-amber-900/30 to-transparent rounded-xl p-5 border border-amber-500/20 text-center"
                    >
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h4 className="text-2xl font-bold text-amber-400 mb-2">{item.name}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* 种生基原理 */}
            <FadeIn>
              <div className="mb-16 bg-white/5 rounded-xl p-6 sm:p-8 border border-amber-500/20">
                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <span>🔮</span> 种生基的原理
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  种生基最初起源于中国东南部的江西省，包括为活人创建一个假墓，让当事人可以从宇宙中吸取"气"用来增强寿命。
                </p>
                <p className="text-gray-300 leading-relaxed">
                  利用自然环境和自然的力量，风水好的生坟，据说可以通过纠正你生命线或命运过程中的不完善，来造福于当事人。通过埋葬当事人的发肤或贴身物品，当事人将从土地吸收良好的元素，以及周边环境中所有的善良和富足。
                </p>
              </div>
            </FadeIn>

            {/* Process */}
            <div className="mb-16">
              <FadeIn>
                <h3 className="text-2xl font-bold text-center mb-10 font-serif text-amber-400">
                  种生基服务流程
                </h3>
              </FadeIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {zhongShengJiProcess.map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="relative">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-amber-500/10 hover:border-amber-400/30 transition-all h-full">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-amber-400 mb-1">{item.title}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
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
                  <span>⚠️</span> 种生基注意事项
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-white mb-2">保密原则</h5>
                    <p className="text-gray-300 text-sm">种生基后建议保密，否则可能影响效果</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-2">行善积德</h5>
                    <p className="text-gray-300 text-sm">鼓励当事人多多行善积德，以增福报</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-2">专业选址</h5>
                    <p className="text-gray-300 text-sm">需由专业师傅勘测选址，非随意可为之</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-2">定期维护</h5>
                    <p className="text-gray-300 text-sm">定期祭拜养护，确保灵气不衰</p>
                  </div>
                </div>
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
