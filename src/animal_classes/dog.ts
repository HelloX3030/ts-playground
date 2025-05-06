import { Animal } from "./base";

export class Dog extends Animal {
	constructor(name: string) {
		super(name);
	}

	makeSound(): string {
		return ("Woof woof");
	}
}