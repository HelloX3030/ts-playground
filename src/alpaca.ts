import { Animal } from "./animal";

export class Alpaca extends Animal {
	constructor(name: string) {
		super(name);
	}

	makeSound(): string {
		return ("Yeeeeeet!");
	}
}
