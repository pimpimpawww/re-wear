# 🚀 Getting Started - RE WEAR RI

Panduan lengkap untuk menjalankan website RE WEAR RI di local development.

---

## 📋 Prerequisites

Pastikan sudah terinstall:
- **Node.js** versi 18.x atau lebih baru
- **npm** atau **yarn** atau **pnpm**
- **Git** (optional)

Cek versi:
```bash
node --version
npm --version
```

---

## 🛠️ Installation

### 1. Install Dependencies

```bash
npm install
```

Atau menggunakan package manager lain:
```bash
# Yarn
yarn install

# pnpm
pnpm install

# Bun
bun install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Server akan berjalan di: **http://localhost:3000**

---

## 📱 Testing Fitur

### Home Page
1. Buka http://localhost:3000
2. Lihat product grid
3. Test search bar
4. Klik produk untuk detail

### Trending
1. Klik "Trending" di bottom navigation
2. Lihat produk dengan likes counter
3. Test search functionality

### Categories
1. Klik icon category di bottom nav
2. Pilih kategori (Woman/Man/Child/Others)
3. Lihat subcategories
4. Test navigation

### Product Detail
1. Klik salah satu produk
2. Lihat 4 foto produk
3. Test favorite button (heart icon)
4. Test share button
5. Klik "Chat" untuk inbox
6. Klik "Buy Now" untuk checkout

### Checkout Flow
1. Dari product detail, klik "Buy Now"
2. Review shipping address
3. Pilih shipping method (Regular/Express)
4. Pilih payment method
5. Klik "Proceed to Payment"
6. Lihat payment details
7. Test copy buttons
8. Upload payment proof (optional)
9. Klik "Confirm Payment"

### Sell Item
1. Klik "Sell" di bottom nav
2. Upload foto (placeholder)
3. Isi form product details
4. Test dropdown categories
5. Klik "Upload" atau "Save Draft"

### Inbox
1. Klik "Inbox" di bottom nav
2. Lihat list conversations
3. Perhatikan unread indicators
4. Test search messages

### Profile
1. Klik "Profile" di bottom nav
2. Lihat user stats
3. Test quick access menu
4. Lihat "My Listings"
5. Test settings menu

### Shopping Cart
1. Akses dari icon cart di header
2. Lihat cart items
3. Test quantity buttons (+/-)
4. Test remove item
5. Klik "Checkout"

---

## 🎨 Menambahkan Gambar

### Langkah 1: Siapkan Gambar
Siapkan gambar produk dengan format:
- JPG atau PNG
- Ukuran: 500x500px (square)
- Nama file: descriptive (contoh: `pink-sweater.jpg`)

### Langkah 2: Upload ke Folder
Letakkan gambar di: `public/products/`

```
public/
└── products/
    ├── pink-sweater.jpg
    ├── gray-cardigan.jpg
    ├── beige-jacket.jpg
    └── ...
```

### Langkah 3: Update Code
Edit `app/page.tsx`:

```typescript
const products = [
  { 
    id: 1, 
    name: "Pink Sweater", 
    price: "Rp 215.000", 
    image: "/products/pink-sweater.jpg"  // ← Tambahkan path
  },
  // ... produk lainnya
];
```

Update render:
```tsx
<img 
  src={product.image} 
  alt={product.name}
  className="w-full h-full object-cover"
/>
```

### Langkah 4: Refresh Browser
Gambar akan muncul otomatis!

---

## 🔧 Customization

### Mengubah Warna
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#9B8B8B",    // Mauve
  secondary: "#C4B5B5",  // Light taupe
  accent: "#8B7070",     // Dark mauve
}
```

### Mengubah Data Produk
Edit file-file berikut:
- `app/page.tsx` - Home products
- `app/trending/page.tsx` - Trending products
- `app/profile/page.tsx` - User listings

### Menambah Kategori
Edit `app/category/[id]/page.tsx`:

```typescript
const subcategories: Record<string, string[]> = {
  woman: ["Footwear", "Dresses", "Tops", ...],
  // Tambah kategori baru di sini
};
```

---

## 📦 Build untuk Production

### 1. Build Project
```bash
npm run build
```

### 2. Test Production Build
```bash
npm start
```

### 3. Deploy
Deploy ke platform pilihan:

**Vercel (Recommended):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy
```

**Railway/Render:**
- Connect GitHub repository
- Auto-deploy on push

---

## 🐛 Troubleshooting

### Port sudah digunakan
```bash
# Gunakan port lain
npm run dev -- -p 3001
```

### Module not found
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Image tidak muncul
1. Pastikan gambar ada di `public/products/`
2. Cek path: `/products/nama-file.jpg` (dengan slash di depan)
3. Refresh browser dengan Ctrl+Shift+R

### Styling tidak muncul
```bash
# Rebuild Tailwind
npm run dev
```

---

## 📚 Struktur Project

```
re-wear-ri/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home
│   ├── trending/          # Trending page
│   ├── category/          # Categories
│   ├── product/           # Product detail
│   ├── checkout/          # Checkout
│   ├── payment/           # Payment
│   ├── sell/              # Sell item
│   ├── inbox/             # Messages
│   ├── profile/           # User profile
│   ├── cart/              # Shopping cart
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   └── BottomNav.tsx     # Bottom navigation
├── public/               # Static files
│   └── products/         # Product images
├── tailwind.config.ts    # Tailwind config
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

---

## 🎯 Next Steps

### Untuk Development:
- [ ] Tambahkan gambar produk real
- [ ] Customize product data
- [ ] Test semua fitur
- [ ] Fine-tune styling

### Untuk Production:
- [ ] Setup database (PostgreSQL/MongoDB)
- [ ] Implement authentication (NextAuth.js)
- [ ] Integrate payment gateway (Midtrans)
- [ ] Add image upload (Cloudinary)
- [ ] Setup email notifications
- [ ] Add analytics (Google Analytics)
- [ ] SEO optimization
- [ ] Performance optimization

---

## 📞 Support

Jika ada pertanyaan atau issue:
1. Cek dokumentasi di `FEATURES_DOCUMENTATION.md`
2. Lihat panduan gambar di `IMAGES_GUIDE.md`
3. Review README.md untuk overview

---

## ✅ Checklist Testing

- [ ] Home page loads correctly
- [ ] Trending page shows products
- [ ] Category navigation works
- [ ] Product detail displays properly
- [ ] Checkout flow completes
- [ ] Payment page shows details
- [ ] Sell form submits
- [ ] Inbox shows messages
- [ ] Profile displays user info
- [ ] Cart manages items
- [ ] Bottom navigation works
- [ ] Search functionality works
- [ ] All buttons are clickable
- [ ] Mobile responsive
- [ ] No console errors

---

Selamat coding! 🎉
