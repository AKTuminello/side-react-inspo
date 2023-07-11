import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dyfqoqrqmixqgcwshbvb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZnFvcXJxbWl4cWdjd3NoYnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3NDg2NjcsImV4cCI6MjAwNDMyNDY2N30.jd_yNMMmDJN7EkIuLlH_skiLYuPju1-PZvlB7plltpA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
