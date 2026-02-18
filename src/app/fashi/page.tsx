"use client";

import Navigation from "../components/Navigation";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { motion } from "framer-motion";
import Link from "next/link";

const fashiServices = [
  {
    id: 1,
    name: "安太岁法事",
    subtitle: "安太岁、解太岁、谢太岁",
    desc: "祈福平安，化解流年不利，趋吉避凶，全年护佑",
    icon: "🐉",
    price: "¥888",
    duration: "全年有效",
  },
  {
    id: 2,
    name: "增补财库法事",
    subtitle: "提升时运财运",
    desc: "提升自身的时运与财运，让财源滚滚而来，事业兴旺",
    icon: "💰",
    price: "¥888",
    duration: "长期有效",
  },
  {
    id: 3,
    name: "升职加薪法事",
    subtitle: "工作顺利事业腾飞",
    desc: "工作顺利，事业腾飞，贵人相助，步步高升",
    icon: "📈",
    price: "¥888",
    duration: "3-6个月",
  },
  {
    id: 4,
    name: "斩桃花法事",
    subtitle: "斩断烂桃花守护感情",
    desc: "斩断烂桃花，守护感情婚姻，防止第三者介入",
    icon: "✂️",
    price: "¥888",
    duration: "长期有效",
  },
  {
    id: 5,
    name: "桃花法事",
    subtitle: "锁定缘分促进感情",
    desc: "锁定缘分，促进感情发展，招来正桃花姻缘",
    icon: "🌸",
    price: "¥888",
    duration: "3-6个月",
  },
  {
    id: 6,
    name: "文昌考试法事",
    subtitle: "学业进步考试顺利",
    desc: "学业进步，考试顺利，增强记忆力和理解力",
    icon: "📚",
    price: "¥888",
    duration: "考试季",
  },
  {
    id: 7,
    name: "升官法事",
    subtitle: "仕途升迁官运亨通",
    desc: "仕途升迁，官运亨通，得领导赏识，服众得人缘",
    icon: "👔",
    price: "¥888",
    duration: "6-12个月",
  },
  {
    id: 8,
    name: "开运招财法事",
    subtitle: "提升运气财源广进",
    desc: "提升整体运气，财源广进，生意兴隆",
    icon: "🍀",
    price: "¥888",
    duration: "长期有效",
  },
  {
    id: 9,
    name: "化解小人法事",
    subtitle: "化解小人是非",
    desc: "化解小人，工作场所平安顺利，消除口舌是非",
    icon: "🛡️",
    price: "¥888",
    duration: "长期有效",
  },
  {
    id: 10,
    name: "化解冤亲债主法事",
    subtitle: "破除劫难重获新生",
    desc: "化解冤亲债主，破除劫难，重获新生，转运改命",
    icon: "🙏",
    price: "¥888",
    duration: "长期有效",
  },
  {
    id: 11,
    name: "阴债化解法事",
    subtitle: "还债消灾逢凶化吉",
    desc: "偿还阴债，消灾解难，逢凶化吉，改善运势",
    icon: "🕯️",
    price: "¥888",
    duration: "长期有效",
  },
  {
    id: 12,
    name: "童子化解法事",
    subtitle: "姻缘美满仙灵庇佑",
    desc: "化解童子命，姻缘美满，仙灵庇佑，健康平安",
    icon: "👶",
    price: "¥888",
    duration: "长期有效",
  },
  {
    id: 13,
    name: "种生基法事",
    subtitle: "改命转运增福延寿",
    desc: "改命转运，增福延寿旺财，全面提升人生运势",
    icon: "🌱",
    price: "¥1888",
    duration: "长期有效",
  },
  {
    id: 14,
    name: "礼斗拜斗祈福法事",
    subtitle: "全家安康福运绵长",
    desc: "礼斗拜斗，祈福全家安康，福运绵长，世代平安",
    icon: "⭐",
    price: "¥888",
    duration: "全年有效",
  },
  {
    id: 15,
    name: "婴灵超度法事",
    subtitle: "化解灾厄心灵安宁",
    desc: "超度婴灵，化解灾厄，心灵安宁，家庭和睦",
    icon: "👼",
    price: "¥888",
    duration: "长期有效",
  },
  {
    id: 16,
    name: "太岁灯光明灯供奉",
    subtitle: "祈福增运前程似锦",
    desc: "供奉太岁灯/光明灯，祈福增运，前程似锦，全年护佑",
    icon: "🕯️",
    price: "¥888",
    duration: "全年供奉",
  },
];

export default function FashiPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Navigation />

      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#8B4513] to-[#6B4423] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif">
                道家法事
              </h1>
              <p className="text-xl sm:text-2xl text-amber-200 mb-6">
                千年传承 · 正统道家 · 祈福消灾
              </p>
              <p className="text-base sm:text-lg text-amber-100 max-w-2xl mx-auto">
                有符之人道长师承千年法脉，精通各类道家法事，严格依循传统工艺，
                提供平安、转运、姻缘、文昌等多元法事服务
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#8B4513] mb-4 font-serif">
                法事服务
              </h2>
              <p className="text-center text-gray-600 mb-12 sm:mb-16">
                16种专业法事，满足您不同需求
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fashiServices.map((service) => (
                <StaggerItem key={service.id}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-[#F5F3EF] rounded-xl p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="text-4xl mb-4 text-center">{service.icon}</div>
                    <h3 className="text-lg font-bold text-[#8B4513] mb-1 text-center font-serif">
                      {service.name}
                    </h3>
                    <p className="text-xs text-amber-600 mb-3 text-center">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-gray-500">{service.duration}</span>
                        <span className="text-lg font-bold text-[#8B4513]">{service.price}</span>
                      </div>
                      <Link
                        href="/contact"
                        className="block w-full text-center py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#6B4423] transition-colors text-sm font-medium"
                      >
                        预约下单
                      </Link>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20 bg-[#F5F3EF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#8B4513] mb-12 font-serif">
                为什么选择我们
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📜",
                  title: "千年传承",
                  desc: "师承千年法脉，正统道家传承，严格依循传统工艺",
                },
                {
                  icon: "🎯",
                  title: "专业精准",
                  desc: "根据个人情况量身定制，精准施法，效果显著",
                },
                {
                  icon: "🙏",
                  title: "诚信服务",
                  desc: "诚信为本，用心服务，全程跟踪指导",
                },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.2}>
                  <div className="bg-white p-8 rounded-xl text-center shadow-sm">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-[#8B4513] mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#8B4513] mb-12 font-serif">
                法事流程
              </h2>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "在线咨询", desc: "了解需求，推荐法事" },
                { step: "02", title: "提供信息", desc: "姓名生辰，详细资料" },
                { step: "03", title: "择吉日", desc: "选定良辰，准备法事" },
                { step: "04", title: "施法祈福", desc: "道长施法，虔诚祈福" },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B4513] to-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-[#8B4513] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#8B4513] to-[#6B4423] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-serif">
                预约专业法事服务
              </h2>
              <p className="text-amber-200 mb-8 text-lg">
                如您希望进一步了解，或预约专业法师协助，欢迎联系
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-all duration-300 font-medium text-lg shadow-lg"
                >
                  立即预约
                </Link>
                <a
                  href="tel:400-888-8888"
                  className="px-10 py-4 border-2 border-amber-400 text-amber-400 rounded-full hover:bg-amber-400 hover:text-[#8B4513] transition-all duration-300 font-medium text-lg"
                >
                  电话咨询
                </a>
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
