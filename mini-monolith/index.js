require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Fichiers statiques (CSS, images, etc.)
app.use(express.static('public'));

// Middleware pour lire les données de formulaire
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Accueil' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'À propos' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  console.log(`Message de ${name} : ${message}`);
  res.send(`<h1>Merci pour votre message, ${name} !</h1>`);
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page non trouvée' });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
