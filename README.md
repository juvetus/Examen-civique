# Application QCM - Examen civique

Application web simple (HTML/CSS/JS) pour t'entrainer a l'examen civique de naturalisation.

## Fonctions incluses

- Mode entrainement (toutes les questions melangees)
- Mode examen (40 questions, selectionnees depuis la banque)
- Minuteur configurable: par question (30 s), par examen (35 min), ou desactive
- Banque etendue: 100 questions organisees par theme (histoire, institutions, valeurs)
- Correction immediate avec explication
- Explication affichee dans un ton harmonise "examen officiel"
- Seuil de reussite configurable (60/70/75%) et affiche automatiquement en fin d examen
- Barre de progression
- Score en temps reel
- Historique des 5 dernieres tentatives (stocke dans le navigateur)

## Encodage

- Le projet force l'encodage UTF-8 via le fichier .editorconfig.

## Minuteur

- Tu peux choisir le type de minuteur avant de lancer le quiz.
- Mode par question: si le temps est ecoule, la question est comptee comme ratee et tu passes a la suivante.
- Mode par examen: le compteur est global, et l'examen se termine automatiquement quand le temps atteint 0.
- Le mode examen est calibre pour 40 questions en 35 minutes avec la banque actuelle de 100 questions.
- Le seuil de reussite est choisi avant le lancement (60/70/75%) puis affiche automatiquement sur le resultat final (score minimum a atteindre).

## Lancer l'application

Option 1 (simple):

1. Ouvre `index.html` dans ton navigateur.

Option 2 (conseille en local):

1. Depuis le dossier du projet, lance un serveur statique.
2. Exemple si tu as Node.js: `npx serve .`
3. Ouvre l'URL locale affichee (ex: http://localhost:3000).

## Personnaliser les questions

- Edite le fichier `questions.fr.js`.
- Chaque question suit ce format:

```js
{
  id: 1,
  theme: "histoire",
  question: "Texte de la question",
  options: ["A", "B", "C", "D"],
  answer: 0,
  explanation: "Pourquoi la bonne reponse est correcte"
}
```

- `answer` est l'index de la bonne option (0 = premiere reponse).
- `theme` peut etre `histoire`, `institutions` ou `valeurs`.

## Fichiers

- `index.html`: structure de la page
- `styles.css`: style et responsive mobile
- `questions.fr.js`: banque de questions
- `app.js`: logique du quiz
