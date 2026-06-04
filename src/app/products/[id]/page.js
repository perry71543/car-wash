'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { notFound } from 'next/navigation'

export default function ProductDetailPage({ params }) {
  const { id } = use(params)
  const product = products.find((p) => p.id === id)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) notFound()

  const related = products.filter((p) => p.id !== id && p.category === product.category).slice(0, 3)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  return (
    <div className="min-h-screen pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-xs text-zinc-500 font-body">
          <Link href="/" className="hover:text-neon transition-colors">首頁</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-neon transition-colors">全部商品</Link>
          <span>/</span>
          <span className="text-zinc-300">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-3">
            <div className="relative aspect-square bg-dark-3 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-neon text-black text-xs font-display font-700 uppercase px-3 py-1 tracking-wider">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="text-neon text-xs font-display font-600 uppercase tracking-widest mb-2">
              {product.categoryLabel}
            </div>
            <h1 className="font-display font-900 text-4xl uppercase tracking-tight mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24"
                    fill={i < Math.floor(product.rating) ? '#D4FF00' : '#333'}>
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="text-neon text-sm font-display font-700">{product.rating}</span>
              <span className="text-zinc-500 text-sm font-body">({product.reviews} 則評價)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-white/5">
              <span className="font-display font-900 text-4xl">
                NT${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-zinc-500 text-xl line-through">
                    NT${product.originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-neon/10 border border-neon/30 text-neon text-xs font-display font-700 px-2 py-0.5">
                    省 {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-zinc-300 font-body text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-2 bg-dark-3 px-3 py-2">
                  <span className="w-1.5 h-1.5 bg-neon rounded-full flex-shrink-0" />
                  <span className="text-xs text-zinc-300 font-body">{f}</span>
                </div>
              ))}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center border border-white/10">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-12 flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-lg"
                >
                  −
                </button>
                <span className="w-10 text-center font-display font-700 text-sm">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-12 flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-lg"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAdd}
                className={`flex-1 min-w-32 h-12 font-display font-700 uppercase tracking-widest text-sm transition-all ${
                  added
                    ? 'bg-white/10 text-neon border border-neon'
                    : 'bg-neon text-black hover:bg-neon-dim neon-glow'
                }`}
              >
                {added ? '✓ 已加入購物車' : '加入購物車'}
              </button>
            </div>

            {/* Shipping info */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['滿 NT$1,500 免運', '7天鑑賞期', '48H 台灣到貨'].map((info) => (
                <div key={info} className="flex items-center gap-1.5 text-xs text-zinc-500 font-body">
                  <span className="w-1 h-1 bg-neon rounded-full" />
                  {info}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-neon" />
              <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">同系列商品</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
