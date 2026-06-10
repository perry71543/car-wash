'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

// English → Chinese keyword mapping for cross-language search
const searchMap = {
  foam: '泡沫',
  shampoo: '洗車精',
  ceramic: '陶瓷',
  coating: '鍍膜',
  wax: '蠟',
  towel: '擦拭巾',
  microfiber: '擦拭巾',
  polish: '拋光',
  gun: '泡沫炮',
  kit: '套組',
  bundle: '套組',
  interior: '內裝',
  cleaner: '清潔',
  carnauba: '棕櫚蠟',
  pro: 'pro',
  polisher: '拋光機',
  brush: '刷具',
  glove: '手套',
  bucket: '水桶',
  sprayer: '噴壺',
  washer: '清洗機',
}

function filterProducts(query) {
  if (!query || query.length < 1) return []
  const lower = query.toLowerCase()
  // Translate English keywords to Chinese if matched
  const translated = searchMap[lower] || query
  return products
    .filter((p) =>
      p.name.includes(translated) ||
      p.name.toLowerCase().includes(lower) ||
      p.shortDesc.includes(translated) ||
      p.shortDesc.toLowerCase().includes(lower) ||
      p.categoryLabel.includes(translated) ||
      p.categoryLabel.toLowerCase().includes(lower)
    )
    .slice(0, 5)
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [mobileQuery, setMobileQuery] = useState('')
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const { totalCount, setIsOpen: openCart } = useCart()
  const router = useRouter()
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
    setQuery('')
    setMobileQuery('')
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus()
  }, [searchOpen])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') { setSearchOpen(false); setQuery('') }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false)
        setQuery('')
      }
    }
    if (searchOpen) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [searchOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const results = filterProducts(query)
  const mobileResults = filterProducts(mobileQuery)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (results.length === 1) {
      router.push(`/products/${results[0].id}`)
      setSearchOpen(false)
      setQuery('')
    } else if (results.length > 1) {
      router.push('/products')
      setSearchOpen(false)
      setQuery('')
    }
  }

  const navLinks = [
    { href: '/products', label: '全部商品' },
    { href: '/products?category=cleaners', label: '清潔去污' },
    { href: '/products?category=wax-coating', label: '上蠟鍍膜' },
    { href: '/products?category=interior', label: '內裝護理' },
    { href: '/products?category=polisher', label: '拋光機具' },
    { href: '/products?category=tools', label: '洗車工具' },
    { href: '/about', label: '品牌故事' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-black/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 bg-neon rounded-sm flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 12 L8 2 L14 12" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.5 8 L11.5 8" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="font-display font-900 text-xl tracking-widest uppercase text-white group-hover:text-neon transition-colors">
            DetailPro
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-body font-medium text-zinc-400 hover:text-neon transition-colors tracking-wide uppercase"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <div ref={searchRef} className="relative">
            <button
              className="p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="搜尋"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-dark-2 border border-white/10 shadow-2xl">
                <form onSubmit={handleSearchSubmit} className="flex items-center border-b border-white/5">
                  <svg className="ml-3 flex-shrink-0 text-zinc-500" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="搜尋商品（支援中英文）..."
                    className="w-full bg-transparent text-sm font-body text-white placeholder-zinc-600 px-3 py-3 focus:outline-none"
                  />
                  {query && (
                    <button type="button" onClick={() => setQuery('')} className="mr-3 text-zinc-500 hover:text-white">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 6L6 18M6 6l12 12"/>
                      </svg>
                    </button>
                  )}
                </form>
                {query.length >= 1 && (
                  <div className="py-1">
                    {results.length > 0 ? results.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.id}`}
                        onClick={() => { setSearchOpen(false); setQuery('') }}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-dark-3 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-display font-600 group-hover:text-neon transition-colors">{p.name}</div>
                          <div className="text-xs text-zinc-500 font-body">{p.categoryLabel} · NT${p.price.toLocaleString()}</div>
                        </div>
                      </Link>
                    )) : (
                      <p className="px-4 py-3 text-sm text-zinc-500 font-body">找不到「{query}」相關商品</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={() => openCart(true)}
            className="relative p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="購物車"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
            </svg>
            {totalCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-neon text-black text-[10px] font-display font-700 w-4 h-4 flex items-center justify-center rounded-full leading-none">
                {totalCount > 9 ? '9+' : totalCount}
              </span>
            )}
          </button>

          <Link
            href="/products"
            className="bg-neon text-black text-sm font-display font-700 uppercase tracking-widest px-5 py-2 hover:bg-neon-dim transition-colors"
          >
            立即選購
          </Link>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => openCart(true)}
            className="relative p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="購物車"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
            </svg>
            {totalCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-neon text-black text-[10px] font-display font-700 w-4 h-4 flex items-center justify-center rounded-full leading-none">
                {totalCount > 9 ? '9+' : totalCount}
              </span>
            )}
          </button>
          <button
            className="p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="開啟選單"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/5 px-6 py-6 flex flex-col gap-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Mobile search */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center border border-white/10 px-3">
              <svg className="text-zinc-500 flex-shrink-0" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="搜尋商品（支援中英文）..."
                value={mobileQuery}
                className="w-full bg-transparent text-sm font-body text-white placeholder-zinc-600 px-3 py-2.5 focus:outline-none"
                onChange={(e) => setMobileQuery(e.target.value)}
              />
              {mobileQuery && (
                <button type="button" onClick={() => setMobileQuery('')} className="text-zinc-500 hover:text-white">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              )}
            </div>
            {/* Mobile search results */}
            {mobileResults.length > 0 && (
              <div className="bg-dark-3 border border-white/10">
                {mobileResults.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-dark-4 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-display font-600 text-neon">{p.name}</div>
                      <div className="text-xs text-zinc-500 font-body">{p.categoryLabel} · NT${p.price.toLocaleString()}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {mobileQuery.length >= 1 && mobileResults.length === 0 && (
              <p className="px-1 text-sm text-zinc-500 font-body">找不到「{mobileQuery}」相關商品</p>
            )}
          </div>

          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white font-display font-600 text-lg uppercase tracking-wider hover:text-neon transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/products"
            className="mt-2 bg-neon text-black text-center font-display font-700 uppercase tracking-widest px-5 py-3"
            onClick={() => setMenuOpen(false)}
          >
            立即選購
          </Link>
        </div>
      )}
    </header>
  )
}
