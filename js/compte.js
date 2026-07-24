/*
 * Widget de connexion (lien magique ou email + mot de passe), partagé entre
 * index.html et lecon.html. Se contente d'afficher/masquer selon l'état de
 * connexion ; toute la logique d'auth vit dans auth.js.
 */

function construireWidgetCompte(conteneur) {
  conteneur.innerHTML = `
    <div id="compte-deconnecte">
      <button class="btn secondaire" id="btn-ouvrir-compte">Se connecter</button>
      <div class="compte-panel" id="compte-panel" style="display:none">
        <div class="compte-tabs">
          <button class="compte-tab actif" data-mode="magique" type="button">Lien magique</button>
          <button class="compte-tab" data-mode="password" type="button">Mot de passe</button>
        </div>
        <div id="compte-form-magique">
          <input type="email" placeholder="ton@email.com" id="email-magique" autocomplete="email" />
          <button class="btn" id="btn-envoyer-magique">Recevoir le lien</button>
        </div>
        <div id="compte-form-password" style="display:none">
          <input type="email" placeholder="ton@email.com" id="email-password" autocomplete="email" />
          <input type="password" placeholder="mot de passe" id="mdp-password" autocomplete="current-password" />
          <div class="compte-actions-password">
            <button class="btn" id="btn-connexion-password">Se connecter</button>
            <button class="btn secondaire" id="btn-inscription-password">Créer un compte</button>
          </div>
        </div>
        <p class="compte-message" id="compte-message"></p>
      </div>
    </div>
    <div id="compte-connecte" style="display:none">
      <span class="chip" id="compte-email-chip"></span>
      <button class="btn secondaire" id="btn-deconnexion">Se déconnecter</button>
    </div>
  `;

  const panel = conteneur.querySelector("#compte-panel");
  conteneur.querySelector("#btn-ouvrir-compte").addEventListener("click", () => {
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  });

  conteneur.querySelectorAll(".compte-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      conteneur.querySelectorAll(".compte-tab").forEach((t) => t.classList.remove("actif"));
      tab.classList.add("actif");
      const magique = tab.dataset.mode === "magique";
      conteneur.querySelector("#compte-form-magique").style.display = magique ? "block" : "none";
      conteneur.querySelector("#compte-form-password").style.display = magique ? "none" : "block";
    });
  });

  const message = conteneur.querySelector("#compte-message");
  const afficherMessage = (texte) => {
    message.textContent = texte;
  };

  conteneur.querySelector("#btn-envoyer-magique").addEventListener("click", async () => {
    const email = conteneur.querySelector("#email-magique").value.trim();
    if (!email) return afficherMessage("Entre ton email.");
    afficherMessage("Envoi en cours...");
    const { erreur } = await envoyerLienMagique(email);
    afficherMessage(erreur ? `Erreur : ${erreur}` : "Lien envoyé ! Vérifie ta boîte mail.");
  });

  conteneur.querySelector("#btn-connexion-password").addEventListener("click", async () => {
    const email = conteneur.querySelector("#email-password").value.trim();
    const mdp = conteneur.querySelector("#mdp-password").value;
    if (!email || !mdp) return afficherMessage("Entre ton email et ton mot de passe.");
    afficherMessage("Connexion...");
    const { erreur } = await connexionMotDePasse(email, mdp);
    if (erreur) afficherMessage(`Erreur : ${erreur}`);
  });

  conteneur.querySelector("#btn-inscription-password").addEventListener("click", async () => {
    const email = conteneur.querySelector("#email-password").value.trim();
    const mdp = conteneur.querySelector("#mdp-password").value;
    if (!email || !mdp) return afficherMessage("Entre ton email et ton mot de passe.");
    if (mdp.length < 6) return afficherMessage("Le mot de passe doit faire au moins 6 caractères.");
    afficherMessage("Création du compte...");
    const { erreur } = await inscriptionMotDePasse(email, mdp);
    afficherMessage(erreur ? `Erreur : ${erreur}` : "Compte créé ! Vérifie ta boîte mail pour confirmer.");
  });

  conteneur.querySelector("#btn-deconnexion").addEventListener("click", async () => {
    await deconnexion();
    afficherEtatDeconnecte(conteneur);
  });
}

function afficherEtatConnecte(conteneur, utilisateur) {
  conteneur.querySelector("#compte-deconnecte").style.display = "none";
  const zone = conteneur.querySelector("#compte-connecte");
  zone.style.display = "flex";
  conteneur.querySelector("#compte-email-chip").textContent = utilisateur.email;
}

function afficherEtatDeconnecte(conteneur) {
  conteneur.querySelector("#compte-connecte").style.display = "none";
  conteneur.querySelector("#compte-deconnecte").style.display = "block";
}

async function initCompte() {
  const conteneur = document.getElementById("compte-widget");
  if (!conteneur) return;

  if (typeof supabaseConfigure !== "function" || !supabaseConfigure()) {
    conteneur.style.display = "none";
    return;
  }

  construireWidgetCompte(conteneur);

  // onAuthChange se déclenche une première fois tout seul avec la session
  // déjà active au chargement de la page : un seul point d'entrée suffit,
  // pas besoin de vérifier utilisateurActuel() en plus (ça déclenchait une
  // double synchronisation, et sur la page leçon un rechargement en boucle).
  let dernierIdSynchronise = null;

  onAuthChange(async (u) => {
    if (u) {
      afficherEtatConnecte(conteneur, u);
      if (dernierIdSynchronise === u.id) return;
      dernierIdSynchronise = u.id;
      await fusionnerDepuisSupabase(u.id);
      if (typeof rafraichirApresConnexion === "function") rafraichirApresConnexion();
    } else {
      dernierIdSynchronise = null;
      afficherEtatDeconnecte(conteneur);
    }
  });
}

document.addEventListener("DOMContentLoaded", initCompte);
