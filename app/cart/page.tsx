import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import MobileContainer from "@/components/MobileContainer";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Vintage Leather Bag",
      price: 355000,
      size: "M",
      condition: "75%",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 320000,
      size: "L",
      condition: "Like New",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=200&h=200&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15000;
  const total = subtotal + shipping;

  return (
    <MobileContainer>
      <div className="pb-32">
        {/* Header */}
        <header className="bg-white px-4 py-4 border-b sticky top-0 z-10">
        <h1 className="text-lg font-semibold">Shopping Cart</h1>
      </header>

      {/* Cart Items */}
      <div className="p-4 space-y-3">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-4">
            <div className="flex gap-3">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-2">
                  Size: {item.size} • {item.condition}
                </p>
                <p className="text-base font-bold text-accent">
                  Rp {item.price.toLocaleString("id-ID")}
                </p>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t">
              <span className="text-sm text-gray-600">Quantity</span>
              <div className="flex items-center gap-3">
                <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-4 max-w-md mx-auto">
        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
            <span>Rp {subtotal.toLocaleString("id-ID")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span>Rp {shipping.toLocaleString("id-ID")}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-semibold text-base">
            <span>Total</span>
            <span className="text-accent">Rp {total.toLocaleString("id-ID")}</span>
          </div>
        </div>
        <Link href="/checkout">
          <button className="w-full bg-accent text-white py-3 rounded-full font-semibold text-sm">
            Checkout ({cartItems.length})
          </button>
        </Link>
      </div>

      <BottomNav />
      </div>
    </MobileContainer>
  );
}
