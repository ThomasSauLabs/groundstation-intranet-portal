# Poste de développement

Prérequis : Docker, curl et Python 3 pour inspecter les profils.

Copier `.env.example` vers `.env`. Les valeurs de session sont fournies par
le coffre de l'équipe ; le fichier local ne doit pas être ajouté au dépôt.
Le service Docker répond avec une page de test, pas avec le portail interne.

## Présentations autonomes

Ouvrir `web/index.html` pour les anciens parcours de connexion.
Ouvrir `examples/helios-status/index.html` pour le suivi des services.
Ces démonstrations n'ouvrent pas de session sur l'intranet.

## Contexte proxy

Le VPN du bureau attribue des adresses dans `192.168.10.0/24` pendant les
sessions de développement. Certains journaux ne montrent que le proxy en entrée.
Lors d'un diagnostic, comparer la requête reçue par nginx avec la chaîne
`X-Forwarded-For` transmise au service amont. Ne pas conclure sur un contrôle
d'accès à partir d'une seule ligne de journal.
