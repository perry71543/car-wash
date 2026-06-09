import { Suspense } from 'react'
import ProductsContent from './ProductsContent'

// Fix 7: metadata now lives in the Server Component wrapper
export const metadata = {
  title: '全部商品 — DetailPro',
  description: '瀏覽 DetailPro 全系列汽車美容用品，包含洗車精、陶瓷鍍膜、打蠟工具與超值套組。',
  openGraph: {
    title: '全部商品 — DetailPro',
    description: '瀏覽 DetailPro 全系列汽車美容用品，包含洗車精、陶瓷鍍膜、打蠟工具與超值套組。',
    type: 'website',
  },
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-white/10 border-t-neon rounded-full animate-spin" />
          <span className="text-zinc-500 text-xs font-display uppercase tracking-widest">載入中</span>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
