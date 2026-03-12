# ⚡ Quick Setup Instructions

## 🚨 Error: "Invalid supabaseUrl"

Ini terjadi karena environment variables belum dikonfigurasi. Ikuti langkah berikut:

---

## 📝 Step-by-Step Setup

### 1. Create Supabase Project

1. Buka [supabase.com](https://supabase.com)
2. Click **"New Project"**
3. Isi:
   - **Name**: re-wear-ri
   - **Database Password**: (buat password, simpan!)
   - **Region**: Singapore
4. Click **"Create new project"**
5. Tunggu ~2 menit

---

### 2. Get API Credentials

1. Di Supabase Dashboard, klik **Settings** (⚙️ icon di sidebar)
2. Click **API**
3. Copy 2 values ini:

```
Project URL: https://xxxxxxxxxxxxx.supabase.co
anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...
```

---

### 3. Update .env.local

1. Buka file `.env.local` di root project
2. Replace dengan credentials Anda:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...
```

**PENTING:** 
- Ganti `xxxxxxxxxxxxx` dengan project ID Anda
- Ganti `eyJhbGc...` dengan anon key Anda
- Jangan ada spasi atau quotes

---

### 4. Create Database Schema

1. Di Supabase Dashboard, buka **SQL Editor**
2. Click **"New query"**
3. Copy SELURUH isi file `supabase/schema.sql`
4. Paste ke SQL Editor
5. Click **"Run"** atau tekan `Ctrl+Enter`
6. Tunggu sampai muncul success message

---

### 5. Verify Setup

Check di **Table Editor**:
- ✅ profiles
- ✅ products
- ✅ orders
- ✅ messages
- ✅ favorites
- ✅ reviews

---

### 6. Restart Dev Server

```bash
# Stop server (Ctrl+C)
# Start again
npm run dev
```

---

## ✅ Verification

Buka http://localhost:3000

**Jika berhasil:**
- ✅ No error
- ✅ Page loads
- ✅ "No products yet" message muncul

**Jika masih error:**
- Check `.env.local` credentials
- Restart dev server
- Clear browser cache

---

## 🎯 Next Steps

Setelah setup berhasil:

1. **Register User**
   - Buka http://localhost:3000/register
   - Create account

2. **Add Test Products**
   - Buka Supabase SQL Editor
   - Run query dari `TESTING_GUIDE.md`

3. **Test Features**
   - Browse products
   - View product details
   - Add favorites

---

## 🐛 Troubleshooting

### Error: "Invalid supabaseUrl"
**Cause:** `.env.local` belum diisi atau salah format

**Solution:**
1. Check file `.env.local` exists
2. Check URL format: `https://xxxxx.supabase.co`
3. No quotes, no spaces
4. Restart dev server

### Error: "relation does not exist"
**Cause:** Database schema belum di-run

**Solution:**
1. Buka Supabase SQL Editor
2. Run `supabase/schema.sql`
3. Verify tables di Table Editor

### Error: "Failed to fetch"
**Cause:** Network issue atau wrong credentials

**Solution:**
1. Check internet connection
2. Verify Supabase project is active
3. Check credentials di Settings → API

---

## 📞 Need Help?

1. Check `SUPABASE_SETUP.md` untuk detailed guide
2. Check `TESTING_GUIDE.md` untuk testing steps
3. Verify credentials di Supabase Dashboard

---

**Quick Checklist:**
- [ ] Supabase project created
- [ ] API credentials copied
- [ ] `.env.local` updated
- [ ] Database schema executed
- [ ] Tables verified
- [ ] Dev server restarted
- [ ] Page loads without error

---

Good luck! 🚀
