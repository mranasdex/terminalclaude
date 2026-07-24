/*
 * Moteur de la page d'accueil : dessine le parcours en grille compacte,
 * groupée par catégorie, à partir de data/lecons.js et de la progression
 * sauvegardée en localStorage.
 */

function initialesCommande(lecon) {
  if (lecon.final) return "🏆";
  return lecon.commande.replace(/^\//, "").replace(/^claude /, "").slice(0, 5);
}

function grouperParCategorie(lecons) {
  const groupes = [];
  let courant = null;
  lecons.forEach((lecon) => {
    if (!courant || courant.categorie !== lecon.categorie) {
      courant = { categorie: lecon.categorie, lecons: [] };
      groupes.push(courant);
    }
    courant.lecons.push(lecon);
  });
  return groupes;
}

function dessinerSentier(progression) {
  const conteneur = document.getElementById("path-wrap");
  conteneur.innerHTML = "";

  grouperParCategorie(LECONS).forEach((groupe) => {
    const section = document.createElement("section");
    section.className = "chapitre";

    const titre = document.createElement("h3");
    titre.className = "chapitre-titre";
    titre.textContent = groupe.categorie;
    section.appendChild(titre);

    const grille = document.createElement("div");
    grille.className = "chapitre-grille";

    groupe.lecons.forEach((lecon) => {
      const etat = etatLecon(lecon, progression);
      const noeud = document.createElement(etat === "verrouille" ? "div" : "a");
      if (etat !== "verrouille") noeud.href = `lecon.html?id=${lecon.id}`;
      noeud.className = `node-compact ${etat}${lecon.final ? " final" : ""}`;
      noeud.title = lecon.final ? lecon.titre : lecon.commande;

      const label = lecon.final ? "Défi" : lecon.commande;
      noeud.innerHTML = `
        <div class="bubble-sm">${initialesCommande(lecon)}</div>
        <div class="label-sm">${label}</div>
        ${!lecon.disponible ? '<div class="bientot-sm">bientôt</div>' : ""}
      `;
      grille.appendChild(noeud);
    });

    section.appendChild(grille);
    conteneur.appendChild(section);
  });
}

function afficherStats(progression) {
  const disponibles = LECONS.filter((l) => l.disponible).length;
  document.getElementById("stat-serie").textContent = `${progression.serie} jour${progression.serie > 1 ? "s" : ""}`;
  document.getElementById("stat-progres").textContent = `${progression.leconsTerminees.length}/${disponibles}`;
  document.getElementById("stat-xp").textContent = progression.xp;
}

function rafraichirApresConnexion() {
  const progression = chargerProgression();
  dessinerSentier(progression);
  afficherStats(progression);
}

document.addEventListener("DOMContentLoaded", () => {
  const progression = chargerProgression();
  dessinerSentier(progression);
  afficherStats(progression);
});
