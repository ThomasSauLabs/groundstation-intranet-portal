# Environnements

`config/environments.json` associe un environnement à son profil.
Les chemins sont relatifs au fichier qui les contient.

`development` utilise les profils locaux de présentation.
`recette` utilise un connecteur HTTP ; la configuration de session est fournie
par les variables `INTRANET_URL`, `INTRANET_USERNAME` et `INTRANET_PASSWORD`.
Renseigner ces valeurs depuis le coffre de l'équipe dans le fichier local `.env`.

Les anciens profils de reprise restent consultables dans les versions du projet.
