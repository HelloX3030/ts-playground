# 🧠 Supabase Cheat Sheet

This cheat sheet covers common Supabase tasks using the `@supabase/supabase-js` client in JavaScript/TypeScript.

---

## 🔧 Setup

```bash
npm install @supabase/supabase-js
```

```ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'public-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);
```

---

## 📥 Insert Data

```ts
const { data, error } = await supabase
  .from('people')
  .insert([{ name: 'Alice', age: 25 }]);
```

---

## 📤 Fetch Data (SELECT)

```ts
const { data, error } = await supabase
  .from('people')
  .select('*');
```

With filters:

```ts
const { data } = await supabase
  .from('people')
  .select('*')
  .eq('age', 25);
```

---

## ✏️ Update Data

```ts
const { data, error } = await supabase
  .from('people')
  .update({ age: 26 })
  .eq('name', 'Alice');
```

---

## ❌ Delete Data

```ts
const { data, error } = await supabase
  .from('people')
  .delete()
  .eq('name', 'Alice');
```

---

## 🔐 Authentication

### Sign Up

```ts
const { user, session, error } = await supabase.auth.signUp({
  email: 'test@example.com',
  password: 'password123',
});
```

### Sign In

```ts
const { user, session, error } = await supabase.auth.signInWithPassword({
  email: 'test@example.com',
  password: 'password123',
});
```

### Get Current User

```ts
const { data: { user } } = await supabase.auth.getUser();
```

### Sign Out

```ts
const { error } = await supabase.auth.signOut();
```

---

## 🧾 Row-Level Security (RLS)

- Enable in Supabase Dashboard under **Authentication > Policies**
- Create SQL policies to control access per user

Example SQL policy:
```sql
CREATE POLICY "Users can access their own data"
  ON people
  FOR SELECT USING (auth.uid() = user_id);
```

---

## 📁 File Storage

### Upload a File

```ts
const { data, error } = await supabase.storage
  .from('avatars')
  .upload('public/avatar1.png', file);
```

### Get Public URL

```ts
const { data } = supabase.storage
  .from('avatars')
  .getPublicUrl('public/avatar1.png');
```

---

## 🧠 Edge Functions

### Deploy a Function

```bash
supabase functions new hello-world
supabase functions deploy hello-world
```

### Call a Function

```ts
const { data, error } = await supabase.functions.invoke('hello-world', {
  body: { message: 'Hi!' },
});
```

---

## 📊 Realtime Subscriptions

```ts
supabase
  .channel('custom-all-channel')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'people' }, (payload) => {
    console.log('Change received!', payload);
  })
  .subscribe();
```

---

## 🛠️ Admin Features (Requires Service Key)

Use service key (from Dashboard) for admin-level actions (e.g. server-to-server API calls). Never expose this in client code.

---

## 📚 Resources

- Docs: https://supabase.com/docs
- JS Client: https://supabase.com/docs/reference/javascript

---