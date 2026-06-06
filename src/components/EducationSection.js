const steps = [
  {
    num: '01',
    title: '沖水預洗',
    desc: '先用清水沖洗全車，去除大量泥沙灰塵，避免後續洗車時造成刮痕。從車頂由上而下沖洗。',
    icon: '💦',
  },
  {
    num: '02',
    title: '泡沫炮打泡',
    desc: '將洗車精稀釋後倒入泡沫炮，對全車噴灑濃密泡沫，靜置2～3分鐘讓泡沫分解污垢。',
    icon: '🫧',
  },
  {
    num: '03',
    title: '手洗刷洗',
    desc: '使用超細纖維手套或海綿，以直線方向輕柔刷洗，避免圓形擦拭造成漩渦刮痕。',
    icon: '🧤',
  },
  {
    num: '04',
    title: '清水沖淨',
    desc: '充分沖洗，確保所有洗車精完全沖淨。殘留的洗車精會影響後續鍍膜的附著力。',
    icon: '🚿',
  },
  {
    num: '05',
    title: '吹乾擦乾',
    desc: '使用超細纖維擦拭巾輕拍吸水，或使用氣槍吹除縫隙積水，避免水漬留下水痕。',
    icon: '✨',
  },
  {
    num: '06',
    title: '鍍膜打蠟',
    desc: '在完全乾燥的漆面施工鍍膜或棕櫚蠟，提供長效防護並帶來深邃的鏡面光澤。',
    icon: '🏆',
  },
]

export default function EducationSection() {
  return (
    <section className="py-24 bg-dark-2 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">美容教學</span>
            <div className="h-px w-8 bg-neon" />
          </div>
          <h2 className="font-display font-900 text-4xl uppercase tracking-tight mb-3">
            如何正確洗車
          </h2>
          <p className="text-zinc-400 text-sm font-body max-w-md mx-auto">
            正確的洗車步驟能保護您的愛車漆面，延長美觀年限。跟著以下步驟，輕鬆在家完成專業美容。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="bg-dark-2 p-8 group hover:bg-dark-3 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="font-display font-900 text-5xl text-white/5 leading-none select-none">
                  {step.num}
                </div>
              </div>
              <div className="text-3xl mb-4 mt-2">{step.icon}</div>
              <h3 className="font-display font-700 text-lg uppercase tracking-wide mb-3 group-hover:text-neon transition-colors">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-sm font-body leading-relaxed">
                {step.desc}
              </p>
              {/* Bottom neon line on hover */}
              <div className="mt-4 h-px bg-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-zinc-400 text-sm font-body mb-4">
            準備好開始了嗎？選擇適合您的入門套組
          </p>
          <a
            href="/products?category=kits"
            className="inline-flex items-center gap-2 bg-neon text-black font-display font-700 uppercase tracking-widest px-8 py-3 text-sm hover:bg-neon-dim transition-colors"
          >
            選購套組
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
