Destinations de rêve - Projet Web XHTML, CSS, JavaScript, TypeScript et XML

Projet universitaire réalisé dans le cadre de la Licence Informatique de l'Université de Poitiers.

Ce projet consiste à développer un site web présentant quatre destinations touristiques à travers des fiches pays détaillées : Grèce, Japon, Namibie et Turquie. Il combine XHTML, CSS, JavaScript, TypeScript, XML et DTD afin de mettre en pratique les notions abordées en développement web au cours de la formation.

Aperçu du projet

Le site permet de :

Consulter des fiches détaillées sur quatre destinations.
Découvrir des informations géographiques, démographiques et historiques.
Accéder à une fiche choisie aléatoirement.
Utiliser un formulaire d'inscription validé dynamiquement.
Répondre à un questionnaire de voyage.
Basculer entre un style principal et un style alternatif.
Afficher automatiquement la date et l'heure sur les différentes pages.
Fonctionnalités
Fiches pays

Chaque fiche contient :

Conditions d'entrée dans le pays
Superficie
Population
Langues parlées
Sites touristiques
Figures historiques

Pays disponibles :

🇬🇷 Grèce
🇯🇵 Japon
🇳🇦 Namibie
🇹🇷 Turquie
Fonctionnalités dynamiques
Affichage dynamique de la date et de l'heure
Changement de thème via JavaScript
Navigation aléatoire vers une fiche pays
Validation des formulaires
Messages d'erreur personnalisés
Manipulation du DOM
Formulaires

Le projet propose :

Un formulaire d'inscription
Un questionnaire de voyage

Les vérifications portent notamment sur :

Nom et prénom
Adresse électronique
Âge minimum requis
Acceptation des conditions d'utilisation
Technologies utilisées
Développement Web
XHTML
CSS3
JavaScript
TypeScript
Structuration des données
XML
DTD
Structure du projet
SITE_Barry_Delice-3/
│
├── Code/
│   ├── Javascript/
│   │   ├── index.html
│   │   └── projet.js
│   └── Typescript/
│       ├── index.html
│       ├── package-lock.json
│       ├── package.json
│       ├── projet.ts
│       └── tsconfig.json
│
├── Content/
│   ├── Collection/
│   │   ├── grece.xhtml
│   │   ├── japon.xhtml
│   │   ├── Namibie.xhtml
│   │   ├── turquie.xhtml
│   │   └── index.html
│   │
│   ├── Forms/
│   │   ├── Formulaire1.xhtml
│   │   ├── formulaire.xhtml
│   │   └── index.html
│   │
│   └── Miscellaneous/
│       ├── authors.xhtml
│       ├── autoeval.xhtml
│       ├── sources.xhtml
│       └── index.html
│
├── Images/
├── Styles/
├── XML/
│   ├── collection.dtd
│   ├── greece.xml
│   ├── japon.xml
│   ├── Namibie.xml
│   └── turquie.xml
│
├── arbres des XML/
│   ├── arbre-grece.pdf
│   ├── arbre-japon.pdf
│   ├── arbre-turquie.pdf
│   └── arbre_namibie.pdf
│
├── index.html
├── index.xhtml
└── README.md

Exécution du projet

Aucune installation n'est nécessaire.

Ouvrir simplement :
index.xhtml
dans un navigateur web.

Développement TypeScript

Le code JavaScript du projet est généré à partir du fichier TypeScript :

Code/Typescript/projet.ts

Pour recompiler le projet :
Dans le terminal:
cd Code/Typescript
npm install
npx tsc

Le fichier généré est :
Code/Javascript/projet.js
Répartition du travail

Projet réalisé en binôme.

Travail réalisé en commun
Développement JavaScript / TypeScript
Validation des formulaires
Structure XML et DTD
Page d'accueil
Fonctionnalités dynamiques du site
Recherche des sources et documentation
Contributions individuelles
Salimatou Barry
Fiche Grèce
Fiche Namibie
Feuilles de style :
grece.css
namibie.css
Elif Delice
Fiche Japon
Fiche Turquie
Feuilles de style :
japon.css
turquie.css

Chaque fiche pays indique également son auteur principal directement dans la page concernée.

Le squelette initial du projet a été fourni dans le cadre des travaux pratiques.

Compétences mises en pratique

Ce projet a permis de mettre en œuvre :

Création de pages XHTML
Mise en forme avec CSS
Validation de formulaires en JavaScript
Manipulation du DOM
Gestion d'événements
Utilisation de TypeScript et compilation vers JavaScript
Création et validation de fichiers XML à l'aide d'une DTD
Organisation d'un site web multipages
Sources et crédits

Les images et contenus utilisés dans le projet proviennent de différentes sources publiques et institutionnelles.

La liste détaillée des sources et crédits est disponible dans :
Content/Miscellaneous/sources.xhtml

Certaines ressources restent soumises à vérification concernant leurs conditions exactes de réutilisation.

Cadre académique

Projet réalisé dans le cadre de la Licence Informatique - Université de Poitiers.

Projet de mise en pratique des technologies XHTML, CSS, JavaScript, TypeScript, XML et DTD dans le cadre du développement d'un site web multipages.