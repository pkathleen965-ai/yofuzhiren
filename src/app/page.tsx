"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "./components/Navigation";
import { FadeIn, StaggerContainer, StaggerItem, Floating } from "./components/Animations";
import { TaijiSymbol, BaguaSymbol, Divider, FloatingElements } from "./components/TaoistSymbols";

// 法事服务数据
const fashiServices = [
  { id: 1, name: "安太岁法事", desc: "祈福平安，化解流年不利", icon: "🐉", price: "¥888" },
  { id: 2, name: "增补财库", desc: "提升财运，财源滚滚", icon: "💰", price: "¥888" },
  { id: 3, name: "斩桃花", desc: "斩断烂桃花，守护感情", icon: "✂️", price: "¥888" },
  { id: 4, name: "招桃花", desc: "招来正缘，姻缘美满", icon: "🌸", price: "¥888" },
  { id: 5, name: "文昌法事", desc: "学业进步，考试顺利", icon: "📚", price: "¥888" },
  { id: 6, name: "升职加薪", desc: "事业腾飞，步步高升", icon: "📈", price: "¥888" },
  { id: 7, name: "化解小人", desc: "驱除是非，贵人相助", icon: "🛡️", price: "¥888" },
  { id: 8, name: "婴灵超度", desc: "化解灾厄，心灵安宁", icon: "👼", price: "¥888" },
];

// 符箓服务数据
const fuluServices = [
  { name: "和合符", desc: "夫妻情侣感情修复", icon: "💑" },
  { name: "斩桃花符", desc: "斩断外遇烂桃花", icon: "🌸" },
  { name: "防小人符", desc: "驱除职场是非", icon: "🛡️" },
  { name: "招财符", desc: "事业财运提升", icon: "💰" },
  { name: "文昌符", desc: "学业考试顺利", icon: "📚" },
  { name: "化太岁符", desc: "犯太岁化解祈福", icon: "🐉" },
  { name: "安宅符", desc: "镇宅保家宅平安", icon: "🏠" },
  { name: "平安符", desc: "护身出行平安", icon: "🙏" },
];

