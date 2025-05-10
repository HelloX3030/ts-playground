# Vite + TypeScript Environment Variables Cheat Sheet

## 📁 Environment Files

Vite supports multiple `.env` files for different environments. These must be in your project root and variables must be prefixed with `VITE_` to be exposed to the frontend.

| File              | Used when...                       |
|-------------------|------------------------------------|
| `.env`            | Always loaded                      |
| `.env.local`      | Loaded last, not committed         |
| `.env.development`| In development mode (`vite`)       |
| `.env.production` | In production build (`vite build`) |


### 🧪 Example Setup

#### `.env`
```env
VITE_APP_NAME=MyViteApp
```

#### `.env.development`
```env
VITE_API_URL=http://localhost:3000
VITE_API_KEY=dev-1234
```

#### `.env.production`
```env
VITE_API_URL=https://api.example.com
VITE_API_KEY=prod-5678
```

#### `.env.local`
```env
# Not committed to version control
VITE_API_KEY=local-secret-key
```

---

## 📦 Accessing Environment Variables

```ts
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## ✅ Optional: Global Config Wrapper

### `src/config.ts`
```ts
export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  apiKey: import.meta.env.VITE_API_KEY,
};
```

Usage:
```ts
import { config } from './config';
console.log(config.apiUrl);
```

---

## 🔐 Add Type Definitions

### `src/env.d.ts`
```ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

---

### 🔍 What does **".env.local — Loaded last, not committed"** mean?

- **"Loaded last"**:  
  Vite processes environment files in this order (later ones override earlier ones):
	1. `.env`
	2. `.env.{mode}` (e.g., `.env.development`, `.env.production`)
	3. `.env.local`
	4. `.env.{mode}.local`

  So, `.env.local` (or `.env.development.local`) will **override all other values**.  
  That makes it great for **local developer-specific overrides**.

- **"Not committed"**:  
  You should **add `.env.local` to `.gitignore`**, so it's not shared with others via Git.

  This allows you to keep **secrets like personal API keys** or machine-specific settings **private**.

---

### ✅ Example use-case

Let’s say your team shares this in `.env.development`:

```env
VITE_API_URL=http://localhost:3000
VITE_API_KEY=shared-dev-key
```

But on your machine, you want to use your own key. So in `.env.local`:

```env
VITE_API_KEY=my-personal-dev-key
```

Now when Vite runs:
- It first loads `.env.development`
- Then it overrides `VITE_API_KEY` with the value from `.env.local`

**Result:** Everyone on the team uses the shared file, but you can secretly override values just for yourself.

## Debugging
Filter for custom env-variables
```ts
for (const [key, value] of Object.entries(import.meta.env)) {
  if (key.startsWith("VITE_")) {
    console.log(`${key} = ${value}`);
  }
}
```

## 🛑 Important Notes

- The File needs to be named .env, not e. g. envs.env! or else vite will not find it!
- All env variables used in the frontend must be prefixed with `VITE_`.
- Do **not** expose sensitive data like DB passwords.
- `.env.local` is best for secrets and should be gitignored.
