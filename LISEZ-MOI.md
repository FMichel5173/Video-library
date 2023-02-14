# Concept
Cette appli a pour but de gérer une vidéothèque afin de toujours savoir à qui vous avez prêté des DVDs ou autre.

# Installation et utilisation
Clonez ce repo, entrez-y
Exécutez la commande `npm run setup`
NB : Pour lancer le serveur backend, vous avez besoin d'un fichier d'environnement avec les informations de connexion à la base de données. Vous trouverez un modèle dans backend/.env.sample

# Commandes disponibles
setup : Initialisation du frontend et du backend, ainsi que de tous les outils
migrate : Exécute le script de migration de la base de données
dev : Démarre les deux serveurs (frontend + backend) dans un terminal
dev-front : Démarre le serveur React frontend
dev-back : Démarre le serveur Express backend
lint : Exécute les outils de validation et refuse le code non propre (sera exécuté à chaque commit)
fix : Corrige les erreurs de linter (exécutez-le si lint grogne sur votre code !)

# FAQ
bOutils
Concurrently : Permet d'exécuter plusieurs commandes en même temps dans la même CLI
Husky : Permet d'exécuter des commandes spécifiques qui déclenchent des événements git
Vite : Alternative à Create-React-App, empaquette moins d'outils pour une expérience plus fluide
ESLint : Outil de qualité de code, assure que les règles choisies seront respectées
Prettier : Outil de qualité de code également, se concentre sur la charte graphique
_ Airbnb Standard_ : L'un des standards les plus connus, même s'il n'est pas officiellement lié à ES/JS
Nodemon : Permet de redémarrer le serveur à chaque mise à jour d'un fichier .js
Mysql2
Axios
react-icons
