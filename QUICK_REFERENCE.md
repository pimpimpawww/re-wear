# ⚡ Quick Reference Guide

Cheat sheet untuk development RE WEAR RI.

---

## 🚀 Commands

```bash
# Install
npm install

# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint
```

---

## 📁 File Locations

```
Pages:          app/*/page.tsx
Components:     components/*.tsx
Styles:         app/globals.css
Config:         tailwind.config.ts, next.config.js
Images:         public/products/
Docs:           *.md files
```

---

## 🎨 Colors

```css
Primary:   #9B8B8B    bg-primary    text-primary
Secondary: #C4B5B5    bg-secondary  text-secondary
Accent:    #8B7070    bg-accent     text-accent
```

---

## 📱 Routes

```
/                    Home
/trending            Trending items
/category            Categories
/category/[id]       Subcategories
/product/[id]        Product detail
/checkout            Checkout
/payment             Payment
/sell                Sell item
/inbox               Messages
/profile             User profile
/cart                Shopping cart
```

---

## 🧩 Components

```tsx
// Bottom Navigation
import BottomNav from "@/components/BottomNav";
<BottomNav />

// Icons
import { Search, Heart, ShoppingCart } from "lucide-react";
<Search className="w-5 h-5" />
```

---

## 🎯 Common Patterns

### Product Card
```tsx
<div className="bg-white rounded-lg overflow-hidden">
  <div className="aspect-square bg-gradient-to-br from-secondary/40 to-primary/20" />
  <div className="p-3">
    <p className="text-sm font-medium">{name}</p>
    <p className="text-sm text-accent">{price}</p>
  </div>
</div>
```

### Button Primary
```tsx
<button className="bg-accent text-white py-3 px-6 rounded-full font-semibold">
  Click Me
</button>
```

### Button Secondary
```tsx
<button className="border border-accent text-accent py-3 px-6 rounded-full">
  Click Me
</button>
```

### Input Field
```tsx
<input
  type="text"
  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
  placeholder="Enter text"
/>
```

### Search Bar
```tsx
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
  <input
    type="text"
    placeholder="Search"
    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
  />
</div>
```

---

## 🔧 Tailwind Classes

### Layout
```
flex, grid, grid-cols-2, gap-3, space-y-4
px-4, py-3, p-4, mx-auto, max-w-md
```

### Typography
```
text-xs, text-sm, text-base, text-lg, text-xl
font-medium, font-semibold, font-bold
```

### Colors
```
bg-white, bg-gray-50, bg-primary, bg-accent
text-gray-600, text-accent, text-white
border-gray-200, border-accent
```

### Spacing
```
mb-3, mt-4, pt-2, pb-4
gap-2, gap-3, space-y-2
```

### Borders & Shadows
```
rounded-lg, rounded-full, rounded-2xl
shadow-sm, shadow-lg
border, border-2, border-t
```

---

## 📊 Data Structures

### Product
```typescript
{
  id: number;
  name: string;
  price: string;
  image: string;
  category?: string;
  size?: string;
  condition?: string;
}
```

### User
```typescript
{
  id: number;
  name: string;
  email: string;
  avatar?: string;
  rating?: number;
}
```

### Order
```typescript
{
  id: string;
  product: Product;
  quantity: number;
  total: number;
  status: string;
}
```

---

## 🎨 Gradient Backgrounds

```tsx
// Product placeholder
className="bg-gradient-to-br from-secondary/40 to-primary/20"

// Header
className="bg-primary/90 backdrop-blur-sm"

// Accent
className="bg-accent/10"
```

---

## 🔗 Navigation

### Link
```tsx
import Link from "next/link";
<Link href="/product/1">View Product</Link>
```

### Router
```tsx
import { useRouter } from "next/navigation";
const router = useRouter();
router.push("/checkout");
```

### Back Button
```tsx
import { ChevronLeft } from "lucide-react";
<Link href="/">
  <ChevronLeft className="w-6 h-6" />
</Link>
```

---

## 📱 Responsive Design

```tsx
// Mobile first
className="text-sm md:text-base lg:text-lg"

// Grid responsive
className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"

// Hide on mobile
className="hidden md:block"

// Show on mobile only
className="block md:hidden"
```

---

## 🎯 Common Tasks

### Add New Page
1. Create `app/newpage/page.tsx`
2. Add to navigation
3. Test routing

### Add New Product
1. Add to products array
2. Add image to `public/products/`
3. Update product data

### Change Colors
1. Edit `tailwind.config.ts`
2. Update color values
3. Restart dev server

### Add Icon
```tsx
import { IconName } from "lucide-react";
<IconName className="w-5 h-5" />
```

---

## 🐛 Debugging

### Check Console
```bash
# Browser console (F12)
# Terminal output
```

### Common Issues
```
Port in use:        npm run dev -- -p 3001
Module not found:   npm install
Image not loading:  Check path /products/name.jpg
Styling broken:     Restart dev server
```

---

## 📦 Dependencies

```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "lucide-react": "^0.462.0"
}
```

---

## ✅ Checklist

### Before Commit
- [ ] No console.log()
- [ ] No TypeScript errors
- [ ] All features working
- [ ] Responsive on mobile
- [ ] Images optimized

### Before Deploy
- [ ] Build successful
- [ ] Environment variables set
- [ ] Database connected
- [ ] Payment configured
- [ ] Domain ready

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [TypeScript](https://www.typescriptlang.org/docs)

---

## 💡 Tips

1. Use `className` not `class`
2. Images in `public/` accessible via `/filename`
3. Use `"use client"` for interactive components
4. Tailwind classes are mobile-first
5. Test on real mobile devices

---

**Quick access to docs:**
- Setup: `GETTING_STARTED.md`
- Features: `FEATURES_DOCUMENTATION.md`
- Images: `IMAGES_GUIDE.md`
- API: `API_INTEGRATION.md`
- Deploy: `DEPLOYMENT.md`
