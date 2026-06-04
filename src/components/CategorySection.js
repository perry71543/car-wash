import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/data/products'

export default function CategorySection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">商品分類</span>
          </div>
          <h2 className="font-display font-900 text-4xl uppercase tracking-tight">
            找到您需要的
          </h2>
        </div>
        <Link
          href="/products"
          className="hidden md:flex items-center gap-2 text-zinc-400 text-sm font-display uppercase tracking-wider hover:text-neon transition-colors"
        >
          查看全部
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((cat, i) => (
          <Link
            href={`/products?category=${cat.id}`}
            key={cat.id}
            className="group relative aspect-[3/4] overflow-hidden bg-dark-3"
          >
            <Image
              src={cat.image}
              alt={cat.label}
              fill
              className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Neon side accent */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <div className="text-2xl mb-2">{cat.icon}</div>
              <h3 className="font-display font-900 text-xl uppercase tracking-wide mb-1 group-hover:text-neon transition-colors">
                {cat.label}
              </h3>
              <p className="text-zinc-400 text-xs font-body">{cat.desc}</p>
              <div className="mt-3 flex items-center gap-1.5 text-neon text-xs font-display font-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                查看商品
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
