# ⚡ Vite Cheat Sheet

A quick reference for setting up and working with Vite in modern frontend projects (TypeScript-ready!).

---

## 🛠️ Project Setup

### Create a New Vite Project
```bash
npm create vite@latest
```
- Choose: `Vanilla` (or React, Vue, etc.)
- Choose: `TypeScript` variant

### Install Dependencies
```bash
cd my-vite-app
npm install
```

---

## 🚀 Development Workflow

### Start the Dev Server
```bash
npm run dev
```
- Starts at `http://localhost:5173` by default
- Hot Module Reloading (HMR) is enabled

### Build for Production
```bash
npm run build
```
- Output is in the `dist/` folder

### Preview the Production Build
```bash
npm run preview
```

---

## 📦 Managing Packages

### Add an npm Package (Example: Supabase)
```bash
npm install @supabase/supabase-js
```

### Use in Code
```ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://xyz.supabase.co', 'public-anon-key');
```

---

## 🗂 Project Structure

```plaintext
my-vite-app/
├── index.html           # Entry HTML
├── vite.config.ts       # Vite configuration (optional)
├── package.json         # NPM scripts & deps
├── tsconfig.json        # TypeScript config
├── node_modules/        # Installed packages
└── src/
    └── main.ts          # App entry point
```

---

## ⚙️ Vite Config (Optional)

If needed, edit `vite.config.ts`:

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Useful for GitHub Pages
  server: {
    port: 3000,
  },
});
```

---

## 🧪 Useful Scripts (in `package.json`)

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## 💡 Tips & Gotchas

- Vite supports **TypeScript, JSX, CSS Modules, PostCSS, etc.** out of the box.
- Imports from `node_modules` work like ES modules — no need for CDN or bundlers.
- You **don’t need `tsc` manually**; Vite uses esbuild under the hood for super-fast transpilation.
- Place static assets in `public/` if you want to reference them via `/my-asset.png`.

---

## 🔗 Docs & Resources

- 🔗 [Vite Official Docs](https://vitejs.dev/)
- 📘 [Vite + Supabase Example](https://supabase.com/docs/guides/with-vite)
