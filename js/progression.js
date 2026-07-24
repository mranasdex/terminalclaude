/*
 * Sauvegarde et lecture de la progression de l'apprenant.
 * Tout est stocké en local (localStorage) : pas de compte, pas de serveur en V1.
 */

const CLE_PROGRESSION = "sentier-claude-progression";
const XP_PAR_LECON = 50;

function chargerProgression() {
  const brut = localStorage.getItem(CLE_PROGRESSION);
  if (!brut) {
    return { leconsTerminees: [], xp: 0, serie: 0, derniereVisite: null };
  }
  try {
    const p = JSON.parse(brut);
    return {
      leconsTerminees: Array.isArray(p.leconsTerminees) ? p.leconsTerminees : [],
      xp: typeof p.xp === "number" ? p.xp : 0,
      serie: typeof p.serie === "number" ? p.serie : 0,
      derniereVisite: p.derniereVisite || null
    };
  } catch (e) {
    return { leconsTerminees: [], xp: 0, serie: 0, derniereVisite: null };
  }
}

function sauvegarderProgression(p) {
  localStorage.setItem(CLE_PROGRESSION, JSON.stringify(p));
}

function dateDuJour() {
  return new Date().toISOString().slice(0, 10);
}

function mettreAJourSerie(p) {
  const aujourdHui = dateDuJour();
  if (p.derniereVisite === aujourdHui) return;
  const hierDate = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  p.serie = p.derniereVisite === hierDate ? p.serie + 1 : 1;
  p.derniereVisite = aujourdHui;
}

function marquerLeconTerminee(id) {
  const p = chargerProgression();
  if (!p.leconsTerminees.includes(id)) {
    p.leconsTerminees.push(id);
    p.xp += XP_PAR_LECON;
  }
  mettreAJourSerie(p);
  sauvegarderProgression(p);
  return p;
}

/* --- Synchronisation Supabase (V2) -------------------------------------
 * localStorage reste la source instantanée (l'app marche hors-ligne/sans
 * compte). Quand un utilisateur est connecté, on fusionne avec la table
 * "progression" de Supabase : union des leçons terminées, XP recalculé,
 * série et date les plus avancées des deux côtés.
 */

function dateLaPlusRecente(a, b) {
  if (!a) return b;
  if (!b) return a;
  return a > b ? a : b;
}

async function synchroniserVersSupabase(userId) {
  if (typeof supabaseConfigure !== "function" || !supabaseConfigure()) return;
  const p = chargerProgression();
  await supabaseClient.from("progression").upsert({
    user_id: userId,
    lecons_terminees: p.leconsTerminees,
    xp: p.xp,
    serie: p.serie,
    derniere_visite: p.derniereVisite,
    updated_at: new Date().toISOString()
  });
}

async function fusionnerDepuisSupabase(userId) {
  const local = chargerProgression();
  if (typeof supabaseConfigure !== "function" || !supabaseConfigure()) return local;

  const { data, error } = await supabaseClient
    .from("progression")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error || !data) {
    await synchroniserVersSupabase(userId);
    return local;
  }

  const leconsFusionnees = Array.from(
    new Set([...local.leconsTerminees, ...(data.lecons_terminees || [])])
  );
  const fusion = {
    leconsTerminees: leconsFusionnees,
    xp: leconsFusionnees.length * XP_PAR_LECON,
    serie: Math.max(local.serie, data.serie || 0),
    derniereVisite: dateLaPlusRecente(local.derniereVisite, data.derniere_visite)
  };

  sauvegarderProgression(fusion);
  await synchroniserVersSupabase(userId);
  return fusion;
}

function etatLecon(lecon, progression) {
  if (!lecon.disponible) return "verrouille";
  if (progression.leconsTerminees.includes(lecon.id)) return "termine";
  const premiereDisponibleNonTerminee = LECONS.find(
    (l) => l.disponible && !progression.leconsTerminees.includes(l.id)
  );
  if (premiereDisponibleNonTerminee && premiereDisponibleNonTerminee.id === lecon.id) {
    return "actuelle";
  }
  return "verrouille";
}
