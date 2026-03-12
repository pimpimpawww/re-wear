# 🔧 Fix Error: "Invalid supabaseUrl"

## ❌ Error yang Anda alami:

```
Error: Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL
```

## ✅ Solusi:

### Step 1: Buka Supabase Dashboard

1. Go to [supabase.com](https://supabase.com)
2. Login / Sign up
3. Click **"New Project"**
4. Isi form:
   - Name: `re-wear-ri`
   - Database Password: (buat & simpan!)
   - Region: Singapore
5. Click **"Create new project"**
6. Tunggu 2-3 menit

### Step 2: Copy API Credentials

1. Di dashboard, click **Settings** (⚙️ icon)
2. Click **API**
3. Copy 2 values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public**: `eyJhbGc...` (long string)

### Step 3: Update .env.local

1. Buka file `.env.local` di root project
2. Replace dengan credentials Anda:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6...
```

**PENTING:**
- Ganti `xxxxxxxxxxxxx` dengan project ID Anda
- Ganti `eyJhbGc...` dengan full anon key Anda
- Jangan ada spasi
- Jangan ada quotes

### Step 4: Run Database Schema

1. Di Supabase Dashboard, buka **SQL Editor**
2. Click **"New query"**
3. Buka file `supabase/schema.sql` di project
4. Copy SEMUA isinya
5. Paste ke SQL Editor
6. Click **"Run"**
7. Tunggu success message

### Step 5: Verify

Check di **Table Editor**:
- ✅ profiles
- ✅ products
- ✅ orders
- ✅ messages
- ✅ favorites
- ✅ reviews

### Step 6: Restart Dev Server

```bash
# Stop server (Ctrl+C di terminal)

# Start again
npm run dev
```

### Step 7: Test

Buka http://localhost:3000

**Jika berhasil:**
- ✅ Page loads
- ✅ No error
- ✅ "No products yet" message

---

## 🧪 Quick Test

```bash
# Check setup
npm run check-setup
```

Jika output:
```
✅ Supabase URL configured
✅ Supabase anon key configured
🎉 Setup looks good!
```

Maka setup sudah benar!

---

## 🐛 Still Error?

### Check 1: .env.local format

File harus seperti ini (NO quotes, NO spaces):

```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Check 2: Restart server

```bash
# Kill all node processes
# Windows:
taskkill /F /IM node.exe

# Then start again
npm run dev
```

### Check 3: Clear cache

```bash
# Delete .next folder
rm -rf .next

# Reinstall
npm install

# Run again
npm run dev
```

---

## 📞 Need More Help?

See detailed guides:
- `SETUP_INSTRUCTIONS.md` - Complete setup guide
- `SUPABASE_SETUP.md` - Supabase detailed guide
- `TESTING_GUIDE.md` - Testing steps

---

**Quick Checklist:**
- [ ] Supabase project created
- [ ] API credentials copied correctly
- [ ] `.env.local` updated (no quotes, no spaces)
- [ ] Database schema executed
- [ ] Tables exist in Table Editor
- [ ] Dev server restarted
- [ ] Page loads without error

---

Good luck! 🚀
