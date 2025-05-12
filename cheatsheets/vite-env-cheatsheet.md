
# 🌱 Vite + Environment Variables Cheat Sheet

## 📁 File structure

```
project-root/
│
├─ .env                 # loaded in all environments
├─ .env.local           # local only, not committed
├─ .env.development     # only in dev
├─ .env.production      # only in production
│
├─ vite.config.ts
├─ vite-env.d.ts        # (generated or manual) declares Vite globals like import.meta.env
└─ src/
   └─ main.ts
```

---

## 🔐 Naming Rules

- Vite exposes only variables prefixed with `VITE_` to your code.
- Example: `.env`
  ```env
  VITE_API_URL=https://api.example.com
  SECRET_KEY=should_not_be_exposed
  ```

---

## 🧬 Accessing Variables in Code

```ts
console.log(import.meta.env.VITE_API_URL);
```

- `import.meta.env` is **typed**, thanks to `vite-env.d.ts`.

---

## 📘 About `vite-env.d.ts`

This file is used to add type declarations for Vite-specific globals, especially `import.meta.env`.

### Typical content of `vite-env.d.ts`:

```ts
/// <reference types="vite/client" />
```

This line tells TypeScript to include types from Vite, especially:

- The structure of `import.meta.env`
- Available variables like `import.meta.env.MODE`, `import.meta.env.BASE_URL`, etc.

### Custom Typings (Optional)

If you want stricter typing for your own variables:

```ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_FEATURE_FLAG?: string
  // add more custom env vars here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

You can put this in a `src/env.d.ts` or extend `vite-env.d.ts`.

---

## 🚦 Runtime vs. Build Time

- All environment variables are **statically replaced** at build time.
- No `.env` data is exposed at runtime unless it's prefixed with `VITE_`.

---

## 📦 Loading Order

Priority (last one wins):
1. `.env`
2. `.env.local`
3. `.env.[mode]`
4. `.env.[mode].local`

Use `--mode` to specify:
```bash
vite --mode production
```

---

## ✅ Good Practices

- Never commit `.env.local` if it contains secrets.
- Use `VITE_` prefix only for public variables.
- Type-check with `vite-env.d.ts` or custom `env.d.ts`.
