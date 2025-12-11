import { useState } from "react";
import { X, Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface ProductVariant {
  color: string;
  colorName: string;
  colorHex: string;
  sizes: {
    size: string;
    stock: number;
    priceAdjustment?: number;
  }[];
  images: string[];
}

export interface ProductDetails {
  id: number;
  name: string;
  basePrice: number;
  discountPercentage?: number;
  description: string;
  variants: ProductVariant[];
}

interface ProductQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductDetails | null;
  onAddToCart: (product: any) => void;
}

export function ProductQuickViewModal({
  isOpen,
  onClose,
  product,
  onAddToCart,
}: ProductQuickViewModalProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product || !isOpen) return null;

  const selectedVariant = product.variants[selectedColorIndex];
  const selectedSize = selectedVariant.sizes[selectedSizeIndex];
  const activeStock = selectedSize.stock;

  // Calculate final price
  const sizePrice = product.basePrice + (selectedSize.priceAdjustment || 0);
  const discountedPrice = product.discountPercentage
    ? sizePrice * (1 - product.discountPercentage / 100)
    : sizePrice;
  const finalPrice = discountedPrice * quantity;

  const handleAddToCart = () => {
    onAddToCart({
      id: `${product.id}-${selectedVariant.color}-${selectedSize.size}`,
      name: `${product.name} - ${selectedVariant.colorName} - ${selectedSize.size}`,
      price: discountedPrice,
      image: selectedVariant.images[0],
      quantity: quantity,
    });
    onClose();
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedVariant.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedVariant.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0f0f0f]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal Card */}
        <div
          className="relative bg-[#1a1a1a] border border-white/10 max-w-6xl w-full max-h-[90vh] overflow-hidden"
          style={{
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 text-[#f4f1ea] hover:text-[#c2b280] transition-colors duration-300"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>

          <div className="grid md:grid-cols-2 h-full max-h-[90vh]">
            {/* Left Side - Image Gallery */}
            <div className="relative bg-[#0f0f0f] h-full min-h-[500px] md:min-h-[600px]">
              <div className="relative w-full h-full">
                <ImageWithFallback
                  src={selectedVariant.images[currentImageIndex]}
                  alt={`${product.name} - ${selectedVariant.colorName}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                {selectedVariant.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0f0f0f]/60 hover:bg-[#c2b280]/20 text-[#f4f1ea] p-2 transition-colors duration-300"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0f0f0f]/60 hover:bg-[#c2b280]/20 text-[#f4f1ea] p-2 transition-colors duration-300"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Carousel Indicators */}
              {selectedVariant.images.length > 1 && (
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                  {selectedVariant.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-[#c2b280] w-6"
                          : "bg-[#f4f1ea]/30 hover:bg-[#f4f1ea]/60"
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Product Details */}
            <div className="flex flex-col h-full overflow-y-auto">
              <div className="p-8 md:p-12 flex flex-col gap-8">
                {/* Product Title & Price */}
                <div>
                  <h2
                    className="text-[#f4f1ea] mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      fontWeight: "400",
                      lineHeight: "1.2",
                    }}
                  >
                    {product.name}
                  </h2>

                  <div className="flex items-baseline gap-3">
                    {product.discountPercentage ? (
                      <>
                        <span
                          className="text-[#a0a0a0] line-through"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "1rem",
                            fontWeight: "300",
                          }}
                        >
                          ${sizePrice}
                        </span>
                        <span
                          className="text-[#f4f1ea]"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "1.5rem",
                            fontWeight: "300",
                          }}
                        >
                          ${discountedPrice.toFixed(2)}
                        </span>
                        <span
                          className="bg-[#c2b280] text-[#0f0f0f] px-2 py-1 text-xs"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: "600" }}
                        >
                          -{product.discountPercentage}%
                        </span>
                      </>
                    ) : (
                      <span
                        className="text-[#f4f1ea]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "1.5rem",
                          fontWeight: "300",
                        }}
                      >
                        ${sizePrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-[#a0a0a0] leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: "1.7",
                  }}
                >
                  {product.description}
                </p>

                {/* Color Selector */}
                <div>
                  <label
                    className="block text-[#c2b280] mb-4"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.625rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.125em",
                    }}
                  >
                    Color: {selectedVariant.colorName}
                  </label>
                  <div className="flex gap-3">
                    {product.variants.map((variant, index) => (
                      <button
                        key={variant.color}
                        onClick={() => {
                          setSelectedColorIndex(index);
                          setSelectedSizeIndex(0);
                          setCurrentImageIndex(0);
                        }}
                        className={`relative w-9 h-9 rounded-full transition-all duration-300 ${
                          index === selectedColorIndex
                            ? "ring-1 ring-[#c2b280] ring-offset-[#1a1a1a] ring-offset-[3px]"
                            : "hover:ring-1 hover:ring-[#f4f1ea]/30 hover:ring-offset-[#1a1a1a] hover:ring-offset-[3px]"
                        }`}
                        style={{ backgroundColor: variant.colorHex }}
                        aria-label={`Seleccionar color ${variant.colorName}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div>
                  <label
                    className="block text-[#c2b280] mb-4"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.625rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.125em",
                    }}
                  >
                    Talle
                  </label>
                  <div className="flex gap-3">
                    {selectedVariant.sizes.map((sizeOption, index) => (
                      <button
                        key={sizeOption.size}
                        onClick={() => setSelectedSizeIndex(index)}
                        className={`px-6 py-3 transition-all duration-300 ${
                          index === selectedSizeIndex
                            ? "bg-[#f4f1ea] text-[#0f0f0f]"
                            : "border border-[#f4f1ea]/30 text-[#f4f1ea] hover:border-[#c2b280]"
                        }`}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.875rem",
                          fontWeight: "500",
                        }}
                        disabled={sizeOption.stock === 0}
                      >
                        {sizeOption.size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stock & Quantity */}
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className={`${
                        activeStock < 5 ? "text-[#ff6b6b]" : "text-[#a0a0a0]"
                      }`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                      }}
                    >
                      {activeStock > 0
                        ? `Disponibles: ${activeStock}`
                        : "Sin stock"}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 border border-[#f4f1ea]/30 px-4 py-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-[#f4f1ea] hover:text-[#c2b280] transition-colors"
                      aria-label="Disminuir cantidad"
                    >
                      <Minus size={18} />
                    </button>
                    <span
                      className="text-[#f4f1ea] w-8 text-center"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem",
                      }}
                    >
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        setQuantity(Math.min(activeStock, quantity + 1))
                      }
                      className="text-[#f4f1ea] hover:text-[#c2b280] transition-colors"
                      aria-label="Aumentar cantidad"
                      disabled={quantity >= activeStock}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={activeStock === 0}
                  className={`w-full h-14 transition-all duration-300 ${
                    activeStock === 0
                      ? "bg-[#a0a0a0]/20 text-[#a0a0a0] cursor-not-allowed"
                      : "bg-[#f4f1ea] text-[#0f0f0f] hover:shadow-[0_0_20px_rgba(194,178,128,0.4)] hover:bg-[#c2b280]"
                  }`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {activeStock === 0
                    ? "Sin Stock"
                    : `Agregar al Carrito - $${finalPrice.toFixed(2)}`}
                </button>

                {/* Additional Product Info */}
                <div className="pt-6 border-t border-[#f4f1ea]/10 space-y-3">
                  <div className="flex justify-between">
                    <span
                      className="text-[#a0a0a0]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                      }}
                    >
                      Envío gratis en compras +$500
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      className="text-[#a0a0a0]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                      }}
                    >
                      Devoluciones en 30 días
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
