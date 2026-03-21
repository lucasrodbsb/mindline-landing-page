"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import LOGO_ORIGINAL from "../../../public/assets/svg/logo_mindline.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const menuItems = ["Sobre", "Benefícios", "Nosso Espaço", "Contato", "FAQ"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          background: "rgba(86, 39, 79, 0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(228, 217, 240, 0.4)",
          boxShadow: "0 4px 24px rgba(86, 39, 79, 0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[52px] sm:h-[64px]">
            {/* Logo - branca para contraste no glass roxo */}
            <div className="flex items-center filter-[drop-shadow(0_1px_2px_rgba(0,0,0,0.25))_drop-shadow(0_2px_8px_rgba(0,0,0,0.15))]">
              <Image
                src={LOGO_ORIGINAL}
                alt="Mindline"
                width={130}
                height={130}
                className="w-[120px] h-auto sm:w-[130px]"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-11">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="relative text-white/95 text-xs lg:text-sm font-medium py-1 group transition-colors hover:text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_0_20px_rgba(0,0,0,0.12)]"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200 ease-out" />
                </a>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => (window.location.href = "#contato")}
                className="flex cursor-pointer items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold transition-all rounded-full px-5 py-2.5 text-sm border border-white/30 backdrop-blur-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_0_20px_rgba(0,0,0,0.12)]"
              >
                <span>Fale Conosco</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:opacity-90 transition-opacity filter-[drop-shadow(0_1px_2px_rgba(0,0,0,0.3))]"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay do menu mobile */}
      <div
        className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden
      />

      {/* Sidebar mobile */}
      <aside
        className={`fixed top-0 right-0 z-70 h-full w-[min(320px,85vw)] md:hidden flex flex-col transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(86, 39, 79, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderLeft: "1px solid rgba(228, 217, 240, 0.3)",
          boxShadow: "-8px 0 32px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex items-center justify-between h-[52px] sm:h-[64px] px-4 border-b border-white/10">
          <div className="filter-[drop-shadow(0_1px_2px_rgba(0,0,0,0.25))_drop-shadow(0_2px_8px_rgba(0,0,0,0.2))]">
            <Image
              src={LOGO_ORIGINAL}
              alt="Mindline"
              width={100}
              height={100}
              className="w-[100px] h-auto"
            />
          </div>
          <button
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors filter-[drop-shadow(0_1px_2px_rgba(0,0,0,0.3))]"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 py-6 px-5 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block py-3 px-3 text-white font-medium rounded-xl hover:bg-white/15 transition-colors [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_0_20px_rgba(0,0,0,0.15)]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div
          className="p-4 border-t border-white/10"
          onClick={() => {
            setIsMenuOpen(false);
            (window.location.href = "#contato");
          }}
        >
          <button className="w-full cursor-pointer bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full py-3 border border-white/30 transition-colors [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_0_20px_rgba(0,0,0,0.12)]">
            Fale Conosco
          </button>
        </div>
      </aside>
    </>
  );
}
