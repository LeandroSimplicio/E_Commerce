import { ShoppingCart, Star } from 'lucide-react'
import { formatBRL } from '../data/products.js'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
      <div className="relative flex aspect-square items-center justify-center bg-gradient-to-b from-slate-50 to-white p-4">
        <span className="absolute top-3 left-3 rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-brand">
          {product.category}
        </span>
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="mb-1 line-clamp-2 font-bold text-slate-900">{product.name}</h3>
        <StarRating rating={product.rating} />
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-500">
          {product.description}
        </p>
        <p className="mt-3 text-xl font-extrabold text-brand">{formatBRL(product.price)}</p>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-accent py-2.5 text-sm font-semibold text-white transition hover:opacity-90 hover:shadow-md"
        >
          <ShoppingCart className="h-4 w-4" />
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  )
}
