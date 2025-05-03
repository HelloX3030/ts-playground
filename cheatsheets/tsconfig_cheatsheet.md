# ⚙️ TypeScript `tsconfig.json` Cheat Sheet

This file contains the most useful and commonly used `tsconfig.json` compiler options explained clearly.

---

## 📄 Basic Structure

```json
{
  "compilerOptions": {
    // options here
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

---

## 🧠 Most Useful Compiler Options

### 🎯 Target & Module

```json
"target": "ES6"
```
- Controls the JavaScript version output (e.g., ES5, ES6, ESNext).

```json
"module": "commonjs"
```
- Module system (commonjs for Node.js, esnext or ES6 for modern bundlers).

---

### 🌍 Module Resolution

```json
"moduleResolution": "node"
```
- Tells TypeScript how to resolve imports (usually "node").

---

### 🛠 Strictness

```json
"strict": true
```
- Enables all strict type-checking options (recommended!).

**Or use individual flags:**

```json
"noImplicitAny": true,
"strictNullChecks": true,
"strictFunctionTypes": true
```

---

### 🧼 Clean Output

```json
"removeComments": true
```
- Removes comments from generated JavaScript.

---

### 📁 Output Directory

```json
"outDir": "./dist"
```
- Where compiled files go.

```json
"rootDir": "./src"
```
- Where your source TypeScript files are.

---

### 🧹 Helpers

```json
"sourceMap": true
```
- Generates `.map` files for debugging.

```json
"declaration": true
```
- Emits `.d.ts` declaration files for library authors.

---

### 🧾 ES Module Interop

```json
"esModuleInterop": true
```
- Allows default imports from CommonJS modules.

```json
"allowSyntheticDefaultImports": true
```
- Avoid import errors for packages that don’t use `export default`.

---

### 🔁 Recompilation Options

```json
"incremental": true
```
- Speeds up build by reusing info from last compilation.

```json
"watch": true
```
- Automatically recompiles on file changes (used with CLI: `tsc --watch`).

---

## ✅ Recommended Minimal Setup

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"]
}
```

---

🧪 You can test your `tsconfig.json` changes by running:

```bash
npx tsc
```

This reads the config and compiles your TypeScript files accordingly.

---

Happy compiling! 🔧✨
