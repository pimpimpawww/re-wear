'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { getProducts } from "@/lib/api/products";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
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
        {/* Responsive Container */}
        <div className="max-w-7xl mx-auto bg-white min-h-screen">
          <div className="pb-6">
            {/* Header - Responsive */}
            <header className="sticky top-0 bg-primary/90 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 z-40">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search items"
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

            {products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-600 mb-4 text-sm sm:text-base">No products yet</p>
                <Link href="/sell" className="text-accent font-medium hover:underline">
                  Be the first to sell!
                </Link>
              </div>
            ) : (
              <>
                {/* Just seen section - Responsive Grid */}
                <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                  <h2 className="text-sm sm:text-base lg:text-lg font-medium mb-3 sm:mb-4">Just seen →</h2>
                  {/* Grid: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                    {products.slice(0, 8).map((product) => (
                      <Link key={product.id} href={`/product/${product.id}`}>
                        <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                          <div className="relative aspect-square overflow-hidden">
                            <img 
                              src={product.images[0] || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop"} 
                              alt={product.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-2 sm:p-3">
                            <p className="text-xs sm:text-sm font-medium line-clamp-1 mb-1">{product.title}</p>
                            <p className="text-xs sm:text-sm text-gray-600 font-semibold">Rp {product.price.toLocaleString('id-ID')}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Hot items section - Responsive Grid */}
                {products.length > 8 && (
                  <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <h2 className="text-sm sm:text-base lg:text-lg font-medium mb-3 sm:mb-4">Hot items</h2>
                    {/* Grid: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                      {products.slice(8, 16).map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`}>
                          <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="relative aspect-square overflow-hidden">
                              <img 
                                src={product.images[0] || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop"} 
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-2 sm:p-3">
                              <p className="text-xs sm:text-sm font-medium line-clamp-1 mb-1">{product.title}</p>
                              <p className="text-xs sm:text-sm text-gray-600 font-semibold">Rp {product.price.toLocaleString('id-ID')}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}


          </div>
        </div>
      </div>
    </div>
  );
}
