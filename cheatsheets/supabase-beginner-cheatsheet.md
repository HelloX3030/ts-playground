# 🧠 Supabase Beginner Cheat Sheet (With Full Examples)

This cheat sheet explains how to use Supabase with TypeScript and HTML in a beginner-friendly way. It includes full examples for common tasks.

---

## 🔧 1. Setup (How to Start)

### Step 1: Install Supabase JS Client

Run in terminal:
```bash
npm install @supabase/supabase-js
```

### Step 2: Create Supabase Client

```ts
// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-public-anon-key'; // Found in Supabase Project > Project Settings > API
export const supabase = createClient(supabaseUrl, supabaseKey);
```

---

## 📥 2. Insert Data (Add a New Row to a Table)

### Example: Add a person to the "people" table

```ts
import { supabase } from './supabaseClient';

async function addPerson() {
  const { data, error } = await supabase.from('people').insert([
    { name: 'Alice', age: 25 }
  ]);

  if (error) console.error('Insert error:', error);
  else console.log('Insert success:', data);
}

addPerson();
```

---

## 📤 3. Fetch Data (Get Rows from a Table)

### Example: Get all people from "people" table

```ts
async function fetchPeople() {
  const { data, error } = await supabase.from('people').select('*');

  if (error) console.error('Fetch error:', error);
  else console.log('People:', data);
}

fetchPeople();
```

---

## ✏️ 4. Update Data (Change a Row)

### Example: Change Alice's age to 26

```ts
async function updatePerson() {
  const { data, error } = await supabase
    .from('people')
    .update({ age: 26 })
    .eq('name', 'Alice');

  if (error) console.error('Update error:', error);
  else console.log('Update success:', data);
}

updatePerson();
```

---

## ❌ 5. Delete Data

### Example: Remove the person named Alice

```ts
async function deletePerson() {
  const { data, error } = await supabase
    .from('people')
    .delete()
    .eq('name', 'Alice');

  if (error) console.error('Delete error:', error);
  else console.log('Delete success:', data);
}

deletePerson();
```

---

## 🔐 6. Auth (Sign Up, Sign In, Get User)

### Sign Up

```ts
const { data, error } = await supabase.auth.signUp({
  email: 'test@example.com',
  password: 'password123',
});

if (error) console.error('Sign up error:', error);
else console.log('Sign up success:', data);
```

### Sign In

```ts
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'test@example.com',
  password: 'password123',
});

if (error) console.error('Login error:', error);
else console.log('Login success:', data);
```

### Get Current User

```ts
const { data: { user } } = await supabase.auth.getUser();
console.log('Current user:', user);
```

---

## 📁 7. Upload a File to Storage

### Example: Upload a profile picture

```ts
const fileInput = document.querySelector('input[type="file"]');

fileInput?.addEventListener('change', async (event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(`public/${file.name}`, file);

  if (error) console.error('Upload error:', error);
  else console.log('Uploaded:', data);
});
```

---

## 🧠 8. Call a Supabase Edge Function

### Example: Call a deployed function called `hello-world`

```ts
const { data, error } = await supabase.functions.invoke('hello-world', {
  body: { name: 'Alice' },
});

if (error) console.error('Function error:', error);
else console.log('Function result:', data);
```

---

## 📚 Tips

- Always check `error` in responses
- Protect private keys (never use service key in frontend)
- Use the Supabase Dashboard to see tables and manage data
- Enable **Row Level Security (RLS)** for secure user-based access

---

## 📘 Learn More

- [Supabase Docs](https://supabase.com/docs)
- [JavaScript API Reference](https://supabase.com/docs/reference/javascript)

---