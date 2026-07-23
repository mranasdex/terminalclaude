/*
 * Moteur d'exercices de la page leçon : QCM, saisie, scénario et combo.
 * Tout le contenu vient de data/lecons.js — ce fichier ne fait qu'afficher
 * et corriger, il ne connaît aucun texte d'exercice en dur.
 */

let LEC = null;
let FILE = [];
let INDEX = 0;

function normaliser(txt) {
  return String(txt).trim().toLowerCase().replace(/\s+/g, " ");
}

function demarrer() {
  const params = new URLSearchParams(location.search);
  const id = Number(params.get("id"));
  LEC = LECONS.find((l) => l.id === id);

  if (!LEC || !LEC.disponible) {
    afficherVerrouille();
    return;
  }

  document.getElementById("titre-court").textContent = LEC.commande || LEC.titre;
  document.getElementById("lecon-cmd").textContent = LEC.commande || "🏆";
  document.getElementById("lecon-titre").textContent = LEC.titre;
  document.getElementById("lecon-intro-txt").textContent = LEC.intro;

  const blocExemple = document.getElementById("bloc-exemple");
  if (LEC.exemple) {
    document.getElementById("exemple-terminal").textContent = LEC.exemple.terminal;
    document.getElementById("exemple-sortie").textContent = LEC.exemple.sortie;
  } else {
    blocExemple.style.display = "none";
  }

  FILE = LEC.exercices.slice();
  if (LEC.combo) FILE.push(Object.assign({ type: "combo" }, LEC.combo));

  construireBarreProgres();
  INDEX = 0;
  afficherExercice();
}

function construireBarreProgres() {
  const track = document.getElementById("progress-track");
  track.innerHTML = "";
  FILE.forEach(() => {
    const seg = document.createElement("div");
    seg.className = "seg";
    track.appendChild(seg);
  });
}

function majBarreProgres() {
  const segs = document.querySelectorAll("#progress-track .seg");
  segs.forEach((s, i) => {
    s.classList.toggle("faite", i < INDEX);
    s.classList.toggle("active", i === INDEX);
  });
}

function numeroScenario(ex) {
  const scenarios = FILE.filter((e) => e.type === "scenario");
  return scenarios.indexOf(ex) + 1;
}

function totalScenarios() {
  return FILE.filter((e) => e.type === "scenario").length;
}

function afficherExercice() {
  majBarreProgres();
  const container = document.getElementById("exo-card");
  const ex = FILE[INDEX];
  if (!ex) {
    afficherFin();
    return;
  }
  if (ex.type === "qcm") renderQCM(ex, container);
  else if (ex.type === "saisie" || ex.type === "scenario") renderSaisie(ex, container);
  else if (ex.type === "combo") renderCombo(ex, container);
}

function exerciceSuivant() {
  INDEX++;
  afficherExercice();
}

function afficherFeedback(container, correct, explication, bonneReponse) {
  const fb = container.querySelector("#feedback");
  fb.className = "feedback show " + (correct ? "ok" : "ko");
  const intro = correct
    ? "✓ Exact."
    : bonneReponse
    ? `✗ Pas tout à fait — la réponse était <strong>${bonneReponse}</strong>.`
    : "✗ Pas tout à fait.";
  fb.innerHTML = `${intro}<span class="explication">${explication}</span>`;
  const btn = container.querySelector("#btn-continuer");
  btn.style.display = "inline-block";
  btn.addEventListener("click", exerciceSuivant, { once: true });
}

function renderQCM(ex, container) {
  container.innerHTML = `
    <p class="exo-kicker">QCM</p>
    <p class="exo-question"></p>
    <div id="options"></div>
    <div class="feedback" id="feedback"></div>
    <div class="action-row"><button class="btn" id="btn-continuer" style="display:none">Continuer</button></div>
  `;
  container.querySelector(".exo-question").textContent = ex.question;

  const optionsEl = container.querySelector("#options");
  ex.options.forEach((opt, i) => {
    const b = document.createElement("button");
    b.className = "qcm-option";
    b.textContent = opt;
    b.addEventListener("click", () => {
      const boutons = optionsEl.querySelectorAll(".qcm-option");
      boutons.forEach((btn) => (btn.disabled = true));
      boutons[ex.reponse].classList.add("correct");
      if (i !== ex.reponse) boutons[i].classList.add("incorrect");
      afficherFeedback(container, i === ex.reponse, ex.explication);
    });
    optionsEl.appendChild(b);
  });
}

