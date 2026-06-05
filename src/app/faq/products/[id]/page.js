import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import ProductDetailClient from './ProductDetailClient'

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
      type: 'website',
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

  const related = products.filter((p) => p.id !== id && p.category === product.category).slice(0, 3)

  return <ProductDetailClient product={product} related={related} />
}
