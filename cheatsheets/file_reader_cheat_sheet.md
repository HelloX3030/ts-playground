# TypeScript FileReader Cheat Sheet

## 📘 What is `FileReader`?
`FileReader` is a web API provided by the browser to read files (like text or images) from `<input type="file">` elements. It works in the browser (not in Node.js).

Use cases:
- Reading text files (e.g., .txt, .csv)
- Previewing images before upload
- Reading binary data for processing

---

## 🔰 Basic Setup
```html
<input type="file" id="fileInput" />
```

```ts
const input = document.getElementById("fileInput") as HTMLInputElement;

input.addEventListener("change", () => {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      console.log("File content:", reader.result);
    };

    reader.readAsText(file); // or readAsDataURL, etc.
  }
});
```

---

## 📂 FileReader Methods
```ts
reader.readAsText(file);       // For text files
reader.readAsDataURL(file);    // For images & media (base64 string)
reader.readAsArrayBuffer(file);// For binary files
reader.readAsBinaryString(file); // Deprecated, use ArrayBuffer
```

---

## 📡 FileReader Events
```ts
reader.onload      // Fired when reading is complete
reader.onerror     // Fired on error
reader.onabort     // Reading aborted
reader.onloadstart // Start of read
reader.onloadend   // Read completed (success or fail)
reader.onprogress  // Progress info (useful for large files)
```

---

## 📄 Reading a Text File
```ts
reader.readAsText(file);
reader.onload = () => {
  const content = reader.result as string;
  console.log(content);
};
```

---

## 🖼️ Reading an Image as Data URL (Preview)
```ts
reader.readAsDataURL(file);
reader.onload = () => {
  const img = document.createElement("img");
  img.src = reader.result as string;
  document.body.appendChild(img);
};
```

---

## 💾 Reading as ArrayBuffer (Binary Data)
```ts
reader.readAsArrayBuffer(file);
reader.onload = () => {
  const buffer = reader.result as ArrayBuffer;
  // e.g., pass to WebAssembly or DataView
  console.log(new Uint8Array(buffer));
};
```

---

## ⚠️ Common Gotchas
- FileReader is **asynchronous** — you must use `onload` to get the result.
- Works only in the **browser**, not in Node.js.
- Reading large files may take noticeable time — use `onprogress` for feedback.

---

## ✅ Example: Display Text File Content
```html
<input type="file" id="fileInput" />
<pre id="output"></pre>
```
```ts
const input = document.getElementById("fileInput") as HTMLInputElement;
const output = document.getElementById("output") as HTMLPreElement;

input.addEventListener("change", () => {
  const file = input.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    output.textContent = reader.result as string;
  };
  reader.readAsText(file);
});
```

