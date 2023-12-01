const express = require('express');
const cookieParser = require('cookie-parser');
var clc = require("cli-color");
const uuid = require('uuid');

const app = express();
const PORT = process.env.WEBPORT;

// Middleware pour utiliser cookie-parser
app.use(cookieParser());

// Middleware pour définir le cookie "country" à la première connexion
app.use((req, res, next) => {
  const userId = req.cookies.userId || uuid.v4(); // Utilise un identifiant unique pour chaque utilisateur
  const isFirstVisit = !req.cookies.userId;

  if (isFirstVisit) {
    // Définit le cookie "country" aléatoirement entre "sweden" et "belgium"
    const randomCountry = Math.random() < 0.5 ? 'sweden' : 'belgium';
    res.cookie('country', randomCountry, { maxAge: 900000, httpOnly: true });
    res.cookie('userId', userId, { maxAge: 900000, httpOnly: true });
  }

  next();
});

// Route principale
app.get('/', (req, res) => {
  // Vérifie si le cookie "country" est égal à "russia"
  if (req.cookies.country === 'russia') {
    if(!req.cookies.password) return res.sendFile(__dirname + "/html/nosuperpassword.html");
    if(req.cookies.password == 'VzNsQzBtM19UMF9yMzRsMXR5') return res.sendFile(__dirname + "/html/wrong.html");
    if(req.cookies.password != 'W3lC0m3_T0_r34l1ty') return res.sendFile(__dirname + "/html/no.html");

    res.sendFile(__dirname + "/html/yes.html");
  } else {
    res.sendFile(__dirname + "/html/no.html");
  }
});

app.get('/*', (req, res) => {
  res.status(404).json({error: 404, msg: "Nice try, but no"});
});

app.listen(PORT, () => {
  console.log(clc.green(`[✓] Web Server has confirmed status`));
});