// 案例数据
const cases = [
  { name: "李女士", content: "和男友分手后各种联系方式被拉黑，经过符道文化指导与调理，第6周后他主动找我和好了。", result: "感情修复成功" },
  { name: "王先生", content: "今年事业运气欠佳，小人是非不断阻挠，经过防小人、开运招财指导后，顺利晋升主管职位。", result: "事业晋升" },
  { name: "张女士", content: "结婚后老公出轨有小三，在老师指导下调整心态、运用符道智慧，不到两个月家庭关系明显改善。", result: "家庭和睦" },
  { name: "陈同学", content: "面临高考压力巨大，学业停滞不前。在老师指导下进行文昌祈福，心态平稳，成绩稳步提升。", result: "学业进步" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Navigation />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2C1810] via-[#5D3A1A] to-[#8B4513] text-white pt-20 overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-10">
            <FloatingElements />
          </div>
          
          {/* 云纹装饰 */}
          <div className="absolute bottom-0 left-0 right-0 text-amber-400/20">
            <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
              <path
                fill="currentColor"
                d="M0,64 C288,120 720,0 1440,64 L1440,120 L0,120 Z"
              />
            </svg>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Floating duration={4}>
              <div className="flex justify-center mb-6">
                <TaijiSymbol size={80} className="text-amber-400" />
              </div>
            </Floating>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-amber-300 text-base sm:text-lg mb-4 tracking-[0.3em] uppercase"
            >
              传承千年道家智慧
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight font-serif"
            >
              有符之人
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl sm:text-3xl mb-4 font-light"
            >
              武当后山符合堂
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-amber-200 mb-8 text-lg max-w-2xl mx-auto"
            >
              师承千年法脉，精通各类道家法事与符箓<br />
              提供安太岁、增补财库、文昌祈福等多元服务
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#fashi" className="px-8 py-3 bg-amber-600 hover:bg-amber-500 rounded-full transition-all font-medium text-lg shadow-lg">
                了解法事
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-amber-400 hover:bg-amber-400 hover:text-[#8B4513] rounded-full transition-all font-medium text-lg">
                预约咨询
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs text-amber-300">向下滚动</span>
                <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center pt-2">
                  <div className="w-1.5 h-3 bg-amber-400 rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== ABOUT SECTION ===== */}
        <section id="about" className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-4 font-serif">
                  关于符道文化
                </h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    「有符之人」秉承千年道家传承，致力于弘扬正统道教符箓文化与法事服务。
                    我们严格依循传统工艺，精心绘制各类灵符，为现代人提供祈福、转运、姻缘、
                    文昌等多元化服务。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    道教符箓源于上古祝由术，历经数千年发展，蕴含着深邃的哲学思想和实践智慧。
                    《黄帝内经》云："古之治病，唯其移精变气，可祝由而已。"符箓的本质，
                    是通过特定的符号与仪式，沟通天地灵气，调整人体能量场，达到祈福消灾、
                    转运改命的效果。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    我们相信，符是福的种子，福是符的显化。每个人都可以通过正统的法事与符箓，
                    获得心灵的安宁与人生的转运。
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 shadow-lg relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-10">
                    <BaguaSymbol size={120} className="text-[#8B4513]" />
                  </div>
                  <div className="text-center relative z-10">
                    <TaijiSymbol size={80} className="text-[#8B4513] mx-auto mb-6" />
                    <blockquote className="text-2xl font-bold text-[#8B4513] mb-4 font-serif">
                      "符是福的种子<br />福是符的显化"
                    </blockquote>
                    <p className="text-gray-600">千年传承 · 正统道家 · 祈福消灾</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ===== THREE MEANINGS ===== */}
        <section className="py-20 sm:py-28 bg-[#F5F3EF] relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute top-10 left-10 opacity-5">
            <BaguaSymbol size={200} className="text-[#8B4513]" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-5">
            <TaijiSymbol size={150} className="text-[#8B4513]" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-4 font-serif">
                  符的三重内涵
                </h2>
                <Divider className="my-6" />
                <p className="text-gray-600">从古至今的文化延伸</p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📜",
                  title: "传统之符",
                  desc: "沟通天地的志向，遵循自然规律，表达对天地之道的顺应与尊重。源于道家祝由术，是古人探索出的能量转化技术。",
                },
                {
                  icon: "🔑",
                  title: "现代之符",
                  desc: `开启系统的开关，是我们内心"幸福系统"的密码。找到自己的符，找到生命的节奏，不再跟随别人的鼓点。`,
                },
                {
                  icon: "✨",
                  title: "未来之符",
                  desc: `生命算法的觉醒，是激活"幸福基因"的指令。帮助我们活出最完整的自己，走向意识路径的觉醒。`,
                },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#8B4513] h-full"
                  >
                    <div className="text-5xl mb-4 text-center">{item.icon}</div>
                    <h3 className="text-xl font-bold text-[#8B4513] mb-3 text-center font-serif">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ===== FASHI SERVICES ===== */}
        <section id="fashi" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-4 font-serif">
                  道家法事
                </h2>
                <Divider className="my-6" />
                <p className="text-gray-600 max-w-2xl mx-auto">
                  师承千年法脉，精通各类道家法事，严格依循传统工艺，
                  提供平安、转运、姻缘、文昌等多元法事服务
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {fashiServices.map((service) => (
                <StaggerItem key={service.id}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-[#F5F3EF] rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer text-center group border border-transparent hover:border-amber-300"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
                    <h3 className="font-bold text-[#8B4513] mb-1">{service.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{service.desc}</p>
                    <p className="text-lg font-bold text-amber-600">{service.price}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="text-center mt-12">
                <Link href="/fashi" className="inline-flex items-center gap-2 px-8 py-3 bg-[#8B4513] text-white rounded-full hover:bg-[#6B4423] transition-all">
                  查看全部16种法事
                  <span>→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===== FULU SERVICES ===== */}
        <section id="services" className="py-20 sm:py-28 bg-[#F5F3EF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-4 font-serif">
                  符箓服务
                </h2>
                <Divider className="my-6" />
                <p className="text-gray-600">传承千年智慧 · 专业指导 · 文化体验</p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {fuluServices.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer text-center group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="font-bold text-[#8B4513] text-sm sm:text-base">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="text-center mt-12">
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#8B4513] text-[#8B4513] rounded-full hover:bg-[#8B4513] hover:text-white transition-all">
                  查看全部符箓
                  <span>→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===== FIVE VIRTUES ===== */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[#8B4513] to-[#6B4423] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <BaguaSymbol size={300} className="text-white absolute -top-20 -right-20" />
            <TaijiSymbol size={200} className="text-white absolute -bottom-10 -left-10" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">符道五德</h2>
                <Divider className="my-6" />
                <p className="text-amber-200">修炼符力的价值观基石</p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-5 gap-4 sm:gap-8">
              {[
                { char: "真", name: "真实", desc: "真实的自我面对" },
                { char: "善", name: "善意", desc: "善意对待过程" },
                { char: "美", name: "审美", desc: "审美采集过程" },
                { char: "智", name: "智慧", desc: "选择智慧路径" },
                { char: "勇", name: "勇敢", desc: "勇敢踏上道路" },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-amber-300 shadow-lg">
                      <span className="text-2xl sm:text-3xl font-bold">{item.char}</span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-1">{item.name}</h3>
                    <p className="text-xs text-amber-200">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ===== CASES ===== */}
        <section id="cases" className="py-20 sm:py-28 bg-[#F5F3EF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-4 font-serif">
                  真实案例分享
                </h2>
                <Divider className="my-6" />
                <p className="text-gray-600">数以千计的成功案例，见证符箓效果</p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {cases.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div whileHover={{ y: -5 }} className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#8B4513] text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.name[0]}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#8B4513]">{item.name}</h3>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{item.result}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">"{item.content}"</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="text-center mt-10">
                <Link href="/cases" className="inline-flex items-center gap-2 text-[#8B4513] font-medium hover:text-amber-600">
                  查看更多案例 <span>→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-4 font-serif">
                  联系我们
                </h2>
                <Divider className="my-6" />
                <p className="text-gray-600">传承符道文化 · 开启幸福人生</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 sm:p-12 border border-amber-200">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3 text-white text-xl">微</div>
                    <h3 className="font-bold text-[#8B4513]">微信咨询</h3>
                    <p className="text-sm text-gray-600 mt-1">youfuzhiren</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 text-white text-xl">☎</div>
                    <h3 className="font-bold text-[#8B4513]">电话咨询</h3>
                    <p className="text-sm text-gray-600 mt-1">400-888-8888</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-3 text-white text-xl">@</div>
                    <h3 className="font-bold text-[#8B4513]">电子邮箱</h3>
                    <p className="text-sm text-gray-600 mt-1">hello@yofuzhiren.com</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/contact" className="inline-block px-10 py-4 bg-[#8B4513] text-white rounded-full hover:bg-[#6B4423] transition-all font-medium text-lg shadow-lg">
                    立即咨询
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#2C1810] text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TaijiSymbol size={40} className="text-amber-400" />
                <div>
                  <h3 className="text-xl font-bold text-amber-400 font-serif">有符之人</h3>
                  <p className="text-xs text-gray-400">武当后山符合堂</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">传承道家祝由智慧<br />弘扬符道文化</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-amber-400">快速链接</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white">符道文化</a></li>
                <li><a href="#fashi" className="hover:text-white">道家法事</a></li>
                <li><a href="#services" className="hover:text-white">符箓服务</a></li>
                <li><a href="#cases" className="hover:text-white">真实案例</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-amber-400">服务项目</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>安太岁法事</li>
                <li>增补财库</li>
                <li>文昌祈福</li>
                <li>化解小人</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-amber-400">联系我们</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>微信: youfuzhiren</li>
                <li>电话: 400-888-8888</li>
                <li>邮箱: hello@yofuzhiren.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 有符之人 · 武当后山符合堂 · 符道文化传承中心</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
