# Destinations de rêve

Site web multipages présentant quatre destinations touristiques : **Grèce 🇬🇷, Japon 🇯🇵, Namibie 🇳🇦 et Turquie 🇹🇷**.

Projet universitaire de la **Licence Informatique – Université de Poitiers**, réalisé en binôme. Il met en pratique XHTML, CSS, JavaScript, TypeScript, XML et DTD.


---

## Fonctionnalités

### Fiches pays

Chaque fiche présente :

- les conditions d'entrée dans le pays ;
- la superficie et la population ;
- les langues parlées ;
- les sites touristiques ;
- les figures historiques.

### Comportement dynamique (JavaScript / TypeScript)

- Affichage automatique de la **date et de l'heure** sur toutes les pages.
- **Changement de thème** : style principal ou style alternatif.
- **Navigation aléatoire** vers une fiche pays.
- **Manipulation du DOM** et gestion d'événements.

### Formulaires

Deux formulaires, validés dynamiquement avec des **messages d'erreur personnalisés** :

| Formulaire | Rôle |
|---|---|
| Inscription | Création d'un compte |
| Questionnaire de voyage | Collecte des préférences de voyage |

Vérifications effectuées : nom et prénom, adresse électronique, âge minimum requis, acceptation des conditions d'utilisation.

---

## Technologies

| Catégorie | Technologies |
|---|---|
| Web | XHTML, CSS3, JavaScript, TypeScript |
| Structuration des données | XML, DTD |

---

## Structure du projet

```text
Destination-de-rêve/
├── Code/
│   ├── Javascript/
│   │   ├── index.html
│   │   └── projet.js            # généré depuis projet.ts
│   └── Typescript/
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       ├── projet.ts            # code source
│       └── tsconfig.json
│
├── Content/
│   ├── Collection/              # fiches pays
│   │   ├── grece.xhtml
│   │   ├── japon.xhtml
│   │   ├── Namibie.xhtml
│   │   ├── turquie.xhtml
│   │   └── index.html
│   ├── Forms/                   # formulaires
│   │   ├── Formulaire1.xhtml
│   │   ├── formulaire.xhtml
│   │   └── index.html
│   └── Miscellaneous/           # pages annexes
│       ├── authors.xhtml
│       ├── autoeval.xhtml
│       ├── sources.xhtml
│       └── index.html
│
├── Images/
├── Styles/
├── XML/
│   ├── collection.dtd           # DTD commune
│   ├── greece.xml
│   ├── japon.xml
│   ├── Namibie.xml
│   └── turquie.xml
│
├── arbres des XML/              # arbres des documents XML (PDF)
│   ├── arbre-grece.pdf
│   ├── arbre-japon.pdf
│   ├── arbre-turquie.pdf
│   └── arbre_namibie.pdf
│
├── index.html
├── index.xhtml                  # point d'entrée
└── README.md
```

---

## Lancer le projet

Aucune installation n'est nécessaire : ouvrir `index.xhtml` dans un navigateur web.

---

## Développement TypeScript

Le fichier `Code/Javascript/projet.js` est **généré** à partir de `Code/Typescript/projet.ts`. Il ne faut donc modifier que le fichier `.ts`.

Pour recompiler :

```bash
cd Code/Typescript
npm install
npx tsc
```

---

## Répartition du travail

### Travail commun

- Développement JavaScript / TypeScript
- Validation des formulaires
- Structure XML et DTD
- Page d'accueil
- Fonctionnalités dynamiques du site
- Recherche des sources et documentation

### Contributions individuelles

| Étudiante | Fiches | Feuilles de style |
|---|---|---|
| Salimatou Barry | Grèce, Namibie | `grece.css`, `namibie.css` |
| Elif Delice | Japon, Turquie | `japon.css`, `turquie.css` |

Chaque fiche pays indique aussi son auteur principal dans la page concernée.
Le squelette initial du projet a été fourni lors des travaux pratiques.

---

## Compétences mises en pratique

- Création de pages XHTML et mise en forme CSS
- Validation de formulaires en JavaScript
- Manipulation du DOM et gestion d'événements
- Utilisation de TypeScript et compilation vers JavaScript
- Création et validation de fichiers XML à l'aide d'une DTD
- Organisation d'un site web multipages

---

## Sources et crédits

Les images et contenus proviennent de sources publiques et institutionnelles. La liste détaillée est dans [`Content/Miscellaneous/sources.xhtml`](Content/Miscellaneous/sources.xhtml).

Les conditions exactes de réutilisation de certaines ressources restent à vérifier.