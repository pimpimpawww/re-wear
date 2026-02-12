import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const categories = [
  { id: "woman", name: "Woman" },
  { id: "man", name: "Man" },
  { id: "child", name: "Child" },
  { id: "others", name: "Others" },
];

export default function CategoryPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-primary px-4 py-4">
        <div className="bg-secondary/50 rounded-full px-4 py-2 text-center">
          <span className="text-sm font-medium">Category</span>
        </div>
      </header>

      {/* Search */}
      <div className="px-4 py-4">
        <input
          type="text"
          placeholder="Search Category"
          className="w-full px-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Categories List */}
      <div className="px-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="flex items-center justify-between py-4 border-b border-gray-200"
          >
            <span className="text-sm">{category.name}</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
