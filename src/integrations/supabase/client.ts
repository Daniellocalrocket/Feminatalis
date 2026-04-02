import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://smehxkouprlqsvyppxkp.supabase.co';
const supabaseKey = 'sb_publishable_g6c7Ou5F1TeR9DJpThU7Eg_GBMrQxhb'; // Use the modern publishable key

export const supabase = createClient(supabaseUrl, supabaseKey);
