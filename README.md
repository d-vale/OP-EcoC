# Milano Cortina 2026 - Site Éco-conçu

Reproduction éco-conçue du site officiel des Jeux Olympiques d'hiver Milano Cortina 2026, réalisée dans le cadre du cours d'écoconception à la HEIG-VD.

## Objectif du projet

Ce projet vise à démontrer qu'il est possible de créer un site web visuellement riche et fonctionnel tout en appliquant les principes de l'écoconception numérique. L'objectif est de réduire l'empreinte environnementale du site en optimisant les ressources, en minimisant les requêtes réseau et en adoptant des pratiques de développement durable.

## Stack technique

- **Framework** : [Nuxt 4](https://nuxt.com/) avec Vue 3
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Contenu** : [@nuxt/content](https://content.nuxt.com/) pour les articles
- **Icônes** : [Lucide Vue Next](https://lucide.dev/)
- **Déploiement** : Génération statique (SSG)

## Fonctionnalités

- **Page d'accueil** : Carrousel, compte à rebours, grille de sports, actualités
- **Locations** : Pages détaillées des sites olympiques
- **Articles** : Section actualités avec contenu dynamique
- **Navigation** : Navbar responsive et footer complet

## Bonnes pratiques d'écoconception appliquées

### Images
- Utilisation du format **WebP** pour toutes les images
- **Lazy loading** (`loading="lazy"`) pour le chargement différé
- Dimensions adaptées et optimisation via squoosh

### SVG
- **SVG inline** pour les icônes (évite les requêtes HTTP supplémentaires)
- Logos des partenaires convertis en composants Vue SVG
- Icônes des sports olympiques en composants SVG optimisés

### CSS
- **Tailwind CSS** avec tree-shaking automatique (seules les classes utilisées sont incluses)
- Styles personnalisés définis avec `@layer components`
- Pas de CSS inutilisé dans le bundle final

### JavaScript
- Minimisation du JS côté client
- Utilisation de la Composition API de Vue 3 (`<script setup>`)
- Évitement des dépendances lourdes

### Polices
- Une seule police (Poppins) avec 4 variantes limitées (400, 500, 600, 700)
- Preconnect vers Google Fonts pour optimiser le chargement

### Requêtes réseau
- Génération statique (SSG) pour éviter les appels API côté client
- Assets regroupés et optimisés par Vite
- Contenu des articles directement intégré pour réduire les requêtes

### Animations
- Utilisation de `transform` et `opacity` (accélération GPU)
- Animations légères et performantes

## Installation

```bash
# Cloner le repository
git clone <repository-url>
cd eco_olympics-milano

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur http://localhost:3000

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement avec hot reload |
| `npm run build` | Build de production |
| `npm run generate` | Génération statique du site |
| `npm run preview` | Prévisualisation du build de production |

## Structure du projet

```
eco_olympics-milano/
├── app/
│   ├── components/       # Composants Vue
│   │   ├── home/         # Composants page d'accueil
│   │   ├── locations/    # Composants pages locations
│   │   └── articles/     # Composants pages articles
│   ├── pages/            # Routing basé sur les fichiers
│   ├── svg/              # Icônes SVG en composants Vue
│   │   └── partners/     # Logos des partenaires
│   ├── index.css         # Styles globaux Tailwind
│   └── app.vue           # Layout racine
├── content/              # Contenu Markdown (articles)
├── public/               # Assets statiques
│   ├── home/             # Images page d'accueil
│   └── locations/        # Images locations
├── nuxt.config.ts        # Configuration Nuxt
└── package.json
```

## Conventions de nommage

- `Base-*.vue` : Composants réutilisables de base
- `The*.vue` : Composants singleton de layout (TheNavbar, TheFooter, TheTopBar)
- `Article*.vue` : Composants spécifiques aux articles

## Contexte académique

Ce projet a été réalisé dans le cadre du cours d'**écoconception** à la [HEIG-VD](https://heig-vd.ch/) (Haute École d'Ingénierie et de Gestion du Canton de Vaud). Il illustre comment les développeurs web peuvent contribuer à la réduction de l'empreinte carbone du numérique en adoptant des pratiques de développement responsables.

## Licence

Projet académique - Tous droits réservés.

---

*Site original : [olympics.com/milano-cortina-2026](https://olympics.com/en/olympic-games/milano-cortina-2026)*
