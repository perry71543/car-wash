'use client'

import Link from 'next/link'

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
      <div className="text-center">
        <h2 className="font-display font-900 text-3xl uppercase tracking-tight mb-2">發生錯誤</h2>
        <p className="text-zinc-500 font-body text-sm mb-6">
          {error?.message || '頁面載入失敗，請稍後再試'}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={reset}
            className="bg-neon text-black font-display font-700 uppercase tracking-widest px-8 py-3 text-sm hover:bg-neon-dim transition-colors"
          >
            重新載入
          </button>
          <Link
            href="/"
            className="border border-white/20 text-white font-display font-600 uppercase tracking-widest px-8 py-3 text-sm hover:border-neon hover:text-neon transition-all"
          >
            回首頁
          </Link>
        </div>
      </div>
    </div>
  )
}
