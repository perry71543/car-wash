'use client'

import { useCart } from '@/context/CartContext'

export default function GlobalToast() {
  const { toast } = useCart()

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-6 right-6 z-[200] transition-all duration-300 ${
        toast.visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 bg-dark-2 border border-neon/40 px-5 py-3.5 shadow-2xl">
        <span className="flex-shrink-0 w-5 h-5 bg-neon rounded-full flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2.5 2.5L8 2.5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <div className="text-xs text-zinc-400 font-body">已加入購物車</div>
          <div className="font-display font-700 text-sm text-white leading-tight mt-0.5 max-w-[180px] truncate">
            {toast.message}
          </div>
        </div>
      </div>
    </div>
  )
}
