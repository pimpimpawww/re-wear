# 🗄️ Supabase Setup Guide

Panduan lengkap untuk setup Supabase database untuk RE WEAR RI.

---

## 📋 Prerequisites

- Akun Supabase (gratis di [supabase.com](https://supabase.com))
- Project sudah di-clone dan dependencies ter-install

---

## 🚀 Step-by-Step Setup

### 1. Create Supabase Project

1. Buka [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in dengan GitHub
4. Click "New Project"
5. Isi detail project:
   - **Name**: re-wear-ri
   - **Database Password**: (simpan password ini!)
   - **Region**: Singapore (atau terdekat)
6. Click "Create new project"
7. Tunggu ~2 menit untuk setup

### 2. Get API Keys

1. Di Supabase Dashboard, buka **Settings** → **API**
2. Copy credentials:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...`
   - **service_role key**: `eyJhbGc...` (untuk admin operations)

### 3. Setup Environment Variables

1. Buka file `.env.local` di root project
2. Replace dengan credentials Anda:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### 4. Create Database Schema

1. Di Supabase Dashboard, buka **SQL Editor**
2. Click "New query"
3. Copy seluruh isi file `supabase/schema.sql`
4. Paste ke SQL Editor
5. Click "Run" atau tekan `Ctrl+Enter`
6. Tunggu sampai selesai (✓ Success)

### 5. Verify Tables Created

1. Buka **Table Editor**
2. Pastikan tables berikut ada:
   - ✅ profiles
   - ✅ products
   - ✅ orders
   - ✅ messages
   - ✅ favorites
   - ✅ reviews

### 6. Setup Storage (Optional - untuk upload gambar)

1. Buka **Storage**
2. Click "Create a new bucket"
3. Name: `product-images`
4. Public bucket: ✅ Yes
5. Click "Create bucket"

6. Setup Storage Policy:
   - Click bucket → **Policies**
   - Add policy untuk public read:

```sql
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'product-images' );

CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'product-images' 
  AND auth.role() = 'authenticated'
);
```

### 7. Enable Email Auth

1. Buka **Authentication** → **Providers**
2. Email provider sudah enabled by default
3. (Optional) Setup email templates di **Email Templates**

### 8. Test Connection

Run development server:
```bash
npm install
npm run dev
```

Buka http://localhost:3000/register dan coba register user baru.

---

## 🧪 Testing Database

### Create Test User

1. Buka http://localhost:3000/register
2. Register dengan:
   - Full Name: Test User
   - Username: testuser
   - Email: test@example.com
   - Password: test123

3. Check di Supabase:
   - **Authentication** → **Users** (user baru muncul)
   - **Table Editor** → **profiles** (profile auto-created)

### Add Test Products

Jalankan di SQL Editor:

```sql
-- Insert test products
INSERT INTO products (seller_id, title, description, price, category, subcategory, condition, images, status)
SELECT 
  id,
  'Vintage Leather Bag',
  'Beautiful vintage leather bag in excellent condition',
  355000,
  'woman',
  'bags',
  'like-new',
  ARRAY['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500'],
  'active'
FROM profiles
LIMIT 1;

INSERT INTO products (seller_id, title, description, price, category, subcategory, condition, images, status)
SELECT 
  id,
  'Denim Jacket',
  'Classic denim jacket, perfect condition',
  320000,
  'woman',
  'outerwear',
  'like-new',
  ARRAY['https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500'],
  'active'
FROM profiles
LIMIT 1;
```

---

## 📊 Database Structure

### Tables Overview

```
profiles
├── id (UUID, PK)
├── username (TEXT, UNIQUE)
├── full_name (TEXT)
├── avatar_url (TEXT)
├── bio (TEXT)
└── timestamps

products
├── id (BIGSERIAL, PK)
├── seller_id (UUID, FK → profiles)
├── title, description, price
├── category, subcategory
├── brand, condition, size, color, material
├── images (TEXT[])
├── status (active/sold/draft)
├── likes_count, views_count
└── timestamps

orders
├── id (UUID, PK)
├── buyer_id, seller_id (FK → profiles)
├── product_id (FK → products)
├── total_amount, shipping_cost
├── shipping_method, payment_method
├── status (pending/paid/shipped/completed/cancelled)
├── shipping_address (JSONB)
├── payment_proof_url
└── timestamps

messages
├── id (BIGSERIAL, PK)
├── sender_id, receiver_id (FK → profiles)
├── product_id (FK → products)
├── message (TEXT)
├── is_read (BOOLEAN)
└── created_at

favorites
├── id (BIGSERIAL, PK)
├── user_id (FK → profiles)
├── product_id (FK → products)
└── created_at

reviews
├── id (BIGSERIAL, PK)
├── reviewer_id, reviewee_id (FK → profiles)
├── order_id (FK → orders)
├── rating (1-5)
├── comment
└── created_at
```

---

## 🔒 Security (Row Level Security)

RLS sudah enabled untuk semua tables dengan policies:

### Profiles
- ✅ Public read
- ✅ Users can update own profile

### Products
- ✅ Public read (active products)
- ✅ Sellers can CRUD own products

### Orders
- ✅ Users can view own orders (buyer/seller)
- ✅ Users can create orders
- ✅ Sellers can update orders

### Messages
- ✅ Users can view own messages
- ✅ Users can send messages

### Favorites
- ✅ Users can manage own favorites

### Reviews
- ✅ Public read
- ✅ Users can CRUD own reviews

---

## 🔧 Useful SQL Queries

### Get user statistics
```sql
SELECT 
  p.username,
  COUNT(DISTINCT pr.id) as total_products,
  COUNT(DISTINCT o.id) as total_sales,
  AVG(r.rating) as avg_rating
FROM profiles p
LEFT JOIN products pr ON pr.seller_id = p.id
LEFT JOIN orders o ON o.seller_id = p.id
LEFT JOIN reviews r ON r.reviewee_id = p.id
WHERE p.id = 'user-uuid-here'
GROUP BY p.id, p.username;
```

### Get trending products
```sql
SELECT 
  p.*,
  pr.username as seller_username,
  COUNT(f.id) as favorites_count
FROM products p
JOIN profiles pr ON pr.id = p.seller_id
LEFT JOIN favorites f ON f.product_id = p.id
WHERE p.status = 'active'
GROUP BY p.id, pr.username
ORDER BY favorites_count DESC, p.views_count DESC
LIMIT 20;
```

### Get user conversations
```sql
SELECT DISTINCT ON (conversation_partner)
  CASE 
    WHEN sender_id = 'user-uuid' THEN receiver_id
    ELSE sender_id
  END as conversation_partner,
  m.*,
  p.username,
  p.avatar_url
FROM messages m
JOIN profiles p ON p.id = CASE 
  WHEN m.sender_id = 'user-uuid' THEN m.receiver_id
  ELSE m.sender_id
END
WHERE sender_id = 'user-uuid' OR receiver_id = 'user-uuid'
ORDER BY conversation_partner, created_at DESC;
```

---

## 🐛 Troubleshooting

### Error: "relation does not exist"
- Schema belum di-run
- Run `supabase/schema.sql` di SQL Editor

### Error: "JWT expired"
- Token expired, logout dan login lagi
- Check `.env.local` credentials

### Error: "permission denied"
- RLS policies blocking access
- Check user authentication
- Verify policies di Table Editor → Policies

### Products tidak muncul
- Check `status = 'active'`
- Verify RLS policies
- Check di Table Editor apakah data ada

---

## 📚 Resources

- [Supabase Docs](https://supabase.com/docs)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase Storage](https://supabase.com/docs/guides/storage)

---

## ✅ Setup Checklist

- [ ] Supabase project created
- [ ] API keys copied to `.env.local`
- [ ] Database schema executed
- [ ] Tables verified in Table Editor
- [ ] Storage bucket created (optional)
- [ ] Test user registered
- [ ] Test products added
- [ ] Authentication working
- [ ] Products displaying on homepage

---

Selamat! Database Supabase sudah siap! 🎉
