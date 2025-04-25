# 🛠️ npm & npx Cheat Sheet

This is a quick reference for the most important `npm` and `npx` commands, with helpful flags and use cases.

---

## 🚀 Most Useful `npm` Commands

### 📦 Install Packages

```bash
npm install <package-name>
```

- Installs a package **locally**.
- Example: `npm install express`

#### 🔧 Flags:
- `--save` (default): Adds to `dependencies`
- `--save-dev` or `-D`: Adds to `devDependencies`
  - Example: `npm install -D typescript`
- `-g`: Install globally
  - Example: `npm install -g nodemon`

---

### 🗑 Uninstall Packages

```bash
npm uninstall <package-name>
```

- Removes a package from `node_modules` and `package.json`.

---

### 🆙 Update Packages

```bash
npm update
```

- Updates all dependencies based on the versions allowed in `package.json`.

---

### 📋 Init Project

```bash
npm init
```

- Interactive creation of `package.json`.

```bash
npm init -y
```

- Skips prompts and creates a default `package.json`.

---

### 🚀 Run Scripts

```bash
npm run <script-name>
```

- Runs a custom script defined in `package.json`.

Example:

```json
"scripts": {
  "start": "node index.js",
  "build": "tsc"
}
```

Then run:

```bash
npm run build
```

---

### 📦 List Installed Packages

```bash
npm list
```

- Lists installed packages locally.

```bash
npm list -g
```

- Lists globally installed packages.

---

### 🔍 Check for Issues

```bash
npm audit
```

- Scans for security issues in dependencies.

```bash
npm audit fix
```

- Attempts to fix those issues.

---

## ⚡️ Most Useful `npx` Commands

### 🎯 Run a CLI tool without installing:

```bash
npx create-react-app my-app
npx tsc
npx eslint myfile.ts
```

- Perfect for one-time or temporary tools.

---

### 🔄 Force Latest Version

```bash
npx <package-name>@latest
```

- Runs the latest version of a package.

---

### ⛔ Prevent Install Prompts

```bash
npx --no-install <tool>
```

- Only works if the tool is already installed locally.

---

## 🧠 Bonus: Useful Tools to Try with `npx`

- `npx tsc --init` → Create `tsconfig.json`
- `npx eslint .` → Lint your project
- `npx prettier --write .` → Format all files
- `npx vite` → Start a new Vite app

---

Happy coding! 🚀
