import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

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
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-xs text-zinc-400 hover:border-neon hover:text-neon transition-all"
                aria-label="Facebook"
              >FB</a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-xs text-zinc-400 hover:border-neon hover:text-neon transition-all"
                aria-label="Instagram"
              >IG</a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-xs text-zinc-400 hover:border-neon hover:text-neon transition-all"
                aria-label="YouTube"
              >YT</a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display uppercase tracking-widest text-sm font-600 mb-4">商品分類</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: '洗車精', href: '/products?category=shampoo' },
                { label: '鍍膜蠟', href: '/products?category=coating' },
                { label: '美容工具', href: '/products?category=tools' },
                { label: '套組禮盒', href: '/products?category=kits' },
                { label: '全部商品', href: '/products' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-zinc-400 text-sm hover:text-neon transition-colors font-body">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display uppercase tracking-widest text-sm font-600 mb-4">服務資訊</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: '品牌故事', href: '/about' },
                { label: '使用教學', href: '/tutorial' },
                { label: '常見問題', href: '/faq' },
                { label: '聯絡我們', href: '/contact' },
                { label: '退換貨政策', href: '/returns' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-zinc-400 text-sm hover:text-neon transition-colors font-body">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs font-body">
            © {year} DetailPro Taiwan. 保留一切權利。
          </p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-600 text-xs">全台免運 滿$1500元</span>
            <span className="text-zinc-600 text-xs">7天鑑賞期</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
