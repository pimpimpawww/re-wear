"use client";

import { useState } from "react";
import { Upload, Camera, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function SellPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    condition: "like-new",
    description: "",
    category: "",
    subcategory: "",
    size: "",
    color: "",
    material: "",
    price: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content - Offset for sidebar */}
      <div className="ml-64">
        <div className="max-w-4xl mx-auto bg-white min-h-screen">
          <div className="pb-6">
            {/* Header */}
            <header className="sticky top-0 bg-white border-b px-6 py-4 z-40">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Sell Your Item</h1>
                  <p className="text-sm text-gray-600 mt-1">List your pre-loved fashion items</p>
                </div>
                <button
                  onClick={() => router.back()}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </header>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Photos Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Photos (up to 4)
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-accent transition-colors cursor-pointer"
                    >
                      <Camera className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500">Add Photo</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="e.g. Vintage Leather Jacket"
                />
              </div>

              {/* Category & Brand */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select category</option>
                    <option value="woman">Woman</option>
                    <option value="man">Man</option>
                    <option value="child">Child</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g. Zara, H&M"
                  />
                </div>
              </div>

              {/* Condition */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Condition *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['like-new', 'good', 'fair'].map((cond) => (
                    <button
                      key={cond}
                      type="button"
                      onClick={() => setFormData({ ...formData, condition: cond })}
                      className={`py-3 px-4 border-2 rounded-lg font-medium capitalize transition-all ${
                        formData.condition === cond
                          ? 'border-accent bg-accent text-white'
                          : 'border-gray-300 hover:border-accent'
                      }`}
                    >
                      {cond.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Describe your item..."
                />
              </div>

              {/* Size, Color, Material */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <input
                    type="text"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="S, M, L"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color
                  </label>
                  <input
                    type="text"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Black, Blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Material
                  </label>
                  <input
                    type="text"
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Cotton, Leather"
                  />
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (Rp) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="100000"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="flex-1 py-3 border-2 border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors shadow-lg"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
