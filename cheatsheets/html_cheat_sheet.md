# 🧾 HTML Cheat Sheet – Essentials

## 🏗️ Basic Structure
```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Page Title</title>
</head>
<body>
  <!-- Your visible content goes here -->
</body>
</html>
```

---

## 🧩 Common Tags

| Tag            | Description                                           |
|----------------|-------------------------------------------------------|
| `<div>`        | Generic container for grouping elements               |
| `<span>`       | Inline container (like `<div>`, but inline)           |
| `<p>`          | Paragraph                                              |
| `<h1>`–`<h6>`  | Headings (h1 = biggest, h6 = smallest)                |
| `<a href="">`  | Link to another page or site                          |
| `<img src="">` | Displays an image                                     |
| `<br>`         | Line break                                            |

---

## 📥 Form Elements

| Tag / Attribute              | Description                                           |
|-----------------------------|-------------------------------------------------------|
| `<form>`                    | Container for form inputs                             |
| `action=""`                 | URL to send the form data to                         |
| `method="GET|POST"`         | GET = in URL, POST = in body                         |
| `<input type="">`           | Input field (see types below)                         |
| `<label for="id">`          | Describes an input field                              |
| `<textarea>`                | Multi-line text input                                 |
| `<select><option>`          | Dropdown menu                                         |
| `<button type="submit">`    | Button to submit the form                             |

### 🔧 Input Types
```html
<input type="text">       <!-- Single-line text -->
<input type="password">   <!-- Hidden characters -->
<input type="checkbox">   <!-- Checkbox -->
<input type="radio">      <!-- Radio button -->
<input type="number">     <!-- Number field -->
<input type="email">      <!-- Email validation -->
<input type="file">       <!-- File upload -->
<input type="submit">     <!-- Submit button -->
```

---

## 🏷️ Attributes You Should Know

| Attribute       | Use Example                           | Description                         |
|----------------|----------------------------------------|-------------------------------------|
| `id`            | `<div id="main">`                     | Unique identifier for styling/scripts |
| `class`         | `<p class="info">`                    | Assign to groups for CSS or JS      |
| `name`          | `<input name="email">`                | Used in form submissions            |
| `value`         | `<input value="default">`             | Default value in a field            |
| `placeholder`   | `<input placeholder="Enter name">`    | Grey text hint                      |
| `required`      | `<input required>`                    | Field must be filled to submit      |
| `checked`       | `<input type="checkbox" checked>`     | Starts checked                      |
| `disabled`      | `<button disabled>`                   | Disables element                    |
| `readonly`      | `<input readonly>`                    | Can't be edited                     |
| `for` (in label)| `<label for="email">`                 | Ties label to input via `id`        |

---

## 🧠 Helpful Tips

- Use **`id`** when you want to uniquely identify an element for JavaScript.
- Use **`class`** when you want to style or affect a group of elements.
- Always **label your inputs** using `<label>` to improve accessibility.
