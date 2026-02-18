"use client";

import Navigation from "../components/Navigation";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { motion } from "framer-motion";

const categories = ["全部", "感情修复", "事业财运", "学业进步", "家庭和睦", "健康平安"];

const cases = [
  {
    id: 1,
    name: "李女士",
    avatar: "李",
    category: "感情修复",
    result: "感情修复成功",
    content:
      "和男友拍拖三年分手五次，最近一次吵得非常僵硬，各種聯繫方式拉黑，發誓不再复合；經過符道和合术调理，第6週後他主動找我和好了，感恩有符之人。",
    service: "和合符",
    duration: "6周",
  },
  {
    id: 2,
    name: "王先生",
    avatar: "王",
    category: "事业财运",
    result: "事业晋升",
    content:
      "在公司努力工作5年，基本每年优秀，本来有机会晋升主管，但是遇到小人是非阻碍；经过防小人、开运招财指导后，使用驱邪符、文昌符、驱小人、转运符的化解，顺利坐上主管职位。",
    service: "防小人符 + 招财符",
    duration: "3个月",
  },
  {
    id: 3,
    name: "张女士",
    avatar: "张",
    category: "家庭和睦",
    result: "家庭和睦",
    content:
      "结婚后老公出轨有小三，经常深夜才回家；自从做了斩桃花、夫妻和合术后，不到两个月老公就不再搞婚外情，现在家庭关系明显改善，感谢老师的指导。",
    service: "斩桃花符",
    duration: "2个月",
  },
  {
    id: 4,
    name: "陈同学",
    avatar: "陈",
    category: "学业进步",
    result: "学业进步",
    content:
      "面临高考压力巨大，学业停滞不前。请了文昌符之后，心态平稳，成绩稳步提升，最后考上了理想的大学。真的很神奇！",
    service: "文昌符",
    duration: "1学期",
  },
  {
    id: 5,
    name: "刘先生",
    avatar: "刘",
    category: "事业财运",
    result: "生意兴隆",
    content:
      "自己开店做生意，但生意一直不温不火。经过招财符调理后，店铺客流量明显增加，营业额提升了近50%，现在生意越来越红火。",
    service: "招财符",
    duration: "2个月",
  },
  {
    id: 6,
    name: "赵女士",
    avatar: "赵",
    category: "健康平安",
    result: "平安顺利",
    content:
      "经常需要出差，总觉得心神不宁。佩戴平安符后，每次出行都感觉安心许多，工作顺利，身体健康，感谢有符之人的护佑。",
    service: "平安符",
    duration: "长期佩戴",
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Navigation />

      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#8B4513] to-[#6B4423] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif">
                真实案例分享
              </h1>
              <p className="text-xl sm:text-2xl text-amber-200">
                数以千计的成功案例，见证符箓效果
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "5000+", label: "服务客户" },
                { number: "98%", label: "满意度" },
                { number: "10+", label: "年行业经验" },
                { number: "24h", label: "响应时间" },
              ].map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-16 sm:py-20 bg-[#F5F3EF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Categories */}
            <FadeIn>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      index === 0
                        ? "bg-[#8B4513] text-white"
                        : "bg-white text-gray-700 hover:bg-amber-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Cases */}
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cases.map((item) => (
                <StaggerItem key={item.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all h-full flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#8B4513] text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.avatar}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#8B4513]">{item.name}</h3>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                        {item.result}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                      "{item.content}"
                    </p>

                    <div className="pt-4 border-t border-gray-100 text-sm">
                      <div className="flex justify-between text-gray-500">
                        <span>服务: {item.service}</span>
                        <span>周期: {item.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Load More */}
            <FadeIn>
              <div className="text-center mt-12">
                <button className="px-8 py-3 border-2 border-[#8B4513] text-[#8B4513] rounded-full hover:bg-[#8B4513] hover:text-white transition-all duration-300">
                  加载更多案例
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials Video Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#8B4513] mb-4 font-serif">
                客户心声
              </h2>
              <p className="text-center text-gray-600 mb-12">
                听听他们怎么说
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn>
                <div className="bg-[#F5F3EF] rounded-xl p-8 text-center">
                  <div className="w-full aspect-video bg-gradient-to-br from-[#8B4513] to-[#6B4423] rounded-lg flex items-center justify-center mb-4">
                    <div className="text-white text-center">
                      <div className="text-5xl mb-2">▶</div>
                      <p className="text-sm">客户分享视频</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#8B4513] mb-2">李女士的分享</h3>
                  <p className="text-sm text-gray-600">感情修复成功案例</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-[#F5F3EF] rounded-xl p-8 text-center">
                  <div className="w-full aspect-video bg-gradient-to-br from-[#8B4513] to-[#6B4423] rounded-lg flex items-center justify-center mb-4">
                    <div className="text-white text-center">
                      <div className="text-5xl mb-2">▶</div>
                      <p className="text-sm">客户分享视频</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#8B4513] mb-2">王先生的分享</h3>
                  <p className="text-sm text-gray-600">事业晋升成功案例</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Submit Case CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#8B4513] to-[#6B4423] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-serif">
                您也有故事想分享吗？
              </h2>
              <p className="text-amber-200 mb-8 text-lg">
                如果您通过我们的服务获得了帮助，欢迎分享您的故事，让更多人了解符道文化的力量
              </p>
              <button className="px-10 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-all duration-300 font-medium text-lg shadow-lg">
                提交我的故事
              </button>
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
