import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import GlobalToast from '@/components/GlobalToast'

export const metadata = {
  title: 'DetailPro — 專業汽車美容用品',
  description: 'DetailPro 提供頂級汽車美容、洗車精、鍍膜蠟與專業工具，讓您的愛車煥然一新。',
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://www.detailpro.tw',
    siteName: 'DetailPro',
    title: 'DetailPro — 專業汽車美容用品',
    description: 'DetailPro 提供頂級汽車美容、洗車精、鍍膜蠟與專業工具，讓您的愛車煥然一新。',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'DetailPro 頂級汽車美容用品',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DetailPro — 專業汽車美容用品',
    description: 'DetailPro 提供頂級汽車美容、洗車精、鍍膜蠟與專業工具，讓您的愛車煥然一新。',
    images: ['https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80'],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DetailPro',
    url: 'https://www.detailpro.tw',
    logo: 'https://www.detailpro.tw/logo.png',
    sameAs: [
      'https://www.facebook.com/detailpro.tw',
      'https://www.instagram.com/detailpro.tw',
      'https://www.youtube.com/@detailpro',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+886-2-1234-5678',
      contactType: 'customer service',
      availableLanguage: '中文',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DetailPro',
    url: 'https://www.detailpro.tw',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.detailpro.tw/products?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
]

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <GlobalToast />
        </CartProvider>
      </body>
    </html>
  )
}
