import { Animal } from "./animal";

export class Bird extends Animal {
	constructor(name: string) {
		super(name);
	}

	makeSound(): string {
		return ("Tweet tweet");
	}
}
