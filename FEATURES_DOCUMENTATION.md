# Dokumentasi Fitur RE WEAR RI

## 🎯 Overview

Website e-commerce fashion "RE WEAR RI" dengan design minimalis menggunakan color scheme mauve/taupe. Semua fitur sudah diimplementasikan sesuai UI mockup yang diberikan.

---

## 📱 Halaman & Fitur

### 1. HOME PAGE (`/`)

**Fitur:**
- ✅ Search bar di header
- ✅ Shopping cart icon
- ✅ "Just seen" section dengan 4 produk
- ✅ "Hot items" section dengan 2 produk
- ✅ Product grid 2 kolom
- ✅ Bottom navigation

**User Flow:**
1. User membuka website
2. Melihat produk yang baru dilihat
3. Scroll untuk melihat hot items
4. Klik produk untuk detail
5. Gunakan search untuk cari produk
6. Akses cart dari icon

---

### 2. TRENDING PAGE (`/trending`)

**Fitur:**
- ✅ Search bar untuk trending items
- ✅ Product grid dengan likes counter
- ✅ Badge "🔥 Trending Now"
- ✅ Sorting berdasarkan popularity
- ✅ Real-time likes display

**User Flow:**
1. Klik "Trending" di bottom nav
2. Lihat produk paling populer
3. Filter dengan search
4. Klik produk untuk detail

**Data yang ditampilkan:**
- Product name
- Price
- Number of likes
- Product image

---

### 3. CATEGORY PAGE (`/category`)

**Fitur:**
- ✅ List 4 kategori utama:
  - Woman
  - Man
  - Child
  - Others
- ✅ Search category
- ✅ Chevron icon untuk navigasi
- ✅ Clean list design

**User Flow:**
1. Klik category dari navigation
2. Pilih kategori (Woman/Man/Child/Others)
3. Masuk ke subcategory page

---

### 4. SUBCATEGORY PAGE (`/category/[id]`)

**Fitur:**
- ✅ Dynamic routing berdasarkan kategori
- ✅ Search items dalam kategori
- ✅ List subcategories:
  - **Woman**: Footwear, Dresses, Tops, Bottoms, Outerwear, Bags & Purses, Accessories
  - **Man**: Footwear, Shirts, Pants, Outerwear, Accessories
  - **Child**: Boys, Girls, Babies, Shoes
  - **Others**: Home & Living, Electronics, Books

**User Flow:**
1. Pilih kategori utama
2. Lihat list subcategory
3. Search untuk filter
4. Klik subcategory untuk lihat produk

---

### 5. PRODUCT DETAIL PAGE (`/product/[id]`)

**Fitur:**
- ✅ 4 product images dalam grid
- ✅ Product name & price
- ✅ Seller information dengan rating
- ✅ Brand & condition
- ✅ Detailed description
- ✅ Product details (Category, Size, Color, Material)
- ✅ Favorite button (heart icon)
- ✅ Share button
- ✅ Chat dengan seller
- ✅ Buy Now button

**User Flow:**
1. Klik produk dari list
2. Lihat foto produk (4 gambar)
3. Baca deskripsi lengkap
4. Cek seller rating
5. Chat dengan seller (optional)
6. Add to favorites (optional)
7. Klik "Buy Now" untuk checkout

**Data yang ditampilkan:**
- Product images (4 photos)
- Name & price
- Seller profile (name, rating, total sales)
- Brand & condition
- Full description
- Category path
- Size, color, material
- Shipping info

---

### 6. CHECKOUT PAGE (`/checkout`)

**Fitur:**
- ✅ Shipping address display & edit
- ✅ Order summary dengan product info
- ✅ Shipping method selection:
  - Regular (3-5 days) - Rp 15.000
  - Express (1-2 days) - Rp 25.000
- ✅ Payment method selection:
  - Bank Transfer
  - E-Wallet (GoPay, OVO, Dana)
  - Cash on Delivery
- ✅ Shipping promo notification
- ✅ Price breakdown:
  - Subtotal
  - Shipping cost
  - Total payment
- ✅ Proceed to payment button

**User Flow:**
1. Review shipping address
2. Check order summary
3. Pilih metode pengiriman
4. Pilih metode pembayaran
5. Review total payment
6. Klik "Proceed to Payment"

---

### 7. PAYMENT PAGE (`/payment`)

**Fitur:**
- ✅ Payment countdown timer (1 hour)
- ✅ Step-by-step payment instructions
- ✅ Bank transfer details:
  - Bank name
  - Account number (with copy button)
  - Account name
  - Total amount (with copy button)
- ✅ Order ID (with copy button)
- ✅ Upload payment proof
- ✅ Confirm payment button

**User Flow:**
1. Lihat countdown timer
2. Baca instruksi pembayaran
3. Copy nomor rekening
4. Transfer sesuai jumlah
5. Upload bukti transfer
6. Klik "Confirm Payment"
7. Tunggu verifikasi

