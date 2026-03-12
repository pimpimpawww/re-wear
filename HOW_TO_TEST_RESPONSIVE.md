# Cara Test Responsive Design - RE WEAR

## 🎯 Metode 1: Manual Resize (Termudah)

### Langkah:
1. Buka browser (Chrome/Edge)
2. Buka `http://localhost:3000/onboarding`
3. Klik dan drag tepi kanan browser
4. Tarik ke kiri (mengecilkan) atau ke kanan (membesarkan)
5. Lihat layout berubah otomatis

### Ukuran yang Harus Dicoba:
- **Kecil** (400px) → Mobile view
- **Sedang** (768px) → Tablet view
- **Besar** (1280px+) → Desktop view

---

## 🔧 Metode 2: Chrome DevTools (Paling Akurat)

### Langkah Detail:

#### 1. Buka Website
```
http://localhost:3000/onboarding
```

#### 2. Buka DevTools
**Pilih salah satu:**
- Tekan `F12`
- Tekan `Ctrl + Shift + I`
- Klik kanan → "Inspect"

#### 3. Aktifkan Device Toolbar
**Pilih salah satu:**
- Tekan `Ctrl + Shift + M`
- Klik icon 📱 di pojok kiri atas DevTools

#### 4. Pilih Device
Di dropdown paling atas, pilih:

**📱 Mobile Devices:**
```
iPhone SE          → 375 x 667
iPhone 12 Pro      → 390 x 844
iPhone 14 Pro Max  → 430 x 932
Samsung Galaxy S20 → 360 x 800
```

**📱 Tablet Devices:**
```
iPad Mini          → 768 x 1024
iPad Air           → 820 x 1180
iPad Pro           → 1024 x 1366
```

**💻 Desktop:**
```
Laptop             → 1280 x 720
Desktop            → 1920 x 1080
```

#### 5. Custom Resize
- Pilih "Responsive" di dropdown
- Drag handle di tepi untuk resize
- Atau ketik ukuran manual

---

## 📱 Metode 3: Test di HP/Tablet Asli

### Langkah:

#### 1. Cari IP Address Komputer
Buka Command Prompt (CMD):
```cmd
ipconfig
```

Cari baris "IPv4 Address":
```
IPv4 Address. . . . . . . . . . . : 192.168.1.100
```

#### 2. Pastikan Koneksi
- HP dan komputer harus di WiFi yang SAMA
- Matikan firewall jika perlu

#### 3. Buka di HP
Di browser HP, ketik:
```
http://192.168.1.100:3000/onboarding
```
(Ganti `192.168.1.100` dengan IP komputer kamu)

---

## ✅ Checklist: Apa yang Harus Dicek

### Mobile View (< 640px)
- [ ] Layout vertikal (image atas, text bawah)
- [ ] Text centered
- [ ] Buttons full width
- [ ] Spacing compact
- [ ] Bottom navigation visible
- [ ] No horizontal scroll

### Tablet View (640px - 1024px)
- [ ] Layout mulai melebar
- [ ] Spacing lebih besar
- [ ] Text size lebih besar
- [ ] Grid 2-3 kolom (untuk products)
- [ ] Bottom navigation visible

### Desktop View (> 1024px)
- [ ] Layout horizontal (2 kolom)
- [ ] Image di kiri, form di kanan
- [ ] Container centered (tidak full width)
- [ ] Sidebar navigation visible (kiri)
- [ ] Bottom navigation hidden
- [ ] Grid 4 kolom (untuk products)

---

## 🎨 Breakpoints yang Digunakan

```css
/* Tailwind CSS Breakpoints */

default (< 640px)     → Mobile
sm: 640px             → Small tablet
md: 768px             → Tablet
lg: 1024px            → Desktop
xl: 1280px            → Large desktop
2xl: 1536px           → Extra large
```

---

## 🐛 Troubleshooting

### Problem: Layout tidak berubah saat resize
**Solusi:**
1. Hard refresh: `Ctrl + Shift + R`
2. Clear cache
3. Restart dev server

### Problem: Horizontal scroll muncul
**Solusi:**
1. Check element yang overflow
2. Pastikan max-width sudah set
3. Check padding/margin yang terlalu besar

### Problem: Text terlalu kecil di mobile
**Solusi:**
1. Gunakan `text-sm sm:text-base`
2. Minimum font size: 14px (text-sm)

### Problem: Buttons terlalu kecil untuk touch
**Solusi:**
1. Minimum height: 44px
2. Gunakan `py-3` atau `py-4`

---

## 📸 Screenshot Locations

### DevTools Location:
```
Browser → F12 → Device Toolbar Icon (📱)
```

### Device Dropdown:
```
Top bar → "Responsive" dropdown → Select device
```

### Resize Handle:
```
Drag dari tepi kanan/bawah viewport
```

---

## 🎯 Quick Test Commands

### Test Mobile:
1. `Ctrl + Shift + M` (DevTools)
2. Select "iPhone 12 Pro"
3. Refresh page

### Test Tablet:
1. `Ctrl + Shift + M` (DevTools)
2. Select "iPad Air"
3. Refresh page

### Test Desktop:
1. Close DevTools device mode
2. Maximize browser window
3. Refresh page

---

## 💡 Tips

1. **Always test in order**: Mobile → Tablet → Desktop
2. **Check all pages**: Onboarding, Login, Home
3. **Test interactions**: Click buttons, scroll, navigate
4. **Check images**: Make sure they load and scale properly
5. **Test forms**: Input fields should be easy to tap/click

---

## 🚀 Keyboard Shortcuts

```
F12                  → Open DevTools
Ctrl + Shift + M     → Toggle Device Toolbar
Ctrl + Shift + R     → Hard Refresh
Ctrl + Shift + I     → Open DevTools (alternative)
Ctrl + 0             → Reset zoom
```

---

## 📞 Need Help?

Jika masih bingung:
1. Screenshot layar kamu
2. Tunjukkan ukuran browser (lihat di DevTools)
3. Jelaskan apa yang tidak sesuai

---

**Happy Testing! 🎉**
