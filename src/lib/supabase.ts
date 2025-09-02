import { createClient } from '@supabase/supabase-js';
import { env } from '../utils/env';

const { url: supabaseUrl, anonKey: supabaseAnonKey } = env.supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactMessage = {
  id?: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  status?: string;
  created_at?: string;
};