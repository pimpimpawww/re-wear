# 🚀 Deployment Guide - RE WEAR RI

Panduan deploy website RE WEAR RI ke production.

---

## 🎯 Platform Deployment

### 1. Vercel (Recommended) ⭐

**Kenapa Vercel?**
- Dibuat oleh creator Next.js
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Free tier generous

**Cara Deploy:**

#### Via GitHub (Recommended)
1. Push code ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Sign in dengan GitHub
4. Click "New Project"
5. Import repository
6. Click "Deploy"
7. Done! ✅

#### Via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Environment Variables:**
Di Vercel Dashboard → Settings → Environment Variables, tambahkan:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `MIDTRANS_SERVER_KEY`
- dll (lihat `.env.example`)

**Custom Domain:**
1. Vercel Dashboard → Settings → Domains
2. Add domain
3. Update DNS records
4. Wait for verification

---

### 2. Netlify

**Cara Deploy:**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

**Via GitHub:**
1. Push ke GitHub
2. Buka [netlify.com](https://netlify.com)
3. New site from Git
4. Connect repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

---

### 3. Railway

**Cara Deploy:**

1. Buka [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select repository
4. Railway auto-detect Next.js
5. Add environment variables
6. Deploy

**Custom Domain:**
- Settings → Domains → Add Custom Domain

---

### 4. Render

**Cara Deploy:**

1. Buka [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repository
4. Settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
5. Add environment variables
6. Create Web Service

---

### 5. DigitalOcean App Platform

**Cara Deploy:**

1. Buka [DigitalOcean](https://digitalocean.com)
2. Apps → Create App
3. Connect GitHub
4. Select repository
5. Configure:
   - Build Command: `npm run build`
   - Run Command: `npm start`
6. Add environment variables
7. Launch App

---

## 🗄️ Database Setup

### Option 1: Vercel Postgres
```bash
# Install
npm install @vercel/postgres

# Connect di Vercel Dashboard
# Auto-inject DATABASE_URL
```

### Option 2: Supabase (Free)
1. Buka [supabase.com](https://supabase.com)
2. New Project
3. Copy connection string
4. Add ke environment variables

### Option 3: PlanetScale (MySQL)
1. Buka [planetscale.com](https://planetscale.com)
2. New Database
3. Copy connection string
4. Add ke environment variables

### Option 4: MongoDB Atlas (Free)
1. Buka [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create Cluster
3. Get connection string
4. Add ke environment variables

---

## 🔐 Environment Variables

### Production Environment Variables:

```env
# Database
DATABASE_URL="your-production-database-url"

# Auth
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Payment
MIDTRANS_SERVER_KEY="your-production-key"
MIDTRANS_CLIENT_KEY="your-production-client-key"

# Image Upload
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

**Generate Secret:**
```bash
openssl rand -base64 32
```

---

## 📦 Pre-Deployment Checklist

### Code Quality
- [ ] No console.log() in production code
- [ ] Remove unused imports
- [ ] Fix all TypeScript errors
- [ ] Run `npm run lint`
- [ ] Test all features locally

### Performance
- [ ] Optimize images (WebP format)
- [ ] Enable Next.js Image optimization
- [ ] Add loading states
- [ ] Implement lazy loading
- [ ] Minimize bundle size

### Security
- [ ] Environment variables set
- [ ] API keys secured
- [ ] CORS configured
- [ ] Rate limiting implemented
- [ ] Input validation added

### SEO
- [ ] Meta tags added
- [ ] Open Graph tags
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Analytics integrated

### Testing
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Test payment flow
- [ ] Test image uploads
- [ ] Test all user flows

---

## 🔧 Build Configuration

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Add image domains
    formats: ['image/webp'],
  },
  // Enable compression
  compress: true,
  // Production optimizations
  swcMinify: true,
};

module.exports = nextConfig;
```

### package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postbuild": "next-sitemap"
  }
}
```

---

## 🌐 Custom Domain Setup

### 1. Buy Domain
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

### 2. Configure DNS

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

### 3. SSL Certificate
- Auto-generated oleh platform
- Wait 24-48 hours untuk propagation

---

## 📊 Monitoring & Analytics

### Google Analytics
```typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Vercel Analytics
```bash
npm install @vercel/analytics

// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Image Optimization Issues
```javascript
// next.config.js
module.exports = {
  images: {
    unoptimized: true, // Temporary fix
  },
};
```

### Environment Variables Not Working
1. Check variable names (case-sensitive)
2. Restart deployment
3. Clear build cache
4. Verify in platform dashboard

---

## 🚀 Post-Deployment

### 1. Test Production
- [ ] Visit production URL
- [ ] Test all features
- [ ] Check mobile responsiveness
- [ ] Verify payment integration
- [ ] Test image uploads

### 2. Monitor Performance
- [ ] Check Vercel Analytics
- [ ] Monitor error logs
- [ ] Track user behavior
- [ ] Optimize slow pages

### 3. SEO
- [ ] Submit sitemap to Google
- [ ] Verify Google Search Console
- [ ] Check page speed (PageSpeed Insights)
- [ ] Test structured data

### 4. Marketing
- [ ] Share on social media
- [ ] Add to portfolio
- [ ] Get user feedback
- [ ] Iterate and improve

---

## 📈 Scaling

### When to Scale:
- High traffic (>10k users/day)
- Slow response times
- Database bottlenecks
- Image loading issues

### Solutions:
1. **CDN**: Cloudflare, AWS CloudFront
2. **Database**: Read replicas, connection pooling
3. **Caching**: Redis, Vercel Edge Cache
4. **Images**: Cloudinary, ImageKit
5. **API**: Rate limiting, load balancing

---

## 💰 Cost Estimation

### Free Tier (Good for MVP):
- **Vercel**: Free (Hobby plan)
- **Supabase**: Free (500MB database)
- **Cloudinary**: Free (25GB/month)
- **Total**: $0/month

### Paid Tier (Production):
- **Vercel Pro**: $20/month
- **Supabase Pro**: $25/month
- **Cloudinary**: $89/month
- **Domain**: $12/year
- **Total**: ~$135/month

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Environment variables configured
- [ ] Database setup complete
- [ ] Payment gateway configured
- [ ] Image upload working
- [ ] Domain connected
- [ ] SSL certificate active
- [ ] Analytics integrated
- [ ] Error monitoring setup
- [ ] Backup strategy in place
- [ ] Documentation updated
- [ ] Team notified

---

Selamat! Website Anda sudah live! 🎉
