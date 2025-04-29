const gallery = document.getElementById("Gallery") as HTMLDivElement;
const image_button = document.getElementById("ImageButton") as HTMLButtonElement;
const image_input = document.getElementById("ImageInput") as HTMLInputElement;

image_button.addEventListener("click", (e) => {
	e.preventDefault();

	const file = image_input.files?.[0];
	if (file) {
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
