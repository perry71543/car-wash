import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=90"
          alt="黑色跑車"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark/80" />
      </div>

      {/* Neon accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="h-px w-12 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">
              台灣頂級汽車美容
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-900 uppercase text-white mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: '0.95', letterSpacing: '-0.02em' }}
          >
            <span className="block animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              完美護理
            </span>
            <span
              className="block text-neon neon-text-glow animate-fade-up"
              style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
            >
              從這裡
            </span>
            <span
              className="block animate-fade-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              開始。
            </span>
          </h1>

          {/* Sub */}
          <p
            className="text-zinc-300 text-lg font-body leading-relaxed mb-10 max-w-md animate-fade-up"
            style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
          >
            專業等級配方，讓您在家完成媲美專業美容廠的效果。從洗車到鍍膜，一站備齊。
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
          >
            <Link
              href="/products"
              className="bg-neon text-black font-display font-700 uppercase tracking-widest px-8 py-4 text-sm hover:bg-neon-dim transition-colors neon-glow"
            >
              立即選購
            </Link>
            <Link
              href="/about"
              className="border border-white/20 text-white font-display font-600 uppercase tracking-widest px-8 py-4 text-sm hover:border-neon hover:text-neon transition-all"
            >
              品牌故事
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex gap-8 mt-16 pt-8 border-t border-white/10 animate-fade-up"
            style={{ animationDelay: '0.85s', animationFillMode: 'both' }}
          >
            {[
              { num: '50,000+', label: '滿意車主' },
              { num: '9H', label: '鍍膜硬度' },
              { num: '3年', label: '最長防護' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-display font-900 text-3xl text-neon">{num}</div>
                <div className="text-zinc-500 text-xs uppercase tracking-wider font-body mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-zinc-600 text-xs uppercase tracking-widest font-display">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  )
}
