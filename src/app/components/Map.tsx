import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export function Map() {
  return (
    <section
      id="localização"
      className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20"
    >
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
            Localização
          </p>
          <div className="h-0.5 w-10 bg-linear-to-r from-[#38AEC4] to-[#56274f] rounded-full" />
        </div>

        {/* Título */}
        <div className="text-center mb-8 md:mb-10">
          <h2
            className={`${plusJakarta.className} text-[#56274f] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4`}
          >
            Onde nos{" "}
            <span className="relative inline-block">
              encontrar
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-1 rounded-full bg-linear-to-r from-[#38AEC4] via-[#8E79A2] to-[#56274F]" />
            </span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Venha nos visitar. Estamos prontos para recebê-lo.
          </p>
        </div>

        {/* Container do mapa: bordas arredondadas + sombra */}
        <div className="rounded-3xl overflow-hidden border border-[#E4D9F0] shadow-lg bg-neutral-100 h-[320px] sm:h-[420px] md:h-[480px]">
          <div className="relative w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.647693254222!2d-48.063648788191436!3d-15.822520084758523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3300006c8767%3A0x886c75976c78152!2sMindline%20Cl%C3%ADnica%20de%20Psicologia!5e0!3m2!1spt-BR!2sbr!4v1773785209012!5m2!1spt-BR!2sbr"
              title="Localização da Mindline Clínica de Psicologia"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              allow="geolocation"

              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Link para abrir no Google Maps */}
        <p className="text-center mt-4">
          <a
            href="https://www.google.com/maps/search/Mindline+Cl%C3%ADnica+de+Psicologia"
            target="_blank"
            rel="noopener noreferrer"
            className={`${plusJakarta.className} text-[#56274f] text-sm font-semibold hover:underline`}
          >
            Abrir no Google Maps →
          </a>
        </p>
      </div>
    </section>
  );
}
