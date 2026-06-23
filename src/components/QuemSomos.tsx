export function QuemSomos() {
  return (
    <section id="sobre" class="bg-white py-24 lg:py-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div data-reveal="left">
          <p class="eyebrow mb-4">Quem somos</p>
          <h2 class="text-3xl sm:text-4xl text-slate-900 leading-tight">
            Jovens acelerando
            <br />
            <span class="text-unni-gold">jovens</span>
          </h2>

          <p class="mt-6 text-slate-500 leading-relaxed">
            A UNNI é uma consultoria que aposta no potencial da juventude para
            mudar o futuro do trabalho. Existimos para derrubar as barreiras que
            ainda fazem o ponto de partida de cada jovem ser tão diferente,
            abrindo caminho para capacitação, oportunidades e conexões que mudam
            vidas de verdade.
          </p>

          <p class="mt-5 text-slate-500 leading-relaxed">
            Acreditamos num mercado mais diverso, sustentável e humano. Um lugar
            onde cada jovem possa ser{" "}
            <strong class="text-slate-700 font-semibold">
              protagonista da própria história
            </strong>{" "}
            e parte ativa da transformação ao seu redor.
          </p>
        </div>

        <div
          data-reveal="right"
          data-delay="1"
          class="relative max-w-md mx-auto lg:mx-0 lg:ml-auto w-full"
        >
          {/* Offset black backdrop card, matching the design's layered photo style */}
          <div class="absolute -top-4 -left-4 w-full h-full bg-unni-black rounded-2xl" />
          <img
            src="/images/quem-somos.jpg"
            alt="Grupo de colegas unindo as mãos ao centro em escritório"
            class="relative rounded-2xl w-full h-[420px] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
