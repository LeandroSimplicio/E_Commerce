import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950 pt-24 pb-16 text-white lg:pt-28 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.35),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-200">
            <Sparkles className="h-3.5 w-3.5" />
            Tecnologia & Games
          </span>
          <h1 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Eleve seu setup com a{' '}
            <span className="bg-gradient-to-r from-brand-light to-violet-300 bg-clip-text text-transparent">
              Blue Store
            </span>
          </h1>
          <p className="mb-8 max-w-xl text-base text-slate-300 sm:text-lg lg:mx-0 mx-auto">
            Periféricos gamer, hardware, smartphones e consoles com os melhores
            preços. Loja moderna, responsiva e pronta para o seu próximo nível.
          </p>
          <a
            href="#produtos"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105 hover:shadow-indigo-500/50"
          >
            Ver produtos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand/40 to-accent/40 blur-2xl" aria-hidden />
            <img
              src="/images/gaming-msi-header.png"
              alt="Setup gamer MSI"
              className="relative max-h-80 w-full max-w-lg object-contain drop-shadow-2xl lg:max-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
