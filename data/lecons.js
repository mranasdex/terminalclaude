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
  { id: 16, categorie: "Travail parallèle et délégation", commande: "/tasks", titre: "Suivre les tâches en cours", intro: "/tasks liste les travaux en arrière-plan et les sous-agents actifs.", disponible: false },
  { id: 17, categorie: "Travail parallèle et délégation", commande: "/background", titre: "Passer en arrière-plan", intro: "/background détache la session actuelle pour qu'elle continue de travailler en tâche de fond.", disponible: false },
  { id: 18, categorie: "Travail parallèle et délégation", commande: "/fork", titre: "Explorer une autre piste", intro: "/fork copie la conversation dans une nouvelle session en arrière-plan pour tester une direction différente.", disponible: false },
  { id: 19, categorie: "Travail parallèle et délégation", commande: "/branch", titre: "Créer une branche de conversation", intro: "/branch crée une branche pour explorer une approche alternative sans perdre le fil principal.", disponible: false },
  { id: 20, categorie: "Travail parallèle et délégation", commande: "/batch", titre: "Orchestrer un gros changement", intro: "/batch répartit un changement à grande échelle sur plusieurs agents travaillant en parallèle.", disponible: false },
  { id: 21, categorie: "Travail parallèle et délégation", commande: "/subtask", titre: "Déléguer une tâche annexe", intro: "/subtask confie une tâche à un sous-agent qui revient ensuite avec le résultat.", disponible: false },

  /* --- Dépannage -------------------------------------------------------- */
  { id: 22, categorie: "Dépannage", commande: "/doctor", titre: "Diagnostiquer l'installation", intro: "/doctor vérifie l'installation de Claude Code et corrige automatiquement les soucis courants.", disponible: false },
  { id: 23, categorie: "Dépannage", commande: "/debug", titre: "Activer les journaux détaillés", intro: "/debug active des logs détaillés pour comprendre un comportement inattendu.", disponible: false },
  { id: 24, categorie: "Dépannage", commande: "/bug", titre: "Signaler un bug", intro: "/bug envoie un rapport de bug à l'équipe Anthropic, avec le contexte de la conversation.", disponible: false },
  { id: 25, categorie: "Dépannage", commande: "/feedback", titre: "Donner un avis produit", intro: "/feedback envoie un retour sur Claude Code à Anthropic.", disponible: false },
  { id: 26, categorie: "Dépannage", commande: "/heapdump", titre: "Diagnostiquer la mémoire", intro: "/heapdump écrit un instantané mémoire sur le disque pour diagnostiquer un problème de consommation.", disponible: false },

  /* --- Compte et intégrations -------------------------------------------- */
  { id: 27, categorie: "Compte et intégrations", commande: "/login", titre: "Se connecter", intro: "/login connecte la session à ton compte Anthropic.", disponible: false },
  { id: 28, categorie: "Compte et intégrations", commande: "/logout", titre: "Se déconnecter", intro: "/logout déconnecte la session en cours du compte Anthropic.", disponible: false },
  { id: 29, categorie: "Compte et intégrations", commande: "/desktop", titre: "Continuer sur l'appli Desktop", intro: "/desktop transfère la session en cours vers l'application Claude Code Desktop.", disponible: false },
  { id: 30, categorie: "Compte et intégrations", commande: "/install-github-app", titre: "Installer l'app GitHub", intro: "/install-github-app installe l'application GitHub Claude pour la revue automatique de pull requests.", disponible: false },
  { id: 31, categorie: "Compte et intégrations", commande: "/install-slack-app", titre: "Installer Claude sur Slack", intro: "/install-slack-app installe Claude dans un espace de travail Slack.", disponible: false },

  /* --- Utilitaires -------------------------------------------------------- */
  { id: 32, categorie: "Utilitaires", commande: "/copy", titre: "Copier une réponse", intro: "/copy copie la dernière réponse (ou une réponse précédente) dans le presse-papiers.", disponible: false },
  { id: 33, categorie: "Utilitaires", commande: "/export", titre: "Exporter la conversation", intro: "/export enregistre la conversation dans un fichier texte ou Markdown.", disponible: false },

  /* --- Workflows spécialisés ------------------------------------------- */
  { id: 34, categorie: "Workflows spécialisés", commande: "/deep-research", titre: "Recherche approfondie", intro: "/deep-research lance plusieurs recherches web en parallèle et synthétise un rapport complet.", disponible: false },
  { id: 35, categorie: "Workflows spécialisés", commande: "/loop", titre: "Répéter une tâche", intro: "/loop exécute un prompt ou une commande de façon répétée à intervalle régulier.", disponible: false },
  { id: 36, categorie: "Workflows spécialisés", commande: "/dataviz", titre: "Créer des visualisations", intro: "/dataviz charge les bonnes pratiques de design pour construire des graphiques et tableaux de bord.", disponible: false },
  { id: 37, categorie: "Workflows spécialisés", commande: "/autofix-pr", titre: "Corriger une PR automatiquement", intro: "/autofix-pr surveille une pull request et pousse des corrections automatiquement si les tests échouent.", disponible: false },
  { id: 38, categorie: "Workflows spécialisés", commande: "/design-sync", titre: "Synchroniser un design system", intro: "/design-sync réutilise un système de design React d'une session à l'autre.", disponible: false },
  { id: 39, categorie: "Workflows spécialisés", commande: "/claude-api", titre: "Référence de l'API Claude", intro: "/claude-api charge la documentation de l'API Claude ou aide à migrer vers les Managed Agents.", disponible: false },

  /* --- Configuration avancée --------------------------------------------- */
  { id: 40, categorie: "Configuration avancée", commande: "/memory", titre: "Gérer la mémoire", intro: "/memory édite les fichiers mémoire ou active/désactive la mémoire automatique.", disponible: false },
  { id: 41, categorie: "Configuration avancée", commande: "/add-dir", titre: "Ajouter un dossier de travail", intro: "/add-dir autorise l'accès à un dossier supplémentaire pendant la session.", disponible: false },
  { id: 42, categorie: "Configuration avancée", commande: "/cd", titre: "Changer de dossier", intro: "/cd change le dossier de travail de la session en cours.", disponible: false },
  { id: 43, categorie: "Configuration avancée", commande: "/mcp", titre: "Gérer les serveurs MCP", intro: "/mcp gère les connexions aux serveurs MCP, c'est-à-dire les outils externes connectés à Claude Code.", disponible: false },
  { id: 44, categorie: "Configuration avancée", commande: "/keybindings", titre: "Personnaliser les raccourcis", intro: "/keybindings ouvre le fichier de configuration des raccourcis clavier.", disponible: false },
  { id: 45, categorie: "Configuration avancée", commande: "/color", titre: "Changer la couleur de l'interface", intro: "/color change la couleur de la barre de saisie.", disponible: false },
  { id: 46, categorie: "Configuration avancée", commande: "/effort", titre: "Régler l'effort de raisonnement", intro: "/effort définit le niveau de réflexion de Claude : low, medium, high, xhigh ou max.", disponible: false },

  /* --- Sécurité et qualité ---------------------------------------------- */
  { id: 47, categorie: "Sécurité et qualité", commande: "/security-review", titre: "Revue de sécurité", intro: "/security-review analyse le diff à la recherche de failles de sécurité.", disponible: false },
  { id: 48, categorie: "Sécurité et qualité", commande: "/verify", titre: "Vérifier un changement", intro: "/verify lance des vérifications pour confirmer qu'un changement fonctionne comme prévu.", disponible: false },

  /* --- Ligne de commande (hors session) ---------------------------------- */
  { id: 49, categorie: "Ligne de commande (CLI)", commande: "claude -p", titre: "Requête en une fois", intro: "claude -p exécute une requête et quitte immédiatement, pratique dans un script.", disponible: false },
  { id: 50, categorie: "Ligne de commande (CLI)", commande: "claude -c", titre: "Continuer la dernière session", intro: "claude -c continue la conversation la plus récente, directement depuis le terminal.", disponible: false },
  { id: 51, categorie: "Ligne de commande (CLI)", commande: "claude -r", titre: "Reprendre une session précise", intro: "claude -r reprend une session précise à partir de son identifiant.", disponible: false },
  { id: 52, categorie: "Ligne de commande (CLI)", commande: "claude update", titre: "Mettre à jour Claude Code", intro: "claude update installe la dernière version de Claude Code.", disponible: false },
  { id: 53, categorie: "Ligne de commande (CLI)", commande: "claude mcp", titre: "Configurer MCP hors session", intro: "claude mcp configure les serveurs MCP directement en ligne de commande, sans ouvrir de session.", disponible: false }
];
