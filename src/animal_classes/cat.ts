import { Animal } from "./base";

export class Cat extends Animal {
	constructor(name: string, age: number, enclosure: string) {
		super(name, age, "Cat", enclosure);
	}

	makeSound(): string {
		return ("Meow meow");
	}
}
