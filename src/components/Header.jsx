import { useState } from 'react'
import { Menu, ShoppingCart, X } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Destaques', href: '#promo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-surface/90 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#inicio" className="text-xl font-extrabold tracking-tight lg:text-2xl">
          <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">
            Blue
          </span>
          <span className="text-white">STORE</span>
        </a>

        <nav
          className={`absolute top-full right-0 left-0 border-t border-white/10 bg-surface px-4 py-4 lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0 ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white lg:px-0 lg:py-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onCartClick}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-brand hover:scale-105"
            aria-label={`Carrinho${cartCount > 0 ? `, ${cartCount} itens` : ''}`}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-bold text-white">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  )
}
