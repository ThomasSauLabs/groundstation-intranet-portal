# Groundstation

Outils personnels de préparation et de restauration d'environnements, ensuite
adaptés pour le portail de support de Lumina. Le nom vient de mes premiers
essais autour de la télémétrie. Les anciennes étapes du projet portent des
noms inspirés du système solaire.

## Contenu

- `config/` : environnements, profils et proxy de développement.
- `scripts/` : vérification locale et inspection des connecteurs.
- `web/` : ancienne maquette de présentation.
- `examples/helios-status/` : console de suivi alimentée par un instantané.
- `docs/` : préparation, restauration et migration.

## Démarrage local

Copier `.env.example` vers `.env`, puis lancer `docker compose up -d`.
Le proxy répond sur `http://localhost:8080` ; le service de test sur le port 5678.
Pour inspecter le connecteur choisi : `python scripts/describe-environment.py recette`.
Cette commande n'ouvre aucune connexion.

## Documentation

- [Poste de développement](docs/setup.md)
- [Environnements](docs/environments.md)
- [Reprise d'un environnement](docs/replay.md)
- [Migration du portail](docs/migration.md)

L'adresse du portail est `http://luminaintranet.tech`. Son accès réseau est
distinct des interfaces locales. Ce dépôt n'est pas une source de déploiement
du service de production.
