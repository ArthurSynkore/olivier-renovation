# Comment ajouter des photos

## Réalisations (galerie du site)

1. Glissez vos photos dans le dossier `photos/realisations/`
   - Formats acceptés : `.jpg`, `.jpeg`, `.png`, `.webp`
   - Nommez-les de façon explicite, ex : `salon-blanc.jpg`, `facade-ravalement.jpg`
   - Le nom du fichier devient la légende dans la galerie (tirets → espaces)

2. Commitez et pushez :
   ```
   git add photos/
   git commit -m "ajout photos"
   git push
   ```

3. La GitHub Action se déclenche automatiquement et met à jour le site.
   Vos photos apparaissent dans la galerie **en ~1 minute**.

## Logo

1. Mettez votre logo dans `photos/logo.png` (ou .jpg, .svg)
2. Ouvrez `config.js` et renseignez :
   ```js
   logo: "photos/logo.png",
   ```
3. Commitez et pushez — le logo apparaît dans la barre de navigation.

## Taille recommandée

- **Réalisations** : 1200×800 px minimum, ratio 3:2 ou 4:3
- **Logo** : fond transparent (PNG), hauteur ~60px
