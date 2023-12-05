import { createClient } from "@supabase/supabase-js";
import { Database } from "./database";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log(supabaseUrl, supabaseAnonKey);

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabase;