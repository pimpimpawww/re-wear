import { supabase } from '../supabase';
import { dummyProducts, trendingProducts } from '../dummyData';

// Temporary: Use dummy data instead of Supabase
const USE_DUMMY_DATA = true;

export interface Product {
  id: number;
  seller_id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  brand?: string;
  condition: string;
  size?: string;
  color?: string;
  material?: string;
  images: string[];
  status: 'active' | 'sold' | 'draft';
  likes_count: number;
  views_count: number;
  created_at: string;
  updated_at: string;
  seller?: {
    id: string;
    username: string;
    full_name: string;
    avatar_url?: string;
  };
}

// Get all active products
export async function getProducts() {
  if (USE_DUMMY_DATA) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return dummyProducts as Product[];
  }
  
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      seller:profiles(id, username, full_name, avatar_url)
    `)
    .eq('status', 'active')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Product[];
}

// Get trending products (most likes)
export async function getTrendingProducts() {
  if (USE_DUMMY_DATA) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return trendingProducts as Product[];
  }
  
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      seller:profiles(id, username, full_name, avatar_url)
    `)
    .eq('status', 'active')
    .order('likes_count', { ascending: false })
    .limit(20);

  if (error) throw error;
  return data as Product[];
}

// Get product by ID
export async function getProduct(id: number) {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      seller:profiles(id, username, full_name, avatar_url)
    `)
    .eq('id', id)
    .single();

  if (error) throw error;

  // Increment view count
  await supabase
    .from('products')
    .update({ views_count: (data.views_count || 0) + 1 })
    .eq('id', id);

  return data as Product;
}

// Get products by category
export async function getProductsByCategory(category: string, subcategory?: string) {
  let query = supabase
    .from('products')
    .select(`
      *,
      seller:profiles(id, username, full_name, avatar_url)
    `)
    .eq('status', 'active')
    .eq('category', category);

  if (subcategory) {
    query = query.eq('subcategory', subcategory);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) throw error;
  return data as Product[];
}

// Search products
export async function searchProducts(query: string) {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      seller:profiles(id, username, full_name, avatar_url)
    `)
    .eq('status', 'active')
    .or(`title.ilike.%${query}%,description.ilike.%${query}%,brand.ilike.%${query}%`)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Product[];
}

// Create product
export async function createProduct(product: Omit<Product, 'id' | 'created_at' | 'updated_at' | 'likes_count' | 'views_count' | 'seller'>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('products')
    .insert({
      ...product,
      seller_id: user.id,
    })
    .select()
    .single();

  if (error) throw error;
  return data as Product;
}

// Update product
export async function updateProduct(id: number, updates: Partial<Product>) {
  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Product;
}

// Delete product
export async function deleteProduct(id: number) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Get user's products
export async function getUserProducts(userId: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('seller_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Product[];
}

// Toggle favorite
export async function toggleFavorite(productId: number) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  // Check if already favorited
  const { data: existing } = await supabase
    .from('favorites')
    .select('id')
    .eq('user_id', user.id)
    .eq('product_id', productId)
    .single();

  if (existing) {
    // Remove favorite
    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('id', existing.id);

    if (error) throw error;

    // Decrement likes count
    await supabase.rpc('decrement_likes', { product_id: productId });
    
    return false;
  } else {
    // Add favorite
    const { error } = await supabase
      .from('favorites')
      .insert({ user_id: user.id, product_id: productId });

    if (error) throw error;

    // Increment likes count
    await supabase.rpc('increment_likes', { product_id: productId });
    
    return true;
  }
}

// Check if product is favorited
export async function isFavorited(productId: number) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const { data } = await supabase
    .from('favorites')
    .select('id')
    .eq('user_id', user.id)
    .eq('product_id', productId)
    .single();

  return !!data;
}
