"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const base = "/assets/svg";
const LOGO_PARTS = [
  {
    id: "anjo",
    file: "mindlogo anjo.svg",
    label: "Anjo",
    description: "Ajuda e cuidado",
  },
  {
    id: "expressao",
    file: "mindlogo expressao.svg",
    label: "Balão de conversa",
    description: "Expressão",
  },
  {
    id: "sentimento",
    file: "mindlogo sentimento.svg",
    label: "Coração",
    description: "Sentimento",
  },
  {
    id: "cerebroasas",
    file: "mindlogo cerebroasas.svg",
    label: "Cérebro + Asas",
    description: "Pensamento",
  },
  {
    id: "psi",
    file: "mindlogo psi.svg",
    label: "Psi",
    description: "Símbolo da psicologia",
  },

] as const;

type Direction = "next" | "prev";

const slideVariants = {
  enterFromBack: (dir: Direction) => ({
    opacity: 0,
    zIndex: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    zIndex: 1,
    transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exitToBack: (dir: Direction) => ({
    opacity: 0,
    zIndex: 0,
    transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export function InteractiveLogo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("next");

  const current = LOGO_PARTS[currentIndex];
  const total = LOGO_PARTS.length;

  const goTo = (next: number) => {
    if (next < 0) {
      setDirection("prev");
      setCurrentIndex(total - 1);
    } else if (next >= total) {
      setDirection("next");
      setCurrentIndex(0);
    } else {
      setDirection(next > currentIndex ? "next" : "prev");
      setCurrentIndex(next);
    }
  };

  return (
    <div
      className="inline-flex select-none flex-col items-center gap-3"
      role="img"
      onClick={() => goTo(currentIndex + 1)}
      aria-label="Logo Mindline - elementos da identidade"
    >
      <div className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px] flex items-center justify-center overflow-visible">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enterFromBack"
            animate="center"
            exit="exitToBack"
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={`${base}/${encodeURIComponent(current.file)}`}
              alt=""
              className="w-full h-full object-contain pointer-events-none"
              aria-hidden
            />
          </motion.div>
        </AnimatePresence>
        <img
          src={`${base}/${encodeURIComponent("mindlogo neutra.svg")}`}
          alt=""
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="text-center px-4 py-2.5 rounded-lg text-[#56274f] text-sm font-medium min-h-12 flex flex-col justify-center"
          role="status"
          aria-live="polite"
        >
          <span className="font-extrabold text-xl">{current.label}</span>
          <span className="opacity-90 text-base">{current.description}</span>
        </motion.div>
      </AnimatePresence>
      
      <p className="text-[#56274f] text-xs max-w-[280px] text-center">
        Clique para ver cada elemento e seu significado.
      </p>
    </div>
  );
}
