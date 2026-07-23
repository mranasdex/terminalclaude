/*
 * Moteur de la page d'accueil : dessine le sentier (SVG + noeuds) à partir
 * de data/lecons.js et de la progression sauvegardée en localStorage.
 */

const LARGEUR_VIEWBOX = 500;
const PAS_Y = 150;
const MARGE_HAUTE = 80;
const MARGE_BASSE = 140;

// position horizontale (en %) de chaque étape du sentier, dans l'ordre
const COULOIRS = [50, 74, 86, 74, 50, 26, 14, 26, 50, 74, 50];

function positionNoeud(index) {
  const x = (COULOIRS[index % COULOIRS.length] / 100) * LARGEUR_VIEWBOX;
  const y = MARGE_HAUTE + index * PAS_Y;
  return { x, y };
}

function construireCheminSVG(n) {
  const points = [];
  for (let i = 0; i < n; i++) points.push(positionNoeud(i));
  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prec = points[i - 1];
    const cour = points[i];
    const yMilieu = (prec.y + cour.y) / 2;
    d += ` C${prec.x},${yMilieu} ${cour.x},${yMilieu} ${cour.x},${cour.y}`;
  }
  return d;
}

function initialesCommande(lecon) {
  if (lecon.final) return "🏆";
  return lecon.commande.replace("/", "").slice(0, 5);
}

function dessinerSentier(progression) {
  const n = LECONS.length;
  const hauteurTotale = MARGE_HAUTE + (n - 1) * PAS_Y + MARGE_BASSE;
  const wrap = document.getElementById("path-wrap");
  wrap.style.aspectRatio = `${LARGEUR_VIEWBOX} / ${hauteurTotale}`;

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", `0 0 ${LARGEUR_VIEWBOX} ${hauteurTotale}`);
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", construireCheminSVG(n));
  svg.appendChild(path);
  wrap.appendChild(svg);

  LECONS.forEach((lecon, index) => {
    const etat = etatLecon(lecon, progression);
    const { x, y } = positionNoeud(index);

    const noeud = document.createElement(etat === "verrouille" ? "div" : "a");
    if (etat !== "verrouille") noeud.href = `lecon.html?id=${lecon.id}`;
    noeud.className = `node ${etat}${lecon.final ? " final" : ""}${etat !== "verrouille" ? " cliquable" : ""}`;
    noeud.style.left = `${(x / LARGEUR_VIEWBOX) * 100}%`;
    noeud.style.top = `${(y / hauteurTotale) * 100}%`;

    const label = lecon.final ? "Défi final" : lecon.commande;
    noeud.innerHTML = `
      <div class="bubble">${initialesCommande(lecon)}</div>
      <div class="label">${label}</div>
      ${!lecon.disponible ? '<div class="bientot">bientôt</div>' : ""}
    `;
    wrap.appendChild(noeud);
  });
}

function afficherStats(progression) {
  const disponibles = LECONS.filter((l) => l.disponible).length;
  document.getElementById("stat-serie").textContent = `${progression.serie} jour${progression.serie > 1 ? "s" : ""}`;
  document.getElementById("stat-progres").textContent = `${progression.leconsTerminees.length}/${disponibles}`;
  document.getElementById("stat-xp").textContent = progression.xp;
}

document.addEventListener("DOMContentLoaded", () => {
  const progression = chargerProgression();
  dessinerSentier(progression);
  afficherStats(progression);
});
