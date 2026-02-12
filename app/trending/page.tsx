import Link from "next/link";
import { Search } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const trendingProducts = [
  { id: 1, name: "Vintage Leather Bag", price: "Rp 450.000", likes: 234, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop" },
  { id: 2, name: "Denim Jacket", price: "Rp 320.000", likes: 189, image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=500&fit=crop" },
  { id: 3, name: "White Sneakers", price: "Rp 380.000", likes: 156, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop" },
  { id: 4, name: "Floral Maxi Dress", price: "Rp 280.000", likes: 145, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop" },
  { id: 5, name: "Wool Sweater", price: "Rp 195.000", likes: 132, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop" },
  { id: 6, name: "Crossbody Bag", price: "Rp 275.000", likes: 128, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop" },
];

export default function TrendingPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-primary/90 backdrop-blur-sm px-4 py-3 z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search trending items"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
        <h1 className="text-lg font-semibold">🔥 Trending Now</h1>
      </header>

      {/* Trending Products */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          {trendingProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-square relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                    ❤️ {product.likes}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium mb-1 line-clamp-1">{product.name}</p>
                  <p className="text-sm text-accent font-semibold">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
