import { Animal } from "./base";

export class Cat extends Animal {
	constructor(name: string) {
		super(name);
	}

	makeSound(): string {
		return ("Meow meow");
	}
}
