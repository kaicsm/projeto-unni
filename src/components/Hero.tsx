export function Hero() {
  return (
    <section
      id="top"
      class="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background photo — subtle Ken Burns zoom on load */}
      <img
        src="/images/hero-background.jpg"
        alt="Grupo de jovens amigos observando a paisagem juntos"
        class="absolute inset-0 w-full h-full object-cover hero-zoom"
      />
      {/* Gradient overlay */}
      <div class="absolute inset-0 bg-gradient-to-r from-unni-black/85 via-unni-navy/55 to-unni-navy/10 hero-fade-in" />
      <div class="absolute inset-0 bg-gradient-to-t from-unni-black/40 via-transparent to-unni-black/30 hero-fade-in" />

      <div class="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28 pb-20">
        <div class="max-w-xl">
          <h1 class="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-white hero-fade-up">
            Seu próximo passo começa <span class="text-unni-gold">aqui.</span>
          </h1>

          <p class="mt-6 text-white/85 text-base sm:text-lg leading-relaxed max-w-md hero-fade-up anim-delay-1">
            A UNNI é uma consultoria júnior de impacto social feita por jovens,
            para jovens. É onde você amplia seus horizontes, encontra quem já
            trilhou o caminho e começa a construir o seu.
          </p>

          <div class="mt-9 flex flex-wrap gap-4 hero-fade-up anim-delay-2">
            <a href="#contato" class="btn btn-primary">
              Quero fazer parte
            </a>
            <a href="#sobre" class="btn btn-outline">
              Conheça a UNNI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
