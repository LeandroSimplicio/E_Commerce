import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { CATEGORIES, products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

const SORT_OPTIONS = [
  { value: 'default', label: 'Padrão' },
  { value: 'asc', label: 'Menor preço' },
  { value: 'desc', label: 'Maior preço' },
]

export default function ProductList({ onAddToCart }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [sort, setSort] = useState('default')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (search.trim()) {
      const term = search.trim().toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term),
      )
    }

    if (category !== 'Todos') {
      result = result.filter((p) => p.category === category)
    }

    if (sort === 'asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'desc') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [search, category, sort])

  return (
    <section id="produtos" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Nossos produtos
          </h2>
          <p className="mt-2 text-slate-600">
            Busque, filtre por categoria e ordene por preço
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-accent" />
        </div>

        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-end lg:p-5">
          <label className="flex-1">
            <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <Search className="h-3.5 w-3.5" />
              Buscar
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Nome ou descrição do produto..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </label>

          <label className="w-full lg:w-48">
            <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Categoria
            </span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>

          <label className="w-full lg:w-44">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Ordenar
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-300 py-16 text-center text-slate-500">
            Nenhum produto encontrado. Tente outro termo ou categoria.
          </p>
        ) : (
          <p className="mb-4 text-sm text-slate-500">
            {filteredProducts.length} produto(s) encontrado(s)
          </p>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
