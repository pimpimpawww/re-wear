# 🧪 Testing Guide - RE WEAR RI

Panduan untuk testing aplikasi setelah integrasi Supabase.

---

## ✅ Prerequisites

- [x] Database schema sudah di-run
- [x] `.env.local` sudah terisi dengan Supabase credentials
- [x] Dependencies sudah ter-install (`npm install`)

---

## 🚀 Start Testing

### 1. Run Development Server

```bash
npm run dev
```

Buka http://localhost:3000

---

## 📝 Test Flow

### Step 1: Register User Baru

1. Buka http://localhost:3000/register
2. Isi form:
   - Full Name: Test User
   - Username: testuser
   - Email: test@example.com
   - Password: test123456
3. Click "Sign Up"
4. Jika berhasil, akan redirect ke home page

**Verify:**
- Buka Supabase Dashboard → Authentication → Users
- User baru muncul ✅
- Buka Table Editor → profiles
- Profile auto-created ✅

---

### Step 2: Add Test Products via SQL

Karena belum ada UI untuk add product, tambahkan via SQL Editor:

```sql
-- Get your user ID first
SELECT id, username FROM profiles;

-- Insert test products (replace 'your-user-id' with actual ID)
INSERT INTO products (seller_id, title, description, price, category, subcategory, condition, images, status)
VALUES 
(
  'your-user-id-here',
  'Vintage Leather Bag',
  'Beautiful vintage leather bag in excellent condition. Perfect for daily use.',
  355000,
  'woman',
  'bags',
  'like-new',
  ARRAY[
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500&h=500&fit=crop'
  ],
  'active'
),
(
  'your-user-id-here',
  'Denim Jacket',
  'Classic denim jacket in perfect condition. Size M.',
  320000,
  'woman',
  'outerwear',
  'like-new',
  ARRAY[
    'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=500&fit=crop'
  ],
  'active'
),
(
  'your-user-id-here',
  'White Sneakers',
  'Clean white sneakers, barely used. Size 39.',
  380000,
  'woman',
  'footwear',
  'like-new',
  ARRAY[
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop'
  ],
  'active'
);
```

---

### Step 3: Test Home Page

1. Refresh http://localhost:3000
2. Products dari database muncul ✅
3. Click salah satu product
4. Redirect ke product detail ✅

---

### Step 4: Test Product Detail

1. Di product detail page:
   - Product info lengkap muncul ✅
   - Seller info muncul ✅
   - Images muncul ✅
2. Click heart icon (favorite)
   - Jika belum login → redirect ke /login ✅
   - Jika sudah login → heart berubah merah ✅

**Verify Favorite:**
```sql
SELECT * FROM favorites WHERE user_id = 'your-user-id';
```

---

### Step 5: Test Trending Page

1. Click "Trending" di bottom nav
2. Products sorted by likes_count ✅
3. Likes counter muncul ✅

---

### Step 6: Test Authentication

**Logout:**
1. Buka browser console
2. Run: `localStorage.clear()`
3. Refresh page
4. User logged out ✅

**Login:**
1. Buka http://localhost:3000/login
2. Login dengan credentials yang sama
3. Redirect ke home ✅

---

## 🔍 Verify Database

### Check Products
```sql
SELECT 
  p.id,
  p.title,
  p.price,
  p.status,
  p.likes_count,
  pr.username as seller
FROM products p
JOIN profiles pr ON pr.id = p.seller_id
ORDER BY p.created_at DESC;
```

### Check Favorites
```sql
SELECT 
  f.id,
  pr.username,
  p.title as product_title
FROM favorites f
JOIN profiles pr ON pr.id = f.user_id
JOIN products p ON p.id = f.product_id;
```

### Check User Stats
```sql
SELECT 
  pr.username,
  COUNT(DISTINCT p.id) as total_products,
  SUM(p.likes_count) as total_likes
FROM profiles pr
LEFT JOIN products p ON p.seller_id = pr.id
GROUP BY pr.id, pr.username;
```

---

## 🐛 Common Issues & Solutions

### Issue: "Products not showing"
**Solution:**
- Check if products exist: `SELECT * FROM products WHERE status = 'active';`
- Check RLS policies
- Check browser console for errors

### Issue: "Favorite not working"
**Solution:**
- Make sure user is logged in
- Check auth token: `localStorage.getItem('supabase.auth.token')`
- Verify RLS policies for favorites table

### Issue: "Images not loading"
**Solution:**
- Check image URLs are valid
- Check `next.config.js` has `images.unsplash.com` in domains
- Try different image URL

### Issue: "Authentication error"
**Solution:**
- Check `.env.local` credentials
- Restart dev server after changing env
- Clear browser cache and localStorage

---

## ✅ Testing Checklist

### Authentication
- [ ] Register new user
- [ ] Profile auto-created
- [ ] Login works
- [ ] Logout works
- [ ] Protected routes redirect to login

### Products
- [ ] Products display on home page
- [ ] Product detail shows correct data
- [ ] Images load properly
- [ ] Seller info displays
- [ ] Trending page works

### Favorites
- [ ] Can add favorite (logged in)
- [ ] Heart icon updates
- [ ] Likes count increments
- [ ] Can remove favorite
- [ ] Redirect to login (not logged in)

### Database
- [ ] Products table has data
- [ ] Profiles table has users
- [ ] Favorites table records likes
- [ ] RLS policies working
- [ ] Triggers working

---

## 📊 Performance Testing

### Check Query Performance
```sql
EXPLAIN ANALYZE
SELECT * FROM products 
WHERE status = 'active' 
ORDER BY created_at DESC 
LIMIT 20;
```

### Check Index Usage
```sql
SELECT 
  schemaname,
  tablename,
  indexname,
  idx_scan as index_scans
FROM pg_stat_user_indexes
WHERE schemaname = 'public'
ORDER BY idx_scan DESC;
```

---

## 🎯 Next Testing Steps

1. **Test Sell Flow** - Create product via UI (coming soon)
2. **Test Messages** - Send messages between users
3. **Test Orders** - Complete checkout flow
4. **Test Search** - Search products functionality
5. **Test Categories** - Filter by category

---

## 📝 Test Data Examples

### More Test Products
```sql
INSERT INTO products (seller_id, title, description, price, category, subcategory, condition, images, status)
VALUES 
(
  'your-user-id',
  'Floral Maxi Dress',
  'Beautiful floral maxi dress, perfect for summer.',
  280000,
  'woman',
  'dresses',
  'like-new',
  ARRAY['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500'],
  'active'
),
(
  'your-user-id',
  'Wool Sweater',
  'Cozy wool sweater for cold weather.',
  195000,
  'woman',
  'tops',
  'good',
  ARRAY['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500'],
  'active'
);
```

---

**Happy Testing!** 🎉

Jika menemukan bug atau issue, check:
1. Browser console untuk errors
2. Network tab untuk failed requests
3. Supabase logs untuk database errors
