import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const products = [
  { id: 1, name: "Pink Sweater", price: "Rp 215.000", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop" },
  { id: 2, name: "Gray Cardigan", price: "Rp 147.000", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop" },
  { id: 3, name: "Beige Jacket", price: "Rp 183.000", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop" },
  { id: 4, name: "Floral Dress", price: "Rp 256.000", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop" },
  { id: 5, name: "Sneakers", price: "Rp 350.000", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop" },
  { id: 6, name: "Yellow Sweater", price: "Rp 180.000", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&h=500&fit=crop" },
];

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-primary/90 backdrop-blur-sm px-4 py-3 z-10">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search items"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <button className="p-2">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Just seen section */}
      <section className="px-4 py-4">
        <h2 className="text-sm font-medium mb-3">Just seen →</h2>
        <div className="grid grid-cols-2 gap-3">
          {products.slice(0, 4).map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
                <div className="p-2">
                  <p className="text-xs font-medium">{product.name}</p>
                  <p className="text-xs text-gray-600">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hot items section */}
      <section className="px-4 py-4">
        <h2 className="text-sm font-medium mb-3">Hot items</h2>
        <div className="grid grid-cols-2 gap-3">
          {products.slice(4).map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
                <div className="p-2">
                  <p className="text-xs font-medium">{product.name}</p>
                  <p className="text-xs text-gray-600">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
