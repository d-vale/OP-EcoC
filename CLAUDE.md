# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Milano Cortina 2026 Olympics website built with Nuxt 4, Vue 3, and Tailwind CSS 4.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

### Directory Structure
- `app/` - Main application code (Nuxt 4 app directory)
  - `pages/` - File-based routing
  - `components/` - Vue components organized by feature (e.g., `home/`, `locations/`)
  - `svg/` - SVG components as Vue files
  - `index.css` - Global styles with Tailwind and custom component classes
  - `app.vue` - Root layout with TheTopBar, TheNavbar, NuxtPage, TheFooter
- `public/` - Static assets served at root (images, SVGs)
  - `home/` - Home page assets
  - `locations/` - Location page assets

### Styling
- Tailwind CSS 4 with Vite plugin integration
- Custom component classes defined in `app/index.css` using `@layer components`
- Key design tokens:
  - Primary gradient: `linear-gradient(45deg, #014A5C, #22A5AB)`
  - Primary text color: `#00313D`
  - Body text color: `#001719`
  - Background: `#f3f3f3`
- Font: Poppins (loaded via Google Fonts in components)

### Component Naming
- `Base-*.vue` - Reusable base components
- `The*.vue` - Singleton layout components (TheNavbar, TheFooter, TheTopBar)

### Images
- Use `@nuxt/image` module for optimized images
- Carousel images use WebP format in `public/home/carousel/`

## Key Patterns

- Components use `<script setup>` with Composition API
- Responsive design uses Tailwind breakpoints: `sm:`, `md:`, `lg:`
- SVG icons are often inline in components or stored as Vue components in `app/svg/`
- Page-specific components go in `components/{page-name}/` directories

## Éco-conception / Sustainable Development

Bonnes pratiques à respecter:
- **Images**: Utiliser `loading="lazy"`, formats optimisés (WebP, SVG), dimensions adaptées
- **SVG**: Préférer les SVG inline optimisés pour les icônes (pas de requêtes HTTP supplémentaires)
- **CSS**: Utiliser Tailwind (tree-shaking automatique), éviter les styles inutilisés
- **JavaScript**: Minimiser le JS côté client, éviter les dépendances lourdes
- **Fonts**: Limiter les variantes de polices chargées
- **Requêtes**: Regrouper les assets, éviter les requêtes inutiles
- **Animations**: Préférer `transform` et `opacity` (GPU-accelerated)
