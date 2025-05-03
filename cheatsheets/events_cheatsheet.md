# 👋 Cheat-Sheet: Important DOM Events (With Examples)

Here are the most common **DOM events** you should know about, with examples how to listen to them:

---

# 🔄 Page Events

| Event | When it Happens | Example |
|:------|:----------------|:--------|
| `DOMContentLoaded` | When the HTML is fully parsed | See below |
| `load` | When the entire page (HTML + images + styles) is fully loaded | See below |

**Example:**
```ts
// Runs when the HTML is ready (before images/styles are fully loaded)
document.addEventListener('DOMContentLoaded', () => {
  console.log('HTML fully parsed!');
});

// Runs when everything (images, CSS, etc) is also fully loaded
window.addEventListener('load', () => {
  console.log('Page fully loaded (images, etc)!');
});
```

---

# 🔑 Mouse and Pointer Events

| Event | When it Happens | Example |
|:------|:----------------|:--------|
| `click` | User clicks an element | |
| `dblclick` | Double-clicks | |
| `mousedown` | Button pressed down | |
| `mouseup` | Button released | |
| `mousemove` | Moves over element | |
| `mouseenter` / `mouseleave` | Enters/leaves element | |

**Example:**
```ts
const button = document.getElementById('myButton');
button?.addEventListener('click', () => {
  alert('Button clicked!');
});
```

---

# 🔍 Keyboard Events

| Event | When it Happens | Example |
|:------|:----------------|:--------|
| `keydown` | Key is pressed | |
| `keyup` | Key is released | |
| `keypress` | (Deprecated) Key is pressed (use `keydown`) | |

**Example:**
```ts
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});
```

---

# 🌬️ Form Events

| Event | When it Happens | Example |
|:------|:----------------|:--------|
| `submit` | Form is submitted | |
| `input` | User types into an input | |
| `change` | Input value is changed and loses focus | |
| `focus` | Element receives focus | |
| `blur` | Element loses focus | |

**Example:**
```ts
const form = document.getElementById('myForm') as HTMLFormElement;
form?.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload
  console.log('Form submitted!');
});

const input = document.getElementById('myInput') as HTMLInputElement;
input?.addEventListener('input', () => {
  console.log(`Current input: ${input.value}`);
});
```

---

# 🚨 Other Useful Events

| Event | When it Happens | Example |
|:------|:----------------|:--------|
| `resize` | Window resized | |
| `scroll` | User scrolls page or element | |
| `error` | Something failed to load | |

**Example:**
```ts
window.addEventListener('resize', () => {
  console.log('Window resized!');
});

document.addEventListener('scroll', () => {
  console.log('Page is being scrolled');
});
```

---

# ✨ Quick Notes

- Always clean up **dynamically added event listeners** if you don't need them anymore:
  ```ts
  const button = document.getElementById('dynamicButton');

  function handleClick() {
    console.log('Clicked!');
  }

  button?.addEventListener('click', handleClick);

  // Later: cleanup
  button?.removeEventListener('click', handleClick);
  ```
- **Prefer** `addEventListener` over inline `onclick`, `oninput`, etc.:
  - Separation of concerns (HTML stays clean)
  - Easier to add/remove multiple handlers
- **Custom Events** are possible! Example:
  ```ts
  const myEvent = new CustomEvent('myCustomEvent', { detail: { someData: 123 } });

  document.addEventListener('myCustomEvent', (e) => {
    console.log('Custom event triggered!', (e as CustomEvent).detail);
  });

  document.dispatchEvent(myEvent);
  ```
- **Optional Chaining** (`?.`) is often used when selecting elements:
  - This prevents errors if the element is not found.
  - Example:
    ```ts
    const button = document.getElementById('myButton');
    button?.addEventListener('click', () => console.log('Clicked!'));
    ```
  - Equivalent to:
    ```ts
    const button = document.getElementById('myButton');
    if (button) {
      button.addEventListener('click', () => console.log('Clicked!'));
    }
    ```

---

# 🔖 Mini Final Example

```html
<button id="myButton">Click me</button>
<input id="myInput" type="text" placeholder="Type here...">
<form id="myForm">
  <button type="submit">Submit</button>
</form>
```

```ts
const button = document.getElementById('myButton');
button?.addEventListener('click', () => alert('Clicked!'));

const input = document.getElementById('myInput') as HTMLInputElement;
input?.addEventListener('input', () => console.log(input.value));

const form = document.getElementById('myForm') as HTMLFormElement;
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted!');
});
```
