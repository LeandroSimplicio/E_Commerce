import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductList from './components/ProductList.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import PromoSection from './components/PromoSection.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'
import { CheckCircle } from 'lucide-react'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item.id === product.id)
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id)
      return
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    )
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setCartItems([])

  const handleAddToCart = (product) => {
    addToCart(product)
    setCartOpen(true)
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) return
    setSuccessMessage(
      'Compra finalizada com sucesso! Obrigado por comprar na Blue Store.',
    )
    clearCart()
    setCartOpen(false)
    setTimeout(() => setSuccessMessage(''), 5000)
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <CartDrawer
        open={cartOpen}
        items={cartItems}
        total={cartTotal}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
        onCheckout={handleCheckout}
      />

      {successMessage && (
        <div
          role="alert"
          className="fixed top-24 right-4 left-4 z-[70] mx-auto flex max-w-md items-start gap-3 rounded-2xl border border-emerald-200 bg-white p-4 shadow-xl animate-fade-in md:left-auto"
        >
          <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-emerald-500" />
          <p className="text-sm font-medium text-slate-800">{successMessage}</p>
        </div>
      )}

      <main>
        <Hero />
        <ProductList onAddToCart={handleAddToCart} />
        <PromoSection />
        <Testimonials />
      </main>

      <Footer />
    </>
  )
}
