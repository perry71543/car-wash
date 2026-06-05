import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

export const metadata = {
  title: 'DetailPro — 專業汽車美容用品',
  description: 'DetailPro 提供頂級汽車美容、洗車精、鍍膜蠟與專業工具，讓您的愛車煥然一新。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}