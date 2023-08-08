import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vpxawgchofpaqfzfzbgr.supabase.co";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
