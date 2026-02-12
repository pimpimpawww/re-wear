# Panduan Menambahkan Gambar

## Struktur Folder Gambar

```
public/
├── products/           # Gambar produk
│   ├── bag1.jpg
│   ├── bag2.jpg
│   ├── jacket1.jpg
│   ├── shoes1.jpg
│   ├── dress1.jpg
│   └── sweater1.jpg
└── avatars/           # Avatar user (optional)
```

## Cara Menambahkan Gambar

### 1. Gambar Produk

Letakkan gambar produk di folder `public/products/`

Contoh gambar yang dibutuhkan sesuai UI:
- **Pink Sweater** - `1.jpg` atau `pink-sweater.jpg`
- **Gray Cardigan** - `2.jpg` atau `gray-cardigan.jpg`
- **Beige Jacket** - `3.jpg` atau `beige-jacket.jpg`
- **Floral Dress** - `4.jpg` atau `floral-dress.jpg`
- **Sneakers** - `5.jpg` atau `sneakers.jpg`
- **Yellow Sweater** - `6.jpg` atau `yellow-sweater.jpg`

### 2. Rekomendasi Ukuran Gambar

- **Product Grid**: 500x500px (square)
- **Product Detail**: 800x800px (square)
- **Avatar**: 200x200px (square)

### 3. Format yang Disarankan

- JPG untuk foto produk (lebih kecil file size)
- PNG untuk gambar dengan transparansi
- WebP untuk optimasi terbaik (Next.js auto-optimize)

## Menggunakan Gambar di Code

### Cara 1: Static Import (Recommended)
```tsx
import productImage from '@/public/products/bag1.jpg';

<Image src={productImage} alt="Product" />
```

### Cara 2: Public Path
```tsx
<img src="/products/bag1.jpg" alt="Product" />
```

### Cara 3: Next.js Image Component (Optimized)
```tsx
import Image from 'next/image';

<Image 
  src="/products/bag1.jpg" 
  alt="Product"
  width={500}
  height={500}
  className="rounded-lg"
/>
```

## Placeholder Sementara

Saat ini website menggunakan gradient placeholder:
```tsx
<div className="aspect-square bg-gradient-to-br from-secondary/40 to-primary/20 rounded-lg" />
```

Untuk mengganti dengan gambar asli, ubah menjadi:
```tsx
<img 
  src="/products/nama-file.jpg" 
  alt="Product Name"
  className="aspect-square object-cover rounded-lg"
/>
```

## Contoh Gambar Sesuai UI

Berdasarkan UI yang Anda kirim, berikut jenis gambar yang dibutuhkan:

### Home Page
- 4 gambar untuk "Just seen" section
- 2 gambar untuk "Hot items" section

### Trending Page
- 6 gambar produk trending dengan berbagai kategori

### Product Detail
- 4 gambar per produk (multiple angles)

### Profile Page
- 3 gambar untuk "My Listings"

## Tips Optimasi

1. **Compress images** sebelum upload (gunakan TinyPNG atau ImageOptim)
2. **Gunakan Next.js Image component** untuk auto-optimization
3. **Lazy loading** otomatis dengan Next.js Image
4. **Responsive images** dengan srcset otomatis

## Sumber Gambar Gratis

Jika butuh placeholder images:
- [Unsplash](https://unsplash.com) - Fashion photography
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images

## Update Code untuk Gambar Real

Setelah menambahkan gambar, update file berikut:

1. **app/page.tsx** - Update products array dengan path gambar
2. **app/trending/page.tsx** - Update trendingProducts array
3. **app/product/[id]/page.tsx** - Update product images
4. **app/profile/page.tsx** - Update myListings array

Contoh update:
```tsx
const products = [
  { 
    id: 1, 
    name: "Pink Sweater", 
    price: "Rp 215.000", 
    image: "/products/pink-sweater.jpg"  // ← Tambahkan ini
  },
  // ...
];
```

Kemudian di render:
```tsx
<img 
  src={product.image} 
  alt={product.name}
  className="w-full h-full object-cover"
/>
```