**Payment Details:**
- Bank: BCA
- Account: 1234567890
- Name: RE WEAR RI
- Amount: Rp 370.000
- Order ID: RWR-2024-001234

---

### 8. SELL ITEM PAGE (`/sell`)

**Fitur:**
- ✅ Upload 4 photos (camera/gallery)
- ✅ Product information form:
  - Title
  - Brand
  - Condition (dropdown)
  - Description (textarea)
  - Category (dropdown)
  - Subcategory (dropdown)
  - Size
  - Color
  - Material
  - Price
- ✅ Save draft button
- ✅ Upload button
- ✅ Form validation

**User Flow:**
1. Klik "Sell" di bottom nav
2. Upload foto produk (max 4)
3. Isi detail produk
4. Pilih kategori & subcategory
5. Set harga
6. Save draft atau Upload
7. Produk masuk ke listing

---

### 9. INBOX/MESSAGES PAGE (`/inbox`)

**Fitur:**
- ✅ Search messages
- ✅ Conversation list dengan:
  - Avatar (initials)
  - Sender name
  - Last message preview
  - Timestamp
  - Unread indicator (red dot)
- ✅ Unread message highlighting
- ✅ Click to open chat

**User Flow:**
1. Klik "Inbox" di bottom nav
2. Lihat list conversations
3. Unread messages di atas
4. Search untuk cari chat
5. Klik untuk buka conversation

**Sample Conversations:**
- Sarah Johnson: "Is this still available?" (2m ago) - Unread
- Mike Chen: "Can you do Rp 300.000?" (1h ago) - Unread
- Lisa Anderson: "Thanks for the quick shipping!" (3h ago)
- David Kim: "What's the condition?" (Yesterday)
- Emma Wilson: "I'll take it!" (2 days ago)

---

### 10. PROFILE PAGE (`/profile`)

**Fitur:**
- ✅ Profile header dengan:
  - Avatar (initials)
  - Username
  - Stats (Listings, Followers, Following)
- ✅ Quick access menu:
  - Purchases
  - Sales
  - Favorites
  - Reviews
- ✅ My Listings section:
  - Grid 3 kolom
  - Status badge (Active/Sold)
  - View all link
- ✅ Settings menu:
  - Account Settings
  - Payment Methods
  - Shipping Address
  - Help & Support
  - About

**User Flow:**
1. Klik "Profile" di bottom nav
2. Lihat statistics
3. Access purchases/sales/favorites
4. Manage listings
5. Edit settings
6. Update payment/address

**Profile Stats:**
- 24 Listings
- 156 Followers
- 89 Following

---

## 🎨 Design System

### Colors
```css
Primary: #9B8B8B (mauve)
Secondary: #C4B5B5 (light taupe)
Accent: #8B7070 (dark mauve)
```

### Typography
- Font: System default (sans-serif)
- Sizes: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl

### Components
- Rounded corners: rounded-lg, rounded-full
- Shadows: shadow-sm, shadow-lg
- Borders: border-gray-100, border-gray-200

---

## 🔄 User Flows

### Complete Buying Flow:
```
Home → Product Detail → Checkout → Payment → Confirmation
```

### Complete Selling Flow:
```
Sell → Upload Photos → Fill Details → Upload → Live Listing
```

### Communication Flow:
```
Product Detail → Chat Button → Inbox → Conversation
```

---

## 📊 Data Structure

### Product Object:
```typescript
{
  id: number;
  name: string;
  price: string;
  image: string;
  brand?: string;
  condition?: string;
  description?: string;
  category?: string;
  size?: string;
  color?: string;
  material?: string;
  seller?: {
    name: string;
    rating: number;
    sales: number;
  }
}
```

### Order Object:
```typescript
{
  orderId: string;
  product: Product;
  shippingMethod: 'regular' | 'express';
  paymentMethod: 'transfer' | 'ewallet' | 'cod';
  shippingCost: number;
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'completed';
}
```

---

## 🚀 Next Steps

### Untuk Development:
1. ✅ Install dependencies: `npm install`
2. ✅ Run dev server: `npm run dev`
3. 📸 Tambahkan gambar produk ke `public/products/`
4. 🔧 Customize data sesuai kebutuhan
5. 🎨 Fine-tune styling jika perlu

### Untuk Production:
1. Setup database (PostgreSQL/MongoDB)
2. Implement authentication (NextAuth.js)
3. Setup payment gateway (Midtrans/Xendit)
4. Add image upload (Cloudinary/AWS S3)
5. Deploy to Vercel/Railway

---

## 📝 Notes

- Semua fitur sudah functional dengan dummy data
- Ready untuk integrasi dengan backend API
- Mobile-first responsive design
- Optimized untuk performance
- SEO-friendly dengan Next.js App Router
