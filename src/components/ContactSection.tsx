import { useState } from "preact/hooks";
import type { JSX } from "preact";
import { MailIcon, InstagramIcon } from "../icons";

// Web3Forms access keys are public and injected into the browser bundle at build time.
const WEB3FORMS_KEY = process.env.WEB3FORMS_SECRET ?? "";

type RoleOption = "Jovem" | "Empresa" | "Instituição";

const ROLE_OPTIONS: RoleOption[] = ["Jovem", "Empresa", "Instituição"];

export function ContactSection() {
  const [role, setRole] = useState<RoleOption>("Jovem");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!WEB3FORMS_KEY) {
      setError(
        "O formulário está indisponível no momento. Envie um e-mail para projetouni16758@gmail.com.",
      );
      setLoading(false);
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[UNNI] Novo contato — ${role}`,
          from_name: "UNNI Landing Page",
          name: data.get("name"),
          email: data.get("email"),
          role,
          message: data.get("message"),
          // Campo honeypot anti-spam exigido pelo Web3Forms
          botcheck: "",
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
        setRole("Jovem");
      } else {
        setError(result.message ?? "Algo deu errado. Tente novamente.");
      }
    } catch {
      setError("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" class="bg-unni-navy py-24 lg:py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div data-reveal="up">
          <p class="eyebrow mb-4">Fale conosco</p>
          <h2 class="text-3xl sm:text-4xl text-white leading-tight">
            Vamos construir <span class="text-unni-gold">juntos</span> o futuro
          </h2>
          <p class="mt-5 text-white/70 leading-relaxed max-w-md">
            Empresa, instituição ou jovem que quer fazer parte: a gente quer
            ouvir você. Manda uma mensagem aqui e respondemos em até 48 horas.
          </p>

          <div class="mt-10 flex flex-col gap-4">
            <a
              href="mailto:projetouni16758@gmail.com"
              class="flex items-center gap-3 text-white/85 hover:text-white transition-colors"
            >
              <MailIcon />
              projetouni16758@gmail.com
            </a>
            <a
              href="https://instagram.com/projeto.unni"
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-3 text-white/85 hover:text-white transition-colors"
            >
              <InstagramIcon />
              @projeto.unni
            </a>
          </div>
        </div>

        {submitted ? (
          <div
            data-reveal="scale"
            class="flex flex-col items-center justify-center text-center gap-4 bg-white/5 rounded-3xl px-8 py-16"
          >
            <span class="text-4xl">🎉</span>
            <h3 class="text-xl text-white font-semibold">Mensagem enviada!</h3>
            <p class="text-white/60 max-w-xs">
              Recebemos seu contato e responderemos em até 48 horas.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              class="mt-2 text-unni-gold text-sm underline underline-offset-4 hover:text-yellow-300 transition-colors"
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form
            data-reveal="up"
            data-delay="1"
            onSubmit={handleSubmit}
            class="flex flex-col gap-5"
          >
            <div>
              <label
                class="block text-white text-sm font-medium mb-2"
                for="name"
              >
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Seu nome"
                class="w-full rounded-full bg-white/10 placeholder-white/40 text-white px-5 py-3.5 outline-none focus:ring-2 focus:ring-unni-gold/70 transition"
              />
            </div>

            <div>
              <label
                class="block text-white text-sm font-medium mb-2"
                for="email"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="seu@email.com"
                class="w-full rounded-full bg-white/10 placeholder-white/40 text-white px-5 py-3.5 outline-none focus:ring-2 focus:ring-unni-gold/70 transition"
              />
            </div>

            <div>
              <p class="block text-white text-sm font-medium mb-2">Você é</p>
              <div class="flex gap-3 flex-wrap">
                {ROLE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setRole(opt)}
                    class={`rounded-full px-5 py-2 text-sm font-medium border transition ${
                      role === opt
                        ? "bg-unni-blue/20 border-unni-blue text-white"
                        : "border-white/20 text-white/60 hover:text-white"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                class="block text-white text-sm font-medium mb-2"
                for="message"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Como podemos trabalhar juntos?"
                class="w-full rounded-2xl bg-white/10 placeholder-white/40 text-white px-5 py-4 outline-none focus:ring-2 focus:ring-unni-gold/70 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              class="btn btn-primary w-full mt-2 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando…" : "Seja parceiro da UNNI"}
            </button>

            {error && <p class="text-red-400 text-sm text-center">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
