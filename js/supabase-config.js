/*
 * Configuration Supabase — remplace les deux valeurs ci-dessous par celles
 * de ton projet (Supabase > Project Settings > API).
 * La clé "anon" est publique par conception (protégée par les règles RLS),
 * elle peut être exposée sans risque dans le code du site.
 */

const SUPABASE_URL = "https://ayjkiaffcmillaeszlcz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_yYX0u5qAnhCD-JuEnfF9XA_pZuAEyY6";

const supabaseClient =
  SUPABASE_URL.includes("TON-PROJET")
    ? null
    : window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
