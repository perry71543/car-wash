import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '品牌故事 — DetailPro',
  description: '了解 DetailPro 的品牌理念與專業承諾',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=90"
          alt="品牌故事"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/40 to-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">關於我們</span>
          </div>
          <h1 className="font-display font-900 text-6xl uppercase tracking-tight leading-none">
            品牌<br />
            <span className="text-neon">故事</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-900 text-4xl uppercase tracking-tight mb-6">
              從車庫到品牌
            </h2>
            <div className="space-y-4 text-zinc-300 font-body text-sm leading-relaxed">
              <p>
                DetailPro 誕生於 2018 年，創辦人陳建銘是一名汽車工程師，同時也是狂熱的汽車美容愛好者。他發現市場上要嘛是昂貴的進口品牌，要嘛是品質堪憂的廉價品，台灣缺乏一個真正為本地氣候與路況設計的頂級汽車美容品牌。
              </p>
              <p>
                他在新北市的車庫裡開始實驗，結合德國化工技術與台灣工藝精神，研發出第一款針對台灣高溫多濕環境優化的洗車精配方。這款產品在汽車論壇上一炮而紅，引爆了 DetailPro 的快速成長。
              </p>
              <p>
                今天，DetailPro 已擁有超過 50,000 名忠實車主，產品線涵蓋清潔、鍍膜、打蠟、工具等全系列，每一項產品都經過嚴格的實地測試，確保在台灣的真實環境下達到最佳表現。
              </p>
            </div>
          </div>
          <div className="relative aspect-square bg-dark-3 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=90"
              alt="品牌精神"
              fill
              className="object-cover opacity-70"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="border-l-2 border-neon pl-4">
                <p className="font-display font-700 text-lg text-white leading-snug">
                  「每一輛車都值得<br />最好的護理。」
                </p>
                <p className="text-zinc-400 text-xs mt-2 font-body">— 陳建銘，DetailPro 創辦人</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-neon" />
              <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">品牌理念</span>
              <div className="h-px w-8 bg-neon" />
            </div>
            <h2 className="font-display font-900 text-4xl uppercase tracking-tight">我們相信的事</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {[
              {
                icon: '🔬',
                title: '科學配方',
                desc: '每款產品都在實驗室經過數百次測試，確保化學成分穩定、安全，並針對台灣氣候優化。',
              },
              {
                icon: '🌿',
                title: '環境責任',
                desc: '採用可生物降解的配方，不含磷、不傷環境。我們相信愛車的人，也應該愛護地球。',
              },
              {
                icon: '🏆',
                title: '效果至上',
                desc: '行銷不如效果說話。每一項產品都以「讓車主驚豔」為最終標準，不達標不上市。',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-dark-2 p-10 text-center">
                <div className="text-4xl mb-5">{icon}</div>
                <h3 className="font-display font-700 text-xl uppercase tracking-wide mb-3">{title}</h3>
                <p className="text-zinc-400 text-sm font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '2018', label: '創立年份' },
            { num: '50,000+', label: '忠實車主' },
            { num: '35+', label: '產品項目' },
            { num: '4.8', label: '平均評分' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center border border-white/5 py-10">
              <div className="font-display font-900 text-5xl text-neon mb-2">{num}</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest font-body">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neon">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-900 text-4xl uppercase text-black mb-4">
            準備好讓您的愛車煥然一新了嗎？
          </h2>
          <p className="text-black/60 font-body mb-8">
            立即選購，體驗專業級汽車美容的絕對差異
          </p>
          <Link
            href="/products"
            className="inline-block bg-black text-neon font-display font-700 uppercase tracking-widest px-10 py-4 text-sm hover:bg-dark-3 transition-colors"
          >
            前往商店
          </Link>
        </div>
      </section>
    </div>
  )
}
