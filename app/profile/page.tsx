"use client";

import Link from "next/link";
import { Settings, Heart, ShoppingBag, Package, Star, ChevronRight, Edit } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const myListings = [
  { 
    id: 1, 
    name: "Vintage Bag", 
    price: "Rp 450.000", 
    status: "Active", 
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop" 
  },
  { 
    id: 2, 
    name: "Denim Jacket", 
    price: "Rp 320.000", 
    status: "Sold", 
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=300&h=300&fit=crop" 
  },
  { 
    id: 3, 
    name: "White Sneakers", 
    price: "Rp 380.000", 
    status: "Active", 
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=300&fit=crop" 
  },
  { 
    id: 4, 
    name: "Black Dress", 
    price: "Rp 280.000", 
    status: "Active", 
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop" 
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content - Offset for sidebar */}
      <div className="ml-64">
        <div className="max-w-5xl mx-auto bg-white min-h-screen">
          <div className="pb-6">
            {/* Header with Profile Info */}
            <header className="bg-gradient-to-r from-primary to-primary/80 px-6 py-8">
              <div className="flex items-start justify-between mb-6">
                <h1 className="text-2xl font-bold text-white">My Profile</h1>
                <Link href="/settings">
                  <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <Settings className="w-5 h-5 text-white" />
                  </button>
                </Link>
              </div>
              
              {/* Profile Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-3xl font-bold text-white">
                    NA
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Najwa Aulia</h2>
                    <p className="text-gray-600 mb-4">@najwaaulia</p>
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{myListings.length}</p>
                        <p className="text-sm text-gray-600">Listings</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">156</p>
                        <p className="text-sm text-gray-600">Followers</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">89</p>
                        <p className="text-sm text-gray-600">Following</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">4.8</p>
                        <p className="text-sm text-gray-600">Rating</p>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-2.5 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors flex items-center gap-2">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>
              </div>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 px-6 py-6">
              <Link href="/profile/purchases" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Purchases</span>
                  <span className="text-xs text-gray-500 mt-1">12 items</span>
                </div>
              </Link>

              <Link href="/profile/sales" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Sales</span>
                  <span className="text-xs text-gray-500 mt-1">8 sold</span>
                </div>
              </Link>

              <Link href="/profile/favorites" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Favorites</span>
                  <span className="text-xs text-gray-500 mt-1">24 items</span>
                </div>
              </Link>

              <Link href="/profile/reviews" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Reviews</span>
                  <span className="text-xs text-gray-500 mt-1">45 reviews</span>
                </div>
              </Link>
            </div>

            {/* My Listings */}
            <div className="px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">My Listings</h3>
                <Link href="/profile/listings" className="text-sm text-accent font-medium hover:text-accent/80">
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {myListings.map((item) => (
                  <Link key={item.id} href={`/product/${item.id}`}>
                    <div className="group">
                      <div className="aspect-square relative rounded-xl overflow-hidden mb-2">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        {item.status === "Sold" && (
                          <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                            <span className="text-white text-sm font-medium">SOLD</span>
                          </div>
                        )}
                        {item.status === "Active" && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            Active
                          </div>
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Settings Menu */}
            <div className="px-6 py-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Settings</h3>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                {[
                  { label: "Account Settings", href: "/settings/account" },
                  { label: "Payment Methods", href: "/settings/payment" },
                  { label: "Shipping Address", href: "/settings/address" },
                  { label: "Notifications", href: "/settings/notifications" },
                  { label: "Privacy & Security", href: "/settings/privacy" },
                  { label: "Help & Support", href: "/help" },
                  { label: "About", href: "/about" },
                ].map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors ${
                      index !== 6 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <span className="text-sm font-medium text-gray-900">{item.label}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
