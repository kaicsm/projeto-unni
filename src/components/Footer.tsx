import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Como atuamos", href: "#como-atuamos" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Causas", href: "#causas" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer class="bg-unni-black pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-1">
            <Logo className="h-9" />
            <p class="mt-5 text-white/50 text-sm leading-relaxed max-w-xs">
              Consultoria júnior de impacto social. Fundada em setembro de
              2025, Pernambuco.
            </p>
          </div>

          <div>
            <p class="tag-label text-white/40 mb-4">Navegação</p>
            <ul class="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    class="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p class="tag-label text-white/40 mb-4">Redes</p>
            <ul class="flex flex-col gap-3">
              <li>
                <a
                  href="https://instagram.com/projeto.unni"
                  target="_blank"
                  rel="noreferrer"
                  class="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:projetouni16758@gmail.com"
                  class="text-white/60 hover:text-white text-sm transition-colors"
                >
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-white/40 text-xs">
            © 2026 Projeto UNNI. Todos os direitos reservados.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-white/40 hover:text-white text-xs transition-colors">
              Política de Privacidade
            </a>
            <a href="#" class="text-white/40 hover:text-white text-xs transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
