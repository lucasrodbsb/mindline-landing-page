"use client";

import { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  UserCircle,
  Clock,
  Heart,
  Home,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const benefits: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
}> = [
  {
    title: "Acompanhamento personalizado",
    description: "Terapia sob medida para suas necessidades",
    Icon: UserCircle,
  },
  {
    title: "Flexibilidade de horários",
    description: "Atendimento no horário que caiba na sua rotina",
    Icon: Clock,
  },
  {
    title: "Livre de julgamentos",
    description: "Espaço seguro para se expressar",
    Icon: Heart,
  },
  {
    title: "Ambiente acolhedor",
    description: "Clínica preparada para seu conforto",
    Icon: Home,
  },
  {
    title: "Profissionais qualificados",
    description: "Equipe especializada em saúde mental",
    Icon: GraduationCap,
  },
];

export function Benefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="benefícios"
      className="relative py-14 sm:py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #56274f 0%, #6b3a63 25%, #4a5f8e 60%, #386b7a 100%)",
      }}
    >
      {/* Leve textura/brilho */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56,174,196,0.4), transparent), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(194,180,207,0.2), transparent)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-6">
          <p className="text-white/80 text-xs font-semibold uppercase tracking-[0.18em] mb-2">
            Benefícios
          </p>
          <div className="h-0.5 w-10 bg-linear-to-r from-[#38AEC4] to-white rounded-full" />
        </div>

        {/* Title - fonte branca */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`${plusJakarta.className} text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4`}
          >
            Por que escolher a{" "}
            <span className="relative inline-block">
              Mindline
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-1 rounded-full bg-linear-to-r from-[#38AEC4] via-white/90 to-[#C2B4CF]" />
            </span>
            ?
          </h2>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Oferecemos um espaço terapêutico completo, pensado para o seu bem-estar
          </p>
        </div>

        {/* Benefits Cards - glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {benefits.map((benefit, index) => {
            const isHovered = hoveredIndex === index;
            const isBlurred = hoveredIndex !== null && !isHovered;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  filter: isBlurred ? "blur(4px)" : "none",
                  opacity: isBlurred ? 0.65 : 1,
                }}
              >
              {/* Brilho sutil no topo (efeito vidro) */}
              <div
                className="absolute inset-x-0 h-px top-0 bg-linear-to-b from-white/30 to-transparent pointer-events-none"
                aria-hidden
              />
              <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-3xl bg-linear-to-r from-[#38AEC4] via-[#6780B6] to-[#56274F] opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Ícone em círculo com gradiente + anel em glass */}
              <div className="relative mb-5">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white shrink-0 ring-4 ring-white/20"
                  style={{
                    background:
                      "linear-gradient(135deg, #38AEC4, #4F8EC2, #6780B6, #8E79A2, #56274F)",
                    boxShadow:
                      "0 8px 24px rgba(86, 39, 79, 0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                >
                  <benefit.Icon className="w-8 h-8 md:w-9 md:h-9" strokeWidth={2} aria-hidden />
                </div>
              </div>

              <h3
                className={`${plusJakarta.className} text-white font-bold text-base md:text-lg mb-2 leading-tight`}
              >
                {benefit.title}
              </h3>
              <p className="text-white/85 text-xs md:text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
