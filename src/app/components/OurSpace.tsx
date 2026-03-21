"use client";

import { useState, useRef, useCallback, useEffect } from "react";
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
            "linear-gradient(to top, rgba(86,39,79,0.72) 0%, rgba(86,39,79,0.22) 28%, transparent 62%)",
        }}
      />
    </div>
  );
}

function PeekThumb({
  space,
  side,
}: {
  space: (typeof SPACES)[0];
  side: "left" | "right";
}) {
  return (
    <div
      className={[
        "relative w-full aspect-3/4 sm:aspect-4/5 rounded-2xl overflow-hidden",
        "ring-1 ring-[#56274f]/10 shadow-md bg-white/60",
        side === "left" ? "origin-right scale-[0.94]" : "origin-left scale-[0.94]",
      ].join(" ")}
      aria-hidden
    >
      <img src={space.src} alt="" className="w-full h-full object-cover opacity-85" />
      <div
        className="absolute inset-0 pointer-events-none bg-linear-to-t from-[#56274f]/25 to-transparent"
        aria-hidden
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

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRaf = useRef<number | undefined>(undefined);

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

  const updateIndexFromScroll = useCallback(() => {
    const root = scrollRef.current;
    if (!root || root.clientWidth < 8) return;
    const rect = root.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    let best = 0;
    let bestDist = Infinity;
    root.querySelectorAll<HTMLElement>("[data-space-slide]").forEach((node, i) => {
      const nr = node.getBoundingClientRect();
      const cx = nr.left + nr.width / 2;
      const d = Math.abs(cx - centerX);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setCurrentIndex(best);
  }, []);

  const onScrollStrip = useCallback(() => {
    if (scrollRaf.current !== undefined) {
      cancelAnimationFrame(scrollRaf.current);
    }
    scrollRaf.current = requestAnimationFrame(updateIndexFromScroll);
  }, [updateIndexFromScroll]);

  useEffect(() => {
    updateIndexFromScroll();
  }, [updateIndexFromScroll]);

  const scrollToSlideMobile = useCallback((index: number) => {
    const el = scrollRef.current?.querySelector<HTMLElement>(
      `[data-space-slide="${index}"]`
    );
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const handleDotClick = (index: number) => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      goTo(index);
    } else {
      setCurrentIndex(index);
      scrollToSlideMobile(index);
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
          {/* Desktop: faixa contínua com destaque no centro */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_2.35fr_1fr] gap-5 lg:gap-6 items-center">
            <PeekThumb space={SPACES[prevIndex]} side="left" />

            <div
              className="relative aspect-16/10 rounded-3xl overflow-hidden z-1
                shadow-[0_28px_60px_-12px_rgba(86,39,79,0.35),0_12px_24px_-8px_rgba(56,174,196,0.18)]
                ring-[3px] ring-white ring-offset-4 ring-offset-[#f5f0f9]"
            >
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
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/95 hover:bg-white shadow-lg flex items-center justify-center transition-all text-[#56274f] hover:scale-105"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.25} />
              </button>
              <button
                type="button"
                onClick={() => goTo(currentIndex + 1)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/95 hover:bg-white shadow-lg flex items-center justify-center transition-all text-[#56274f] hover:scale-105"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={2.25} />
              </button>
            </div>

            <PeekThumb space={SPACES[nextIndex]} side="right" />
          </div>

          {/* Mobile / tablet: scroll-snap + peek nas bordas (sem setas) */}
          <div className="lg:hidden w-[calc(100%+2rem)] max-w-none -mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6">
            <div
              ref={scrollRef}
              onScroll={onScrollStrip}
              role="region"
              aria-roledescription="Carrossel"
              aria-label="Fotos do espaço — deslize para o lado"
              className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-1
                pl-[max(1rem,calc(50vw-42vw))] pr-[max(1rem,calc(50vw-42vw))]
                [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
                touch-pan-x"
            >
              {SPACES.map((space, index) => (
                <div
                  key={space.src}
                  data-space-slide={index}
                  className="snap-center shrink-0 w-[84vw] max-w-2xl aspect-16/10 rounded-3xl overflow-hidden z-1
                    shadow-[0_22px_48px_-10px_rgba(86,39,79,0.32),0_10px_20px_-6px_rgba(56,174,196,0.16)]
                    ring-2 ring-white"
                >
                  <SlideCard space={space} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 max-w-full overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex-nowrap sm:flex-wrap sm:overflow-visible">
            {SPACES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleDotClick(index)}
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
