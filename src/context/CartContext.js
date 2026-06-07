'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'detailpro-cart'

function loadFromStorage() {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadFromStorage)
  const [isOpen, setIsOpen] = useState(false)
  const [toast, setToast] = useState({ message: '', visible: false })

  // Sync to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // storage quota exceeded or private mode — silently ignore
    }
  }, [items])

  const showToast = useCallback((productName) => {
    setToast({ message: productName, visible: true })
    const timer = setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 2000)
    return () => clearTimeout(timer)
  }, [])

  const addItem = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { ...product, qty }]
    })
    setIsOpen(true)
    showToast(product.name)
  }, [showToast])

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQty = useCallback((id, qty) => {
    if (qty < 1) return
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totalCount = items.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalCount,
        totalPrice,
        isOpen,
        setIsOpen,
        toast,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
