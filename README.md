# Portfolio de Tanga Boniface Andy

Portfolio statique en HTML, CSS et JavaScript, prêt à être publié sur GitHub Pages ou Vercel.

## Tester et construire le site

Utilisez Node.js 20 ou supérieur. Aucune dépendance externe n'est nécessaire pour la compilation.

```powershell
npm run build
```

Le site complet est généré dans `dist/`. Pour le prévisualiser localement :

```powershell
npx serve dist
```

## Publier sur GitHub Pages

1. Poussez le dépôt sur GitHub sur la branche `main`.
2. Dans **Settings > Pages**, sélectionnez **GitHub Actions** comme source de publication.
3. À chaque push sur `main`, le workflow `.github/workflows/deploy-pages.yml` construit le site et publie `dist/`. Vous pouvez aussi lancer le workflow manuellement depuis l'onglet **Actions**.
4. GitHub affiche l'adresse du site dans **Settings > Pages**, une fois le premier déploiement terminé.

## Déployer sur Vercel

Importez le dépôt dans Vercel en laissant **Root Directory** à la racine. La configuration `vercel.json` utilise le framework **Other**, exécute `npm run build` et publie le dossier `dist`.

Avec Vercel CLI :

```powershell
npm run build
npx vercel
```

Les images, le CV, les certificats et l'aperçu statique du projet African Shopping sont inclus dans la sortie publique. Le dossier de sortie est volontairement limité aux ressources du portfolio : les serveurs et données des applications des autres dossiers ne sont pas déployés avec ce site statique. Les aperçus des projets d'état civil et de restaurant sont affichés sous forme de captures d'écran.
