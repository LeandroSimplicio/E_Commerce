import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/products.js'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-slate-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            O que dizem nossos clientes
          </h2>
          <p className="mt-2 text-slate-600">Depoimentos reais de quem comprou na Blue Store</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="mb-3 h-8 w-8 text-brand/60" />
              <p className="mb-4 flex-1 text-slate-600">&ldquo;{item.quote}&rdquo;</p>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: item.rating }, (_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <cite className="font-bold text-slate-900 not-italic">{item.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
