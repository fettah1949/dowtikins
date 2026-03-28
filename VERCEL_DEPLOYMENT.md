# Déploiement sur Vercel - Guide Complet

## 📋 Prérequis

- Compte Vercel (gratuit)
- Compte GitHub avec le projet pushé
- Le build local fonctionne (`npm run build`)

---

## 🚀 Méthode 1: Déploiement automatique via Vercel Dashboard

### Étape 1: Connecter Vercel à GitHub

1. Allez sur [https://vercel.com](https://vercel.com)
2. Créez un compte ou connectez-vous
3. Cliquez sur "Add New Project"
4. Importez votre repository GitHub `dowtikins`

### Étape 2: Configurer le projet

Vercel détectera automatiquement Next.js. Vérifiez:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Étape 3: Configurer les variables d'environnement

Dans "Environment Variables", ajoutez:

| Nom | Valeur | Environnement |
|-----|--------|--------------|
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | `ca-pub-1841159989456495` | Production, Preview, Development |
| `NEXT_PUBLIC_DISABLE_ADS` | `false` | Production, Preview, Development |

### Étape 4: Déployer

Cliquez sur "Deploy" et attendez quelques minutes.

---

## 🔧 Méthode 2: Utiliser le fichier vercel.json

Le fichier `vercel.json` est déjà configuré avec:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "NEXT_PUBLIC_ADSENSE_CLIENT_ID": "ca-pub-1841159989456495",
    "NEXT_PUBLIC_DISABLE_ADS": "false"
  }
}
```

### Déploiement via Vercel CLI:

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel
```

---

## ⚠️ Problèmes fréquents et solutions

### Problème 1: Build échoue sur Vercel

**Erreur:** `Failed to compile`

**Solutions:**

1. **Vérifier les dépendances:**
   ```bash
   npm ci  # Clean install
   npm run build
   ```

2. **Vérifier TypeScript:**
   ```bash
   npx tsc --noEmit
   ```

3. **Vérifier les imports:**
   - Assurez-vous que tous les fichiers importés existent
   - Vérifiez les chemins relatifs (`./components/ads/` vs `@/components/ads/`)

### Problème 2: Variables d'environnement non trouvées

**Erreur:** `NEXT_PUBLIC_ADSENSE_CLIENT_ID is not defined`

**Solutions:**

1. Ajoutez les variables dans le dashboard Vercel:
   - Settings > Environment Variables
   - Ajoutez `NEXT_PUBLIC_ADSENSE_CLIENT_ID` = `ca-pub-1841159989456495`

2. Redéployez après avoir ajouté les variables

### Problème 3: Module 'lucide-react' non trouvé

**Erreur:** `Cannot find module 'lucide-react'`

**Solution:**

Le package `lucide-react` doit être dans `package.json`:

```json
{
  "dependencies": {
    "lucide-react": "^0.344.0",
    ...
  }
}
```

Vérifiez avec:
```bash
cat package.json | grep lucide
```

Si absent, installez-le:
```bash
npm install lucide-react
```

### Problème 4: Erreur de build sur Windows vs Linux

Vercel utilise Linux pour les builds. Si vous avez des problèmes spécifiques à Windows:

1. Supprimez `.next` avant de pusher
2. Assurez-vous que `.gitignore` inclut:
   ```
   /.next/
   .env*.local
   ```

---

## 📊 Vérifier le build avant le déploiement

### 1. Build local:

```bash
# Nettoyer
rm -rf .next

# Build
npm run build
```

### 2. Vérifier les fichiers:

```bash
# Vérifier package.json
cat package.json

# Vérifier .gitignore
cat .gitignore

# Vérifier les imports
npx tsc --noEmit
```

---

## 🎯 Checklist avant déploiement

- [ ] Build local fonctionne (`npm run build`)
- [ ] `.env.local` existe avec les variables
- [ ] `.gitignore` exclut `.env.local`
- [ ] `package.json` contient `lucide-react`
- [ ] Tous les fichiers TypeScript compilent
- [ ] Le projet est poussé sur GitHub
- [ ] Vercel est connecté à GitHub

---

## 🔐 Variables d'environnement sur Vercel

### Via Dashboard:

1. Allez sur Vercel > Project > Settings
2. Cliquez sur "Environment Variables"
3. Ajoutez:
   - `NEXT_PUBLIC_ADSENSE_CLIENT_ID` = `ca-pub-1841159989456495`
   - `NEXT_PUBLIC_DISABLE_ADS` = `false`
4. Sélectionnez les environnements (Production, Preview, Development)
5. Cliquez sur "Save"
6. Redéployez

### Via CLI:

```bash
vercel env add NEXT_PUBLIC_ADSENSE_CLIENT_ID
# Production, Preview, or Development? All
# What's the value of NEXT_PUBLIC_ADSENSE_CLIENT_ID? ca-pub-1841159989456495
```

---

## 📝 Fichiers importants

### Configuration:
- `vercel.json` - Configuration Vercel
- `next.config.js` - Configuration Next.js
- `package.json` - Dépendances

### Environnement:
- `.env.example` - Exemple de variables (versionné)
- `.env.local` - Variables locales (non versionné)

### Git:
- `.gitignore` - Fichiers à ignorer

---

## 🚨 Débogage

### Voir les logs de build:

1. Vercel Dashboard > Project > Deployments
2. Cliquez sur le déploiement en cours/échoué
3. Cliquez sur "Build Logs"

### Déployer en mode preview:

```bash
vercel
```

### Déployer en production:

```bash
vercel --prod
```

---

## ✅ Vérifier le déploiement

### 1. Vérifier le domaine:

Visitez: `https://your-project.vercel.app`

### 2. Vérifier les ads:

Ouvrez la console du navigateur et tapez:
```javascript
window.adsbygoogle
```

Devrait retourner un tableau.

### 3. Vérifier le fichier ads.txt:

Visitez: `https://your-project.vercel.app/ads.txt`

Devrait afficher:
```
google.com, pub-1841159989456495, DIRECT, f08c47fec0942fa0
```

---

## 🔄 Mise à jour après déploiement

Après avoir modifié du code:

```bash
git add .
git commit -m "description"
git push
```

Vercel déploiera automatiquement!

---

## 📚 Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Vercel Next.js Guide](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)

---

**Guide créé le 28 mars 2024**
