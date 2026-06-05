'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'

export default function CartDrawer() {
  const { items, removeItem, updateQty, totalCount, totalPrice, isOpen, setIsOpen } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-dark-2 border-l border-white/5 z-[70] flex flex-col transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="font-display font-900 text-xl uppercase tracking-widest">購物車</span>
            {totalCount > 0 && (
              <span className="bg-neon text-black text-xs font-display font-700 w-5 h-5 flex items-center justify-center rounded-full">
                {totalCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="關閉購物車"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <svg width="48" height="48" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              <p className="text-zinc-500 font-body text-sm">購物車是空的</p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neon text-xs font-display uppercase tracking-wider hover:underline"
              >
                繼續選購
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-white/5 pb-4">
                  <div className="relative w-20 h-20 bg-dark-3 flex-shrink-0 overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-neon font-display uppercase tracking-wider mb-0.5">{item.categoryLabel}</div>
                    <h4 className="font-display font-700 text-sm tracking-wide truncate">{item.name}</h4>
                    <div className="font-display font-700 text-sm text-white mt-1">
                      NT${(item.price * item.qty).toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-white/10">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-base"
                        >−</button>
                        <span className="w-7 text-center text-xs font-display font-700">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-base"
                        >+</button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-600 hover:text-red-400 transition-colors ml-auto"
                        aria-label="移除"
                      >
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-white/5 space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-zinc-400 text-sm font-body">小計</span>
              <span className="font-display font-900 text-xl">NT${totalPrice.toLocaleString()}</span>
            </div>
            {totalPrice < 1500 && (
              <p className="text-xs text-zinc-500 font-body">
                再購買 NT${(1500 - totalPrice).toLocaleString()} 即享免運費
              </p>
            )}
            {totalPrice >= 1500 && (
              <p className="text-xs text-neon font-display uppercase tracking-wider">✓ 已享免運費</p>
            )}
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-neon text-black text-center font-display font-700 uppercase tracking-widest py-3.5 text-sm hover:bg-neon-dim transition-colors neon-glow"
            >
              前往結帳
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="block w-full border border-white/10 text-zinc-400 text-center font-display font-600 uppercase tracking-widest py-3 text-xs hover:border-white/30 transition-colors"
            >
              繼續選購
            </button>
          </div>
        )}
      </div>
    </>
  )
}
