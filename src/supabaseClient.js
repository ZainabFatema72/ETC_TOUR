import { createClient } from '@supabase/supabase-js';

// Yeh details aapko Supabase Project Settings > API mein milengi
const supabaseUrl = 'https://efqjubendgogndtbsiqs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmcWp1YmVuZGdvZ25kdGJzaXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMTE0NDgsImV4cCI6MjA4Njg4NzQ0OH0.9aE9t4wTmEaN2b-ueUR6Q8w7x8fdzUcE1ELsHBy03ms';

export const supabase = createClient(supabaseUrl, supabaseKey);