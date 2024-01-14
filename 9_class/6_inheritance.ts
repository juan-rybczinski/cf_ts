class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(`${this.name}이 춤을 춥니다!`);
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  sing() {
    console.log(`${this.name}이 노래를 부릅니다!`);
  }
}

const cf = new Parent('코드팩토리');
const ahri = new Child('아리', 12);

cf.dance();
// cf.sing();

let person: Parent;
person = cf;
person = ahri;

let person2: Child;
person2 = ahri;
// person2 = cf;

class Parent2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
}

const cf2 = new Parent2('코드팩토리');
const ahri2 = new Child2('아리', 20);

let child2: Child2;
child2 = ahri2;
child2 = cf2;