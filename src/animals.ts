import * as Animals from "@src/animal_classes";

const enclosure_select = document.getElementById("EnclosureSelect") as HTMLInputElement;
const species_select = document.getElementById("SpeciesSelect") as HTMLInputElement;
const animal_name_input = document.getElementById("AnimalNameInput") as HTMLInputElement;
const animal_age_input = document.getElementById("AnimalAgeInput") as HTMLInputElement;
const animal_image_input = document.getElementById("AnimalImageInput") as HTMLInputElement;
const upload_button = document.getElementById("UploadButton") as HTMLButtonElement;

upload_button.addEventListener("click", async (e) => {
	e.preventDefault();

	const species = species_select.value;
	const enclosure = enclosure_select.value;
	const name = animal_name_input.value.trim();
	const age = Number(animal_age_input.value);

	if (!species) return alert("Please select a species.");
	if (!enclosure) return alert("Please select an enclosure.");
	if (!name) return alert("Please enter an animal name.");
	if (isNaN(age) || age <= 0) return alert("Please enter a valid age.");
	if (animal_image_input.files?.length === 0) return alert("Please select an image.");

	let animal;

	if (species === "Alpaca")
		animal = new Animals.Alpaca(name, age, enclosure);
	else if (species === "Bird")
		animal = new Animals.Bird(name, age, enclosure);
	else if (species === "Cat")
		animal = new Animals.Cat(name, age, enclosure);
	else if (species === "Dog")
		animal = new Animals.Dog(name, age, enclosure);
	else if (species === "Fish")
		animal = new Animals.Fish(name, age, enclosure);
	else
		return alert("Invalid species selected.");

	animal.log();
	alert(animal.makeSound());
	animal.uploadToDatabase();
});
