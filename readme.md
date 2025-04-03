### 📄 `README.md`

```markdown
# Mini Monolith – Node.js + Express + EJS

Ce projet est un exemple **simple d'application web monolithique** réalisée avec **Node.js**, **Express** et **EJS**.  
Il illustre les bases d’une structure MVC légère, avec du rendu côté serveur.

---

## 🚀 Fonctionnalités

- ✅ Architecture monolithique (tout en un)
- ✅ Routage Express
- ✅ Pages dynamiques avec EJS
- ✅ Formulaire de contact simple (non connecté à une base de données)
- ✅ Page 404 personnalisée
- ✅ Prise en charge des fichiers statiques (CSS)

---

## 📁 Structure

```
mini-monolith/
├── index.js             # Serveur principal
├── .env                 # Variables d’environnement
├── views/               # Templates EJS (HTML côté serveur)
│   ├── index.ejs
│   ├── about.ejs
│   ├── contact.ejs
│   └── 404.ejs
├── public/              # Fichiers statiques (CSS, images…)
│   └── style.css
└── package.json         # Dépendances du projet
```

---

## ⚙️ Installation

```bash
git clone <url-du-projet>
cd mini-monolith
npm install
```

Crée un fichier `.env` :
```env
PORT=3000
```

---

## ▶️ Lancer le serveur

```bash
npm start
```

Puis va sur [http://localhost:3000](http://localhost:3000)

---

## ✉️ Routes disponibles

| Route        | Description                     |
|--------------|---------------------------------|
| `/`          | Page d'accueil                  |
| `/about`     | Page "À propos"                 |
| `/contact`   | Formulaire de contact           |
| `*`          | Page 404 si route non trouvée   |

---

## 🛠️ Dépendances principales

- express
- ejs
- dotenv

---

## 📚 Objectif 

Ce projet montre comment construire une **application web simple et complète** en architecture **monolithique**.

