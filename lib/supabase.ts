import { createClient } from '@supabase/supabase-js';

// Direct configuration - bypassing environment variables temporarily
const supabaseUrl = 'https://oxmoonmmtgiadkuizjsw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bW9vbm1tdGdpYWRrdWl6anN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4ODgwNDIsImV4cCI6MjA4NzQ2NDA0Mn0.TK_iQzCnv6a1TO2LH-R10mKJ-ShgTrLarf0ppbPWX3s';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials');
}

console.log('✅ Supabase configured:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          full_name: string;
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username: string;
          full_name: string;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string;
          full_name?: string;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: number;
          seller_id: string;
          title: string;
          description: string;
          price: number;
          category: string;
          subcategory: string;
          brand: string | null;
          condition: string;
          size: string | null;
          color: string | null;
          material: string | null;
          images: string[];
          status: 'active' | 'sold' | 'draft';
          likes_count: number;
          views_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          seller_id: string;
          title: string;
          description: string;
          price: number;
          category: string;
          subcategory: string;
          brand?: string | null;
          condition: string;
          size?: string | null;
          color?: string | null;
          material?: string | null;
          images: string[];
          status?: 'active' | 'sold' | 'draft';
          likes_count?: number;
          views_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          seller_id?: string;
          title?: string;
          description?: string;
          price?: number;
          category?: string;
          subcategory?: string;
          brand?: string | null;
          condition?: string;
          size?: string | null;
          color?: string | null;
          material?: string | null;
          images?: string[];
          status?: 'active' | 'sold' | 'draft';
          likes_count?: number;
          views_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          buyer_id: string;
          product_id: number;
          seller_id: string;
          total_amount: number;
          shipping_cost: number;
          shipping_method: string;
          payment_method: string;
          status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
          shipping_address: any;
          payment_proof_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          buyer_id: string;
          product_id: number;
          seller_id: string;
          total_amount: number;
          shipping_cost: number;
          shipping_method: string;
          payment_method: string;
          status?: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
          shipping_address: any;
          payment_proof_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          buyer_id?: string;
          product_id?: number;
          seller_id?: string;
          total_amount?: number;
          shipping_cost?: number;
          shipping_method?: string;
          payment_method?: string;
          status?: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
          shipping_address?: any;
          payment_proof_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          id: number;
          sender_id: string;
          receiver_id: string;
          product_id: number | null;
          message: string;
          is_read: boolean;
          created_at: string;
        };
        Insert: {
          id?: number;
          sender_id: string;
          receiver_id: string;
          product_id?: number | null;
          message: string;
          is_read?: boolean;
          created_at?: string;
        };
        Update: {
          id?: number;
          sender_id?: string;
          receiver_id?: string;
          product_id?: number | null;
          message?: string;
          is_read?: boolean;
          created_at?: string;
        };
      };
      favorites: {
        Row: {
          id: number;
          user_id: string;
          product_id: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          product_id: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          product_id?: number;
          created_at?: string;
        };
      };
      reviews: {
        Row: {
          id: number;
          reviewer_id: string;
          reviewee_id: string;
          order_id: string;
          rating: number;
          comment: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          reviewer_id: string;
          reviewee_id: string;
          order_id: string;
          rating: number;
          comment?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          reviewer_id?: string;
          reviewee_id?: string;
          order_id?: string;
          rating?: number;
          comment?: string | null;
          created_at?: string;
        };
      };
    };
  };
};
