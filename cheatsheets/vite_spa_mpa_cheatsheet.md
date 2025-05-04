### 📍 Vite HTML + TypeScript Project Cheat Sheet: Multi-Page vs Single Page

---

## 📄 Multi-Page Application (MPA)

Each page is a standalone `.html` file with its own script.

### ✅ Folder Structure

```
my-app/
├── index.html
├── about.html
├── contact.html
├── vite.config.ts
├── src/
│   ├── main.ts
│   ├── about.ts
│   └── contact.ts
```

### 🧠 Vite Config (`vite.config.ts`)

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
      }
    }
  }
});
```

#### ❀ Explanation: `rollupOptions.input`

Vite uses **Rollup** internally to build your project. The `input` option tells Rollup:

> "These are my HTML entry points. Please include and optimize all of them."

If you **don't define `input`**, only `index.html` will be processed.

This config allows:

* Each HTML page to have its own TS/JS entry point
* All pages to be included in the final `dist/` folder
* Clean URLs like `yourdomain.com/about.html`

You can still navigate between pages using regular anchor tags:

```html
<a href="about.html">About</a>
```

### 🗊 HTML Example (`about.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>About</title>
</head>
<body>
  <h1>About Page</h1>
  <script type="module" src="/src/about.ts"></script>
</body>
</html>
```

### ✅ Pros

* Simple and familiar
* Good for SEO
* Browser handles navigation

### ❌ Cons

* Full reload on every page change
* Code duplicated between pages
* Harder to share state between pages

---

## 🌐 Single Page Application (SPA)

One `index.html`, navigation handled with JavaScript, content updated dynamically.

### ✅ Folder Structure

```
my-app/
├── index.html
├── src/
│   ├── main.ts
│   ├── router.ts
│   └── pages/
│       ├── home.ts
│       ├── about.ts
│       └── contact.ts
```

### 🌐 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>SPA</title></head>
  <body>
    <nav>
      <a href="#/">Home</a>
      <a href="#/about">About</a>
      <a href="#/contact">Contact</a>
    </nav>
    <main id="app"></main>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

### 🧠 `main.ts`

```ts
import { router } from './router';

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
```

### 🔀 `router.ts`

```ts
import { renderHome } from './pages/home';
import { renderAbout } from './pages/about';
import { renderContact } from './pages/contact';

export function router() {
  const route = window.location.hash;
  const app = document.getElementById('app');
  if (!app) return;

  if (route === '#/about') app.innerHTML = renderAbout();
  else if (route === '#/contact') app.innerHTML = renderContact();
  else app.innerHTML = renderHome();
}
```

### 📄 `pages/home.ts`

```ts
export function renderHome() {
  return `<h1>Home</h1><p>Welcome to our site!</p>`;
}
```

### ✅ Pros

* Fast transitions (no reloads)
* Easier to share state and logic
* App-like experience

### ❌ Cons

* Harder to optimize for SEO
* Requires JS to work at all
* Manual routing logic or use a router lib

---

## 🧠 Choosing Between MPA and SPA

| Feature          | MPA                     | SPA                  |
| ---------------- | ----------------------- | -------------------- |
| Navigation Style | Full reloads            | Dynamic via JS       |
| Performance      | Slower, reload per page | Fast, no reload      |
| SEO              | Better                  | Needs extra setup    |
| Complexity       | Simple                  | More involved        |
| Recommended For  | Static sites, blogs     | Web apps, dashboards |

---

## ✅ Helpful Tips

* Put shared CSS and assets in `/public` or import them in `.ts`.
* Use Vite's dev server: `npm run dev`
* Use `npm run build` to generate production-ready static files.
