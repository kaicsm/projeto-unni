interface Cause {
  month: string;
  theme: string;
  title: string;
  text: string;
  accent: string;
  bg: string;
  border: string;
}

const CAUSES: Cause[] = [
  {
    month: "Maio",
    theme: "Laranja",
    title: "Proteção à infância e adolescência",
    text: "Levantamos a voz contra toda forma de violência, abuso e negligência com crianças e adolescentes, somando força a entidades de proteção.",
    accent: "text-orange-600",
    bg: "bg-gradient-to-b from-orange-50 to-white",
    border: "border-orange-100",
  },
  {
    month: "Junho",
    theme: "Vermelho",
    title: "Incentivo à doação de sangue",
    text: "Incentivamos e organizamos campanhas de doação voluntária de sangue ao lado de hemocentros e clínicas da nossa rede.",
    accent: "text-red-500",
    bg: "bg-gradient-to-b from-red-50 to-white",
    border: "border-red-100",
  },
  {
    month: "Junho",
    theme: "Colorido",
    title: "Apoio à diversidade LGBTQIAPN+",
    text: "Celebramos e defendemos a diversidade em todas as suas formas, abrindo espaço para diálogo, visibilidade e ambientes corporativos.",
    accent: "text-purple-500",
    bg: "bg-gradient-to-b from-purple-50 to-white",
    border: "border-purple-100",
  },
  {
    month: "Julho",
    theme: "Amarelo",
    title: "Prevenção às hepatites virais",
    text: "Levamos ações educativas e ajudamos a aproximar serviços de saúde dos territórios onde a UNNI está presente.",
    accent: "text-amber-600",
    bg: "bg-gradient-to-b from-yellow-50 to-white",
    border: "border-yellow-100",
  },
];

export function Causas() {
  return (
    <section id="causas" class="bg-slate-50 py-24 lg:py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-reveal="left" class="max-w-2xl">
          <p class="eyebrow mb-4">Calendário de causas</p>
          <h2 class="text-3xl sm:text-4xl text-slate-900">
            A UNNI em <span class="text-unni-gold">ação.</span>
          </h2>
          <p class="mt-5 text-slate-500 leading-relaxed">
            Nosso calendário destaca frentes essenciais de conscientização. Por
            meio de ações direcionadas, apoiamos organizações parceiras e
            engajamos a rede em causas que geram impacto social.
          </p>
        </div>

        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAUSES.map((cause, i) => (
            <div
              key={cause.title}
              data-reveal="up"
              data-delay={i + 1}
              class={`rounded-2xl border ${cause.border} ${cause.bg} p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <p class={`tag-label ${cause.accent} leading-snug mb-4`}>
                {cause.month}
                <br />
                {cause.theme}
              </p>
              <h3 class="text-lg font-semibold text-slate-900 leading-snug">
                {cause.title}
              </h3>
              <p class="mt-3 text-sm text-slate-500 leading-relaxed">
                {cause.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
