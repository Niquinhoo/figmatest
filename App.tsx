import { useState } from "react";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ProductGrid } from "./components/ProductGrid";
import { CartDrawer, CartItem } from "./components/CartDrawer";
import { ProductQuickViewModal, ProductDetails } from "./components/ProductQuickViewModal";
import { GRID_PRODUCTS, DETAILED_PRODUCTS } from "./data/productData";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (productId: number) => {
    const product = DETAILED_PRODUCTS.find((p) => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsQuickViewOpen(true);
    }
  };

  const handleAddToCart = (product: any) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      
      return [...prevItems, product];
    });
    
    // Open cart when item is added
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Hero onCartClick={() => setIsCartOpen(true)} cartItemCount={totalItems} />
      <Marquee />
      <ProductGrid products={GRID_PRODUCTS} onQuickView={handleQuickView} />
      
      {/* Footer */}
      <footer className="bg-[#0f0f0f] border-t border-[#c2b280]/30 px-8 py-16 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3
              className="text-[#f4f1ea] mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem'
              }}
            >
              CALMA VM
            </h3>
            <p
              className="text-[#f4f1ea]/60"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                lineHeight: '1.6'
              }}
            >
              Crafting timeless luxury for your most intimate space.
            </p>
          </div>
          
          <div>
            <h4
              className="text-[#c2b280] mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                letterSpacing: '0.1em'
              }}
            >
              SHOP
            </h4>
            <ul className="space-y-2">
              {["Bedding Sets", "Pillows", "Duvets", "Blankets"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#f4f1ea]/60 hover:text-[#c2b280] transition-colors duration-300"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem'
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4
              className="text-[#c2b280] mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                letterSpacing: '0.1em'
              }}
            >
              CONNECT
            </h4>
            <ul className="space-y-2">
              {["About Us", "Contact", "Care Guide", "Returns"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#f4f1ea]/60 hover:text-[#c2b280] transition-colors duration-300"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem'
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#c2b280]/20">
          <p
            className="text-[#f4f1ea]/40 text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem'
            }}
          >
            © 2025 Calma VM. All rights reserved.
          </p>
        </div>
      </footer>

      <ProductQuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}