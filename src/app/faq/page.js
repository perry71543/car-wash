'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'DetailPro 的產品適合新手使用嗎？',
    a: '是的，我們的產品設計兼顧新手與專業使用者。每款產品均附有詳細的中文施工說明，搭配官網教學影片，即使第一次接觸汽車美容也能輕鬆上手。建議新手從「新手入門套組」開始，一次備齊最基礎也最重要的清潔工具組合。',
  },
  {
    q: '下單後多久可以出貨？',
    a: '一般訂單於付款確認後 1–2 個工作天內出貨，節假日前後可能稍有延遲。出貨後您會收到含物流追蹤號的通知信，可隨時查詢配送進度。',
  },
  {
    q: '可以退換貨嗎？',
    a: '商品自收貨日起 7 天內，如有品質問題可申請退換貨。請保持商品原包裝並聯繫客服提供訂單資訊與問題照片。消耗性商品（已開封使用）恕不接受退換，詳細規定請參閱退換貨政策頁面。',
  },
  {
    q: '鍍膜施工需要什麼環境條件？',
    a: '建議在室內或遮蔭處施工，溫度 15–30°C、相對濕度 40–70% 為最佳範圍。避免在直射陽光、強風或下雨時施工。施工前車漆必須徹底清潔並完全乾燥，建議先進行黏土棒除汙，確保漆面無污染物殘留。',
  },
  {
    q: '洗車精可以用在哪些車款？',
    a: '所有中性 pH 配方的洗車精均適用於轎車、SUV、跑車等各類車款，也適用於烤漆車、已鍍膜車、貼膜車。不建議直接使用在啞光（消光）車漆上，若有疑問請參閱個別商品說明或聯繫客服諮詢。',
  },
  {
    q: '如何選擇適合的鍍膜產品？',
    a: '入門推薦「巴西棕櫚蠟」，施工簡單、光澤效果即時，適合日常保養；若追求長效防護（3 年以上）且有一定施工經驗，推薦「陶瓷鍍膜劑 Pro」，9H 硬度、超疏水表現卓越。如不確定適合哪款，歡迎透過聯絡頁面提供車款與需求，我們會為您推薦最合適的組合。',
  },
]

export default function FaqPage() {
  const [open, setOpen] = useState(null)

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <div className="bg-dark-2 border-b border-white/5 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">常見問題</span>
          </div>
          <h1 className="font-display font-900 text-5xl uppercase tracking-tight">FAQ</h1>
          <p className="text-zinc-400 font-body text-sm mt-3 leading-relaxed">
            找不到答案？歡迎透過{' '}
            <a href="/contact" className="text-neon underline underline-offset-4 hover:text-white transition-colors">
              聯絡頁面
            </a>{' '}
            直接詢問我們。
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-2">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`border transition-colors duration-200 ${
                  isOpen ? 'border-neon/40 bg-dark-3' : 'border-white/5 bg-dark-2 hover:border-white/15'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display font-700 text-base uppercase tracking-wide transition-colors ${
                      isOpen ? 'text-neon' : 'text-white'
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center border transition-all duration-300 ${
                      isOpen ? 'border-neon rotate-45' : 'border-white/20'
                    }`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke={isOpen ? '#D4FF00' : '#888'}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="M6 1v10M1 6h10" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="h-px w-full bg-white/5 mb-5" />
                    <p className="text-zinc-300 font-body text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 border border-white/5 bg-dark-2 p-8 text-center">
          <div className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em] mb-3">還有其他問題？</div>
          <p className="text-zinc-400 font-body text-sm mb-6">
            我們的客服團隊在工作日 24 小時內回覆，歡迎隨時聯繫。
          </p>
          <a
            href="/contact"
            className="inline-block bg-neon text-black font-display font-700 uppercase tracking-widest px-8 py-3 text-sm hover:bg-neon-dim transition-colors"
          >
            聯絡我們
          </a>
        </div>
      </div>
    </div>
  )
}
