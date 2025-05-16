import * as globals from '@src/globals.ts';

export abstract class Animal {
	constructor(
		public name: string,
		public age: number,
		public species: string,
		public enclosure: string) { }

	abstract makeSound(): string;
	log(): void {
		console.log(`Name: ${this.name}, Age: ${this.age}, Species: ${this.species}, Enclosure: ${this.enclosure}`);
	}

	async uploadToDatabase(): Promise<void> {
		const { data, error } = await globals.supabase
			.from('animals')
			.insert([
				{
					name: this.name,
					age: this.age,
					species: this.species,
					user_id: globals.getUser()?.id,
				}
			]);

		if (error) {
			console.error("Error uploading animal:", error.message);
		} else {
			console.log("Animal uploaded successfully:", data);
		}
	}
}
