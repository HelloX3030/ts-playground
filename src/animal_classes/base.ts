export abstract class Animal {
	constructor(public name: string, public age: number, public species: string, public enclosure: string) { }

	abstract makeSound(): string;
	log(): void {
		console.log(`Name: ${this.name}, Age: ${this.age}, Species: ${this.species}, Enclosure: ${this.enclosure}`);
	}
}
