import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Eye } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onQuickView: (productId: number) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(product.id)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-[#0f0f0f]/40 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product.id);
              }}
              className={`bg-[#c2b280] text-[#0f0f0f] px-6 py-3 flex items-center gap-2 transition-all duration-300 ${
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Eye size={18} />
              Vista Rápida
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <h3
          className="text-[#f4f1ea]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.25rem',
            fontWeight: '400'
          }}
        >
          {product.name}
        </h3>
        <p
          className="text-[#f4f1ea]/60"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem'
          }}
        >
          {product.description}
        </p>
        <p
          className="text-[#c2b280]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            fontWeight: '500'
          }}
        >
          Desde ${product.price}
        </p>
      </div>
    </div>
  );
}