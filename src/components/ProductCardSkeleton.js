export default function ProductCardSkeleton() {
  return (
    <div className="bg-dark-3 border border-white/5 overflow-hidden">
      {/* Image placeholder */}
      <div className="aspect-square skeleton" />
      {/* Info placeholder */}
      <div className="p-4 flex flex-col gap-2.5">
        <div className="h-3 w-16 skeleton rounded" />
        <div className="h-4 w-3/4 skeleton rounded" />
        <div className="h-3 w-full skeleton rounded" />
        <div className="h-3 w-2/3 skeleton rounded" />
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 skeleton rounded-sm" />
          ))}
        </div>
        <div className="h-5 w-24 skeleton rounded mt-1" />
      </div>
    </div>
  )
}
