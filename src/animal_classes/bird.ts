import { Animal } from "./base";

export class Bird extends Animal {
	constructor(name: string) {
		super(name);
	}

	makeSound(): string {
		return ("Tweet tweet");
	}
}
