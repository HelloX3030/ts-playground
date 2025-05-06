# TypeScript Classes Cheat Sheet

A quick guide to defining, using, and importing classes in TypeScript.

---

## 🐾 Basic Class Definition

```ts
class Animal {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is moving`);
  }
}
```

- `public name: string` automatically creates and assigns a property.
- `move()` is an instance method.

---

## 🧪 Creating and Using Instances

```ts
const myAnimal = new Animal("Leo");

console.log(myAnimal.name); // "Leo"
myAnimal.move();            // "Leo is moving"
```

---

## 🛠 Adding More Functionality

```ts
class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

const dog = new Dog("Rex");
dog.move(); // "Rex is moving"
dog.bark(); // "Woof!"
```

---

## 🔄 Class Modifiers

| Modifier | Meaning                              |
|----------|--------------------------------------|
| `public` | (default) Accessible anywhere        |
| `private`| Only accessible inside the class     |
| `protected`| Accessible in class and subclasses |
| `readonly`| Can be set once, then read-only     |
| `static` | Belongs to the class, not instance   |
| `abstract`| Base class that can't be instantiated |

---

## 📤 Exporting and Importing

### File: `Animal.ts`

```ts
export class Animal {
  constructor(public name: string) {}
  move(): void {
    console.log(`${this.name} is moving`);
  }
}
```

### File: `main.ts`

```ts
import { Animal } from './Animal';

const a = new Animal("Milo");
a.move(); // "Milo is moving"
```

---

## 🧠 Tips

- Use classes to model real-world entities.
- Prefer `readonly` for config-like properties.
- Use `abstract` classes to define interfaces for derived classes.

---

## 📚 Related Concepts

| Concept         | Equivalent In C++      |
|-----------------|------------------------|
| `constructor`   | Class constructor      |
| `extends`       | `class Derived : Base` |
| `super()`       | `BaseClass::Base()`    |
| `readonly`      | `const` data member    |
| `abstract`      | Pure virtual class     |

---

Happy class-ing! 🚀
