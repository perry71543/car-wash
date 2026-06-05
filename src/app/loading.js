export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-white/10 border-t-neon rounded-full animate-spin" />
        <span className="text-zinc-500 text-xs font-display uppercase tracking-widest">載入中</span>
      </div>
    </div>
  )
}
