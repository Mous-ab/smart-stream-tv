# Smart Stream TV

Plateforme web de TV en direct (IPTV) : un panneau latéral liste les chaînes, une zone principale affiche la prévisualisation de la chaîne sélectionnée et le programme en cours.

Projet individuel réalisé dans le cadre du sprint JavaScript (Youcode / Simplon), version accompagnée sur 5 jours : JavaScript Vanilla ES6+, modules ES, données locales, Tailwind CSS.

**Démo en ligne :** [URL_DU_DEPLOIEMENT](URL_DU_DEPLOIEMENT)
**Dépôt :** https://github.com/Mous-ab/smart-stream-tv

## Fonctionnalités

- Liste de 52 chaînes générée dynamiquement depuis `data/data.js` (numéro, logo, nom, catégorie).
- Sélection d'une chaîne : mise en surbrillance (`bg-purple-600 text-white`) et mise à jour de la zone principale (image, nom, catégorie).
- Programme en cours (EPG) : titre, horaires et barre de progression (bonus du brief).
- Recherche instantanée par nom ou par numéro de chaîne, insensible à la casse, sans rechargement de la page.
- Message « Aucune chaîne trouvée » quand la recherche ne donne aucun résultat.
- Mémorisation de la dernière chaîne regardée avec LocalStorage, restaurée après actualisation de la page.
- Interface responsive, mobile-first : sur mobile la prévisualisation passe au-dessus de la liste, sur desktop le panneau est à gauche.

## Technologies

- HTML5
- JavaScript Vanilla ES6+ (modules `import` / `export`, `.map()`, `.forEach()`, `.filter()`, `.find()`, déstructuration, spread, fonctions fléchées)
- Tailwind CSS v4 (classes utilitaires, compilées avec le CLI)
- Git / GitHub (branches par fonctionnalité, Pull Requests, Conventional Commits)
- Jira (suivi des tâches)

## Structure du projet

```
smart-stream-tv/
├── index.html          Document principal
├── data/
│   └── data.js         Catalogue des chaînes (export channelsData)
├── css/
│   ├── style.css       Entrée Tailwind
│   └── output.css      CSS compilé (versionné pour le déploiement)
├── js/
│   ├── app.js          Point d'entrée : orchestration
│   ├── ui.js           Rendu de la liste, sélection, prévisualisation
│   └── search.js       Moteur de recherche en direct
├── smart-stream-icon.svg
├── smart-stream-logo.svg
└── package.json
```

## Installation et lancement

Prérequis : Node.js et un serveur local (extension Live Server de VS Code, par exemple). Les modules ES ne fonctionnent pas en ouvrant `index.html` directement (`file://`).

```bash
git clone https://github.com/Mous-ab/smart-stream-tv.git
cd smart-stream-tv
npm install
npm run dev
```

`npm run dev` lance la compilation Tailwind en mode surveillance (`css/style.css` vers `css/output.css`). Ouvrez ensuite `index.html` avec Live Server.

## Organisation du code

| Fichier | Responsabilité |
|---|---|
| `data/data.js` | Données uniquement : tableau `channelsData` exporté |
| `js/ui.js` | Tout ce qui touche au DOM : création des éléments, rendu de la liste, surbrillance, prévisualisation |
| `js/search.js` | `initSearch` : écoute de l'événement `input`, filtrage avec `.filter()` + `.includes()` + `.toLowerCase()`, puis nouveau rendu |
| `js/app.js` | Importe les modules, branche les événements, restaure la dernière chaîne depuis LocalStorage |

Le gestionnaire de clic (`onChannelClick`) est défini dans `app.js` et passé en paramètre aux fonctions de `ui.js` et `search.js`. Ainsi, ces modules n'ont pas besoin de se connaître entre eux.

## Workflow Git

- `main` : version stable, déployée.
- `develop` : branche d'intégration.
- Une branche par fonctionnalité (`feature/base-ui`, `feature/channel-data`, `feature/module-integration`, `feature/channel-rendering`, `feature/channel-selection`, `feature/live-search`, `feature/deployment`, ...).
- Chaque fonctionnalité est intégrée dans `develop` par une Pull Request, puis `develop` est fusionné dans `main` après la validation finale.
- Messages de commit au format Conventional Commits (`feat:`, `fix:`, `style:`, `docs:`, `chore:`).

## Choix et limites

- Version accompagnée : les données viennent d'un fichier local (`data.js`), il n'y a ni MockAPI ni appel réseau.
- Les chaînes, numéros et programmes sont fictifs (données de démonstration). Les images sont des placeholders (`placehold.co`).
- Non réalisé : lecteur vidéo (bonus 1), regroupement de la liste par catégories, tri.

## Auteur

Mahamat (GitHub : [Mous-ab](https://github.com/Mous-ab))