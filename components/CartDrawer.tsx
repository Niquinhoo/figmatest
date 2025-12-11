import { X, Minus, Plus, Trash2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 25 : 0;
  const total = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#0f0f0f]/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#0f0f0f] border-l border-[#c2b280]/30 z-50 transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-[#c2b280]/30">
            <h2
              className="text-[#f4f1ea]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.75rem',
                fontWeight: '400'
              }}
            >
              Shopping Cart
            </h2>
            <button
              onClick={onClose}
              className="text-[#f4f1ea] hover:text-[#c2b280] transition-colors duration-300"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p
                  className="text-[#f4f1ea]/60 mb-8"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.125rem'
                  }}
                >
                  Your cart is empty
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#c2b280] text-[#0f0f0f] px-8 py-3 hover:bg-[#d4c89f] transition-colors duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-6 border-b border-[#c2b280]/20"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-32 bg-[#1a1a1a] flex-shrink-0 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3
                          className="text-[#f4f1ea] mb-1"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: '1.125rem'
                          }}
                        >
                          {item.name}
                        </h3>
                        <p
                          className="text-[#c2b280]"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '1rem'
                          }}
                        >
                          ${item.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-[#c2b280]/30 px-3 py-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="text-[#f4f1ea] hover:text-[#c2b280] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          <span
                            className="text-[#f4f1ea] w-8 text-center"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="text-[#f4f1ea] hover:text-[#c2b280] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#f4f1ea]/60 hover:text-[#c2b280] transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with Totals */}
          {items.length > 0 && (
            <div className="border-t border-[#c2b280]/30 px-8 py-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-[#f4f1ea]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#f4f1ea]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div
                  className="flex justify-between text-[#f4f1ea] pt-2 border-t border-[#c2b280]/30"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.25rem'
                  }}
                >
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                className="w-full bg-[#c2b280] text-[#0f0f0f] py-4 hover:bg-[#d4c89f] transition-all duration-300 transform hover:scale-[1.02]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
