export function Marquee() {
  const text = "LUXURY BEDDING • PREMIUM LINENS • HANDCRAFTED QUALITY • TIMELESS ELEGANCE";
  
  return (
    <div className="relative overflow-hidden border-y border-[#c2b280]/30 bg-[#0f0f0f] py-6">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex gap-16">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="text-[#c2b280]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3rem',
                fontWeight: '400',
                letterSpacing: '0.05em'
              }}
            >
              {text}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex gap-16" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="text-[#c2b280]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3rem',
                fontWeight: '400',
                letterSpacing: '0.05em'
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
