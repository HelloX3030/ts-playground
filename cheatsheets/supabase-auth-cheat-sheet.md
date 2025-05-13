# 🧠 Supabase Authentication Cheat Sheet

## 🔐 What is Supabase Auth?
Supabase Auth is a full user management system built on top of PostgreSQL. It supports:
- Email/password login
- Magic links
- OAuth providers (Google, GitHub, etc.)
- Third-party SSO (SAML, OIDC)

---

## 🚀 Getting Started

### 📦 Install Supabase JS Client
```bash
npm install @supabase/supabase-js
```

### 🔧 Initialize Supabase
```ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://<your-project>.supabase.co', '<anon-or-service-role-key>')
```

---

## 👤 Auth Methods

### 📧 Sign Up (Email & Password)
```ts
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securepassword',
})
```

### 🔐 Sign In
```ts
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'securepassword',
})
```

### ✨ Sign In with Magic Link
```ts
const { data, error } = await supabase.auth.signInWithOtp({
  email: 'user@example.com',
})
```

### 🔓 Sign Out
```ts
const { error } = await supabase.auth.signOut()
```

### 🔁 Refresh Session (usually automatic)
```ts
const { data, error } = await supabase.auth.refreshSession()
```

---

## 🪪 Get Current User
```ts
const { data: { user } } = await supabase.auth.getUser()
```

## 🧾 Get Session
```ts
const { data: { session } } = await supabase.auth.getSession()
```

---

## 🛠 Update User Data
```ts
const { data, error } = await supabase.auth.updateUser({
  data: { full_name: 'John Doe' }
})
```

## 🔒 Reset Password

### Send Reset Email
```ts
const { data, error } = await supabase.auth.resetPasswordForEmail('user@example.com')
```

### Update Password After Redirect
```ts
const { data, error } = await supabase.auth.updateUser({ password: 'new-password' })
```

---

## 🔑 OAuth Sign In
```ts
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google', // or 'github', 'discord', etc.
})
```

---

## 🧪 Useful Notes

### 🔍 Auth tokens
- Supabase uses **JWT** tokens.
- Tokens are stored in **localStorage** by default.
- Auto refresh is handled by the SDK (but can be customized).

### 🔄 Auth State Change Listener
```ts
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth state changed:', event, session)
})
```

---

## 🧰 RLS (Row Level Security)
- Auth integrates with RLS in your Postgres DB.
- Use `auth.uid()` inside policies to secure user data.

```sql
-- Example: Only allow users to see their own data
CREATE POLICY "Users can view their own data"
  ON profiles FOR SELECT
  USING (auth.uid() = id);
```

---

## 📚 Resources
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Supabase JS SDK](https://supabase.com/docs/reference/javascript/auth-signinwithpassword)---

## ⚙️ Setup Instructions

### 1. Create a Supabase Project
- Go to [https://supabase.com](https://supabase.com)
- Create a new project and note the **Project URL** and **anon public API key**

### 2. Enable Authentication Providers
- In the dashboard: **Authentication > Providers**
- Enable the methods you want (e.g., Email, Google, GitHub)

### 3. Customize Email Templates (Optional)
- Go to **Authentication > Templates**
- Modify the emails for password reset, magic link, confirmation, etc.

### 4. Set Up RLS (Row Level Security)
If you want to protect user-specific data, enable RLS on your tables and add policies.

```sql
-- Allow users to view only their own data
CREATE POLICY "Users can view their own data"
  ON profiles FOR SELECT
  USING (auth.uid() = id);
```

---

## 🔁 Session Persistence and Handling

### ✅ Will the user stay signed in on page refresh or navigation?
**Yes** — Supabase automatically persists the session using `localStorage`.

- It stores `access_token`, `refresh_token`, and `user` info in the browser.
- On refresh, Supabase rehydrates the session automatically.

### 📦 How to get the current session

```ts
const { data: { session }, error } = await supabase.auth.getSession()

if (session) {
  console.log('User is still signed in:', session.user)
} else {
  console.log('User is not signed in')
}
```

### 🔄 When and why to call `getSession()`?
- On app load (e.g., in your root component or main.ts file) to check if a user is already signed in.
- When you want to manually check the current auth state.
- To access the `access_token` or `user` object.

### 🧠 Recommended Pattern

```ts
async function initializeAuth() {
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    // User is signed in — set up UI or fetch user-specific data
    console.log('Welcome back!', session.user)
  } else {
    // No session found — show login screen or redirect
    console.log('Please log in')
  }

  // Listen for auth changes
  supabase.auth.onAuthStateChange((_event, session) => {
    if (session) {
      console.log('User just signed in:', session.user)
    } else {
      console.log('User signed out')
    }
  })
}
```

- Call this function during app initialization (e.g., on `window.onload` or inside your main component).

---