"use client";

import { useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Phone, Mail, MessageCircle } from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Ligue",
    href: "tel:+5561981481266",
    label: "(61) 98148-1266",
  },
  {
    icon: Mail,
    title: "E-mail",
    href: "mailto:contato@mindline.com.br",
    label: "contato@mindline.com.br",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    href: `https://wa.me/5561981481266?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre como funciona o atendimento.")}`,
    label: "Enviar mensagem",
  },
];

export function Contact() {
  const bgImageParallax = useParallax<HTMLDivElement>({ speed: -25 });
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [hoveredForm, setHoveredForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Envia diretamente para o WhatsApp Business, com mensagem pré-preenchida.
    const whatsappNumber = "5561981481266"; // +55 61 98148-1266 (sem + e sem espaços)
    const defaultMessage =
      "Olá! Gostaria de saber mais sobre como funciona o atendimento.";
    const text = formData.message?.trim()
      ? `Olá! Meu nome é ${formData.name || "—"}.` +
        "\n" +
        `Telefone: ${formData.phone || "—"}` +
        "\n" +
        `E-mail: ${formData.email || "—"}` +
        "\n" +
        "\n" +
        `Mensagem: ${formData.message}`
      : `Olá! Meu nome é ${formData.name || "—"}.` +
        "\n" +
        `Telefone: ${formData.phone || "—"}` +
        "\n" +
        `E-mail: ${formData.email || "—"}` +
        "\n" +
        "\n" +
        defaultMessage;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.location.href = whatsappUrl;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contato"
      className="relative py-14 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* Imagem de fundo com parallax e mais visível */}
      <div
        ref={bgImageParallax.ref}
        className="absolute inset-0 min-h-[120%] -top-[10%] opacity-40"
        style={{
          backgroundImage: "url(/assets/images/2148826961.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* Mesmo gradiente por cima */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(86,39,79,0.88) 0%, rgba(107,58,99,0.88) 25%, rgba(74,95,142,0.88) 60%, rgba(56,107,122,0.88) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56,174,196,0.4), transparent), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(194,180,207,0.2), transparent)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label - full width */}
        <div className="mb-8">
          <p className="text-white/80 text-xs font-semibold uppercase tracking-[0.18em] mb-2">
            Contato
          </p>
          <div className="h-0.5 w-10 bg-linear-to-r from-[#38AEC4] to-white rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Coluna esquerda: título + canais de contato */}
          <div>
            <h2
              className={`${plusJakarta.className} text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4`}
            >
              Fale{" "}
              <span className="relative inline-block">
                conosco
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-1 rounded-full bg-linear-to-r from-[#38AEC4] via-white/90 to-[#C2B4CF]" />
              </span>
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
              Escolha a melhor forma de entrar em contato ou envie sua mensagem
              pelo formulário ao lado.
            </p>

            <div className="space-y-3">
              {CONTACT_CARDS.map((item, index) => {
                const isCardHovered = hoveredCardIndex === index;
                const isCardBlurred =
                  (hoveredCardIndex !== null && !isCardHovered) || hoveredForm;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onMouseEnter={() => setHoveredCardIndex(index)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                    className="group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-white/10"
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      filter: isCardBlurred ? "blur(4px)" : "none",
                      opacity: isCardBlurred ? 0.65 : 1,
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 transition-transform group-hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, #38AEC4, #6780B6, #56274F)",
                      }}
                    >
                      <item.icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <span
                        className={`${plusJakarta.className} block font-semibold text-white text-sm`}
                      >
                        {item.title}
                      </span>
                      <span className="text-white/80 text-sm">
                        {item.label}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Coluna direita: formulário */}
          <div
            onMouseEnter={() => setHoveredForm(true)}
            onMouseLeave={() => setHoveredForm(false)}
            className="relative overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              filter: hoveredCardIndex !== null ? "blur(4px)" : "none",
              opacity: hoveredCardIndex !== null ? 0.65 : 1,
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px bg-linear-to-b from-white/30 to-transparent pointer-events-none"
              aria-hidden
            />
            <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-3xl bg-linear-to-r from-[#38AEC4] via-[#6780B6] to-[#56274F] opacity-60" />

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-1.5">
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-1.5">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-1.5">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-1.5">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className={`${plusJakarta.className} cursor-pointer w-full py-3.5 px-6 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98]`}
                style={{
                  background:
                    "linear-gradient(135deg, #38AEC4, #4F8EC2, #6780B6, #8E79A2, #56274F)",
                }}
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
