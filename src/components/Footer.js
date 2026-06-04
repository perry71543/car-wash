import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 bg-neon flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 12 L8 2 L14 12" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.5 8 L11.5 8" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="font-display font-900 text-xl tracking-widest uppercase">DetailPro</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs font-body">
              來自台灣的頂級汽車美容品牌。我們相信每一輛車都值得最好的護理，從配方研發到施工工具，一切只為讓您的愛車永保最佳狀態。
            </p>
            <div className="flex gap-3 mt-6">
              {['FB', 'IG', 'YT'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-xs text-zinc-400 hover:border-neon hover:text-neon transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display uppercase tracking-widest text-sm font-600 mb-4">商品分類</h4>
            <ul className="flex flex-col gap-2">
              {['洗車精', '鍍膜蠟', '美容工具', '套組禮盒', '新品上市'].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-zinc-400 text-sm hover:text-neon transition-colors font-body">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display uppercase tracking-widest text-sm font-600 mb-4">服務資訊</h4>
            <ul className="flex flex-col gap-2">
              {['品牌故事', '使用教學', '常見問題', '聯絡我們', '退換貨政策'].map((item) => (
                <li key={item}>
                  <Link href="/about" className="text-zinc-400 text-sm hover:text-neon transition-colors font-body">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs font-body">
            © 2025 DetailPro Taiwan. 保留一切權利。
          </p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-600 text-xs">全台免運 滿 $1,500</span>
            <span className="text-zinc-600 text-xs">7天鑑賞期</span>
            <span className="text-zinc-600 text-xs">台灣本島 48H 到貨</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
