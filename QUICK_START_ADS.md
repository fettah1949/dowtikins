# Démarrage Rapide - Publicités DowTikins

## 🚋 Prérequis

- Un compte Google
- Un nom de domaine (dowtikins.com ou autre)
- Le projet DowTikins fonctionnel

---

## 📝 Étapes en 5 minutes

### 1️⃣ Créer votre compte AdSense (2 min)

1. Allez sur [https://www.google.com/adsense](https://www.google.com/adsense)
2. Cliquez sur "Commencer"
3. Connectez-vous avec votre compte Google
4. Remplissez:
   - URL: `https://dowtikins.com` (ou votre vrai domaine)
   - Langue: Français/Anglais
   - Pays: Votre pays
5. Cliquez sur "Créer mon compte AdSense"

### 2️⃣ Vérifier votre site (1 min)

AdSense vous donnera un code HTML. Copiez l'ID client (ca-pub-XXXXXXXXXXXXXXXX).

### 3️⃣ Mettre à jour la configuration (1 min)

Créez `.env.local`:
```env
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-VOTRE_ID_ICI
NEXT_PUBLIC_DISABLE_ADS=false
```

Mettez à jour `lib/ads.ts`:
```typescript
export const ADSENSE_CLIENT_ID = 'ca-pub-VOTRE_ID_ICI'
```

Mettez à jour `public/ads.txt`:
```
google.com, pub-VOTRE_ID_ICI, DIRECT, f08c47fec0942fa0
```

### 4️⃣ Intégrer le script dans layout.tsx (30 sec)

Ajoutez dans `<head>`:
```typescript
<script
  async
  src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
  crossOrigin="anonymous"
/>
```

### 5️⃣ Ajouter les ads dans page.tsx (30 sec)

```typescript
import BannerAd from './components/ads/BannerAd'
import StickyAd from './components/ads/StickyAd'

// Dans votre composant:
<StickyAd />
<BannerAd position="header" />
<BannerAd position="in-article" />
```

---

## ✅ C'est tout!

Attendez l'approbation AdSense (1-7 jours), et vos ads s'afficheront automatiquement!

---

## 📚 Documentation complète

Pour plus de détails, voir:
- [ADS_INTEGRATION_GUIDE.md](ADS_INTEGRATION_GUIDE.md) - Guide complet
- [ADS_IMPLEMENTATION_SUMMARY.md](ADS_IMPLEMENTATION_SUMMARY.md) - Résumé détaillé

---

## ❓ Besoin d'aide?

Consultez la section "Dépannage" dans le guide complet.
