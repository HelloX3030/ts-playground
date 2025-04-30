# TypeScript Basics Cheat Sheet

## 📦 Setup
```bash
npm install -g typescript     # Install TypeScript globally
tsc --init                    # Initialize tsconfig.json
tsc file.ts                   # Compile to JavaScript
```

---

## ✅ What is TypeScript?
TypeScript is a **superset of JavaScript** that adds **static typing** and **type checking** at compile time.

---

## 🧱 Basic Types
```ts
let isDone: boolean = false;
let age: number = 25;
let userName: string = "Alice";
let data: any = 42; // Avoid if possible
let nothing: undefined = undefined;
let empty: null = null;

let ids: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
```

---

## 🧾 Tuples
```ts
let person: [string, number] = ["Alice", 30];
```

---

## 🎯 Enums
```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
```

---

## 🎭 Type Aliases & Interfaces
```ts
type User = {
  name: string;
  age: number;
};

interface Product {
  id: number;
  title: string;
}
```

---

## 🔀 Union & Intersection Types
```ts
let value: string | number;
type Admin = { role: string };
type Employee = { department: string };
type Manager = Admin & Employee;
```

---

## 🔒 Type Assertions (Type Casting)
```ts
let someValue: any = "hello";
let strLength: number = (someValue as string).length;
```

---

## 🧮 Functions
```ts
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): void => {
  console.log("Hello " + name);
}

function log(message: string, userId?: string) {
  console.log(message, userId);
}
```

---

## 🔁 Loops & Control Structures
```ts
// if-else
if (isDone) {
  console.log("Done");
} else {
  console.log("Not done");
}

// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// switch
let color: string = "blue";
switch (color) {
  case "red":
    console.log("Red");
    break;
  case "blue":
    console.log("Blue");
    break;
  default:
    console.log("Unknown color");
}

// for...of
const nums = [1, 2, 3];
for (const num of nums) {
  console.log(num);
}

// for...in
const user = { name: "Alice", age: 25 };
for (const key in user) {
  console.log(key, user[key as keyof typeof user]);
}
```

---

## 🧱 Classes
```ts
class Animal {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is moving`);
  }
}
```

---

## ⚙️ Generics
```ts
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");
```

---

## 🛑 Type Guards
```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

---

## 📁 Modules (ES-style)
```ts
// file: user.ts
export interface User {
  name: string;
}

// file: main.ts
import { User } from "./user";
```

---

## 🧰 Utility Types
```ts
Partial<T>       // All optional
Required<T>      // All required
Readonly<T>      // All read-only
Pick<T, K>       // Pick subset of keys
Omit<T, K>       // Omit keys
Record<K, T>     // Create map-like object
```

