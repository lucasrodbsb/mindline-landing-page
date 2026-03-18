import { Plus_Jakarta_Sans } from "next/font/google";
import { Phone, Mail } from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const LOGO = "/assets/svg/logo_mindline.svg";

const navigation = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#benefícios" },
  { label: "Nosso espaço", href: "#nosso-espaço" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer
      className="relative py-8 sm:py-12 md:py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #56274f 0%, #6b3a63 28%, #4a5f8e 65%, #386b7a 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,174,196,0.5), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: logo em cima, depois Nav e Contato lado a lado | Desktop: 3 colunas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/20">
          {/* Coluna 1: Logo + tagline (full width no mobile) */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-start">
            <a
              href="#"
              className="focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
            >
              <img
                src={LOGO}
                alt="Mindline"
                className="h-8 sm:h-9 md:h-10 w-auto brightness-0 invert opacity-95"
              />
            </a>
            <p
              className={`${plusJakarta.className} mt-3 sm:mt-4 text-white/80 text-xs sm:text-sm leading-relaxed max-w-[260px]`}
            >
              Cuidando da sua saúde mental com acolhimento e expertise.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col items-start">
            <h3
              className={`${plusJakarta.className} text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 opacity-90`}
            >
              Navegação
            </h3>
            <ul className="space-y-1.5 sm:space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/85 text-xs sm:text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="flex flex-col items-start">
            <h3
              className={`${plusJakarta.className} text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 opacity-90`}
            >
              Contato
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="tel:+5561981481266"
                  className="flex items-center gap-2 text-white/85 text-xs sm:text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 opacity-90" />
                  (61) 98148-1266
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@mindlineclinic.com.br"
                  className="flex items-center gap-2 text-white/85 text-xs sm:text-sm hover:text-white transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 opacity-90" />
                  contato@mindlineclinic.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-5 sm:pt-6 text-center">
          <p className="text-white/70 text-[11px] sm:text-xs leading-relaxed px-2">
            © {new Date().getFullYear()} Mindline Clínica de Psicologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
