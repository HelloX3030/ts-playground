# ⚙️ TypeScript + HTML Cheat Sheet

This cheat sheet lists the most useful TypeScript/DOM commands for interacting with HTML pages.

---

## 🎯 Selecting Elements

```ts
document.getElementById('myId');            // By ID
document.querySelector('.myClass');         // First match by CSS selector
document.querySelectorAll('div');           // All <div> elements
```

With type assertion (better for TS):
```ts
const input = document.getElementById('myInput') as HTMLInputElement;
```

---

## 🧠 Reading and Writing Values

### From Input Fields
```ts
const input = document.getElementById('name') as HTMLInputElement;
console.log(input.value); // Get value
input.value = "Hello!";   // Set value
```

### From Checkboxes
```ts
const checkbox = document.getElementById('check') as HTMLInputElement;
console.log(checkbox.checked); // true/false
checkbox.checked = true;
```

### Set Text or HTML Content
```ts
const output = document.getElementById('result')!;
output.textContent = "Plain text";
output.innerHTML = "<b>Bold HTML</b>";
```

---

## 🧩 Handling Events

```ts
const button = document.getElementById('submit') as HTMLButtonElement;
button.addEventListener('click', () => {
  alert('Button clicked!');
});
```

Common Events:
- `'click'`
- `'input'`
- `'change'`
- `'submit'`
- `'keydown'`, `'keyup'`

---

## 📤 Submitting Forms

```ts
const form = document.getElementById('myForm') as HTMLFormElement;
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop actual submit
  // Read and process form data
});
```

---

## 🎨 Styling Elements

```ts
const box = document.getElementById('box')!;
box.style.backgroundColor = "red";
box.style.display = "none"; // hide
box.style.display = "block"; // show
```

---

## 🏗️ Creating New Elements

```ts
const newDiv = document.createElement('div');
newDiv.textContent = "Hello!";
document.body.appendChild(newDiv);
```

---

## 🗑️ Removing Elements

```ts
const elem = document.getElementById('toRemove');
elem?.remove();
```

---

## 🔁 Iterating Over Elements

```ts
document.querySelectorAll('.item').forEach((el) => {
  (el as HTMLElement).style.color = 'blue';
});
```

---

## 🧪 Type Assertions

Tell TypeScript what kind of element you're working with:
```ts
const input = document.getElementById('age') as HTMLInputElement;
```

---

## 🧠 Tips
- Use `defer` in your `<script>` tag to ensure DOM is ready.
- Always type your variables for full IntelliSense and error checking.


---

## 🧱 Safe DOM Creation (Instead of innerHTML)

```ts
// Create a new <div> element
const newDiv = document.createElement('div');
newDiv.textContent = "I'm a safe div!"; // Use textContent for safe text

// Optionally add classes or styles
newDiv.classList.add('card');
newDiv.style.border = "1px solid gray";

// Append it to the document
document.body.appendChild(newDiv);
```

✅ This avoids using `innerHTML` and is much safer and more maintainable.

## 🔁 Cloning DOM Elements

Use .cloneNode(true) to duplicate an element and append it elsewhere:

```ts
const original = document.createElement('p');
original.textContent = 'I am the original element';

// Clone and append to multiple places
const clone = original.cloneNode(true);

document.body.appendChild(original);  // Append original
document.body.appendChild(clone);     // Append clone
```
