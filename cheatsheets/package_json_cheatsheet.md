# 📦 `package.json` Usage Cheat Sheet

This is your quick guide to understanding and using `package.json` for managing your project and scripts.

## 📄 What is `package.json`?
- The **manifest** of your project
- Keeps track of:
  - Project name, version
  - Dependencies (libraries you use)
  - Development tools (TypeScript, Webpack, etc.)
  - Custom **scripts** to automate tasks (like building, testing, starting servers)

---

## 🛠️ **Running Scripts**

In `package.json`, you define **scripts** that can be run from the terminal using `npm run <script-name>`. These are like custom commands.

### Syntax:

```json
"scripts": {
  "<script-name>": "<command>"
}
```

For example:
```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js"
}
```

Then, you run these commands like:

```bash
npm run build  # compiles TypeScript files
npm start      # starts the app with Node.js
```

---

## 🏗️ **Common Use Cases for Scripts**

### 1. **Compile TypeScript**

```json
"scripts": {
  "build": "tsc"
}
```

Run:

```bash
npm run build  # Compiles .ts files to .js
```

### 2. **Start a Local Development Server**

If you're building a site with Vite, Webpack, or another tool, you can start the dev server:

```json
"scripts": {
  "dev": "vite"
}
```

Run:

```bash
npm run dev  # Starts the dev server and watches files
```

### 3. **Run Linter (ESLint)**

If you're using ESLint to lint your TypeScript code:

```json
"scripts": {
  "lint": "eslint ."
}
```

Run:

```bash
npm run lint  # Lints all files in the project
```

### 4. **Run Prettier to Format Code**

If you're using Prettier for code formatting:

```json
"scripts": {
  "format": "prettier --write ."
}
```

Run:

```bash
npm run format  # Formats all files in the project
```

---

## 🔄 **Development vs Production Scripts**

You can define scripts for both development and production environments.

### Example:

```json
"scripts": {
  "build": "tsc",  // Compile TypeScript
  "dev": "vite",   // Development server
  "start": "node dist/index.js",  // Production run
  "test": "echo 'No tests yet!'"
}
```

To build the app in production:

```bash
npm run build   # Compile TypeScript
npm start       # Run the compiled app
```

To start the dev server:

```bash
npm run dev     # Start development server
```

---

## 🧑‍💻 **Useful Commands**

- **Install dependencies**:

```bash
npm install     # Installs all dependencies listed in package.json
```

- **Install a package**:

```bash
npm install <package-name>  # Installs a specific package locally
```

- **Install a dev dependency**:

```bash
npm install <package-name> --save-dev  # Installs a package as a devDependency
```

- **Run a script**:

```bash
npm run <script-name>  # Runs the script defined in package.json
```

- **Remove a package**:

```bash
npm uninstall <package-name>  # Uninstalls a specific package
```

---

## 🧰 **Sample `package.json` Setup for a Simple Website**

```json
{
  "name": "my-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",  // Development server with hot reload
    "build": "tsc", // TypeScript compiler
    "start": "node dist/index.js"  // Run compiled code
  },
  "devDependencies": {
    "typescript": "^5.8.3",
    "vite": "^3.0.0"  // A fast dev server for static sites
  }
}
```

Run your scripts like:

```bash
npm run dev    # Start development server with Vite
npm run build  # Compile TypeScript
npm start      # Run the production code
```

---

## 🚀 **Extra Tips**

1. **You can add any script** — from custom build commands to deployment scripts.
2. **Keep your scripts short and simple** — don’t overcomplicate things.
3. **Use `npm run <script-name>` instead of retyping commands**.

---

Happy coding! 🚀
