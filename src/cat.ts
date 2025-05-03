import { Animal } from "./animal";

export class Cat extends Animal {
	constructor(name: string) {
		super(name);
	}

	makeSound(): string {
		return ("Meow meow");
	}
}
