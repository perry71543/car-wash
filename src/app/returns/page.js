import Link from 'next/link'

export const metadata = {
  title: '退換貨政策 — DetailPro',
  description: 'DetailPro 退換貨流程與注意事項',
}

export default function ReturnsPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="bg-dark-2 border-b border-white/5 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-neon" />
            <span className="text-neon text-xs font-display font-600 uppercase tracking-[0.3em]">服務政策</span>
          </div>
          <h1 className="font-display font-900 text-5xl uppercase tracking-tight">退換貨政策</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">

        {/* 7天鑑賞期 */}
        <section>
          <h2 className="font-display font-700 text-xl uppercase tracking-wide mb-4 flex items-center gap-3">
            <span className="w-1.5 h-5 bg-neon flex-shrink-0" />
            7 天鑑賞期（消費者保護法）
          </h2>
          <div className="text-zinc-400 text-sm font-body leading-relaxed space-y-3 pl-5">
            <p>依消費者保護法規定，您有 7 天猶豫期（含例假日），自收到商品翌日起算。</p>
            <p>鑑賞期內申請退貨，商品須保持<strong className="text-white">未開封、原包裝完整</strong>的狀態。退貨運費由消費者自行負擔（來回各一次）。</p>
            <p>若商品有<strong className="text-white">瑕疵或寄錯</strong>，運費由本公司負擔，請聯絡客服說明狀況並附上照片。</p>
          </div>
        </section>

        {/* 不適用退換 */}
        <section>
          <h2 className="font-display font-700 text-xl uppercase tracking-wide mb-4 flex items-center gap-3">
            <span className="w-1.5 h-5 bg-neon flex-shrink-0" />
            不適用退換貨情形
          </h2>
          <ul className="pl-5 space-y-2">
            {[
              '商品已開封使用（非品質問題）',
              '人為損壞或使用不當導致損壞',
              '已超過鑑賞期 7 天',
              '缺少原廠包裝、配件或贈品',
              '特價品、限量品或套組拆售',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-400 font-body">
                <span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 申請流程 */}
        <section>
          <h2 className="font-display font-700 text-xl uppercase tracking-wide mb-6 flex items-center gap-3">
            <span className="w-1.5 h-5 bg-neon flex-shrink-0" />
            申請流程
          </h2>
          <div className="grid gap-px bg-white/5">
            {[
              { step: '01', title: '聯絡客服', desc: '透過聯絡頁面或 Email 告知退換貨原因，並附上訂單編號與商品照片。' },
              { step: '02', title: '等待確認', desc: '客服將於 1–2 個工作日內審核，確認後提供退貨地址及說明。' },
              { step: '03', title: '寄回商品', desc: '請妥善包裝商品，避免運送過程中損壞。建議使用有追蹤的宅配服務。' },
              { step: '04', title: '退款處理', desc: '收到並確認商品狀態後，退款將於 5–7 個工作日內退回原支付方式。' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-dark-2 p-6 flex gap-5">
                <span className="font-display font-900 text-3xl text-white/10 leading-none flex-shrink-0">{step}</span>
                <div>
                  <h3 className="font-display font-700 text-base uppercase tracking-wide mb-2">{title}</h3>
                  <p className="text-zinc-400 text-sm font-body leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border border-white/5 p-8 text-center">
          <p className="text-zinc-400 font-body text-sm mb-4">有任何退換貨問題，歡迎直接聯繫我們的客服</p>
          <Link
            href="/contact"
            className="inline-block bg-neon text-black font-display font-700 uppercase tracking-widest px-8 py-3 text-sm hover:bg-neon-dim transition-colors"
          >
            聯絡客服
          </Link>
        </div>
      </div>
    </div>
  )
}
