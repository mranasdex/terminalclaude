/*
 * Contenu pédagogique du Sentier Claude.
 * Chaque leçon = { id, commande, titre, intro, exemple, exercices, disponible, final }
 * Les leçons avec disponible:false n'ont pas encore d'exercices écrits (verrouillées dans le sentier).
 */

const LECONS = [
  {
    id: 1,
    categorie: "Essentiels",
    commande: "/help",
    titre: "Découvrir les commandes",
    intro: "/help affiche la liste de toutes les commandes disponibles, avec une courte description de chacune. C'est la commande à taper dès que tu ne sais plus quoi faire.",
    exemple: {
      terminal: "/help",
      sortie: "Commandes disponibles :\n/clear, /compact, /model, /resume, /help, /config ...\n(tape / pour l'autocomplétion)"
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu ouvres Claude Code pour la toute première fois et tu ne sais pas quelles commandes existent. Que tapes-tu ?",
        options: ["/help", "/init", "/model", "/exit"],
        reponse: 0,
        explication: "/help est justement faite pour lister toutes les commandes disponibles, c'est le point de départ."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui affiche la liste de toutes les commandes disponibles.",
        reponse: "/help",
        explication: "/help — sans argument, elle affiche tout ce qui est disponible."
      },
      {
        type: "scenario",
        situation: "Un collègue mentionne une commande « /rewind » que tu ne connais pas. Que tapes-tu pour voir toutes les commandes existantes ?",
        reponse: "/help",
        explication: "Face à une commande inconnue, /help te montre la liste complète et te permet de la retrouver."
      },
      {
        type: "scenario",
        situation: "Tu viens d'installer Claude Code sur un nouvel ordinateur et tu veux voir ce qu'il est possible de faire avant de commencer.",
        reponse: "/help",
        explication: "C'est le réflexe de découverte à avoir sur toute nouvelle installation."
      },
      {
        type: "scenario",
        situation: "Tu es bloqué : tu ne te souviens plus du nom exact de la commande pour changer de modèle. Quel est ton premier réflexe ?",
        reponse: "/help",
        explication: "Plutôt que de deviner, /help te remet la liste complète sous les yeux."
      },
      {
        type: "scenario",
        situation: "Tu formes un collègue à Claude Code. Quelle commande lui conseilles-tu de taper en tout premier ?",
        reponse: "/help",
        explication: "C'est la meilleure porte d'entrée pour un nouvel utilisateur."
      },
      {
        type: "scenario",
        situation: "Tu as lu un article qui parle de « 20 commandes utiles », mais tu ne sais plus où les retrouver directement dans l'outil.",
        reponse: "/help",
        explication: "Plutôt que de rechercher en ligne, la liste est toujours disponible directement dans l'outil."
      }
    ]
  },
  {
    id: 2,
    categorie: "Essentiels",
    commande: "/clear",
    titre: "Repartir sur une conversation neuve",
    intro: "/clear démarre une nouvelle conversation tout en gardant la mémoire du projet (fichiers CLAUDE.md, etc.). Utile quand le sujet en cours n'a plus rien à voir avec ta prochaine question.",
    exemple: {
      terminal: "/clear",
      sortie: "Nouvelle conversation démarrée.\n(la configuration du projet est conservée)"
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu viens de terminer une tâche sans rapport avec la suivante, et tu veux repartir sur une conversation neuve sans perdre la config du projet. Que tapes-tu ?",
        options: ["/clear", "/exit", "/compact", "/resume"],
        reponse: 0,
        explication: "/clear vide la conversation en cours mais garde la mémoire du projet, contrairement à /exit qui ferme tout."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui démarre une nouvelle conversation sans fermer Claude Code.",
        reponse: "/clear",
        explication: "/clear — la session continue, mais l'historique de conversation repart de zéro."
      },
      {
        type: "scenario",
        situation: "Tu viens de finir de corriger un bug, et la prochaine tâche n'a strictement rien à voir. Que fais-tu avant de continuer ?",
        reponse: "/clear",
        explication: "Un sujet totalement différent mérite une conversation neuve pour rester clair."
      },
      {
        type: "scenario",
        situation: "La conversation devient longue et confuse, avec plusieurs sujets mélangés. Tu veux repartir sur des bases propres.",
        reponse: "/clear",
        explication: "Plutôt que de laisser le fouillis s'accumuler, /clear permet de repartir net."
      },
      {
        type: "scenario",
        situation: "Tu changes complètement de projet, dans le même dossier de travail.",
        reponse: "/clear",
        explication: "Même dossier, nouveau sujet : /clear évite de mélanger les deux."
      },
      {
        type: "scenario",
        situation: "Un ami te demande comment « remettre à zéro » une conversation sans fermer le terminal.",
        reponse: "/clear",
        explication: "C'est exactement ce que fait /clear : reset de la conversation, sans rien fermer."
      },
      {
        type: "scenario",
        situation: "Tu termines une session de brainstorming et tu veux passer à de l'écriture de code, un sujet totalement différent.",
        reponse: "/clear",
        explication: "Changement de nature de tâche = bon moment pour /clear."
      }
    ]
  },
  {
    id: 3,
    categorie: "Essentiels",
    commande: "/resume",
    titre: "Retrouver une conversation passée",
    intro: "/resume permet de retrouver une conversation précédente, avec tout son historique, plutôt que de repartir de zéro.",
    exemple: {
      terminal: "/resume",
      sortie: "Sélectionnez une conversation :\n> Correction bug auth (hier, 14:32)\n  Refonte page pricing (vendredi)\n  Script d'import CSV (lundi dernier)"
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu as fermé ton terminal hier en pleine tâche. Aujourd'hui, tu veux reprendre exactement où tu en étais. Que tapes-tu ?",
        options: ["/resume", "/clear", "/help", "/init"],
        reponse: 0,
        explication: "/resume rouvre une conversation précédente avec tout son historique."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui permet de retrouver une conversation précédente.",
        reponse: "/resume",
        explication: "/resume — un sélecteur s'affiche pour choisir quelle conversation reprendre."
      },
      {
        type: "scenario",
        situation: "Tu as fermé ton ordinateur hier soir en pleine tâche, et tu veux reprendre exactement là où tu en étais.",
        reponse: "/resume",
        explication: "C'est l'usage le plus courant de /resume : reprendre le fil d'hier."
      },
      {
        type: "scenario",
        situation: "Tu travailles sur plusieurs projets en parallèle et tu veux retrouver la conversation liée à un sujet précis d'il y a deux jours.",
        reponse: "/resume",
        explication: "Le sélecteur de /resume liste toutes les conversations passées, pas seulement la dernière."
      },
      {
        type: "scenario",
        situation: "Tu viens de taper /clear par erreur et tu regrettes : tu veux revenir à la conversation précédente.",
        reponse: "/resume",
        explication: "Rien n'est perdu : /resume permet de retrouver la conversation d'avant le /clear."
      },
      {
        type: "scenario",
        situation: "Un collègue te demande comment retrouver une ancienne session de travail avec Claude Code.",
        reponse: "/resume",
        explication: "C'est la réponse à lui donner : /resume, puis choisir dans la liste."
      },
      {
        type: "scenario",
        situation: "Tu reprends le travail le lundi matin après une conversation commencée le vendredi précédent.",
        reponse: "/resume",
        explication: "Même après le week-end, l'historique reste disponible via /resume."
      }
    ],
    combo: {
      texte: "Lundi matin : tu veux d'abord vérifier quelles commandes existent (petit trou de mémoire), puis reprendre la conversation de vendredi, et enfin, une fois cette tâche terminée, repartir sur une conversation neuve pour un sujet totalement différent. Dans quel ordre tapes-tu ces commandes ?",
      etapes: [
        { label: "Étape 1 — vérifier les commandes disponibles", reponse: "/help" },
        { label: "Étape 2 — reprendre la conversation de vendredi", reponse: "/resume" },
        { label: "Étape 3 — repartir sur un sujet neuf", reponse: "/clear" }
      ]
    }
  },
  {
    id: 4,
    categorie: "Essentiels",
    commande: "/model",
    titre: "Choisir son modèle",
    intro: "/model change le modèle utilisé pour la session en cours. Utile pour équilibrer vitesse, qualité et coût selon la tâche à faire.",
    exemple: {
      terminal: "/model opus",
      sortie: "Modèle changé pour Opus (raisonnement approfondi)."
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu dois résoudre un bug complexe qui demande beaucoup de réflexion. Quelle commande tapes-tu pour changer de modèle ?",
        options: ["/model", "/config", "/compact", "/permissions"],
        reponse: 0,
        explication: "/model permet de choisir un modèle plus puissant pour les tâches complexes."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui permet de changer le modèle utilisé pendant la session.",
        reponse: "/model",
        explication: "/model — sans argument, elle ouvre un sélecteur de modèles."
      },
      {
        type: "scenario",
        situation: "Ta prochaine réponse doit être générée le plus vite possible, la qualité importe peu ici. Quelle commande tapes-tu ?",
        reponse: "/model haiku",
        explication: "Haiku est le modèle le plus rapide, idéal pour les tâches simples et répétitives."
      },
      {
        type: "scenario",
        situation: "Tu dois résoudre un bug très complexe qui demande un raisonnement approfondi.",
        reponse: "/model opus",
        explication: "Opus est le plus puissant, réservé aux tâches qui demandent un vrai raisonnement."
      },
      {
        type: "scenario",
        situation: "Tu veux un bon compromis entre vitesse et qualité pour ton usage quotidien.",
        reponse: "/model sonnet",
        explication: "Sonnet est le choix équilibré pour un usage courant."
      },
      {
        type: "scenario",
        situation: "Tu viens de terminer une tâche complexe avec un modèle puissant, et la suite est bien plus simple : tu veux repasser sur un modèle plus rapide.",
        reponse: "/model haiku",
        explication: "Inutile de garder un modèle lourd pour une tâche simple : /model haiku accélère les réponses."
      },
      {
        type: "scenario",
        situation: "Un collègue veut choisir lui-même quel modèle utiliser, sans savoir lequel précisément. Que lui conseilles-tu de taper pour voir les choix possibles ?",
        reponse: "/model",
        explication: "Sans argument, /model affiche la liste des modèles disponibles à choisir."
      }
    ]
  },
  {
    id: 5,
    categorie: "Essentiels",
    commande: "/diff",
    titre: "Vérifier ses changements",
    intro: "/diff ouvre un visualiseur interactif des fichiers modifiés, pour relire son travail avant de continuer.",
    exemple: {
      terminal: "/diff",
      sortie: "3 fichiers modifiés :\nsrc/auth.js, src/utils.js, README.md"
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu viens de terminer une série de modifications et tu veux les relire avant de passer à la suite. Que tapes-tu ?",
        options: ["/diff", "/init", "/resume", "/permissions"],
        reponse: 0,
        explication: "/diff affiche tous les fichiers modifiés, pour une relecture rapide."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui ouvre un visualiseur des fichiers modifiés.",
        reponse: "/diff",
        explication: "/diff — un visualiseur interactif liste chaque fichier changé."
      },
      {
        type: "scenario",
        situation: "Tu viens de terminer une tâche et tu veux vérifier que rien d'inattendu n'a été modifié avant de continuer.",
        reponse: "/diff",
        explication: "Toujours une bonne idée de relire ses changements avant d'avancer."
      },
      {
        type: "scenario",
        situation: "Un collègue te demande de vérifier rapidement quels fichiers ont été touchés durant la session.",
        reponse: "/diff",
        explication: "/diff donne cette réponse en un coup d'œil."
      },
      {
        type: "scenario",
        situation: "Tu veux relire les changements avant de les valider avec un outil de gestion de version.",
        reponse: "/diff",
        explication: "Relire avant de valider évite les mauvaises surprises."
      },
      {
        type: "scenario",
        situation: "Tu soupçonnes qu'un fichier a été modifié par erreur, et tu veux vérifier lequel.",
        reponse: "/diff",
        explication: "/diff permet de repérer immédiatement un changement inattendu."
      },
      {
        type: "scenario",
        situation: "Avant de fermer ton ordinateur pour la journée, tu fais un dernier tour de vérification de ton travail.",
        reponse: "/diff",
        explication: "Un bon réflexe de fin de journée pour repartir l'esprit tranquille."
      }
    ]
  },
  {
    id: 6,
    categorie: "Essentiels",
    commande: "/init",
    titre: "Démarrer un projet",
    intro: "/init crée un fichier CLAUDE.md qui documente ton projet, pour que Claude Code le comprenne mieux dès la prochaine conversation.",
    exemple: {
      terminal: "/init",
      sortie: "Fichier CLAUDE.md créé à la racine du projet."
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu ouvres un projet totalement vide pour la première fois. Que tapes-tu en premier réflexe pour que Claude comprenne mieux ton projet à l'avenir ?",
        options: ["/init", "/diff", "/model", "/clear"],
        reponse: 0,
        explication: "/init crée le fichier de documentation du projet, la base pour toute la suite."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui crée un fichier de documentation du projet (CLAUDE.md).",
        reponse: "/init",
        explication: "/init — génère un CLAUDE.md à la racine, à compléter avec les infos utiles du projet."
      },
      {
        type: "scenario",
        situation: "Tu viens de créer un nouveau dossier de projet vide. Que tapes-tu avant de commencer à coder ?",
        reponse: "/init",
        explication: "Poser la documentation avant de commencer évite d'y revenir plus tard."
      },
      {
        type: "scenario",
        situation: "Un collègue rejoint le projet et se plaint que Claude Code « ne connaît pas » les conventions utilisées.",
        reponse: "/init",
        explication: "Sans CLAUDE.md, Claude n'a aucune mémoire des conventions du projet — /init corrige ça."
      },
      {
        type: "scenario",
        situation: "Tu ouvres un vieux projet qui n'a jamais eu de fichier CLAUDE.md.",
        reponse: "/init",
        explication: "Il n'est jamais trop tard pour documenter un projet existant."
      },
      {
        type: "scenario",
        situation: "Tu veux que Claude se souvienne des commandes de build et de test du projet à chaque nouvelle session.",
        reponse: "/init",
        explication: "C'est exactement le rôle du fichier CLAUDE.md généré par /init."
      },
      {
        type: "scenario",
        situation: "Tu démarres un nouveau projet et veux poser les bases avant la toute première vraie tâche.",
        reponse: "/init",
        explication: "Un bon point de départ systématique pour tout nouveau projet."
      }
    ],
    combo: {
      texte: "Tu commences un nouveau projet vide ce matin. Tu veux d'abord documenter le projet, ensuite choisir un modèle plus puissant car la tâche s'annonce complexe, et enfin, une fois le gros du travail terminé, relire les fichiers modifiés avant de partir déjeuner. Dans quel ordre tapes-tu ces commandes ?",
      etapes: [
        { label: "Étape 1 — documenter le projet", reponse: "/init" },
        { label: "Étape 2 — choisir un modèle plus puissant", reponse: "/model opus" },
        { label: "Étape 3 — relire les fichiers modifiés", reponse: "/diff" }
      ]
    }
  },
  {
    id: 7,
    categorie: "Essentiels",
    commande: "/config",
    titre: "Configurer la session",
    intro: "/config ouvre les réglages de Claude Code, ou permet de définir directement une option sous la forme clé=valeur.",
    exemple: {
      terminal: "/config theme=dark",
      sortie: "Thème changé pour sombre."
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu veux passer l'interface en thème sombre directement, sans ouvrir de menu. Que tapes-tu ?",
        options: ["/config theme=dark", "/model dark", "/init dark", "/permissions dark"],
        reponse: 0,
        explication: "/config accepte directement une paire clé=valeur pour changer un réglage en une seule commande."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui ouvre les réglages généraux de Claude Code.",
        reponse: "/config",
        explication: "/config — sans argument, elle ouvre l'ensemble des réglages disponibles."
      },
      {
        type: "scenario",
        situation: "Tu veux voir tous les réglages disponibles, sans en changer un précis pour l'instant.",
        reponse: "/config",
        explication: "Sans argument, /config affiche le panneau complet des réglages."
      },
      {
        type: "scenario",
        situation: "Tu veux passer directement l'interface en thème sombre, en une seule commande.",
        reponse: "/config theme=dark",
        explication: "La forme clé=valeur évite de naviguer dans un menu."
      },
      {
        type: "scenario",
        situation: "Un collègue te demande comment changer un réglage rapidement, sans ouvrir de menu.",
        reponse: "/config",
        explication: "C'est la commande à lui indiquer — avec un argument clé=valeur s'il connaît déjà le réglage visé."
      },
      {
        type: "scenario",
        situation: "Tu veux vérifier quelle configuration est actuellement active avant de faire une modification.",
        reponse: "/config",
        explication: "Toujours utile de vérifier l'état actuel avant de changer quoi que ce soit."
      },
      {
        type: "scenario",
        situation: "Tu veux remettre le thème en clair après l'avoir mis en sombre.",
        reponse: "/config theme=light",
        explication: "Même logique que theme=dark, avec la valeur inverse."
      }
    ]
  },
  {
    id: 8,
    categorie: "Essentiels",
    commande: "/compact",
    titre: "Gérer le contexte",
    intro: "/compact résume l'historique de la conversation pour libérer des tokens de contexte, sans perdre le fil de ce qui a été fait.",
    exemple: {
      terminal: "/compact",
      sortie: "Conversation résumée.\nTokens libérés : ~40%."
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Ta conversation devient très longue et les réponses ralentissent, mais tu ne veux pas perdre le contexte du projet. Que tapes-tu ?",
        options: ["/compact", "/clear", "/resume", "/help"],
        reponse: 0,
        explication: "/compact résume l'historique pour libérer de la place, contrairement à /clear qui repart de zéro."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui résume l'historique pour libérer des tokens de contexte.",
        reponse: "/compact",
        explication: "/compact — condense la conversation sans en perdre le fil."
      },
      {
        type: "scenario",
        situation: "La conversation est très longue et les réponses ralentissent, mais le sujet reste exactement le même.",
        reponse: "/compact",
        explication: "Même sujet, juste besoin de place : /compact est fait pour ça."
      },
      {
        type: "scenario",
        situation: "Tu veux garder le fil de ce qui a été fait, mais libérer de la place pour continuer longtemps sur le même sujet.",
        reponse: "/compact",
        explication: "C'est l'usage typique de /compact : alléger sans perdre la mémoire."
      },
      {
        type: "scenario",
        situation: "Un message indique que le contexte est presque plein, en pleine tâche importante que tu ne veux pas interrompre.",
        reponse: "/compact",
        explication: "/compact permet de continuer sans tout recommencer."
      },
      {
        type: "scenario",
        situation: "Tu ne veux surtout pas perdre l'historique, juste le rendre plus léger.",
        reponse: "/compact",
        explication: "Contrairement à /clear, /compact conserve un résumé au lieu de tout effacer."
      },
      {
        type: "scenario",
        situation: "Tu enchaînes de nombreuses étapes sur une même grosse fonctionnalité depuis plusieurs heures.",
        reponse: "/compact",
        explication: "Les longues sessions sur un même sujet sont le cas d'usage principal de /compact."
      }
    ]
  },
  {
    id: 9,
    categorie: "Essentiels",
    commande: "/permissions",
    titre: "Contrôler les accès",
    intro: "/permissions configure les règles d'autorisation : quels outils et actions Claude peut exécuter automatiquement, et lesquels nécessitent ta confirmation.",
    exemple: {
      terminal: "/permissions",
      sortie: "Règles actuelles :\n- Lecture de fichiers : autorisée\n- Commandes git push : confirmation requise"
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu veux que Claude te demande confirmation avant chaque commande qui modifie des fichiers sensibles. Que tapes-tu pour configurer ça ?",
        options: ["/permissions", "/config", "/model", "/init"],
        reponse: 0,
        explication: "/permissions gère précisément ce type de règles d'autorisation."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui configure les règles d'autorisation d'outils et de fichiers.",
        reponse: "/permissions",
        explication: "/permissions — affiche et permet d'ajuster les règles d'accès."
      },
      {
        type: "scenario",
        situation: "Tu veux vérifier quelles actions Claude peut faire sans te demander confirmation.",
        reponse: "/permissions",
        explication: "/permissions liste précisément ce qui est autorisé automatiquement."
      },
      {
        type: "scenario",
        situation: "Un collègue s'inquiète que Claude puisse supprimer des fichiers sans demander. Tu veux vérifier la règle en place.",
        reponse: "/permissions",
        explication: "C'est la commande de référence pour toute question de sécurité/accès."
      },
      {
        type: "scenario",
        situation: "Tu commences à travailler sur un dossier sensible et veux restreindre les actions automatiques avant de continuer.",
        reponse: "/permissions",
        explication: "Ajuster les règles avant de commencer une tâche sensible est un bon réflexe."
      },
      {
        type: "scenario",
        situation: "Avant de lancer une tâche automatisée plus risquée qu'à l'habitude, tu veux revoir la liste des règles d'autorisation actuelles.",
        reponse: "/permissions",
        explication: "Vérifier avant d'agir, surtout quand le risque est plus élevé que d'habitude."
      },
      {
        type: "scenario",
        situation: "Un audit de sécurité te demande de vérifier la configuration des permissions de l'outil que tu utilises.",
        reponse: "/permissions",
        explication: "C'est directement la commande qui répond à cette demande."
      }
    ],
    combo: {
      texte: "Tu commences une mission délicate sur un vieux projet : tu veux d'abord vérifier les règles d'autorisation avant de toucher quoi que ce soit, ensuite documenter le projet puisqu'il n'a jamais eu de CLAUDE.md, et enfin choisir un modèle puissant car la tâche s'annonce complexe. Dans quel ordre tapes-tu ces commandes ?",
      etapes: [
        { label: "Étape 1 — vérifier les règles d'autorisation", reponse: "/permissions" },
        { label: "Étape 2 — documenter le projet", reponse: "/init" },
        { label: "Étape 3 — choisir un modèle puissant", reponse: "/model opus" }
      ]
    }
  },
  {
    id: 10,
    categorie: "Essentiels",
    commande: "/code-review",
    titre: "Revoir son code",
    intro: "/code-review analyse le code modifié (ou une pull request GitHub) pour trouver des bugs et des pistes d'amélioration. Le résultat dépend de ce que tu ajoutes après la commande : un niveau de profondeur, un numéro de pull request, ou l'option --fix. Regarde le tableau ci-dessous avant de répondre aux exercices — chaque option y est expliquée.",
    exemple: {
      terminal: "/code-review high",
      sortie: "Revue de code (niveau: high)\n1. [correctness] src/auth.js:42 — token non vérifié avant usage\n2. [simplification] src/utils.js:10 — fonction dupliquée avec helpers.js\nAucune autre anomalie détectée."
    },
    optionsDetail: [
      { option: "(aucun argument)", effet: "Lance une revue de niveau standard (medium) sur les changements en cours" },
      { option: "low", effet: "Analyse rapide et légère — pour une vérification de routine, sans grand enjeu" },
      { option: "medium", effet: "Niveau par défaut, bon compromis pour un usage quotidien" },
      { option: "high", effet: "Analyse plus approfondie — avant de livrer une fonctionnalité importante" },
      { option: "xhigh / max", effet: "Analyse très poussée et plus lente — réservée au code sensible ou critique" },
      { option: "ultra", effet: "Revue multi-agents dans le cloud — pour une branche entière avant de la fusionner" },
      { option: "--fix", effet: "Applique automatiquement les corrections trouvées, en plus de l'analyse" },
      { option: "<numéro de PR>", effet: "Analyse directement une pull request GitHub précise, sans changer de branche localement" }
    ],
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu viens de terminer une fonctionnalité importante et tu veux une analyse poussée avant de la livrer. Que tapes-tu ?",
        options: ["/code-review high", "/diff", "/permissions", "/config"],
        reponse: 0,
        explication: "/code-review high lance une analyse plus approfondie que le niveau par défaut."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui analyse le code modifié pour trouver des bugs.",
        reponse: "/code-review",
        explication: "/code-review — sans argument, elle lance une revue de niveau medium (le niveau par défaut)."
      },
      {
        type: "scenario",
        situation: "Tu viens de terminer une petite modification, sans grand enjeu, et tu veux juste une vérification rapide avant de continuer.",
        reponse: "/code-review low",
        explication: "Le niveau low convient pour une vérification rapide et peu coûteuse."
      },
      {
        type: "scenario",
        situation: "Tu t'apprêtes à livrer du code sensible en production et veux l'analyse la plus poussée possible.",
        reponse: "/code-review max",
        explication: "Le niveau max est réservé aux enjeux importants, quitte à prendre plus de temps."
      },
      {
        type: "scenario",
        situation: "La revue a trouvé plusieurs problèmes simples, et tu veux que les corrections évidentes soient appliquées automatiquement.",
        reponse: "/code-review --fix",
        explication: "--fix applique directement les corrections suggérées, en plus de l'analyse."
      },
      {
        type: "scenario",
        situation: "Un collègue a ouvert la pull request numéro 42 sur GitHub et te demande de la relire.",
        reponse: "/code-review 42",
        explication: "En indiquant un numéro de PR, /code-review l'analyse directement, sans changer de branche."
      },
      {
        type: "scenario",
        situation: "Tu veux une revue standard, ni trop rapide ni trop poussée, pour une tâche classique du quotidien.",
        reponse: "/code-review medium",
        explication: "Le niveau medium est le bon compromis pour un usage courant."
      }
    ]
  },
  {
    id: 11,
    categorie: "Essentiels",
    commande: null,
    titre: "Défi — Essentiels",
    intro: "Une journée complète avec Claude Code : ce défi enchaîne la plupart des commandes du Module A dans un scénario réaliste, du réveil à la fin de journée.",
    disponible: true,
    final: true,
    exercices: [],
    combo: {
      texte: "Lundi matin, tu ouvres un vieux projet que tu ne connais pas bien. Tu veux, dans l'ordre : voir toutes les commandes disponibles (trou de mémoire du week-end) · créer la documentation du projet, qui n'en a jamais eu · vérifier les règles d'autorisation avant de commencer, par prudence · choisir un modèle plus puissant car la tâche du jour est complexe · résumer la conversation quand elle devient longue, sans perdre le fil · relire les fichiers modifiés une fois le code changé · lancer une revue de code poussée avant de livrer · repartir sur une conversation neuve quand une collègue te sollicite sur un sujet différent · et enfin, le lendemain, reprendre le fil de la veille.",
      etapes: [
        { label: "Étape 1 — revoir les commandes disponibles", reponse: "/help" },
        { label: "Étape 2 — documenter le projet", reponse: "/init" },
        { label: "Étape 3 — vérifier les règles d'autorisation", reponse: "/permissions" },
        { label: "Étape 4 — choisir un modèle puissant", reponse: "/model opus" },
        { label: "Étape 5 — résumer la conversation qui s'allonge", reponse: "/compact" },
        { label: "Étape 6 — relire les fichiers modifiés", reponse: "/diff" },
        { label: "Étape 7 — lancer une revue de code poussée", reponse: "/code-review high" },
        { label: "Étape 8 — repartir sur un sujet neuf", reponse: "/clear" },
        { label: "Étape 9 — reprendre le fil du lendemain", reponse: "/resume" }
      ]
    }
  },

  /* --- Contexte et raisonnement -------------------------------------- */
  {
    id: 12,
    categorie: "Contexte et raisonnement",
    commande: "/context",
    titre: "Visualiser le contexte",
    intro: "/context affiche une grille colorée montrant comment les tokens de la conversation sont utilisés (messages, outils, fichiers...). Ça aide à comprendre pourquoi une session ralentit ou se remplit. Par défaut elle montre un résumé ; ajoute all pour voir le détail complet.",
    exemple: {
      terminal: "/context",
      sortie: "Contexte utilisé : 42%\n[messages] ████████░░ 60%\n[outils]   ███░░░░░░░ 25%\n[fichiers] █░░░░░░░░░ 15%"
    },
    optionsDetail: [
      { option: "(aucun argument)", effet: "Affiche un résumé visuel de l'utilisation du contexte" },
      { option: "all", effet: "Affiche le détail complet, poste par poste, plutôt qu'un simple résumé" }
    ],
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu remarques que Claude met plus de temps à répondre et tu veux comprendre ce qui occupe le plus de place dans la conversation. Que tapes-tu ?",
        options: ["/context", "/compact", "/diff", "/config"],
        reponse: 0,
        explication: "/context affiche visuellement où sont utilisés les tokens, ce qui aide à comprendre pourquoi une session ralentit."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui affiche le détail complet de l'utilisation du contexte, poste par poste.",
        reponse: "/context all",
        explication: "/context all — affiche chaque poste (messages, outils, fichiers...) au lieu d'un simple résumé."
      },
      {
        type: "scenario",
        situation: "Tu veux juste un aperçu rapide de combien de contexte il te reste avant de continuer.",
        reponse: "/context",
        explication: "Sans argument, /context donne un résumé visuel rapide, suffisant pour un simple coup d'œil."
      },
      {
        type: "scenario",
        situation: "Tu veux voir le détail complet, poste par poste, plutôt qu'un simple résumé.",
        reponse: "/context all",
        explication: "L'argument all développe chaque catégorie au lieu de les résumer."
      },
      {
        type: "scenario",
        situation: "Avant de lancer une tâche très longue, tu veux vérifier combien de marge de contexte il te reste.",
        reponse: "/context",
        explication: "Un contrôle rapide avant une grosse tâche évite les mauvaises surprises en cours de route."
      },
      {
        type: "scenario",
        situation: "Un collègue te demande pourquoi Claude ralentit sur son projet. Que lui conseilles-tu de vérifier en premier ?",
        reponse: "/context",
        explication: "C'est le premier réflexe de diagnostic pour un ralentissement lié au contexte."
      },
      {
        type: "scenario",
        situation: "Tu soupçonnes qu'un gros fichier accapare une grande partie du contexte, et tu veux le vérifier précisément.",
        reponse: "/context all",
        explication: "Le détail complet (all) permet d'identifier précisément quel poste consomme le plus."
      }
    ]
  },
  {
    id: 13,
    categorie: "Contexte et raisonnement",
    commande: "/plan",
    titre: "Réfléchir avant d'agir",
    intro: "/plan active le mode plan : avant d'effectuer des changements importants, Claude présente une approche structurée que tu peux valider ou ajuster avant qu'il n'agisse. C'est un simple interrupteur, sans option ni argument.",
    exemple: {
      terminal: "/plan",
      sortie: "Mode plan activé.\nClaude va proposer une approche avant d'effectuer des changements."
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu t'apprêtes à demander une modification importante et risquée sur un gros projet, et tu veux d'abord voir l'approche de Claude avant qu'il ne touche à quoi que ce soit. Que tapes-tu ?",
        options: ["/plan", "/verify", "/diff", "/context"],
        reponse: 0,
        explication: "/plan fait exposer l'approche à Claude avant toute action, pour validation."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui fait réfléchir Claude à une approche avant d'agir sur un changement important.",
        reponse: "/plan",
        explication: "/plan — aucun argument, juste un interrupteur à activer avant une tâche sensible."
      },
      {
        type: "scenario",
        situation: "Tu vas demander une refonte importante d'un module critique et veux valider l'approche avant que Claude ne touche au code.",
        reponse: "/plan",
        explication: "Valider le plan avant d'agir limite le risque sur du code critique."
      },
      {
        type: "scenario",
        situation: "Un collègue junior a peur que Claude « fonce » sans réfléchir sur une tâche complexe.",
        reponse: "/plan",
        explication: "/plan répond exactement à cette inquiétude : une étape de réflexion structurée avant l'action."
      },
      {
        type: "scenario",
        situation: "Tu veux comparer plusieurs façons de résoudre un problème avant de choisir laquelle appliquer.",
        reponse: "/plan",
        explication: "Le mode plan expose le raisonnement et les options avant de passer à l'exécution."
      },
      {
        type: "scenario",
        situation: "La tâche est risquée pour la production, tu veux une étape de validation avant toute action.",
        reponse: "/plan",
        explication: "Systématique à activer avant toute tâche à risque sur un environnement sensible."
      },
      {
        type: "scenario",
        situation: "Tu formes quelqu'un et veux lui montrer comment Claude peut exposer son raisonnement avant d'agir.",
        reponse: "/plan",
        explication: "Bonne commande pédagogique pour montrer le raisonnement avant l'exécution."
      }
    ]
  },
  {
    id: 14,
    categorie: "Contexte et raisonnement",
    commande: "/focus",
    titre: "Vue condensée",
    intro: "/focus bascule vers un affichage condensé qui ne montre que le dernier échange (prompt + réponse), pour réduire les distractions dans une longue conversation. Retape /focus pour revenir à l'affichage complet — ça ne touche jamais à l'historique réel, seulement à ce qui est affiché.",
    exemple: {
      terminal: "/focus",
      sortie: "Vue condensée activée.\n(seul le dernier échange est affiché ; l'historique complet reste intact)"
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "La conversation est très longue et tu veux te concentrer uniquement sur le dernier échange, sans scroller dans tout l'historique. Que tapes-tu ?",
        options: ["/focus", "/compact", "/clear", "/context"],
        reponse: 0,
        explication: "/focus change seulement l'affichage — contrairement à /compact ou /clear, qui touchent à l'historique lui-même."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui affiche uniquement le dernier échange, sans toucher à l'historique.",
        reponse: "/focus",
        explication: "/focus — un simple interrupteur d'affichage, réversible en le retapant."
      },
      {
        type: "scenario",
        situation: "Une conversation très longue te fatigue à faire défiler ; tu veux juste voir le dernier échange.",
        reponse: "/focus",
        explication: "C'est exactement le cas d'usage principal de /focus."
      },
      {
        type: "scenario",
        situation: "Tu veux réduire les distractions visuelles sans perdre l'historique de la conversation (contrairement à /clear ou /compact).",
        reponse: "/focus",
        explication: "/focus ne supprime ni ne résume rien, il change juste ce qui est affiché à l'écran."
      },
      {
        type: "scenario",
        situation: "Tu partages ton écran en réunion et veux une vue plus épurée, sans tout l'historique affiché.",
        reponse: "/focus",
        explication: "Utile pour une présentation propre sans dérouler toute la conversation."
      },
      {
        type: "scenario",
        situation: "Après avoir utilisé la vue condensée, tu veux revenir à l'affichage complet de la conversation.",
        reponse: "/focus",
        explication: "/focus est un interrupteur : le retaper revient à l'affichage complet."
      },
      {
        type: "scenario",
        situation: "Un collègue te demande comment alléger visuellement une conversation sans en perdre le contenu.",
        reponse: "/focus",
        explication: "C'est la réponse à lui donner : rien n'est perdu, seul l'affichage change."
      }
    ]
  },
  {
    id: 15,
    categorie: "Contexte et raisonnement",
    commande: "/btw",
    titre: "Question annexe",
    intro: "/btw pose une question rapide sans l'ajouter à l'historique principal de la conversation — utile pour une question hors-sujet sans polluer le fil de travail en cours. Tape /btw suivi directement de ta question.",
    exemple: {
      terminal: "/btw quelle est la capitale de l'Australie ?",
      sortie: "Canberra.\n(cette question n'a pas été ajoutée à l'historique de la conversation)"
    },
    disponible: true,
    exercices: [
      {
        type: "qcm",
        question: "Tu es en pleine tâche de code et une question totalement hors-sujet te traverse l'esprit. Tu veux la poser sans polluer le fil de la conversation en cours. Que tapes-tu devant ta question ?",
        options: ["/btw", "/focus", "/clear", "/plan"],
        reponse: 0,
        explication: "/btw répond à une question sans l'ajouter à l'historique, contrairement à une question posée normalement."
      },
      {
        type: "saisie",
        consigne: "Tape la commande qui permet de poser une question annexe sans l'ajouter à l'historique.",
        reponse: "/btw",
        explication: "/btw — à faire suivre directement de la question, ex. « /btw quelle heure est-il ? »."
      },
      {
        type: "scenario",
        situation: "En pleine tâche, une question sans rapport te traverse l'esprit et tu veux une réponse rapide sans polluer le fil.",
        reponse: "/btw",
        explication: "C'est exactement le cas d'usage prévu pour /btw."
      },
      {
        type: "scenario",
        situation: "Tu veux vérifier un détail technique annexe sans que ça n'apparaisse dans l'historique de ta conversation de travail.",
        reponse: "/btw",
        explication: "La question posée via /btw n'est pas conservée dans le fil principal."
      },
      {
        type: "scenario",
        situation: "Un collègue te demande comment poser une question hors-sujet sans perturber le contexte en cours.",
        reponse: "/btw",
        explication: "C'est la réponse à lui donner : /btw suivi de sa question."
      },
      {
        type: "scenario",
        situation: "Tu veux une info rapide (ex. la syntaxe d'une commande shell) sans que ça compte dans le fil principal de ta tâche.",
        reponse: "/btw",
        explication: "Une question d'appoint typique pour /btw."
      },
      {
        type: "scenario",
        situation: "Tu es curieux d'une chose sans lien avec ta tâche actuelle, mais tu ne veux pas « polluer » le contexte de ta session de travail.",
        reponse: "/btw",
        explication: "/btw existe précisément pour séparer les questions annexes du travail en cours."
      }
    ]
  },

  /* --- Travail parallèle et délégation --------------------------------- */
  {
    id: 16, categorie: "Travail parallèle et délégation", commande: "/tasks", titre: "Suivre les tâches en cours",
    intro: "/tasks liste tous les travaux en arrière-plan et les sous-agents en cours d'exécution, avec leur statut et leur progression.",
    exemple: { terminal: "/tasks", sortie: "Tâches en cours :\n1. Optimisation des images (en cours, 60%)\n2. Revue de sécurité PR #12 (terminée)" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu as lancé plusieurs tâches en arrière-plan il y a un moment et tu veux savoir où elles en sont. Que tapes-tu ?", options: ["/tasks", "/background", "/fork", "/subtask"], reponse: 0, explication: "/tasks affiche le statut et la progression de tous les travaux en cours." },
      { type: "saisie", consigne: "Tape la commande qui liste les travaux en arrière-plan et sous-agents en cours.", reponse: "/tasks", explication: "/tasks — aucune option, elle affiche simplement tout ce qui tourne." },
      { type: "scenario", situation: "Tu as lancé une tâche longue il y a 10 minutes et tu veux savoir si elle est terminée.", reponse: "/tasks", explication: "Un simple coup d'œil sur /tasks donne l'état d'avancement." },
      { type: "scenario", situation: "Tu ne te souviens plus combien de sous-agents tu as lancés en parallèle.", reponse: "/tasks", explication: "/tasks liste tout, même ce qu'on a oublié d'avoir lancé." },
      { type: "scenario", situation: "Un collègue te demande où en est le traitement qu'il t'a vu lancer en fond.", reponse: "/tasks", explication: "C'est la réponse directe à lui donner." },
      { type: "scenario", situation: "Avant de fermer ton ordinateur, tu veux vérifier qu'aucune tâche en arrière-plan n'est encore active.", reponse: "/tasks", explication: "Bon réflexe avant d'éteindre : vérifier qu'on ne coupe rien en cours." },
      { type: "scenario", situation: "Tu veux voir la progression en pourcentage d'une tâche que tu as mise en fond.", reponse: "/tasks", explication: "La progression détaillée de chaque tâche apparaît dans la liste." }
    ]
  },
  {
    id: 17, categorie: "Travail parallèle et délégation", commande: "/background", titre: "Passer en arrière-plan",
    intro: "/background détache la session actuelle pour qu'elle continue de travailler en tâche de fond, libérant immédiatement ton terminal. Ajoute une instruction pour préciser ce qu'elle doit faire.",
    exemple: { terminal: "/background optimise les images du dossier /assets", sortie: "Session détachée en arrière-plan.\nLe terminal est de nouveau disponible." },
    optionsDetail: [
      { option: "(aucun argument)", effet: "Détache la session en cours telle quelle, sans nouvelle instruction" },
      { option: "[instruction]", effet: "Précise la tâche à effectuer en arrière-plan avant de détacher la session" }
    ],
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux lancer une tâche longue (optimiser des images) sans bloquer ton terminal pendant qu'elle tourne. Que tapes-tu ?", options: ["/background optimise les images", "/tasks", "/fork", "/loop"], reponse: 0, explication: "/background libère le terminal tout en poursuivant la tâche en fond." },
      { type: "saisie", consigne: "Tape la commande qui détache la session en cours pour qu'elle continue en tâche de fond.", reponse: "/background", explication: "/background — avec ou sans instruction supplémentaire." },
      { type: "scenario", situation: "Tu veux lancer une tâche de refactoring longue sans bloquer ton terminal en attendant.", reponse: "/background", explication: "Le terminal redevient utilisable immédiatement après." },
      { type: "scenario", situation: "Tu dois partir en réunion mais veux que Claude continue à travailler sur la tâche en cours.", reponse: "/background", explication: "La session continue même quand tu n'es plus devant l'écran." },
      { type: "scenario", situation: "Tu veux libérer ton terminal pour faire autre chose pendant qu'une tâche tourne.", reponse: "/background", explication: "C'est exactement l'usage prévu de /background." },
      { type: "scenario", situation: "Un collègue te demande comment continuer une tâche sans rester devant l'écran à attendre.", reponse: "/background", explication: "La réponse à lui donner directement." },
      { type: "scenario", situation: "Tu lances une tâche d'optimisation d'images qui va prendre du temps, en précisant directement quoi faire.", reponse: "/background optimise les images", explication: "L'instruction peut être précisée directement après la commande." }
    ]
  },
  {
    id: 18, categorie: "Travail parallèle et délégation", commande: "/fork", titre: "Explorer une autre piste",
    intro: "/fork copie la conversation actuelle dans une nouvelle session en arrière-plan, pour explorer une direction différente sans perdre ni modifier la conversation d'origine.",
    exemple: { terminal: "/fork essaie avec React au lieu de Vue", sortie: "Nouvelle session créée en arrière-plan avec l'historique complet.\nLa conversation d'origine continue normalement." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux essayer une approche différente (React au lieu de Vue) sans perdre ni changer la conversation en cours. Que tapes-tu ?", options: ["/fork essaie avec React", "/branch", "/background", "/subtask"], reponse: 0, explication: "/fork copie tout l'historique dans une nouvelle session ; la conversation d'origine reste intacte." },
      { type: "saisie", consigne: "Tape la commande qui copie la conversation dans une nouvelle session en arrière-plan pour explorer une autre piste.", reponse: "/fork", explication: "/fork — duplique tout l'historique existant." },
      { type: "scenario", situation: "Tu veux tester une approche technique différente sans risquer de perturber la conversation principale.", reponse: "/fork", explication: "La conversation d'origine n'est jamais modifiée par un fork." },
      { type: "scenario", situation: "Tu hésites entre deux solutions et veux les explorer en parallèle, chacune dans son propre fil.", reponse: "/fork", explication: "Chaque fork devient une session indépendante." },
      { type: "scenario", situation: "Un collègue te suggère une piste risquée ; tu veux la tester sans abîmer le travail déjà fait.", reponse: "/fork", explication: "Tester sans risque, c'est le principe même du fork." },
      { type: "scenario", situation: "Tu veux garder la conversation actuelle intacte tout en essayant une variante ailleurs.", reponse: "/fork", explication: "C'est la garantie principale qu'offre /fork." },
      { type: "scenario", situation: "Tu veux dupliquer tout l'historique de la conversation pour partir sur une nouvelle direction.", reponse: "/fork", explication: "La duplication complète de l'historique est automatique." }
    ]
  },
  {
    id: 19, categorie: "Travail parallèle et délégation", commande: "/branch", titre: "Créer une branche de conversation",
    intro: "/branch crée une branche de la conversation pour explorer une approche alternative, que tu peux ensuite comparer à la branche principale ou abandonner.",
    exemple: { terminal: "/branch refactor-approche", sortie: "Branche « refactor-approche » créée.\nTu peux y revenir ou basculer sur la branche principale à tout moment." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux explorer une approche alternative de refactoring, en gardant la possibilité de revenir facilement à la version actuelle. Que tapes-tu ?", options: ["/branch refactor-approche", "/fork", "/background", "/tasks"], reponse: 0, explication: "/branch crée une branche nommée, facile à retrouver et à comparer." },
      { type: "saisie", consigne: "Tape la commande qui crée une branche de conversation pour explorer une approche alternative.", reponse: "/branch", explication: "/branch — optionnellement suivi d'un nom pour la retrouver facilement." },
      { type: "scenario", situation: "Tu veux essayer une approche alternative tout en pouvant facilement revenir en arrière si ça ne marche pas.", reponse: "/branch", explication: "Basculer entre branches est prévu pour ça." },
      { type: "scenario", situation: "Tu compares deux façons de refactoriser un module et veux les nommer clairement pour t'y retrouver.", reponse: "/branch refactor-approche", explication: "Donner un nom à la branche facilite le suivi de plusieurs pistes." },
      { type: "scenario", situation: "Un collègue veut voir la différence entre deux directions de conversation possibles.", reponse: "/branch", explication: "Créer une branche permet de comparer objectivement deux pistes." },
      { type: "scenario", situation: "Tu veux structurer ta conversation en plusieurs pistes nommées plutôt qu'un seul fil linéaire.", reponse: "/branch", explication: "C'est exactement l'usage prévu de /branch." },
      { type: "scenario", situation: "Tu hésites sur une décision d'architecture et veux garder les deux options accessibles séparément.", reponse: "/branch", explication: "Chaque option peut vivre dans sa propre branche, sans se mélanger." }
    ]
  },
  {
    id: 20, categorie: "Travail parallèle et délégation", commande: "/batch", titre: "Orchestrer un gros changement",
    intro: "/batch orchestre un changement à grande échelle sur tout le codebase, en le répartissant sur plusieurs agents qui travaillent en parallèle (chacun ouvrant sa propre pull request).",
    exemple: { terminal: "/batch ajoute des types TypeScript à tous les fichiers .js", sortie: "Travail réparti sur 12 agents en parallèle.\nChaque agent traite un sous-ensemble de fichiers et ouvrira sa propre PR." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux ajouter des types TypeScript à des dizaines de fichiers .js d'un coup, pas juste un ou deux. Que tapes-tu ?", options: ["/batch ajoute des types TypeScript à tous les fichiers .js", "/fork", "/subtask", "/background"], reponse: 0, explication: "/batch est fait pour les changements à grande échelle, répartis automatiquement sur plusieurs agents." },
      { type: "saisie", consigne: "Tape la commande qui répartit un gros changement sur plusieurs agents travaillant en parallèle.", reponse: "/batch", explication: "/batch — suivie d'une instruction décrivant le changement à grande échelle." },
      { type: "scenario", situation: "Tu veux renommer une fonction utilisée dans des dizaines de fichiers à travers tout le projet.", reponse: "/batch", explication: "Un changement transversal typique pour /batch." },
      { type: "scenario", situation: "Une migration de librairie touche un très grand nombre de fichiers, trop pour le faire un par un.", reponse: "/batch", explication: "La parallélisation accélère un chantier de cette taille." },
      { type: "scenario", situation: "Un collègue te demande comment paralléliser un gros chantier de nettoyage de code.", reponse: "/batch", explication: "C'est la réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux que chaque partie d'un grand changement ouvre sa propre pull request séparée.", reponse: "/batch", explication: "Chaque agent de /batch ouvre sa propre PR, ce qui facilite la revue." },
      { type: "scenario", situation: "Tu as une tâche répétitive à appliquer sur l'ensemble du codebase, trop volumineuse pour une seule session.", reponse: "/batch", explication: "/batch est justement pensée pour ce genre d'échelle." }
    ]
  },
  {
    id: 21, categorie: "Travail parallèle et délégation", commande: "/subtask", titre: "Déléguer une tâche annexe",
    intro: "/subtask confie une tâche annexe à un sous-agent, qui travaille dessus indépendamment et revient ensuite avec le résultat, sans interrompre ta conversation principale.",
    exemple: { terminal: "/subtask refactorise cette fonction utilitaire", sortie: "Sous-agent lancé.\nIl reviendra avec le résultat une fois la tâche terminée." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux déléguer une petite tâche annexe (refactoriser une fonction) sans interrompre ta conversation principale. Que tapes-tu ?", options: ["/subtask refactorise cette fonction", "/fork", "/batch", "/tasks"], reponse: 0, explication: "/subtask délègue une tâche précise sans interrompre le fil principal." },
      { type: "saisie", consigne: "Tape la commande qui confie une tâche annexe à un sous-agent, qui revient ensuite avec le résultat.", reponse: "/subtask", explication: "/subtask — suivie d'une description claire de la tâche à déléguer." },
      { type: "scenario", situation: "Tu veux qu'une petite tâche annexe soit traitée en parallèle de ta conversation principale, sans la couper.", reponse: "/subtask", explication: "Le sous-agent travaille indépendamment, en parallèle." },
      { type: "scenario", situation: "Tu veux déléguer la vérification d'un détail pendant que tu continues à avancer sur autre chose.", reponse: "/subtask", explication: "C'est exactement le principe de la délégation via sous-agent." },
      { type: "scenario", situation: "Un collègue te demande comment sous-traiter une tâche ponctuelle sans changer de conversation.", reponse: "/subtask", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux qu'un sous-agent te revienne avec un résultat précis, sans gérer toi-même le suivi.", reponse: "/subtask", explication: "Le sous-agent gère la tâche de bout en bout et revient avec le résultat." },
      { type: "scenario", situation: "Tu as une tâche bien définie et isolée à faire traiter sans interrompre ton fil de travail actuel.", reponse: "/subtask", explication: "Une tâche isolée et bien définie est le cas d'usage idéal de /subtask." }
    ]
  },

  /* --- Dépannage -------------------------------------------------------- */
  {
    id: 22, categorie: "Dépannage", commande: "/doctor", titre: "Diagnostiquer l'installation",
    intro: "/doctor diagnostique l'installation de Claude Code (versions, configuration, doublons) et corrige automatiquement les soucis courants.",
    exemple: { terminal: "/doctor", sortie: "Diagnostic :\n✓ Installation à jour\n✓ Aucune installation en double détectée\n✓ Configuration valide" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Claude Code se comporte bizarrement depuis une mise à jour et tu soupçonnes un problème d'installation. Que tapes-tu en premier ?", options: ["/doctor", "/debug", "/bug", "/config"], reponse: 0, explication: "/doctor diagnostique et corrige automatiquement les soucis d'installation courants." },
      { type: "saisie", consigne: "Tape la commande qui diagnostique l'installation et corrige les problèmes courants.", reponse: "/doctor", explication: "/doctor — aucun argument, un diagnostic automatique complet." },
      { type: "scenario", situation: "Claude Code se comporte bizarrement après une mise à jour, tu veux vérifier que tout est bien installé.", reponse: "/doctor", explication: "Premier réflexe face à un comportement anormal après mise à jour." },
      { type: "scenario", situation: "Un collègue soupçonne d'avoir deux installations de Claude Code qui se marchent dessus.", reponse: "/doctor", explication: "/doctor détecte justement les installations en double." },
      { type: "scenario", situation: "Avant de signaler un bug, tu veux d'abord éliminer un simple problème de configuration locale.", reponse: "/doctor", explication: "Éliminer les causes locales avant de suspecter un vrai bug." },
      { type: "scenario", situation: "Tu viens de réinstaller Claude Code et veux vérifier que tout est configuré correctement.", reponse: "/doctor", explication: "Un contrôle systématique après réinstallation." },
      { type: "scenario", situation: "Tu veux un diagnostic rapide et automatique plutôt que de vérifier chaque réglage à la main.", reponse: "/doctor", explication: "C'est exactement ce qu'automatise /doctor." }
    ]
  },
  {
    id: 23, categorie: "Dépannage", commande: "/debug", titre: "Activer les journaux détaillés",
    intro: "/debug active des journaux détaillés (logs) pour comprendre un comportement inattendu de Claude Code pendant la session.",
    exemple: { terminal: "/debug les réponses sont lentes", sortie: "Mode debug activé.\nJournaux détaillés affichés pour la suite de la session." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu remarques un ralentissement inexpliqué et tu veux voir des informations techniques détaillées sur ce qui se passe. Que tapes-tu ?", options: ["/debug les réponses sont lentes", "/doctor", "/heapdump", "/context"], reponse: 0, explication: "/debug affiche des journaux détaillés pour comprendre un comportement précis." },
      { type: "saisie", consigne: "Tape la commande qui active les journaux détaillés pour comprendre un comportement inattendu.", reponse: "/debug", explication: "/debug — utilisable seule ou avec une description du souci." },
      { type: "scenario", situation: "Tu remarques un ralentissement inexpliqué et veux voir des informations techniques détaillées.", reponse: "/debug", explication: "Les logs détaillés aident à repérer la cause exacte." },
      { type: "scenario", situation: "Un outil se comporte bizarrement et tu veux comprendre précisément ce qu'il se passe en coulisses.", reponse: "/debug", explication: "/debug expose ce qui se passe en interne, pas visible normalement." },
      { type: "scenario", situation: "Tu prépares un rapport de bug et veux d'abord collecter des journaux détaillés.", reponse: "/debug", explication: "Des logs précis renforcent un rapport de bug." },
      { type: "scenario", situation: "Un développeur plus expérimenté te demande d'activer les logs avant de l'aider à distance.", reponse: "/debug", explication: "La réponse directe à sa demande." },
      { type: "scenario", situation: "Tu veux comprendre pourquoi un outil spécifique échoue silencieusement.", reponse: "/debug", explication: "Les logs détaillés révèlent des échecs qui seraient sinon invisibles." }
    ]
  },
  {
    id: 24, categorie: "Dépannage", commande: "/bug", titre: "Signaler un bug",
    intro: "/bug envoie un rapport de bug à l'équipe Anthropic, avec le contexte de la conversation, pour signaler un problème précis et reproductible.",
    exemple: { terminal: "/bug la commande /export ne génère pas de fichier", sortie: "Rapport envoyé avec le contexte de la session.\nLien du ticket de suivi fourni." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu viens de rencontrer un vrai bug reproductible dans Claude Code et tu veux le signaler à l'équipe Anthropic. Que tapes-tu ?", options: ["/bug la commande /export ne fonctionne pas", "/feedback", "/debug", "/doctor"], reponse: 0, explication: "/bug est fait pour signaler un problème précis, avec le contexte de la conversation joint automatiquement." },
      { type: "saisie", consigne: "Tape la commande qui signale un bug à l'équipe Anthropic avec le contexte de la conversation.", reponse: "/bug", explication: "/bug — suivie d'une description du problème rencontré." },
      { type: "scenario", situation: "Tu viens de reproduire un bug clair et tu veux le signaler avec le contexte exact de ta session.", reponse: "/bug", explication: "Le contexte est joint automatiquement au rapport." },
      { type: "scenario", situation: "Une commande plante systématiquement dans les mêmes conditions, tu veux le faire remonter.", reponse: "/bug", explication: "Un comportement reproductible mérite un vrai rapport de bug." },
      { type: "scenario", situation: "Un collègue te demande comment signaler officiellement un problème technique à Anthropic.", reponse: "/bug", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux qu'un ticket de suivi soit créé pour un dysfonctionnement précis que tu as observé.", reponse: "/bug", explication: "/bug fournit un lien de suivi après l'envoi." },
      { type: "scenario", situation: "Tu as trouvé un comportement clairement anormal, pas juste une suggestion d'amélioration.", reponse: "/bug", explication: "/bug est réservée aux vrais dysfonctionnements, contrairement à /feedback." }
    ]
  },
  {
    id: 25, categorie: "Dépannage", commande: "/feedback", titre: "Donner un avis produit",
    intro: "/feedback envoie un avis ou une suggestion sur Claude Code à Anthropic — pour une remarque générale, pas nécessairement un bug précis.",
    exemple: { terminal: "/feedback la commande /model pourrait être plus visible", sortie: "Merci, ton retour a été transmis à l'équipe." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu trouves qu'une commande pourrait être améliorée mais ce n'est pas un bug à proprement parler. Que tapes-tu pour le faire savoir ?", options: ["/feedback la commande /model pourrait être plus visible", "/bug", "/debug", "/doctor"], reponse: 0, explication: "/feedback est pour les avis et suggestions générales, /bug est réservé aux problèmes précis et reproductibles." },
      { type: "saisie", consigne: "Tape la commande qui envoie un avis ou une suggestion générale à Anthropic.", reponse: "/feedback", explication: "/feedback — suivie de ta remarque ou suggestion." },
      { type: "scenario", situation: "Tu as une suggestion d'amélioration, pas un bug à proprement parler.", reponse: "/feedback", explication: "Une suggestion se distingue d'un bug reproductible." },
      { type: "scenario", situation: "Tu trouves qu'une commande pourrait être plus intuitive et veux le faire savoir.", reponse: "/feedback", explication: "Exactement le type de remarque destiné à /feedback." },
      { type: "scenario", situation: "Un collègue te demande comment donner un avis général sur l'outil, sans signaler de problème précis.", reponse: "/feedback", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux proposer une idée de nouvelle fonctionnalité à l'équipe Anthropic.", reponse: "/feedback", explication: "Les idées de fonctionnalités passent aussi par /feedback." },
      { type: "scenario", situation: "Tu apprécies particulièrement une fonctionnalité et veux le signaler à l'équipe.", reponse: "/feedback", explication: "Le feedback positif est aussi utile que les critiques." }
    ]
  },
  {
    id: 26, categorie: "Dépannage", commande: "/heapdump", titre: "Diagnostiquer la mémoire",
    intro: "/heapdump écrit un instantané de la mémoire utilisée sur le disque, pour diagnostiquer un problème de consommation mémoire excessive.",
    exemple: { terminal: "/heapdump", sortie: "Instantané mémoire écrit : claude-2026-07-25.heapsnapshot\n(à ouvrir dans les outils de développement Chrome)" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Claude Code consomme visiblement trop de mémoire sur ta machine et tu veux capturer un instantané pour l'analyser. Que tapes-tu ?", options: ["/heapdump", "/debug", "/doctor", "/context"], reponse: 0, explication: "/heapdump capture précisément l'état de la mémoire à un instant donné." },
      { type: "saisie", consigne: "Tape la commande qui écrit un instantané mémoire sur le disque pour diagnostiquer sa consommation.", reponse: "/heapdump", explication: "/heapdump — génère un fichier .heapsnapshot analysable." },
      { type: "scenario", situation: "Claude Code consomme anormalement beaucoup de mémoire et tu veux capturer un instantané pour l'analyser.", reponse: "/heapdump", explication: "Le cas d'usage principal de /heapdump." },
      { type: "scenario", situation: "Un développeur t'accompagne pour diagnostiquer une fuite mémoire et te demande un fichier .heapsnapshot.", reponse: "/heapdump", explication: "C'est exactement le type de fichier que génère /heapdump." },
      { type: "scenario", situation: "Tu veux fournir des informations précises sur l'usage mémoire dans un rapport de bug technique.", reponse: "/heapdump", explication: "Un instantané mémoire renforce un rapport technique." },
      { type: "scenario", situation: "Ton ordinateur ralentit fortement quand Claude Code tourne longtemps, tu veux investiguer la mémoire.", reponse: "/heapdump", explication: "Premier pas pour investiguer un ralentissement lié à la mémoire." },
      { type: "scenario", situation: "Tu veux ouvrir un instantané mémoire dans les outils de développement pour l'analyser en détail.", reponse: "/heapdump", explication: "Le fichier généré s'ouvre directement dans les DevTools." }
    ]
  },

  /* --- Compte et intégrations -------------------------------------------- */
  {
    id: 27, categorie: "Compte et intégrations", commande: "/login", titre: "Se connecter",
    intro: "/login connecte la session en cours à ton compte Anthropic.",
    exemple: { terminal: "/login", sortie: "Ouverture du navigateur pour la connexion...\n✓ Connecté en tant que ton-compte@email.com" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu viens d'installer Claude Code sur un nouvel ordinateur et tu dois te connecter à ton compte Anthropic. Que tapes-tu ?", options: ["/login", "/logout", "/config", "/desktop"], reponse: 0, explication: "/login ouvre le navigateur pour authentifier la session." },
      { type: "saisie", consigne: "Tape la commande qui connecte la session à ton compte Anthropic.", reponse: "/login", explication: "/login — aucun argument, la connexion se fait via le navigateur." },
      { type: "scenario", situation: "Tu viens d'installer Claude Code sur un nouvel ordinateur et dois te connecter à ton compte.", reponse: "/login", explication: "Premier réflexe sur une nouvelle installation." },
      { type: "scenario", situation: "Ta session s'est déconnectée automatiquement et tu dois te reconnecter.", reponse: "/login", explication: "/login rétablit la connexion à tout moment." },
      { type: "scenario", situation: "Un collègue configure Claude Code pour la première fois et te demande comment se connecter.", reponse: "/login", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu changes de compte Anthropic (personnel vers professionnel) et dois te reconnecter.", reponse: "/login", explication: "Changer de compte passe aussi par /login." },
      { type: "scenario", situation: "Une commande te signale que tu n'es pas authentifié et tu dois régulariser ça.", reponse: "/login", explication: "C'est la commande qui résout ce message d'erreur." }
    ]
  },
  {
    id: 28, categorie: "Compte et intégrations", commande: "/logout", titre: "Se déconnecter",
    intro: "/logout déconnecte la session en cours de ton compte Anthropic.",
    exemple: { terminal: "/logout", sortie: "Déconnecté du compte.\nLes prochaines commandes nécessiteront une nouvelle connexion." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu termines ta session sur un ordinateur partagé et veux t'assurer que ton compte n'y reste pas connecté. Que tapes-tu ?", options: ["/logout", "/login", "/exit", "/permissions"], reponse: 0, explication: "/logout déconnecte explicitement le compte de la session." },
      { type: "saisie", consigne: "Tape la commande qui déconnecte la session en cours du compte Anthropic.", reponse: "/logout", explication: "/logout — aucun argument nécessaire." },
      { type: "scenario", situation: "Tu termines ta session sur un ordinateur partagé et veux t'assurer que ton compte s'y déconnecte.", reponse: "/logout", explication: "Bon réflexe de sécurité sur un poste partagé." },
      { type: "scenario", situation: "Tu veux basculer vers un autre compte Anthropic et dois d'abord quitter le compte actuel.", reponse: "/logout", explication: "Se déconnecter avant de se reconnecter avec un autre compte." },
      { type: "scenario", situation: "Un collègue te prête son ordinateur et te demande de te déconnecter en partant.", reponse: "/logout", explication: "La réponse directe à sa demande." },
      { type: "scenario", situation: "Tu prépares une démo publique et veux t'assurer qu'aucun compte personnel n'est connecté.", reponse: "/logout", explication: "Éviter d'exposer un compte personnel pendant une démo." },
      { type: "scenario", situation: "Tu veux tester le comportement de l'outil quand aucun compte n'est connecté.", reponse: "/logout", explication: "Se déconnecter permet de reproduire cet état." }
    ]
  },
  {
    id: 29, categorie: "Compte et intégrations", commande: "/desktop", titre: "Continuer sur l'appli Desktop",
    intro: "/desktop transfère la session en cours vers l'application Claude Code Desktop, avec le même contexte et les mêmes fichiers disponibles.",
    exemple: { terminal: "/desktop", sortie: "Application Desktop lancée.\nSession synchronisée avec le même contexte." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu es en train de travailler dans le terminal et tu veux continuer la même session dans l'application de bureau. Que tapes-tu ?", options: ["/desktop", "/background", "/fork", "/export"], reponse: 0, explication: "/desktop transfère la session avec tout son contexte vers l'application graphique." },
      { type: "saisie", consigne: "Tape la commande qui continue la session en cours dans l'application Claude Code Desktop.", reponse: "/desktop", explication: "/desktop — aucun argument, le transfert est automatique." },
      { type: "scenario", situation: "Tu es dans le terminal et préfères continuer avec l'interface graphique de l'application de bureau.", reponse: "/desktop", explication: "Le contexte suit automatiquement lors du passage à l'appli." },
      { type: "scenario", situation: "Tu veux profiter des fonctionnalités visuelles de l'appli Desktop sans perdre le contexte du terminal.", reponse: "/desktop", explication: "Rien n'est perdu lors du transfert." },
      { type: "scenario", situation: "Un collègue te demande comment passer du terminal à l'application graphique en gardant la même conversation.", reponse: "/desktop", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux continuer à travailler mais avec une interface plus confortable qu'un terminal texte.", reponse: "/desktop", explication: "L'appli Desktop offre une interface plus visuelle." },
      { type: "scenario", situation: "Tu changes d'environnement de travail (terminal vers appli) sans vouloir perdre l'historique.", reponse: "/desktop", explication: "L'historique complet est conservé lors du transfert." }
    ]
  },
  {
    id: 30, categorie: "Compte et intégrations", commande: "/install-github-app", titre: "Installer l'app GitHub",
    intro: "/install-github-app installe l'application GitHub Claude, qui permet la revue automatique de pull requests directement depuis GitHub.",
    exemple: { terminal: "/install-github-app", sortie: "Ouverture de GitHub pour installer l'application...\n✓ Application installée sur ton compte/organisation." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux que les pull requests de ton dépôt soient automatiquement revues par Claude dès leur ouverture. Que tapes-tu ?", options: ["/install-github-app", "/code-review", "/security-review", "/mcp"], reponse: 0, explication: "/install-github-app connecte Claude à GitHub pour automatiser la revue des PR, contrairement à /code-review qui est manuel." },
      { type: "saisie", consigne: "Tape la commande qui installe l'application GitHub Claude pour la revue automatique de pull requests.", reponse: "/install-github-app", explication: "/install-github-app — ouvre GitHub pour finaliser l'installation." },
      { type: "scenario", situation: "Tu veux que chaque nouvelle pull request soit automatiquement revue par Claude, sans lancer la commande à la main à chaque fois.", reponse: "/install-github-app", explication: "L'automatisation remplace la revue manuelle répétée." },
      { type: "scenario", situation: "Ton équipe veut intégrer Claude directement dans le flux GitHub plutôt que de l'utiliser au cas par cas.", reponse: "/install-github-app", explication: "C'est le but de cette intégration." },
      { type: "scenario", situation: "Un collègue te demande comment connecter Claude à l'organisation GitHub de l'équipe.", reponse: "/install-github-app", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux automatiser la revue de code pour tout un dépôt, une fois pour toutes.", reponse: "/install-github-app", explication: "Une installation unique automatise ensuite toutes les PR du dépôt." },
      { type: "scenario", situation: "Tu configures les outils de l'équipe et veux ajouter Claude comme reviewer automatique sur GitHub.", reponse: "/install-github-app", explication: "C'est exactement l'usage prévu de cette commande." }
    ]
  },
  {
    id: 31, categorie: "Compte et intégrations", commande: "/install-slack-app", titre: "Installer Claude sur Slack",
    intro: "/install-slack-app installe Claude dans un espace de travail Slack, pour pouvoir l'utiliser directement depuis les conversations Slack (« Claude Tag »).",
    exemple: { terminal: "/install-slack-app", sortie: "Ouverture de Slack pour installer l'application...\n✓ Claude Tag installé sur l'espace de travail." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Ton équipe veut pouvoir mentionner Claude directement dans une conversation Slack pour lui poser des questions. Que tapes-tu ?", options: ["/install-slack-app", "/install-github-app", "/mcp", "/login"], reponse: 0, explication: "/install-slack-app connecte Claude à un espace de travail Slack." },
      { type: "saisie", consigne: "Tape la commande qui installe Claude dans un espace de travail Slack.", reponse: "/install-slack-app", explication: "/install-slack-app — ouvre Slack pour finaliser l'installation." },
      { type: "scenario", situation: "Ton équipe veut pouvoir mentionner @Claude directement dans les conversations Slack.", reponse: "/install-slack-app", explication: "C'est exactement ce que permet cette installation." },
      { type: "scenario", situation: "Un collègue te demande comment ajouter Claude comme outil disponible dans Slack.", reponse: "/install-slack-app", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux que Claude soit accessible sans quitter l'espace de travail Slack de l'équipe.", reponse: "/install-slack-app", explication: "L'intégration Slack évite de changer d'outil." },
      { type: "scenario", situation: "Vous configurez les intégrations de l'équipe et voulez ajouter Claude à Slack.", reponse: "/install-slack-app", explication: "Une installation unique pour tout l'espace de travail." },
      { type: "scenario", situation: "Tu veux permettre à toute l'équipe d'utiliser Claude directement depuis leurs canaux Slack habituels.", reponse: "/install-slack-app", explication: "L'installation rend Claude disponible pour toute l'équipe, pas juste toi." }
    ]
  },

  /* --- Utilitaires -------------------------------------------------------- */
  {
    id: 32, categorie: "Utilitaires", commande: "/copy", titre: "Copier une réponse",
    intro: "/copy copie la dernière réponse de Claude dans le presse-papiers. Ajoute un numéro pour copier une réponse précédente plutôt que la dernière.",
    exemple: { terminal: "/copy", sortie: "Dernière réponse copiée dans le presse-papiers." },
    optionsDetail: [
      { option: "(aucun argument)", effet: "Copie la toute dernière réponse" },
      { option: "[N]", effet: "Copie la N-ième réponse la plus récente au lieu de la dernière" }
    ],
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux coller la dernière réponse de Claude dans un autre document. Que tapes-tu ?", options: ["/copy", "/export", "/diff", "/focus"], reponse: 0, explication: "/copy copie directement la dernière réponse dans le presse-papiers." },
      { type: "saisie", consigne: "Tape la commande qui copie la dernière réponse dans le presse-papiers.", reponse: "/copy", explication: "/copy — sans argument, elle prend la toute dernière réponse." },
      { type: "scenario", situation: "Tu veux coller la dernière réponse de Claude directement dans un email.", reponse: "/copy", explication: "Copier-coller rapide sans sélection manuelle." },
      { type: "scenario", situation: "Tu as continué la conversation après une bonne réponse et veux maintenant récupérer celle d'avant, pas la toute dernière.", reponse: "/copy 2", explication: "L'argument numérique cible une réponse plus ancienne." },
      { type: "scenario", situation: "Tu veux réutiliser rapidement un extrait de code que Claude vient de te donner.", reponse: "/copy", explication: "Utile pour récupérer un extrait de code sans sélection à la souris." },
      { type: "scenario", situation: "Un collègue te demande comment récupérer une réponse sans faire de sélection manuelle à la souris.", reponse: "/copy", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux copier une réponse donnée trois échanges plus tôt.", reponse: "/copy 3", explication: "Le chiffre indique de combien de réponses il faut remonter." }
    ]
  },
  {
    id: 33, categorie: "Utilitaires", commande: "/export", titre: "Exporter la conversation",
    intro: "/export enregistre toute la conversation dans un fichier texte ou Markdown, pour la conserver ou la partager.",
    exemple: { terminal: "/export compte-rendu.md", sortie: "Conversation exportée : compte-rendu.md" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux garder une trace complète de la conversation dans un fichier, pour la relire plus tard ou la partager. Que tapes-tu ?", options: ["/export compte-rendu.md", "/copy", "/context", "/tasks"], reponse: 0, explication: "/export enregistre toute la conversation, contrairement à /copy qui ne copie qu'une réponse." },
      { type: "saisie", consigne: "Tape la commande qui enregistre la conversation dans un fichier texte ou Markdown.", reponse: "/export", explication: "/export — optionnellement suivie d'un nom de fichier." },
      { type: "scenario", situation: "Tu veux garder une trace écrite complète d'une session de travail importante.", reponse: "/export", explication: "L'export conserve l'intégralité de la conversation." },
      { type: "scenario", situation: "Un collègue veut relire toute une conversation sans avoir accès à ta session Claude Code.", reponse: "/export", explication: "Le fichier exporté peut être partagé facilement." },
      { type: "scenario", situation: "Tu veux archiver une décision technique prise pendant une conversation, avec tout son contexte.", reponse: "/export", explication: "Archiver le contexte complet, pas juste la conclusion." },
      { type: "scenario", situation: "Tu veux partager le compte-rendu d'une session de debug avec le reste de l'équipe.", reponse: "/export", explication: "Un fichier partageable facilement par email ou messagerie." },
      { type: "scenario", situation: "Tu veux nommer précisément le fichier de sortie en l'exportant.", reponse: "/export compte-rendu.md", explication: "Le nom de fichier peut être précisé directement après la commande." }
    ]
  },

  /* --- Workflows spécialisés ------------------------------------------- */
  {
    id: 34, categorie: "Workflows spécialisés", commande: "/deep-research", titre: "Recherche approfondie",
    intro: "/deep-research lance plusieurs recherches web en parallèle sur un sujet, récupère les sources, et synthétise un rapport complet.",
    exemple: { terminal: "/deep-research dernières avancées en sécurité IA", sortie: "Recherche en cours sur plusieurs sources en parallèle...\nRapport de synthèse généré avec sources citées." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux un rapport complet et sourcé sur un sujet, basé sur plusieurs recherches web croisées, pas juste une réponse rapide. Que tapes-tu ?", options: ["/deep-research dernières avancées en sécurité IA", "/context", "/plan", "/claude-api"], reponse: 0, explication: "/deep-research croise plusieurs sources et produit un rapport structuré." },
      { type: "saisie", consigne: "Tape la commande qui lance des recherches web en parallèle et synthétise un rapport complet.", reponse: "/deep-research", explication: "/deep-research — suivie du sujet à explorer." },
      { type: "scenario", situation: "Tu prépares une présentation et as besoin d'un état des lieux complet et sourcé sur un sujet précis.", reponse: "/deep-research", explication: "Le rapport final cite ses sources, utile pour une présentation." },
      { type: "scenario", situation: "Une simple réponse rapide ne suffit pas, tu veux croiser plusieurs sources sur un sujet complexe.", reponse: "/deep-research", explication: "C'est justement la valeur ajoutée de /deep-research face à une question simple." },
      { type: "scenario", situation: "Un collègue te demande une synthèse fiable et sourcée avant une décision importante.", reponse: "/deep-research", explication: "Des sources citées appuient une décision importante." },
      { type: "scenario", situation: "Tu veux un rapport structuré plutôt qu'une réponse brute à une question de recherche.", reponse: "/deep-research", explication: "Le résultat est une synthèse structurée, pas une réponse brute." },
      { type: "scenario", situation: "Tu veux que Claude explore plusieurs sources en parallèle plutôt qu'une seule réponse générale.", reponse: "/deep-research", explication: "La recherche en parallèle est au cœur du fonctionnement de la commande." }
    ]
  },
  {
    id: 35, categorie: "Workflows spécialisés", commande: "/loop", titre: "Répéter une tâche",
    intro: "/loop exécute un prompt ou une commande de façon répétée à intervalle régulier — utile pour surveiller quelque chose ou répéter une vérification dans le temps.",
    exemple: { terminal: "/loop 5m /tasks", sortie: "Boucle démarrée : /tasks sera exécutée toutes les 5 minutes." },
    optionsDetail: [
      { option: "[intervalle]", effet: "Fréquence de répétition, ex. 5m (5 minutes), 1h (1 heure)" },
      { option: "[commande]", effet: "Le prompt ou la commande à répéter à chaque intervalle" }
    ],
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux que Claude vérifie automatiquement l'état d'un déploiement toutes les 5 minutes, sans le retaper à chaque fois. Que tapes-tu ?", options: ["/loop 5m vérifie le déploiement", "/tasks", "/background", "/subtask"], reponse: 0, explication: "/loop répète automatiquement une vérification à intervalle régulier." },
      { type: "saisie", consigne: "Tape la commande qui exécute un prompt de façon répétée à intervalle régulier.", reponse: "/loop", explication: "/loop — suivie d'un intervalle puis de la commande à répéter." },
      { type: "scenario", situation: "Tu veux qu'une vérification soit relancée automatiquement toutes les 5 minutes sans intervention.", reponse: "/loop 5m", explication: "L'intervalle se précise directement après la commande." },
      { type: "scenario", situation: "Tu surveilles le résultat d'un déploiement en cours et veux un contrôle répété automatique.", reponse: "/loop", explication: "La surveillance répétée est le cas d'usage principal de /loop." },
      { type: "scenario", situation: "Un collègue te demande comment éviter de retaper la même commande de vérification toutes les X minutes.", reponse: "/loop", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux automatiser une tâche récurrente de surveillance sans script externe.", reponse: "/loop", explication: "/loop remplace un script de surveillance externe." },
      { type: "scenario", situation: "Tu veux relancer un prompt toutes les heures pendant que tu fais autre chose.", reponse: "/loop 1h", explication: "L'intervalle peut aussi être exprimé en heures." }
    ]
  },
  {
    id: 36, categorie: "Workflows spécialisés", commande: "/dataviz", titre: "Créer des visualisations",
    intro: "/dataviz charge les bonnes pratiques de design (palettes, composition, accessibilité) pour créer des graphiques, tableaux de bord ou visualisations de données cohérents.",
    exemple: { terminal: "/dataviz", sortie: "Guide de design chargé : palettes de couleurs, règles de composition, bonnes pratiques d'accessibilité." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu vas demander à Claude de créer un graphique et tu veux qu'il applique de bonnes pratiques de design plutôt qu'un rendu générique. Que tapes-tu avant ?", options: ["/dataviz", "/design-sync", "/context", "/plan"], reponse: 0, explication: "/dataviz charge spécifiquement les bonnes pratiques de visualisation de données." },
      { type: "saisie", consigne: "Tape la commande qui charge les bonnes pratiques de design pour créer des graphiques et tableaux de bord.", reponse: "/dataviz", explication: "/dataviz — aucun argument nécessaire." },
      { type: "scenario", situation: "Tu vas demander la création d'un tableau de bord et veux un rendu visuellement cohérent, pas générique.", reponse: "/dataviz", explication: "/dataviz pose les bases d'un rendu soigné avant de commencer." },
      { type: "scenario", situation: "Tu veux que les couleurs d'un graphique respectent de bonnes pratiques d'accessibilité.", reponse: "/dataviz", explication: "L'accessibilité fait partie des bonnes pratiques chargées." },
      { type: "scenario", situation: "Un collègue trouve que ses graphiques générés se ressemblent tous et manquent de soin.", reponse: "/dataviz", explication: "/dataviz aide justement à sortir du rendu générique par défaut." },
      { type: "scenario", situation: "Tu prépares plusieurs visualisations pour un rapport et veux un style cohérent entre elles.", reponse: "/dataviz", explication: "Les mêmes bonnes pratiques s'appliquent à toutes les visualisations créées ensuite." },
      { type: "scenario", situation: "Tu veux éviter les couleurs et compositions par défaut génériques avant de créer un graphique.", reponse: "/dataviz", explication: "C'est précisément l'objectif de charger /dataviz au préalable." }
    ]
  },
  {
    id: 37, categorie: "Workflows spécialisés", commande: "/autofix-pr", titre: "Corriger une PR automatiquement",
    intro: "/autofix-pr surveille une pull request en cours et pousse automatiquement des corrections si les tests d'intégration continue échouent.",
    exemple: { terminal: "/autofix-pr corrige les tests en échec", sortie: "Surveillance de la PR activée.\nEn cas d'échec CI, une correction sera proposée et poussée automatiquement." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu viens d'ouvrir une pull request et tu veux que Claude corrige automatiquement les tests s'ils échouent en intégration continue. Que tapes-tu ?", options: ["/autofix-pr corrige les tests en échec", "/code-review", "/verify", "/loop"], reponse: 0, explication: "/autofix-pr surveille la PR et corrige automatiquement en cas d'échec CI." },
      { type: "saisie", consigne: "Tape la commande qui surveille une pull request et pousse des corrections automatiques si les tests échouent.", reponse: "/autofix-pr", explication: "/autofix-pr — reste active tant que la PR n'est pas fusionnée." },
      { type: "scenario", situation: "Tu viens d'ouvrir une pull request et veux que les échecs de tests soient corrigés automatiquement.", reponse: "/autofix-pr", explication: "C'est exactement l'usage prévu de cette commande." },
      { type: "scenario", situation: "Tu ne veux pas repasser manuellement à chaque échec de la CI sur cette pull request.", reponse: "/autofix-pr", explication: "L'automatisation évite les allers-retours manuels." },
      { type: "scenario", situation: "Un collègue part en congé et veut que sa PR se corrige toute seule en cas d'échec de test.", reponse: "/autofix-pr", explication: "La surveillance continue même en son absence." },
      { type: "scenario", situation: "Tu veux une surveillance automatique d'une PR plutôt qu'une vérification ponctuelle avec /code-review.", reponse: "/autofix-pr", explication: "/autofix-pr surveille en continu, contrairement à une revue ponctuelle." },
      { type: "scenario", situation: "Tu veux que les corrections soient poussées automatiquement dès qu'un test casse sur ta pull request.", reponse: "/autofix-pr", explication: "Le push automatique de correctifs est au cœur de cette commande." }
    ]
  },
  {
    id: 38, categorie: "Workflows spécialisés", commande: "/design-sync", titre: "Synchroniser un design system",
    intro: "/design-sync synchronise un système de design React (composants, tokens) pour le réutiliser facilement d'une session à l'autre.",
    exemple: { terminal: "/design-sync", sortie: "Système de design détecté et synchronisé.\nComposants disponibles pour les prochaines sessions." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Ton projet a déjà un système de design React (boutons, couleurs, composants) et tu veux que Claude le réutilise dans les prochaines sessions. Que tapes-tu ?", options: ["/design-sync", "/dataviz", "/memory", "/init"], reponse: 0, explication: "/design-sync synchronise spécifiquement un système de design React réutilisable, contrairement à /init qui documente le projet en général." },
      { type: "saisie", consigne: "Tape la commande qui synchronise un système de design React pour le réutiliser d'une session à l'autre.", reponse: "/design-sync", explication: "/design-sync — aucun argument, la détection est automatique." },
      { type: "scenario", situation: "Ton équipe a déjà des composants React stylés et tu veux que Claude les réutilise plutôt que d'en recréer.", reponse: "/design-sync", explication: "Réutiliser l'existant évite de dupliquer des composants." },
      { type: "scenario", situation: "Tu remarques que Claude ne respecte pas toujours le design system existant du projet.", reponse: "/design-sync", explication: "La synchronisation rend le design system explicitement connu." },
      { type: "scenario", situation: "Un collègue te demande comment faire connaître les tokens de couleur du projet à Claude une bonne fois pour toutes.", reponse: "/design-sync", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux que les futures interfaces générées respectent automatiquement le style déjà en place.", reponse: "/design-sync", explication: "C'est le bénéfice principal de synchroniser le design system en amont." },
      { type: "scenario", situation: "Tu commences une nouvelle fonctionnalité et veux que Claude connaisse déjà tes composants existants.", reponse: "/design-sync", explication: "Synchroniser avant de commencer évite les redites." }
    ]
  },
  {
    id: 39, categorie: "Workflows spécialisés", commande: "/claude-api", titre: "Référence de l'API Claude",
    intro: "/claude-api charge la documentation de référence de l'API Claude, ou t'aide à migrer vers les Managed Agents. Le comportement dépend de l'argument utilisé.",
    exemple: { terminal: "/claude-api migrate", sortie: "Guide de migration chargé : étapes pour passer à la nouvelle version de l'API." },
    optionsDetail: [
      { option: "(aucun argument)", effet: "Charge la référence générale de l'API Claude (modèles, tarifs, paramètres)" },
      { option: "migrate", effet: "Charge un guide pour migrer vers une nouvelle version de l'API" },
      { option: "managed-agents-onboard", effet: "Aide à démarrer avec les Managed Agents (agents hébergés côté serveur)" }
    ],
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu développes une application qui utilise l'API Claude et tu as une question sur les modèles ou les tarifs disponibles. Que tapes-tu ?", options: ["/claude-api", "/context", "/mcp", "/config"], reponse: 0, explication: "Sans argument, /claude-api charge la référence générale de l'API." },
      { type: "saisie", consigne: "Tape la commande qui charge la documentation de référence de l'API Claude.", reponse: "/claude-api", explication: "/claude-api — avec ou sans argument selon le besoin." },
      { type: "scenario", situation: "Tu développes avec l'API Claude et as une question sur les modèles ou paramètres disponibles.", reponse: "/claude-api", explication: "La référence générale répond à ce type de question." },
      { type: "scenario", situation: "Une nouvelle version de l'API est sortie et tu veux savoir comment adapter ton code existant.", reponse: "/claude-api migrate", explication: "L'argument migrate charge spécifiquement le guide de migration." },
      { type: "scenario", situation: "Tu veux découvrir comment démarrer avec les Managed Agents (agents hébergés).", reponse: "/claude-api managed-agents-onboard", explication: "Cet argument précis cible l'onboarding Managed Agents." },
      { type: "scenario", situation: "Un collègue développeur backend a une question générale sur l'utilisation de l'API Claude.", reponse: "/claude-api", explication: "La réponse générale sans argument couvre ce cas." },
      { type: "scenario", situation: "Tu veux migrer ton intégration existante vers la dernière version de l'API.", reponse: "/claude-api migrate", explication: "Le guide de migration est justement fait pour ce cas." }
    ]
  },

  /* --- Configuration avancée --------------------------------------------- */
  {
    id: 40, categorie: "Configuration avancée", commande: "/memory", titre: "Gérer la mémoire",
    intro: "/memory édite les fichiers mémoire du projet ou active/désactive la mémoire automatique (les informations que Claude retient entre les sessions).",
    exemple: { terminal: "/memory", sortie: "Fichiers mémoire ouverts pour édition.\nMémoire automatique : activée" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux modifier directement ce que Claude a retenu sur ton projet entre les sessions. Que tapes-tu ?", options: ["/memory", "/init", "/config", "/context"], reponse: 0, explication: "/memory édite le contenu retenu, /init crée le fichier de documentation initial du projet." },
      { type: "saisie", consigne: "Tape la commande qui édite les fichiers mémoire ou active/désactive la mémoire automatique.", reponse: "/memory", explication: "/memory — aucun argument nécessaire pour ouvrir l'éditeur." },
      { type: "scenario", situation: "Tu remarques une information incorrecte que Claude a retenue sur ton projet et veux la corriger.", reponse: "/memory", explication: "L'édition directe des fichiers mémoire permet de corriger une erreur." },
      { type: "scenario", situation: "Tu veux désactiver la mémoire automatique pour une session sensible, sans rien garder après.", reponse: "/memory", explication: "/memory permet aussi d'activer/désactiver la mémoire automatique." },
      { type: "scenario", situation: "Un collègue veut savoir ce que Claude a retenu de ses précédentes conversations sur le projet.", reponse: "/memory", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux ajouter manuellement une information importante à retenir pour les prochaines sessions.", reponse: "/memory", explication: "L'édition manuelle permet d'ajouter une information précise." },
      { type: "scenario", situation: "Tu veux vérifier si la mémoire automatique est activée avant de partager des informations sensibles.", reponse: "/memory", explication: "Un contrôle avant de partager une information sensible est un bon réflexe." }
    ]
  },
  {
    id: 41, categorie: "Configuration avancée", commande: "/add-dir", titre: "Ajouter un dossier de travail",
    intro: "/add-dir autorise l'accès à un dossier de travail supplémentaire pendant la session, sans changer de dossier principal.",
    exemple: { terminal: "/add-dir ../bibliotheque-partagee", sortie: "Accès autorisé à : ../bibliotheque-partagee\nLe dossier principal reste inchangé." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu travailles dans un dossier mais as aussi besoin d'accéder à une bibliothèque partagée située ailleurs. Que tapes-tu ?", options: ["/add-dir ../bibliotheque-partagee", "/cd ../bibliotheque-partagee", "/permissions", "/init"], reponse: 0, explication: "/add-dir ajoute un accès sans changer de dossier principal, contrairement à /cd qui déplace toute la session." },
      { type: "saisie", consigne: "Tape la commande qui autorise l'accès à un dossier de travail supplémentaire.", reponse: "/add-dir", explication: "/add-dir — suivie du chemin du dossier à autoriser." },
      { type: "scenario", situation: "Tu as besoin de lire des fichiers d'un dossier partagé, sans quitter ton dossier de projet principal.", reponse: "/add-dir", explication: "L'accès s'ajoute sans déplacer le dossier principal." },
      { type: "scenario", situation: "Un module externe utilisé par ton projet vit dans un autre dossier que tu dois pouvoir consulter.", reponse: "/add-dir", explication: "Cas d'usage typique de /add-dir." },
      { type: "scenario", situation: "Un collègue te demande comment donner accès à un second dossier sans changer de contexte principal.", reponse: "/add-dir", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux travailler sur plusieurs répertoires en une seule session, sans va-et-vient.", reponse: "/add-dir", explication: "Plusieurs /add-dir peuvent cumuler plusieurs accès." },
      { type: "scenario", situation: "Tu as besoin de comparer des fichiers entre ton projet et un dossier de référence externe.", reponse: "/add-dir", explication: "L'accès aux deux dossiers en simultané permet cette comparaison." }
    ]
  },
  {
    id: 42, categorie: "Configuration avancée", commande: "/cd", titre: "Changer de dossier",
    intro: "/cd change le dossier de travail principal de la session en cours.",
    exemple: { terminal: "/cd ../autre-projet", sortie: "Dossier de travail changé : ../autre-projet" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux complètement changer de projet en cours de session, en déplaçant le dossier de travail principal. Que tapes-tu ?", options: ["/cd ../autre-projet", "/add-dir ../autre-projet", "/init", "/config"], reponse: 0, explication: "/cd déplace tout le dossier de travail principal, contrairement à /add-dir qui ajoute juste un accès supplémentaire." },
      { type: "saisie", consigne: "Tape la commande qui change le dossier de travail principal de la session.", reponse: "/cd", explication: "/cd — suivie du chemin du nouveau dossier de travail." },
      { type: "scenario", situation: "Tu veux complètement changer de projet en cours de session, pas juste ajouter un accès.", reponse: "/cd", explication: "/cd déplace tout, contrairement à /add-dir qui ne fait qu'ajouter." },
      { type: "scenario", situation: "Tu as fini de travailler sur un projet et veux basculer entièrement sur un autre dossier.", reponse: "/cd", explication: "Un vrai changement de dossier principal, pas un ajout." },
      { type: "scenario", situation: "Un collègue te demande comment changer le dossier principal sans redémarrer Claude Code.", reponse: "/cd", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu t'es trompé de dossier au lancement et veux corriger ça sans redémarrer.", reponse: "/cd", explication: "/cd corrige ça immédiatement, sans redémarrage nécessaire." },
      { type: "scenario", situation: "Tu veux que toute la session (pas juste un accès annexe) se déplace vers un autre répertoire.", reponse: "/cd", explication: "C'est la différence clé entre /cd et /add-dir." }
    ]
  },
  {
    id: 43, categorie: "Configuration avancée", commande: "/mcp", titre: "Gérer les serveurs MCP",
    intro: "/mcp gère les connexions aux serveurs MCP (Model Context Protocol), c'est-à-dire les outils externes connectés à Claude Code (Gmail, Notion, navigateur...).",
    exemple: { terminal: "/mcp", sortie: "Serveurs MCP configurés :\n✓ notion (connecté)\n✓ gmail (connecté)\n✗ vercel (authentification requise)" },
    optionsDetail: [
      { option: "(aucun argument)", effet: "Affiche l'état de tous les serveurs MCP configurés" },
      { option: "reconnect", effet: "Relance la connexion à tous les serveurs MCP" },
      { option: "enable <serveur>", effet: "Active un serveur MCP précédemment désactivé" },
      { option: "disable <serveur>", effet: "Désactive un serveur MCP pour la session" }
    ],
    disponible: true,
    exercices: [
      { type: "qcm", question: "Un outil connecté (Notion) ne répond plus depuis une coupure réseau, et tu veux relancer toutes les connexions. Que tapes-tu ?", options: ["/mcp reconnect", "/mcp disable notion", "/login", "/config"], reponse: 0, explication: "reconnect relance la connexion à tous les serveurs MCP configurés." },
      { type: "saisie", consigne: "Tape la commande qui affiche l'état de tous les serveurs MCP configurés.", reponse: "/mcp", explication: "/mcp — sans argument, affiche l'état de chaque serveur." },
      { type: "scenario", situation: "Un outil connecté (Notion) ne répond plus après une coupure réseau, tu veux relancer toutes les connexions.", reponse: "/mcp reconnect", explication: "reconnect est fait précisément pour ce cas." },
      { type: "scenario", situation: "Tu veux désactiver temporairement un outil dont tu n'as pas besoin pour cette session.", reponse: "/mcp disable notion", explication: "disable désactive un serveur précis sans toucher aux autres." },
      { type: "scenario", situation: "Tu veux vérifier rapidement quels outils externes sont actuellement connectés.", reponse: "/mcp", explication: "L'affichage par défaut donne l'état de tous les serveurs." },
      { type: "scenario", situation: "Tu as réglé un souci d'authentification sur un outil et veux le réactiver.", reponse: "/mcp enable vercel", explication: "enable réactive un serveur précédemment désactivé." },
      { type: "scenario", situation: "Un collègue te demande comment voir la liste des intégrations actives dans sa session.", reponse: "/mcp", explication: "La réponse directe à lui donner." }
    ]
  },
  {
    id: 44, categorie: "Configuration avancée", commande: "/keybindings", titre: "Personnaliser les raccourcis",
    intro: "/keybindings ouvre le fichier de configuration des raccourcis clavier, pour les personnaliser selon tes préférences.",
    exemple: { terminal: "/keybindings", sortie: "Fichier .claude/keybindings.json ouvert dans ton éditeur." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux changer un raccourci clavier qui rentre en conflit avec un autre outil que tu utilises. Que tapes-tu ?", options: ["/keybindings", "/config", "/color", "/memory"], reponse: 0, explication: "/keybindings ouvre le fichier dédié aux raccourcis clavier." },
      { type: "saisie", consigne: "Tape la commande qui ouvre le fichier de configuration des raccourcis clavier.", reponse: "/keybindings", explication: "/keybindings — aucun argument nécessaire." },
      { type: "scenario", situation: "Un raccourci clavier de Claude Code entre en conflit avec un autre outil que tu utilises.", reponse: "/keybindings", explication: "Le fichier ouvert permet de modifier ou retirer le raccourci en conflit." },
      { type: "scenario", situation: "Tu veux ajouter un raccourci personnalisé pour une action que tu répètes souvent.", reponse: "/keybindings", explication: "L'ajout de raccourcis personnalisés se fait dans ce fichier." },
      { type: "scenario", situation: "Un collègue habitué à d'autres raccourcis veut adapter ceux de Claude Code à ses habitudes.", reponse: "/keybindings", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux voir la liste actuelle des raccourcis clavier configurés.", reponse: "/keybindings", explication: "Le fichier ouvert liste tous les raccourcis actuels." },
      { type: "scenario", situation: "Tu configures ton environnement de travail et veux personnaliser les touches avant de commencer.", reponse: "/keybindings", explication: "Un bon réflexe de configuration initiale." }
    ]
  },
  {
    id: 45, categorie: "Configuration avancée", commande: "/color", titre: "Changer la couleur de l'interface",
    intro: "/color change la couleur de la barre de saisie de l'interface. Purement une préférence visuelle, sans effet sur le fonctionnement.",
    exemple: { terminal: "/color blue", sortie: "Couleur de la barre de saisie changée : bleu." },
    optionsDetail: [
      { option: "[couleur]", effet: "Applique la couleur choisie (ex. blue, green, purple...)" },
      { option: "default", effet: "Revient à la couleur par défaut de l'interface" }
    ],
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux personnaliser visuellement la couleur de la barre de saisie de Claude Code. Que tapes-tu ?", options: ["/color blue", "/config theme=blue", "/keybindings", "/focus"], reponse: 0, explication: "/color change spécifiquement la couleur de la barre de saisie." },
      { type: "saisie", consigne: "Tape la commande qui change la couleur de la barre de saisie.", reponse: "/color", explication: "/color — suivie du nom de la couleur souhaitée." },
      { type: "scenario", situation: "Tu veux personnaliser visuellement la couleur de la barre de saisie pour t'y retrouver plus facilement.", reponse: "/color", explication: "Une personnalisation purement visuelle." },
      { type: "scenario", situation: "Tu travailles sur plusieurs projets en parallèle et veux une couleur différente par session pour les distinguer.", reponse: "/color blue", explication: "Une couleur par session aide à s'y retrouver visuellement." },
      { type: "scenario", situation: "Tu as changé la couleur par curiosité et veux revenir à la couleur d'origine.", reponse: "/color default", explication: "L'argument default restaure la couleur d'origine." },
      { type: "scenario", situation: "Un collègue te demande comment personnaliser l'apparence de sa barre de saisie.", reponse: "/color", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux essayer une couleur différente juste pour changer un peu l'interface.", reponse: "/color", explication: "Aucun impact fonctionnel, juste une préférence visuelle." }
    ]
  },
  {
    id: 46, categorie: "Configuration avancée", commande: "/effort", titre: "Régler l'effort de raisonnement",
    intro: "/effort définit le niveau de réflexion de Claude pour la session : plus le niveau est élevé, plus les réponses demandent de temps mais gagnent en profondeur de raisonnement.",
    exemple: { terminal: "/effort high", sortie: "Niveau d'effort réglé sur high.\nLes prochaines réponses utiliseront davantage de raisonnement." },
    optionsDetail: [
      { option: "low", effet: "Réponses rapides, raisonnement minimal — pour des tâches simples" },
      { option: "medium", effet: "Niveau par défaut, bon compromis" },
      { option: "high", effet: "Raisonnement plus poussé, pour des tâches qui le demandent" },
      { option: "xhigh", effet: "Raisonnement très approfondi, plus lent" },
      { option: "max", effet: "Le maximum de raisonnement disponible, réservé aux cas les plus complexes" }
    ],
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu attaques un problème d'architecture complexe et veux que Claude y consacre le plus de réflexion possible. Que tapes-tu ?", options: ["/effort max", "/model opus", "/plan", "/effort low"], reponse: 0, explication: "/effort règle le niveau de raisonnement, indépendamment du modèle choisi avec /model." },
      { type: "saisie", consigne: "Tape la commande qui définit le niveau de raisonnement de Claude pour la session.", reponse: "/effort", explication: "/effort — suivie d'un niveau : low, medium, high, xhigh ou max." },
      { type: "scenario", situation: "Tu attaques un problème d'architecture complexe et veux le maximum de réflexion possible.", reponse: "/effort max", explication: "max est réservé aux cas les plus complexes." },
      { type: "scenario", situation: "Tu enchaînes des petites tâches répétitives et veux des réponses plus rapides, sans trop de réflexion inutile.", reponse: "/effort low", explication: "low privilégie la vitesse pour des tâches simples." },
      { type: "scenario", situation: "Tu veux un bon compromis entre rapidité et qualité pour ton usage quotidien.", reponse: "/effort medium", explication: "medium est le niveau par défaut, équilibré." },
      { type: "scenario", situation: "Une tâche est un peu plus délicate que d'habitude, sans être extrême, tu veux un cran de plus que la normale.", reponse: "/effort high", explication: "high offre un raisonnement plus poussé sans aller jusqu'au maximum." },
      { type: "scenario", situation: "Un collègue te demande comment faire réfléchir Claude plus longtemps avant de répondre.", reponse: "/effort", explication: "La réponse directe à lui donner." }
    ]
  },

  /* --- Sécurité et qualité ---------------------------------------------- */
  {
    id: 47, categorie: "Sécurité et qualité", commande: "/security-review", titre: "Revue de sécurité",
    intro: "/security-review analyse le diff des changements en cours à la recherche de failles de sécurité (injections, fuites de données, vulnérabilités connues).",
    exemple: { terminal: "/security-review", sortie: "Analyse de sécurité :\n1. [critique] api/login.js:15 — mot de passe loggé en clair" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu viens de terminer une fonctionnalité qui touche à l'authentification et tu veux vérifier qu'il n'y a pas de faille de sécurité avant de livrer. Que tapes-tu ?", options: ["/security-review", "/code-review", "/verify", "/permissions"], reponse: 0, explication: "/security-review est spécialisée dans la recherche de failles de sécurité, contrairement à /code-review qui est plus généraliste." },
      { type: "saisie", consigne: "Tape la commande qui analyse le diff à la recherche de failles de sécurité.", reponse: "/security-review", explication: "/security-review — aucun argument nécessaire." },
      { type: "scenario", situation: "Tu viens de coder une fonctionnalité qui touche à l'authentification et veux vérifier l'absence de faille avant de livrer.", reponse: "/security-review", explication: "Un contrôle ciblé sécurité avant de livrer du code sensible." },
      { type: "scenario", situation: "Un audit de sécurité approche et tu veux d'abord passer en revue toi-même le code récemment modifié.", reponse: "/security-review", explication: "Anticiper l'audit avec une auto-vérification." },
      { type: "scenario", situation: "Tu manipules des données sensibles (mots de passe, tokens) et veux une vérification ciblée sécurité.", reponse: "/security-review", explication: "Exactement le type de risque que traque /security-review." },
      { type: "scenario", situation: "Un collègue a codé une fonctionnalité de paiement et tu veux la faire analyser spécifiquement pour des failles.", reponse: "/security-review", explication: "Le code de paiement est un candidat naturel pour cette revue ciblée." },
      { type: "scenario", situation: "Tu veux une analyse plus poussée sur la sécurité que ce que fait une revue de code générale.", reponse: "/security-review", explication: "/security-review va plus loin que /code-review sur ce point précis." }
    ]
  },
  {
    id: 48, categorie: "Sécurité et qualité", commande: "/verify", titre: "Vérifier un changement",
    intro: "/verify lance des vérifications (tests, scripts de contrôle) pour confirmer qu'un changement fonctionne comme prévu.",
    exemple: { terminal: "/verify", sortie: "Vérifications en cours...\n✓ Tests unitaires : 42/42 passés\n✓ Build : succès" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu viens de terminer un changement et tu veux confirmer qu'il fonctionne réellement avant de le considérer terminé. Que tapes-tu ?", options: ["/verify", "/diff", "/code-review", "/security-review"], reponse: 0, explication: "/verify exécute des vérifications concrètes (tests, build), /diff se contente d'afficher les fichiers modifiés." },
      { type: "saisie", consigne: "Tape la commande qui lance des vérifications pour confirmer qu'un changement fonctionne comme prévu.", reponse: "/verify", explication: "/verify — aucun argument nécessaire." },
      { type: "scenario", situation: "Tu viens de terminer un changement et veux confirmer qu'il fonctionne réellement, pas juste le relire.", reponse: "/verify", explication: "/verify exécute des vérifications concrètes, au-delà d'une simple relecture." },
      { type: "scenario", situation: "Tu veux t'assurer que les tests passent toujours avant de livrer ta fonctionnalité.", reponse: "/verify", explication: "L'exécution des tests fait partie des vérifications lancées." },
      { type: "scenario", situation: "Un collègue te demande si son changement fonctionne vraiment ou s'il l'a juste relu visuellement.", reponse: "/verify", explication: "/verify apporte une preuve concrète, pas juste une relecture." },
      { type: "scenario", situation: "Tu veux une confirmation concrète (tests, build) plutôt qu'une simple relecture du code.", reponse: "/verify", explication: "C'est exactement la différence avec /diff ou /code-review." },
      { type: "scenario", situation: "Avant de marquer une tâche terminée, tu veux la preuve qu'elle fonctionne effectivement.", reponse: "/verify", explication: "Un bon réflexe avant de clore une tâche." }
    ]
  },

  /* --- Ligne de commande (hors session) ---------------------------------- */
  {
    id: 49, categorie: "Ligne de commande (CLI)", commande: "claude -p", titre: "Requête en une fois",
    intro: "claude -p exécute une requête en une seule fois (mode script) puis quitte immédiatement — pratique pour automatiser une tâche dans un pipeline ou un script shell.",
    exemple: { terminal: "claude -p \"corrige les erreurs de lint\"", sortie: "[Claude traite la requête puis quitte]\nCorrection effectuée. Processus terminé." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux intégrer Claude Code dans un script d'automatisation qui exécute une tâche puis continue sans rester ouvert. Que tapes-tu ?", options: ["claude -p \"tâche\"", "claude -c", "claude -r", "claude update"], reponse: 0, explication: "-p exécute puis quitte immédiatement, idéal pour un script." },
      { type: "saisie", consigne: "Tape la commande qui exécute une requête en une fois (mode script) puis quitte immédiatement.", reponse: "claude -p", explication: "claude -p — suivie de la requête entre guillemets." },
      { type: "scenario", situation: "Tu veux intégrer Claude Code dans un script d'automatisation qui ne doit pas rester ouvert après.", reponse: "claude -p", explication: "Le processus se termine automatiquement après la réponse." },
      { type: "scenario", situation: "Tu veux exécuter une tâche ponctuelle depuis un pipeline CI sans session interactive.", reponse: "claude -p", explication: "Pas de session interactive à gérer, parfait pour la CI." },
      { type: "scenario", situation: "Un collègue développeur veut appeler Claude Code depuis un cron job planifié.", reponse: "claude -p", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu veux une réponse rapide en une commande, sans ouvrir de session persistante.", reponse: "claude -p", explication: "Une seule commande, une seule réponse, puis fin du processus." },
      { type: "scenario", situation: "Tu automatises une vérification quotidienne via un script shell qui appelle Claude Code.", reponse: "claude -p", explication: "Le mode script est fait pour ce genre d'automatisation." }
    ]
  },
  {
    id: 50, categorie: "Ligne de commande (CLI)", commande: "claude -c", titre: "Continuer la dernière session",
    intro: "claude -c continue la conversation la plus récente, directement depuis le terminal, sans passer par un sélecteur.",
    exemple: { terminal: "claude -c", sortie: "Reprise de la conversation la plus récente..." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu viens de fermer ton terminal en pleine tâche et tu veux reprendre exactement la dernière conversation, le plus vite possible. Que tapes-tu ?", options: ["claude -c", "claude -r", "/resume", "claude -p"], reponse: 0, explication: "claude -c reprend directement la toute dernière conversation sans sélecteur, contrairement à /resume qui affiche une liste." },
      { type: "saisie", consigne: "Tape la commande terminal qui continue la conversation la plus récente.", reponse: "claude -c", explication: "claude -c — aucun argument nécessaire." },
      { type: "scenario", situation: "Tu viens de fermer ton terminal en pleine tâche et veux reprendre la dernière conversation le plus vite possible.", reponse: "claude -c", explication: "Le raccourci le plus direct pour la toute dernière conversation." },
      { type: "scenario", situation: "Tu sais que c'est forcément la toute dernière conversation que tu veux reprendre, pas besoin de choisir dans une liste.", reponse: "claude -c", explication: "Pas de sélecteur à parcourir, contrairement à /resume." },
      { type: "scenario", situation: "Un collègue te demande le raccourci le plus rapide pour reprendre là où il en était hier.", reponse: "claude -c", explication: "La réponse directe à lui donner." },
      { type: "scenario", situation: "Tu redémarres ton ordinateur et veux immédiatement reprendre ta session de travail précédente.", reponse: "claude -c", explication: "Un simple claude -c suffit après redémarrage." },
      { type: "scenario", situation: "Tu veux éviter le sélecteur de /resume car tu sais déjà quelle conversation reprendre.", reponse: "claude -c", explication: "C'est justement l'avantage de -c sur /resume." }
    ]
  },
  {
    id: 51, categorie: "Ligne de commande (CLI)", commande: "claude -r", titre: "Reprendre une session précise",
    intro: "claude -r reprend une session précise à partir de son identifiant, pratique quand tu veux cibler directement une conversation particulière sans passer par le sélecteur.",
    exemple: { terminal: "claude -r \"a1b2c3\"", sortie: "Reprise de la session a1b2c3..." },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu connais déjà l'identifiant exact d'une ancienne session et veux la reprendre directement, sans sélecteur. Que tapes-tu ?", options: ["claude -r \"a1b2c3\"", "claude -c", "/resume", "claude -p"], reponse: 0, explication: "-r cible directement une session via son identifiant." },
      { type: "saisie", consigne: "Tape la commande terminal qui reprend une session précise à partir de son identifiant.", reponse: "claude -r", explication: "claude -r — suivie de l'identifiant de session." },
      { type: "scenario", situation: "Tu connais déjà l'identifiant exact d'une ancienne session et veux la reprendre directement.", reponse: "claude -r", explication: "L'identifiant permet de cibler précisément, sans liste à parcourir." },
      { type: "scenario", situation: "Un script doit rouvrir une session spécifique de façon automatisée, sans sélection manuelle.", reponse: "claude -r", explication: "Idéal pour un usage scripté avec un identifiant connu." },
      { type: "scenario", situation: "Tu as noté l'identifiant d'une conversation importante et veux y revenir précisément.", reponse: "claude -r", explication: "L'identifiant noté permet un retour direct et précis." },
      { type: "scenario", situation: "Un collègue te partage l'identifiant d'une session à reprendre pour l'aider à déboguer.", reponse: "claude -r", explication: "C'est la commande adaptée pour reprendre sa session précise." },
      { type: "scenario", situation: "Tu veux cibler une session précise parmi plusieurs, sans passer par la liste de /resume.", reponse: "claude -r", explication: "L'identifiant évite de parcourir la liste complète." }
    ]
  },
  {
    id: 52, categorie: "Ligne de commande (CLI)", commande: "claude update", titre: "Mettre à jour Claude Code",
    intro: "claude update installe la dernière version de Claude Code.",
    exemple: { terminal: "claude update", sortie: "Vérification de la dernière version...\n✓ Mise à jour installée : v2.4.1" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux t'assurer d'avoir la toute dernière version de Claude Code installée avant de commencer une session importante. Que tapes-tu ?", options: ["claude update", "claude doctor", "/config", "claude -p"], reponse: 0, explication: "claude update installe la dernière version, claude doctor diagnostique l'installation existante." },
      { type: "saisie", consigne: "Tape la commande terminal qui installe la dernière version de Claude Code.", reponse: "claude update", explication: "claude update — aucun argument nécessaire." },
      { type: "scenario", situation: "Tu veux t'assurer d'avoir la toute dernière version avant une session de travail importante.", reponse: "claude update", explication: "Un contrôle systématique avant une tâche importante." },
      { type: "scenario", situation: "Une nouvelle fonctionnalité annoncée n'apparaît pas chez toi, tu soupçonnes une version obsolète.", reponse: "claude update", explication: "Mettre à jour résout souvent ce type de décalage." },
      { type: "scenario", situation: "Un collègue te recommande de mettre à jour avant de signaler un bug potentiellement déjà corrigé.", reponse: "claude update", explication: "Bon réflexe avant de signaler un bug." },
      { type: "scenario", situation: "Tu configures un nouvel ordinateur et veux t'assurer d'avoir la version la plus récente installée.", reponse: "claude update", explication: "Un contrôle de routine sur une nouvelle installation." },
      { type: "scenario", situation: "Tu veux profiter des dernières améliorations de performance de l'outil.", reponse: "claude update", explication: "Les améliorations arrivent avec les mises à jour." }
    ]
  },
  {
    id: 53, categorie: "Ligne de commande (CLI)", commande: "claude mcp", titre: "Configurer MCP hors session",
    intro: "claude mcp configure les serveurs MCP directement en ligne de commande, hors session — pratique pour une configuration initiale ou scriptée, sans ouvrir Claude Code.",
    exemple: { terminal: "claude mcp list", sortie: "Serveurs MCP configurés :\nnotion, gmail, vercel" },
    disponible: true,
    exercices: [
      { type: "qcm", question: "Tu veux configurer les serveurs MCP avant même d'ouvrir une session Claude Code, par exemple dans un script d'installation. Que tapes-tu ?", options: ["claude mcp", "/mcp", "claude -p", "claude update"], reponse: 0, explication: "claude mcp fonctionne en ligne de commande, hors session, contrairement à /mcp qui s'utilise dans une conversation déjà ouverte." },
      { type: "saisie", consigne: "Tape la commande terminal qui configure les serveurs MCP hors session.", reponse: "claude mcp", explication: "claude mcp — utilisable sans ouvrir de session Claude Code." },
      { type: "scenario", situation: "Tu veux configurer les serveurs MCP avant même d'ouvrir une session, dans un script d'installation.", reponse: "claude mcp", explication: "Idéal pour une configuration scriptée en amont." },
      { type: "scenario", situation: "Tu prépares l'environnement d'un nouveau collègue et veux préconfigurer les outils MCP à l'avance.", reponse: "claude mcp", explication: "La configuration hors session facilite l'onboarding." },
      { type: "scenario", situation: "Tu veux vérifier la configuration MCP directement depuis le terminal, sans lancer de session.", reponse: "claude mcp", explication: "Pas besoin d'ouvrir Claude Code pour vérifier la config." },
      { type: "scenario", situation: "Un script d'installation automatisé doit configurer les intégrations MCP sans interaction.", reponse: "claude mcp", explication: "Adapté à un usage scripté et non-interactif." },
      { type: "scenario", situation: "Tu veux gérer les serveurs MCP au niveau système, pas juste pour une session en cours.", reponse: "claude mcp", explication: "La configuration se fait au niveau système, pas seulement pour la session." }
    ]
  }
];
