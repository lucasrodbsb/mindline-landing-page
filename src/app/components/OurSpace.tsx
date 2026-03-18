"use client";

import { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const base = "/assets/images/clinic";
const SPACES: Array<{ src: string; title: string; description?: string }> = [
  { src: `${base}/clinica-1.jpeg`, title: "Consultório 1", description: "Ar-condicionado · Sessões de psiquiatria" },
  { src: `${base}/clinica-2.jpeg`, title: "Consultório 2", description: "Ambiente acolhedor para terapia" },
  { src: `${base}/clinica-3.jpeg`, title: "Consultório infantil", description: "Espaço lúdico e seguro para crianças" },
  { src: `${base}/clinica-4.jpeg`, title: "Sala de espera", description: "Conforto e tranquilidade" },
  { src: `${base}/clinica-5.jpeg`, title: "Espaço de terapia", description: "Privacidade e acolhimento" },
  { src: `${base}/clinica-6.jpeg`, title: "Consultório 3", description: "Ambiente preparado para sessões" },
  { src: `${base}/clinica-7.jpeg`, title: "Sala de atendimento", description: "Conforto em cada sessão" },
  { src: `${base}/clinica-8.jpeg`, title: "Espaço Mindline", description: "Conforto e segurança" },
  { src: `${base}/clinica-9.jpeg`, title: "Consultório 4", description: "Ambiente climatizado" },
  { src: `${base}/clinica-10.jpeg`, title: "Recepção", description: "Recepção e acolhimento" },
  { src: `${base}/consultorio1.jpeg`, title: "Consultório", description: "Foco em seu bem-estar" },
  { src: `${base}/consultorio2.jpeg`, title: "Ambiente de sessão", description: "Acolhimento e privacidade" },
  { src: `${base}/consultorioinfantil.jpeg`, title: "Consultório infantil", description: "Atendimento especializado para crianças" },
];

type Direction = "prev" | "next";

const slideVariants = {
  enter: (dir: Direction) => ({
    x: dir === "next" ? "100%" : "-100%",
    opacity: 0,
    filter: "blur(12px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: (dir: Direction) => ({
    x: dir === "next" ? "-100%" : "100%",
    opacity: 0,
    filter: "blur(12px)",
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

function SlideCard({ space }: { space: (typeof SPACES)[0] }) {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden">
      <img
        src={space.src}
        alt={space.title}
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(86,39,79,0.88) 0%, rgba(86,39,79,0.35) 25%, transparent 55%)",
        }}
      />
    </div>
  );
}

export function OurSpace() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("next");

  const total = SPACES.length;
  const current = SPACES[currentIndex];
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const goTo = (index: number) => {
    if (index < 0) {
      setDirection("prev");
      setCurrentIndex(total - 1);
    } else if (index >= total) {
      setDirection("next");
      setCurrentIndex(0);
    } else {
      setDirection(index > currentIndex ? "next" : "prev");
      setCurrentIndex(index);
    }
  };

  return (
    <section
      id="nosso-espaço"
      className="relative py-14 sm:py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #f0f8fa 0%, #faf7ff 40%, #f5f0f9 100%)",
      }}
    >
      {/* Textura bem leve - pontinhos visíveis */}
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-6">
          <p className="text-[#8E79A2] text-xs font-semibold uppercase tracking-[0.18em] mb-2">
            Nosso espaço
          </p>
          <div className="h-0.5 w-10 bg-linear-to-r from-[#38AEC4] to-[#56274f] rounded-full" />
        </div>

        {/* Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className={`${plusJakarta.className} text-[#56274f] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4`}
          >
            Conheça nosso{" "}
            <span className="relative inline-block">
              espaço
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-1 rounded-full bg-linear-to-r from-[#38AEC4] via-[#8E79A2] to-[#56274F]" />
            </span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Um ambiente preparado para oferecer conforto, acolhimento e segurança em cada sessão
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Peek dos lados (prev/next borrados) - apenas desktop */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_2.2fr_1fr] gap-4 items-center">
            {/* Prev - borrado, só visual */}
            <div
              className="relative aspect-video rounded-2xl overflow-hidden"
              style={{
                filter: "blur(4px)",
                opacity: 0.75,
                transform: "scale(0.9)",
              }}
              aria-hidden
            >
              <img
                src={SPACES[prevIndex].src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Slide central */}
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden">
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <SlideCard space={current} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next - borrado, só visual */}
            <div
              className="relative aspect-video rounded-2xl overflow-hidden"
              style={{
                filter: "blur(4px)",
                opacity: 0.75,
                transform: "scale(0.9)",
              }}
              aria-hidden
            >
              <img
                src={SPACES[nextIndex].src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile / tablet: só o slide central + setas por cima */}
          <div className="lg:hidden relative aspect-16/10 max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <SlideCard space={current} />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={() => goTo(currentIndex - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-colors text-[#56274f]"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => goTo(currentIndex + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-colors text-[#56274f]"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Setas desktop (além do peek) */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none justify-between px-2">
            <button
              type="button"
              onClick={() => goTo(currentIndex - 1)}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white/95 hover:bg-white shadow-xl flex items-center justify-center transition-all text-[#56274f] hover:scale-110 -translate-x-2"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              type="button"
              onClick={() => goTo(currentIndex + 1)}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white/95 hover:bg-white shadow-xl flex items-center justify-center transition-all text-[#56274f] hover:scale-110 translate-x-2"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {SPACES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className="rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#56274f]/40 focus:ring-offset-2"
                aria-label={`Ir para slide ${index + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "w-8 h-2.5 bg-[#56274f]"
                      : "w-2.5 h-2.5 bg-[#56274f]/35 hover:bg-[#56274f]/55"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
