import { ProductCard, Product } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onQuickView: (productId: number) => void;
}

export function ProductGrid({ products, onQuickView }: ProductGridProps) {
  return (
    <section className="bg-[#0f0f0f] px-8 py-24 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="text-[#f4f1ea] mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '400',
              letterSpacing: '0.02em'
            }}
          >
            Signature Collection
          </h2>
          <p
            className="text-[#f4f1ea]/60 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              lineHeight: '1.6'
            }}
          >
            Discover our curated selection of premium bedding, meticulously crafted to transform your bedroom into a sanctuary.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}