function renderSaisie(ex, container) {
  const estScenario = ex.type === "scenario";
  const kicker = estScenario ? `Scénario ${numeroScenario(ex)}/${totalScenarios()}` : "Saisie";
  const question = estScenario ? ex.situation : ex.consigne;

  container.innerHTML = `
    <p class="exo-kicker"></p>
    <p class="exo-question"></p>
    <div class="input-row">
      <input type="text" id="reponse-input" placeholder="tape la commande ici" autocomplete="off" spellcheck="false" />
      <button class="btn" id="btn-valider">Valider</button>
    </div>
    <div class="feedback" id="feedback"></div>
    <div class="action-row"><button class="btn" id="btn-continuer" style="display:none">Continuer</button></div>
  `;
  container.querySelector(".exo-kicker").textContent = kicker;
  container.querySelector(".exo-question").textContent = question;

  const input = container.querySelector("#reponse-input");
  const btnValider = container.querySelector("#btn-valider");

  const valider = () => {
    if (input.disabled) return;
    const correct = normaliser(input.value) === normaliser(ex.reponse);
    input.disabled = true;
    btnValider.disabled = true;
    afficherFeedback(container, correct, ex.explication, ex.reponse);
  };

  btnValider.addEventListener("click", valider);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") valider();
  });
  input.focus();
}

function renderCombo(ex, container) {
  container.innerHTML = `
    <p class="exo-kicker">Défi combo</p>
    <p class="exo-question"></p>
    <div id="combo-steps"></div>
    <div class="action-row"><button class="btn" id="btn-continuer" style="display:none">Continuer</button></div>
  `;
  container.querySelector(".exo-question").textContent = ex.texte;

  const stepsEl = container.querySelector("#combo-steps");
  let etapeCourante = 0;

  function afficherEtape() {
    if (etapeCourante >= ex.etapes.length) {
      const btn = container.querySelector("#btn-continuer");
      btn.style.display = "inline-block";
      btn.addEventListener("click", exerciceSuivant, { once: true });
      return;
    }
    const etape = ex.etapes[etapeCourante];
    const div = document.createElement("div");
    div.className = "combo-step";
    div.innerHTML = `
      <div class="etape-label"></div>
      <div class="input-row">
        <input type="text" autocomplete="off" spellcheck="false" />
        <button class="btn">Valider</button>
      </div>
      <div class="feedback"></div>
    `;
    div.querySelector(".etape-label").textContent = etape.label;
    stepsEl.appendChild(div);

    const input = div.querySelector("input");
    const bouton = div.querySelector("button");
    const fb = div.querySelector(".feedback");

    const valider = () => {
      if (input.disabled) return;
      const correct = normaliser(input.value) === normaliser(etape.reponse);
      input.disabled = true;
      bouton.disabled = true;
      fb.className = "feedback show " + (correct ? "ok" : "ko");
      fb.textContent = correct ? "✓ Exact." : `✗ La réponse était ${etape.reponse}.`;
      div.classList.add("faite");
      etapeCourante++;
      setTimeout(afficherEtape, 350);
    };

    bouton.addEventListener("click", valider);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") valider();
    });
    input.focus();
  }

  afficherEtape();
}

function afficherFin() {
  const p = marquerLeconTerminee(LEC.id);
  document.getElementById("vue-exercice").style.display = "none";
  const fin = document.getElementById("vue-fin");
  fin.style.display = "block";
  fin.innerHTML = `
    <div class="trophee">🏆</div>
    <h2>Leçon terminée</h2>
    <p></p>
    <a class="btn" href="index.html">Retour au sentier</a>
  `;
  fin.querySelector("p").textContent =
    `Tu maîtrises ${LEC.commande || "ce défi"}. +50 XP — série de ${p.serie} jour${p.serie > 1 ? "s" : ""}.`;
}

function afficherVerrouille() {
  document.getElementById("vue-exercice").style.display = "none";
  const el = document.getElementById("vue-verrouille");
  el.style.display = "block";
  el.innerHTML = `<p>Cette leçon n'est pas encore disponible.</p><a class="btn" href="index.html">Retour au sentier</a>`;
}

document.addEventListener("DOMContentLoaded", demarrer);
