### 🔗 `<a>` Tag Cheat Sheet

The `<a>` (anchor) element is used to create hyperlinks — to other pages, sections on the same page, files, email addresses, and more.

---

### 📄 Basic Usage

```html
<a href="https://example.com">Visit Example</a>
```

---

### 🧭 Navigating to Other Pages

```html
<a href="/about.html">About Us</a>
```

* Works in both MPA and SPA (with caveats — see SPA section).
* Can also use relative paths: `./page.html`, `../page.html`.

---

### 🧷 Link to a Section on the Same Page

```html
<a href="#section1">Jump to Section 1</a>
...
<h2 id="section1">Section 1</h2>
```

---

### ✉️ Email Links

```html
<a href="mailto:hello@example.com">Email us</a>
```

---

### 📞 Phone Links (for mobile)

```html
<a href="tel:+1234567890">Call us</a>
```

---

### 📁 Download Files

```html
<a href="/files/resume.pdf" download>Download Resume</a>
```

---

### 🌐 Open in New Tab

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>
```

* `rel="noopener noreferrer"` is a best practice for security.

---

### 🛠 In Single Page Apps (SPAs)

* Use links like `<a href="#/about">About</a>` for **client-side routing**.
* Handled via JavaScript router (`hashchange`, `react-router`, `vue-router`, etc.).
* Avoid direct links to `.html` files to prevent full reloads.

---

### 🚫 Disable Link

```html
<a href="#" onclick="return false;">Disabled</a>
```

Or better:

```html
<a href="#" aria-disabled="true" tabindex="-1">Disabled</a>
```

---

### 🧪 Styling Links (CSS)

```css
a {
  text-decoration: none;
  color: blue;
}
a:hover {
  text-decoration: underline;
}
```
