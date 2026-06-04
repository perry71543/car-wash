import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DetailPro — 頂級汽車美容護理',
  description: '專業等級的汽車美容產品，讓您的愛車煥然一新。台灣在地品牌，全系列洗車、鍍膜、打蠟工具。',
  keywords: '汽車美容, 洗車, 鍍膜, 打蠟, 汽車護理, 泡沫洗車, DetailPro',
  openGraph: {
    title: 'DetailPro — 頂級汽車美容護理',
    description: '專業等級的汽車美容產品',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className="bg-dark text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
