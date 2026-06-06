'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-dark-2 border-b border-white/5 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">客戶服務</span>
          </div>
          <h1 className="font-display font-900 text-5xl uppercase tracking-tight">聯絡我們</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Contact info */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            { icon: '📧', label: '電子郵件', value: 'service@detailpro.tw', sub: '工作日 24 小時內回覆' },
            { icon: '📞', label: '客服電話', value: '02-1234-5678', sub: '週一至週五 09:00–18:00' },
            { icon: '📍', label: '品牌據點', value: '新北市三重區', sub: '非現場銷售，僅供參考' },
          ].map(({ icon, label, value, sub }) => (
            <div key={label} className="bg-dark-3 border border-white/5 p-6 text-center">
              <div className="text-2xl mb-3">{icon}</div>
              <div className="text-xs text-neon font-display uppercase tracking-wider mb-1">{label}</div>
              <div className="font-display font-700 text-sm mb-1">{value}</div>
              <div className="text-zinc-500 text-xs font-body">{sub}</div>
            </div>
          ))}
        </div>

        {sent ? (
          <div className="text-center py-16 border border-neon/20 bg-neon/5">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-display font-700 text-xl text-neon uppercase tracking-wide mb-2">訊息已送出</h3>
            <p className="text-zinc-400 text-sm font-body">我們將在工作日內盡快回覆您，謝謝！</p>
          </div>
        ) : (
          <div>
            <h2 className="font-display font-700 text-2xl uppercase tracking-wide mb-8">傳送訊息</h2>
            <div className="flex flex-col gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-zinc-400 font-display uppercase tracking-wider block mb-2">姓名 *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-3 border border-white/10 text-white text-sm font-body px-4 py-3 focus:outline-none focus:border-neon transition-colors"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 font-display uppercase tracking-wider block mb-2">電子郵件 *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-3 border border-white/10 text-white text-sm font-body px-4 py-3 focus:outline-none focus:border-neon transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-zinc-400 font-display uppercase tracking-wider block mb-2">主旨 *</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-3 border border-white/10 text-white text-sm font-body px-4 py-3 focus:outline-none focus:border-neon transition-colors"
                >
                  <option value="">請選擇主旨</option>
                  <option value="order">訂單查詢</option>
                  <option value="return">退換貨申請</option>
                  <option value="product">商品諮詢</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-400 font-display uppercase tracking-wider block mb-2">訊息內容 *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-dark-3 border border-white/10 text-white text-sm font-body px-4 py-3 focus:outline-none focus:border-neon transition-colors resize-none"
                  placeholder="請詳細描述您的問題或需求..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-neon text-black font-display font-700 uppercase tracking-widest px-8 py-4 text-sm hover:bg-neon-dim transition-colors neon-glow self-start"
              >
                送出訊息
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
