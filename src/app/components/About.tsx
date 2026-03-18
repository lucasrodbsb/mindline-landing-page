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
    <section id="sobre" className="relative overflow-hidden bg-white py-14 sm:py-16">
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

      {/* Sócias */}
      <div className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8E79A2]">
            Quem está por trás da Mindline
          </p>
          <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
            Duas profissionais que compartilham o mesmo propósito:{" "}
            <span className="font-semibold text-[#56274f]">
              cuidar de pessoas com acolhimento e responsabilidade.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {partners.map((person) => (
            <div
              key={person.name}
              className="relative overflow-hidden rounded-3xl bg-white/80 border border-[#E4D9F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center px-6 py-7"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#38AEC4] via-[#6780B6] to-[#56274F]" />

              <div className="mb-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#56274f]/10 shadow-md">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-[#56274f] text-center font-semibold text-lg mb-1">
                {person.name}
              </h3>
              <p className="text-[#8E79A2] text-center text-xs md:text-sm mb-3">
                {person.role}
              </p>

              <p className="text-xs text-neutral-500 text-center max-w-xs">
                Atuação comprometida em criar um espaço seguro, ético e acolhedor para
                cada pessoa que busca apoio psicológico na Mindline.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
