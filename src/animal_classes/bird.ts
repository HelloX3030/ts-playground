import { Animal } from "./base";

export class Bird extends Animal {
	constructor(name: string, age: number, enclosure: string) {
		super(name, age, "Bird", enclosure);
	}

	makeSound(): string {
		return ("Tweet tweet");
	}
}
