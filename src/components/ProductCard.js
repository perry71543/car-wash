'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [wished, setWished] = useState(false)
  const [added, setAdded] = useState(false)

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const handleWish = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setWished((v) => !v)
  }

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-dark-3 border border-white/5 overflow-hidden hover:border-neon/30 transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-dark-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Wishlist button */}
          <button
            onClick={handleWish}
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/10 hover:border-neon/40 transition-all z-10"
            aria-label={wished ? '取消收藏' : '加入收藏'}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill={wished ? '#D4FF00' : 'none'} stroke={wished ? '#D4FF00' : '#888'} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </button>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge && (
              <span className="bg-neon text-black text-xs font-display font-700 uppercase px-2 py-0.5 tracking-wider">
                {product.badge}
              </span>
            )}
            {discount && (
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-display font-600 px-2 py-0.5">
                -{discount}%
              </span>
            )}
          </div>

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAdd}
              className={`w-full text-xs font-display font-700 uppercase tracking-widest py-2.5 transition-all ${
                added
                  ? 'bg-white/20 text-neon border border-neon'
                  : 'bg-neon text-black hover:bg-neon-dim'
              }`}
            >
              {added ? '✓ 已加入' : '加入購物車'}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="text-xs text-neon font-display uppercase tracking-wider mb-1 font-600">
            {product.categoryLabel}
          </div>
          <h3 className="font-display font-700 text-base mb-1 group-hover:text-neon transition-colors tracking-wide">
            {product.name}
          </h3>
          <p className="text-zinc-500 text-xs mb-3 font-body leading-relaxed line-clamp-2">
            {product.shortDesc}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="10" height="10" viewBox="0 0 24 24"
                  fill={i < Math.floor(product.rating) ? '#D4FF00' : '#333'}>
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
            <span className="text-zinc-500 text-xs">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="font-display font-700 text-lg text-white">
              NT${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-zinc-600 text-sm line-through">
                NT${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
