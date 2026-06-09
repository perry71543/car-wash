'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'

const WISHLIST_KEY = 'detailpro-wishlist'

function loadWishlist() {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(WISHLIST_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function ProductDetailClient({ product, related }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeImg, setActiveImg] = useState(0)
  // Fix 2: wishlist persisted to localStorage
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    setWishlist(loadWishlist())
  }, [])

  const wished = wishlist.includes(product.id)

  const toggleWish = () => {
    setWishlist((prev) => {
      const next = prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
      try { localStorage.setItem(WISHLIST_KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  const handleAdd = () => {
    addItem(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const images = product.images?.length ? product.images : [product.image]

  return (
    <div className="min-h-screen pt-24">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="麵包屑導覽">
        <ol className="flex items-center gap-2 text-xs text-zinc-500 font-body list-none">
          <li><Link href="/" className="hover:text-neon transition-colors">首頁</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/products" className="hover:text-neon transition-colors">全部商品</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-300" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-3">
            <div className="relative aspect-square bg-dark-3 overflow-hidden">
              <Image
                src={images[activeImg]}
                alt={product.name}
                fill
                className="object-cover transition-opacity duration-300"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQMEAwEBAAAAAAAAAAAAAQIDBAAFERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Am2la9VqHuG3JbsqPGkSmW1OuvKCEJA5JPgfNVI1bnbJt8p2bLiR5T8dxDSmypRCFAZGM8+tFFAH/2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-neon text-black text-xs font-display font-700 uppercase px-3 py-1 tracking-wider">
                  {product.badge}
                </div>
              )}
            </div>
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2" role="tablist" aria-label="商品圖片">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    role="tab"
                    aria-selected={activeImg === i}
                    aria-label={`商品圖片 ${i + 1}`}
                    className={`relative w-20 h-20 flex-shrink-0 overflow-hidden border transition-all ${
                      activeImg === i ? 'border-neon' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <Image src={src} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
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
              <div className="flex" aria-label={`評分 ${product.rating} 分，滿分 5 分`}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24"
                    fill={i < Math.floor(product.rating) ? '#D4FF00' : '#333'}
                    aria-hidden="true">
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
                  <span className="w-1.5 h-1.5 bg-neon rounded-full flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs text-zinc-300 font-body">{f}</span>
                </div>
              ))}
            </div>

            {/* Quantity + Add to Cart + Wishlist */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center border border-white/10" role="group" aria-label="選擇數量">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-12 flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-lg"
                  aria-label="減少數量"
                >−</button>
                <span className="w-10 text-center font-display font-700 text-sm" aria-live="polite" aria-atomic="true">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-12 flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-lg"
                  aria-label="增加數量"
                >+</button>
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
              <button
                onClick={toggleWish}
                className={`w-12 h-12 flex items-center justify-center border transition-all ${
                  wished ? 'border-neon bg-neon/10' : 'border-white/10 hover:border-neon/40'
                }`}
                aria-label={wished ? '取消收藏' : '加入收藏'}
                aria-pressed={wished}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill={wished ? '#D4FF00' : 'none'} stroke={wished ? '#D4FF00' : '#888'} strokeWidth="2" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </button>
            </div>

            {/* Shipping info */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['滿 NT$1,500 免運', '7天鑑賞期', '48H 台灣到貨'].map((info) => (
                <div key={info} className="flex items-center gap-1.5 text-xs text-zinc-500 font-body">
                  <span className="w-1 h-1 bg-neon rounded-full" aria-hidden="true" />
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
              <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">推薦商品</span>
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
