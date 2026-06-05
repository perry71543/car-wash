import Link from 'next/link'

export const metadata = {
  title: '使用教學 — DetailPro',
  description: '詳細的汽車美容施工教學，從洗車到鍍膜，每一個步驟都清楚說明。',
}

const tutorials = [
  {
    title: '基礎洗車流程',
    level: '入門',
    time: '30–45 分鐘',
    steps: [
      { num: '01', title: '沖水預洗', desc: '先用清水沖洗全車，去除大量泥沙灰塵，避免後續洗車時造成刮痕。從車頂由上而下沖洗。建議在陰涼處操作，避免車身過熱讓水分快速蒸發留下水痕。' },
      { num: '02', title: '泡沫炮打泡', desc: '將洗車精以 1:20 比例稀釋後倒入泡沫炮，對全車噴灑濃密泡沫，靜置 2–3 分鐘讓泡沫分解污垢。車頂、輪拱等難清潔區域可多噴一些。' },
      { num: '03', title: '手洗刷洗', desc: '使用超細纖維手套或海綿，以直線方向輕柔刷洗，避免圓形擦拭造成漩渦刮痕。建議使用兩桶水法：一桶清洗、一桶沖洗工具，避免污垢回沾。' },
      { num: '04', title: '清水沖淨', desc: '充分沖洗，確保所有洗車精完全沖淨。殘留的洗車精會影響後續鍍膜的附著力，沖洗時同樣由上往下。' },
      { num: '05', title: '吹乾擦乾', desc: '使用超細纖維擦拭巾輕拍吸水，或使用氣槍吹除縫隙積水，避免水漬留下水痕。擦拭時以折疊的毛巾輕拍，不要用力拖拉。' },
    ],
    products: ['極泡洗車精', '超細纖維擦拭巾組', '泡沫炮 Pro 版'],
  },
  {
    title: '陶瓷鍍膜施工',
    level: '進階',
    time: '3–4 小時（含靜置）',
    steps: [
      { num: '01', title: '徹底清潔', desc: '先完成基礎洗車流程，確保漆面完全清潔乾燥，無油脂、水痕或任何殘留物。鍍膜前的清潔度直接影響附著效果。' },
      { num: '02', title: '鐵粉去除（選配）', desc: '若漆面有鐵粉污染，建議先使用鐵粉清除劑處理，讓漆面更乾淨。可用手觸摸漆面，若有粗糙顆粒感即代表有鐵粉。' },
      { num: '03', title: '漆面研磨（選配）', desc: '若有細小刮痕或漩渦紋，可先進行輕度研磨拋光，讓鍍膜能附著在最好的狀態上。若漆面良好可略過此步驟。' },
      { num: '04', title: '施工鍍膜', desc: '取少量鍍膜劑滴在施工布上，以縱橫交叉方向薄薄塗抹在漆面上，每次施工面積約 50×50 公分。注意不要在陽光直曬下施工。' },
      { num: '05', title: '靜置拋光', desc: '等待約 30–60 秒（依環境溫濕度調整），待鍍膜出現彩虹紋即可用乾淨的超細纖維布輕拍擦去多餘殘留，再拋至光亮。' },
      { num: '06', title: '固化養護', desc: '施工完畢後 12 小時內避免碰水，24 小時內避免洗車。固化期間鍍膜逐漸硬化，達到最佳防護效果。' },
    ],
    products: ['陶瓷鍍膜劑 Pro', '超細纖維擦拭巾組', '極泡洗車精'],
  },
]

export default function TutorialPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="bg-dark-2 border-b border-white/5 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">美容教學</span>
          </div>
          <h1 className="font-display font-900 text-5xl uppercase tracking-tight">使用教學</h1>
          <p className="text-zinc-400 font-body text-sm mt-3 max-w-xl">
            跟著以下步驟，在家就能完成媲美專業美容廠的效果。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        {tutorials.map((tut) => (
          <div key={tut.title}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-display font-700 uppercase tracking-wider px-2 py-0.5 ${
                    tut.level === '入門' ? 'bg-neon/10 text-neon border border-neon/30' : 'bg-white/10 text-white border border-white/20'
                  }`}>{tut.level}</span>
                  <span className="text-zinc-500 text-xs font-body">⏱ {tut.time}</span>
                </div>
                <h2 className="font-display font-900 text-3xl uppercase tracking-tight">{tut.title}</h2>
              </div>
            </div>

            <div className="grid gap-px bg-white/5 mb-8">
              {tut.steps.map((step) => (
                <div key={step.num} className="bg-dark-2 p-6 flex gap-5">
                  <span className="font-display font-900 text-3xl text-white/10 leading-none flex-shrink-0 w-10">{step.num}</span>
                  <div>
                    <h3 className="font-display font-700 text-base uppercase tracking-wide mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm font-body leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended products */}
            <div className="bg-dark-3 border border-white/5 p-6">
              <p className="text-xs text-neon font-display uppercase tracking-wider mb-3">本教學推薦使用</p>
              <div className="flex flex-wrap gap-2">
                {tut.products.map((p) => (
                  <Link
                    key={p}
                    href="/products"
                    className="text-xs font-display font-600 border border-white/10 px-3 py-1.5 text-zinc-300 hover:border-neon hover:text-neon transition-all uppercase tracking-wider"
                  >
                    {p}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="border border-white/5 p-8 text-center">
          <p className="text-zinc-400 font-body text-sm mb-4">準備好開始了嗎？選擇適合您的套組一次備齊所有工具</p>
          <Link
            href="/products?category=kits"
            className="inline-block bg-neon text-black font-display font-700 uppercase tracking-widest px-8 py-3 text-sm hover:bg-neon-dim transition-colors"
          >
            選購套組
          </Link>
        </div>
      </div>
    </div>
  )
}
