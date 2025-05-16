import { createClient, User } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
export let user: User | null = null;

async function fetchUser() {
	const { data } = await supabase.auth.getUser();
	user = data.user;
}
fetchUser();

supabase.auth.onAuthStateChange((event, session) => {
	if (session) {
		const user = session.user;
		console.log('User info updated:', user);

	} else {
		console.log('User logged out');
	}
});

export function getUser() {
	return user;
}
