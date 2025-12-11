import { ProductDetails } from "../components/ProductQuickViewModal";
import { Product } from "../components/ProductCard";

// Detailed product data for the quick view modal
export const DETAILED_PRODUCTS: ProductDetails[] = [
  {
    id: 1,
    name: "Sábanas de Lino Premium",
    basePrice: 385,
    discountPercentage: 15,
    description: "Sábanas 100% lino europeo stonewashed. Suavidad natural que mejora con cada lavado. Transpirables y termoreguladoras para un descanso perfecto en cualquier estación.",
    variants: [
      {
        color: "natural",
        colorName: "Natural",
        colorHex: "#f4f1ea",
        images: [
          "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aGl0ZSUyMGJlZGRpbmd8ZW58MXx8fHwxNzY1NDI2MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1616062324621-fe169d2ef6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNoZWV0cyUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Queen", stock: 12 },
          { size: "King", stock: 8, priceAdjustment: 50 },
          { size: "Super King", stock: 3, priceAdjustment: 100 },
        ],
      },
      {
        color: "sage",
        colorName: "Sage",
        colorHex: "#b5c4a3",
        images: [
          "https://images.unsplash.com/photo-1616062324621-fe169d2ef6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNoZWV0cyUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aGl0ZSUyMGJlZGRpbmd8ZW58MXx8fHwxNzY1NDI2MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Queen", stock: 7 },
          { size: "King", stock: 4, priceAdjustment: 50 },
          { size: "Super King", stock: 0, priceAdjustment: 100 },
        ],
      },
      {
        color: "charcoal",
        colorName: "Charcoal",
        colorHex: "#3d3d3d",
        images: [
          "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aGl0ZSUyMGJlZGRpbmd8ZW58MXx8fHwxNzY1NDI2MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1616062324621-fe169d2ef6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNoZWV0cyUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Queen", stock: 15 },
          { size: "King", stock: 10, priceAdjustment: 50 },
          { size: "Super King", stock: 5, priceAdjustment: 100 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Sábanas de Seda Serenity",
    basePrice: 525,
    description: "Seda de morera 22-momme de la más alta calidad. Hipoalergénica y naturalmente resistente a los ácaros. Textura sedosa que cuida tu piel y cabello mientras duermes.",
    variants: [
      {
        color: "ivory",
        colorName: "Ivory",
        colorHex: "#fffff0",
        images: [
          "https://images.unsplash.com/photo-1607300110843-b3994a493d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwYmVkZGluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1NDI2MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1616062324621-fe169d2ef6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNoZWV0cyUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Queen", stock: 6 },
          { size: "King", stock: 4, priceAdjustment: 75 },
          { size: "Super King", stock: 2, priceAdjustment: 125 },
        ],
      },
      {
        color: "champagne",
        colorName: "Champagne",
        colorHex: "#f7e7ce",
        images: [
          "https://images.unsplash.com/photo-1616062324621-fe169d2ef6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNoZWV0cyUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1607300110843-b3994a493d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwYmVkZGluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1NDI2MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Queen", stock: 8 },
          { size: "King", stock: 5, priceAdjustment: 75 },
          { size: "Super King", stock: 1, priceAdjustment: 125 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Colección de Almohadas Cloud",
    basePrice: 195,
    discountPercentage: 20,
    description: "Almohadas híbridas de plumón de ganso y espuma viscoelástica. Soporte ergonómico perfecto con la suavidad del plumón premium. Ajustables para todo tipo de durmientes.",
    variants: [
      {
        color: "white",
        colorName: "Blanco",
        colorHex: "#ffffff",
        images: [
          "https://images.unsplash.com/photo-1687579520914-e2cbec15628b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwaWxsb3dzJTIwY3JlYW18ZW58MXx8fHwxNzY1NDI2MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aGl0ZSUyMGJlZGRpbmd8ZW58MXx8fHwxNzY1NDI2MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Standard", stock: 20 },
          { size: "Queen", stock: 15, priceAdjustment: 25 },
          { size: "King", stock: 10, priceAdjustment: 45 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Duvet de Terciopelo Luxe",
    basePrice: 445,
    description: "Duvet de terciopelo de algodón con relleno de seda. Calidez sin peso, elegancia sin esfuerzo. La combinación perfecta de textura visual y confort táctil.",
    variants: [
      {
        color: "cream",
        colorName: "Crema",
        colorHex: "#f4f1ea",
        images: [
          "https://images.unsplash.com/photo-1671500073201-e408999ff8dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkdXZldCUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1607300110843-b3994a493d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwYmVkZGluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1NDI2MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Queen", stock: 9 },
          { size: "King", stock: 6, priceAdjustment: 80 },
          { size: "Super King", stock: 3, priceAdjustment: 150 },
        ],
      },
      {
        color: "navy",
        colorName: "Navy",
        colorHex: "#1e3a5f",
        images: [
          "https://images.unsplash.com/photo-1607300110843-b3994a493d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwYmVkZGluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1NDI2MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1671500073201-e408999ff8dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkdXZldCUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Queen", stock: 4 },
          { size: "King", stock: 2, priceAdjustment: 80 },
          { size: "Super King", stock: 1, priceAdjustment: 150 },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Manta de Lana Heritage",
    basePrice: 295,
    description: "Manta 100% lana merino tejida a mano. Artesanía tradicional con fibras naturales de la más alta calidad. Calidez, textura y durabilidad excepcionales.",
    variants: [
      {
        color: "oatmeal",
        colorName: "Oatmeal",
        colorHex: "#d4c5b0",
        images: [
          "https://images.unsplash.com/photo-1671500073201-e408999ff8dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkdXZldCUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1616062324621-fe169d2ef6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNoZWV0cyUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Throw", stock: 18 },
          { size: "Queen", stock: 11, priceAdjustment: 50 },
          { size: "King", stock: 7, priceAdjustment: 95 },
        ],
      },
      {
        color: "terracotta",
        colorName: "Terracotta",
        colorHex: "#c66b3d",
        images: [
          "https://images.unsplash.com/photo-1616062324621-fe169d2ef6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNoZWV0cyUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1671500073201-e408999ff8dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkdXZldCUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Throw", stock: 3 },
          { size: "Queen", stock: 2, priceAdjustment: 50 },
          { size: "King", stock: 0, priceAdjustment: 95 },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Juego de Algodón Moonlight",
    basePrice: 325,
    discountPercentage: 10,
    description: "Algodón egipcio 800 hilos. Suavidad excepcional y durabilidad legendaria. El equilibrio perfecto entre lujo asequible y calidad premium.",
    variants: [
      {
        color: "white",
        colorName: "Blanco Puro",
        colorHex: "#ffffff",
        images: [
          "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aGl0ZSUyMGJlZGRpbmd8ZW58MXx8fHwxNzY1NDI2MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1616062324621-fe169d2ef6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNoZWV0cyUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Queen", stock: 25 },
          { size: "King", stock: 18, priceAdjustment: 45 },
          { size: "Super King", stock: 12, priceAdjustment: 90 },
        ],
      },
      {
        color: "pearl",
        colorName: "Perla",
        colorHex: "#e8e5dc",
        images: [
          "https://images.unsplash.com/photo-1616062324621-fe169d2ef6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNoZWV0cyUyMGJlaWdlfGVufDF8fHx8MTc2NTQyNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aGl0ZSUyMGJlZGRpbmd8ZW58MXx8fHwxNzY1NDI2MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ],
        sizes: [
          { size: "Queen", stock: 14 },
          { size: "King", stock: 9, priceAdjustment: 45 },
          { size: "Super King", stock: 6, priceAdjustment: 90 },
        ],
      },
    ],
  },
];

// Simple product data for the grid view
export const GRID_PRODUCTS: Product[] = DETAILED_PRODUCTS.map((product) => ({
  id: product.id,
  name: product.name,
  price: product.basePrice,
  image: product.variants[0].images[0],
  description: product.description.substring(0, 60) + "...",
}));
