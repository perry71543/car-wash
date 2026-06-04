'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
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
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: '/products', label: '全部商品' },
            { href: '/products?category=shampoo', label: '洗車精' },
            { href: '/products?category=coating', label: '鍍膜蠟' },
            { href: '/products?category=tools', label: '工具' },
            { href: '/about', label: '品牌故事' },
          ].map(({ href, label }) => (
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
          <button className="p-2 text-zinc-400 hover:text-white transition-colors">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <Link
            href="/products"
            className="bg-neon text-black text-sm font-display font-700 uppercase tracking-widest px-5 py-2 hover:bg-neon-dim transition-colors"
          >
            立即選購
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="開啟選單"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {[
            { href: '/products', label: '全部商品' },
            { href: '/products?category=shampoo', label: '洗車精' },
            { href: '/products?category=coating', label: '鍍膜蠟' },
            { href: '/products?category=tools', label: '工具' },
            { href: '/about', label: '品牌故事' },
          ].map(({ href, label }) => (
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
