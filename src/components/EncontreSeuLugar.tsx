import { useState } from "preact/hooks";
import { CheckIcon } from "../icons";

interface TabContent {
  tab: string;
  heading: string;
  paragraph: string;
  cta: string;
  checklist: string[];
}

const TABS: TabContent[] = [
  {
    tab: "Para jovens",
    heading: "Seu talento já existe. A gente te conecta com quem precisa ver.",
    paragraph:
      "Se você tem vontade de crescer mas sente que o caminho até o mercado de trabalho é bem mais difícil pra você do que pros outros, você tem razão. E é justamente isso que a UNNI quer mudar.",
    cta: "Quero fazer parte",
    checklist: [
      "Workshops e trilhas de capacitação",
      "Mentoria com profissionais de mercado",
      "Visitas técnicas a empresas parceiras",
      "Conexão direta com vagas e processos seletivos",
    ],
  },
  {
    tab: "Para empresas",
    heading: "Talento diverso e pronto para crescer com o seu time.",
    paragraph:
      "Conectamos sua empresa a jovens talentosos, motivados e preparados pelos nossos programas de capacitação. Juntos, construímos processos seletivos mais diversos e mais humanos.",
    cta: "Quero ser parceiro",
    checklist: [
      "Acesso a um banco de jovens capacitados",
      "Programas de mentoria e voluntariado corporativo",
      "Apoio em processos seletivos e trilhas de estágio",
      "Visibilidade de marca empregadora junto à juventude",
    ],
  },
  {
    tab: "Para Instituições",
    heading: "Junte forças com a UNNI e amplie o seu impacto social.",
    paragraph:
      "Trabalhamos ao lado de ONGs, escolas e instituições parceiras para levar capacitação, mentoria e oportunidades a mais jovens, fortalecendo as redes de apoio que já existem nos territórios.",
    cta: "Quero ser parceiro",
    checklist: [
      "Programação de workshops e ações conjuntas",
      "Conexão com rede de empresas parceiras",
      "Apoio na mobilização e engajamento dos jovens",
      "Relatórios de impacto das ações realizadas",
    ],
  },
];

export function EncontreSeuLugar() {
  const [active, setActive] = useState(0);
  const content = TABS[active]!;

  return (
    <section id="para-quem" class="bg-white py-24 lg:py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <h2
          data-reveal="up"
          class="text-3xl sm:text-4xl text-center text-slate-900"
        >
          Encontre o seu lugar <span class="text-unni-gold">aqui</span>
        </h2>

        <div
          data-reveal="up"
          data-delay="1"
          class="mt-9 flex justify-center gap-3 flex-wrap"
        >
          {TABS.map((t, i) => (
            <button
              key={t.tab}
              type="button"
              onClick={() => setActive(i)}
              class={`btn text-sm py-2.5 px-6 ${
                i === active ? "btn-primary" : "btn-outline-dark"
              }`}
            >
              {t.tab}
            </button>
          ))}
        </div>

        <div
          data-reveal="up"
          data-delay="2"
          class="mt-12 bg-indigo-50 rounded-3xl p-8 sm:p-12 grid lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h3 class="text-2xl sm:text-[1.75rem] leading-snug text-slate-900">
              {content.heading}
            </h3>
            <p class="mt-5 text-slate-500 leading-relaxed">
              {content.paragraph}
            </p>
            <a href="#contato" class="btn btn-primary mt-7 text-sm">
              {content.cta}
            </a>
          </div>

          <div class="flex flex-col gap-4">
            {content.checklist.map((item, i) => (
              <div
                key={item}
                class="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm shadow-slate-200/60 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-unni-blue text-white shrink-0">
                  <CheckIcon size={13} />
                </span>
                <span class="text-slate-700 text-[0.95rem]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
