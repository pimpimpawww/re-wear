"use client";

import { useState } from "react";
import { X, Upload, Camera } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    // Simulate upload
    alert("Product uploaded successfully!");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b sticky top-0 bg-white z-10">
        <Link href="/">
          <X className="w-6 h-6" />
        </Link>
        <h1 className="text-lg font-semibold">Sell Item</h1>
        <div className="w-6" />
      </header>

      <form onSubmit={handleSubmit} className="px-4 py-4 space-y-4">
        {/* Upload Photos */}
        <div>
          <label className="block text-sm font-medium mb-2">Photos (Max 4)</label>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                type="button"
                className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-primary transition"
              >
                {i === 1 ? <Camera className="w-6 h-6 text-gray-400" /> : <Upload className="w-5 h-5 text-gray-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g., Vintage Leather Bag"
            required
          />
        </div>

        {/* Brand & Condition */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-2">Brand</label>
            <input
              type="text"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Brand name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Condition</label>
            <select
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="new">New</option>
              <option value="like-new">Like New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Describe your item..."
            required
          />
        </div>

        {/* Category */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select</option>
              <option value="woman">Woman</option>
              <option value="man">Man</option>
              <option value="child">Child</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subcategory</label>
            <select
              value={formData.subcategory}
              onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select</option>
              <option value="bags">Bags & Purses</option>
              <option value="footwear">Footwear</option>
              <option value="dresses">Dresses</option>
              <option value="tops">Tops</option>
            </select>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <input
              type="text"
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="S, M, L"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Color</label>
            <input
              type="text"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Brown"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Material</label>
            <input
              type="text"
              value={formData.material}
              onChange={(e) => setFormData({ ...formData, material: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Leather"
            />
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-2">Price (Rp)</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="355000"
            required
          />
        </div>
      </form>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 max-w-md mx-auto">
        <div className="flex gap-3">
          <button
            type="button"
            className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium"
          >
            Save Draft
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex-1 bg-accent text-white py-3 rounded-full text-sm font-medium"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
