class Person {
  name: string;
  age: number = 23;
  pet?: string;
  petAge: number | undefined;

  constructor(name: string, pet?: string, petAge?: number) {
    this.name = name;
    this.pet = pet;
    this.petAge = petAge;
  }
}

class RouteStack {
  stack!: string[];

  constructor() {
    this.initialize();
  }

  initialize() {
    this.stack = [];
  }
}

const routeStack = new RouteStack();
console.log(routeStack);