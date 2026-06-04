import Link from 'next/link'
import Image from 'next/image'
import { bundles } from '@/data/products'

export default function BundleSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-neon" />
          <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">超值套組</span>
          <div className="h-px w-8 bg-neon" />
        </div>
        <h2 className="font-display font-900 text-4xl uppercase tracking-tight mb-3">
          一次備齊，大幅省錢
        </h2>
        <p className="text-zinc-400 text-sm font-body max-w-md mx-auto">
          精心搭配的套組方案，不論是剛入門的新手還是要求完美的進階玩家，都能找到適合您的選擇
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {bundles.map((bundle, i) => (
          <div
            key={bundle.id}
            className={`relative overflow-hidden border group hover:border-neon/40 transition-all duration-300 ${
              i === 1
                ? 'border-neon/30 bg-gradient-to-br from-dark-3 to-dark-4'
                : 'border-white/5 bg-dark-3'
            }`}
          >
            {/* Pro badge */}
            {i === 1 && (
              <div className="absolute top-0 right-0 bg-neon text-black text-xs font-display font-700 uppercase px-4 py-1.5 tracking-wider">
                推薦首選
              </div>
            )}

            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative md:w-48 aspect-square md:aspect-auto overflow-hidden bg-dark-4 flex-shrink-0">
                <Image
                  src={bundle.image}
                  alt={bundle.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-3/80" />
                {/* Savings badge */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur border border-neon/40 px-2 py-1">
                  <span className="text-neon text-xs font-display font-700">{bundle.badge}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-900 text-xl uppercase tracking-wide mb-2 group-hover:text-neon transition-colors">
                    {bundle.name}
                  </h3>
                  <p className="text-zinc-400 text-xs font-body mb-4 leading-relaxed">
                    {bundle.desc}
                  </p>
                  {/* Items list */}
                  <ul className="flex flex-col gap-1.5 mb-5">
                    {bundle.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-zinc-300 font-body">
                        <span className="w-1 h-1 bg-neon rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-900 text-2xl text-white">
                        NT${bundle.price.toLocaleString()}
                      </span>
                      <span className="text-zinc-600 text-sm line-through">
                        NT${bundle.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/products"
                    className={`text-xs font-display font-700 uppercase tracking-widest px-5 py-2.5 transition-colors ${
                      i === 1
                        ? 'bg-neon text-black hover:bg-neon-dim neon-glow'
                        : 'border border-white/20 text-white hover:border-neon hover:text-neon'
                    }`}
                  >
                    立即購買
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
