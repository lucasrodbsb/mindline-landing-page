"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type CSSProperties,
} from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  Clock,
  GraduationCap,
  Sofa,
  MessageCircleHeart,
  HeartHandshake,
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
    Icon: HeartHandshake,
  },
  {
    title: "Flexibilidade de horários",
    description: "Atendimento no horário que caiba na sua rotina",
    Icon: Clock,
  },
  {
    title: "Livre de julgamentos",
    description: "Espaço seguro para se expressar",
    Icon: MessageCircleHeart,
  },
  {
    title: "Ambiente acolhedor",
    description: "Clínica preparada para seu conforto",
    Icon: Sofa,
  },
  {
    title: "Profissionais qualificados",
    description: "Equipe especializada em saúde mental",
    Icon: GraduationCap,
  },
];

const cardGlassStyle: CSSProperties = {
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow:
    "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
};

function BenefitCardContent({
  benefit,
  layout,
}: {
  benefit: (typeof benefits)[0];
  layout: "carousel" | "grid";
}) {
  const isCarousel = layout === "carousel";
  return (
    <>
      <div
        className="absolute inset-x-0 h-px top-0 bg-linear-to-b from-white/30 to-transparent pointer-events-none"
        aria-hidden
      />
      <div
        className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-[#38AEC4] via-[#6780B6] to-[#56274F] transition-opacity ${
          isCarousel ? "rounded-t-3xl opacity-90" : "rounded-t-2xl sm:rounded-t-3xl opacity-80 sm:opacity-60 sm:group-hover:opacity-100"
        }`}
      />

      <div className={`relative shrink-0 ${isCarousel ? "mb-4" : "sm:mb-5"}`}>
        <div
          className={`rounded-full flex items-center justify-center text-white ring-white/20 ${
            isCarousel
              ? "w-16 h-16 ring-4"
              : "w-11 h-11 ring-2 sm:w-16 sm:h-16 md:w-20 md:h-20 sm:ring-4"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #38AEC4, #4F8EC2, #6780B6, #8E79A2, #56274F)",
            boxShadow:
              "0 6px 18px rgba(86, 39, 79, 0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
          }}
        >
          <benefit.Icon
            className={
              isCarousel
                ? "w-8 h-8"
                : "w-5 h-5 sm:w-8 sm:h-8 md:w-9 md:h-9"
            }
            strokeWidth={2}
            aria-hidden
          />
        </div>
      </div>

      <div
        className={`min-w-0 ${isCarousel ? "w-full text-center" : "flex-1 sm:flex-none sm:w-full text-left sm:text-center"}`}
      >
        <h3
          className={`${plusJakarta.className} text-white font-bold leading-snug sm:leading-tight ${
            isCarousel
              ? "text-base mb-2"
              : "text-[0.9375rem] sm:text-base md:text-lg mb-0.5 sm:mb-2"
          }`}
        >
          {benefit.title}
        </h3>
        <p
          className={`text-white/82 leading-snug sm:leading-relaxed ${
            isCarousel ? "text-sm" : "text-xs md:text-sm"
          }`}
        >
          {benefit.description}
        </p>
      </div>
    </>
  );
}

export function Benefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRaf = useRef<number | undefined>(undefined);

  const updateActiveFromScroll = useCallback(() => {
    const root = scrollRef.current;
    if (!root || root.clientWidth < 8) return;
    const rect = root.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    let best = 0;
    let bestDist = Infinity;
    root.querySelectorAll<HTMLElement>("[data-benefit-slide]").forEach((node, i) => {
      const nr = node.getBoundingClientRect();
      const cx = nr.left + nr.width / 2;
      const d = Math.abs(cx - centerX);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActiveSlide(best);
  }, []);

  const onScrollStrip = useCallback(() => {
    if (scrollRaf.current !== undefined) {
      cancelAnimationFrame(scrollRaf.current);
    }
    scrollRaf.current = requestAnimationFrame(updateActiveFromScroll);
  }, [updateActiveFromScroll]);

  useEffect(() => {
    updateActiveFromScroll();
  }, [updateActiveFromScroll]);

  const scrollToSlide = useCallback((index: number) => {
    const root = scrollRef.current;
    const el = root?.querySelector<HTMLElement>(`[data-benefit-slide="${index}"]`);
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  return (
    <section
      id="benefícios"
      className="relative py-10 sm:py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #56274f 0%, #6b3a63 25%, #4a5f8e 60%, #386b7a 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56,174,196,0.4), transparent), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(194,180,207,0.2), transparent)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 sm:mb-6">
          <p className="text-white/80 text-xs font-semibold uppercase tracking-[0.18em] mb-2">
            Benefícios
          </p>
          <div className="h-0.5 w-10 bg-linear-to-r from-[#38AEC4] to-white rounded-full" />
        </div>

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className={`${plusJakarta.className} text-white text-[1.65rem] leading-snug sm:text-3xl sm:leading-tight md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4`}
          >
            Por que escolher a{" "}
            <span className="relative inline-block">
              Mindline
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 sm:-bottom-1 h-0.5 sm:h-1 rounded-full bg-linear-to-r from-[#38AEC4] via-white/90 to-[#C2B4CF]" />
            </span>
            ?
          </h2>
          <p className="text-white/88 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-snug sm:leading-relaxed px-1">
            Oferecemos um espaço terapêutico completo, pensado para o seu bem-estar
          </p>
        </div>

        {/* Mobile / tablet: carrossel com peek + swipe (scroll-snap) */}
        <div className="lg:hidden relative w-[calc(100%+2rem)] max-w-none -mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6">
          <div
            ref={scrollRef}
            onScroll={onScrollStrip}
            role="region"
            aria-roledescription="Carrossel"
            aria-label="Benefícios da Mindline — deslize para o lado"
            className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-1
              pl-[max(1rem,calc(50vw-42vw))] pr-[max(1rem,calc(50vw-42vw))]
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              touch-pan-x"
          >
            {benefits.map((benefit, index) => (
              <article
                key={index}
                data-benefit-slide={index}
                className="group relative snap-center shrink-0 w-[84vw] max-w-90
                  overflow-hidden rounded-3xl px-6 pt-7 pb-6 flex flex-col items-center text-center
                  shadow-[0_22px_48px_-10px_rgba(0,0,0,0.35),0_10px_20px_-6px_rgba(56,174,196,0.12)]
                  ring-2 ring-white/35"
                style={cardGlassStyle}
              >
                <BenefitCardContent benefit={benefit} layout="carousel" />
              </article>
            ))}
          </div>

          <div
            className="flex justify-center gap-1.5 mt-5 max-w-full overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex-nowrap"
            role="tablist"
            aria-label="Indicadores do carrossel"
          >
            {benefits.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === activeSlide}
                onClick={() => scrollToSlide(index)}
                className="rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent shrink-0"
                aria-label={`Ir para benefício ${index + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    index === activeSlide
                      ? "w-8 h-2.5 bg-white"
                      : "w-2.5 h-2.5 bg-white/40 hover:bg-white/55"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: grid + hover */}
        <div className="hidden lg:grid grid-cols-5 gap-5 md:gap-6">
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
                  ...cardGlassStyle,
                  filter: isBlurred ? "blur(4px)" : "none",
                  opacity: isBlurred ? 0.65 : 1,
                }}
              >
                <BenefitCardContent benefit={benefit} layout="grid" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
