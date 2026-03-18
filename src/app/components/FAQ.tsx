"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const faqs = [
  {
    question: "Como funciona o atendimento online?",
    answer:
      "O atendimento online é realizado através de videochamada em plataforma segura e confidencial. Você pode realizar suas sessões de onde estiver, mantendo a mesma qualidade do atendimento presencial.",
  },
  {
    question: "O que conto ao meu terapeuta é confidencial?",
    answer:
      "Sim, absolutamente. O sigilo terapêutico é garantido pelo Código de Ética da Psicologia. Todas as informações compartilhadas durante as sessões são completamente confidenciais.",
  },
  {
    question: "Como saber que a abordagem fará sentido pra mim?",
    answer:
      "Na primeira sessão, conversamos sobre suas necessidades e expectativas. Nossa equipe utiliza diversas abordagens terapêuticas e encontrará a melhor metodologia para o seu caso específico.",
  },
  {
    question: "A Mindline atende convênios?",
    answer:
      "Entre em contato conosco para verificar os convênios atendidos. Trabalhamos com diversos planos de saúde e também oferecemos atendimento particular.",
  },
  {
    question: "Qual o tempo de duração de sessão?",
    answer:
      "Cada sessão tem duração de 50 minutos, tempo ideal para um atendimento completo e acolhedor.",
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer:
      "O tempo de tratamento varia de acordo com cada pessoa e suas necessidades. Durante o processo terapêutico, você e seu terapeuta avaliarão juntos a evolução e os próximos passos.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#e8f4f8] border-t-8 border-[#38AEC4] border-b-3 border-b-[#56274f]/4 py-14 sm:py-20 md:py-24 rounded-t-3xl rounded-b-3xl shadow-[0_8px_30px_rgba(56,174,196,0.25)]">
      {/* Textura leve */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(56, 174, 196, 0.12) 1.5px, transparent 0)
          `,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="mb-6">
          <p className="text-[#8E79A2] text-xs font-semibold uppercase tracking-[0.18em] mb-2">
            Dúvidas
          </p>
          <div className="h-0.5 w-10 bg-linear-to-r from-[#38AEC4] to-[#56274f] rounded-full" />
        </div>

        {/* Título */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`${plusJakarta.className} text-[#56274f] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4`}
          >
            Perguntas{" "}
            <span className="relative inline-block">
              frequentes
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-1 rounded-full bg-linear-to-r from-[#38AEC4] via-[#8E79A2] to-[#56274F]" />
            </span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Respostas rápidas para as principais dúvidas sobre nosso atendimento
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border cursor-pointer border-[#E4D9F0] bg-[#faf7ff]/90 px-5 md:px-6 transition-colors data-[state=open]:border-[#56274f]/30 data-[state=open]:shadow-md"
            >
              <AccordionTrigger
                className={`${plusJakarta.className} cursor-pointer text-[#56274f] font-semibold text-left hover:no-underline py-5 [&>svg]:text-[#8E79A2]`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600 cursor-pointer text-sm md:text-base leading-relaxed pb-5 pt-0">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
