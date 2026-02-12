"use client";

import { useState } from "react";
import { ChevronLeft, MapPin, Truck, CreditCard } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [shippingMethod, setShippingMethod] = useState("regular");
  const [paymentMethod, setPaymentMethod] = useState("transfer");

  const product = {
    name: "Vintage Leather Crossbody Bag",
    price: 355000,
    size: "M",
    condition: "75%",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop"
  };

  const shippingCost = shippingMethod === "express" ? 25000 : 15000;
  const total = product.price + shippingCost;

  const handleCheckout = () => {
    router.push("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <header className="bg-white px-4 py-4 border-b sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link href="/product/1">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-lg font-semibold">Checkout</h1>
        </div>
      </header>

      {/* Shipping Address */}
      <div className="bg-white p-4 mb-3">
        <div className="flex items-start gap-3 mb-3">
          <MapPin className="w-5 h-5 text-accent mt-0.5" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold mb-1">Shipping Address</h3>
            <p className="text-sm text-gray-600">Najwa Aulia</p>
            <p className="text-sm text-gray-600">+62 812-3456-7890</p>
            <p className="text-sm text-gray-600 mt-1">
              Jl. Contoh No. 123, Kelurahan ABC<br />
              Kecamatan XYZ, Jakarta Selatan<br />
              DKI Jakarta, 12345
            </p>
          </div>
          <Link href="/settings/address" className="text-sm text-primary font-medium">
            Change
          </Link>
        </div>
      </div>

      {/* Product */}
      <div className="bg-white p-4 mb-3">
        <h3 className="text-sm font-semibold mb-3">Order Summary</h3>
        <div className="flex gap-3">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">{product.name}</p>
            <p className="text-xs text-gray-500 mb-2">
              Size: {product.size} • Condition: {product.condition}
            </p>
            <p className="text-base font-bold text-accent">
              Rp {product.price.toLocaleString('id-ID')}
            </p>
          </div>
        </div>
      </div>

      {/* Shipping Method */}
      <div className="bg-white p-4 mb-3">
        <div className="flex items-center gap-2 mb-3">
          <Truck className="w-5 h-5 text-accent" />
          <h3 className="text-sm font-semibold">Shipping Method</h3>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="shipping"
                value="regular"
                checked={shippingMethod === "regular"}
                onChange={(e) => setShippingMethod(e.target.value)}
                className="w-4 h-4 text-accent"
              />
              <div>
                <p className="text-sm font-medium">Regular Shipping</p>
                <p className="text-xs text-gray-500">3-5 business days</p>
              </div>
            </div>
            <span className="text-sm font-medium">Rp 15.000</span>
          </label>

          <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="shipping"
                value="express"
                checked={shippingMethod === "express"}
                onChange={(e) => setShippingMethod(e.target.value)}
                className="w-4 h-4 text-accent"
              />
              <div>
                <p className="text-sm font-medium">Express Shipping</p>
                <p className="text-xs text-gray-500">1-2 business days</p>
              </div>
            </div>
            <span className="text-sm font-medium">Rp 25.000</span>
          </label>
        </div>

        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-700">
            💡 Activate shipping promo to save on delivery costs
          </p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white p-4 mb-3">
        <div className="flex items-center gap-2 mb-3">
          <CreditCard className="w-5 h-5 text-accent" />
          <h3 className="text-sm font-semibold">Payment Method</h3>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                value="transfer"
                checked={paymentMethod === "transfer"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-accent"
              />
              <div>
                <p className="text-sm font-medium">Bank Transfer</p>
                <p className="text-xs text-gray-500">BCA, Mandiri, BNI</p>
              </div>
            </div>
          </label>

          <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                value="ewallet"
                checked={paymentMethod === "ewallet"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-accent"
              />
              <div>
                <p className="text-sm font-medium">E-Wallet</p>
                <p className="text-xs text-gray-500">GoPay, OVO, Dana</p>
              </div>
            </div>
          </label>

          <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-accent"
              />
              <div>
                <p className="text-sm font-medium">Cash on Delivery</p>
                <p className="text-xs text-gray-500">Pay when received</p>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-white p-4">
        <h3 className="text-sm font-semibold mb-3">Payment Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal (1 item)</span>
            <span>Rp {product.price.toLocaleString('id-ID')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping Cost</span>
            <span>Rp {shippingCost.toLocaleString('id-ID')}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-semibold text-base">
            <span>Total Payment</span>
            <span className="text-accent">Rp {total.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 max-w-md mx-auto">
        <button 
          onClick={handleCheckout}
          className="w-full bg-accent text-white py-3 rounded-full font-semibold text-sm"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
