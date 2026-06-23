import { QuoteIcon } from "../icons";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  initial: string;
  avatarBg: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Antes da UNNI eu não sabia nem como montar um currículo. Hoje estou em processo seletivo na minha empresa dos sonhos.",
    name: "Beatriz S.",
    role: "Participante, 19 anos",
    location: "Recife, PE",
    initial: "B",
    avatarBg: "bg-indigo-600",
  },
  {
    quote:
      "A consultoria me deu ferramentas e, mais importante, me mostrou que eu tinha lugar nesse mercado.",
    name: "Marcos A.",
    role: "Participante, 21 anos",
    location: "Recife, PE",
    initial: "M",
    avatarBg: "bg-purple-500",
  },
  {
    quote:
      "Os jovens que conhecemos pela UNNI têm um nível de comprometimento e propósito que é difícil de encontrar. Contratamos quatro deles em menos de dois meses.",
    name: "Empresa Parceira",
    role: "Head de RH",
    location: "Recife, PE",
    initial: "P",
    avatarBg: "bg-teal-600",
  },
];

export function Testimonials() {
  return (
    <section class="bg-white py-24 lg:py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <div data-reveal="up">
          <p class="eyebrow mb-4">Depoimentos</p>
          <h2 class="text-3xl sm:text-4xl text-slate-900">Quem viveu, conta</h2>
        </div>

        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              data-reveal="up"
              data-delay={i + 1}
              class="rounded-2xl border border-slate-200 bg-slate-50/60 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
            >
              <QuoteIcon size={26} class="text-slate-300" />
              <p class="mt-4 text-slate-600 leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div class="mt-6 flex items-center gap-3">
                <span
                  class={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-semibold flex items-center justify-center shrink-0`}
                >
                  {t.initial}
                </span>
                <div>
                  <p class="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p class="text-slate-500 text-sm">
                    {t.role}
                    <br />
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
