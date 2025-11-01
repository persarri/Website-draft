import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Announcement = {
  id: string;
  title: string;
  content: string;
  category: string;
  published_date: string;
  is_featured: boolean;
  created_at: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  category: string;
  created_at: string;
};

export type Staff = {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  bio: string;
  display_order: number;
  created_at: string;
};

export type ContactSubmission = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
