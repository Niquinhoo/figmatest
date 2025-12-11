import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart } from "lucide-react";

interface HeroProps {
  onCartClick: () => void;
  cartItemCount: number;
}

export function Hero({ onCartClick, cartItemCount }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758448511348-54b10c30239f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWQlMjBzb2Z0JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1NDI2MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury bedding with soft lighting"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent"></div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-8 py-6 md:px-16 md:py-8">
        <div className="flex items-center gap-12">
          <h1 className="text-[#f4f1ea] tracking-wider" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem' }}>
            CALMA VM
          </h1>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-[#f4f1ea]/80 hover:text-[#c2b280] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>Shop</a>
            <a href="#" className="text-[#f4f1ea]/80 hover:text-[#c2b280] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>Collections</a>
            <a href="#" className="text-[#f4f1ea]/80 hover:text-[#c2b280] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>About</a>
          </nav>
        </div>
        
        <button
          onClick={onCartClick}
          className="relative text-[#f4f1ea] hover:text-[#c2b280] transition-colors duration-300"
          aria-label="Shopping cart"
        >
          <ShoppingCart size={24} />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#c2b280] text-[#0f0f0f] rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItemCount}
            </span>
          )}
        </button>
      </header>

      {/* Hero Content */}
      <div className="absolute bottom-32 left-8 md:left-16 right-8 z-10">
        <h2 
          className="text-[#f4f1ea] mb-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: '1.1',
            fontWeight: '400',
            letterSpacing: '0.02em'
          }}
        >
          Where comfort<br />meets elegance
        </h2>
        <p 
          className="text-[#f4f1ea]/70 max-w-xl mb-8" 
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            lineHeight: '1.6'
          }}
        >
          Experience the ultimate in luxury bedding. Handcrafted with the finest materials for your perfect night's sleep.
        </p>
        <button className="bg-[#c2b280] text-[#0f0f0f] px-8 py-4 hover:bg-[#d4c89f] transition-all duration-300 transform hover:scale-105" style={{ fontFamily: "'Inter', sans-serif" }}>
          Explore Collection
        </button>
      </div>
    </section>
  );
}
