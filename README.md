# RE WEAR RI - Fashion Marketplace

E-commerce platform untuk fashion items dengan design minimalis dan modern.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Features Lengkap

### 🏠 Home Page
- Product grid dengan "Just seen" dan "Hot items"
- Search bar
- Quick access ke shopping cart

### 🔥 Trending Page
- Produk trending dengan jumlah likes
- Filter dan search functionality
- Real-time trending updates

### 📂 Category System
- Main categories: Woman, Man, Child, Others
- Subcategories untuk setiap kategori:
  - Woman: Footwear, Dresses, Tops, Bottoms, Outerwear, Bags & Purses, Accessories
  - Man: Footwear, Shirts, Pants, Outerwear, Accessories
  - Child: Boys, Girls, Babies, Shoes
  - Others: Home & Living, Electronics, Books

### 🛍️ Product Detail
- Multiple product images (4 photos)
- Detailed product information
- Seller profile dengan rating
- Chat dengan seller
- Add to favorites
- Share product
- Buy now button

### 💰 Checkout Flow
1. **Checkout Page**
   - Shipping address management
   - Product summary
   - Shipping method selection (Regular/Express)
   - Payment method selection (Bank Transfer/E-Wallet/COD)
   - Price breakdown

2. **Payment Page**
   - Payment countdown timer
   - Bank transfer details
   - Copy to clipboard functionality
   - Upload payment proof
   - Order ID tracking

### 🛒 Shopping Features
- Add to cart
- Favorites/Wishlist
- Product search
- Category filtering

### 💬 Inbox/Messages
- Chat dengan sellers
- Unread message indicators
- Message history
- Quick replies

### 👤 Profile Page
- User statistics (Listings, Followers, Following)
- My listings dengan status (Active/Sold)
- Quick access ke:
  - Purchases
  - Sales
  - Favorites
  - Reviews
- Account settings
- Payment methods
- Shipping addresses

### 📤 Sell Item
- Upload multiple photos (max 4)
- Product details form:
  - Title
  - Brand
  - Condition
  - Description
  - Category & Subcategory
  - Size, Color, Material
  - Price
- Save draft functionality
- Upload product

## Project Structure

```
app/
├── page.tsx                 # Home page
├── trending/page.tsx        # Trending items
├── category/
│   ├── page.tsx            # Category list
│   └── [id]/page.tsx       # Subcategory page
├── product/
│   └── [id]/page.tsx       # Product detail
├── checkout/page.tsx       # Checkout page
├── payment/page.tsx        # Payment page
├── sell/page.tsx           # Sell item form
├── inbox/page.tsx          # Messages
└── profile/page.tsx        # User profile

components/
└── BottomNav.tsx           # Bottom navigation

public/
└── products/               # Product images
```

## Color Scheme

- Primary: #9B8B8B (mauve)
- Secondary: #C4B5B5 (light taupe)
- Accent: #8B7070 (dark mauve)

## User Flow

### Buying Flow:
1. Browse products (Home/Trending/Category)
2. View product detail
3. Chat dengan seller (optional)
4. Click "Buy Now"
5. Review checkout details
6. Select shipping & payment method
7. Proceed to payment
8. Upload payment proof
9. Wait for verification

### Selling Flow:
1. Click "Sell" di bottom nav
2. Upload product photos
3. Fill product details
4. Set price
5. Upload product
6. Product goes live

## Notes

- Design mobile-first responsive
- Smooth animations dengan Framer Motion (optional)
- Real-time updates untuk messages
- Secure payment handling
- Image optimization untuk performance
