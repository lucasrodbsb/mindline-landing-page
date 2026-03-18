"use client";

import { motion } from "framer-motion";

// framer-motion types podem ser estritos com `ease` (Easing vs number[]).
// Mantemos o comportamento com um cast seguro para evitar erro em build/TS.
const customEase = [0.22, 1, 0.36, 1] as any;

const defaultVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: customEase },
  },
};

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: SectionRevealProps) {
  const MotionComp = motion[Component] as typeof motion.div;
  return (
    <MotionComp
      variants={defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 1.2, ease: customEase }}
      className={className}
    >
      {children}
    </MotionComp>
  );
}
