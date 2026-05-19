import { useEffect } from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatBRL } from '../data/products.js'

export default function CartDrawer({
  open,
  items,
  total,
  onClose,
  onUpdateQuantity,
  onRemove,
  onClear,
  onCheckout,
}) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex justify-end" role="dialog" aria-modal="true" aria-label="Carrinho">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fechar carrinho"
      />

      <aside className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-fade-in">
        <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <ShoppingBag className="h-5 w-5 text-brand" />
            Seu carrinho
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="py-16 text-center text-slate-500">
              Carrinho vazio. Adicione produtos para continuar.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 shrink-0 rounded-lg bg-white object-contain p-1"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="truncate font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm font-bold text-brand">
                      {formatBRL(item.price)}
                    </p>
                    <p className="text-xs text-slate-500">
                      Subtotal: {formatBRL(item.price * item.quantity)}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50"
                        aria-label="Diminuir"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-[2ch] text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50"
                        aria-label="Aumentar"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemove(item.id)}
                        className="ml-auto rounded-lg p-2 text-red-500 hover:bg-red-50"
                        aria-label="Remover"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-slate-100 px-5 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold text-slate-700">Total</span>
              <span className="text-xl font-extrabold text-brand">{formatBRL(total)}</span>
            </div>
            <button
              type="button"
              onClick={onCheckout}
              className="mb-2 w-full rounded-xl bg-gradient-to-r from-brand to-accent py-3 font-semibold text-white transition hover:opacity-90 hover:shadow-lg"
            >
              Finalizar compra
            </button>
            <button
              type="button"
              onClick={onClear}
              className="w-full py-2 text-sm text-slate-500 hover:text-slate-700"
            >
              Limpar carrinho
            </button>
          </footer>
        )}
      </aside>
    </div>
  )
}
