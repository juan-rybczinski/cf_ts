interface Animal {
  name: string;
  age: number;

  jump(): string;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다!`;
  }

  dance() {
    return `${this.name}이 춤을 춥니다!`;
  }
}

let ori: any = new Dog('오리', 3);

const instanceOfAnimal = (object: any): object is Animal => 'jump' in object;
if (instanceOfAnimal(ori)) {
  ori;
}

interface Pet {
  legCount: number;

  bark(): void;
}

class Cat implements Animal, Pet {
  name: string;
  age: number;

  legCount: number;

  constructor(name: string, age: number, legCount: number) {
    this.name = name;
    this.age = age;
    this.legCount = legCount;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다!`;
  }

  bark() {
    console.log('냐옹');
  }
}

type AnimalAndPet = Animal & Pet

class Cat2 implements AnimalAndPet {
  name: string;
  age: number;

  legCount: number;

  constructor(name: string, age: number, legCount: number) {
    this.name = name;
    this.age = age;
    this.legCount = legCount;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다!`;
  }

  bark() {
    console.log('냐옹');
  }
}

interface WrongInterface1 {
  name: string;
}

interface WrongInterface2 {
  name: number;
}

// class Person implements WrongInterface1, WrongInterface2 {
//   name: string | number;
// }

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface IdolConstructor {
  new(name: string, age: number): Idol;
}

const createIdol = (constructor: IdolConstructor, name: string, age: number) => new constructor(name, age);

console.log(createIdol(Idol, '아이유', 32));