const MARQUEE_ITEMS = [
  "AVALIAÇÃO NEUROPSICOLÓGICA",
  "•",
  "TERAPIA",
  "•",
  "ACOLHIMENTO",
  "•",
  "BEM-ESTAR",
  "•",
  "SAÚDE MENTAL",
  "•",
  "DESENVOLVIMENTO",
];

export function Marquee() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="w-full bg-[rgba(217,217,217,0.42)] py-3 overflow-hidden"
      aria-hidden
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((label, i) => (
          <span
            key={i}
            className="text-[#f1f1f1] text-xs md:text-base tracking-[2.35px] font-light mx-3 shrink-0"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
