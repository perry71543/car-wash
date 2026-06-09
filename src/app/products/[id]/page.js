import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import ProductDetailClient from './ProductDetailClient'

// Fix 6: OG type='product' with price metadata
export async function generateMetadata({ params }) {
  const { id } = await params
  const product = products.find((p) => p.id === id)
  if (!product) return {}
  return {
    title: `${product.name} — DetailPro`,
    description: product.description,
    openGraph: {
      title: `${product.name} — DetailPro`,
      description: product.shortDesc,
      images: [{ url: product.image, width: 800, height: 800, alt: product.name }],
      type: 'website', // 'product' type requires Facebook Commerce — using 'website' is safer for general OG
    },
    other: {
      // Open Graph product pricing tags for social sharing
      'product:price:amount': String(product.price),
      'product:price:currency': 'TWD',
    },
  }
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params
  const product = products.find((p) => p.id === id)
  if (!product) notFound()

  // Fix 21: same-category first, pad with popular products from other categories if needed
  const sameCategory = products.filter((p) => p.id !== id && p.category === product.category)
  let related = sameCategory.slice(0, 3)
  if (related.length < 3) {
    const others = products
      .filter((p) => p.id !== id && p.category !== product.category)
      .sort((a, b) => b.reviews - a.reviews)
    related = [...related, ...others].slice(0, 3)
  }

  return <ProductDetailClient product={product} related={related} />
}
