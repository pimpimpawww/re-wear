# 🔌 API Integration Guide

Panduan untuk mengintegrasikan backend API dengan RE WEAR RI.

---

## 📋 API Endpoints yang Dibutuhkan

### Authentication
```
POST   /api/auth/register          # Register user
POST   /api/auth/login             # Login user
POST   /api/auth/logout            # Logout user
GET    /api/auth/me                # Get current user
PUT    /api/auth/profile           # Update profile
```

### Products
```
GET    /api/products               # Get all products
GET    /api/products/:id           # Get product detail
POST   /api/products               # Create product
PUT    /api/products/:id           # Update product
DELETE /api/products/:id           # Delete product
GET    /api/products/trending      # Get trending products
GET    /api/products/search?q=     # Search products
```

### Categories
```
GET    /api/categories             # Get all categories
GET    /api/categories/:id         # Get category with subcategories
GET    /api/categories/:id/products # Get products by category
```

### Cart
```
GET    /api/cart                   # Get user cart
POST   /api/cart                   # Add to cart
PUT    /api/cart/:id               # Update cart item
DELETE /api/cart/:id               # Remove from cart
DELETE /api/cart                   # Clear cart
```

### Orders
```
GET    /api/orders                 # Get user orders
GET    /api/orders/:id             # Get order detail
POST   /api/orders                 # Create order
PUT    /api/orders/:id             # Update order status
POST   /api/orders/:id/payment     # Upload payment proof
```

### Messages
```
GET    /api/messages               # Get conversations
GET    /api/messages/:id           # Get conversation detail
POST   /api/messages               # Send message
PUT    /api/messages/:id/read      # Mark as read
```

### User
```
GET    /api/users/:id              # Get user profile
GET    /api/users/:id/products     # Get user products
GET    /api/users/:id/reviews      # Get user reviews
POST   /api/users/:id/follow       # Follow user
DELETE /api/users/:id/follow       # Unfollow user
```

### Favorites
```
GET    /api/favorites              # Get user favorites
POST   /api/favorites              # Add to favorites
DELETE /api/favorites/:id          # Remove from favorites
```

### Reviews
```
GET    /api/products/:id/reviews   # Get product reviews
POST   /api/products/:id/reviews   # Create review
PUT    /api/reviews/:id            # Update review
DELETE /api/reviews/:id            # Delete review
```

---

## 🔧 Implementation dengan Next.js

### 1. Setup API Client

```typescript
// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function apiClient(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token');
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  
  return response.json();
}
```

### 2. Create API Functions

```typescript
// lib/products.ts
import { apiClient } from './api';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  seller: {
    id: number;
    name: string;
    rating: number;
  };
}

export async function getProducts(): Promise<Product[]> {
  return apiClient('/products');
}

export async function getProduct(id: number): Promise<Product> {
  return apiClient(`/products/${id}`);
}

export async function createProduct(data: Partial<Product>): Promise<Product> {
  return apiClient('/products', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function getTrendingProducts(): Promise<Product[]> {
  return apiClient('/products/trending');
}

export async function searchProducts(query: string): Promise<Product[]> {
  return apiClient(`/products/search?q=${encodeURIComponent(query)}`);
}
```

### 3. Use in Components

```typescript
// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { getProducts, Product } from '@/lib/products';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

---

## 🎣 Using React Query (Recommended)

### 1. Setup

```bash
npm install @tanstack/react-query
```

```typescript
// app/providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

```typescript
// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### 2. Create Hooks

```typescript
// hooks/useProducts.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts, getProduct, createProduct } from '@/lib/products';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => getProduct(id),
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
}
```

### 3. Use in Components

```typescript
// app/page.tsx
'use client';

import { useProducts } from '@/hooks/useProducts';

export default function Home() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

---

## 🔐 Authentication

### 1. Auth Context

```typescript
// contexts/AuthContext.tsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
```

### 2. Protected Routes

```typescript
// components/ProtectedRoute.tsx
'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return <>{children}</>;
}
```

---

## 📤 File Upload

### 1. Upload to Cloudinary

```typescript
// lib/upload.ts
export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  const data = await response.json();
  return data.secure_url;
}
```

### 2. Use in Component

```typescript
// app/sell/page.tsx
'use client';

import { useState } from 'react';
import { uploadImage } from '@/lib/upload';

export default function SellPage() {
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setUploading(true);
    try {
      const uploadPromises = Array.from(files).map(uploadImage);
      const urls = await Promise.all(uploadPromises);
      setImages([...images, ...urls]);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageUpload}
        disabled={uploading}
      />
      {uploading && <p>Uploading...</p>}
    </div>
  );
}
```

---

## 💳 Payment Integration (Midtrans)

### 1. Create Transaction

```typescript
// lib/payment.ts
export async function createPayment(orderId: string, amount: number) {
  const response = await fetch('/api/payment/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId, amount }),
  });

  return response.json();
}
```

### 2. API Route

```typescript
// app/api/payment/create/route.ts
import { NextRequest, NextResponse } from 'next/server';
import midtransClient from 'midtrans-client';

export async function POST(request: NextRequest) {
  const { orderId, amount } = await request.json();

  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY!,
  });

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: amount,
    },
  };

  const transaction = await snap.createTransaction(parameter);
  
  return NextResponse.json({
    token: transaction.token,
    redirect_url: transaction.redirect_url,
  });
}
```

---

## 🔔 Real-time Updates (WebSocket)

### 1. Setup Socket.io Client

```bash
npm install socket.io-client
```

```typescript
// lib/socket.ts
import { io } from 'socket.io-client';

export const socket = io(process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:8000');

socket.on('connect', () => {
  console.log('Connected to WebSocket');
});

socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket');
});
```

### 2. Use in Component

```typescript
// app/inbox/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { socket } from '@/lib/socket';

export default function InboxPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('new_message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('new_message');
    };
  }, []);

  return <div>{/* Render messages */}</div>;
}
```

---

## 📊 Error Handling

```typescript
// lib/api.ts
export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export async function apiClient(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    
    if (!response.ok) {
      const error = await response.json();
      throw new APIError(response.status, error.message);
    }
    
    return response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new Error('Network error');
  }
}
```

---

## ✅ Integration Checklist

- [ ] API client setup
- [ ] Authentication implemented
- [ ] Products CRUD working
- [ ] Cart functionality
- [ ] Order creation
- [ ] Payment integration
- [ ] File upload working
- [ ] Real-time messages
- [ ] Error handling
- [ ] Loading states
- [ ] Success notifications
- [ ] Error notifications

---

Selamat! API sudah terintegrasi! 🎉
