---
name: Vercel deployment for pnpm monorepo
description: How to deploy the STABLE site (artifacts/stable) to Vercel without monorepo conflicts
---

The problem: Vercel's default output directory fallback is `public`. When the build fails or vercel.json is ignored, it always shows "No Output Directory named 'public' found".

**Solution that works:**
- Rename source static assets from `public/` → `static/`
- Set vite `publicDir: "static"` and `outDir: "public"`
- vercel.json `outputDirectory: "public"` — always matches what Vercel looks for
- Use `installCommand: "npm install --legacy-peer-deps"` (not pnpm — avoids workspace/catalog issues)
- Root Directory in Vercel dashboard: `artifacts/stable`

**Why pnpm fails on Vercel:**
- `catalog:` package refs require the workspace pnpm-workspace.yaml to resolve — won't work standalone
- `packageManager: "pnpm@10.26.1"` in root package.json causes Vercel to use pnpm even if you specify npm in vercel.json
- Fix: replace all `catalog:` refs with real versions in artifacts/stable/package.json

**Why --ignore-scripts breaks builds:**
- pnpm-workspace.yaml lists `onlyBuiltDependencies: [esbuild, ...]`
- `--ignore-scripts` skips esbuild postinstall → esbuild binary not found → vite build silently fails

**How to apply:** Any time this project is redeployed to Vercel, keep output to `public/`, source assets in `static/`, and use npm install.
