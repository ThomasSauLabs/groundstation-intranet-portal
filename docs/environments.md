# Environnements

`config/environments.json` associe un environnement à son profil.
Les chemins sont relatifs au fichier qui les contient.

`development` reste la maquette autonome utilisée pour les présentations.
`recette` utilise le connecteur de session HTTP pour les essais de restauration
avec le portail support. Son profil porte le nom du poste qui a servi à la reprise.
Les paramètres de session sont rangés à part pour éviter de les dupliquer dans les profils.
