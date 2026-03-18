import type { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const siteUrl = "https://mindlineclinic.com.br";
const whatsappNumberE164 = "+5561981481266";
const whatsappNumberSansPlus = "5561981481266";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mindline | Cuidando da sua saúde mental",
    template: "%s | Mindline",
  },
  description:
    "Clínica de psicologia. Acolhimento e expertise para equilíbrio e bem-estar. Terapia personalizada presencial ou online.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mindline | Cuidando da sua saúde mental",
    description:
      "Acolhimento e expertise para equilíbrio e bem-estar. Terapia personalizada presencial ou online.",
    images: [
      {
        url: "/assets/images/2148826961.jpg",
        alt: "Mindline Clínica de Psicologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindline | Cuidando da sua saúde mental",
    description:
      "Acolhimento e expertise para equilíbrio e bem-estar. Terapia personalizada presencial ou online.",
    images: ["/assets/images/2148826961.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Mindline Clínica de Psicologia",
    url: siteUrl,
    logo: `${siteUrl}/assets/svg/logomindline.svg`,
    description:
      "Clínica de psicologia com acolhimento e expertise para equilíbrio e bem-estar. Atendimento presencial ou online.",
    telephone: whatsappNumberE164,
    email: "contato@mindlineclinic.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Taguatinga Norte (CNB 11) - Comercial Pinheiro de Brito",
      addressLocality: "Brasília",
      addressRegion: "DF",
      postalCode: "72115-115",
      addressCountry: "BR",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Brasília",
      },
      {
        "@type": "AdministrativeArea",
        name: "Distrito Federal",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: whatsappNumberE164,
        email: "contato@mindlineclinic.com.br",
      },
    ],
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name: "WhatsApp",
        target: [`https://wa.me/${whatsappNumberSansPlus}`],
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* Favicon/ícone da marca (evita fallback/padrão do Next) */}
        <link rel="icon" href="/assets/svg/logomindline.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/svg/logomindline.svg" />
        <meta name="theme-color" content="#56274f" />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} ${playfair.variable} ${plusJakarta.variable} antialiased font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
