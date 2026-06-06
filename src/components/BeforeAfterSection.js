'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    setSliderPos((x / rect.width) * 100)
  }, [])

  const handleMouseMove = (e) => { if (dragging.current) handleMove(e.clientX) }

  // Prevent page scroll while dragging on touch devices
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onTouchMove = (e) => {
      if (dragging.current) {
        e.preventDefault()
        handleMove(e.touches[0].clientX)
      }
    }

    el.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => el.removeEventListener('touchmove', onTouchMove)
  }, [handleMove])

  return (
    <section className="py-24 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">視覺對比</span>
            <div className="h-px w-8 bg-neon" />
          </div>
          <h2 className="font-display font-900 text-4xl uppercase tracking-tight mb-3">
            施工前 <span className="text-neon">/</span> 施工後
          </h2>
          <p className="text-zinc-400 text-sm font-body max-w-md mx-auto">
            拖動中間滑桿，親眼見證DetailPro帶來的驚人差異
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden cursor-ew-resize select-none"
          onMouseMove={handleMouseMove}
          onMouseUp={() => { dragging.current = false }}
          onMouseLeave={() => { dragging.current = false }}
          onTouchEnd={() => { dragging.current = false }}
        >
          {/* Before (full) */}
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80"
            alt="施工前"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-amber-950/40 mix-blend-multiply" />

          {/* After (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=90"
              alt="施工後"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 text-xs font-display font-600 uppercase tracking-widest text-zinc-300 z-10">
            施工前
          </div>
          <div className="absolute top-4 right-4 bg-neon px-3 py-1.5 text-xs font-display font-700 uppercase tracking-widest text-black z-10">
            施工後
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-neon z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-neon rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing neon-glow"
              onMouseDown={() => { dragging.current = true }}
              onTouchStart={() => { dragging.current = true }}
            >
              <svg width="20" height="12" fill="none" viewBox="0 0 20 12">
                <path d="M1 6h18M1 6L5 2M1 6l4 4M19 6l-4-4M19 6l-4 4" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/5">
          {[
            { label: '光澤提升', value: '300%' },
            { label: '疏水角度', value: '>110°' },
            { label: '施工時間', value: '2小時' },
            { label: '防護效果', value: '3年' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="font-display font-900 text-3xl text-neon">{value}</div>
              <div className="text-zinc-500 text-xs uppercase tracking-wider font-body mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
