# 🛡️ Supabase Row-Level Security (RLS) Cheat Sheet

## 🔍 What is RLS?
Row-Level Security (RLS) allows you to control which rows in a database table a user can read or write, based on custom policies.

---

## ✅ Enabling RLS
```sql
ALTER TABLE your_table ENABLE ROW LEVEL SECURITY;
```

---

## 🚫 Default Deny Rule
Once RLS is enabled, **no one can access the table unless a policy allows it**.

---

## 📜 Creating a Policy
```sql
CREATE POLICY "Your policy name"
  ON your_table
  FOR [SELECT | INSERT | UPDATE | DELETE]
  TO [public | authenticated | service_role | anon | <your_role>]
  USING (your_expression);
```

- `USING (expr)` — who can access data (for SELECT, DELETE).
- `WITH CHECK (expr)` — what new data is allowed (for INSERT, UPDATE).

---

## 👥 Common Roles
- `authenticated` — logged-in users.
- `anon` — not logged-in users.
- `service_role` — bypasses RLS, used by the backend.
- `public` — all roles.

---

## 🔐 Prevent Access to Other Users' Data

### Example Table
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users (id),
  username TEXT
);
```

### Policy to Allow User to Access Only Their Own Row
```sql
CREATE POLICY "Users can view their own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());
```

### Insert / Update Policy
```sql
CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());
```

---

## 🧠 Functions
- `auth.uid()` — returns the UUID of the currently logged-in user.
- `auth.role()` — returns the role (`authenticated`, `anon`, etc).

---

## 🧪 Testing Policies
- Use the Supabase Dashboard → Table Editor → "Policies" tab.
- Use the "Test Policy" tab with simulated JWT.

---

## 🛠️ Best Practices
- Enable RLS early in development.
- Create policies for **each operation** (SELECT, INSERT, UPDATE, DELETE).
- Combine with Supabase Auth for fine-grained control.
- Always test with real user sessions (or simulated JWTs).

---

## 🔗 Resources
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [RLS Docs](https://supabase.com/docs/learn/auth-deep-dive/auth-policies)
- [SQL Policy Reference](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)


---

# 🧰 Common Use Case: Users Can Only Access Their Own Data

## 1. Table Setup Example

```sql
CREATE TABLE animals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  user_id UUID REFERENCES auth.users(id)  -- references the logged-in user
);
```

## 2. Inserting from the Frontend

```ts
const { data: { user } } = await supabase.auth.getUser();

await supabase.from('animals').insert({
  name: 'Fluffy',
  user_id: user.id
});
```

## 3. Enabling RLS

```sql
ALTER TABLE animals ENABLE ROW LEVEL SECURITY;
```

## 4. Policies

### 🔒 Only Select Own Rows

```sql
CREATE POLICY "Users can select their own animals"
  ON animals
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());
```

### ✍️ Only Insert Rows With Own User ID

```sql
CREATE POLICY "Users can insert animals with their own user_id"
  ON animals
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());
```

### 📝 Only Update Own Rows

```sql
CREATE POLICY "Users can update their own animals"
  ON animals
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());
```

### ❌ Only Delete Own Rows

```sql
CREATE POLICY "Users can delete their own animals"
  ON animals
  FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());
```

## 🧠 Summary

| Step | Description |
|------|-------------|
| 1. | Add `user_id` to your table. |
| 2. | Insert `user_id` from the frontend using `supabase.auth.getUser()`. |
| 3. | Enable RLS for the table. |
| 4. | Add `SELECT`, `INSERT`, `UPDATE`, `DELETE` policies that compare `user_id = auth.uid()`. |
| 5. | Test it in the Supabase Dashboard or frontend app. |

---

# 🔐 Supabase Policy Mode: PERMISSIVE vs RESTRICTIVE

## `AS PERMISSIVE`

- This is the **default** mode for policies in Supabase (and PostgreSQL).
- If **any one policy** allows an action, access is granted.
- Useful when combining multiple policies that provide different access paths.

### Example
```sql
CREATE POLICY "Allow access to own data"
  ON animals
  FOR SELECT
  TO authenticated
  AS PERMISSIVE
  USING (user_id = auth.uid());

CREATE POLICY "Allow access to public data"
  ON animals
  FOR SELECT
  TO authenticated
  AS PERMISSIVE
  USING (is_public = true);
```
✅ A user can access a row if either condition is true.

---

## `AS RESTRICTIVE`

- Access is only granted if **all restrictive policies** match.
- This mode allows **fine-grained control** over multi-condition access.

### Example
```sql
CREATE POLICY "Restrict to own data"
  ON animals
  FOR SELECT
  TO authenticated
  AS RESTRICTIVE
  USING (user_id = auth.uid());

CREATE POLICY "Restrict to approved users"
  ON animals
  FOR SELECT
  TO authenticated
  AS RESTRICTIVE
  USING (approved = true);
```
✅ A user can access a row **only if** they own it **and** it's approved.

---

## 🔁 Summary

| Mode         | Access Granted If…                             |
|--------------|------------------------------------------------|
| PERMISSIVE   | **Any** policy returns `true`                  |
| RESTRICTIVE  | **All** policies must return `true`            |

## 🔗 More Resources
- Supabase RLS Policies: https://supabase.com/docs/learn/auth-deep-dive/auth-policies
- PostgreSQL RLS: https://www.postgresql.org/docs/current/ddl-rowsecurity.html
- Supabase JS Auth Docs: https://supabase.com/docs/reference/javascript/auth-getuser