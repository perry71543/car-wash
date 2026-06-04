import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center px-6">
        <div className="font-display font-900 text-[10rem] text-white/5 leading-none select-none">
          404
        </div>
        <div className="-mt-8 mb-4">
          <h1 className="font-display font-900 text-4xl uppercase tracking-tight">找不到頁面</h1>
          <p className="text-zinc-400 font-body text-sm mt-2">這個頁面可能已經移除或路徑有誤</p>
        </div>
        <Link
          href="/"
          className="inline-block bg-neon text-black font-display font-700 uppercase tracking-widest px-8 py-3 text-sm hover:bg-neon-dim transition-colors mt-6"
        >
          回到首頁
        </Link>
      </div>
    </div>
  )
}
