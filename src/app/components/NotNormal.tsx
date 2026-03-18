import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const leftList = [
  "Cansaço constante",
  "Dificuldade para dormir",
  "Irritabilidade",
  "Ansiedade",
];

const rightList = [
  "Tristeza profunda",
  "Dificuldade de concentração",
  "Falta de motivação",
  "Alterações de humor",
];

export function NotNormal() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-24">
      {/* Textura leve */}
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
        {/* Label */}
        <div className="mb-6">
          <p className="text-[#8E79A2] text-xs font-semibold uppercase tracking-[0.18em] mb-2">
            Sinais de alerta
          </p>
          <div className="h-0.5 w-10 bg-linear-to-r from-[#38AEC4] to-[#56274f] rounded-full" />
        </div>

        {/* Título */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`${plusJakarta.className} text-[#56274f] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4`}
          >
            Não é{" "}
            <span className="relative inline-block">
              normal
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-1 rounded-full bg-linear-to-r from-[#38AEC4] via-[#8E79A2] to-[#56274F]" />
            </span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Sinais que você não deve ignorar
          </p>
        </div>

        {/* Listas em cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div
            className="rounded-3xl p-6 md:p-8 border border-[#E4D9F0] bg-[#faf7ff]/80"
            style={{
              boxShadow: "0 4px 24px rgba(86, 39, 79, 0.06)",
            }}
          >
            <ul className="space-y-4">
              {leftList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-2.5 h-2.5 mt-1.5 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #38AEC4, #8E79A2)",
                    }}
                  />
                  <span className="text-neutral-600 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-3xl p-6 md:p-8 border border-[#E4D9F0] bg-[#faf7ff]/80"
            style={{
              boxShadow: "0 4px 24px rgba(86, 39, 79, 0.06)",
            }}
          >
            <ul className="space-y-4">
              {rightList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-2.5 h-2.5 mt-1.5 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #38AEC4, #8E79A2)",
                    }}
                  />
                  <span className="text-neutral-600 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card de informação + CTA */}
        <div
          className="max-w-4xl mx-auto rounded-3xl p-6 md:p-8 border border-[#E4D9F0] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #f0f8fa 0%, #faf7ff 100%)",
            boxShadow: "0 8px 32px rgba(86, 39, 79, 0.08)",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-[#38AEC4] via-[#6780B6] to-[#56274F]" />
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="mb-6 md:mb-0 flex-1">
              <p className="text-[#56274f] text-sm md:text-base mb-3 leading-relaxed">
                Todos sentimos coisas semelhantes; normalmente o{" "}
                <span className="font-semibold">problema reside nos excessos</span> ou na
                persistência dos comportamentos.
              </p>
              <p className="text-neutral-600 text-xs md:text-sm leading-relaxed">
                O processo terapêutico trabalha a{" "}
                <span className="font-semibold text-[#56274f]">busca pelo equilíbrio</span> e
                autocontrole de condições não desejadas.
              </p>
            </div>
            <a
              href="#contato"
              className={`${plusJakarta.className} shrink-0 w-full md:w-auto px-6 py-3.5 rounded-xl text-white font-semibold text-sm text-center hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200`}
              style={{
                background:
                  "linear-gradient(135deg, #38AEC4, #4F8EC2, #6780B6, #8E79A2, #56274F)",
              }}
            >
              Agendar consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
