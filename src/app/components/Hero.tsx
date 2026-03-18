"use client";

import { useParallax } from "react-scroll-parallax";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Marquee } from "./Marquee";
import { Heart, Brain, SmilePlus, Sparkles } from "lucide-react";
import Image from "next/image";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const HERO_IMAGE = "/assets/images/2150136598.jpg";
const LOGO_ORIGINAL = "/assets/svg/logomindline.svg";

function MiniLogoIcon({ className }: { className?: string }) {
  return (
    <Image src={LOGO_ORIGINAL} alt="Mindline" className={className} width={30} height={31.1006} />
  );
}

const MOUSE_PARALLAX_STRENGTH = 0.1;

const miniLogosConfig = [
  {
    left: "8%",
    top: "25%",
    size: "w-10 h-10 sm:w-12 sm:h-12",
    depth: 1.4,
    blur: 2,
    opacity: "opacity-100",
  },
  {
    left: "auto",
    right: "15%",
    top: "35%",
    size: "w-8 h-8 sm:w-10 sm:h-10",
    depth: 1,
    blur: 3,
    opacity: "opacity-100",
  },
  {
    left: "25%",
    top: "auto",
    bottom: "35%",
    size: "w-9 h-9 sm:w-11 sm:h-11",
    depth: 1.6,
    blur: 2,
    opacity: "opacity-100",
  },
  {
    left: "auto",
    right: "25%",
    top: "auto",
    bottom: "28%",
    size: "w-7 h-7 sm:w-9 sm:h-9",
    depth: 1.2,
    blur: 4,
    opacity: "opacity-100",
  },
  {
    left: "15%",
    top: "55%",
    size: "w-8 h-8 sm:w-10 sm:h-10",
    depth: 1.1,
    blur: 3,
    opacity: "opacity-100",
  },
  {
    left: "auto",
    right: "8%",
    top: "18%",
    size: "w-9 h-9 sm:w-11 sm:h-11",
    depth: 1.5,
    blur: 2,
    opacity: "opacity-100",
  },
  {
    left: "45%",
    top: "15%",
    size: "w-6 h-6 sm:w-8 sm:h-8",
    depth: 0.8,
    blur: 5,
    opacity: "opacity-100",
  },
] as const;

const emotionIconsConfig = [
  {
    Icon: Heart,
    left: "6%",
    top: "10%",
    size: "w-7 h-7 sm:w-9 sm:h-9",
    depth: 1.3,
    color: "text-white",
    opacity: "opacity-90",
  },
  {
    Icon: Brain,
    left: "70%",
    bottom: "8%",
    size: "w-8 h-8 sm:w-10 sm:h-10",
    depth: 1.7,
    color: "text-white",
    opacity: "opacity-95",
  },
  {
    Icon: SmilePlus,
    left: "18%",
    bottom: "14%",
    size: "w-7 h-7 sm:w-9 sm:h-9",
    depth: 1.1,
    color: "text-white",
    opacity: "opacity-90",
  },
  {
    Icon: Sparkles,
    right: "16%",
    bottom: "22%",
    size: "w-6 h-6 sm:w-8 sm:h-8",
    depth: 0.9,
    color: "text-white",
    opacity: "opacity-80",
  },
] as const;

function MouseParallaxLayer({
  children,
  springX,
  springY,
  autoX,
  autoY,
  depth,
}: {
  children: React.ReactNode;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  autoX: MotionValue<number>;
  autoY: MotionValue<number>;
  depth: number;
}) {
  const x = useTransform(
    [springX, autoX],
    ([mouse, auto]: number[]) => (mouse * 1.6 + auto) * depth,
  );
  const y = useTransform(
    [springY, autoY],
    ([mouse, auto]: number[]) => (mouse * 1.6 + auto) * depth,
  );
  return (
    <motion.div className="w-full h-full" style={{ x, y }}>
      {children}
    </motion.div>
  );
}

