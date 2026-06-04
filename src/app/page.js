import HeroSection from '@/components/HeroSection'
import CategorySection from '@/components/CategorySection'
import ProductCard from '@/components/ProductCard'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import BundleSection from '@/components/BundleSection'
import EducationSection from '@/components/EducationSection'
import { products } from '@/data/products'
import Link from 'next/link'

export default function HomePage() {
  const featured = products.slice(0, 4)

  return (
    <>
      <HeroSection />
      <CategorySection />

      {/* Featured Products */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-neon" />
              <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">精選商品</span>
            </div>
            <h2 className="font-display font-900 text-4xl uppercase tracking-tight">
              熱銷推薦
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-zinc-400 text-sm font-display uppercase tracking-wider hover:text-neon transition-colors"
          >
            全部商品
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <BeforeAfterSection />

      {/* Brand strip */}
      <section className="py-12 bg-neon">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-900 text-3xl text-black uppercase tracking-tight">
              專業配方。真實效果。
            </h3>
            <p className="text-black/60 text-sm font-body mt-1">全台免運 · 滿 NT$1,500 · 48小時到貨</p>
          </div>
          <Link
            href="/products"
            className="bg-black text-neon font-display font-700 uppercase tracking-widest px-8 py-4 text-sm hover:bg-dark-3 transition-colors"
          >
            立即選購
          </Link>
        </div>
      </section>

      <BundleSection />
      <EducationSection />

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">真實評價</span>
            <div className="h-px w-8 bg-neon" />
          </div>
          <h2 className="font-display font-900 text-4xl uppercase tracking-tight">
            車主怎麼說
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: '陳大偉',
              car: 'BMW M3',
              text: '用了陶瓷鍍膜之後整台車煥然一新，下雨根本不用洗車，水珠自動滾走。這個價格比去美容廠划算太多了。',
              stars: 5,
            },
            {
              name: '林小媛',
              car: 'Toyota Camry',
              text: '一開始以為在家操作鍍膜會很困難，沒想到跟著教學影片做下來非常順手。光澤感超過預期，值得！',
              stars: 5,
            },
            {
              name: '王志明',
              car: 'Tesla Model 3',
              text: '泡沫炮真的是神器，泡沫超濃密，整台車打完再沖水，根本不需要用力刷，污垢直接帶走。',
              stars: 5,
            },
          ].map(({ name, car, text, stars }) => (
            <div key={name} className="bg-dark-3 border border-white/5 p-6 hover:border-neon/20 transition-colors">
              <div className="flex mb-4">
                {[...Array(stars)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#D4FF00">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 text-sm font-body leading-relaxed mb-6">「{text}」</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 bg-dark-4 border border-neon/20 flex items-center justify-center font-display font-700 text-sm text-neon">
                  {name[0]}
                </div>
                <div>
                  <div className="text-sm font-display font-600">{name}</div>
                  <div className="text-zinc-500 text-xs font-body">{car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
