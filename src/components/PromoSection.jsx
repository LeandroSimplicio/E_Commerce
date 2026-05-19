import { ArrowRight } from 'lucide-react'

export default function PromoSection() {
  return (
    <section
      id="promo"
      className="bg-gradient-to-r from-slate-900 via-indigo-950 to-violet-950 py-16 text-white lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
            Oferta exclusiva
          </span>
          <h2 className="mt-2 mb-4 text-3xl font-extrabold sm:text-4xl">Mi Smart Band 4</h2>
          <p className="mb-6 leading-relaxed text-slate-300">
            Tela AMOLED 39,9% maior que a geração anterior, brilho ajustável e
            monitoramento completo de saúde. O companheiro ideal para quem busca
            tecnologia no pulso.
          </p>
          <a
            href="#produtos"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
          >
            Conferir oferta
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <img
            src="/images/exclusive.png"
            alt="Mi Smart Band 4"
            className="max-h-72 w-full max-w-md object-contain drop-shadow-2xl lg:max-h-96"
          />
        </div>
      </div>
    </section>
  )
}
