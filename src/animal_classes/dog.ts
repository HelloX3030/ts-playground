import { Animal } from "./base";

export class Dog extends Animal {
	constructor(name: string, age: number, enclosure: string) {
		super(name, age, "Dog", enclosure);
	}

	makeSound(): string {
		return ("Woof woof");
	}
}