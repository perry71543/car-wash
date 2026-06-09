'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/data/products'

export default function ProductsContent() {
  const searchParams = useSearchParams()
  const [active, setActive] = useState('all')
  const [sort, setSort] = useState('default')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setActive(cat)
  }, [searchParams])

  const filtered = products
    .filter((p) => active === 'all' || p.category === active)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <div className="bg-dark-2 border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">商品總覽</span>
          </div>
          <h1 className="font-display font-900 text-5xl uppercase tracking-tight">全部商品</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2" role="group" aria-label="商品分類篩選">
            <button
              onClick={() => setActive('all')}
              className={`px-4 py-1.5 text-xs font-display font-600 uppercase tracking-wider transition-all ${
                active === 'all'
                  ? 'bg-neon text-black'
                  : 'border border-white/10 text-zinc-400 hover:border-neon hover:text-neon'
              }`}
              aria-pressed={active === 'all'}
            >
              全部
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-1.5 text-xs font-display font-600 uppercase tracking-wider transition-all ${
                  active === cat.id
                    ? 'bg-neon text-black'
                    : 'border border-white/10 text-zinc-400 hover:border-neon hover:text-neon'
                }`}
                aria-pressed={active === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-dark-3 border border-white/10 text-zinc-300 text-xs font-body px-4 py-2 focus:outline-none focus:border-neon"
            aria-label="商品排序"
          >
            <option value="default">預設排序</option>
            <option value="price-asc">價格：低到高</option>
            <option value="price-desc">價格：高到低</option>
            <option value="rating">評價最高</option>
          </select>
        </div>

        <p className="text-zinc-600 text-xs font-body mb-6 uppercase tracking-wider">
          共 {filtered.length} 項商品
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 flex flex-col items-center gap-5">
            <div className="text-5xl">🔍</div>
            <p className="text-zinc-400 font-body">此分類目前沒有商品</p>
            <button
              onClick={() => setActive('all')}
              className="bg-neon text-black font-display font-700 uppercase tracking-widest px-6 py-3 text-xs hover:bg-neon-dim transition-colors"
            >
              查看全部商品
            </button>
            <Link
              href="/"
              className="text-zinc-500 text-xs font-body hover:text-neon transition-colors underline underline-offset-4"
            >
              回首頁
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