const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.2,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  // Parallax scroll: fundo e orbs
  const bgParallax = useParallax<HTMLDivElement>({ speed: -18 });
  const orb1Parallax = useParallax<HTMLDivElement>({ speed: -12 });
  const orb2Parallax = useParallax<HTMLDivElement>({ speed: -8 });
  const orb3Parallax = useParallax<HTMLDivElement>({ speed: -14 });

  // Parallax mouse: posição suavizada para as mini logos
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Movimento automático suave das mini logos
  const autoX = useMotionValue(0);
  const autoY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = (e.clientX - w / 2) * MOUSE_PARALLAX_STRENGTH;
      const y = (e.clientY - h / 2) * MOUSE_PARALLAX_STRENGTH;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let frameId: number;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      // movimentos suaves em trajetórias diferentes
      const x = Math.sin(elapsed * 0.0005) * 18;
      const y = Math.cos(elapsed * 0.00025) * 14;
      autoX.set(x);
      autoY.set(y);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [autoX, autoY]);

  return (
    <section className="relative min-h-dvh overflow-hidden pt-[38px] sm:pt-[48px]">
      {/* Background com parallax real (scroll) */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={bgParallax.ref} className="absolute inset-0 scale-105">
          <img
            alt="Ambiente acolhedor de atendimento psicológico"
            className="h-full w-full object-cover"
            src={HERO_IMAGE}
          />
        </div>

        {/* Mini logos: parallax ao mouse + blur + mais visíveis */}
        {miniLogosConfig.map((cfg, i) => (
          <div
            key={i}
            className={`absolute text-white pointer-events-none ${cfg.size} ${cfg.opacity}`}
            style={{
              left: "left" in cfg ? cfg.left : undefined,
              right: "right" in cfg ? cfg.right : undefined,
              top: "top" in cfg ? cfg.top : undefined,
              bottom: "bottom" in cfg ? cfg.bottom : undefined,
              filter: `blur(${cfg.blur}px)`,
            }}
          >
            <MouseParallaxLayer
              springX={springX}
              springY={springY}
              autoX={autoX}
              autoY={autoY}
              depth={cfg.depth}
            >
              <MiniLogoIcon className="w-full h-full" />
            </MouseParallaxLayer>
          </div>
        ))}

        {/* Ícones de emoções: corações, cérebro, etc. */}
        {emotionIconsConfig.map((cfg, i) => (
          <div
            key={`icon-${i}`}
            className={`absolute pointer-events-none ${cfg.size} ${cfg.opacity}`}
            style={{
              left: "left" in cfg ? cfg.left : undefined,
              right: "right" in cfg ? cfg.right : undefined,
              top: "top" in cfg ? cfg.top : undefined,
              bottom: "bottom" in cfg ? cfg.bottom : undefined,
            }}
          >
            <MouseParallaxLayer
              springX={springX}
              springY={springY}
              autoX={autoX}
              autoY={autoY}
              depth={cfg.depth}
            >
              <cfg.Icon className={`w-full h-full ${cfg.color}`} />
            </MouseParallaxLayer>
          </div>
        ))}

        {/* Orbs com parallax */}
        <div
          ref={orb1Parallax.ref}
          className="absolute -left-[20%] top-[20%] w-[60%] aspect-square rounded-full bg-[rgba(56,174,196,0.4)] blur-[80px] pointer-events-none"
          aria-hidden
        />
        <div
          ref={orb2Parallax.ref}
          className="absolute right-[10%] bottom-[15%] w-[50%] aspect-square rounded-full bg-[rgba(142,121,162,0.35)] blur-[100px] pointer-events-none"
          aria-hidden
        />
        <div
          ref={orb3Parallax.ref}
          className="absolute left-[30%] bottom-[25%] w-[40%] aspect-square rounded-full bg-[rgba(86,39,79,0.3)] blur-[90px] pointer-events-none"
          aria-hidden
        />

        {/* Gradientes (fixos, sem parallax) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(56,174,196,0.75) 0%, rgba(79,142,194,0.7) 25%, rgba(103,128,182,0.65) 45%, transparent 55%, rgba(142,121,162,0.5) 75%, rgba(86,39,79,0.6) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(56,174,196,0.5) 0%, transparent 50%), radial-gradient(ellipse 70% 80% at 75% 60%, rgba(142,121,162,0.4) 0%, rgba(86,39,79,0.25) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(86,39,79,0.4)] via-transparent to-transparent" />
      </div>

      {/* Conteúdo com animação de entrada (framer-motion) */}
      <div className="relative z-10 min-h-[calc(100dvh-38px)] sm:min-h-[calc(100dvh-48px)] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center drop-shadow-lg">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-8 md:mb-6"
            >
              <img
                src={LOGO_ORIGINAL}
                alt="Mindline"
                className="h-20 w-auto sm:h-22 md:h-25 mx-auto text-white brightness-0 invert opacity-95"
              />
            </motion.div>

            <motion.h1
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className={`${plusJakarta.className} text-[#f1f1f1] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.2] tracking-tight mb-5 md:mb-6`}
            >
              Cuidando da sua
              <br />
              saúde mental
            </motion.h1>

            <motion.p
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[#f1f1f1] text-base sm:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto font-sans"
            >
              Acolhimento e expertise para você encontrar{" "}
              <span className="font-semibold">equilíbrio</span> e bem-estar.
              Terapia personalizada com foco no seu{" "}
              <span className="font-semibold">desenvolvimento</span> e{" "}
              <span className="font-semibold">saúde emocional</span>.
            </motion.p>

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#contato"
                className="px-7 py-3.5 rounded-full text-white font-bold text-base text-center shrink-0 font-sans"
                style={{
                  backgroundImage:
                    "linear-gradient(137.349deg, rgba(56, 174, 196, 0.7) 4.4257%, rgba(79, 142, 194, 0.7) 22.655%, rgba(103, 128, 182, 0.7) 40.885%, rgba(142, 121, 162, 0.7) 63.672%, rgba(194, 180, 207, 0.7) 81.902%, rgba(86, 39, 79, 0.7) 95.574%)",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Agende sua sessão
              </motion.a>
              <motion.a
                href="#sobre"
                className="px-7 py-3.5 rounded-full border border-[#f1f1f1] text-white font-bold text-base text-center font-sans"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Saiba mais
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Marquee />
      </div>
    </section>
  );
}
