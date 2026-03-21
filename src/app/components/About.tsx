import { Heart, Brain, HandHeart, Sparkles } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { InteractiveLogo } from "./InteractiveLogo";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const pillars = [
  { icon: Heart, label: "Bem-estar" },
  { icon: Brain, label: "Autoconhecimento" },
  { icon: HandHeart, label: "Apoio emocional" },
  { icon: Sparkles, label: "Mente saudável" },
];

const partners = [
  {
    name: "Amanda Jessy",
    role: "Fundadora e Psicóloga",
    image: "/assets/images/amanda.png",
  },
  {
    name: "Vitoria Colins",
    role: "Co-fundadora e Sócia Administrativa",
    image: "/assets/images/vitoria.png",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-10 sm:py-16">
      {/* Textura bem leve - pontinhos */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(86, 39, 79, 0.14) 1.5px, transparent 0)
          `,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <h2
        className={`${plusJakarta.className} text-[#56274f] text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-10`}
      >
        Sobre a{" "}
        <span className="relative inline-block">
          Mindline
          <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-1 rounded-full bg-linear-to-r from-[#38AEC4] via-[#8E79A2] to-[#56274F]" />
        </span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 items-center">
        {/* Texto */}
        <div className="max-w-3xl mx-auto sm:mx-0 sm:text-left text-center space-y-6">
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
            Na{" "}
            <span className="font-extrabold text-[#56274f]">Mindline</span>, somos
            especializados em ajudar pessoas a se reconectarem consigo mesmas, com
            seus valores e com seus propósitos de vida. Desde a abertura da clínica,
            trabalhamos para que nosso espaço ofereça acolhimento, humanidade e
            segurança.
          </p>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
            Nossa abordagem tem como objetivo ajudá-lo a enfrentar os desafios do dia
            a dia, superar dores emocionais e alcançar a plenitude do seu bem-estar.
            Contamos com uma equipe altamente qualificada, que utiliza diversas
            abordagens terapêuticas para atender crianças, adolescentes, adultos,
            casais e famílias.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 pt-1">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="inline-flex items-center gap-2 rounded-full border border-[#E4D9F0] bg-[#faf7ff] px-3 py-1 text-xs md:text-sm text-[#56274f]"
              >
                <pillar.icon className="w-4 h-4" aria-hidden />
                <span>{pillar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Logo - mantida, apenas centralizada e com moldura suave */}
        <div className="text-center">
          <div className="inline-flex justify-center rounded-3xl px-6 py-6 sm:px-8 sm:py-8 drop-shadow-2xl shadow-white">
            <InteractiveLogo />
          </div>
        </div>
      </div>

      {/* Sócias — mobile: carrossel com scroll-snap; sm+: grid */}
      <div className="max-w-5xl mx-auto mt-10 sm:mt-14 px-0 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 space-y-1.5 sm:space-y-2 px-4 sm:px-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8E79A2]">
            Quem está por trás da Mindline
          </p>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl mx-auto leading-snug sm:leading-relaxed">
            Duas profissionais que compartilham o mesmo propósito:{" "}
            <span className="font-semibold text-[#56274f]">
              cuidar de pessoas com acolhimento e responsabilidade.
            </span>
          </p>
        </div>

        <div
          className="
            flex sm:grid sm:grid-cols-2 gap-3 sm:gap-8 md:gap-10
            overflow-x-auto snap-x snap-mandatory sm:overflow-visible sm:snap-none
            pl-[max(1rem,calc(50vw-42vw))] pr-[max(1rem,calc(50vw-42vw))] sm:pl-0 sm:pr-0
            pb-1 sm:pb-0
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            touch-pan-x
          "
        >
          {partners.map((person) => (
            <article
              key={person.name}
              className="
                snap-center shrink-0 w-[84vw] max-w-90 sm:w-auto sm:max-w-none sm:shrink sm:min-w-0
                relative overflow-hidden rounded-2xl sm:rounded-3xl
                bg-white/90 border border-[#E4D9F0] shadow-[0_8px_30px_-8px_rgba(86,39,79,0.12)]
                flex flex-col items-center text-center
                px-4 py-5 sm:px-6 sm:py-7
                transition-all duration-200 sm:hover:shadow-md sm:hover:-translate-y-1
              "
            >
              <div className="absolute inset-x-0 top-0 h-0.5 sm:h-1 bg-linear-to-r from-[#38AEC4] via-[#6780B6] to-[#56274F]" />

              <div className="mb-3 sm:mb-4">
                <div className="relative w-19 h-19 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-[3px] sm:ring-4 ring-[#56274f]/10 shadow-md">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3
                className={`${plusJakarta.className} text-[#56274f] font-semibold text-base sm:text-lg mb-0.5 sm:mb-1 leading-tight`}
              >
                {person.name}
              </h3>
              <p className="text-[#8E79A2] text-xs md:text-sm mb-2 sm:mb-3 leading-snug px-0.5">
                {person.role}
              </p>

              <p className="text-xs text-neutral-500 leading-relaxed max-w-70 sm:max-w-xs mx-auto">
                Atuação comprometida em criar um espaço seguro, ético e acolhedor para
                cada pessoa que busca apoio psicológico na Mindline.
              </p>
            </article>
          ))}
        </div>

        <p className="sm:hidden text-center text-[0.65rem] text-[#8E79A2]/90 mt-3 px-6">
          Deslize para ver a outra profissional
        </p>
      </div>
    </section>
  );
}
