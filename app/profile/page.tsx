import Link from "next/link";
import { Settings, Heart, ShoppingBag, Package, Star, ChevronRight } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const myListings = [
  { id: 1, name: "Vintage Bag", price: "Rp 450.000", status: "Active", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop" },
  { id: 2, name: "Denim Jacket", price: "Rp 320.000", status: "Sold", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=300&h=300&fit=crop" },
  { id: 3, name: "White Sneakers", price: "Rp 380.000", status: "Active", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=300&fit=crop" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Header */}
      <header className="bg-primary px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold text-white">Profile</h1>
          <Link href="/settings">
            <Settings className="w-5 h-5 text-white" />
          </Link>
        </div>
        
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white">
            NA
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-1">Najwa Aulia</h2>
            <p className="text-sm text-white/80">@najwaaulia</p>
            <div className="flex items-center gap-4 mt-2">
              <div className="text-center">
                <p className="text-lg font-bold text-white">24</p>
                <p className="text-xs text-white/80">Listings</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-white">156</p>
                <p className="text-xs text-white/80">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-white">89</p>
                <p className="text-xs text-white/80">Following</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="bg-white p-4 mb-4">
        <div className="grid grid-cols-4 gap-4 text-center">
          <Link href="/profile/purchases" className="flex flex-col items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <span className="text-xs text-gray-600">Purchases</span>
          </Link>
          <Link href="/profile/sales" className="flex flex-col items-center gap-2">
            <Package className="w-6 h-6 text-primary" />
            <span className="text-xs text-gray-600">Sales</span>
          </Link>
          <Link href="/profile/favorites" className="flex flex-col items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-xs text-gray-600">Favorites</span>
          </Link>
          <Link href="/profile/reviews" className="flex flex-col items-center gap-2">
            <Star className="w-6 h-6 text-primary" />
            <span className="text-xs text-gray-600">Reviews</span>
          </Link>
        </div>
      </div>

      {/* My Listings */}
      <div className="bg-white p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">My Listings</h3>
          <Link href="/profile/listings" className="text-sm text-primary">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {myListings.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.status === "Sold" && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-medium">SOLD</span>
                  </div>
                )}
              </div>
              <p className="text-xs mt-1 truncate">{item.name}</p>
              <p className="text-xs text-gray-600">{item.price}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="bg-white">
        {[
          { label: "Account Settings", href: "/settings/account" },
          { label: "Payment Methods", href: "/settings/payment" },
          { label: "Shipping Address", href: "/settings/address" },
          { label: "Help & Support", href: "/help" },
          { label: "About", href: "/about" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center justify-between px-4 py-4 border-b border-gray-100"
          >
            <span className="text-sm">{item.label}</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
