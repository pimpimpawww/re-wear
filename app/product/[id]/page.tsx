'use client';

import { useEffect, useState } from "react";
import { X, Share2, Heart, MessageCircle, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProduct, toggleFavorite, isFavorited } from "@/lib/api/products";
import { useAuth } from "@/contexts/AuthContext";
import MobileContainer from "@/components/MobileContainer";

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { user } = useAuth();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(parseInt(params.id));
        setProduct(data);
        
        if (user) {
          const favStatus = await isFavorited(parseInt(params.id));
          setIsFav(favStatus);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id, user]);

  const handleFavorite = async () => {
    if (!user) {
      router.push('/login');
      return;
    }

    try {
      const newStatus = await toggleFavorite(parseInt(params.id));
      setIsFav(newStatus);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const handleAddToCart = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    router.push("/checkout");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Product not found</p>
          <Link href="/" className="text-accent font-medium hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <MobileContainer className="bg-white">
      <div className="pb-24">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b sticky top-0 bg-white z-10">
        <Link href="/">
          <X className="w-6 h-6" />
        </Link>
        <div className="flex gap-3">
          <button onClick={handleFavorite}>
            <Heart className={`w-5 h-5 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
          </button>
          <button>
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Images */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-2">
          {product.images.slice(0, 4).map((img: string, i: number) => (
            <img 
              key={i}
              src={img || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop"} 
              alt={`Product ${i + 1}`}
              className="aspect-square object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Price & Title */}
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold mb-2">{product.title}</h1>
        <p className="text-2xl font-bold text-accent">Rp {product.price.toLocaleString('id-ID')}</p>
      </div>

      {/* Seller Info */}
      <div className="px-4 py-3 border-y border-gray-100 my-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium">
              {product.seller?.username?.substring(0, 2).toUpperCase() || 'UN'}
            </div>
            <div>
              <p className="text-sm font-medium">{product.seller?.full_name || 'Unknown'}</p>
              <p className="text-xs text-gray-500">@{product.seller?.username || 'unknown'}</p>
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
            <span className="font-medium">{product.brand || 'N/A'}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Condition:</span>
            <span className="font-medium capitalize">{product.condition}</span>
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
              <span className="font-medium capitalize">{product.category} / {product.subcategory}</span>
            </div>
            {product.size && (
              <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                <span className="text-gray-600">Size:</span>
                <span className="font-medium">{product.size}</span>
              </div>
            )}
            {product.color && (
              <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                <span className="text-gray-600">Color:</span>
                <span className="font-medium capitalize">{product.color}</span>
              </div>
            )}
            {product.material && (
              <div className="flex justify-between text-sm py-2">
                <span className="text-gray-600">Material:</span>
                <span className="font-medium capitalize">{product.material}</span>
              </div>
            )}
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
    </MobileContainer>
  );
}
