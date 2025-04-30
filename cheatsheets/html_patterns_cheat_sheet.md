# Common HTML Patterns Cheat Sheet

## 📄 Basic Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <!-- Content goes here -->
</body>
</html>
```

---

## 🧱 Layout Elements
```html
<header>Site header</header>
<nav>Main navigation</nav>
<main>Main content</main>
<aside>Sidebar content</aside>
<footer>Site footer</footer>
```

---

## 🔤 Text Elements
```html
<h1>Heading 1</h1>
<p>This is a paragraph.</p>
<strong>Bold text</strong>
<em>Italic text</em>
<blockquote>Quoted text</blockquote>
<pre>Preformatted text</pre>
```

---

## 🔗 Links and Buttons
```html
<a href="https://example.com">Visit Example</a>
<button>Click Me</button>
<input type="button" value="Click" />
```

---

## 🖼️ Images and Media
```html
<img src="image.jpg" alt="Description" width="300" height="200" />
<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

---

## ✅ Forms
```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <input type="submit" value="Send" />
</form>
```

---

## 🔘 Form Controls
```html
<input type="text" placeholder="Enter text" />
<input type="password" />
<input type="checkbox" checked />
<input type="radio" name="option" />
<select>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
<textarea rows="4" cols="50"></textarea>
```

---

## 📋 Lists
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>

dt/dl/dd:
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

---

## 📐 Tables
```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

---

## 🎨 Semantic & Misc
```html
<section>Section of content</section>
<article>Self-contained content</article>
<details>
  <summary>More info</summary>
  Hidden details here
</details>
<mark>Highlighted</mark>
<code>inline code</code>
```

---

## 🔧 Meta and Script Tags
```html
<meta charset="UTF-8">
<meta name="description" content="Cheat sheet">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="styles.css">
<script src="main.js"></script>
```

