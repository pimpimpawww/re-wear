'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, TrendingUp } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { getTrendingProducts } from "@/lib/api/products";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  likes_count: number;
}

export default function TrendingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const data = await getTrendingProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching trending:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrending();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading trending...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content - Offset for sidebar */}
      <div className="ml-64">
        <div className="max-w-7xl mx-auto bg-white min-h-screen">
          <div className="pb-6">
            {/* Header */}
            <header className="sticky top-0 bg-primary/90 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 z-40">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search trending items"
                    className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-2.5 rounded-full bg-white/80 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
                <Link href="/cart">
                  <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </Link>
              </div>
            </header>

            {/* Page Title */}
            <div className="px-4 sm:px-6 lg:px-8 py-6 border-b">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-full">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Trending Now</h1>
                  <p className="text-sm text-gray-600">Most popular items this week</p>
                </div>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-20">
                <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No trending items yet</p>
                <Link href="/sell" className="text-accent font-medium hover:underline">
                  Be the first to sell!
                </Link>
              </div>
            ) : (
              <section className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                  {products.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                      <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group relative">
                        {/* Trending Badge */}
                        <div className="absolute top-2 right-2 z-10 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Hot
                        </div>
                        
                        <div className="relative aspect-square overflow-hidden">
                          <img 
                            src={product.images[0] || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop"} 
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-2 sm:p-3">
                          <p className="text-xs sm:text-sm font-medium line-clamp-1 mb-1">{product.title}</p>
                          <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">
                            Rp {product.price.toLocaleString('id-ID')}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                            <span>{product.likes_count || 0} likes</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
