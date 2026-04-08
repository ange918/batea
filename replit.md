# NightGlow — Site Web

Site web complet et immersif pour NightGlow, marque africaine de design phosphorescent fondée à Cotonou, Bénin.

## Stack

- **Next.js 16** avec App Router + TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Framer Motion** — animations scroll et hero
- **@heroicons/react v2** — toutes les icônes
- **next/font** — Bebas Neue (titres) + DM Sans (corps)

## Démarrage

```bash
npm run dev   # port 5000
```

## Structure

```
app/
  layout.tsx      — Fonts Bebas Neue + DM Sans, metadata
  page.tsx        — Composition de toutes les sections
  globals.css     — Palette NightGlow, scrollbar, cursor, animations glow
components/
  Navbar.tsx          — Navbar fixe, transparent → blur au scroll
  Hero.tsx            — Plein écran, particules animées, titre NIGHT/GLOW
  ExecutiveSummary.tsx — 6 cartes résumé
  Problem.tsx         — 3 problèmes avec stats
  Solution.tsx        — 4 blocs technologie/culture/impact/innovation
  Collection.tsx      — Toggle Jour/Nuit + 4 produits
  Market.tsx          — Compteurs animés + 2 blocs marché
  BusinessModel.tsx   — 4 flux de revenus + prévisionnel
  Sectors.tsx         — 7 secteurs en grille
  Team.tsx            — 4 membres avec avatars initiales
  Investment.tsx      — 4 blocs investissement
  Contact.tsx         — Carte contact + CTA email
  Footer.tsx          — Liens + copyright + OAPI
  CursorDot.tsx       — Curseur vert lumineux (desktop)
hooks/
  useCountUp.ts   — Hook compteur animé au scroll
```

## Palette

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--color-glow` | `#ADFF2F` | Vert signature NightGlow |
| `--color-gold` | `#C9A84C` | Or |
| `--color-cyan` | `#00E5FF` | Cyan |
| `--color-rose` | `#FF6FA8` | Rose |
| `--color-violet` | `#B388FF` | Violet |
| `--color-card` | `#1A1A1A` | Fond cartes |
| `--color-night` | `#0A0A0A` | Fond global |

## Contact fondateur

- GBETOENONMON Sèdami Mike
- mikegtnm15@gmail.com
- +229 01 52 51 45 53
- Cotonou, République du Bénin
