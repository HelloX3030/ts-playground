# 📜 Cheat-Sheet: When Are `<script>` Tags Executed?

| Script Type | When it Executes | Behavior |
|:------------|:-----------------|:---------|
| **Default (`<script src="...">`)** | Immediately when parser reaches it | Blocks parsing until loaded and executed. |
| **`defer` (`<script src="..." defer>`)** | After HTML is fully parsed | Scripts keep their order. Page parses without blocking. |
| **`async` (`<script src="..." async>`)** | As soon as script is loaded | Parsing and execution can happen in any order (risky for DOM interaction). |
| **Inline JS (`<script>`)** | Immediately when parser reaches it | Same as normal external script, but inline. |

---

# ✏️ Examples

## 1. Normal (blocking script)
```html
<head>
  <script src="dist/main.js"></script> <!-- Will block HTML parsing until loaded and executed -->
</head>
```

## 2. Defer (recommended for most cases)
```html
<head>
  <script src="dist/main.js" defer></script>
</head>
```
- `main.js` **starts downloading immediately**.
- **HTML parsing continues**.
- When the whole document is parsed → **then** `main.js` runs.
- Scripts with `defer` maintain their **original order**.

## 3. Async (for independent scripts)
```html
<head>
  <script src="https://analytics.example.com/analytics.js" async></script>
</head>
```
- **No guarantee** when the script runs.
- Good for things like **analytics** or **ads** that **don't touch the DOM**.

## 4. DOMContentLoaded (manual wait inside your script)
```ts
document.addEventListener('DOMContentLoaded', () => {
  // Safe to manipulate DOM elements here
  const button = document.getElementById('myButton');
  button?.addEventListener('click', () => alert('Clicked!'));
});
```
- Ensures all HTML has loaded before your script touches the page.

---

# 🚨 Important Tips

- Use **`defer`** for your main application scripts (`main.js`, etc.).
- Use **`async`** only for external scripts that **don't manipulate the page**.
- If you **don't use defer**, make sure your script is **at the bottom** of `<body>`.
- **Never** assume that DOM elements exist when your script runs — unless you use `defer` or `DOMContentLoaded`.

---

# 📌 Ultra-Minimal Final Recommendation

Best simple setup for most apps:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My App</title>
  <script src="dist/main.js" defer></script> <!-- 🚀 defer here! -->
</head>
<body>
  <h1>Hello!</h1>
  <button id="myButton">Click me</button>
</body>
</html>
```

And your `main.ts` can immediately touch the DOM:

```ts
const button = document.getElementById('myButton');
button?.addEventListener('click', () => {
  alert('Button clicked!');
});
```

