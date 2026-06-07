'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

const SHIPPING_THRESHOLD = 2000
const SHIPPING_FEE = 120

export default function CartPage() {
  const { items, removeItem, updateQty, clearCart } = useCart()

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const shippingFree = subtotal >= SHIPPING_THRESHOLD
  const shipping = shippingFree ? 0 : items.length > 0 ? SHIPPING_FEE : 0
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center gap-6 px-6">
        <div className="w-20 h-20 border border-white/10 flex items-center justify-center">
          <svg width="32" height="32" fill="none" stroke="#555" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
          </svg>
        </div>
        <div className="text-center">
          <h2 className="font-display font-900 text-3xl uppercase tracking-tight mb-2">購物車是空的</h2>
          <p className="text-zinc-500 font-body text-sm">去挑幾款愛車需要的產品吧！</p>
        </div>
        <Link
          href="/products"
          className="bg-neon text-black font-display font-700 uppercase tracking-widest px-8 py-4 text-sm hover:bg-neon-dim transition-colors"
        >
          去逛逛
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <div className="bg-dark-2 border-b border-white/5 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">購物車</span>
          </div>
          <h1 className="font-display font-900 text-5xl uppercase tracking-tight">
            我的購物車
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Items list */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-dark-2 border border-white/5 p-4 hover:border-white/10 transition-colors"
              >
                {/* Image */}
                <Link href={`/products/${item.id}`} className="flex-shrink-0">
                  <div className="relative w-24 h-24 bg-dark-3 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="text-neon text-xs font-display font-600 uppercase tracking-wider mb-1">
                      {item.categoryLabel}
                    </div>
                    <Link
                      href={`/products/${item.id}`}
                      className="font-display font-700 text-sm uppercase tracking-wide hover:text-neon transition-colors line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <div className="text-zinc-500 text-xs font-body mt-0.5">
                      單價 NT${item.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Qty control */}
                    <div className="flex items-center border border-white/10">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        disabled={item.qty <= 1}
                        className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 transition-colors text-base"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-display font-700 text-sm">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-base"
                      >
                        +
                      </button>
                    </div>

                    {/* Line total + remove */}
                    <div className="flex items-center gap-4">
                      <span className="font-display font-700 text-base">
                        NT${(item.price * item.qty).toLocaleString()}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-600 hover:text-red-400 transition-colors"
                        aria-label="刪除商品"
                      >
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear cart */}
            <div className="flex justify-end pt-1">
              <button
                onClick={clearCart}
                className="text-xs text-zinc-600 hover:text-red-400 font-body transition-colors underline underline-offset-4"
              >
                清空購物車
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-dark-2 border border-white/5 p-6 sticky top-24">
              <h2 className="font-display font-700 text-lg uppercase tracking-wide mb-6">訂單摘要</h2>

              <div className="flex flex-col gap-3 text-sm font-body mb-6">
                <div className="flex justify-between">
                  <span className="text-zinc-400">商品小計</span>
                  <span>NT${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">運費</span>
                  <span className={shippingFree ? 'text-neon' : ''}>
                    {shippingFree ? '免運' : `NT$${SHIPPING_FEE}`}
                  </span>
                </div>
                {!shippingFree && (
                  <div className="text-xs text-zinc-500 bg-dark-3 px-3 py-2 border border-white/5">
                    再購 NT${(SHIPPING_THRESHOLD - subtotal).toLocaleString()} 即享免運
                  </div>
                )}
                <div className="h-px bg-white/5" />
                <div className="flex justify-between font-display font-900 text-lg">
                  <span>總計</span>
                  <span className="text-neon">NT${total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => alert('結帳功能即將上線，敬請期待！')}
                className="w-full bg-neon text-black font-display font-700 uppercase tracking-widest py-4 text-sm hover:bg-neon-dim transition-colors neon-glow mb-3"
              >
                前往結帳
              </button>

              <Link
                href="/products"
                className="block w-full text-center border border-white/10 text-zinc-400 font-display font-600 uppercase tracking-widest py-3 text-sm hover:border-neon hover:text-neon transition-all"
              >
                繼續購物
              </Link>

              {/* Trust badges */}
              <div className="mt-6 flex flex-col gap-2">
                {['7 天鑑賞期保障', '48H 台灣到貨', '安全加密付款'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-zinc-600 font-body">
                    <span className="w-1 h-1 bg-neon rounded-full flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
