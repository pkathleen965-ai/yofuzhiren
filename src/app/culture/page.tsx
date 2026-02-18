"use client";

import Navigation from "../components/Navigation";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { motion } from "framer-motion";
import { TaijiSymbol, BaguaSymbol, Divider } from "../components/TaoistSymbols";

const cultureTopics = [
  {
    title: "符的起源",
    content: "符，源于道家祝由术，是中华传统文化的重要组成部分。早在先秦时期，先民们就开始使用符箓来祈福禳灾、治病救人。符箓承载着人们对美好生活的向往与祝愿，是古人与天地沟通的重要媒介。",
    icon: "📜",
  },
  {
    title: "祝由术的智慧",
    content: "《黄帝内经》云："古之治病，唯其移精变气，可祝由而已。"祝由术的本质，是通过意念的聚焦，疏通全身淤堵，实现自我疗愈。这不是迷信，而是古人探索出的身心调理智慧。",
    icon: "☯️",
  },
  {
    title: "符与福的联系",
    content: "符与福，音近而义通。符是福的种子，福是符的显化。每个人都可以通过修炼符力，显化属于自己的幸福。符箓不仅是外在的工具，更是内在心念的凝聚与表达。",
    icon: "🍀",
  },
  {
    title: "现代应用",
    content: "在现代社会，符道文化不仅仅是一种传统，更是一种生活智慧。通过符道五德的修炼，我们可以在日常生活中获得内心的平静与力量，应对各种挑战与困境。",
    icon: "💫",
  },
];

const historyTimeline = [
  { era: "先秦时期", event: "符箓起源", desc: "先民开始使用符号进行祈福禳灾" },
  { era: "汉代", event: "道教形成", desc: "张道陵创立五斗米道，符箓系统化" },
  { era: "唐宋时期", event: "鼎盛发展", desc: "符箓文化达到顶峰，广泛应用于民间" },
  { era: "明清时期", event: "传承延续", desc: "各派道教科仪完善，符法精微" },
  { era: "现代", event: "文化复兴", desc: "传统文化复兴，符道文化焕发新生" },
];

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Navigation />
      
      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#2C1810] via-[#5D3A1A] to-[#8B4513] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <BaguaSymbol size={400} className="text-white absolute -top-20 -right-20" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
              <div className="flex justify-center mb-6">
                <TaijiSymbol size={80} className="text-amber-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif">
                符道文化
              </h1>
              <p className="text-xl sm:text-2xl text-amber-200 mb-4">
                传承千年智慧，探索符与福的奥秘
              </p>
              <p className="text-base text-amber-100 max-w-2xl mx-auto">
                符道文化是中华传统文化的瑰宝，蕴含着深邃的哲学思想和实践智慧
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-4 font-serif">
                  什么是符道文化
                </h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <FadeIn>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed mb-6 text-lg">
                  符道文化，是中华传统文化中的瑰宝。它源于道家祝由术，历经数千年发展，蕴含着深邃的哲学思想和实践智慧。
                  在符道文化中，"符"不仅仅是写在纸上的符号，更是一种能量的载体，一种意念的聚焦，一种与天地沟通的媒介。
                </p>
                <p className="leading-relaxed mb-6">
                  道教认为，宇宙万物皆由气构成，符箓通过特定的笔画、结构和仪式，可以调动天地灵气，调整人体能量场，
                  达到祈福消灾、转运改命的效果。这种思想与现代的量子物理学、能量医学有着惊人的契合之处。
                </p>
                <p className="leading-relaxed">
                  "有符之人"致力于将这份古老智慧进行现代诠释，让更多人了解符道文化，感受符与福的内在联系。
                  我们相信，在快节奏的现代生活中，符道文化可以为人们提供心灵的慰藉和精神的指引。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-16 sm:py-20 bg-[#F5F3EF] relative overflow-hidden">
          <div className="absolute top-10 right-10 opacity-5">
            <TaijiSymbol size={200} className="text-[#8B4513]" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-4 font-serif">
                  符道文化的核心
                </h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {cultureTopics.map((topic, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="text-4xl mb-4">{topic.icon}</div>
                    <h3 className="text-xl font-bold text-[#8B4513] mb-3 font-serif">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{topic.content}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-4 font-serif">
                  符道文化发展历程
                </h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B4513] to-amber-300 md:-translate-x-1/2" />

              {historyTimeline.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#8B4513] rounded-full border-4 border-amber-200 md:-translate-x-1/2 z-10" />
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-[#F5F3EF] p-6 rounded-xl">
                        <span className="text-amber-600 font-bold text-sm">{item.era}</span>
                        <h3 className="text-lg font-bold text-[#8B4513] mt-1 mb-2">{item.event}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Three Stages */}
        <section className="py-16 sm:py-20 bg-[#F5F3EF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-4 font-serif">
                  符力显化的三阶段
                </h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stage: "01",
                  title: "寻找符",
                  subtitle: "迷茫中的探索期",
                  desc: "认清自己真正的渴望与阻碍，尝试不同路径，培养自我觉察的能力。对应祝由术中的"诊病寻由"。",
                },
                {
                  stage: "02",
                  title: "炼符",
                  subtitle: "深入实践的修炼期",
                  desc: "在具体实践中修炼符力，面对困难，转化阻力，坚持与调整结合。对应祝由术中的"施术化淤"。",
                },
                {
                  stage: "03",
                  title: "显符",
                  subtitle: "福气自然流露的影响期",
                  desc: "符力内化后在生活中自然重现，开始影响他人，轻松与丰盛并存。对应祝由术中的"病愈福至"。",
                },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.2}>
                  <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#8B4513] to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-3xl font-bold text-white">{item.stage}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#8B4513] mb-2 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-amber-600 text-sm mb-4">{item.subtitle}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Practice */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#8B4513] to-[#6B4423] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">
                  日常符力修炼
                </h2>
                <p className="text-amber-200">将祝由智慧融入现代生活</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌅",
                  title: "晨间符启",
                  desc: "每天早上用5分钟进行静心连接。三次深呼吸，设定今日要显化的"福气"意念，确定一个具体的"符步"行动。相当于微型的祝愿仪式，为新的一天注入正向能量。",
                },
                {
                  icon: "🌙",
                  title: "晚间符思",
                  desc: "睡前回顾当日的"符力时刻"——践行五德的瞬间，感恩今日的"福气点滴"，规划明日方向。相当于祝由术的"收穗"，巩固积极体验。",
                },
                {
                  icon: "📅",
                  title: "周期仪式",
                  desc: "月符设定主题，季符阶段性总结，年符深层生命回顾与愿景规划。这些仪式为快节奏生活提供"心理锚点"，帮助我们在变化中保持定力。",
                },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.2}>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-amber-100 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <TaijiSymbol size={60} className="text-[#8B4513] mx-auto mb-6" />
              <blockquote className="text-2xl sm:text-3xl font-bold text-[#8B4513] mb-4 font-serif">
                "最灵性的符，是你每一个正向的念头和坚定的行动"
              </blockquote>
              <p className="text-gray-600">
                当我们将注意力从"求福"转向"修符"，福气自然显现
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <TaijiSymbol size={40} className="text-amber-400" />
            <span className="text-xl font-bold font-serif">有符之人</span>
          </div>
          <p className="text-gray-400">© 2026 有符之人 · 符道文化传承中心</p>
        </div>
      </footer>
    </div>
  );
}
