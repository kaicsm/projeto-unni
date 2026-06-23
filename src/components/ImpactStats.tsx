const STATS = [
  { value: "120+", label: "Jovens impactados", sub: "em 8 meses de operação" },
  {
    value: "24",
    label: "Ações realizadas",
    sub: "workshops, eventos e visitas",
  },
  { value: "8", label: "Parceiros ativos", sub: "empresas e instituições" },
  {
    value: "94%",
    label: "NPS dos participantes",
    sub: "empresas e instituições",
  },
];

export function ImpactStats() {
  return (
    <section class="bg-unni-navy py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <div data-reveal="up">
          <p class="eyebrow mb-4">Impacto em números</p>
          <h2 class="text-3xl sm:text-4xl text-white">
            Resultados que falam por si
          </h2>
        </div>

        <div class="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal="up"
              data-delay={i + 1}
              class={`px-4 ${i !== 0 ? "lg:border-l lg:border-white/15" : ""}`}
            >
              <div class="font-serif text-5xl sm:text-6xl text-unni-gold">
                {stat.value}
              </div>
              <p class="mt-3 text-white font-semibold">{stat.label}</p>
              <p class="mt-1 text-white/50 text-sm">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
