import * as globals from './globals';

const email_input = document.getElementById("EmailInput") as HTMLInputElement;
const password_input = document.getElementById("PasswordInput") as HTMLInputElement;
const sign_in_button = document.getElementById("SignInButton") as HTMLButtonElement;
const sign_up_button = document.getElementById("SignUpButton") as HTMLButtonElement;
const sign_out_button = document.getElementById("SignOutButton") as HTMLButtonElement;
const delete_account_button = document.getElementById("DeleteAccountButton") as HTMLButtonElement;
const reset_password_button = document.getElementById("ResetPasswordButton") as HTMLButtonElement;
const send_verification_button = document.getElementById("SendVerificationButton") as HTMLButtonElement;
const user_info_button = document.getElementById("UserInfoButton") as HTMLButtonElement;
// const user_info_label = document.getElementById("UserInfoLabel") as HTMLLabelElement;
const user_info = document.getElementById("UserInfo") as HTMLLabelElement;

sign_in_button.addEventListener("click", async (e) => {
	e.preventDefault();

	const { data, error } = await globals.supabase.auth.signInWithPassword({
		email: email_input.value,
		password: password_input.value,
	});

	if (error) {
		console.error("Error signing in:", error.message);
	} else {
		console.log("Sign in successful:", data);
	}
});

sign_up_button.addEventListener("click", async (e) => {
	e.preventDefault();
	const { data, error } = await globals.supabase.auth.signUp({
		email: email_input.value,
		password: password_input.value,
	});

	if (error) {
		console.error("Error signing up:", error.message);
	} else {
		console.log("Sign up successful:", data);
	}
});

sign_out_button.addEventListener("click", async (e) => {
	e.preventDefault();

	const { error } = await globals.supabase.auth.signOut();
	if (error) {
		console.error("Error signing out:", error.message);
	} else {
		console.log("Sign out successful");
	}
});

delete_account_button.addEventListener("click", async (e) => {
	e.preventDefault();
});

reset_password_button.addEventListener("click", async (e) => {
	e.preventDefault();
});

send_verification_button.addEventListener("click", async (e) => {
	e.preventDefault();

	const { data: userData, error: userError } = await globals.supabase.auth.getUser();

	if (userError || !userData?.user) {
		alert("You must be logged in to verify your email.");
		return;
	}

	const email = userData.user.email;

	const { data, error } = await globals.supabase.auth.resend({
		type: "signup", // this will resend the signup confirmation email
		email: email!,
	});

	if (error) {
		console.error("Failed to send verification email:", error.message);
	} else {
		console.log("Verification email sent:", data);
	}
});

user_info_button.addEventListener("click", async (e) => {
	e.preventDefault();

	const { data: { user }, error } = await globals.supabase.auth.getUser();
	if (error) {
		console.error("Error fetching user info:", error.message);
		user_info.innerText = ``;
	} else {
		console.log("User info:", user);
		user_info.innerText = `${user?.email}`;
	}
});
