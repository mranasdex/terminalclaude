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
