"use client";

import { X, Share2, Heart, MessageCircle, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    name: "Vintage Leather Crossbody Bag",
    price: "Rp 355.000",
    brand: "High-end fashion",
    condition: "Like new",
    description: "Beautiful vintage leather crossbody bag in excellent condition. Perfect for daily use or special occasions. The leather is soft and supple with minimal signs of wear. Comes with adjustable strap and multiple compartments.",
    category: "Woman / Bags & Purses",
    size: "Medium (25x20x8 cm)",
    color: "Brown",
    material: "Genuine Leather",
    seller: {
      name: "Sarah Johnson",
      rating: 4.8,
      sales: 156,
    }
  };

  const handleAddToCart = () => {
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b sticky top-0 bg-white z-10">
        <Link href="/">
          <X className="w-6 h-6" />
        </Link>
        <div className="flex gap-3">
          <button onClick={() => setIsFavorite(!isFavorite)}>
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </button>
          <button>
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Images */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-2">
          <img 
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop" 
            alt="Product 1"
            className="aspect-square object-cover rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500&h=500&fit=crop" 
            alt="Product 2"
            className="aspect-square object-cover rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop" 
            alt="Product 3"
            className="aspect-square object-cover rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=500&h=500&fit=crop" 
            alt="Product 4"
            className="aspect-square object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Price & Title */}
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-bold text-accent">{product.price}</p>
      </div>

      {/* Seller Info */}
      <div className="px-4 py-3 border-y border-gray-100 my-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium">
              {product.seller.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm font-medium">{product.seller.name}</p>
              <p className="text-xs text-gray-500">⭐ {product.seller.rating} • {product.seller.sales} sales</p>
            </div>
          </div>
          <Link href="/inbox/1">
            <button className="p-2 border border-gray-300 rounded-full">
              <MessageCircle className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 py-4 space-y-4">
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Brand:</span>
            <span className="font-medium">{product.brand}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Condition:</span>
            <span className="font-medium">{product.condition}</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Description</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm py-2 border-b border-gray-100">
              <span className="text-gray-600">Category:</span>
              <span className="font-medium">{product.category}</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b border-gray-100">
              <span className="text-gray-600">Size:</span>
              <span className="font-medium">{product.size}</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b border-gray-100">
              <span className="text-gray-600">Color:</span>
              <span className="font-medium">{product.color}</span>
            </div>
            <div className="flex justify-between text-sm py-2">
              <span className="text-gray-600">Material:</span>
              <span className="font-medium">{product.material}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 max-w-md mx-auto">
        <div className="flex gap-3">
          <Link href="/inbox/1" className="px-6 py-3 border border-accent text-accent rounded-full text-sm font-medium flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Chat
          </Link>
          <button 
            onClick={handleAddToCart}
            className="flex-1 bg-accent text-white py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
