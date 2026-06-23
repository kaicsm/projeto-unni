import { useState } from "preact/hooks";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Como atuamos", href: "#como-atuamos" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Causas", href: "#causas" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header class="absolute top-0 inset-x-0 z-50 hero-fade-in">
      <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-6">
        <Logo className="h-8 md:h-9" />

        {/* Desktop links */}
        <div class="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              class="text-white/90 text-sm font-medium hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div class="hidden lg:block">
          <a href="#contato" class="btn btn-primary text-sm">
            Seja parceiro
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Abrir menu"
          class="lg:hidden text-white p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            {open ? (
              <path d="M6 6 18 18M18 6 6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div class="lg:hidden bg-unni-navy/98 backdrop-blur-sm mx-4 rounded-2xl px-6 py-6 flex flex-col gap-5 shadow-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              class="text-white text-base font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            class="btn btn-primary text-sm mt-1"
            onClick={() => setOpen(false)}
          >
            Seja parceiro
          </a>
        </div>
      )}
    </header>
  );
}
