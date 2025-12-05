# Veritas AI – Frontend

Marketing site for the Veritas AI / LegalLawAdvisor product. Built with React 19, Tailwind, Framer Motion, and Radix UI.

## Quick start
```bash
cd frontend
yarn install
yarn start   # dev server on http://localhost:3000
```

## Scripts
- `yarn start` – Run dev server (CRACO + CRA).
- `yarn build` – Production build to `build/`.
- `yarn test` – Run tests (Jest).

## Project structure
- `src/` – App entry, Tailwind styles, and UI components.
- `src/components/ui/` – Radix-based primitive components.
- `src/components/*` – Hero, nav, features, architecture, and other sections.
- `public/` – HTML shell and static assets.

## Tech notes
- Tailwind is configured via `tailwind.config.js`; base tokens live in `src/index.css`.
- Animations rely on Framer Motion.
- CRACO is used to extend CRA without ejecting (`craco.config.js`).

## Deployment
Build with `yarn build` and serve `build/` behind your preferred static host (Netlify, Vercel static export, S3 + CloudFront, etc.).

## Environment
No required environment variables for the static site. If you add API integrations, document them here.

## Contributing
- Prefer `yarn` (workspace uses Yarn 1.x).
- Run `yarn start` before committing to catch lint/style issues in devtools.
- Keep branding consistent: “Veritas AI” for product, “LegalLawAdvisor” for entity.
