/*
 * Authentification Supabase : lien magique ou email + mot de passe.
 * Si supabase-config.js n'est pas encore renseigné, toutes ces fonctions
 * échouent proprement et le site continue de fonctionner en local seul.
 */

function supabaseConfigure() {
  return supabaseClient !== null;
}

async function envoyerLienMagique(email) {
  if (!supabaseConfigure()) return { erreur: "Supabase n'est pas encore configuré." };
  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: window.location.href }
  });
  return { erreur: error ? error.message : null };
}

async function inscriptionMotDePasse(email, motDePasse) {
  if (!supabaseConfigure()) return { erreur: "Supabase n'est pas encore configuré." };
  const { error } = await supabaseClient.auth.signUp({ email, password: motDePasse });
  return { erreur: error ? error.message : null };
}

async function connexionMotDePasse(email, motDePasse) {
  if (!supabaseConfigure()) return { erreur: "Supabase n'est pas encore configuré." };
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password: motDePasse });
  return { erreur: error ? error.message : null };
}

async function deconnexion() {
  if (!supabaseConfigure()) return;
  await supabaseClient.auth.signOut();
}

async function utilisateurActuel() {
  if (!supabaseConfigure()) return null;
  const { data } = await supabaseClient.auth.getUser();
  return data ? data.user : null;
}

function onAuthChange(callback) {
  if (!supabaseConfigure()) return;
  supabaseClient.auth.onAuthStateChange((_evenement, session) => {
    callback(session ? session.user : null);
  });
}
