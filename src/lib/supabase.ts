
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const checkUserExists = async (email: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('id')
    .eq('email', email)
    .single();
  
  if (error && error.code !== 'PGRST116') {
    throw error;
  }
  
  return !!data;
};

export const createUserProfile = async (userId: string, email: string, name: string, role: string) => {
  const { error } = await supabase
    .from('profiles')
    .insert([
      { 
        id: userId, 
        email, 
        name, 
        role, 
        is_verified: false,
        created_at: new Date().toISOString()
      }
    ]);
  
  if (error) throw error;
};
