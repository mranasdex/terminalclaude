/*
 * Contenu pédagogique du Sentier Claude.
 * Chaque leçon = { id, commande, titre, intro, exemple, exercices, disponible, final }
 * Les leçons avec disponible:false n'ont pas encore d'exercices écrits (verrouillées dans le sentier).
 */

const LECONS = [
  {
    id: 1,
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
    commande: "/code-review",
    titre: "Revoir son code",
    intro: "/code-review analyse le code modifié (ou une pull request) pour trouver des bugs et des pistes d'amélioration, avec plusieurs niveaux de profondeur.",
    exemple: {
      terminal: "/code-review high",
      sortie: "Revue de code (niveau: high)\n1. [correctness] src/auth.js:42 — token non vérifié avant usage"
    },
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
        explication: "/code-review — sans argument, elle lance une revue de niveau standard."
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
    commande: null,
    titre: "Défi final",
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
  }
];
