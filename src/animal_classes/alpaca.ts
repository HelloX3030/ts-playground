import { Animal } from "./base";

export class Alpaca extends Animal {
	constructor(name: string, age: number, enclosure: string) {
		super(name, age, "Alpaca", enclosure);
	}

	makeSound(): string {
		return ("Yeeeeeet!");
	}
}
