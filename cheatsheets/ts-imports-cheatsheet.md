# TypeScript Imports & Exports Cheat Sheet

A compact guide to managing multiple class exports, re-exports, and namespace-like imports in TypeScript.

---

## 📦 Basic Exports

Each file can export one or multiple classes:

```ts
// Animal.ts
export abstract class Animal {
    constructor(public name: string) {}
    abstract makeSound(): string;
}

// Cat.ts
import { Animal } from './Animal';

export class Cat extends Animal {
    makeSound(): string {
        return "Meow meow";
    }
}
```

---

## 📥 Importing Multiple Exports

Instead of importing classes one by one:

```ts
import { Animal } from './Animal';
import { Cat } from './Cat';
import { Dog } from './Dog';
```

✅ You can import multiple classes at once:

```ts
import { Animal, Cat, Dog } from './animals';
```

---

## 📁 Barrel File (Re-Exporting from a Folder)

You can't "export to a folder", but you can create a **barrel file** to group exports:

### Folder Structure:

```
animals/
├── Animal.ts
├── Cat.ts
├── Dog.ts
└── index.ts
```

### `index.ts`:

```ts
export * from './Animal';
export * from './Cat';
export * from './Dog';
```

### Now you can import like this:

```ts
import { Cat, Dog } from './animals';
```

---

## 🧱 Namespace-Like Import

You can group everything under one name using a wildcard import:

```ts
import * as Animals from './animals';

const myCat = new Animals.Cat("Whiskers");
```

🔸 This is like C++ namespaces: `Animals.Cat` ⬄ `namespace::Cat`

🔸 All exported classes/functions become properties on the `Animals` object.

---

## ✅ When to Use What

| Style                | Syntax                                    | Best For                                         |
|---------------------|-------------------------------------------|--------------------------------------------------|
| Named import         | `import { Cat } from './animals';`        | Simplicity, tree-shaking, clarity                |
| Namespace import     | `import * as Animals from './animals';`   | Grouping related things under one object         |
| Re-export (barrel)   | `export * from './Cat';` in `index.ts`    | Organizing modules and simplifying imports       |

---

## 🔄 Full Example

```ts
// animals/Alpaca.ts
import { Animal } from './Animal';

export class Alpaca extends Animal {
    makeSound(): string {
        return "Yeeeeeet!";
    }
}
```

```ts
// animals/index.ts
export * from './Animal';
export * from './Alpaca';
export * from './Bird';
export * from './Cat';
export * from './Dog';
export * from './Fish';
```

```ts
// main.ts
import { Cat, Dog } from './animals';
const myDog = new Dog("Rex");
console.log(myDog.makeSound()); // "Woof woof"

import * as Animals from './animals';
const myFish = new Animals.Fish("Nemo");
console.log(myFish.makeSound()); // "Blub blub"
```

---

Happy Coding! 🚀
