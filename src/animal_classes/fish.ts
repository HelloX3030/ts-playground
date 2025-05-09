import { Animal } from "./base";

export class Fish extends Animal {
	constructor(name: string, age: number, enclosure: string) {
		super(name, age, "Fish", enclosure);
	}

	makeSound(): string {
		return ("Blub blub");
	}
}
