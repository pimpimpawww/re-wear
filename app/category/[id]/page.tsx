import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import MobileContainer from "@/components/MobileContainer";

const subcategories: Record<string, string[]> = {
  woman: ["Footwear", "Dresses", "Tops", "Bottoms", "Outerwear", "Bags & Purses", "Accessories"],
  man: ["Footwear", "Shirts", "Pants", "Outerwear", "Accessories"],
  child: ["Boys", "Girls", "Babies", "Shoes"],
  others: ["Home & Living", "Electronics", "Books"],
};

export default function SubcategoryPage({ params }: { params: { id: string } }) {
  const items = subcategories[params.id] || [];

  return (
    <MobileContainer>
      <div className="pb-20">
        {/* Header */}
        <header className="bg-white px-4 py-4 border-b">
        <div className="bg-secondary/30 rounded-full px-4 py-2 text-center mb-3">
          <span className="text-sm font-medium capitalize">{params.id}</span>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search items"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
          />
        </div>
      </header>

      {/* Subcategories */}
      <div className="bg-white">
        {items.map((item) => (
          <Link
            key={item}
            href={`/category/${params.id}/${item.toLowerCase()}`}
            className="flex items-center justify-between px-4 py-4 border-b border-gray-100"
          >
            <span className="text-sm">{item}</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        ))}
      </div>

      <BottomNav />
      </div>
    </MobileContainer>
  );
}
