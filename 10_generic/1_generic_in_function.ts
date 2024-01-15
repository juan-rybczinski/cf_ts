const genericWhatValue = <T>(value: T): T => {
  return value;
};

const genericResult1 = genericWhatValue<number>(123);
let genericResult = genericWhatValue('123');

const multipleGenerics = <X, Y, Z>(x: X, y: Y, z: Z) => ({
  x, y, z,
});

const multipleGenericResult1 = multipleGenerics<number, boolean, string>(123, true, '123');
const multipleGenericResult2 = multipleGenerics(123, true, '123');

const getTuple = <X, Y>(val1: X, val2: Y) => [val1, val2] as const;
const tuple = getTuple(123, true);

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}

const instantiator = <T extends {
  new(...args: any[]): {}
}>(constructor: T, ...args: any[]) => new constructor(...args);

console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));