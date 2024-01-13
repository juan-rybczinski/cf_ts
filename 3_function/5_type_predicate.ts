const isNumber = (input: any): input is number => typeof input === 'number';
const isNumber2 = (input: any): boolean => typeof input === 'number';

let number: any = 5;

if (isNumber(number)) {
  number;
}

if (isNumber2(number)) {
  number;
}

interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

const isDog = (animal: DogOrCat): animal is Dog => (animal as Dog).age !== undefined;

const dogOrCat: DogOrCat = Math.random() > 0.5 ? {name: '도지', age: 30} : {name: '오리', breed: '코리안 길냥이'};

if (isDog(dogOrCat)) {
  dogOrCat;
} else {
  dogOrCat;
}