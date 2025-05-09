# TypeScript + HTML Error Message Cheat Sheet

A collection of common errors you might see when developing with TypeScript and HTML (especially in Vite projects), and what they mean.

---

## 🧱 HTML + Vite-related Errors

### ❌ `GET http://localhost:5173/favicon.ico 404 (Not Found)`

**What it means:**  
The browser is trying to load a `favicon.ico` file, but it doesn't exist.

**How to fix:**
- Add a `favicon.ico` to the `public/` folder.
- Or, explicitly set one in your HTML:
  ```html
  <link rel="icon" href="/my-icon.png" type="image/png">
  ```

---

### ❌ `Failed to load resource: the server responded with a status of 404 (Not Found)`

**What it means:**  
A file or route couldn't be found.

**How to fix:**
- Make sure the file exists in the correct folder.
- Double-check path spelling.
- If it's a custom page (like `animals.html`), ensure it's listed in `vite.config.ts` under `rollupOptions.input`.

---

### ❌ `Uncaught SyntaxError: Unexpected token '<'`

**What it means:**  
Your browser got an HTML file when it expected JavaScript. Usually happens when a JS file path is wrong and the server falls back to `index.html`.

**How to fix:**
- Check your `<script src="...">` or `import` paths.
- If you're building an SPA and using routing, configure a proper fallback (e.g. Netlify `_redirects`).

---

## 🧠 TypeScript Errors

### ❌ `Cannot find module './SomeFile' or its corresponding type declarations`

**What it means:**  
TypeScript can’t locate a file you're importing.

**How to fix:**
- Check that `SomeFile.ts` or `.tsx` exists at that path.
- File paths are **case-sensitive**!
- Make sure TypeScript is watching that folder.

---

### ❌ `Property 'X' does not exist on type 'Y'`

**What it means:**  
You're trying to access a property that TypeScript doesn’t recognize.

**Example:**
```ts
const user = {};
console.log(user.name); // ❌ Property 'name' does not exist
```

**How to fix:**
- Add a type:
  ```ts
  const user: { name: string } = { name: 'Alex' };
  ```

---

### ❌ `Argument of type 'A' is not assignable to parameter of type 'B'`

**What it means:**  
You're passing the wrong type to a function or method.

**Example:**
```ts
function greet(name: string) {}
greet(42); // ❌ number is not assignable to string
```

**How to fix:**
- Convert the argument to the expected type.
- Or adjust your function typing.

---

### ❌ `Cannot find name 'document'` (or `window`, etc.)

**What it means:**  
You're using browser globals in a non-browser TypeScript context (like Node.js).

**How to fix:**
- Make sure your `tsconfig.json` has `"dom"` in `compilerOptions.lib`:
  ```json
  {
    "compilerOptions": {
      "lib": ["dom", "esnext"]
    }
  }
  ```

---

### ❌ `Type 'null' is not assignable to type 'HTMLElement'`

**What it means:**  
You're selecting a DOM element, but TypeScript can't guarantee it exists.

**Example:**
```ts
const el: HTMLElement = document.getElementById('box'); // ❌
```

**How to fix:**
- Use a type guard or `!`:
  ```ts
  const el = document.getElementById('box')!;
  ```
- Or handle the `null` case:
  ```ts
  const el = document.getElementById('box');
  if (el) {
    el.innerHTML = 'Hello';
  }
  ```

---

## 🧪 Vite + Module Errors

### ❌ `Uncaught ReferenceError: process is not defined`

**What it means:**  
You're using `process.env` in the browser, but Vite doesn’t polyfill `process` like Webpack.

**How to fix:**
- Use `import.meta.env` instead:
  ```ts
  console.log(import.meta.env.VITE_MY_VAR);
  ```

---

### ❌ `404 Not Found` when navigating to a route manually (e.g., `/about`)

**What it means:**  
Static hosts don’t know how to serve your SPA routes.

**How to fix:**
- **Netlify:** Add `_redirects` file:
  ```
  /* /index.html 200
  ```
- **Vercel:** Configure `vercel.json` rewrites.

---
