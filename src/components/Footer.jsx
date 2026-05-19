import { Github, Linkedin } from 'lucide-react'

const links = ['Cupons', 'Blog', 'Políticas', 'Afiliados']

export default function Footer() {
  return (
    <footer id="contato" className="bg-surface text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="mb-1 font-bold text-white">Baixe nosso app</p>
          <p className="mb-4 text-sm">Disponível para Android e iOS</p>
          <div className="flex flex-wrap gap-3">
            <img
              src="/images/app-store.png"
              alt="App Store"
              className="h-10 cursor-pointer opacity-90 transition hover:opacity-100 sm:h-12"
            />
            <img
              src="/images/play-store.png"
              alt="Play Store"
              className="h-10 cursor-pointer opacity-90 transition hover:opacity-100 sm:h-12"
            />
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-bold text-white">
            <span className="text-brand-light">Blue</span>STORE
          </h3>
          <p className="text-sm leading-relaxed">
            E-commerce de tecnologia e games — projeto de portfólio demonstrando
            React, Tailwind CSS, carrinho funcional e filtros.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/LeandroSimplicio"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white/10 p-2 transition hover:bg-brand"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/leandro-simplicio"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white/10 p-2 transition hover:bg-brand"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-white">Links úteis</h3>
          <ul className="space-y-2 text-sm">
            {links.map((label) => (
              <li key={label}>
                <button type="button" className="transition hover:text-white">
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-white/10" />
      <p className="py-6 text-center text-xs text-slate-500 sm:text-sm">
        © {new Date().getFullYear()} Leandro Simplicio — Blue Store — Todos os direitos reservados
      </p>
    </footer>
  )
}
