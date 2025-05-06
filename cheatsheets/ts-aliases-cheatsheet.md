# TypeScript Path Alias Cheat Sheet (with Vite)

A quick reference for using path aliases (`@`, `~`, etc.) in TypeScript and Vite projects.

---

## 🧠 What Are Path Aliases?

Path aliases let you replace long or ugly relative imports like:

```ts
import { something } from '../../../utils/helpers';
```

with cleaner, absolute-style imports:

```ts
import { something } from '@/utils/helpers';
```

---

## ⚙️ Setup in `tsconfig.json`

Add or update your `compilerOptions` like this:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "~components/*": ["src/components/*"],
      "#utils/*": ["src/utils/*"]
    }
  }
}
```

- `@/*` becomes a shortcut for `src/*`
- `~components/*` maps to `src/components/*`
- You can define multiple aliases

---

## ⚙️ Setup in `vite.config.ts`

To make aliases work in Vite (build/dev server):

```ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~components': path.resolve(__dirname, './src/components'),
      '#utils': path.resolve(__dirname, './src/utils')
    },
  },
});
```

### ⚡️ What happens if you only add one of these configurations?
- If you only update tsconfig.json: TypeScript will understand the alias in your editor and during development for things like type-checking and autocompletion, but the build and bundler (Vite) won't know how to resolve the alias, so your code will break when running or building.
- If you only update vite.config.ts: Vite will know how to resolve the alias during the build process and in the dev server. However, TypeScript won't understand the alias, and you might get TypeScript errors like "Cannot find module" when trying to import via the alias.

---

## ✅ Common Use Cases

| Use Case                        | Alias Example             | Why It Helps                                |
|---------------------------------|---------------------------|---------------------------------------------|
| Avoid deep relative paths       | `@/utils/math.ts`         | Cleaner and easier to refactor              |
| Group by module or domain       | `~components/Button.tsx`  | Organizes UI logic                          |
| Centralize config/constants     | `#config/index.ts`        | Keeps project structure clean               |
| Shared types/interfaces         | `@/types/user.ts`         | Easy reuse across project                   |

---

## 🚫 Aliases Do NOT Work In:

- `.html` files directly
- Runtime paths (like file uploads or fetch URLs)
- Browser dev tools (they only see final resolved paths)

---

## 🛠 Tips

- Always set both `tsconfig.json` and `vite.config.ts`
- Use aliases for **internal project paths**, not for external libraries
- Keep aliases **simple and memorable** (`@`, `~`, `#` are common)

---

## 📁 Recommended Structure

```
src/
├── components/
├── utils/
├── types/
└── main.ts
```

With aliases:
- `@/components/...`
- `#utils/...`
- `@/types/...`

---

Happy aliasing! 🚀
