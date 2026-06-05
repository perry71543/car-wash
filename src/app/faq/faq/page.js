'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: '全台免運的條件是什麼？',
    a: '單筆訂單消費滿 NT$1,500 即享全台免運費（離島地區除外）。未達門檻的訂單運費為 NT$80。',
  },
  {
    q: '下單後多久會出貨？',
    a: '工作日下午 2 點前完成付款，當天出貨；2 點後完成則隔個工作日出貨。台灣本島一般 48 小時內到貨。',
  },
  {
    q: '產品可以退換貨嗎？',
    a: '購買後 7 天內可申請退換貨（鑑賞期）。商品需保持原包裝、未開封狀態。開封使用後如有品質問題，請提供照片聯絡客服，我們將盡速協助處理。',
  },
  {
    q: '洗車精和鍍膜劑有保存期限嗎？',
    a: '未開封的洗車精保存期限為 3 年，鍍膜劑為 2 年。開封後建議在 6 個月內使用完畢，並避免高溫直射日曬的環境保存。',
  },
  {
    q: '陶瓷鍍膜劑適合新手自行施工嗎？',
    a: '適合有基本汽車美容經驗的車主。我們在網站上提供完整的施工教學，按照步驟操作並不困難。若您是第一次接觸，建議先從入門套組開始練習。',
  },
  {
    q: '泡沫炮 Pro 版可以搭配哪些水管使用？',
    a: '泡沫炮 Pro 版採用標準 3/4 吋水管介面，相容台灣市售常見家用水管。不需要高壓洗車機，一般家用水壓即可產生濃密泡沫。',
  },
  {
    q: '深色車和淺色車適用的產品一樣嗎？',
    a: '大多數產品對各種車色都適用。巴西棕櫚蠟在深色車上效果特別顯著，能呈現更深邃的鏡面光澤。如有疑慮，歡迎聯絡我們諮詢。',
  },
  {
    q: '可以開統一編號嗎？',
    a: '可以。結帳時請在備註欄填寫公司名稱、統一編號及發票抬頭，我們將開立電子發票並寄至您的信箱。',
  },
]

export default function FaqPage() {
  const [open, setOpen] = useState(null)

  return (
    <div className="min-h-screen pt-24">
      <div className="bg-dark-2 border-b border-white/5 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">幫助中心</span>
          </div>
          <h1 className="font-display font-900 text-5xl uppercase tracking-tight">常見問題</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col divide-y divide-white/5">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className={`font-display font-600 text-base tracking-wide transition-colors ${open === i ? 'text-neon' : 'text-white group-hover:text-neon'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 border flex items-center justify-center transition-all ${open === i ? 'border-neon text-neon rotate-45' : 'border-white/20 text-zinc-400'}`}>
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <p className="text-zinc-400 text-sm font-body leading-relaxed pb-5">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 border border-white/5 p-8 text-center">
          <p className="text-zinc-400 font-body text-sm mb-4">還有其他問題？我們很樂意協助您</p>
          <Link
            href="/contact"
            className="inline-block bg-neon text-black font-display font-700 uppercase tracking-widest px-8 py-3 text-sm hover:bg-neon-dim transition-colors"
          >
            聯絡我們
          </Link>
        </div>
      </div>
    </div>
  )
}
