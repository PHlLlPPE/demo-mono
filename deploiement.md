

### 📄 `README.md` – Déploiement sur Coolify

```markdown
# 🚀 Déploiement de l'application monolithique sur Coolify

Ce document explique comment déployer une application **Node.js + Express + EJS** en **architecture monolithique** à l’aide de **Coolify**, une plateforme d’auto-hébergement open-source.

---

## 🧱 Prérequis

- Un VPS ou serveur avec Docker installé
- Coolify installé (via `curl`)
- Un compte GitHub avec le projet poussé
- Le port de l'application défini dans `.env` (ex : `PORT=3000`)
- Un script `start` dans le fichier `package.json` :
```json
"scripts": {
  "start": "node index.js"
}
```

---

## ⚙️ Étapes du déploiement

### 1. Lier le dépôt GitHub à Coolify

- Ouvrir l’interface Coolify (`https://<votre-ip>:3000`)
- Aller dans `Projects > New Application`
- Entrer l’URL du dépôt GitHub
- Sélectionner la branche `main`
- Base Directory : `/`
- Port : `3000`
- Ne pas cocher “Is it a static site?”
- Build Pack : `Nixpacks`

### 2. Configuration de l’application

- Install Command : `npm install`
- Start Command : `npm start`
- Ajouter si besoin :
```json
"engines": {
  "node": ">=18"
}
```
dans le fichier `package.json` pour aider Coolify à détecter l’environnement Node.js

### 3. Déploiement

- Cliquer sur **Deploy**
- Attendre que Coolify clone le dépôt, installe les dépendances et démarre l’application
- Si tout va bien, Coolify génère automatiquement un domaine en `.sslip.io`

---

## ✅ Résultat attendu

- L’application est accessible via une URL du type :  
  `https://nom.coolify.io` ou `https://ip-xxx-xxx-xxx.sslip.io`
- Le serveur Node.js sert les pages dynamiques EJS via Express
- La structure reste **100% monolithique** : tout est géré dans une seule app

---

## 🧪 Exemple de structure de projet

```
mini-monolith/
├── index.js
├── package.json
├── .env
├── .gitignore
├── views/
│   ├── index.ejs
│   ├── about.ejs
│   ├── contact.ejs
│   └── 404.ejs
├── public/
│   └── style.css
```

---
