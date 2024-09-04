// Charger le module express pour créer une application web

const express = require("express");

const app = express();

// Configurer l'application

/* ************************************************************************* */

// Gestion du CORS : Pourquoi le code actuel est commenté et dois-je définir des origines spécifiques autorisées pour mon projet ?

// CORS (Cross-Origin Resource Sharing) est un mécanisme de sécurité dans les navigateurs web qui bloque les requêtes provenant d'un domaine différent de celui du serveur.
// Tu peux trouver la ligne magique suivante dans les forums :

// app.use(cors());

// Il ne faut PAS faire ça : ce code utilise le module `cors` pour permettre toutes les origines, ce qui peut poser des problèmes de sécurité.
// Pour ce modèle pédagogique, le code CORS est commenté pour montrer la nécessité de définir des origines spécifiques autorisées.

// Pour activer CORS et définir les origines autorisées :
// 1. Installer le module `cors` dans le répertoire du serveur.
// 2. Décommenter la ligne `const cors = require("cors");`.
// 3. Décommenter la section `app.use(cors({ origin: [...] }))`.
// 4. Assure-toi d'avoir uniquement les URLs dans le tableau avec des domaines depuis lesquels tu veux autoriser les requêtes.
// Par exemple : ["http://monsite.com", "http://autre-domaine.com"]

/*
const cors = require("cors");

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL, // garde celui-ci après avoir vérifié sa valeur dans `server/.env`
      "http://monsite.com",
      "http://autre-domaine.com",
    ]
  })
);
*/

/* ************************************************************************* */

// Analyse des requêtes : Comprendre l'objectif de cette partie

// L'analyse des requêtes est nécessaire pour extraire les données envoyées par le client dans une requête HTTP.
// Par exemple, pour accéder au corps d'une requête POST.
// Le code actuel contient différentes options d'analyse en commentaires pour démontrer les différentes manières d'extraire les données.

// 1. `express.json()` : Analyse les requêtes avec des données JSON.
// 2. `express.urlencoded()` : Analyse les requêtes avec des données encodées en URL.
// 3. `express.text()` : Analyse les requêtes avec des données en texte brut.
// 4. `express.raw()` : Analyse les requêtes avec des données binaires brutes.

// Décommente une ou plusieurs de ces options en fonction du format des données envoyées par ton client :

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.text());
// app.use(express.raw());

/* ************************************************************************* */

// Cookies : Pourquoi et comment utiliser le module `cookie-parser` ?

// Les cookies sont de petites données stockées dans le navigateur du client. Ils sont souvent utilisés pour stocker des informations spécifiques à l'utilisateur ou des données de session.

// Le module `cookie-parser` nous permet d'analyser et de gérer les cookies dans notre application Express. Il analyse l'en-tête `Cookie` dans les requêtes entrantes et remplit `req.cookies` avec un objet contenant les cookies.

// Pour utiliser `cookie-parser`, assure-toi qu'il est installé dans `server/package.json` (tu peux avoir besoin de l'installer séparément) :
// npm install cookie-parser

// Ensuite, charge le module et utilise-le comme middleware dans ton application Express :

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// Une fois `cookie-parser` configuré, tu peux lire et définir des cookies dans tes routes.
// Par exemple, pour définir un cookie nommé "username" avec la valeur "john" :
// res.cookie("username", "john");

// Pour lire la valeur d'un cookie nommé "username" :
// const username = req.cookies.username;

/* ************************************************************************* */

// Importer le routeur de l'API
const apiRouter = require("./routers/api/router");

// Monter le routeur de l'API sous l'endpoint "/api"
app.use("/api", apiRouter);

/* ************************************************************************* */

// Configuration prête pour la production : À quoi sert-elle et quand dois-je l'activer ?

// Le code inclut des sections commentées pour configurer un environnement de production où le client et le serveur sont exécutés à partir du même processus.

// À quoi ça sert :
// - Servir les fichiers statiques du client depuis le serveur, ce qui est utile lors de la construction d'une application monopage avec React.
// - Rediriger les requêtes non traitées (par exemple, toutes les requêtes ne correspondant pas à une route API définie) vers l'index.html du client. Cela permet au client de gérer le routage côté client.

// Quand l'activer :
// Cela dépend de ton projet et de sa structure. Si tu développes une application monopage, tu activeras ces sections lorsque tu seras prêt à déployer ton projet en production.

// Pour activer la configuration de production :
// 1. Décommenter les lignes relatives à la gestion des fichiers statiques et à la redirection des requêtes non traitées.
// 2. Assure-toi que le `reactBuildPath` pointe vers le bon répertoire où se trouvent les artefacts de build de ton client.

/*
const path = require("path");

const reactBuildPath = path.join(__dirname, "/../../client/dist");
const publicFolderPath = path.join(__dirname, "/../public");

// Servir les ressources React

app.use(express.static(reactBuildPath));

// Servir les ressources du serveur

app.get("*.*", express.static(publicFolderPath, { maxAge: "1y" }));

// Rediriger les requêtes non traitées vers le fichier index de React

app.get("*", (_, res) => {
  res.sendFile(path.join(reactBuildPath, "/index.html"));
});
*/

/* ************************************************************************* */

// Middleware pour la journalisation des erreurs (Décommenter pour activer)
// Important : Le middleware de gestion des erreurs doit être défini en dernier, après les autres app.use() et les appels de routes.

/*
// Définir une fonction middleware pour journaliser les erreurs
const logErrors = (err, req, res, next) => {
  // Journaliser l'erreur dans la console pour les besoins de débogage
  console.error(err);
  console.error("sur la requête :", req.method, req.path);

  // Passer l'erreur au middleware suivant dans la pile
  next(err);
};

// Monter globalement le middleware logErrors
app.use(logErrors);
*/

/* ************************************************************************* */

module.exports = app;
