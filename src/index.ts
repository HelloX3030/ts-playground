// imports
import { createClient } from '@supabase/supabase-js';

// Supabase client initialization
const supabaseUrl = 'https://rrpbwwlyhynwsezgsrtu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycGJ3d2x5aHlud3NlemdzcnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMDIzMzYsImV4cCI6MjA2MTU3ODMzNn0.WXESYh7MdC6Qu0utSc9pMSvNbI5Pc1s92APg7yv3-B0';
const supabase = createClient(supabaseUrl, supabaseKey);

// Html Elements
const gallery = document.getElementById("Gallery") as HTMLDivElement;
const image_button = document.getElementById("ImageButton") as HTMLButtonElement;
const image_input = document.getElementById("ImageInput") as HTMLInputElement;
const upload_button = document.getElementById("UploadButton") as HTMLButtonElement;

// Vars
let selectedImage: File | null = null;

image_button.addEventListener("click", (e) => {
	e.preventDefault();

	const file = image_input.files?.[0];
	if (file) {
		selectedImage = file;
		const reader = new FileReader();
		reader.onload = (event) => {
			const img_data = event.target?.result as string;
			const img = document.createElement("img") as HTMLImageElement;
			img.src = img_data;
			gallery.appendChild(img);
		}
		reader.readAsDataURL(file);
	}

});

upload_button.addEventListener("click", async (e) => {
	e.preventDefault();

	if (selectedImage) {
		const filePath = `${selectedImage.name}`;

		// Upload the image to Supabase storage
		const { data, error } = await supabase.storage
			.from('images')
			.upload(filePath, selectedImage);

		if (error) {
			console.error("Error uploading image:", error.message);
		} else {
			console.log("Image uploaded successfully:", data);
			// Optionally, you can store image metadata (like the URL) in a database table here.
			// const imageUrl = `https://your-project-id.supabase.co/storage/v1/object/public/images/${filePath}`;
			// console.log("Image URL:", imageUrl);
		}
	} else {
		alert("No image selected to upload!");
	}
});
