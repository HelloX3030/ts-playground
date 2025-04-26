import { Animal } from "./animal";

export class Fish extends Animal {
	constructor(name: string) {
		super(name);
	}

	makeSound(): string {
		return ("Blub blub");
	}
}
