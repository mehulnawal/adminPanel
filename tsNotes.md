# 📘 TypeScript Complete Notes (Focused on MERN Projects)

> These notes are designed to be **practical, exhaustive, and MERN-focused**.
> You can use this as a **daily reference** while building real projects.

---

## 📌 Why TypeScript?

TypeScript (TS) is a **superset of JavaScript** that adds **static typing**.

### Problems TS Solves

* ❌ Runtime errors due to wrong data types
* ❌ Unclear object shapes
* ❌ Hard-to-maintain large codebases
* ❌ Poor IntelliSense in JS

### What TS Gives You

* ✅ Compile-time error checking
* ✅ Better IDE autocomplete
* ✅ Self-documenting code
* ✅ Safer refactoring

👉 **Use TS when:**

* Project is medium to large
* Working in a team
* Building APIs (Node/Express)
* Writing reusable components (React)

---

## ⚙️ Basic TypeScript Setup (MERN)

### Frontend (React)

```bash
npx create-react-app client --template typescript
```

### Backend (Node + Express)

```bash
npm init -y
npm install typescript ts-node-dev @types/node @types/express
npx tsc --init
```

---

## 🔤 Basic Types

```ts
let username: string = "Ishu";
let age: number = 23;
let isLoggedIn: boolean = true;
```

### ❗ Edge Case

```ts
let value: string;
value = 10; // ❌ Error
```

👉 **Use when:** variable type is fixed

---

## 📦 Arrays

```ts
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["A", "B"];
```

### Mixed Array (Avoid if possible)

```ts
let data: (string | number)[] = ["A", 1];
```

👉 **Use union only if required**

---

## 🔁 Tuples (Fixed Length Arrays)

```ts
let user: [string, number] = ["Ishu", 23];
```

### Edge Case

```ts
user.push(30); // Allowed but NOT recommended
```

👉 **Avoid tuples in APIs**, use interfaces instead

---

## 🧩 Enums

```ts
enum Role {
  ADMIN,
  USER,
  GUEST
}
```

### String Enum (Preferred)

```ts
enum Status {
  SUCCESS = "success",
  ERROR = "error"
}
```

👉 **Use enums for fixed choices (roles, status)**

---

## ❓ Any vs Unknown

### any (Avoid)

```ts
let data: any;
data = 10;
data = "text";
```

### unknown (Safer)

```ts
let value: unknown;

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

👉 **Use `unknown` instead of `any`**

---

## 🚫 Void & Never

### void

```ts
function log(msg: string): void {
  console.log(msg);
}
```

### never

```ts
function throwError(): never {
  throw new Error("Crash");
}
```

👉 **never = function never completes**

---

## 🧱 Object Types

```ts
const user: { name: string; age: number } = {
  name: "Ishu",
  age: 23
};
```

### ❌ Bad Practice

```ts
const user: object = {}; // No structure
```

---

## 🧩 Type Alias

```ts
type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
};
```

### Optional Property

```ts
const user: User = { name: "Ishu", age: 23 };
```

👉 **Use type for:**

* Union types
* Simple object definitions

---

## 🧩 Interface (MOST IMPORTANT FOR MERN)

```ts
interface IUser {
  name: string;
  email: string;
  password?: string;
}
```

### Extend Interface

```ts
interface Admin extends IUser {
  role: "admin";
}
```

👉 **Use interface for:**

* API request/response
* MongoDB models
* Props & state

---

## ⚔️ Type vs Interface (WHEN TO USE)

| Use Case     | type | interface |
| ------------ | ---- | --------- |
| Object shape | ✅    | ✅         |
| Extend       | ⚠️   | ✅         |
| Union        | ✅    | ❌         |
| React Props  | ⚠️   | ✅         |
| MERN APIs    | ❌    | ✅         |

👉 **Rule:**

* Use **interface** for objects
* Use **type** for unions & primitives

---

## 🔗 Union Types

```ts
let id: string | number;
```

### API Example

```ts
function getUser(id: string | number) {}
```

---

## 🔀 Intersection Types

```ts
type Admin = User & { role: string };
```

---

## 🔧 Functions

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### Optional Params

```ts
function greet(name?: string) {}
```

### Default Params

```ts
function greet(name: string = "Guest") {}
```

---

## 🧠 Generics (ADVANCED & IMPORTANT)

```ts
function identity<T>(value: T): T {
  return value;
}
```

### MERN Example

```ts
function apiResponse<T>(data: T) {
  return { success: true, data };
}
```

---

## 📁 TypeScript with Express (Backend)

### Request & Response

```ts
import { Request, Response } from "express";

const getUser = (req: Request, res: Response) => {
  res.json({ success: true });
};
```

### Custom Request Body

```ts
interface CreateUserBody {
  name: string;
  email: string;
}

const createUser = (
  req: Request<{}, {}, CreateUserBody>,
  res: Response
) => {}
```

---

## 🍃 TypeScript with MongoDB (Mongoose)

```ts
interface IUser {
  name: string;
  email: string;
}
```

```ts
const UserSchema = new Schema<IUser>({
  name: String,
  email: String
});
```

---

## ⚛️ TypeScript with React

### Props

```ts
interface ButtonProps {
  title: string;
  onClick: () => void;
}
```

### State

```ts
const [count, setCount] = useState<number>(0);
```

### Event Handling

```ts
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
```

---

## ❗ Common Mistakes

❌ Using `any`
❌ Using `object`
❌ Ignoring strict mode
❌ Overusing union types

---

## ✅ Best Practices (REAL PROJECTS)

* Enable `strict: true`
* Prefer `interface`
* Avoid `any`
* Type API responses
* Share types between frontend & backend

---

## 🎯 Final MERN Rule of Thumb

| Layer         | What to Use |
| ------------- | ----------- |
| React Props   | interface   |
| API Request   | interface   |
| Mongo Schema  | interface   |
| Utility Types | type        |
| Constants     | enum        |

---

📌 **If you want:**

* Advanced TS patterns
* Error handling patterns
* Shared types in monorepo
* Real MERN project structure

Just tell me 👍
